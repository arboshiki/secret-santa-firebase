/**
 * Created by guga on 12/12/16.
 */
(function () {
    'use strict';

    angular
        .module('secretSantaFirebase.login', [])
        .config(Config);

    /** @ngInject */
    function Config($stateProvider) {


        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm',
                bodyClass: 'login'
            });

    }
})();