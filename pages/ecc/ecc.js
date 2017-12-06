angular
  .module('app')
  .component('eccPage', {
    templateUrl: 'pages/ecc/ecc.html',
    controller: EccPageController,
    controllerAs: 'vm',
    bindings: {}
  });

function EccPageController(lodash, bitcoinNetworks) {
  var vm = this;

  vm.networks = bitcoinNetworks;
  vm.network = lodash.find(vm.networks, ['label', 'BTC (Bitcoin)']);
  vm.message = 'Insert famous quote here!';
  vm.qrPrivUncompressed = new QRCode('qrPrivUncompressed');
  vm.qrPrivCompressed = new QRCode('qrPrivCompressed');
  vm.qrPubkey = new QRCode('qrPubkey');

  vm.$onInit = function () {
    vm.newPrivateKey();
    vm.formatKeyForNetwork();
    vm.signMessage();
  };

  vm.newPrivateKey = function () {
    vm.decimalKey = bitcoin.ECPair.makeRandom().d;
    vm.formatKeyForNetwork();
    vm.signMessage();
  };

  vm.formatKeyForNetwork = function () {
    vm.error = null;
    var network = vm.network.config;
    vm.keyPair = new bitcoin.ECPair(vm.decimalKey, null, {compressed: true, network: network});
    vm.keyPair.wif = customToWIF(vm.keyPair, network);
    vm.keyPair.address = customGetAddress(vm.keyPair, network);
    vm.keyPair.scriptAddress = customGetScriptAddress(vm.keyPair, network);
    vm.pubKey = vm.keyPair.getPublicKeyBuffer();
    vm.pubKeyDecimal = bitcoin.BigInteger.fromBuffer(vm.pubKey);
    vm.keyPairUncompressed = new bitcoin.ECPair(vm.decimalKey, null, {compressed: false, network: network});
    vm.keyPairUncompressed.wif = customToWIF(vm.keyPairUncompressed, network);

    // update QR codes
    vm.qrPrivUncompressed.makeCode(vm.keyPairUncompressed.wif);
    vm.qrPrivCompressed.makeCode(vm.keyPair.wif);
    vm.qrPubkey.makeCode(vm.keyPair.address);
  };

  vm.importFromWif = function () {
    var network = vm.network.config;
    try {
      vm.decimalKey = customImportFromWif(vm.keyPairUncompressed.wif, network);
      vm.formatKeyForNetwork();
      vm.signMessage();
    } catch (e) {
      vm.error = e;
    }
  };

  vm.signMessage = function () {
    var hash = bitcoin.crypto.sha256(vm.message);
    vm.signature = vm.keyPair.sign(hash).toDER().toString('hex');
  };
}
