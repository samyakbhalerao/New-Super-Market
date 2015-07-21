/* Created by Samyak on 06/06/2015.*/
(function(){
    "use strict";
    angular.module('custom-services').service('shareData',[function(){
        var sharedObj={};
        var restaurantsData={};

        return {
            setSharedData : function (data) {
                sharedObj=data;
            },
            getSharedData:function(){
                return sharedObj;
            },
            shareRestaurantsData:function(data){
                restaurantsData=data;
            },
            getRestaurantsData:function(){
                return restaurantsData;
            }
        };
    }]);

})();