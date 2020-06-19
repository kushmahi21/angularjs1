(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "kushmahi";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
