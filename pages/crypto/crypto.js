angular
  .module('app')
  .component('cryptoPage', {
    templateUrl: 'pages/crypto/crypto.html',
    controller: CryptoPageController,
    controllerAs: 'vm',
    bindings: {}
  });

function CryptoPageController() {
  var vm = this;

  vm.$onInit = function () {
    vm.newPrivateKey();
  };

  vm.newPrivateKey = function () {
    vm.keyPair = bitcoin.ECPair.makeRandom();
  };
}