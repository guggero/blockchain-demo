// sorted by label, not by preference ;-)
var bitcoinNetworks = [{
  label: 'ARK (Ark)',
  config: {
    messagePrefix: '\x18Ark Signed Message:\n',
    bip32: { public: 0x2bf4968, private: 0x2bf4530 },
    pubKeyHash: 23,
    scriptHash: -1, // not used by ark
    wif: 170,
    bip44: 0x6f
  }
}, {
  label: 'BCH (BitcoinCash)',
  config: {
    messagePrefix: 'unused',
    bip32: { public: 0x0488b21e, private: 0x0488ade4 },
    pubKeyHash: 0,
    scriptHash: 5,
    wif: 128,
    bip44: 0x91
  }
}, {
  label: 'BLK (BlackCoin)',
  config: {
    messagePrefix: 'unused',
    bip32: { public: 0x0488b21e, private: 0x0488ade4 },
    pubKeyHash: 25,
    scriptHash: 85,
    wif: 153,
    bip44: 0x0a
  }
}, {
  label: 'BTC (Bitcoin Testnet)',
  config: {
    messagePrefix: '\u0018Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: { public: 0x043587cf, private: 0x04358394 },
    pubKeyHash: 111,
    scriptHash: 196,
    wif: 239,
    bip44: 0x01
  }
}, {
  label: 'BTC (Bitcoin)',
  config: {
    messagePrefix: '\u0018Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: { public: 0x0488b21e, private: 0x0488ade4 },
    pubKeyHash: 0,
    scriptHash: 5,
    wif: 128,
    bip44: 0x00
  }
}, {
  label: 'BUZZ (BuzzCoin)',
  config: {
    messagePrefix: 'unused',
    bip32: { public: 0x0488c21e, private: 0x0488a0e4 },
    pubKeyHash: 25,
    scriptHash: 85,
    wif: 153,
    bip44: 0xa9
  }
}, {
  label: 'DASH (Dash)',
  config: {
    messagePrefix: 'unused',
    bip32: { public: 0x0488b21e, private: 0x0488ade4 },
    pubKeyHash: 76,
    scriptHash: 16,
    wif: 204,
    bip44: 0x05
  }
}, {
  label: 'DGB (DigiByte)',
  config: {
    messagePrefix: 'unused',
    bip32: { public: 0x0488b21e, private: 0x0488ade4 },
    pubKeyHash: 30,
    scriptHash: 5,
    wif: 128,
    bip44: 0x14
  }
}, {
  label: 'DOGE (Dogecoin)',
  config: {
    messagePrefix: 'unused',
    bip32: { public: 0x02facafd, private: 0x02fac398 },
    pubKeyHash: 30,
    scriptHash: 22,
    wif: 158,
    bip44: 0x03
  }
}, {
  label: 'EMB (EmberCoin)',
  config: {
    messagePrefix: 'unused',
    bip32: { public: 0x0488b21e, private: 0x0488ade4 },
    pubKeyHash: 92,
    scriptHash: 110,
    wif: 50,
    bip44: 0xaa
  }
}, {
  label: 'ETH (Ethereum)',
  config: {
    messagePrefix: 'unused',
    bip32: { public: 0x00, private: 0x00 },
    pubKeyHash: 0,
    scriptHash: 0,
    wif: 0,
    bip44: 0x3c,
    noBase58: true
  }
}, {
  label: 'HTML5 (HTMLCOIN)',
  config: {
    messagePrefix: 'unused',
    bip32: { public: 0x1397c10d, private: 0x1397bcf3 },
    pubKeyHash: 41,
    scriptHash: 100,
    wif: 169,
    bip44: 0xac
  }
}, {
  label: 'LTC (Litecoin Testnet)',
  config: {
    messagePrefix: '\u0019Litecoin Signed Message:\n',
    bip32: { public: 0x043587cf, private: 0x04358394 },
    pubKeyHash: 111,
    scriptHash: 58,
    wif: 239,
    bip44: 0x01
  }
}, {
  label: 'LTC (Litecoin)',
  config: {
    messagePrefix: '\u0019Litecoin Signed Message:\n',
    bip32: { public: 0x019da462, private: 0x019d9cfe },
    pubKeyHash: 48,
    scriptHash: 50,
    wif: 176,
    bip44: 0x02
  }
}, {
  label: 'PIVX (PIVX)',
  config: {
    messagePrefix: 'unused',
    bip32: { public: 0x022d2533, private: 0x0221312b },
    pubKeyHash: 30,
    scriptHash: 13,
    wif: 212,
    bip44: 0x77
  }
}, {
  label: 'RDD (ReddCoin)',
  config: {
    messagePrefix: 'unused',
    bip32: { public: 0x0488b21e, private: 0x0488ade4 },
    pubKeyHash: 61,
    scriptHash: 5,
    wif: 189,
    bip44: 0x04
  }
}, {
  label: 'SMART (SmartCash)',
  config: {
    messagePrefix: 'unused',
    bip32: { public: 0x0488b21e, private: 0x0488ade4 },
    pubKeyHash: 63,
    scriptHash: 18,
    wif: 191,
    bip44: 0xe0,
    customHash: 'keccak256'
  }
}, {
  label: 'START (StartCOIN)',
  config: {
    messagePrefix: 'unused',
    bip32: { public: 0x00, private: 0x00 },
    pubKeyHash: 125,
    scriptHash: 5,
    wif: 253,
    bip44: 0x26
  }
}, {
  label: 'STRAT (Stratis)',
  config: {
    messagePrefix: 'unused',
    bip32: { public: 0x043587cf, private: 0x04358394 },
    pubKeyHash: 65,
    scriptHash: 196,
    wif: 193,
    bip44: 0x69
  }
}, {
  label: 'TRC (Terracoin)',
  config: {
    messagePrefix: 'unused',
    bip32: { public: 0x0488b21e, private: 0x0488ade4 },
    pubKeyHash: 0,
    scriptHash: 5,
    wif: 128,
    bip44: 0x53
  }
}, {
  label: 'VIA (Viacoin)',
  config: {
    messagePrefix: 'unused',
    bip32: { public: 0x0488b21e, private: 0x0488ade4 },
    pubKeyHash: 71,
    scriptHash: 33,
    wif: 199,
    bip44: 0x0e
  }
}, {
  label: 'XVG (Verge)',
  config: {
    messagePrefix: 'unused',
    bip32: { public: 0x0488b21e, private: 0x0488ade4 },
    pubKeyHash: 30,
    scriptHash: 33,
    wif: 158,
    bip44: 0x4d
  }
}];

function customToWIF(keyPair, network) {
  if (network.customHash) {
    if (!keyPair.d) {
      throw new Error('Missing private key')
    }
    return getCustomBs58(network).encode(bitcoin.wif.encodeRaw(network.wif, keyPair.d.toBuffer(32), keyPair.compressed));
  } else if (network.noBase58) {
    return keyPair.d.toBuffer(32).toString('hex');
  } else {
    return keyPair.toWIF();
  }
}

function customGetAddress(keyPair, network) {
  var hash = null;
  if (network.customHash) {
    hash = bitcoin.crypto.hash160(keyPair.getPublicKeyBuffer());
    var payload = bitcoin.Buffer.allocUnsafe(21);
    payload.writeUInt8(network.pubKeyHash, 0);
    hash.copy(payload, 1);

    return getCustomBs58(network).encode(payload);
  } else if (network.noBase58) {
    var clonedPair = new bitcoin.ECPair(keyPair.d, keyPair.__Q, { compressed: false, network: network });
    var pubKeyUncompressed = clonedPair.getPublicKeyBuffer().slice(1);
    hash = bitcoin.keccak256(pubKeyUncompressed).slice(-20);
    return '0x' + bitcoin.Buffer.from(hash).toString('hex');
  } else {
    return keyPair.getAddress();
  }
}

function customGetScriptAddress(keyPair, network) {
  var hash = null;
  var payload = null;
  if (network.customHash) {
    hash = bitcoin.crypto.hash160(keyPair.getPublicKeyBuffer());
    payload = bitcoin.Buffer.allocUnsafe(21);
    payload.writeUInt8(network.scriptHash, 0);
    hash.copy(payload, 1);

    return getCustomBs58(network).encode(payload);
  } else if (network.noBase58) {
    var clonedPair = new bitcoin.ECPair(keyPair.d, keyPair.__Q, { compressed: false, network: network });
    var pubKeyUncompressed = clonedPair.getPublicKeyBuffer().slice(1);
    hash = bitcoin.keccak256(pubKeyUncompressed).slice(-20);
    return '0x' + bitcoin.Buffer.from(hash).toString('hex');
  } else {
    hash = bitcoin.crypto.hash160(keyPair.getPublicKeyBuffer());
    payload = bitcoin.Buffer.allocUnsafe(21);
    payload.writeUInt8(network.scriptHash, 0);
    hash.copy(payload, 1);

    return bitcoin.bs58check.encode(payload);
  }
}

function customImportFromWif(wifUncompressed, network) {
  if (network.customHash) {
    var decoded = bitcoin.wif.decodeRaw(getCustomBs58(network).decode(wifUncompressed));
    return bitcoin.BigInteger.fromBuffer(decoded.privateKey);
  } else if (network.noBase58) {
    var hex = wifUncompressed.slice(0, 2) === '0x' ? wifUncompressed.substring(2) : wifUncompressed;
    return bitcoin.BigInteger.fromBuffer(bitcoin.Buffer.from(hex, 'hex'));
  } else {
    return bitcoin.ECPair.fromWIF(wifUncompressed, network).d;
  }
}

function getCustomBs58(network) {
  var customBs58Check = bitcoin.customBs58Check[network.customHash];
  if (!customBs58Check) {
    throw new Error('Unknown customHash');
  }
  return customBs58Check;
}

function getP2WPKHAddress(keyPair, network) {
  var pubKey = keyPair.getPublicKeyBuffer();
  var scriptPubKey = bitcoin.script.witnessPubKeyHash.output.encode(bitcoin.crypto.hash160(pubKey));
  return bitcoin.address.fromOutputScript(scriptPubKey, network);
}

function getNestedP2WPKHAddress(keyPair, network) {
  var pubKey = keyPair.getPublicKeyBuffer();
  var witnessScript = bitcoin.script.witnessPubKeyHash.output.encode(bitcoin.crypto.hash160(pubKey));
  var scriptPubKey = bitcoin.script.scriptHash.output.encode(bitcoin.crypto.hash160(witnessScript));
  return bitcoin.address.fromOutputScript(scriptPubKey, network);
}
