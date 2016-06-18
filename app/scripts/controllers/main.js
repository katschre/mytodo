'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];
    $scope.addTodo = function () {          
      $scope.todos.push($scope.todo);         // pushes new todo items onto existing todo items array
      $scope.todo = '';                       // then clears the text input field
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);          // functino that uses params splice(index aka where to add/remove, remove this many items, new items to be added to array)
    };                                        // so this is saying at the index of the ng-repeat, remove one item from the array.
  });
