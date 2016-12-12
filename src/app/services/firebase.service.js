/**
 * Created by zura on 12/12/16.
 */
(function () {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .factory('FirebaseService', FirebaseServiceFn);

  /** @ngInject */
  function FirebaseServiceFn($firebaseRef) {
    var rootRef = $firebaseRef;

    var FirebaseService = {
      rootRef: rootRef
    };

    return FirebaseService;

  }
})();