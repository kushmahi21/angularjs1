(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);

  MsgController.$inject=['$scope'];
  function MsgController($scope) {
    $scope.name= "kushagra";
    $scope.stateOfBeing= "2";
    $scope.sayMessage = function () {
      return "Kushmahi is pubg id";
    };
     $scope.change = functon (){
       $scope.stateOfBeing = "1";
     }
  }
})();
