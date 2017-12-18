var bs58checkBase = require('bs58check/base');
var sha3 = require('js-sha3');
var crypto = require('bitcoinjs-lib/src/crypto');
var Buffer = require('safe-buffer').Buffer;
var hash256 = require('bitcoinjs-lib/src/crypto').hash256;

var keccak256 = function (buffer) {
  return new Buffer(sha3.keccak256.update(buffer).digest(), 'hex');
};

var noHash = function (buffer) {
  return buffer;
};

var customBs58Check = {
  keccak256: {
    wif: bs58checkBase(keccak256),
    address: bs58checkBase(keccak256),
    pubKeyHash: crypto.hash160
  },
  noHashAddress: {
    wif: bs58checkBase(hash256),
    address: bs58checkBase(noHash),
    pubKeyHash: crypto.ripemd160
  }
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
  crypto: crypto,
  networks: require('bitcoinjs-lib/src/networks'),
  opcodes: require('bitcoin-ops'),
  script: require('bitcoinjs-lib/src/script'),
  ecurve: require('ecurve'),
  varuint: require('varuint-bitcoin'),
  BigInteger: require('bigi'),
  Buffer: Buffer,
  fastRoot: require('merkle-lib/fastRoot'),
  bs58check: require('bs58check'),
  customBs58Check: customBs58Check,
  wif: require('wif'),
  bip38: require('bip38'),
  bip39: require('bip39'),
  bip32utils: require('bip32-utils'),
  pbkdf2: require('pbkdf2'),
  sha3: sha3,
  keccak256: keccak256
};
