/**
 * Created by guga on 12/12/16.
 */
(function () {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .controller('IndexController', IndexController);

  /** @ngInject */
  function IndexController($scope, $rootScope, UserService, Auth, $state) {
    // var vm = this;

    // Data
    $rootScope.UserService = UserService;

    // Methods

    init();

    ///////////

    function init() {


      var userStateChangeFn = $rootScope.$on('userStateChange', function($event, user){
        if (user){
          $state.go(Auth.mainState);
        } else {
          $state.go(Auth.loginState);
        }
      });
      $scope.$on('$destroy', userStateChangeFn);
    }
  }
})();