angular
  .module('app')
  .component('transactionCreatorPage', {
    templateUrl: 'pages/transaction-creator/transaction-creator.html',
    controller: TransactionCreatorPageController,
    controllerAs: 'vm',
    bindings: {}
  });

function TransactionCreatorPageController(lodash, bitcoinNetworks) {
  var vm = this;

  vm.networks = bitcoinNetworks;
  vm.network = lodash.find(vm.networks, ['label', 'BTC (Bitcoin)']);
  vm.keyPair = {};
  vm.keyValid = false;
  vm.inputTxVout = 0;
  vm.inputAmount = 0;
  vm.outputAmount = 0;
  vm.changeAmount = 0;

  vm.importFromWif = function () {
    vm.error = null;
    vm.keyValid = false;
    var network = vm.network.config;
    try {
      var decimalKey = customImportFromWif(vm.keyPair.wif, network);
      vm.keyPair = new bitcoin.ECPair(decimalKey, null, {compressed: true, network: network});
      vm.keyValid = true;
      vm.formatKeyForNetwork();
    } catch (e) {
      vm.error = e;
    }
  };

  vm.formatKeyForNetwork = function () {
    var network = vm.network.config;
    vm.keyPair.address = customGetAddress(vm.keyPair, network);
    vm.keyPair.scriptAddress = customGetScriptAddress(vm.keyPair, network);
    vm.keyPair.wif = customToWIF(vm.keyPair, network);
    if (network.bech32) {
      vm.keyPair.nestedP2WPKHAddress = getNestedP2WPKHAddress(vm.keyPair, network);
      vm.keyPair.P2WPKHAddress = getP2WPKHAddress(vm.keyPair, network);
    }
    vm.changeAddress = vm.keyPair.P2WPKHAddress;
  };

  vm.calculateFee = function () {
    vm.feeError = null;
    try {
      var unspent = parseInt(vm.inputAmount, 10);
      var sendAmount = parseInt(vm.outputAmount, 10);
      var changeAmount = parseInt(vm.changeAmount, 10);
      var fee = unspent - sendAmount - changeAmount;
      vm.calculatedFee = fee + ' satoshi';
      vm.createTransaction();
    } catch (e) {
      vm.feeError = e;
    }
  };

  vm.createTransaction = function () {
    vm.txError = null;
    try {
      var pubKey = vm.keyPair.getPublicKeyBuffer();
      var pubKeyHash = bitcoin.crypto.hash160(pubKey);
      var redeemScript = bitcoin.script.witnessPubKeyHash.output.encode(pubKeyHash);
      var unspent = parseInt(vm.inputAmount, 10);

      var txb = new bitcoin.TransactionBuilder(vm.network.config);
      txb.addInput(vm.inputTxId, parseInt(vm.inputTxVout, 10));
      txb.addOutput(vm.outputAddress, parseInt(vm.outputAmount));
      txb.addOutput(vm.changeAddress, parseInt(vm.changeAmount));

      txb.sign(0, vm.keyPair, redeemScript, null, unspent);

      var tx = txb.build();
      vm.raw = tx.toHex();
    } catch (e) {
      vm.txError = e;
    }
  };
}
