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

function HdWalletPageController(lodash, bitcoinNetworks) {
  var vm = this;

  vm.networks = bitcoinNetworks;
  vm.network = lodash.find(vm.networks, ['label', 'BTC (Bitcoin)']);
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
  vm.coinType = 0;
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

      // always use bitcoin network for master key
      vm.node = bitcoin.HDNode.fromSeedBuffer(vm.seed, bitcoin.networks.bitcoin);
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
      vm.node = bitcoin.HDNode.fromBase58(vm.nodeBase58, bitcoin.networks.bitcoin);
      vm.seed = null;
      vm.seedHex = 'Cannot be reversed! Seed is hashed to create HD node';
      vm.mnemonic = 'Cannot be reversed! Mnemonic to seed is a one way street...';
      vm.fromNode();
    } catch (e) {
      vm.error = e;
    }
  };

  vm.fromNode = function () {
    vm.node.keyPair.network = vm.network.config;
    vm.privKeyWif = vm.node.keyPair.toWIF();
    vm.publicKeyWif = vm.node.neutered().toBase58();
    vm.address = vm.node.keyPair.getAddress();
    vm.calculatePath();
  };

  vm.calculatePath = function () {
    vm.path = 'm/44\'/' + vm.network.config.bip44 + '\'/' + vm.account + '\'/' + vm.change + '/' + vm.index;
    vm.fromPath();
  };

  vm.fromPath = function () {
    vm.derivedKeyPair = vm.node.derivePath(vm.path).keyPair;
    vm.derivedKeyPair.wif = customToWIF(vm.derivedKeyPair, vm.network.config);
    vm.derivedKeyPair.address = customGetAddress(vm.derivedKeyPair, vm.network.config);
  }
}
