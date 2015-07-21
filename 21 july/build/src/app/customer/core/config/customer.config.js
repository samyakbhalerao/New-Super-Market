ApplicationConfiguration.registerModule('eTOe.customer',[]);

angular.module('eTOe.customer').config(["$stateProvider", function config($stateProvider) {
    $stateProvider.state('customer', {
        abstract: true,

        views: {
            'main': {
                controller: 'Customer.CTRL',
                templateUrl: 'customer/core/views/customer.tpl.html'
            },
            'details': {
                controller: 'Customer.Restaurantdetails.CTRL',
                templateUrl: 'customer/core/views/customer.restaurantdetails.tpl.html'
            }
            //,
            //"header": {
            //    templateUrl: 'common/header.tpl.html',
            //    controller: 'HeaderCtrl'
            //}
        }
}).state('customer.landingPage', {
        url : '/home',
        views : {
            'body':{
                templateUrl : 'customer/core/views/customer.home.tpl.html',
                controller : 'Customer.Home.CTRL'
            }
        }
    });
}]);/*
.controller('Customer.CTRL', ['$scope', function($scope){
    console.log('customer.CTRL get loaded');

}]);
*/