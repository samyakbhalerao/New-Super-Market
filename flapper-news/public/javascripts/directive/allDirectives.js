/**
 * 
 */
(function(){
	var app=angular.module("allDirectives",[]);
	app.directive("sidebar", function() {
		return {templateUrl:"src/includes/sidebar.html"}
	});
	
})()