angular
  .module('app')
  .component('blockchainPage', {
    templateUrl: 'pages/blockchain/blockchain.html',
    controller: BlockchainPageController,
    controllerAs: 'vm',
    bindings: {}
  });

function BlockchainPageController() {
  var vm = this;

}