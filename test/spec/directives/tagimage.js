'use strict';

describe('Directive: tagImages', function () {

  // load the directive's module
  beforeEach(module('jstestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tag-images></tag-images>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tagImages directive');
  }));
});
