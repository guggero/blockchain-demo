angular
  .module('app')
  .component('hdWalletPage', {
    templateUrl: 'pages/hd-wallet/hd-wallet.html',
    controller: HdWalletPageController,
    controllerAs: 'vm',
    bindings: {}
  });

function HdWalletPageController($http) {
  var vm = this;

  vm.networks = bitcoinNetworks;
  vm.network = vm.networks[0];
  vm.mnemonic = null;
  vm.seed = null;
  vm.seedHex = null;
  vm.node = null;
  vm.nodeBase58 = null;
  vm.privKeyWif = null;
  vm.address = null;
  vm.bip44Constants = {};

  vm.$onInit = function () {
    $http.get('https://raw.githubusercontent.com/bitcoinjs/bip44-constants/master/constants.json')
      .then(function (response) {
        vm.bip44Constants = response.data;
      });
    vm.newSeed();
  };

  vm.newSeed = function () {
    vm.mnemonic = bitcoin.bip39.generateMnemonic();
    vm.fromMnemonic();
  };

  vm.fromMnemonic = function () {
    vm.seed = bitcoin.bip39.mnemonicToSeed(vm.mnemonic);
    vm.fromSeed();
  };

  vm.fromSeed = function () {
    if (vm.seed) {
      vm.seedHex = vm.seed.toString('hex');
      vm.node = bitcoin.HDNode.fromSeedBuffer(vm.seed, vm.network.config);
      vm.nodeBase58 = vm.node.toBase58();
      vm.fromNode();
    }
  };

  vm.fromHexSeed = function () {
    vm.seed = bitcoin.Buffer.from(vm.seedHex, 'hex');
    vm.mnemonic = 'Cannot be reversed! Mnemonic to seed is a one way street...';
    vm.fromSeed();
  };

  vm.fromBase58Seed = function () {
    vm.node = bitcoin.HDNode.fromBase58(vm.nodeBase58, vm.network.config);
    vm.seed = null;
    vm.seedHex = 'Cannot be reversed! Seed is hashed to create HD node';
    vm.mnemonic = 'Cannot be reversed! Mnemonic to seed is a one way street...';
    vm.fromNode();
  };

  vm.fromNode = function () {
    vm.privKeyWif = vm.node.keyPair.toWIF();
    vm.address = vm.node.keyPair.getAddress();
  };
}
