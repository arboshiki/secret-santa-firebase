(function () {
    'use strict';

    angular
        .module('secretSantaFirebase')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'vm',
                resolve: {
                    // controller will not be loaded until $waitForSignIn resolves
                    // Auth refers to our $firebaseAuth wrapper in the factory below
                    "currentAuth": ["Auth", function(Auth) {
                        console.log("resolve");
                        // $waitForSignIn returns a promise so the resolve waits for it to complete
                        return Auth.$requireSignIn();
                    }]
                }
            }).state('group', {
                url: '/group/:groupId',
                templateUrl: 'app/group/group.html',
                controller: 'GroupController',
                controllerAs: 'vm',
                resolve: {
                    // controller will not be loaded until $waitForSignIn resolves
                    // Auth refers to our $firebaseAuth wrapper in the factory below
                    "currentAuth": ["Auth", function(Auth) {
                        console.log("resolve");
                        // $waitForSignIn returns a promise so the resolve waits for it to complete
                        return Auth.$requireSignIn();
                    }],
                    "users": ["FirebaseService", "$stateParams", function(FirebaseService, $stateParams) {
                      console.log("resolve");
                      // $waitForSignIn returns a promise so the resolve waits for it to complete
                      return FirebaseService.getUsersByGroup($stateParams.groupId);
                    }],
                }
            });

        $urlRouterProvider.otherwise('/login');
    }

})();
