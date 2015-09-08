'use strict';

describe('Test Modules', function(){
  describe('Testing - jstestApp', function(){

    var module;
    beforeEach(function() {
      module = angular.module("jstestApp");
    });

    it("should be registered", function() {
      expect(module).toBeDefined();
    });

    describe("Dependencies:", function() {

      var deps;
      var hasModule = function(m) {
        return deps.indexOf(m) >= 0;
      };
      beforeEach(function() {
        deps = module.value('appName').requires;
      });

      //you can also test the module's dependencies
      it("should have ngAnimate as a dependency", function() {
        expect(hasModule('ngAnimate')).toBe(true);
      });

      it("should have ngCookies as a dependency", function() {
        expect(hasModule('ngCookies')).toBe(true);
      });

      it("should have App.Filters as a dependency", function() {
        expect(hasModule('ngResource')).toBe(true);
      });

      it("should have ngRoute as a dependency", function() {
        expect(hasModule('ngRoute')).toBe(true);
      });

      it("should have ngSanitize as a dependency", function() {
        expect(hasModule('ngSanitize')).toBe(true);
      });

      it("should have ngTouch as a dependency", function() {
        expect(hasModule('ngTouch')).toBe(true);
      });

      it("should have angular-storage as a dependency", function() {
        expect(hasModule('angular-storage')).toBe(true);
      });

    });

  });
});



describe("Test Routes", function() {

  var $route;

  beforeEach(function () {
      module("jstestApp");

      inject(function(_$route_){
        $route = _$route_;
      });
    }
  );

  it("should have a working route", function() {
    expect($route.routes['/']).toBeDefined();
    expect($route.routes['/'].templateUrl).toBe('views/main.html');
    expect($route.routes['/'].controller).toBe('MainCtrl');
  });

  it("default route should be /", function() {
    expect($route.routes[null].redirectTo).toEqual('/');
  });

});



describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('jstestApp'));

  var MainCtrl,
    scope,
    MenuService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    MenuService = $injector.get('MenuService');
    var success = function(func) {
      return func({resultCount: 1});
    };
    spyOn(MenuService, 'get').and.returnValue({success: success});
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));


  it('should call the menu service to retrieve a list of meals', function () {
    expect(MenuService.get).toHaveBeenCalled();
    expect(scope.menu.resultCount).toBe(1);
  });

});
