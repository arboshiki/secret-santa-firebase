(function() {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .controller('JoinGameController', JoinGameController);

  /** @ngInject */
  function JoinGameController($rootScope, toastr, UserService, FirebaseService, $state, Auth, group) {
    var vm = this;
    vm.group = group;
    vm.user = UserService.current;
    
    init();
    
    function init() {
      //console.log(vm.user);
      if(vm.group){
        if(vm.user){
          joinGroup();
        }
      }
    }
    
    function joinGroup() {
        firebase.database().ref('userGroups/' + vm.user.uid + '/' + vm.group.$id).once('value', function (res) {
          if(!res.val()){
            var updateData = {};
            updateData['userGroups/' + vm.user.uid + '/' + vm.group.$id] = vm.group;
            updateData['groupUsers/' +'/'+ vm.group.$id +'/'+ vm.user.uid] = vm.user;
            firebase.database().ref().update(updateData);
          }
        });
    }
    console.log(group);

  }
})();
