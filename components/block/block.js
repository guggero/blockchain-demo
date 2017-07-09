angular
  .module('app')
  .component('block', {
    templateUrl: 'components/block/block.html',
    controller: BlockController,
    controllerAs: 'vm',
    bindings: {
      number: '<',
      nonce: '<'
    }
  });

function BlockController($rootScope, $timeout, $element) {
  var vm = this;

  vm.hashFunction = $rootScope.sha256;

  vm.$onInit = function () {
    vm.id = $rootScope.newId();
    vm.number = vm.number || 1;
    vm.nonce = vm.nonce || 72608;
    vm.data = '';
    vm.updateBlock();

    $rootScope.$on('difficulty-change', function () {
      vm.updateBlock();
    })
  };

  vm.updateBlock = function () {
    vm.hash = hashBlock(vm.number, vm.nonce, vm.data);
    vm.valid = validHash(vm.hash, $rootScope.difficultyPrefix());
    if (!vm.valid) {
      vm.mined = false;
    }
  };

  vm.mine = function () {
    var ladda = Ladda.create($element.find('.ladda-button')[0]);
    ladda.start();
    $timeout(function () {
      mine();
      vm.mined = true;
      ladda.stop();
      vm.updateBlock();
    }, 250); // give UI time to update
  };

  function hashBlock(blockNumber, nonce, data) {
    return vm.hashFunction([blockNumber, nonce, data].join(''));
  }

  function validHash(hash, difficultyPrefix) {
    return hash.indexOf(difficultyPrefix) === 0;
  }

  function mine() {
    var difficultyPrefix = $rootScope.difficultyPrefix();
    var start = new Date().getTime();

    // either we're already valid or we start at the beginning
    if (!validHash(vm.hash, difficultyPrefix)) {
      var nonce = -1;
      var currentHash = null;

      // do the mining
      do {
        nonce++;
        currentHash = hashBlock(vm.number, nonce, vm.data);
      } while (!validHash(currentHash, difficultyPrefix));

      // finished, set mined nonce
      vm.nonce = nonce;
      var duration = (new Date().getTime() - start);
      var seconds = duration / 1000;
      vm.miningStats = ' mining took ' + round(seconds, 1) + ' s, mined with ' + round(nonce / seconds, 0) + ' hashes/s';
    }
  }

  function round(number, digits) {
    var exp = Math.pow(10, digits);
    return (Math.round(number * exp) / exp).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\'');
  }
}