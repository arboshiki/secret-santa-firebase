(function () {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('app', {
        abstract: true,
        views: {
          'main@': {
            templateUrl: 'app/layouts/main.html'
          }
        }
      })
      .state('app.main', {
        url: '/',
        views: {
          'content@app': {
            templateUrl: 'app/main/main.html',
            controller: 'MainController as vm'
          }
        },
        resolve: {
          // controller will not be loaded until $waitForSignIn resolves
          // Auth refers to our $firebaseAuth wrapper in the factory below
          "currentAuth": ["Auth", function (Auth) {
            console.log("resolve");
            // $waitForSignIn returns a promise so the resolve waits for it to complete
            return Auth.$requireSignIn();
          }]
        }
      })
      .state('app.group', {
        url: '/group/:groupId',
        views: {
          'content@app': {
            templateUrl: 'app/group/group.html',
            controller: 'GroupController as vm'
          }
        },
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
      .state('app.join-game', {
        url: '/join-game/:groupId',
        views: {
          'content@app': {
            templateUrl: 'app/main/joinGame.html',
            controller: 'JoinGameController as vm'
          }
        },
        resolve: {
          // controller will not be loaded until $waitForSignIn resolves
          // Auth refers to our $firebaseAuth wrapper in the factory below
          "currentAuth": ["Auth", function (Auth) {
            console.log("resolve");
            // $waitForSignIn returns a promise so the resolve waits for it to complete
            return Auth.$requireSignIn();
          }],
          "group": ["FirebaseService", "$stateParams", function (FirebaseService, $stateParams) {
            console.log("users resolve");
            // $waitForSignIn returns a promise so the resolve waits for it to complete
            return FirebaseService.getGroupById($stateParams.groupId);
          }]

        }
      });

  }

})();
