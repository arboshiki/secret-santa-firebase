(function() {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1481527777906;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }
  }
})();
