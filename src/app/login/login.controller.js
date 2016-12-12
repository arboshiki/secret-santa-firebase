(function () {
  'use strict';

  angular
    .module('secretSantaFirebase.login')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(Auth,$log) {
    var vm = this;
    vm.loginWithGoogle = loginWithGoogle;
    vm.loginWithFacebook = loginWithFacebook;


    function loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();

      Auth
        .$signInWithPopup(provider)
        .then(function successCallback() {
          $log.debug("Sign in with popup callback", arguments);
        })
        .catch(function errorCallback(error) {
          vm.errorMessage = error.message;
        });
    }
    function loginWithFacebook() {
      var provider = new firebase.auth.FacebookAuthProvider();

      Auth
        .$signInWithPopup(provider)
        .then(function successCallback() {
          $log.debug("Sign in with popup callback", arguments);
        })
        .catch(function errorCallback(error) {
          vm.errorMessage = error.message;
        });
    }
  }
})();
