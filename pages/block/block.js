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

}