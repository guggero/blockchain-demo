var bitcoinNetworks = [{
  label: 'BTC (Bitcoin)',
  config: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {public: 0x0488b21e, private: 0x0488ade4},
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
    bip44: 0x00
  }
}, {
  label: 'BTC (Bitcoin Testnet)',
  config: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {public: 0x043587cf, private: 0x04358394},
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
    bip44: 0x01
  }
}, {
  label: 'BCH (BitcoinCash)',
  config: {
    messagePrefix: 'unused',
    bip32: {public: 0x0488b21e, private: 0x0488ade4},
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
    bip44: 0x91
  }
}, {
  label: 'BUZZ (BuzzCoin)',
  config: {
    messagePrefix: 'unused',
    bip32: {public: 0x0488c21e, private: 0x0488a0e4},
    pubKeyHash: 0x19,
    scriptHash: 0x55,
    wif: 0x99,
    bip44: 0xf01 // unofficial!!! = F00 + 1
  }
}, {
  label: 'EMB (EmberCoin)',
  config: {
    messagePrefix: 'unused',
    bip32: {public: 0x0488b21e, private: 0x0488ade4},
    pubKeyHash: 0x5c,
    scriptHash: 0x6e,
    wif: 0x32,
    bip44: 0xf02 // unofficial!!! = F00 + 2
  }
}, {
  label: 'LTC (Litecoin)',
  config: {
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bip32: {public: 0x019da462, private: 0x019d9cfe},
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0,
    bip44: 0x02
  }
}, {
  label: 'LTC (Litecoin Testnet)',
  config: {
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bip32: {public: 0x043587cf, private: 0x04358394},
    pubKeyHash: 0x6f,
    scriptHash: 0x3a,
    wif: 0xef,
    bip44: 0x01
  }
}, {
  label: 'DASH (Dash)',
  config: {
    messagePrefix: 'unused',
    bip32: {public: 0x0488b21e, private: 0x0488ade4},
    pubKeyHash: 0x4C,
    scriptHash: 0x10,
    wif: 0xcc,
    bip44: 0x05
  }
}, {
  label: 'DOGE (Dogecoin)',
  config: {
    messagePrefix: 'unused',
    bip32: {public: 0x02facafd, private: 0x02fac398},
    pubKeyHash: 0x1e,
    scriptHash: 0x16,
    wif: 0x9e,
    bip44: 0x03
  }
}, {
  label: 'DGB (DigiByte)',
  config: {
    messagePrefix: 'unused',
    bip32: {public: 0x0488b21e, private: 0x0488ade4},
    pubKeyHash: 0x1e,
    scriptHash: 0x05,
    wif: 0x80,
    bip44: 0x14
  }
}, {
  label: 'BLK (BlackCoin)',
  config: {
    messagePrefix: 'unused',
    bip32: {public: 0x0488b21e, private: 0x0488ade4},
    pubKeyHash: 0x19,
    scriptHash: 0x55,
    wif: 0x99,
    bip44: 0x0a
  }
}, {
  label: 'RDD (ReddCoin)',
  config: {
    messagePrefix: 'unused',
    bip32: {public: 0x0488b21e, private: 0x0488ade4},
    pubKeyHash: 0x3d,
    scriptHash: 0x05,
    wif: 0xbd,
    bip44: 0x04
  }
}, {
  label: 'START (StartCOIN)',
  config: {
    messagePrefix: 'unused',
    bip32: {public: 0x00, private: 0x00},
    pubKeyHash: 0x7d,
    scriptHash: 0x05,
    wif: 0xfd,
    bip44: 0x26
  }
}, {
  label: 'STRAT (Stratis)',
  config: {
    messagePrefix: 'unused',
    bip32: {public: 0x043587cf, private: 0x04358394},
    pubKeyHash: 0x41,
    scriptHash: 0xc4,
    wif: 0xc1,
    bip44: 0x69
  }
}, {
  label: 'SMART (SmartCash)',
  config: {
    messagePrefix: 'unused',
    bip32: {public: 0x0488b21e, private: 0x0488ade4},
    pubKeyHash: 0x3f,
    scriptHash: 0x12,
    wif: 0xbf,
    bip44: 0xe0
  }
}, {
  label: 'PIVX (PIVX)',
  config: {
    messagePrefix: 'unused',
    bip32: {public: 0x022d2533, private: 0x0221312b},
    pubKeyHash: 0x1E,
    scriptHash: 0x0D,
    wif: 0xd4,
    bip44: 0x77
  }
}, {
  label: 'XVG (Verge)',
  config: {
    messagePrefix: 'unused',
    bip32: {public: 0x0488b21e, private: 0x0488ade4},
    pubKeyHash: 0x1E,
    scriptHash: 0x21,
    wif: 0x9e,
    bip44: 0x4d
  }
}, {
  label: 'VIA (Viacoin)',
  config: {
    messagePrefix: 'unused',
    bip32: {
      public: 0x0488b21e, private: 0x0488ade4
    },
    pubKeyHash: 0x47,
    scriptHash: 0x21,
    wif: 0xc7,
    bip44: 0x0e
  }
}];
