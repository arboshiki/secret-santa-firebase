(function () {
    'use strict';

    angular
        .module('secretSantaFirebase', [
            'ngMaterial',
            'ngAnimate',
            'ngCookies',
            'ngSanitize',
            'ngMessages',
            'ngAria',
            'ui.router',
            'mdl',
            'firebase',

            'toastr',
            'secretSantaFirebase.login'
        ]);

})();
