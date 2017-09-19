# List of altcoins and their base58 prefixes

This list contains the Source for the base58 implementations of various Altcoins in the HD Wallet.
Also it contains essential part of the sources code

There is no specific order, I orientated on [coinmarketcap](https://coinmarketcap.com/)

@guggerf
have a look here: https://github.com/iancoleman/bip39/blob/master/src/js/bitcoinjs-extensions.js

## Bitcoin (BTC)
Source: https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L104

```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,0);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,5);
base58Prefixes[SECRET_KEY]     = std::vector<unsigned char>(1,128);
base58Prefixes[EXT_PUBLIC_KEY] = {0x04, 0x88, 0xB2, 0x1E};
base58Prefixes[EXT_SECRET_KEY] = {0x04, 0x88, 0xAD, 0xE4};
```

## Ethereum (ETH)
Source:

```cpp
//nothing found yet
```

## Bitcoin Cash (Bitcoin ABC) (BCH)
Source: https://github.com/Bitcoin-ABC/bitcoin-abc/blob/master/src/chainparams.cpp

```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1, 0);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1, 5);
base58Prefixes[SECRET_KEY]     = std::vector<unsigned char>(1, 128);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x88)(0xB2)(0x1E).convert_to_container<std::vector<unsigned char>>();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x88)(0xAD)(0xE4).convert_to_container<std::vector<unsigned char>>();
```


## Ripple (XRP)

```cpp
fuck@ripple
```

## IOTA
Source:

```cpp
//nothing found yet
```                 
                
## DogeCoin (DOGE)
Source: https://github.com/dogecoin/dogecoin/blob/master/src/chainparams.cpp#L132

```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,30);  // 0x1e
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,22);  // 0x16
base58Prefixes[SECRET_KEY]     = std::vector<unsigned char>(1,158); // 0x9e
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x02)(0xfa)(0xca)(0xfd).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x02)(0xfa)(0xc3)(0x98).convert_to_container<std::vector<unsigned char> >();
```

Testnet
```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,113); // 0x71
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,196); // 0xc4
base58Prefixes[SECRET_KEY]     = std::vector<unsigned char>(1,241); // 0xf1
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x35)(0x87)(0xcf).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x35)(0x83)(0x94).convert_to_container<std::vector<unsigned char> >();
```

## Dash (DASH)
Source: https://github.com/dashpay/dash/blob/master/src/chainparams.cpp#L168

```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,76);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,16);
base58Prefixes[SECRET_KEY]     = std::vector<unsigned char>(1,204);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x88)(0xB2)(0x1E).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x88)(0xAD)(0xE4).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_COIN_TYPE]  = boost::assign::list_of(0x80)(0x00)(0x00)(0x05).convert_to_container<std::vector<unsigned char> >();
```

## PIVX (PIVX)
Source: https://github.com/PIVX-Project/PIVX/blob/master/src/chainparams.cpp

```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1, 30);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1, 13);
base58Prefixes[SECRET_KEY]     = std::vector<unsigned char>(1, 212);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x02)(0x2D)(0x25)(0x33).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x02)(0x21)(0x31)(0x2B).convert_to_container<std::vector<unsigned char> >();
// 	BIP44 coin type is from https://github.com/satoshilabs/slips/blob/master/slip-0044.md
base58Prefixes[EXT_COIN_TYPE] = boost::assign::list_of(0x80)(0x00)(0x00)(0x77).convert_to_container<std::vector<unsigned char> >();
```

## DigiByte (DGB)
Source: https://github.com/digibyte/digibyte/blob/master/src/chainparams.cpp

```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,30);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,5);
base58Prefixes[SECRET_KEY]     = std::vector<unsigned char>(1,128);
base58Prefixes[SECRET_KEY_OLD] = std::vector<unsigned char>(1,158);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x88)(0xB2)(0x1E).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x88)(0xAD)(0xE4).convert_to_container<std::vector<unsigned char> >();
```

## BlackCoin (BLK)
Source: https://github.com/JohnDolittle/blackcoin-old/blob/master/src/chainparams.cpp#L91

```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1, 25);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1, 85);
base58Prefixes[SECRET_KEY]     = std::vector<unsigned char>(1, 153);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x88)(0xB2)(0x1E).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x88)(0xAD)(0xE4).convert_to_container<std::vector<unsigned char> >();
```

Testnet:
```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1, 111);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1, 196);
base58Prefixes[SECRET_KEY]     = std::vector<unsigned char>(1, 239);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x35)(0x87)(0xCF).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x35)(0x83)(0x94).convert_to_container<std::vector<unsigned char> >();
```

## Stratis (STRAT)
Source: https://github.com/startcoin-project/startcoin/blob/master/src/base58.h

```h
PUBKEY_ADDRESS      = 125, // address begins with s
SCRIPT_ADDRESS      = 5,
PUBKEY_ADDRESS_TEST = 127, // address begins with t
SCRIPT_ADDRESS_TEST = 196,
```

## ReddCoin (RDD)
Source: https://github.com/reddcoin-project/reddcoin/blob/master/src/chainparams.cpp

```cpp
base58Prefixes[PUBKEY_ADDRESS] = list_of(61);
base58Prefixes[SCRIPT_ADDRESS] = list_of(5);
base58Prefixes[SECRET_KEY]     = list_of(189);
base58Prefixes[EXT_PUBLIC_KEY] = list_of(0x04)(0x88)(0xB2)(0x1E);
base58Prefixes[EXT_SECRET_KEY] = list_of(0x04)(0x88)(0xAD)(0xE4);
```

## Myraid (XMY)
Source: https://github.com/myriadteam/myriadcoin/blob/master/src/chainparams.cpp

```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,50);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,9);
base58Prefixes[SECRET_KEY]     = std::vector<unsigned char>(1,178);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x88)(0xB2)(0x1E).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x88)(0xAD)(0xE4).convert_to_container<std::vector<unsigned char> >();
```

Testnet
```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,88);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,188);
base58Prefixes[SECRET_KEY]     = std::vector<unsigned char>(1,239);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x35)(0x87)(0xCF).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x35)(0x83)(0x94).convert_to_container<std::vector<unsigned char> >();
```

## Litecoin (LTC)
Source: 

```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,48);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,5);
base58Prefixes[SCRIPT_ADDRESS2] = std::vector<unsigned char>(1,50);
base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1,176);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x88)(0xB2)(0x1E).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x88)(0xAD)(0xE4).convert_to_container<std::vector<unsigned char> >();
```
Testnet:
```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,111);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,196);
base58Prefixes[SCRIPT_ADDRESS2] = std::vector<unsigned char>(1,58);
base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1,239);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x35)(0x87)(0xCF).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x35)(0x83)(0x94).convert_to_container<std::vector<unsigned char> >();
```


## NEM (XEM)
Source: https://github.com/NemProject/nem.core

```cpp
// other technology?
```

Testnet:
```cpp
//
```

## Monero (XMR)
Source: https://github.com/monero-project/monero/blob/master/src/cryptonote_config.h

```h
// whats this?
namespace config
{
  uint64_t const DEFAULT_FEE_ATOMIC_XMR_PER_KB = 500; // Just a placeholder!  Change me!
  uint8_t const FEE_CALCULATION_MAX_RETRIES = 10;
  uint64_t const DEFAULT_DUST_THRESHOLD = ((uint64_t)2000000000); // 2 * pow(10, 9)
  uint64_t const BASE_REWARD_CLAMP_THRESHOLD = ((uint64_t)100000000); // pow(10, 8)
  std::string const P2P_REMOTE_DEBUG_TRUSTED_PUB_KEY = "0000000000000000000000000000000000000000000000000000000000000000";

  uint64_t const CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX = 18;
  uint64_t const CRYPTONOTE_PUBLIC_INTEGRATED_ADDRESS_BASE58_PREFIX = 19;
  uint16_t const P2P_DEFAULT_PORT = 18080;
  uint16_t const RPC_DEFAULT_PORT = 18081;
  boost::uuids::uuid const NETWORK_ID = { {
      0x12 ,0x30, 0xF1, 0x71 , 0x61, 0x04 , 0x41, 0x61, 0x17, 0x31, 0x00, 0x82, 0x16, 0xA1, 0xA1, 0x10
    } }; // Bender's nightmare
  std::string const GENESIS_TX = "013c01ff0001ffffffffffff03029b2e4c0281c0b02e7c53291a94d1d0cbff8883f8024f5142ee494ffbbd08807121017767aafcde9be00dcfd098715ebcf7f410daebc582fda69d24a28e9d0bc890d1";
  uint32_t const GENESIS_NONCE = 10000;
```

Testnet:
```h
// whats this?
namespace testnet
  {
    uint64_t const CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX = 53;
    uint64_t const CRYPTONOTE_PUBLIC_INTEGRATED_ADDRESS_BASE58_PREFIX = 54;
    uint16_t const P2P_DEFAULT_PORT = 28080;
    uint16_t const RPC_DEFAULT_PORT = 28081;
    boost::uuids::uuid const NETWORK_ID = { {
        0x12 ,0x30, 0xF1, 0x71 , 0x61, 0x04 , 0x41, 0x61, 0x17, 0x31, 0x00, 0x82, 0x16, 0xA1, 0xA1, 0x11
      } }; // Bender's daydream
    std::string const GENESIS_TX = "013c01ff0001ffffffffffff0f029b2e4c0281c0b02e7c53291a94d1d0cbff8883f8024f5142ee494ffbbd0880712101168d0c4ca86fb55a4cf6a36d31431be1c53a3bd7411bb24e8832410289fa6f3b";
    uint32_t const GENESIS_NONCE = 10001;
  }
```

## NEO (NEO)
Source: https://github.com/neo-project/neo

```cpp
// other technology?
```

Testnet:
```cpp
//
```

## OmiseGO (OMG)
Source: https://omg.omise.co/

//ERC20 Token
//Ethereum based

## Qtum (QTUM)
Source: https://github.com/qtumproject/qtum/blob/testnet-2/src/chainparams.cpp#L139

```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,58);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,50);
base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1,128);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x88)(0xB2)(0x1E).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x88)(0xAD)(0xE4).convert_to_container<std::vector<unsigned char> >();
```

Testnet:
```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,120);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,110);
base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1,239);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x35)(0x87)(0xCF).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x35)(0x83)(0x94).convert_to_container<std::vector<unsigned char> >();
```

## Hshare (HSR)
Source: https://github.com/HcashOrg/Hshare/blob/master/src/chainparams.cpp#L120

```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1, 40);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1, 100);
base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1, (40+100));
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x88)(0xC2)(0x1E).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x88)(0xB2)(0xDD).convert_to_container<std::vector<unsigned char> >();
```

Testnet:
```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1, 65); // hshare test net start with T
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1, 196);
base58Prefixes[SECRET_KEY]     = std::vector<unsigned char>(1, 65 + 128);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x35)(0x87)(0xCF).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x35)(0x83)(0x94).convert_to_container<std::vector<unsigned char> >();
```

## BitConnect (BCC)
Source: https://github.com/bitconnectcoin/bitconnectcoin

```cpp
// other technology?
```

## Lisk (LSK)
Source: https://github.com/LiskHQ

```cpp
// other technology?
```

## Zcash (ZEC)
Source: https://github.com/zcash/zcash/blob/master/src/chainparams.cpp#L103

```cpp
// guarantees the first 2 characters, when base58 encoded, are "t1"
base58Prefixes[PUBKEY_ADDRESS]     = {0x1C,0xB8};
// guarantees the first 2 characters, when base58 encoded, are "t3"
base58Prefixes[SCRIPT_ADDRESS]     = {0x1C,0xBD};
// the first character, when base58 encoded, is "5" or "K" or "L" (as in Bitcoin)
base58Prefixes[SECRET_KEY]         = {0x80};
// do not rely on these BIP32 prefixes; they are not specified and may change
base58Prefixes[EXT_PUBLIC_KEY]     = {0x04,0x88,0xB2,0x1E};
base58Prefixes[EXT_SECRET_KEY]     = {0x04,0x88,0xAD,0xE4};
// guarantees the first 2 characters, when base58 encoded, are "zc"
base58Prefixes[ZCPAYMENT_ADDRRESS] = {0x16,0x9A};
// guarantees the first 2 characters, when base58 encoded, are "SK"
base58Prefixes[ZCSPENDING_KEY]     = {0xAB,0x36};
```

Testnet:
```cpp
// guarantees the first 2 characters, when base58 encoded, are "tm"
base58Prefixes[PUBKEY_ADDRESS]     = {0x1D,0x25};
// guarantees the first 2 characters, when base58 encoded, are "t2"
base58Prefixes[SCRIPT_ADDRESS]     = {0x1C,0xBA};
// the first character, when base58 encoded, is "9" or "c" (as in Bitcoin)
base58Prefixes[SECRET_KEY]         = {0xEF};
// do not rely on these BIP32 prefixes; they are not specified and may change
base58Prefixes[EXT_PUBLIC_KEY]     = {0x04,0x35,0x87,0xCF};
base58Prefixes[EXT_SECRET_KEY]     = {0x04,0x35,0x83,0x94};
// guarantees the first 2 characters, when base58 encoded, are "zt"
base58Prefixes[ZCPAYMENT_ADDRRESS] = {0x16,0xB6};
// guarantees the first 2 characters, when base58 encoded, are "ST"
base58Prefixes[ZCSPENDING_KEY]     = {0xAC,0x08};
```

## Waves (WAVES)
Source: https://github.com/wavesplatform/Waves

```cpp
// other technology?
```

## Peercoin (PPC)
Source: https://github.com/peercoin/peercoin/blob/master/src/base58.h#L280

No EXT_SECRET_KEY!!??

```cpp
PUBKEY_ADDRESS = 55,  // ppcoin: addresses begin with 'P'
SCRIPT_ADDRESS = 117, // ppcoin: addresses begin with 'p'
PUBKEY_ADDRESS_TEST = 111,
SCRIPT_ADDRESS_TEST = 196,
```

## Namecoin (NMC)
Source: https://github.com/domob1812/namecore/blob/master/src/chainparams.cpp#L167

```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,52);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,13);
base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1,180);
/* FIXME: Update these below.  */
base58Prefixes[EXT_PUBLIC_KEY] = {0x04, 0x88, 0xB2, 0x1E};
base58Prefixes[EXT_SECRET_KEY] = {0x04, 0x88, 0xAD, 0xE4};
```

Testnet:
```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,111);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,196);
base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1,239);
/* FIXME: Update these below.  */
base58Prefixes[EXT_PUBLIC_KEY] = {0x04, 0x35, 0x87, 0xCF};
base58Prefixes[EXT_SECRET_KEY] = {0x04, 0x35, 0x83, 0x94};
```

## Feathercoin
Source: https://github.com/FeatherCoin/Feathercoin/blob/master-0.8/src/base58.h#L275

```cpp
PUBKEY_ADDRESS = 14,
SCRIPT_ADDRESS = 5,
PUBKEY_ADDRESS_TEST = 65,
SCRIPT_ADDRESS_TEST = 196,
```

## Counterparty (XCP)
Source: https://github.com/CounterpartyXCP/counterparty-lib
https://counterparty.io/docs/create_addresses/

```cpp
//nach Liste
BIP 44 coin-typ = 0
mainnet version_WIF = color_BTC
mainnet version_p2pkh = 0
```


## NuShares (NSR)
Source: https://bitbucket.org/JordanLeePeershares/nubit/src/8845fd419d90586afa491e1c484e2667fbcac287/src/base58.h?at=master&fileviewer=file-view-default

```cpp
PUBKEY_ADDRESS = 63,  // Peershare addresses begin with 'S'
SCRIPT_ADDRESS = 125, // Peershare script addresses begin with 's'
PUBKEY_ADDRESS_TEST = 32,
SCRIPT_ADDRESS_TEST = 212,

S_PUBKEY_ADDRESS = 63,
S_SCRIPT_ADDRESS = 64,
S_PUBKEY_ADDRESS_TEST = 125,
S_SCRIPT_ADDRESS_TEST = 126,

B_PUBKEY_ADDRESS = 25,
B_SCRIPT_ADDRESS = 26,
B_PUBKEY_ADDRESS_TEST = 85,
B_SCRIPT_ADDRESS_TEST = 86,

Y_PUBKEY_ADDRESS = 78,
Y_SCRIPT_ADDRESS = 79,
Y_PUBKEY_ADDRESS_TEST = 140,
Y_SCRIPT_ADDRESS_TEST = 141,

E_PUBKEY_ADDRESS = 33,
E_SCRIPT_ADDRESS = 34,
E_PUBKEY_ADDRESS_TEST = 92,
E_SCRIPT_ADDRESS_TEST = 93,

X_PUBKEY_ADDRESS = 75,
X_SCRIPT_ADDRESS = 76,
X_PUBKEY_ADDRESS_TEST = 137,
X_SCRIPT_ADDRESS_TEST = 138,

UNKNOWN_UNIT_VERSION = 255,
```

## MazaCoin (MZC)
Source: https://github.com/MazaCoin/MazaCoin/blob/master/src/chainparams.cpp#L76

```cpp
base58Prefixes[PUBKEY_ADDRESS] = 50;
base58Prefixes[SCRIPT_ADDRESS] = 9;
base58Prefixes[SECRET_KEY] = 224;
```

Testnet:
```cpp
base58Prefixes[PUBKEY_ADDRESS] = 88;
base58Prefixes[SCRIPT_ADDRESS] = 188;
base58Prefixes[SECRET_KEY] = 239;
```

## Viacoin (VIA)
Source: https://github.com/viacoin/viacoin/blob/master/src/chainparams.cpp#L135

```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,71);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,33);
base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1,199);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x88)(0xB2)(0x1E).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x88)(0xAD)(0xE4).convert_to_container<std::vector<unsigned char> >();
```

Testnet:
```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,127);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,196);
base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1,255);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x35)(0x87)(0xCF).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x35)(0x83)(0x94).convert_to_container<std::vector<unsigned char> >();
```

## Rubycoin (RBY)
Source: https://github.com/rubycoinorg/rubycoin/blob/master/src/chainparams.cpp#L92

```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,60);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,85);
base58Prefixes[SECRET_KEY]     = std::vector<unsigned char>(1,188);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x88)(0xB2)(0x1E).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x88)(0xAD)(0xE4).convert_to_container<std::vector<unsigned char> >();
```

Testnet:
```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,111);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,196);
base58Prefixes[SECRET_KEY]     = std::vector<unsigned char>(1,239);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x35)(0x87)(0xCF).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x35)(0x83)(0x94).convert_to_container<std::vector<unsigned char> >();
```

## Groestlcoin (GRS)
Source: https://github.com/GroestlCoin/groestlcoin/blob/master/src/groestlcoin.cpp#L406

```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,36);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,5);
base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1,128);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x88)(0xB2)(0x1E).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x88)(0xAD)(0xE4).convert_to_container<std::vector<unsigned char> >();
```

Testnet:
```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,111);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,196);
base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1,239);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x35)(0x87)(0xCF).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x35)(0x83)(0x94).convert_to_container<std::vector<unsigned char> >();

```

## BuzzCoin (BUZZ)
Source: https://github.com/BUZZCOINproject/buzzcoin/blob/master/src/chainparams.cpp#L88

```cpp
base58Prefixes[PUBKEY_ADDRESS] = list_of(25);
base58Prefixes[SCRIPT_ADDRESS] = list_of(85);
base58Prefixes[SECRET_KEY] =     list_of(153);
base58Prefixes[EXT_PUBLIC_KEY] = list_of(0x04)(0x88)(0xC2)(0x1E);
base58Prefixes[EXT_SECRET_KEY] = list_of(0x04)(0x88)(0xA0)(0xE4);
```

Testnet:
```cpp
base58Prefixes[PUBKEY_ADDRESS] = list_of(127);
base58Prefixes[SCRIPT_ADDRESS] = list_of(196);
base58Prefixes[SECRET_KEY]     = list_of(239);
base58Prefixes[EXT_PUBLIC_KEY] = list_of(0x04)(0x35)(0x87)(0xCF);
base58Prefixes[EXT_SECRET_KEY] = list_of(0x04)(0x35)(0x83)(0x94);
```

## EmberCoin (EMB)
Source: https://github.com/EmberCoin/Ember/blob/master/src/chainparams.cpp#L93

```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,92);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,110);
base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1,50);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x88)(0xB2)(0x1E).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x88)(0xAD)(0xE4).convert_to_container<std::vector<unsigned char> >();
```

Testnet:
```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,93);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,111);
base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1,51);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x88)(0xB2)(0x1E).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x88)(0xAD)(0xE4).convert_to_container<std::vector<unsigned char> >();
```

## addCoin
Source: 

```cpp

```

Testnet:
```cpp

```

## addCoin
Source: 

```cpp

```

Testnet:
```cpp

```


## Mapping list
found a list of altcoin mapping....maybe this helps
Source: https://github.com/libbitcoin/libbitcoin/wiki/Altcoin-Version-Mappings

```
      |  BIP 44    |      mainnet     |     mainnet     |     mainnet     |  EXT_SECRET_KEY   |
Coin  | coin_type’ |    version_WIF   |  version_p2pkh  |  version_p2sh   | version_hd_secret | References
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————
BTC   |      0     |        128       |   0/('1')       |   5/('3')       | 76066276/('xprv') | https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L104
TEST  |      1     |        239       | 111/('m' | 'n') | 196/('2')       | 70615956/('tprv') | https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L177
LTC   |      2     |        176       |  48/('L')       |   5/('3')       | 76066276/('xprv') | https://github.com/litecoin-project/litecoin/blob/master-0.10/src/chainparams.cpp#L164
DOGE  |      3     |        158       |  30/('D')       |  22/('9' | 'A') | 49988504/('dgpv') | https://github.com/dogecoin/dogecoin/blob/master/src/chainparams.cpp#L132
RDD   |      4     | 189/'V'/c        |  61/('R')       |   5/('3')       | 76066276/('xprv') | https://github.com/reddcoin-project/reddcoin/blob/master/src/base58.h#L275 & https://github.com/reddcoin-project/rddnet/blob/master/params.go#L148
DASH  |      5     |        204       |  76/('X')       |  16/('7')       | 50221772/('drkp') | https://github.com/dashpay/dash/blob/master/src/chainparams.cpp#L168
PPC   |      6     |        183       |  55/('P')       | 117/('p')       |                   | https://github.com/belovachap/peercoin/blob/master/src/base58.h#L267 and https://github.com/super3/Peercoin.net -   see NBT base58.h
NMC   |      7     |        180       |  52/('M' | 'N') |  13/('6')       | 76066276/('xprv') | https://github.com/domob1812/namecore/blob/master/src/chainparams.cpp#L133
FTC   |      8     |        142       |  14/('6' | '7') |   5/('3')       |                   | https://github.com/FeatherCoin/Feathercoin/blob/master-0.8/src/base58.h#L275
XCP   |      9     |     color_BTC    |   0/('1')       |       ?         |                   | Built on BTC, https://github.com/CounterpartyXCP/counterparty-lib  http://counterparty.io/docs/create_addresses/
BLK   |     10     |        153       |  25/('B')       |  85/('b')       | 76066276/('xprv') | https://github.com/rat4/blackcoin/blob/master/src/chainparams.cpp#L91
NSR   |     11     |     149/191 c/u  |  63/('S')       |  64/('S' | 'T') |                   | Built on PPC, https://nubits.com/nushares/introduction
NBT   |     12     |     150/191 c/u  |  25/('B')       |  26/('B')       |                   | https://bitbucket.org/JordanLeePeershares/nubit/NuBit / src /base58.h
MZC   |     13     |        224       |  50/('M')       |   9/('4' | '5') |      unknown      | https://github.com/MazaCoin/MazaCoin/blob/master/src/chainparams.cpp#L76
VIA   |     14     |        199       |  71/('V')       |  33/('E')       | 76066276/('xprv') | https://github.com/viacoin/viacoin/blob/master/src/chainparams.cpp#L154
XCH   |     15     |     color_VIA    |  71/('V')       |       ?         |                   | Built on VIA, https://github.com/ClearingHouse/clearinghoused/blob/master/lib/config.py#L55 
RBY   |     16     |        189       |  61/('R')       |  85/('b')       |                   | https://github.com/rubycoinorg/rubycoin/blob/master/src/base58.h
GRS   |     17     |        128       |  36/('F')       |   5/('3')       | 76066276/('xprv') | https://github.com/GroestlCoin/groestlcoin/blob/master/src/groestlcoin.cpp#L380
DGC   |     18     |        158       |  30/('D')       |   5/('3')       | 76066276/('xprv') | https://github.com/DGCDev/digitalcoin/blob/master/src/chainparams.cpp#L74
CCN   |     19     |        156       |  28/('C')       |   5/('3')       |                   | https://github.com/Cannacoin-Project/Cannacoin/blob/Proof-of-Stake/src/base58.h#L275
DGB   |     20     |        128       |  30/('D')       |   5/('3')       | 76066276/('xprv') | https://github.com/digibyte/digibyte/blob/master/src/chainparams.cpp#L73
???   |     21     |  color_agnostic  |  19/'a'(168bits)|  23/('A')       |                   | See "Open Assets Test Vector Examples" below
MONA  |     22     |        176       |  50/('M')       |   5/('3')       | 76066276/('xprv') | https://github.com/monacoinproject/monacoin/blob/master-0.10/src/chainparams.cpp#L159
CLAM  |     23     |        133       | 137/('x')       |  13/('6')       | 76066276/('xprv') | https://github.com/nochowderforyou/clams/blob/master/src/chainparams.cpp#L97
XPM   |     24     |        151       |  23/('A')       |  83/('a')       |                   | https://github.com/primecoin/primecoin/blob/master/src/base58.h#L275
NEOS  |     25     |        239       |  63/('S')       | 188/('2')       |      unknown      | https://github.com/bellacoin/neoscoin/blob/master/src/chainparams.cpp#L123
JBS   |     26     |        171       |  43/('J')       | 105/('j')       |                   | https://github.com/jyap808/jumbucks/blob/master/src/base58.h#L276
ZRC   |     27     |        208       |  80/('Z')       |   5/('3')       | 76066276/('xprv') | https://github.com/ZiftrCOIN/ziftrcoin/blob/master/src/chainparams.cpp#L159
VTC   |     28     |        199       |  71/('V')       |   5/('3')       |                   | https://github.com/vertcoin/vertcoin/blob/master/src/base58.h#L275
NXT   |     29     |                  |                 |                 |                   | https://bitbucket.org/JeanLucPicard/nxt/src and unofficial at https://github.com/Blackcomb/nxt
MUE   |     31     |        143       |  15/('7')       |   9/('4' | '5 ) |1297433939/('HRBy')| https://github.com/MonetaryUnit/MUE-Src/blob/master/src/chainparams.cpp#L221
ZOOM  |     32     |        231       | 103/('i')       |  92/('e')       |                   | https://github.com/zoom-c/zoom/blob/master/src/base58.h#L275
VPN   |     33     |        199       |  71/('V')       |   5/('3')       |                   | https://github.com/Bit-Net/VpnCoin/blob/master/src/base58.h#L279
CDN   |     34     |        156       |  28/('C')       |   5/('3')       |                   | https://github.com/ThisIsOurCoin/canadaecoin/blob/master/src/base58.h#L275
SDC   |     35     |        191       |  63/('S')       | 125/('s')       |4001378792/('sdcv')| https://github.com/ShadowProject/shadow/blob/master/src/chainparams.cpp#L164
PKB   |     36     |        183       |  55/('P')       |  28/('C')       |                   | https://github.com/parkbyte/ParkByte/blob/master/src/base58.h#L278
PND   |     37     |        183       |  55/('P')       |  22/('9' | 'A') |                   | https://github.com/coinkeeper/2015-04-19_21-22_pandacoin/blob/master/src/base58.h#L279
START |     38     |        253       | 125/('s')       |   5/('3')       |                   | https://github.com/startcoin-project/startcoin/blob/master/src/base58.h#L275
GCR   |     39     |        154       |  38/('G')       |  97/('g')       | 76066276/('xprv') | https://github.com/globalcurrencyreserve/gcr/blob/master/src/chainparams.cpp#L88
NVC   |     50     |        136       |   8/('4')       |  20/('9')       |                   | https://github.com/novacoin-project/novacoin/blob/master/src/base58.h#L280
AC    |     51     |        151       |  23/('A')       |   8/('4')       |                   | https://github.com/AsiaCoin/AsiaCoinFix/blob/master/src/base58.h#L279
BTCD  |     52     |        188       |  60/('R')       |  85/('b')       |                   | https://github.com/jl777/btcd/blob/master/src/base58.h#L278
DOPE  |     53     |        136       |   8/('4')       |   5/('3')       |                   | https://github.com/dopecoin-dev/DopeCoinV3/blob/master/src/base58.h#L279
TPC   |     54     |        193       |  65/('T')       |   5/('3')       |                   | https://github.com/9cat/templecoin/blob/templecoin/src/base58.h#L275
???   |     55     |        151       |  23/('A')       |   5/('3')       |                   | https://github.com/iobond/aib/blob/master/src/base58.h#L276 and from ./aib/src/wtmint.h for #define WTMINT_PUBKEY_ADDRESS 23 // Dec.
ETH   |     60     |                  |                 |                 |                   | https://github.com/ethereum/  and https://github.com/ethereum/cpp-ethereum/wiki
???   |     64     |                  |                 |                 |                   | https://github.com/openchain/
OK    |     69     |        183       |  55/('P')       |  28/('C')       | 63708275/('okpv') | https://github.com/okcashpro/okcash/blob/master/src/chainparams.cpp#L168
DOGED |     77     |        158       |  30/('D')       |  33/('E')       |                   | https://github.com/doged/dogedsource/blob/master/src/base58.h#L279
EFL   |     78     |        176       |  48/('L')       |   5/('3')       |                   | https://github.com/Electronic-Gulden-Foundation/egulden/blob/master/src/base58.h#L275
POT   |     81     |        183       |  55/('P')       |   5/('3')       |                   | https://github.com/potcoin/Potcoin/blob/master/src/base58.h#L275
XRP   |     NR     | 96?/'s'(116 bits)|96?/'r'(136 bits)|                 |                   | https://github.com/stevenzeiler/ripple-wallet (OMG - Is Ripple using 96 bit secret keys?)
XMR   |    128     |        N/A       |    /('4')       |    N/A          |  ???              |
ZEC   |    133     |        128       | (28 & b8)/('t1')| (28 & bd)/('t3')| 76066276/('xprv') | https://github.com/zcash/zcash/blob/master/src/chainparams.cpp#L105
```
