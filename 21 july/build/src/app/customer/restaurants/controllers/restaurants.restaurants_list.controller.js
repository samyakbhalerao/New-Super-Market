/**
 * Created by Samyak on 02/06/2015.
 */
(function(){
    "use strict";
    angular.module('eTOe.customer.restaurants').controller('Customer.Restaurants.restaurant-list.CTRL', ['$scope','getData','shareData','$rootScope',function($scope,getData,shareData,$rootScope) {
        console.log('restaurants list page controller');
        $scope.model={};
        $scope.loading="";
        var cusinesList=[];
        var sortBy;
        var filterData={"sortBy":'',"availFor":''};
       // var availableFor;
        cusinesList.push(localStorage.getItem('selectedCusineName'));
        $scope.cusinesData=shareData.getSharedData();

        $rootScope.$on("sortByEvent",function(event,option){
            console.log("Sort by changed:",option.text);
            if(option.text==="Delivery" || option.text==="Pickup"){
                console.log('first change filter then make call');
                $rootScope.filterChange(option.text);

                $scope.generateUrl(option.text,true);
            }else{
                $scope.generateUrl(option.text,false);
            }

        });
        $scope.generateUrl=function(option,availForFlag,cusineFlag){

            var url;
            var queryString;
            //var cusinesList=[];

            var tempfilter= $rootScope.setFilterData(option,availForFlag,cusineFlag);
            $('div.cuisine-options >label > input:checked').each(function(){
                console.log('input value:',$(this).val());
                cusinesList.push($(this).val());
            });
            if(filterData.sortBy!==tempfilter.sortBy){
                console.log('cusinesList'+cusinesList);
                filterData=tempfilter;
                url='http://104.154.38.217:3000/restaurant/filter';
                queryString='sortBy='+filterData.sortBy.toLowerCase()+'&availFor='+filterData.availFor.toLowerCase();
                loadRestaurants(url,queryString);
                console.log('cusines data for rest list:',$scope.cusinesData);
            }else{
                url='http://104.154.38.217:3000/restaurant/filter';
                queryString='sortBy='+filterData.sortBy.toLowerCase()+'&availFor='+filterData.availFor.toLowerCase();
                loadRestaurants(url,queryString);
            }

        };
        $scope.showMenu=function(restaurants_id){
            localStorage.setItem("selRestaurant_id",restaurants_id);
            window.location.href="http://localhost:3000/#/order/menu";
        };
        var loadRestaurants=function(url,queryString,body) {
            $scope.loading =true;
            getData.fromUrl(url+'?'+queryString).then(function (requested, header) {
                if (requested.status == 200) {
                    console.log('data inside restaurant:', requested.data);
                    console.log('header:', requested.status);
                    $scope.model.restaurantObj = requested.data;

                    $scope.loading = false;
                } else {
                    console.log('no data found');
                }
            });
        };
        loadRestaurants('http://104.154.38.217:3000/restaurant','','');
        console.log('selected cusine in cusines page:'+localStorage.getItem('selectedCusineName'));

        angular.element(document).ready(function () {
            $('div.cuisine-options >label > input').each(function(){
                var temp=$(this).val();
                if(temp===localStorage.getItem('selectedCusineName')){
                //    console.log('input value to be checked:',$(this).val());
                    $(this).attr("checked",true);
                }
              //  console.log('input value to check:',$(this).val());
             //   cusinesList.push($(this).val());
            });

        });


    }]);
})();

