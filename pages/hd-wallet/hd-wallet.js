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

  vm.mnemonic = null;
  vm.seed = null;
  vm.seedHex = null;
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
    vm.seedHex = vm.seed.toString('hex');
  };

  vm.fromHexSeed = function () {
    vm.seed = bitcoin.Buffer.from(vm.seedHex, 'hex');
    vm.mnemonic = 'Cannot be reversed! Mnemonic to seed is a one way street...';
  };
}
