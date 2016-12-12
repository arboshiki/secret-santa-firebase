/**
 * Created by zura on 12/12/16.
 */
(function () {
  'use strict';

  'use strict';

  angular
    .module('secretSantaFirebase')
    .factory('UserService', UserService);

  /** @ngInject */
  function UserService(Auth, $rootScope, $log) {
    var users = {
      current: null,

      saveUserData: saveUserData
    };

    function createCurrentUser(firebaseUser) {
      saveUserData('users/' + firebaseUser.uid, firebaseUser)
    }

    Auth.$onAuthStateChanged(function (firebaseUser) {
      users.current = firebaseUser;
      if (firebaseUser != null) {
        firebase.database().ref('users/' + firebaseUser.uid).once('value', function (snapshot) {
          if (!snapshot.exists()) {
            createCurrentUser(firebaseUser);
          }
        }, function (error) {
          createCurrentUser(firebaseUser);
        });
      }
      $rootScope.$emit('userStateChange', firebaseUser);
      $log.debug("User state has been changed. Current User: ", firebaseUser);
    });

    return users;
  }

  function saveUserData(ref, firebaseUser) {
    firebase.database().ref(ref).set({
      displayName: firebaseUser.displayName ? firebaseUser.displayName : '',
      email: firebaseUser.email ? firebaseUser.email : '',
      photoURL: firebaseUser.photoURL ? firebaseUser.photoURL : '',
    });
  }
})();