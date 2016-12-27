/**
 * Created by guga on 12/27/16.
 */
(function () {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .controller('CopyDialogController', CopyDialogController);

  /** @ngInject */
  function CopyDialogController(Link, toast, $mdDialog) {
    var vm = this;
    vm.link = Link;
    vm.close = close;
    vm.copy = copy;

    function close() {
      $mdDialog.hide();
    }
    function copy(ev) {
      var temp = document.getElementById('idCopyText');
      temp.select();
      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        toast.success('URL is copied in the clipboard');
        $mdDialog.hide();
      } catch (err) {
        toast.error('Error copying, copy by yourself');
      }
    }
  }
})();
