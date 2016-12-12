(function() {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, toastr, UserService, FirebaseService, $state, Auth) {
    var vm = this;

    console.log(UserService.current);
    vm.isLogedIn = true;
    vm.isOwner = true;
    vm.user = UserService.current;
    vm.groupName = null;
    vm.groups = FirebaseService.getGroupsByUser(vm.user.uid);

    // methods
    vm.createGroup = createGroup;
    vm.openGroup = openGroup;
    vm.removeGroup = removeGroup;
    vm.logOut = logOut;

    function createGroup() {
      console.log(vm.groupName);
      var dataGroups = {
        'name': vm.groupName,
        'creatorId': vm.user.uid
      };

      var groupRef = firebase.database().ref('groups').push();
      var groupId = groupRef.getKey();

      var updateData = {};
      updateData['groups/' + groupId] = dataGroups;
      updateData['userGroups/' + vm.user.uid + '/' + groupId] = dataGroups;
      console.log(updateData);
      firebase.database().ref().update(updateData);


      UserService.saveUserData('groupUsers/' +'/'+ groupId +'/'+ vm.user.uid, vm.user);


      // firebase.database().ref('groupUsers').push().set(data);

    }
    function logOut() {
      Auth.$signOut();
    }

    function openGroup(group) {
      $state.go('group', {'groupId': group.$id});
    }

    function removeGroup(group) {
      var groupId = group.$id;
      FirebaseService.getUsersByGroup(groupId).$loaded().then(function (res) {
        for(var i = 0; i < res.length; i++){
          firebase.database().ref('userGroups/'+res[i].$id).remove();
        }
        firebase.database().ref('groupUsers/'+groupId).remove(function () {
          firebase.database().ref('groups/'+groupId).remove();
        });


      });

    }
  }
})();
