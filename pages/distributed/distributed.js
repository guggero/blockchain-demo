angular
  .module('app')
  .component('distributedPage', {
    templateUrl: 'pages/distributed/distributed.html',
    controller: DistributedPageController,
    controllerAs: 'vm',
    bindings: {}
  });

function DistributedPageController() {
  var vm = this;

  vm.peers = [{
    name: 'Peer A',
    blocks: [
      {number: 1, nonce: 23344, data: {}, prev: '0000000000000000000000000000000000000000000000000000000000000000'},
      {number: 2, nonce: 15208, data: {}},
      {number: 3, nonce: 24677, data: {}},
      {number: 4, nonce: 48313, data: {}},
      {number: 5, nonce: 45153, data: {}}
    ]
  }, {
    name: 'Peer B',
    blocks: [
      {number: 1, nonce: 23344, data: {}, prev: '0000000000000000000000000000000000000000000000000000000000000000'},
      {number: 2, nonce: 15208, data: {}},
      {number: 3, nonce: 24677, data: {}},
      {number: 4, nonce: 48313, data: {}},
      {number: 5, nonce: 45153, data: {}}
    ]
  }, {
    name: 'Peer C',
    blocks: [
      {number: 1, nonce: 23344, data: {}, prev: '0000000000000000000000000000000000000000000000000000000000000000'},
      {number: 2, nonce: 15208, data: {}},
      {number: 3, nonce: 24677, data: {}},
      {number: 4, nonce: 48313, data: {}},
      {number: 5, nonce: 45153, data: {}}
    ]
  }];
}