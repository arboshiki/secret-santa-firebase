/**
 * Created by zura on 12/12/16.
 */
(function () {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .factory('AuthService', AuthService);

  /** @ngInject */
  function AuthService($firebaseAuth) {
    var auth = $firebaseAuth();
    auth.loginState = 'app.login';
    auth.dashboardState = 'app.dashboard';

    return auth;
  }
})();