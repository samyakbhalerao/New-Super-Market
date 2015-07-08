(function(){
	'use strict'
	console.log("inside supermarket.js");
	var app=angular.module("superMarketApp");	
	app.controller("superMarketController",['$scope','$http', function($scope,$http) {
	
		$scope.errorStatus='';
		//get data from json (product,category)
		$http.get("/data/product.json").success(function(data, status, headers, config) {
			console.log("Data:",data);
			$scope.error=false;
			$scope.products=data;
		}).error(function(data, status, headers, config) {
			console.log("Error occured:"+status);
			$scope.error=true;
			$scope.errorStatus=status;
			
		});
		
		
	}]);
})();