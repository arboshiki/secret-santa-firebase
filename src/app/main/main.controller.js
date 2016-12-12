(function() {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, toastr, UserService, Auth) {
    var vm = this;

    vm.isLogedIn = true;
    vm.isOwner = true;
    vm.user = UserService.current;
    vm.groupName = null;

    // methods
    vm.createGroup = createGroup;
    vm.logOut = logOut;

    function createGroup() {
      console.log(vm.groupName);
      var dataGroups = {
        'name': vm.groupName,
        'creatorId': vm.user.uid
      };

      firebase.database().ref('groups').push().set(dataGroups);

      // firebase.database().ref('groupUsers').push().set(data);

    }
    function logOut() {
      Auth.$signOut();
    }
  }
})();
