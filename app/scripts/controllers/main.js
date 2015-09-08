'use strict';

/**
 * @ngdoc function
 * @name jstestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jstestApp
 */
angular.module('jstestApp')
  .controller('MainCtrl', ['$scope', 'MenuService', 'OrderService', function ($scope, MenuService, OrderService) {
    $scope.menu = {};
    $scope.order = OrderService;

    MenuService.get('/data/menu.json').success(function(data) {
      $scope.menu = data;
    });
  }
  ]);
