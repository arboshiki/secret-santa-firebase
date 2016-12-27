(function() {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
