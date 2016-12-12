(function() {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, toastr, UserService) {
    var vm = this;

    console.log(UserService.current);
    vm.isLogedIn = true;
    vm.isOwner = true;
    vm.user = UserService.current;
    vm.groupName = null;

    // methods
    vm.createGroup = createGroup;


    function createGroup() {
      console.log(vm.groupName);
      var data = {
        'name': vm.groupName,
        'ownerUserId': vm.user.uid
      };

      firebase.database().ref('group').push().set(data);
    }
  }
})();
