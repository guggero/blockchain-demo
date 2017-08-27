// List of altcoins and their base58 prefixes

//Bitcoin
//from https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L104

```cpp
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,0);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,5);
base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1,128);
base58Prefixes[EXT_PUBLIC_KEY] = {0x04, 0x88, 0xB2, 0x1E};
base58Prefixes[EXT_SECRET_KEY] = {0x04, 0x88, 0xAD, 0xE4};
```

// Ethereum
//from:

//Bitcoin Cash (Bitcoin ABC)
//From: https://github.com/Bitcoin-ABC/bitcoin-abc/blob/master/src/chainparams.cpp

```
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1, 0);
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1, 5);
base58Prefixes[SECRET_KEY] = std::vector<unsigned char>(1, 128);
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x88)(0xB2)(0x1E).convert_to_container<std::vector<unsigned char>>();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x88)(0xAD)(0xE4).convert_to_container<std::vector<unsigned char>>();
```

//Ripple
//from: 

//IOTA
//from: 

                
                
//Doge
//from: https://github.com/dogecoin/dogecoin/blob/master/src/chainparams.cpp#L132

```
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,30);  // 0x1e
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,22);  // 0x16
base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1,158); // 0x9e
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x02)(0xfa)(0xca)(0xfd).convert_to_container<std::vector<unsigned char> >();
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x02)(0xfa)(0xc3)(0x98).convert_to_container<std::vector<unsigned char> >();
```

//Dash
//from https://github.com/dashpay/dash/blob/master/src/chainparams.cpp#L168

```
// Dash addresses start with 'X'
base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,76);
// Dash script addresses start with '7'
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,16);
// Dash private keys start with '7' or 'X'
base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1,204);
// Dash BIP32 pubkeys start with 'xpub' (Bitcoin defaults)
base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x88)(0xB2)(0x1E).convert_to_container<std::vector<unsigned char> >();
// Dash BIP32 prvkeys start with 'xprv' (Bitcoin defaults)
base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x88)(0xAD)(0xE4).convert_to_container<std::vector<unsigned char> >();
// Dash BIP44 coin type is '5'
base58Prefixes[EXT_COIN_TYPE]  = boost::assign::list_of(0x80)(0x00)(0x00)(0x05).convert_to_container<std::vector<unsigned char> >();
```


//found a list of altcoin mapping....
//maybe this helps
//from: https://github.com/libbitcoin/libbitcoin/wiki/Altcoin-Version-Mappings

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
