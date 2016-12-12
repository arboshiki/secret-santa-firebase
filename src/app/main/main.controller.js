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

    // methods
    vm.createGroup = createGroup;


    function createGroup(name) {

    }
  }
})();
