'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('AboutCtrl', ['$scope', function($scope) {
    $scope.formDetails = '';

    $scope.master = '';

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
      $scope.myFunc();
    };

    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };

    $scope.reset();

    $scope.myFunc = function () {
      $scope.formDetails = $scope.master;
    }
  }]);