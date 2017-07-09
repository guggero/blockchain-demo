angular
  .module('app')
  .component('peerInfo', {
    templateUrl: 'components/peer-info/peer-info.html',
    controller: PeerInfoController,
    controllerAs: 'vm',
    bindings: {
      peers: '<',
      peerIndex: '<'
    }
  });

function PeerInfoController($scope) {
  var vm = this;

  $scope.$watch('vm.peers', updateView, true);

  function updateView() {
    if (!vm.peers ||
      !vm.peers[vm.peerIndex] ||
      !vm.peers[vm.peerIndex].blocks ||
      !vm.peers[vm.peerIndex].blocks[0].hash) {
      return;
    }
    vm.blocks = vm.peers[vm.peerIndex].blocks;
    vm.valid = _.every(vm.blocks, 'valid');

    vm.lastBlockHash = vm.blocks[vm.blocks.length - 1].hash;
    vm.consensus = 0;
    _.forEach(vm.peers, function (peer, index) {
      if (index !== vm.peerIndex && peer.blocks[peer.blocks.length - 1].hash === vm.lastBlockHash) {
        vm.consensus++;
      }
    });
  }
}