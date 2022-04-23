(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Yaakov1";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
