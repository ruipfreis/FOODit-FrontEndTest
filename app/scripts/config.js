'use strict';

/**
 * @ngdoc service
 * @name jstestApp.config
 * @description
 * # config
 * Constant in the jstestApp.
 */
angular.module('jstestApp')
  .constant('config', {
    menuGetUrl : '/data/menu.json',
    tags : [
      'charcoal',
      'cheese',
      'chicken',
      'grilled',
      'high-protein',
      'lamb',
      'pasta',
      'peanut',
      'pork',
      'seafood',
      'snack',
      'spicy',
      'starter',
      'sweet',
      'vegetarian'
    ],
    tagImgFilePath : '/images/assets/',
    tagImgPrefix : 'tag--',
    tagImgSuffix : '.svg'
  });
