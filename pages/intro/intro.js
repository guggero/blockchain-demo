angular
  .module('app')
  .component('introPage', {
    templateUrl: 'pages/intro/intro.html',
    controller: IntroPageController,
    controllerAs: 'vm',
    bindings: {}
  });

function IntroPageController() {
  var vm = this;

}