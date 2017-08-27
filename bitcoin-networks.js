var bitcoinNetworks = [
  { label: 'BTC (Bitcoin)', config: bitcoin.networks.bitcoin },
  { label: 'BTC (Bitcoin Testnet)', config: bitcoin.networks.testnet },
  { label: 'LTC (Litecoin)', config: bitcoin.networks.litecoin },
  {
    label: 'DASH (Dash)',
    config: {
      messagePrefix: '???',
      bip32: { public: 0x0488b21e, private: 0x0488ade4 },
      pubKeyHash: 0x4C,
      scriptHash: 0x10,
      wif: 0xcc
    }
  },
  {
    label: 'DOGE (Dogecoin)',
    config: {
      messagePrefix: '???',
      bip32: { public: 0x02facafd, private: 0x02fac398 },
      pubKeyHash: 0x1e,
      scriptHash: 0x16,
      wif: 0x9e
    }
    
  },
  {
    label: 'PIVX (PIVX)',
    config: {
      messagePrefix: '???',
      bip32: { public: 0x022d2533, private: 0x0221312b },
      pubKeyHash: 0x1E,
      scriptHash: 0x0D,
      wif: 0xd4
    }
  },
  {
    label: 'XVG (Verge)',
    config: {
      messagePrefix: '???',
      bip32: { public: 0x0488b21e, private: 0x0488ade4 },
      pubKeyHash: 0x1E,
      scriptHash: 0x21,
      wif: 0x9e //edit?
    }
  }
];
