/**
 * 
 */
(function(){
	'use strict'
	
	var app=angular.module("superMarketApp");
	app.constant("productListActiveClass", "btn-warning");
	app.constant("productListPageCount", 3);
	app.controller("productListController",['$scope','$filter','productListActiveClass','productListPageCount','cart',function($scope,$filter,productListActiveClass,productListPageCount,cart) {
		console.log("product controller");
		var selectedCategory=null;
		$scope.selectedPage=1;
		$scope.pageSize=productListPageCount;
		$scope.selectCategory=function(newCategory){
			console.log("inside selectCategory()"+newCategory);
			selectedCategory=newCategory;
			$scope.selectedPage=1;
		};
		$scope.categoryFilterFn=function(product){
			//using default $filter to make filter function
			console.log("inside categoryFilterFn()");
			return selectedCategory==null || product.category==selectedCategory;
			
		};
		$scope.getCategoryClass=function(category){
			console.log("inside getCategoryClass()");
			return selectedCategory==category?productListActiveClass:"";
		};
		//pagenation code
		$scope.selectPage = function (newPage) {
			console.log("inside selectPage()");
			$scope.selectedPage = newPage;
			}
		$scope.getPageClass = function (page) {
			console.log("inside getPageClass()");
			return $scope.selectedPage == page ? productListActiveClass : "";
			}
	//function to add product to cart
		$scope.addProductToCart=function(product){
			cart.addProduct(product.id,product.name,product.price);
		}
	}]);
})();