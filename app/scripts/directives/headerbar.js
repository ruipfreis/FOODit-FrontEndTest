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

        //Todo: should handle with a drag event later

        angular.element(document.getElementsByClassName('order-summary')).bind('click', function(event){
          if(element.hasClass('opened')) {
            element.removeClass('opened').addClass('closed');
          } else {
            element.removeClass('closed').addClass('opened');
          }
        });
      }
    };
  });
