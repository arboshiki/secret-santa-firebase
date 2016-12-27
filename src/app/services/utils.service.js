/**
 * Created by guga on 12/27/16.
 */
(function () {
  'use strict';
  angular
    .module('secretSantaFirebase')
    .factory('toast', Toast);

  /** @ngInject */
  function Toast($mdToast) {
    return {
      success: function (message){
        $mdToast.show($mdToast.simple({ position: 'bottom right', hideDelay: 2200}).content(message));
      },
      error: function (message){
        $mdToast.show($mdToast.simple({ position: 'bottom right', hideDelay: 2200}).content(message));
      }
    };
  }
})();