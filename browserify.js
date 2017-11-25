var bs58checkBase = require('bs58check/base');
var sha3 = require('js-sha3');
var Buffer = require('safe-buffer').Buffer;

var customBs58Check = {
  keccak256: bs58checkBase(function (buffer) {
    return new Buffer(sha3.keccak256.update(buffer).digest(), 'hex');
  })
};

module.exports = {
  Block: require('bitcoinjs-lib/src/block'),
  ECPair: require('bitcoinjs-lib/src/ecpair'),
  ECSignature: require('bitcoinjs-lib/src/ecsignature'),
  HDNode: require('bitcoinjs-lib/src/hdnode'),
  Transaction: require('bitcoinjs-lib/src/transaction'),
  TransactionBuilder: require('bitcoinjs-lib/src/transaction_builder'),

  address: require('bitcoinjs-lib/src/address'),
  bufferutils: require('bitcoinjs-lib/src/bufferutils'), // TODO: remove in 4.0.0
  crypto: require('bitcoinjs-lib/src/crypto'),
  networks: require('bitcoinjs-lib/src/networks'),
  opcodes: require('bitcoin-ops'),
  script: require('bitcoinjs-lib/src/script'),
  ecurve: require('ecurve'),
  BigInteger: require('bigi'),
  Buffer: Buffer,
  fastRoot: require('merkle-lib/fastRoot'),
  bs58check: require('bs58check'),
  customBs58Check: customBs58Check,
  wif: require('wif'),
  bip38: require('bip38'),
  bip39: require('bip39'),
  bip32utils: require('bip32-utils'),
  pbkdf2: require('pbkdf2')
};
