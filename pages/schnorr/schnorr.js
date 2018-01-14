angular
  .module('app')
  .component('schnorrPage', {
    templateUrl: 'pages/schnorr/schnorr.html',
    controller: SchnorrPageController,
    controllerAs: 'vm',
    bindings: {}
  });

function SchnorrPageController() {
  var vm = this;

  vm.keyPair = null;
  vm.privateKey = null;
  vm.publicKey = null;
  vm.message = 'Schnorr Signatures are awesome!';

  vm.$onInit = function () {
    vm.newPrivateKey();
  };

  vm.newPrivateKey = function () {
    vm.keyPair = bitcoin.ECPair.makeRandom();
    vm.privateKey = vm.keyPair.d.toString(16);
    vm.publicKey = bitcoin.BigInteger.fromBuffer(vm.keyPair.getPublicKeyBuffer()).toString(16);
    vm.signMessage();
  };

  vm.signMessage = function () {
    vm.messageHash = bitcoin.crypto.sha256(vm.message);
    vm.signature = bitcoin.schnorr.sign(vm.messageHash, vm.keyPair.d.toBuffer()).toDER('hex');
  };
}
