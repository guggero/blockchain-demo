angular
  .module('app')
  .component('tokensPage', {
    templateUrl: 'pages/tokens/tokens.html',
    controller: TokensPageController,
    controllerAs: 'vm',
    bindings: {}
  });

function TokensPageController() {
  var vm = this;

  vm.peers = [{
    name: 'Peer A',
    blocks: [{
      number: 1,
      nonce: 30002,
      data: {
        txs: [{value: 200, from: 'Ali', to: 'Oli'}, {value: 10, from: 'Ali', to: 'Robin'}]
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    }, {
      number: 2,
      nonce: 54232,
      data: {
        txs: [{value: 10, from: 'Oli', to: 'Robin'}]
      }
    }, {
      number: 3,
      nonce: 54657,
      data: {
        txs: [{value: 5, from: 'Robin', to: 'Lara'}]
      }
    }, {
      number: 4,
      nonce: 975,
      data: {
        txs: [{value: 20, from: 'Oli', to: 'Ali'}, {value: 5, from: 'Oli', to: 'Lara'}]
      }
    }, {
      number: 5,
      nonce: 7113,
      data: {
        txs: []
      }
    }]
  }, {
    name: 'Peer B',
    blocks: [{
      number: 1,
      nonce: 30002,
      data: {
        txs: [{value: 200, from: 'Ali', to: 'Oli'}, {value: 10, from: 'Ali', to: 'Robin'}]
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    }, {
      number: 2,
      nonce: 54232,
      data: {
        txs: [{value: 10, from: 'Oli', to: 'Robin'}]
      }
    }, {
      number: 3,
      nonce: 54657,
      data: {
        txs: [{value: 5, from: 'Robin', to: 'Lara'}]
      }
    }, {
      number: 4,
      nonce: 975,
      data: {
        txs: [{value: 20, from: 'Oli', to: 'Ali'}, {value: 5, from: 'Oli', to: 'Lara'}]
      }
    }, {
      number: 5,
      nonce: 7113,
      data: {
        txs: []
      }
    }]
  }, {
    name: 'Peer C',
    blocks: [{
      number: 1,
      nonce: 30002,
      data: {
        txs: [{value: 200, from: 'Ali', to: 'Oli'}, {value: 10, from: 'Ali', to: 'Robin'}]
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    }, {
      number: 2,
      nonce: 54232,
      data: {
        txs: [{value: 10, from: 'Oli', to: 'Robin'}]
      }
    }, {
      number: 3,
      nonce: 54657,
      data: {
        txs: [{value: 5, from: 'Robin', to: 'Lara'}]
      }
    }, {
      number: 4,
      nonce: 975,
      data: {
        txs: [{value: 20, from: 'Oli', to: 'Ali'}, {value: 5, from: 'Oli', to: 'Lara'}]
      }
    }, {
      number: 5,
      nonce: 7113,
      data: {
        txs: []
      }
    }]
  }];
}