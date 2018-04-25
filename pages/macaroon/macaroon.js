angular
  .module('app')
  .component('macaroonPage', {
    templateUrl: 'pages/macaroon/macaroon.html',
    controller: MacaroonPageController,
    controllerAs: 'vm',
    bindings: {}
  });

function MacaroonPageController() {
  var vm = this;

  vm.encodedMacaroon = '';

  vm.$onInit = function () {
    vm.decodeMacaroon();
  };

  vm.decodeMacaroon = function () {
    vm.error = null;
    if (!vm.encodedMacaroon) {
      return;
    }
    try {
      var buffer = bitcoin.Buffer.from(vm.encodedMacaroon.replace(/\s*/gi, ''), 'hex');
      var macaroon = bitcoin.macaroon.importMacaroon(buffer);
      vm.macaroon = {
        location: macaroon.location,
        identifier: bitcoin.Buffer.from(macaroon.identifier).toString('base64'),
        signature: bitcoin.Buffer.from(macaroon.signature).toString('base64'),
        caveats: macaroon.caveats
      }
    } catch (e) {
      vm.error = e;
    }
  };
}
