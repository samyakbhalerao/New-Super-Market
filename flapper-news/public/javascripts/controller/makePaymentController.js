(function(){
	'use strict'
	var app=angular.module('superMarketApp');
	app.controller('makePaymentController', ['$scope','$rootScope','cart',function($scope,$rootScope,cart) {
		
		$scope.shippingData=$rootScope.paymentDetails;
		$scope.cartData=cart.getProducts();
		$scope.total=function(){
			var total=0;
			for(var i=0;i<$scope.cartData.length;i++){
				total+=($scope.cartData[i].price*$scope.cartData[i].count);
			}
			return total;
		}
		console.log("data inside makepymentController:",$rootScope.paymentDetails);
		console.log("cart data:",$scope.cartData);
	}]);
})();