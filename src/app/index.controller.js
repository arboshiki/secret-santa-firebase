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

      $rootScope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams) {
          $state.current = toState;
        }
      );

      var userStateChangeFn = $rootScope.$on('userStateChange', function($event, user){
        if (user){
          if($state.current.name == 'login'){
            $state.go(Auth.mainState);
          }
        } else {
          $state.go(Auth.loginState);
        }
      });
      $scope.$on('$destroy', userStateChangeFn);
    }
  }
})();