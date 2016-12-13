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
      // $rootScope.$on('userStateChange',function (user) {
      //   vm.user = user;
      // });
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
            var userTemp = {
              displayName: vm.user.displayName,
              email: vm.user.email,
              photoURL: vm.user.photoURL
            };
            var groupTemp = {
              creatorId: vm.group.creatorId,
              name: vm.group.name
            };
            updateData['userGroups/' + vm.user.uid + '/' + vm.group.$id] = groupTemp;
            updateData['groupUsers/' + vm.group.$id +'/'+ vm.user.uid] = userTemp;
            firebase.database().ref().update(updateData);
          }
        });
    }
  }
})();
