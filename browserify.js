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
  Buffer: require('safe-buffer').Buffer,
  fastRoot: require('merkle-lib/fastRoot'),
  wif: require('wif'),
  base58: require('bs58'),
  bip38: require('bip38'),
  bip39: require('bip39'),
  bip32utils: require('bip32-utils')
};