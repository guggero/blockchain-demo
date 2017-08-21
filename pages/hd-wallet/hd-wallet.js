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

  vm.bip44Constants = {};

  vm.$onInit = function () {
    $http.get('https://raw.githubusercontent.com/bitcoinjs/bip44-constants/master/constants.json')
      .then(function (response) {
        vm.bip44Constants = response.data;
      });
  };
}