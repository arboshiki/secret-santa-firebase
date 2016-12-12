(function() {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
