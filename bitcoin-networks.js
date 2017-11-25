// sorted by label, not by preference ;-)
var bitcoinNetworks = [{
  label:  "BCH (BitcoinCash)",
  config:  {
    messagePrefix:  "unused",
    bip32:  {
      public:  76067358,
      private:  76066276
    },
    pubKeyHash:  0,
    scriptHash:  5,
    wif:  128,
    bip44:  145
  }
}, {
  label:  "BLK (BlackCoin)",
  config:  {
    messagePrefix:  "unused",
    bip32:  {
      public:  76067358,
      private:  76066276
    },
    pubKeyHash:  25,
    scriptHash:  85,
    wif:  153,
    bip44:  10
  }
}, {
  label:  "BTC (Bitcoin Testnet)",
  config:  {
    messagePrefix:  "\u0018Bitcoin Signed Message:\n",
    bip32:  {
      public:  70617039,
      private:  70615956
    },
    pubKeyHash:  111,
    scriptHash:  196,
    wif:  239,
    bip44:  1
  }
}, {
  label:  "BTC (Bitcoin)",
  config:  {
    messagePrefix:  "\u0018Bitcoin Signed Message:\n",
    bip32:  {
      public:  76067358,
      private:  76066276
    },
    pubKeyHash:  0,
    scriptHash:  5,
    wif:  128,
    bip44:  0
  }
}, {
  label:  "BUZZ (BuzzCoin)",
  config:  {
    messagePrefix:  "unused",
    bip32:  {
      public:  76071454,
      private:  76062948
    },
    pubKeyHash:  25,
    scriptHash:  85,
    wif:  153,
    bip44:  3841
  }
}, {
  label:  "DASH (Dash)",
  config:  {
    messagePrefix:  "unused",
    bip32:  {
      public:  76067358,
      private:  76066276
    },
    pubKeyHash:  76,
    scriptHash:  16,
    wif:  204,
    bip44:  5
  }
}, {
  label:  "DGB (DigiByte)",
  config:  {
    messagePrefix:  "unused",
    bip32:  {
      public:  76067358,
      private:  76066276
    },
    pubKeyHash:  30,
    scriptHash:  5,
    wif:  128,
    bip44:  20
  }
}, {
  label:  "DOGE (Dogecoin)",
  config:  {
    messagePrefix:  "unused",
    bip32:  {
      public:  49990397,
      private:  49988504
    },
    pubKeyHash:  30,
    scriptHash:  22,
    wif:  158,
    bip44:  3
  }
}, {
  label:  "EMB (EmberCoin)",
  config:  {
    messagePrefix:  "unused",
    bip32:  {
      public:  76067358,
      private:  76066276
    },
    pubKeyHash:  92,
    scriptHash:  110,
    wif:  50,
    bip44:  3842
  }
}, {
  label:  "LTC (Litecoin Testnet)",
  config:  {
    messagePrefix:  "\u0019Litecoin Signed Message:\n",
    bip32:  {
      public:  70617039,
      private:  70615956
    },
    pubKeyHash:  111,
    scriptHash:  58,
    wif:  239,
    bip44:  1
  }
}, {
  label:  "LTC (Litecoin)",
  config:  {
    messagePrefix:  "\u0019Litecoin Signed Message:\n",
    bip32:  {
      public:  27108450,
      private:  27106558
    },
    pubKeyHash:  48,
    scriptHash:  50,
    wif:  176,
    bip44:  2
  }
}, {
  label:  "PIVX (PIVX)",
  config:  {
    messagePrefix:  "unused",
    bip32:  {
      public:  36513075,
      private:  35729707
    },
    pubKeyHash:  30,
    scriptHash:  13,
    wif:  212,
    bip44:  119
  }
}, {
  label:  "RDD (ReddCoin)",
  config:  {
    messagePrefix:  "unused",
    bip32:  {
      public:  76067358,
      private:  76066276
    },
    pubKeyHash:  61,
    scriptHash:  5,
    wif:  189,
    bip44:  4
  }
}, {
  label:  "SMART (SmartCash)",
  config:  {
    messagePrefix:  "unused",
    bip32:  {
      public:  76067358,
      private:  76066276
    },
    pubKeyHash:  63,
    scriptHash:  18,
    wif:  191,
    bip44:  224,
    customHash:  "keccak256"
  }
}, {
  label:  "START (StartCOIN)",
  config:  {
    messagePrefix:  "unused",
    bip32:  {
      public:  0,
      private:  0
    },
    pubKeyHash:  125,
    scriptHash:  5,
    wif:  253,
    bip44:  38
  }
}, {
  label:  "STRAT (Stratis)",
  config:  {
    messagePrefix:  "unused",
    bip32:  {
      public:  70617039,
      private:  70615956
    },
    pubKeyHash:  65,
    scriptHash:  196,
    wif:  193,
    bip44:  105
  }
}, {
  label:  "TRC (Terracoin)",
  config:  {
    messagePrefix:  "unused",
    bip32:  {
      public:  76067358,
      private:  76066276
    },
    pubKeyHash:  0,
    scriptHash:  5,
    wif:  128,
    bip44:  83
  }
}, {
  label:  "VIA (Viacoin)",
  config:  {
    messagePrefix:  "unused",
    bip32:  {
      public:  76067358,
      private:  76066276
    },
    pubKeyHash:  71,
    scriptHash:  33,
    wif:  199,
    bip44:  14
  }
}, {
  label:  "XVG (Verge)",
  config:  {
    messagePrefix:  "unused",
    bip32:  {
      public:  76067358,
      private:  76066276
    },
    pubKeyHash:  30,
    scriptHash:  33,
    wif:  158,
    bip44:  77
  }
}];

function customToWIF(keyPair, network) {
  if (network.customHash) {
    if (!keyPair.d) {
      throw new Error('Missing private key')
    }
    return getCustomBs58(network).encode(bitcoin.wif.encodeRaw(network.wif, keyPair.d.toBuffer(32), keyPair.compressed));
  } else {
    return keyPair.toWIF();
  }
}

function customGetAddress(keyPair, network) {
  if (network.customHash) {
    var hash = bitcoin.crypto.hash160(keyPair.getPublicKeyBuffer());
    var payload = bitcoin.Buffer.allocUnsafe(21)
    payload.writeUInt8(network.pubKeyHash, 0)
    hash.copy(payload, 1)

    return getCustomBs58(network).encode(payload);
  } else {
    return keyPair.getAddress();
  }
}

function customImportFromWif(wifUncompressed, network) {
  if (network.customHash) {
    var decoded = bitcoin.wif.decodeRaw(getCustomBs58(network).decode(wifUncompressed));
    return bitcoin.BigInteger.fromBuffer(decoded.privateKey);
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
