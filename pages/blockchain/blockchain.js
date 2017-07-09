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

  vm.blocks = [
    {number: 1, nonce: 23344, data: {}, prev: '0000000000000000000000000000000000000000000000000000000000000000'},
    {number: 2, nonce: 15208, data: {}},
    {number: 3, nonce: 24677, data: {}},
    {number: 4, nonce: 48313, data: {}},
    {number: 5, nonce: 45153, data: {}}
  ];
}