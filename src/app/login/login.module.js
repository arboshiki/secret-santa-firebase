/**
 * Created by guga on 12/12/16.
 */
(function () {
    'use strict';

    angular
        .module('app.login', [])
        .config(Config);

    /** @ngInject */
    function Config($stateProvider, $translatePartialLoaderProvider) {


        $stateProvider
            .state('app.login', {
                url: '/login',
                views: {
                    templateUrl: 'app/login/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                },
                bodyClass: 'login'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/auth/login');
    }
})();