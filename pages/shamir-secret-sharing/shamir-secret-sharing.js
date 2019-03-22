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
  vm.paddingLengths = [
    { label: '64bit', id: 64 },
    { label: '128bit', id: 128 },
    { label: '256bit', id: 256 },
    { label: '512bit', id: 512 },
    { label: '1024bit', id: 1024 }
  ];
  vm.minPad = vm.paddingLengths[1];
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
      vm.shares = bitcoin.secrets.share(hex, parseInt(vm.numShares, 10), parseInt(vm.sharesNeeded, 10), parseInt(vm.minPad.id, 10));
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
