angular
  .module('app')
  .component('block', {
    templateUrl: 'components/block/block.html',
    controller: BlockController,
    controllerAs: 'vm',
    bindings: {
      number: '<',
      nonce: '=',
      data: '=?',
      prev: '<?',
      hash: '=?',
      valid: '=?'
    }
  });

function BlockController($rootScope, $scope, $timeout, $element) {
  var vm = this;

  vm.hashFunction = $rootScope.sha256;

  vm.$onInit = function () {
    vm.id = $rootScope.newId();
    vm.number = vm.number || 1;
    vm.nonce = vm.nonce || 1;
    vm.data = vm.data || '';
    vm.prev = vm.prev || '';
    vm.updateBlock();

    $rootScope.$on('difficulty-change', function () {
      if ($rootScope.difficulty === 10) {
        vm.nonce = 3947104378674;
      }
      vm.updateBlock();
    });
    $scope.$watch('vm.prev', vm.updateBlock);
    $scope.$watch('vm.data', stringifyData, true);
    $scope.$watch('vm.dataString', parseData);
  };

  vm.updateBlock = function () {
    vm.hash = hashBlock(vm.number, vm.nonce, vm.dataString, vm.prev);
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
    }, 250);
  };

  function stringifyData() {
    vm.dataString = JSON.stringify(vm.data, null, 2);
    vm.updateBlock();
  }

  function parseData() {
    try {
      vm.data = JSON.parse(vm.dataString);
      if (vm.data.txs && vm.data.txs.length > 0) {
        vm.data.txs.forEach(function (tx) {
          try {
            tx.value = parseFloat(tx.value);
          } catch (e) {
            // ignore parse error
          }
        });
      }
      vm.updateBlock();
    } catch (e) {
      // don't update while invalid
    }
  }

  function hashBlock(blockNumber, nonce, data, prev) {
    return vm.hashFunction([blockNumber, nonce, data, prev].join(''));
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
        currentHash = hashBlock(vm.number, nonce, vm.dataString, vm.prev);
      } while (!validHash(currentHash, difficultyPrefix));

      // finished, set mined nonce
      vm.nonce = nonce;
      var duration = (new Date().getTime() - start);
      var seconds = duration / 1000;
      vm.miningStats = ' took ' + $rootScope.round(seconds, 1) + 's, speed: ' + $rootScope.round(nonce / seconds, 0) + ' hashes/s';
    }
  }
}
