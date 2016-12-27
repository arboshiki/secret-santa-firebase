(function () {
  'use strict';

  angular
    .module('secretSantaFirebase')
    .controller('GroupController', GroupController);

  /** @ngInject */
  function GroupController($rootScope, toast, UserService, FirebaseService, users, $stateParams, Auth, $firebaseObject) {

    var vm = this;
    vm.users = users;
    vm.user = UserService.current;
    vm.generated = true;
    $rootScope.backState = 'app.main';
    //methods
    vm.removeUser = removeUser;
    vm.generateAssignments = generateAssignments;


    init();

    function init() {
      firebase.database().ref('assigned/' + $stateParams.groupId).once('value',function (res) {
        vm.generated = res.val() != null;
      });
    }

    function removeUser(user) {
      var updateData = {};

      updateData['userGroups/'+user.$id+'/'+$stateParams.groupId] = null;
      updateData['groupUsers/'+$stateParams.groupId+'/'+user.$id] = null;

      firebase.database().ref().update(updateData);
    }

    function generateAssignments() {
      FirebaseService.getUsersByGroup($stateParams.groupId).$loaded().then(function (res) {
        var usersToAssign = [];
        var usersToChoose = [];

        for(var i = 0; i < res.length; i++){
          usersToAssign.push(res[i].$id);
          usersToChoose.push(res[i].$id);
        }

        generateData(usersToAssign,usersToChoose);

      });
    }

    function generateData(usersToAssign, usersToChoose) {

      if(usersToAssign.length < 2){
        toast.error('მომხმარებელთა რაოდენობა არასაკმარისია');
        return;
      }
      var updateData = null;
      var reset = 0;
      while(updateData == null && reset < 5){
        updateData = randomize(angular.copy(usersToAssign),angular.copy(usersToChoose));
        reset++;
      }
      if(reset == 5){
        toast.error('დაგენერირება ვერ მოხერხდა');
        return;
      }
      firebase.database().ref('assigned/' + $stateParams.groupId).update(updateData);
      toast.success('წარმატებით დაგენერირდა');
      vm.generated = true;
    }

    function randomize(assign, choose) {
      var updateData = {};
      for(var i = 0; i < assign.length; i++){
        var choosedUser = null;
        var reset = 0;
        while(choosedUser == null && choose.length > 0 && reset < 5){
          var index = Math.floor(Math.random() * (choose.length - 1 + 1)) + 0;
          var chosen = choose[index];
          if(chosen == assign[i]){
            reset++;
          }else{
            choosedUser = chosen;
            choose.splice(index,1);
          }
        }
        if(reset == 5){
          return null;
        }else{
          updateData[assign[i]] = choosedUser;
        }
      }
      return updateData;
    }
      // firebase.database().ref('groupUsers').push().set(data);
  }
})();
