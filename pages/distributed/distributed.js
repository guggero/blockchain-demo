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

}