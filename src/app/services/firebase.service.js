/**
 * Created by zura on 12/12/16.
 */
(function () {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .factory('FirebaseService', FirebaseServiceFn);

  /** @ngInject */
  function FirebaseServiceFn($firebaseRef, $firebaseArray, $firebaseObject) {
    var rootRef = $firebaseRef;

    var FirebaseService = {
      rootRef: rootRef,
      getGroupsByUser: getGroupsByUser,
      getUsersByGroup: getUsersByGroup,
      getGroupById: getGroupById,
    };

    return FirebaseService;

    function getGroupsByUser(userId) {
      return $firebaseArray(firebase.database().ref('userGroups/' + userId));
    }

    function getUsersByGroup(groupId) {
      return $firebaseArray(firebase.database().ref('groupUsers/' + groupId));
    }

    function getGroupById(groupId) {
      return $firebaseObject(firebase.database().ref('groups/' + groupId)).$loaded();
    }

  }
})();