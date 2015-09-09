'use strict';

/**
 * @ngdoc directive
 * @name jstestApp.directive:headerbar
 * @description
 * # headerbar
 */
angular.module('jstestApp')
  .directive('headerBar', function () {
    return {
      templateUrl: 'views/header-bar.html',
      restrict: 'AE',
      controller: 'MainCtrl'
    };
  });
