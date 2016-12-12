/**
 * Created by zura on 12/12/16.
 */
(function () {
  'use strict';


  // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyA1RFC-9f4Sdyb9SPJMU3YIw-r8znfEUhA",
    authDomain: "secretsanta-7b0cc.firebaseapp.com",
    databaseURL: "https://secretsanta-7b0cc.firebaseio.com",
    storageBucket: "secretsanta-7b0cc.appspot.com",
    messagingSenderId: "735602713413"
  };
  firebase.initializeApp(firebaseConfig);

  angular
    .module('secretSantaFirebase')
    .constant('FirebaseConfig', firebaseConfig)
    .config(config);

  /** @ngInject */
  function config($firebaseRefProvider) {
    $firebaseRefProvider.registerUrl({
      default: firebaseConfig.databaseURL
    });
  }

})();