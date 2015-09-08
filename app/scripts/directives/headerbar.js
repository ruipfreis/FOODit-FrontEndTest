'use strict';

/**
 * @ngdoc directive
 * @name jstestApp.directive:headerbar
 * @description
 * # headerbar
 */
angular.module('jstestApp')
  .directive('headerBar', function (OrderService) {
    return {
      templateUrl: 'views/header-bar.html',
      restrict: 'AE',
      controller: 'MainCtrl',
      link: function (scope, element, attrs) {

        element.bind('mousemove', function(event){
          console.log(event);
          event.preventDefault();
        });

/*        element.bind('mouseup', function(){
          console.log('teste 3');
        });*/
      }
    };
  });
