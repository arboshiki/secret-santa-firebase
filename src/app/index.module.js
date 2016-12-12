(function () {
    'use strict';

    angular
        .module('secretSantaFirebase', [
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
