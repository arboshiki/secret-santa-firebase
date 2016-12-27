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
    var vm = this;

    // Data
    $rootScope.UserService = UserService;

    // Methods
    vm.goBack = goBack;

    init();

    ///////////

    function init() {

      $rootScope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams) {
          $state.current = toState;
        }
      );
      $rootScope.$watch('backState',function (newVal, oldVal) {
        if(newVal){
          vm.back = true;
        }else{
          vm.back = false;
        }
      });
      var userStateChangeFn = $rootScope.$on('userStateChange', function($event, user){
        if (user){
          vm.user = user;
          if($state.current.name == 'login'){
            debugger;
            if($stateParams.groupId){
              $state.go('app.join-game',{groupId: $stateParams.groupId})
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

    function goBack() {
      $state.go($rootScope.backState, $rootScope.backStateParams);
      $rootScope.backState = null;
    }

  }
})();