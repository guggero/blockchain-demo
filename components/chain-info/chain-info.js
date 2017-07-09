angular
  .module('app')
  .component('chainInfo', {
    templateUrl: 'components/chain-info/chain-info.html',
    controller: ChainInfoController,
    controllerAs: 'vm',
    bindings: {
      blocks: '<'
    }
  });

function ChainInfoController($scope) {
  var vm = this;

  $scope.$watch('vm.blocks', updateView, true);

  function updateView() {
    vm.valid = _.every(vm.blocks, 'valid');
  }
}