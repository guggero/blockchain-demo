angular
  .module('app')
  .component('cryptoPage', {
    templateUrl: 'pages/crypto/crypto.html',
    controller: CryptoPageController,
    controllerAs: 'vm',
    bindings: {}
  });

function CryptoPageController() {
  var vm = this;

  vm.networks = [
    {label: 'BTC (Bitcoin)', config: bitcoin.networks.bitcoin},
    {label: 'BTC (Bitcoin Testnet)', config: bitcoin.networks.testnet},
    {label: 'LTC (Litecoin)', config: bitcoin.networks.litecoin},
    {
      label: 'DASH (Dash)',
      config: {
        messagePrefix: '\x18Bitcoin Signed Message:\n',
        bip32: {public: 0x0488b21e, private: 0x0488ade4},
        pubKeyHash: 0x4C,
        scriptHash: 0x10,
        wif: 0xc9
      }
    },
    {
      label: 'PIVX (PIVX)',
      config: {
        messagePrefix: '\x18Bitcoin Signed Message:\n',
        bip32: {public: 0x0488b21e, private: 0x0488ade4},
        pubKeyHash: 0x1E,
        scriptHash: 0x0D,
        wif: 0xd4
      }
    },
    {
      label: 'XVG (Verge)',
      config: {
        messagePrefix: '\x18Bitcoin Signed Message:\n',
        bip32: {public: 0x0488b21e, private: 0x0488ade4},
        pubKeyHash: 0x1E,
        scriptHash: 0x21,
        wif: 0x9e
      }
    }
  ];
  vm.network = vm.networks[0];
  vm.message = 'Insert famous quote here!';
  vm.qrPrivUncompressed = new QRCode('qrPrivUncompressed');
  vm.qrPrivCompressed = new QRCode('qrPrivCompressed');
  vm.qrPubkey = new QRCode('qrPubkey');

  vm.$onInit = function () {
    vm.newPrivateKey();
    vm.formatKeyForNetwork();
    vm.signMessage();
  };

  vm.newPrivateKey = function () {
    vm.decimalKey = bitcoin.ECPair.makeRandom().d;
    vm.formatKeyForNetwork();
    vm.signMessage();
  };

  vm.formatKeyForNetwork = function () {
    vm.error = null;
    var network = vm.network.config;
    vm.keyPair = new bitcoin.ECPair(vm.decimalKey, null, {compressed: true, network: network});
    vm.keyPairUncompressed = new bitcoin.ECPair(vm.decimalKey, null, {compressed: false, network: network});
    vm.wifUncompressed = vm.keyPairUncompressed.toWIF();

    // update QR codes
    vm.qrPrivUncompressed.makeCode(vm.wifUncompressed);
    vm.qrPrivCompressed.makeCode(vm.keyPair.toWIF());
    vm.qrPubkey.makeCode(vm.keyPair.getAddress());
  };

  vm.importFromWif = function () {
    var network = vm.network.config;
    try {
      vm.decimalKey = bitcoin.ECPair.fromWIF(vm.wifUncompressed, network).d;
      vm.formatKeyForNetwork();
      vm.signMessage();
    } catch (e) {
      vm.error = e;
    }
  };

  vm.signMessage = function () {
    var hash = bitcoin.crypto.sha256(vm.message);
    vm.signature = vm.keyPair.sign(hash).toDER().toString('hex');
  };
}