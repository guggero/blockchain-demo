angular
    .module('app')
    .component('cryptoPage', {
        templateUrl: 'pages/crypto/crypto.html',
        controller: CryptoPageController,
        controllerAs: 'vm',
        bindings: {}
    });

function CryptoPageController() {
    var vm = this;

    vm.networks = [
        { label: 'Bitcoin', config: bitcoin.networks.bitcoin },
        { label: 'Testnet', config: bitcoin.networks.testnet },
        { label: 'Litecoin', config: bitcoin.networks.litecoin },
        {
            label: 'Dash',
            config: {
                messagePrefix: '\x18Bitcoin Signed Message:\n',
                bip32: {
                    public: 0x0488b21e,
                    private: 0x0488ade4
                },
                pubKeyHash: 0x4C,
                scriptHash: 0x10,
                wif: 0xc9
            }
        },
        {
            label: 'PIVX',
            config: {
                messagePrefix: '\x18Bitcoin Signed Message:\n',
                bip32: {
                    public: 0x0488b21e,
                    private: 0x0488ade4
                },
                pubKeyHash: 0x1E,
                scriptHash: 0x0D,
                wif: 0xd4
            }
        }
    ];
    vm.network = vm.networks[0];

    vm.$onInit = function () {
        vm.newPrivateKey();
        vm.formatKeyForNetwork();
    };

    vm.newPrivateKey = function () {
        vm.decimalKey = bitcoin.ECPair.makeRandom().d;
        vm.formatKeyForNetwork();
    };

    vm.formatKeyForNetwork = function () {
        var network = vm.network.config;
        vm.keyPair = new bitcoin.ECPair(vm.decimalKey, null, { compressed: true, network: network });
        vm.keyPairUncompressed = new bitcoin.ECPair(vm.decimalKey, null, { compressed: false, network: network });
    }
}