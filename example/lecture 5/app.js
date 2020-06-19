 (function () {
  'use strict';

  angular.module('myFirstApp', [])

  .controller('MyFirstController', function ($scope) {
    $scope.name = "Kushagra";
    $scope.sayHello = function () {
      return "Hello Coursera!";
    };
  });

})();
