(function () {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .controller('GroupController', GroupController);

  /** @ngInject */
  function GroupController($rootScope, toastr, UserService, FirebaseService, users, $stateParams) {
    var vm = this;
    vm.users = users;


    //methods
    vm.removeUser = removeUser;


    function removeUser(user) {
      var updateData = {};

      updateData['userGroups/'+user.$id+'/'+$stateParams.groupId] = null;
      updateData['groupUsers/'+$stateParams.groupId+'/'+user.$id] = null;

      firebase.database().ref().update(updateData);
    }
      // firebase.database().ref('groupUsers').push().set(data);
  }
})();
