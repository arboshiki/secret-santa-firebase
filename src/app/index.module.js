(function () {
    'use strict';

    angular
        .module('secretSantaFirebase', [
            'ngMaterial',
            'ngAnimate',
            'ngCookies',
            'ngTouch',
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
