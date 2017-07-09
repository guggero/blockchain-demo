angular
  .module('app')
  .component('coinbasePage', {
    templateUrl: 'pages/coinbase/coinbase.html',
    controller: CoinbasePageController,
    controllerAs: 'vm',
    bindings: {}
  });

function CoinbasePageController() {
  var vm = this;

}