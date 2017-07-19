angular
  .module('app')
  .component('blockPage', {
    templateUrl: 'pages/block/block.html',
    controller: BlockController,
    controllerAs: 'vm',
    bindings: {}
  });

function BlockController() {
  var vm = this;

  vm.block = {
    number: 1,
    nonce: 23344,
    prev: '0000000000000000000000000000000000000000000000000000000000000000',
    data: {}
  };
}