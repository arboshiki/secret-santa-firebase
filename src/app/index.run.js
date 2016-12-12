(function() {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state, Auth) {
      $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
          // We can catch the error thrown when the $requireSignIn promise is rejected
          // and redirect the user back to the home page
          console.log(error);
          if (error === "AUTH_REQUIRED") {
              $state.go(Auth.loginState);
          }
      });
    $log.debug('runBlock end');
  }

})();
