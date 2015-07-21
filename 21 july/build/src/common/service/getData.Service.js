/**
 * Created by Samyak on 13/05/2015.
 */
(function(){
    "use strict";

     angular.module('custom-services').service('getData',['$http',function($http){
         return {
             fromUrl : function (url,body) {
                 var responseData = $http.get(url,body).success(function (data,header) {
                   //  console.log('headers :getdata:',header);
                     return data;
                 }).error(function (response) {
                     return response;
                 });
                 return responseData;
             }
         };
     }]);
})();