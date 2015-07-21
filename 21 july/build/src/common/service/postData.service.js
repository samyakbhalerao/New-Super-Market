/**
 * Created by Samyak on 13/05/2015.
 */
(function(){
    "use strict";

     angular.module('custom-services').service('postData',['$http',function($http){
        var postData = {};
        postData.toUrl = function(url,body) {
            var call = $http.post(url ,body)
            .success(function(response){
                return response;
            })
            .error(function(response){
                return response;
            });
            return call;
        };
       
        return postData;
     }]);
})();