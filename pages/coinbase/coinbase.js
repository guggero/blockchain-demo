angular
  .module('app')
  .component('coinbasePage', {
    templateUrl: 'pages/coinbase/coinbase.html',
    controller: CoinbasePageController,
    controllerAs: 'vm',
    bindings: {}
  });

function CoinbasePageController() {
  var vm = this;

  vm.peers = [{
    name: 'Peer A',
    blocks: [{
      number: 1,
      nonce: 114530,
      data: {
        coinbase: {value: 100, to: 'Oli'},
        txs: []
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    }, {
      number: 2,
      nonce: 110437,
      data: {
        coinbase: {value: 100, to: 'Oli'},
        txs: [{value: 10, from: 'Oli', to: 'Robin'}]
      }
    }, {
      number: 3,
      nonce: 70198,
      data: {
        txs: [{value: 5, from: 'Robin', to: 'Lara'}]
      }
    }, {
      number: 4,
      nonce: 13951,
      data: {
        txs: [{value: 20, from: 'Oli', to: 'Ali'}, {value: 5, from: 'Oli', to: 'Lara'}
        ]
      }
    }, {
      number: 5,
      nonce: 25442,
      data: {
        txs: [{value: 65, from: 'Oli', to: 'Ali'}]
      }
    }]
  }, {
    name: 'Peer B',
    blocks: [{
      number: 1,
      nonce: 114530,
      data: {
        coinbase: {value: 100, to: 'Oli'},
        txs: []
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    }, {
      number: 2,
      nonce: 110437,
      data: {
        coinbase: {value: 100, to: 'Oli'},
        txs: [{value: 10, from: 'Oli', to: 'Robin'}]
      }
    }, {
      number: 3,
      nonce: 70198,
      data: {
        txs: [{value: 5, from: 'Robin', to: 'Lara'}]
      }
    }, {
      number: 4,
      nonce: 13951,
      data: {
        txs: [{value: 20, from: 'Oli', to: 'Ali'}, {value: 5, from: 'Oli', to: 'Lara'}
        ]
      }
    }, {
      number: 5,
      nonce: 25442,
      data: {
        txs: [{value: 65, from: 'Oli', to: 'Ali'}]
      }
    }]
  }, {
    name: 'Peer C',
    blocks: [{
      number: 1,
      nonce: 114530,
      data: {
        coinbase: {value: 100, to: 'Oli'},
        txs: []
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    }, {
      number: 2,
      nonce: 110437,
      data: {
        coinbase: {value: 100, to: 'Oli'},
        txs: [{value: 10, from: 'Oli', to: 'Robin'}]
      }
    }, {
      number: 3,
      nonce: 70198,
      data: {
        txs: [{value: 5, from: 'Robin', to: 'Lara'}]
      }
    }, {
      number: 4,
      nonce: 13951,
      data: {
        txs: [{value: 20, from: 'Oli', to: 'Ali'}, {value: 5, from: 'Oli', to: 'Lara'}
        ]
      }
    }, {
      number: 5,
      nonce: 25442,
      data: {
        txs: [{value: 65, from: 'Oli', to: 'Ali'}]
      }
    }]
  }];
}