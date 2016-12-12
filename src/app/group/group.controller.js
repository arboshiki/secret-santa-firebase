(function () {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .controller('GroupController', GroupController);

  /** @ngInject */
  function GroupController($rootScope, toastr, UserService, FirebaseService, users, $stateParams, Auth) {
    var vm = this;
    vm.users = users;
    vm.user = UserService.current;

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
