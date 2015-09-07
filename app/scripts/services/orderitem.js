'use strict';

/**
 * @ngdoc service
 * @name jstestApp.OrderItem
 * @description
 * # OrderItem
 * Factory in the jstestApp.
 */
angular.module('jstestApp')
  .factory('OrderItem', function () {

    function OrderItem(id, name, price, quantity) {
      this.setId(id);
      this.setName(name);
      this.setPrice(price);
      this.setQuantity(quantity);
    }

    OrderItem.prototype = {
      //setters
      setId : function(id){
        if(id)
          this._id = id;
      },

      setName : function(name){
        if(name)
          this._name = name;
      },

      setPrice : function(price){
        var pf = parseFloat(price);
        this._price = 1;
        if(pf && pf > 0)
          this._price = pf;
        this._price = this._price.toFixed(2);
      },

      setQuantity : function(quantity){
        var qi = parseInt(quantity);
        this._quantity = 1;
        if (qi && qi > 0)
          this._quantity = qi;
      },

      //getters
      getId : function(){
        return this._id;
      },

      getName : function(){
        return this._name;
      },

      getPrice : function(){
        return this._price;
      },

      getQuantity : function(){
        return this._quantity;
      },

      addQuantityBy : function(addQuantity){
        var
          aqi = parseInt(addQuantity),
          currQty = this.getQuantity();
        if (aqi && aqi > 0)
          this.setQuantity(currQty + aqi);
      },

      getTotalPrice : function() {
        return parseFloat(this.getQuantity() * this.getPrice()).toFixed(2);
      }
    };

    OrderItem.create = function(id, name, price, quantity){
      return new OrderItem(id, name, price, quantity);
    };

    return OrderItem;
  });
