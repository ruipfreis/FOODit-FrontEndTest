'use strict';

/**
 * @ngdoc service
 * @name jstestApp.OrderService
 * @description
 * # order
 * Service in the jstestApp.
 */
angular.module('jstestApp')
  .service('OrderService', function (OrderItem) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    return {
      _orderItems : [],

      getOrderItems : function(){
        return this._orderItems;
      },

      setOrderItems : function(orderItems){
        this._orderItems = orderItems;
      },

      addOrderItem : function(item){
        //must be an object
        if (typeof item !== 'object')
          return false;
        if (typeof item !== 'OrderItem')
          item = OrderItem.create(item.id, item.name, item.price, item.quantity, item.tags);

        var existingItem = this.getOrderItemById(item.getId());

        if (existingItem)
          existingItem.addQuantityBy(item.getQuantity());
        else
          this._orderItems.push(item);

        return item;
      },

      getOrderItemById : function(itemId){
        var orderItem = false;

        this._orderItems.some(function(item){
          if (item.getId() !== itemId)
            return false;
          orderItem = item;
          return true;
        });

        return orderItem;
      },

      removeOrderItemById : function(itemId){
        for(var index = 0; index < this._orderItems.length; index++) {
          if (this._orderItems[index].getId() === itemId) {
            this._orderItems.splice(index, 1);
            break;
          }
        }
      },

      getTotalOrderPrice : function(){
        var totalPrice = 0;

        for (var index = 0; index < this._orderItems.length; index++ ) {
          totalPrice += parseFloat(this._orderItems[index].getTotalPrice());
        }

        return totalPrice.toFixed(2);
      },

      getTotalItemCount : function(){
        var totalCount = 0;

        for (var index = 0; index < this._orderItems.length; index++ ) {
          totalCount += parseInt(this._orderItems[index].getQuantity());
        }

        return totalCount;
      },

      clearOrder : function(){
        this._orderItems = [];
      }
    };

  });
