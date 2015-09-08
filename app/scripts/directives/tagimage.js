'use strict';

/**
 * @ngdoc directive
 * @name jstestApp.directive:tagImage
 * @description
 * # tagImage
 */
angular.module('jstestApp')
  .directive('tagImage', function (config) {
    return {
      restrict: 'AEC',
      link: function postLink(scope, element, attrs) {
        var tagFound = false;

        config.tags.some(function(tag){
          var
            regex = new RegExp(tag.replace('-','.+'), 'g'),
            result = regex.exec(attrs.tag);

          if (result)
            return tagFound = tag;
          return false;
        });

        if (tagFound) {
          var tagImage = new Image();
          tagImage.src = config.tagImgFilePath + config.tagImgPrefix + tagFound + config.tagImgSuffix;
          tagImage.alt = tagFound;

          element.append(tagImage);
        }
      }
    };
  });
