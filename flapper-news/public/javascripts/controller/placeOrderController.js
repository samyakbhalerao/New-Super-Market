(function() {
	'use strict'
	var app = angular.module("superMarketApp");
	app.controller("placeOrderController", [
			'$scope',
			'$rootScope',
			'cart',
			function($scope, $rootScope, cart) {
				$scope.label = "Work is in progress.....";
				$rootScope.generatePaymentDetails = function() {
					console
							.log("Name of Customer:"
									+ $scope.data.shipping.name);
					console.log("Address of Customer:"
							+ $scope.data.shipping.street);
					$scope.data.shipping.paymentType = $(
							"input[name='paymentType']:checked").val();
					console.log("Payment type of Customer:"
							+ $scope.data.shipping.paymentType);
					$rootScope.paymentDetails=$scope.data.shipping;
					console.log("payment details:",$rootScope.paymentDetails);
					console.log("cart data:",$rootScope.cartData);
				}
				
			} ]);
})();