/**
 * Created by TJ on 3/1/15.
 */

ApplicationConfiguration.registerModule('eTOe.customer.order',[]);

angular.module( 'eTOe.customer.order')
    .config(["$stateProvider", "$urlRouterProvider", function config( $stateProvider,$urlRouterProvider) {
        $stateProvider.state('customer.order', {
            abstract:true,
            url : '/order',
            views : {
                'body':{
                    templateUrl : 'customer/order/views/order.view.tpl.html',
                    controller : 'Customer.Order.CTRL'
                }
            }
        }).state('customer.order.menu', {
            url : '/menu',
            views : {
                'body':{
                    templateUrl : 'customer/order/views/menu.view.tpl.html',
                    controller : 'Customer.Order.Menu.CTRL'
                }
            }
        }).state('customer.order.specials', {
                url : '/specials',
                views : {
                    'body':{
                        templateUrl : 'customer/order/views/specials.view.tpl.html',
                        controller : 'Customer.Order.Specials.CTRL'
                    }
                }
            });

    }]);


