/**
 * Created by TJ on 3/1/15.
 */

ApplicationConfiguration.registerModule('eTOe.customer.restaurants',[]);

angular.module( 'eTOe.customer.restaurants')
    .config(["$stateProvider", "$urlRouterProvider", function config( $stateProvider,$urlRouterProvider) {
        $stateProvider.state('customer.restaurants', {
          abstract:true,
            url : '/restaurants',
            views : {
             'body':{
                    templateUrl : 'customer/restaurants/views/restaurants.view.tpl.html',
                    controller : 'Customer.Restaurants.CTRL'
           }
           }
        }).state('customer.restaurants.cusines', {
            url : '/cusines',
            views : {
              'body':{
                    templateUrl : 'customer/restaurants/views/cusines.view.tpl.html',
                    controller : 'Customer.Restaurants.Cusines.CTRL'
             }
           }
        }).state('customer.restaurants.meals', {
                url : '/meals',
            views : {
              'body':{
                        templateUrl : 'customer/restaurants/views/meals.view.tpl.html',
                        controller : 'Customer.Restaurants.Meals.CTRL'
            }
           }
        }).state('customer.restaurants.restaurant_list', {
            url : '/restaurant-list',
            views : {
                'body':{
                    templateUrl : 'customer/restaurants/views/restaurant-list.view.tpl.html',
                    controller : 'Customer.Restaurants.restaurant-list.CTRL'
                }
            }
        });
        $urlRouterProvider.otherwise('/home');
    }]);

