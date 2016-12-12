(function () {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .controller('GroupController', GroupController);

  /** @ngInject */
  function GroupController($rootScope, toastr, UserService, FirebaseService, users) {
    var vm = this;
    vm.users = users;


      // firebase.database().ref('groupUsers').push().set(data);
  }
})();
