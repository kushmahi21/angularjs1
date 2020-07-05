(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);

  MsgController.$inject=['$scope'];
  function MsgController($scope) {
    $scope.name= "kushagra";

    $scope.sayMessage = function () {
      return "Kushmahi is pubg id";
    };
  }
})();
