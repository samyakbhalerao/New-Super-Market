(function(){
	'use strict';
	var app=angular.module("superMarketApp");
	app.controller("cartSummaryController",['$scope','cart',function($scope,cart){
		console.log("inside cartSummaryController");
		$scope.cartData=cart.getProducts();
	
		$scope.total=function(){
			var total=0;
			for(var i=0;i<$scope.cartData.length;i++){
				total+=($scope.cartData[i].price*$scope.cartData[i].count);
			}
			return total;
		}
		$scope.itemCount=function(){
			var total=0;
			for(var i=0;i<$scope.cartProducts.length;i++){
				total+=$scope.cartProducts[i].count;
			}
			return total;
		}
		$scope.updateCount=function(index,value){
			console.log("inside update count method:\n index"+index+"\n value:"+value);
			$scope.cartData[index].count=value;
		}
		$scope.removeProduct=function(productId){
			cart.removeProductFromCart(productId);
		}
	}]);
})();