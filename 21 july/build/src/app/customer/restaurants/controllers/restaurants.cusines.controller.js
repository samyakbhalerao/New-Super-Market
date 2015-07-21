/**
 * Created by Samyak on 28/05/2015.
 */
(function(){
    "use strict";
    angular.module('eTOe.customer.restaurants').controller('Customer.Restaurants.Cusines.CTRL', ['$rootScope','$scope','shareData','getData','$state','$location',function($rootScope,$scope,shareData,getData,$state,$location) {
        console.log('cusines page controller');
        $scope.loading=true;
        $scope.model={};
        $scope.model.availableDropdown = {
            options: [{
                text: 'Dine in',
                value: 'dine-in'
            },{
                text: 'Delivery',
                value: 'delivery'

            }, {
                text: 'Pickup',
                value: 'pickup'

            }]
        };

        $scope.model.sortByDropdown = {
            options: [{
                text: 'Discount',
                value: 'delivery'
            },
                {
                    text: 'Distance',
                    value: 'distance'
                },{
                    text: 'Minimum order',
                    value: 'minimum-order'
                },{
                    text: 'Average pricing',
                    value: 'average-pricing'
                },{
                    text: 'Rating',
                    value: 'rating'
                },{
                    text: 'Restaurant name',
                    value: 'restaurant-name'
                }]
        };

        angular.element(document).ready(function(){

        });
        console.log('query:'+$rootScope.query);
        var body=$location.search('query');
        console.log('location:',$location.search('query'));
      /*  getData.fromUrl('http://104.154.38.217:3000/cuisines?sortby='+$rootScope.query).then(function(requested,header){
            if(requested.status==200){
                console.log('data inside restaurant:',requested.data);
                console.log('header:',requested.status);

                shareData.setSharedData(requested.data);
                showCusines();
                $scope.loading=false;
            }else{
                console.log('no data found');
            }
//                $scope.model.cusinesList=requested.data;
//            shareData.setSharedData(requested.data);
        });*/
        var showCusines=function(){
            $scope.model.cusinesList=shareData.getSharedData();
            $scope.loading=false;
            console.log('got data:', $scope.model.cusinesList);
            $scope.loading=false;
            $scope.getRestaurants=function(restaurantsItemList,cusineName){
                console.log('get this restaurants:',restaurantsItemList);
                var query=[];
                for(var i=0;i<restaurantsItemList.length;i++){
                    query.push(restaurantsItemList[i].restaurant_id);
                }
                console.log('restaurants_id:'+query);
                localStorage.setItem('selectedCusineName',cusineName);
                $state.go('customer.restaurants.restaurant_list');
            };

        };
        showCusines();
    }]);
})();
