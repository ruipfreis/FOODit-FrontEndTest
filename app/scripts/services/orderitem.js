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
        if(pf && pf > 0)
          this._price = pf.toFixed(2);
      },

      setQuantity : function(quantity){
        var qi = parseInt(quantity);
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


      getTotalPrice : function() {
        return parseFloat(this.getQuantity() * this.getPrice()).toFixed(2);
      }
    };

    OrderItem.create = function(id, name, price, quantity){
      return new OrderItem(id, name, price, quantity);
    };

    return OrderItem;
  });
