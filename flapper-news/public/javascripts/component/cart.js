(function() {
	'use strict';
	console.log("inside cart.js");
	var cart = angular.module("cart",[]);
	cart.factory("cart", function() {
		console.log("inside cart factory");
		
		var cartData = [];
		return {

			addProduct : function(id, name, price) {
				var addToExistingItem = false;
				for ( var i = 0; i < cartData.length; i++) {

					if (cartData[i].id == id) {

						cartData[i].count++;
						addToExistingItem = true;
						break;
					}

				}

				if (!addToExistingItem) {
					cartData.push({
						count : 1,
						id : id,
						price : price,
						name : name
					});
				}

			},

			removeProductFromCart : function(id) {
				for ( var i = 0; i < cartData.length; i++) {

					if (cartData[i].id == id) {

						cartData.splice(i, 1);
						break;

					}

				}

			},

			getProducts : function() {
				console.log("cart data:",cartData);
				return cartData;

			}
		}
	});

})();