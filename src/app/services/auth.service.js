/**
 * Created by zura on 12/12/16.
 */
(function () {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .factory('Auth', Auth);

  /** @ngInject */
  function Auth($firebaseAuth) {
    var auth = $firebaseAuth();
    auth.loginState = 'login';
    auth.mainState = 'main';

    return auth;
  }
})();