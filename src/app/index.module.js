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

            'firebase',

            'toastr',
            'secretSantaFirebase.login'
        ]);

})();
