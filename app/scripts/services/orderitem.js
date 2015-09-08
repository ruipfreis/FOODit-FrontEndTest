'use strict';

/**
 * @ngdoc service
 * @name jstestApp.OrderItem
 * @description
 * # OrderItem
 * Factory in the jstestApp.
 */
angular.module('jstestApp')
  .factory('OrderItem', function ($rootScope) {

    function OrderItem(id, name, price, quantity, tags) {
      this.setId(id);
      this.setName(name);
      this.setPrice(price);
      this.setQuantity(quantity);
      this.setTags(tags);
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

      setTags : function(tags){
        this._tags = [];
        if(Array.isArray(tags))
          this._tags = tags;
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

      getTags : function(){
        return this._tags;
      },

      hasTag : function(searchTag){
        return this.getTags().some(function(tag){
          return (tag.indexOf(searchTag) > -1);
        });
      },

      addQuantityBy : function(addQuantity){
        var
          aqi = parseInt(addQuantity),
          currQty = this.getQuantity();
        if (aqi)
          this.setQuantity(currQty + aqi);

        $rootScope.$broadcast('order:change', {});
      },

      getTotalPrice : function() {
        return parseFloat(this.getQuantity() * this.getPrice()).toFixed(2);
      }
    };

    OrderItem.create = function(id, name, price, quantity, tags){
      return new OrderItem(id, name, price, quantity, tags);
    };

    return OrderItem;
  })
  .filter('hasTag', function() {
    return function(items, tag) {
      var
        filteredItems = [];

      items.forEach(function(item){
        if(item.hasTag(tag))
          filteredItems.push(item);
      });
      return filteredItems;
    }
  })
  .filter('notHasTag', function() {
    return function(items, tag) {
      var
        filteredItems = [];

      items.forEach(function(item){
        if(!item.hasTag(tag))
          filteredItems.push(item);
      });
      return filteredItems;
    }
  });
