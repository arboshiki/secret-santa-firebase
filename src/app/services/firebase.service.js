/**
 * Created by zura on 12/12/16.
 */
(function () {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .factory('FirebaseService', FirebaseServiceFn);

  /** @ngInject */
  function FirebaseServiceFn($firebaseRef, $firebaseArray) {
    var rootRef = $firebaseRef;

    var FirebaseService = {
      rootRef: rootRef,
      getGroupsByUser: getGroupsByUser,
      getUsersByGroup: getUsersByGroup
    };

    return FirebaseService;

    function getGroupsByUser(userId) {
      return $firebaseArray(firebase.database().ref('userGroups/'+userId));
    }

    function getUsersByGroup(groupId) {
      return $firebaseArray(firebase.database().ref('groupUsers/'+groupId));
    }

  }
})();