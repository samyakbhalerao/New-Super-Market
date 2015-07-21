/**
 * Created by Samyak on 03/07/2015.
 */
ApplicationConfiguration.registerModule('eTOe.customer.authentication',[]);

angular.module( 'eTOe.customer.authentication')
    .config(["$stateProvider", "$urlRouterProvider", function config( $stateProvider,$urlRouterProvider) {
        $stateProvider.state('authentication', {
            url : '/authentication',
            views : {
                'main':{
                    templateUrl : 'customer/authentication/views/authentication.view.tpl.html',
                    controller : 'Customer.Authentication.CTRL'
                }
            }
        });
      //  $urlRouterProvider.otherwise('/');
    }]);
