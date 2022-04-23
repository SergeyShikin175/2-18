(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Yaakov123";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
