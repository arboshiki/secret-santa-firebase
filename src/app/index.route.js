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
            });

        $urlRouterProvider.otherwise('/login');
    }

})();
