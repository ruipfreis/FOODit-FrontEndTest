'use strict';

/**
 * @ngdoc service
 * @name jstestApp.OrderItem
 * @description
 * # OrderItem
 * Factory in the jstestApp.
 */
angular.module('jstestApp')
  .factory('OrderItem', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
