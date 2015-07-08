(function(){
	'use strict';
	angular.module('cart').directive("cartsummary", function(cart) {
		return {
			restrict : 'E',
			templateUrl : '/javascripts/component/cartSummary.html',
			link : function($scope){
				var cartData=cart.getProducts();
				$scope.cartProducts=cartData;
				$scope.total=function(){
				var total=0;
				for(var i=0;i<$scope.cartProducts.length;i++){
					total+=($scope.cartProducts[i].price*$scope.cartProducts[i].count);
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
				
			}
		}

	});
})();