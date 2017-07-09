angular
  .module('app')
  .component('hashPage', {
    templateUrl: 'pages/hash/hash.html',
    controller: HashPageController,
    controllerAs: 'vm',
    bindings: {}
  });

function HashPageController($rootScope) {
  var vm = this;

  vm.hash = $rootScope.sha256('');
}