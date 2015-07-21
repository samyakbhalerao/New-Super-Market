/**
 * Created by Samyak on 02/07/2015.
 */
ApplicationConfiguration.registerModule('custom-services',[]);
angular.module('custom-services').service('authService', ['$http', '$rootScope', '$state', '$q', function($http,$rootScope,$state,$q){
    var deffered = $q.defer();
    var data = {};
    var authService = {};
    authService.loginReq = function(url,body) {
      var loginCall=  $http.post( url ,body)
            .success(function(response){
                $rootScope.loginToken = response.token;
                $rootScope.loginUser = response.user;
                console.log(JSON.stringify(response.user));
                $rootScope.inSession = true;

            })
            .error(function(response){
                console.log('login error');
                console.log(response);

            });
            return loginCall;

    };

   authService.logoutReq = function(url) {
       var logoutCall=$http.post(url , $rootScope.loginToken)
           .success(function (response) {
               console.log(response);

               $rootScope.inSession = false;
               $rootScope.loginToken = '';


           })
           .error(function (response) {

               console.log('logout error:',response);
           });
           return logoutCall;
   };
    authService.data = function() {
        return data;
    };
    return authService;

}]);