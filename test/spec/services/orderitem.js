'use strict';

describe('Service: OrderItem', function () {

  // load the service's module
  beforeEach(module('jstestApp'));

  // instantiate service
  var OrderItem;
  beforeEach(inject(function (_OrderItem_) {
    OrderItem = _OrderItem_;
  }));

  it('should do something', function () {
    expect(!!OrderItem).toBe(true);
  });

});
