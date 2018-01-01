angular
  .module('app')
  .component('shamirSecretSharingPage', {
    templateUrl: 'pages/shamir-secret-sharing/shamir-secret-sharing.html',
    controller: ShamirSecretSharingPageController,
    controllerAs: 'vm',
    bindings: {}
  });

function ShamirSecretSharingPageController() {
  var vm = this;

  vm.secret = null;
  vm.numShares = 5;
  vm.sharesNeeded = 3;
  vm.shares = [];
  vm.shareLines = null;
  vm.error = null;
  vm.error2 = null;

  vm.$onInit = function () {
    vm.newSecret();
  };

  vm.newSecret = function () {
    vm.secret = bitcoin.bip39.generateMnemonic();
    vm.generateShares();
  };

  vm.generateShares = function () {
    var hex = bitcoin.Buffer.from(vm.secret, 'utf-8').toString('hex');
    vm.error = null;
    try {
      vm.shares = bitcoin.secrets.share(hex, parseInt(vm.numShares, 10), parseInt(vm.sharesNeeded, 10));
    } catch (e) {
      vm.error = e;
    }
  };

  vm.parseShares = function () {
    vm.error2 = null;
    try {
      var lines = vm.shareLines.split(/\s+/g);
      vm.combinedSecret = bitcoin.Buffer.from(bitcoin.secrets.combine(lines), 'hex').toString('utf-8');
    } catch (e) {
      vm.error2 = e;
    }
  };
}
