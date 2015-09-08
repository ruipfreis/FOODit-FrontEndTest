'use strict';

describe('Service: OrderService', function () {

  // load the service's module
  beforeEach(module('jstestApp'));

  // instantiate service
  var
    OrderService,
    OrderItem;
  beforeEach(inject(function (_OrderService_, _OrderItem_) {
    OrderService = _OrderService_;
    OrderItem = _OrderItem_;
  }));

  it('should do something', function () {
    expect(!!OrderService).toBe(true);
  });


  it('should add items to the order array', function(){
    OrderService.addOrderItem(OrderItem.create('1234','item 1','14.99','2'));

    expect(OrderService.getOrderItems().length).toBe(1);

    OrderService.addOrderItem({
      id : '1235',
      name : 'item 2',
      price : '9.99',
      quantity : '1'
    });

    expect(OrderService.getOrderItems().length).toBe(2);

  });


  it('should increment item quantity if the same item id is already in the array', function(){

    OrderService.addOrderItem({
      id : '1235',
      name : 'item 2',
      price : '9.99',
      quantity : '2'
    });

    OrderService.addOrderItem({
      id : '1235',
      name : 'item 2',
      price : '9.99',
      quantity : '1'
    });

    expect(OrderService.getOrderItems().length).toBe(1);

    expect(OrderService.getOrderItemById('1235').getQuantity()).toBe(3);

  });

  it('should remove the item with ID 12345' , function(){

    OrderService.addOrderItem({
      id : '12345',
      name : 'item 2',
      price : '9.99',
      quantity : '2'
    });

    OrderService.addOrderItem({
      id : '1234',
      name : 'item 2',
      price : '9.99',
      quantity : '2'
    });

    expect(OrderService.getOrderItems().length).toBe(2);

    OrderService.removeOrderItemById('12345');

    expect(OrderService.getOrderItems().length).toBe(1);

    expect(OrderService.getOrderItemById('12345')).toBe(false);
    expect(OrderService.getOrderItemById('1234')).not.toBe(false);

  });

  it('should calculate the total price of the order' , function(){

    OrderService.addOrderItem({
      id : '12345',
      name : 'item 2',
      price : '19.99',
      quantity : '2'
    });

    OrderService.addOrderItem({
      id : '1234',
      name : 'item 2',
      price : '9.99',
      quantity : '1'
    });

    expect(OrderService.getTotalOrderPrice()).toBe('49.97');

  });

  it('should calculate the total items of the order' , function(){

    OrderService.addOrderItem({
      id : '12345',
      name : 'item 2',
      price : '19.99',
      quantity : '2'
    });

    OrderService.addOrderItem({
      id : '1234',
      name : 'item 2',
      price : '9.99',
      quantity : '1'
    });

    expect(OrderService.getTotalItemCount()).toBe(3);

  });

});
