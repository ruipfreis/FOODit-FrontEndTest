'use strict';

/**
 * @ngdoc overview
 * @name jstestApp
 * @description
 * # jstestApp
 *
 * Main module of the application.
 */
angular
  .module('jstestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-storage'
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
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(['$rootScope', 'OrderItem','OrderService', 'store', function ($rootScope, OrderItem, OrderService, store) {

    $rootScope.$on('order:change', function(){
      OrderService.save();
    });

    OrderService.restore();

  }]);
