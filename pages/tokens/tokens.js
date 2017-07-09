angular
  .module('app')
  .component('tokensPage', {
    templateUrl: 'pages/tokens/tokens.html',
    controller: TokensPageController,
    controllerAs: 'vm',
    bindings: {}
  });

function TokensPageController() {
  var vm = this;

}