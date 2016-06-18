'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('errandMapperCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.greeting = 'Hello!';

    $http({
        method : "GET",
        url : "data/myLocations.json"
    }).then(function mySucces(response) {
        $scope.myLocations = response.data;
    }, function myError(response) {
        $scope.myLocations = response.statusText;
    });
    
  }]);