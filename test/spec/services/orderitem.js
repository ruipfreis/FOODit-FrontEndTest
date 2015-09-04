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

  var
    item,
    itemData = {
      id : '123',
      name : 'test',
      price : '10.00',
      quantity : 5,
      total : '50.00'
    },
    itemData2 = {
      id : '123abc',
      name : 'test2',
      price : '10.55',
      quantity : 2,
      total : '21.10'
    };

  beforeEach(function(){
    item = OrderItem.create(itemData.id, 'test', itemData.price, itemData.quantity);
  });

  it('should create a new object with type OrderItem', function(){
    expect(item).toEqual(jasmine.any(OrderItem));
  });

  it('should get an item with ID ' + itemData.id + ' and get a total price of ' + itemData.total, function(){
    expect(item.getId()).toBe(itemData.id);
    expect(item.getName()).toBe(itemData.name);
    expect(item.getPrice()).toBe(itemData.price);
    expect(item.getQuantity()).toBe(itemData.quantity);
    expect(item.getTotalPrice()).toBe(itemData.total);
  });

  it('should change the item attributes and get a total price of ' + itemData2.total, function(){

    item.setId(itemData2.id);
    item.setName(itemData2.name);
    item.setPrice(itemData2.price);
    item.setQuantity(itemData2.quantity);

    expect(item.getId()).toBe(itemData2.id);
    expect(item.getName()).toBe(itemData2.name);
    expect(item.getPrice()).toBe(itemData2.price);
    expect(item.getQuantity()).toBe(itemData2.quantity);
    expect(item.getTotalPrice()).toBe(itemData2.total);
  });

});
