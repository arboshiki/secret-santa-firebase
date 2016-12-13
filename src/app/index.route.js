(function () {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('group', {
        url: '/group/:groupId',
        templateUrl: 'app/group/group.html',
        controller: 'GroupController',
        controllerAs: 'vm',
        resolve: {
          // controller will not be loaded until $waitForSignIn resolves
          // Auth refers to our $firebaseAuth wrapper in the factory below
          "currentAuth": ["Auth", function (Auth) {
            console.log("currentAuth resolve");
            // $waitForSignIn returns a promise so the resolve waits for it to complete
            return Auth.$requireSignIn();
          }],
          "users": ["FirebaseService", "$stateParams", function (FirebaseService, $stateParams) {
            console.log("users resolve");
            // $waitForSignIn returns a promise so the resolve waits for it to complete
            return FirebaseService.getUsersByGroup($stateParams.groupId);
          }]
        }
      })
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        resolve: {
          // controller will not be loaded until $waitForSignIn resolves
          // Auth refers to our $firebaseAuth wrapper in the factory below
          "currentAuth": ["Auth", function (Auth) {
            console.log("resolve");
            // $waitForSignIn returns a promise so the resolve waits for it to complete
            return Auth.$requireSignIn();
          }]
        }
      }).state('join-game', {
        url: '/join-game/:groupId',
        templateUrl: 'app/joinGame/joinGame.html',
        controller: 'JoinGameController',
        controllerAs: 'vm',
        resolve: {
          // controller will not be loaded until $waitForSignIn resolves
          // Auth refers to our $firebaseAuth wrapper in the factory below
          // "currentAuth": ["Auth", function (Auth) {
          //   console.log("resolve");
          //   // $waitForSignIn returns a promise so the resolve waits for it to complete
          //   return Auth.$requireSignIn();
          // }]
          "group": ["FirebaseService", "$stateParams", function (FirebaseService, $stateParams) {
            console.log("users resolve");
            // $waitForSignIn returns a promise so the resolve waits for it to complete
            return FirebaseService.getGroupById($stateParams.groupId);
          }]

        }
      });

  }

})();
