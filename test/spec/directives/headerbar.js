'use strict';

describe('Directive: headerBar', function () {

  // load the directive's module
  beforeEach(module('jstestApp'));

  //beforeEach(module('views/header-bar.html'));

  var element,
    scope;

  var $httpBackend;
  beforeEach(inject(function ($rootScope, $injector) {
    scope = $rootScope.$new();

    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET('views/header-bar.html').respond(200, 'Menu');
    //$httpBackend.expect()
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div header-bar></div>');
    element = $compile(element)(scope);

    expect(element.text().trim()).toBe('Menu');
  }));
});
