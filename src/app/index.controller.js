/**
 * Created by guga on 12/12/16.
 */
(function () {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .controller('IndexController', IndexController);

  /** @ngInject */
  function IndexController($scope, $rootScope, UserService, Auth, $state, $stateParams) {
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
            debugger;
            if($stateParams.groupId){
              $state.go('join-game',{groupId: $stateParams.groupId})
            }else{
              $state.go(Auth.mainState);
            }
          }
        } else {
          // $state.go(Auth.loginState);
        }
      });
      $scope.$on('$destroy', userStateChangeFn);
    }
  }
})();