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
      .state('auth',{
        abstract: true,
        views: {
          'main@': {
            templateUrl: 'app/layouts/content.html',
            controller: 'MainController as vm'
          }
        }
      })
      .state('auth.login', {
        url: '/login/:groupId?',
        bodyClass: 'login',
        views: {
          'content@auth': {
            templateUrl: 'app/login/login.html',
            controller : 'LoginController as vm'
          }
        }
      });

  }
})();