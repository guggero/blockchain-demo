angular.element(document.body).ready(function () {
  angular.bootstrap(document.body, ['app'])
});

angular
  .module('app', [
    'ngRoute'
  ])
  .constant('moment', window.moment)
  .constant('lodash', window._)
  .filter('ago', function (moment) {
    return function (input) {
      var duration = moment.duration(moment().diff(moment(input)));
      return duration.humanize()
    }
  })
  .component('app', {
    templateUrl: 'app.html'
  })
  .config(routeConfig)
  .run(run);

function routeConfig($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $locationProvider.html5Mode({enabled: false, requireBase: false});

  $routeProvider
    .when('/hash', {template: '<hash-page></hash-page>'})
    .when('/block', {template: '<block-page></block-page>'})
    .when('/blockchain', {template: '<blockchain-page></blockchain-page>'})
    .when('/distributed', {template: '<distributed-page></distributed-page>'})
    .when('/coinbase', {template: '<coinbase-page></coinbase-page>'})
    .when('/tokens', {template: '<tokens-page></tokens-page>'})
    .otherwise({template: '<intro-page></intro-page>'})
}

function run($location, $rootScope) {
  var id = 0;
  $rootScope.difficulty = 4;

  $rootScope.sha256 = function (input) {
    return CryptoJS.SHA256(input).toString();
  };

  $rootScope.isActive = function (route) {
    return route === $location.path();
  };

  $rootScope.newId = function () {
    return (id++);
  };

  $rootScope.difficultyPrefix = function (difficulty) {
    var diff = difficulty || $rootScope.difficulty;
    var result = '';
    for (var i = 1; i <= diff; i++) {
      result += '0';
    }
    return result;
  };
}


function updateChain(block, chain) {
  // update all blocks walking the chain from this block to the end
  for (var x = block; x <= 5; x++) {
    if (x > 1) {
      $('#block' + x + 'chain' + chain + 'previous').val($('#block' + (x - 1).toString() + 'chain' + chain + 'hash').val());
    }
    updateHash(x, chain);
  }
}

function mine(block, chain, isChain) {
  for (var x = 0; x <= 500000; x++) {
    $('#block' + block + 'chain' + chain + 'nonce').val(x);
    $('#block' + block + 'chain' + chain + 'hash').val(sha256(block, chain));
    if ($('#block' + block + 'chain' + chain + 'hash').val().substr(0, 4) === '0000') {
      if (isChain) {
        updateChain(block, chain);
      }
      else {
        updateState(block, chain);
      }
      break;
    }
  }
}
