angular
  .module('app')
  .component('bitcoinBlockPage', {
    templateUrl: 'pages/bitcoin-block/bitcoin-block.html',
    controller: BitcoinBlockPageController,
    controllerAs: 'vm',
    bindings: {}
  });

var API_URL_BLOCK = 'https://blockexplorer.com/api/rawblock/';

function BitcoinBlockPageController($http, lodash) {
  var vm = this;

  vm.hash = '0000000000000000079c58e8b5bce4217f7515a74b170049398ed9b8428beb4a';
  vm.raw = null;
  vm.decodedBlock = null;

  vm.$onInit = function () {
    vm.downloadBlock();
  };

  vm.downloadBlock = function () {
    vm.error = null;
    vm.raw = 'loading...';
    $http.get(API_URL_BLOCK + vm.hash)
      .then(function (response) {
        vm.raw = response.data.rawblock;
        vm.parseBlock();
      })
      .catch(function (error) {
        vm.error = error.data;
      });
  };

  vm.parseBlock = function () {
    vm.error = null;
    vm.decodedBlock = 'loading...';

    try {
      vm.block = bitcoin.Block.fromHex(vm.raw);
      vm.decodedBlock = lodash.deeply(lodash.mapValues)(angular.copy(vm.block), bufferToString);
    } catch (e) {
      vm.error = e;
      vm.decodedBlock = e;
    }
  };

  vm.getP2PKH = function (script) {
    var chunks = bitcoin.script.decompile(script);
    var decoded = bitcoin.script.toASM(chunks);
    if (decoded.indexOf('OP_DUP OP_HASH160 ') === 0) {
      return chunks[2];
    }
    return null;
  };

  vm.isP2PKH = function (script) {
    return vm.getP2PKH(script) !== null;
  };

  vm.getTxId = function (hex) {
    return bitcoin.Buffer.from(hex, 'hex').reverse().toString('hex');
  };

  vm.getRawString = function (hex) {
    return bitcoin.Buffer.from(hex, 'hex').toString();
  };

  function isArrayBuffer(value) {
    return value && value.buffer instanceof ArrayBuffer && value.byteLength !== undefined;
  }

  function bufferToString(val, key) {
    if (isArrayBuffer(val)) {
      return val.toString('hex');
    } else if (Array.isArray(val) && key === 'transactions') {
      lodash.forEach(val, function (tx) {
        lodash.forEach(tx.ins, function (txIn, index) {
          txIn.hash = txIn.hash.toString('hex');
          txIn.script = txIn.script.toString('hex');
        });
        lodash.forEach(tx.outs, function (txOut, index) {
          var chunks = bitcoin.script.decompile(txOut.script);
          txOut.script = bitcoin.script.toASM(chunks);
        });
      });
      return val;
    } else {
      return val;
    }
  }
}