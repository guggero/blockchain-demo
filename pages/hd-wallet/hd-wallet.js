angular
  .module('app')
  .component('hdWalletPage', {
    templateUrl: 'pages/hd-wallet/hd-wallet.html',
    controller: HdWalletPageController,
    controllerAs: 'vm',
    bindings: {}
  });

var PBKDF2_SALT = 'Digital Bitbox',
  PBKDF2_HMACLEN = 64,
  PBKDF2_ROUNDS_APP = 20480;

var METHOD_NONE = 0,
  METHOD_PBKDF2 = 1;

function HdWalletPageController($http) {
  var vm = this;

  vm.networks = bitcoinNetworks;
  vm.network = vm.networks[0];
  vm.mnemonic = null;
  vm.asPassword = true;
  vm.passphrase = null;
  vm.seed = null;
  vm.seedHex = null;
  vm.node = null;
  vm.nodeBase58 = null;
  vm.privKeyWif = null;
  vm.publicKeyWif = null;
  vm.address = null;
  vm.bip44Constants = {};
  vm.coinType = '0x80000000';
  vm.account = 0;
  vm.change = 0;
  vm.index = 0;
  vm.path = 'm/44\'/0\'/0\'/0/0';
  vm.strenghteningMethods = [
    {label: 'None', id: METHOD_NONE},
    {label: 'PBKDF2 (Digital Bitbox)', id: METHOD_PBKDF2}

  ];
  vm.strenghtening = vm.strenghteningMethods[0];

  vm.$onInit = function () {
    $http.get('https://raw.githubusercontent.com/bitcoinjs/bip44-constants/master/constants.json')
      .then(function (response) {
        vm.bip44Constants = response.data;
      });
    vm.newSeed();
  };

  vm.newSeed = function () {
    vm.mnemonic = bitcoin.bip39.generateMnemonic();
    vm.fromMnemonic();
  };

  vm.fromMnemonic = function () {
    var pw = null;
    if (vm.passphrase) {
      if (vm.strenghtening.id === METHOD_PBKDF2) {
        pw = bitcoin.pbkdf2.pbkdf2Sync(
          bitcoin.Buffer.from(vm.passphrase, 'utf8'),
          PBKDF2_SALT,
          PBKDF2_ROUNDS_APP,
          PBKDF2_HMACLEN,
          'sha512'
        );
      } else {
        pw = bitcoin.Buffer.from(vm.passphrase, 'utf8');
      }
    }
    vm.seed = bitcoin.bip39.mnemonicToSeed(vm.mnemonic, (pw ? pw.toString('hex') : pw));
    vm.fromSeed();
  };

  vm.fromSeed = function () {
    if (vm.seed) {
      vm.seedHex = vm.seed.toString('hex');
      vm.node = bitcoin.HDNode.fromSeedBuffer(vm.seed, vm.network.config);
      vm.nodeBase58 = vm.node.toBase58();
      vm.fromNode();
    }
  };

  vm.fromHexSeed = function () {
    vm.seed = bitcoin.Buffer.from(vm.seedHex, 'hex');
    vm.mnemonic = 'Cannot be reversed! Mnemonic to seed is a one way street...';
    vm.fromSeed();
  };

  vm.fromBase58Seed = function () {
    vm.error = null;
    try {
      vm.node = bitcoin.HDNode.fromBase58(vm.nodeBase58, vm.network.config);
      vm.seed = null;
      vm.seedHex = 'Cannot be reversed! Seed is hashed to create HD node';
      vm.mnemonic = 'Cannot be reversed! Mnemonic to seed is a one way street...';
      vm.fromNode();
    } catch (e) {
      vm.error = e;
    }
  };

  vm.fromNode = function () {
    vm.privKeyWif = vm.node.keyPair.toWIF();
    vm.publicKeyWif = vm.node.neutered().toBase58();
    vm.address = vm.node.keyPair.getAddress();
    vm.calculatePath();
  };

  vm.calculatePath = function () {
    vm.path = 'm/44\'/0\'/' + vm.account + '\'/' + vm.change + '/' + vm.index;
    vm.fromPath();
  };

  vm.fromPath = function () {
    var derivedNode = vm.node.derivePath(vm.path);
    vm.derivedPrivKeyWif = derivedNode.keyPair.toWIF();
    vm.derivedAddress = derivedNode.keyPair.getAddress();
  }
}
