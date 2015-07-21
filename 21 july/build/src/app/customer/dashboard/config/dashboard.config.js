/**
 * Created by ACER on 03/07/2015.
 */
ApplicationConfiguration.registerModule('eTOe.customer.dashboard',[]);

angular.module( 'eTOe.customer.dashboard')
    .config(["$stateProvider", "$urlRouterProvider", function config( $stateProvider,$urlRouterProvider) {
        $stateProvider.state('customer.dashboard', {
            abstract:true,
            url : '/dashboard',
            views : {
                'body':{
                    templateUrl : 'customer/dashboard/views/dashboard.view.tpl.html',
                    controller : 'Customer.Dashboard.CTRL'
                }
            }
        }).state('customer.dashboard.activity', {
            url : '/activity',
            views : {
                'body':{
                    templateUrl : 'customer/dashboard/views/activity.view.tpl.html',
                    controller : 'Customer.Dashboard.Activity.CTRL'
                }
            }
        }).state('customer.dashboard.coupons', {
            url : '/coupons',
            views : {
                'body':{
                    templateUrl : 'customer/dashboard/views/coupons.view.tpl.html',
                    controller : 'Customer.Dashboard.Coupons.CTRL'
                }
            }
        }).state('customer.dashboard.history', {
            url : '/history',
            views : {
                'body':{
                    templateUrl : 'customer/dashboard/views/history.view.tpl.html',
                    controller : 'Customer.Dashboard.History.CTRL'
                }
            }
        }).state('customer.dashboard.reviews', {
            url : '/reviews',
            views : {
                'body':{
                    templateUrl : 'customer/dashboard/views/reviews.view.tpl.html',
                    controller : 'Customer.Dashboard.Reviews.CTRL'
                }
            }
        });
        $urlRouterProvider.otherwise('/home');
    }]);
