angular
  .module('app')
  .component('macaroonPage', {
    templateUrl: 'pages/macaroon/macaroon.html',
    controller: MacaroonPageController,
    controllerAs: 'vm',
    bindings: {}
  });

function MacaroonPageController() {
  const vm = this;
  const Buffer = bitcoin.Buffer;
  const macaroon = bitcoin.macaroon;
  const randomBuffer = (len) => Buffer.from(bitcoin.randomBytes(len));

  vm.macaroon = null;
  vm.macaroon2 = null;
  vm.showJson = true;
  vm.tryDecodingId = true;
  vm.identifier = 'demo-identifier';
  vm.location = 'some-location';
  vm.rootKey = null;
  vm.encodedMacaroon = '';

  vm.$onInit = function () {
    vm.randomRootKey();
  };

  vm.randomRootKey = function () {
    vm.rootKey = randomBuffer(32).toString('hex');
    vm.newMacaroon();
  };

  vm.newMacaroon = function () {
    vm.error2 = null;
    try {
      const keyBytes = Buffer.from(vm.rootKey, 'hex');
      vm.macaroon2 = macaroon.newMacaroon({ identifier: vm.identifier, location: vm.location, rootKey: keyBytes, version: 2 });
    } catch (e) {
      vm.error2 = e;
    }
  };

  vm.serializeMacaroon = function (mac, asJson) {
    if (!mac) {
      return '';
    }
    if (asJson) {
      const macJson = mac.exportJSON();
      if (macJson.i64 && vm.tryDecodingId) {
        try {
          const identBytes = Buffer.from(macaroon.base64ToBytes(macJson.i64));
          if (identBytes[0] === 0x03) {
            const id = bitcoin.macaroonIdProtobuf.MacaroonId.deserializeBinary(identBytes.slice(1));
            macJson.identifier_decoded = {
              nonce: Buffer.from(id.getNonce_asU8()).toString('hex'),
              storageId: Buffer.from(id.getStorageid_asU8()).toString('hex'),
              ops: id.getOpsList().map(op => ({
                entity: op.getEntity(),
                actions: op.getActionsList(),
              })),
            };
          }
        } catch (e) {
        }
      }
      return JSON.stringify(macJson, null, 2);
    } else {
      return Buffer.from(mac.exportBinary()).toString('hex');
    }
  };

  vm.decodeMacaroon = function () {
    vm.error = null;
    if (!vm.encodedMacaroon) {
      return;
    }
    try {
      const buffer = Buffer.from(vm.encodedMacaroon.replace(/\s*/gi, ''), 'hex');
      vm.macaroon = macaroon.importMacaroon(buffer);
    } catch (e) {
      vm.error = e;
    }
  };
}
