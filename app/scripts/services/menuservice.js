'use strict';

/**
 * @ngdoc service
 * @name jstestApp.Menuservice
 * @description
 * # MenuService
 * Service in the jstestApp.
 */
angular.module('jstestApp')
  .factory('MenuService', ['$http', 'config', function ($http, config) {
    var service = {
      get: get
    };

    return service;

    function get () {
      return $http.get(config.menuGetUrl);
    }
  }]);

