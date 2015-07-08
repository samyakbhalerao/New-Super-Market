/**
 * 
 */
(function(){
	'use strict'
	console.log("inside config.js");
	var app=angular.module("superMarketApp",['cart','customFilter','ui.router']);
	app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$sceProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $sceProvider){
		$urlRouterProvider.otherwise('products');
		$stateProvider.state('products',{
			url : '/products',
			templateUrl: '/views/productList.html'
			
		})
		.state('checkout', {
			url : '/checkout',
			templateUrl : '/views/checkoutSummary.html',
			controller:'cartSummaryController'
			
		}).state('placeOrder', {
			url : '/placeOrder',
			templateUrl : '/views/placeOrder.html',
			controller:'placeOrderController'
			
		}).state('makePayment', {
			url : '/makePayment',
			templateUrl : '/views/makePayment.html',
			controller:'makePaymentController'
			
		});
		$sceProvider.enabled(false);
	}]);
	
})();