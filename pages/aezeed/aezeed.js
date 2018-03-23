angular
  .module('app')
  .component('aezeedPage', {
    templateUrl: 'pages/aezeed/aezeed.html',
    controller: AezeedPageController,
    controllerAs: 'vm',
    bindings: {}
  });

var BITCOIN_GENESIS_BLOCK_TIMESTAMP = 1231006505;

function AezeedPageController(lodash, bitcoinNetworks) {
  var vm = this;

  vm.version = 0;
  vm.birthday = 0;

  vm.$onInit = function () {
    vm.birthday = vm.calculateBirthday();
    vm.generateEntropy();
    vm.generateSeed();
  };

  vm.generateEntropy = function () {
    vm.entropy = bitcoin.randomBytes(16).toString('hex');
  };

  vm.generateSeed = function () {

  };

  vm.calculateBirthday = function () {
    var unixTimestamp = Math.round((new Date()).getTime() / 1000);
    return Math.floor((unixTimestamp - BITCOIN_GENESIS_BLOCK_TIMESTAMP) / (60 * 60 * 24));
  };
}
