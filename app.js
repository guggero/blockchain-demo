angular.element(document.body).ready(function () {
  angular.bootstrap(document.body, ['app'])
});

angular
  .module('app', [
    'ngRoute'
  ])
  .constant('moment', window.moment)
  .constant('lodash', window._)
  .constant('bitcoinNetworks', window.bitcoinNetworks)
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
    .when('/', {template: '<intro-page></intro-page>', containerClass: 'container'})
    .when('/hash', {template: '<hash-page></hash-page>', containerClass: 'container'})
    .when('/block', {template: '<block-page></block-page>', containerClass: 'container'})
    .when('/blockchain', {template: '<blockchain-page></blockchain-page>', containerClass: 'container-fluid'})
    .when('/distributed', {template: '<distributed-page></distributed-page>', containerClass: 'container-fluid'})
    .when('/tokens', {template: '<tokens-page></tokens-page>', containerClass: 'container-fluid'})
    .when('/coinbase', {template: '<coinbase-page></coinbase-page>', containerClass: 'container-fluid'})
    .when('/ecc', {template: '<ecc-page></ecc-page>', containerClass: 'container'})
    .when('/hd-wallet', {template: '<hd-wallet-page></hd-wallet-page>', containerClass: 'container'})
    .when('/bitcoin-block', {template: '<bitcoin-block-page></bitcoin-block-page>', containerClass: 'container'})
    .when('/shamir-secret-sharing', {template: '<shamir-secret-sharing-page></shamir-secret-sharing-page>', containerClass: 'container'})
    .when('/schnorr', {template: '<schnorr-page></schnorr-page>', containerClass: 'container'})
    .when('/transaction-creator', {template: '<transaction-creator-page></transaction-creator-page>', containerClass: 'container'})
    .otherwise({redirectTo: '/'})
}

function run($location, $rootScope, $route, lodash) {
  var id = 0;
  $rootScope.difficulty = 4;
  $rootScope.$route = $route;

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

  $rootScope.hexPubKeyToBitcoinAddr = function (hex) {
    var buffer = bitcoin.Buffer.from(hex, 'hex');
    return bitcoin.address.toBase58Check(buffer, bitcoin.networks.bitcoin.pubKeyHash);
  };

  lodash.mixin({
    deeply: function (map) {
      return function (obj, fn) {
        return map(lodash.mapValues(obj, function (v) {
          return lodash.isPlainObject(v) ? lodash.deeply(map)(v, fn) : v;
        }), fn);
      }
    }
  });
}
