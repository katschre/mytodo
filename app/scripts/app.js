'use strict';

/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * # mytodoApp
 *
 * Main module of the application.
 */
angular
  .module('mytodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/listCreator', {
        templateUrl: 'views/listCreator.html',
        controller: 'listCreatorCtrl'
      })
      .when('/errandMapper', {
        templateUrl: 'views/errandMapper.html',
        controller: 'errandMapperCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
