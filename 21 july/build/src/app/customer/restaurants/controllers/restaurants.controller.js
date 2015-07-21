/**
 * Created by TJ on 3/1/15.
 */

angular.module('eTOe.customer.restaurants').controller('Customer.Restaurants.CTRL', ['$rootScope','$scope','getData','shareData',
    function($rootScope,$scope,getData,shareData) {
    console.log('restaurants controller');
//        $rootScope.model.cusinesList;
        $rootScope.loadingRest=true;
        $scope.filterModel = {};
        $scope.filterModel.availableDropdown = {
            options: [{
                text: 'Delivery',
                value: 'delivery'

            }, {
                text: 'Pickup',
                value: 'pickup'

            }]
        };

        $scope.filterModel.sortByDropdown = {
            options: [{
                text: 'Discount Coupon',
                value: 'delivery'
            }, {
                text: 'Distance',
                value: 'distance'
            } ,{
                text: 'Reviews',
                value: 'reviews'
            },{
                text: 'Delivery time',
                value: 'delivery-time'
            },{
                text: 'Average pricing',
                value: 'average-pricing'
            },{
                text: 'Ratings',
                value: 'ratings'
            },{
                text: 'Restaurant name',
                value: 'restaurant-name'
            },{
                text: 'Minimum delivery',
                value: 'minimum-delivery'
            }]
        };
          getData.fromUrl('http://104.154.38.217:3000/cuisines?sortby='+$rootScope.query).then(function(requested,header){
         if(requested.status==200){
         console.log('data inside restaurant:',requested.data);
         console.log('header:',requested.status);
        // $rootScope.model.cusinesList=requested.data;
         shareData.setSharedData(requested.data);
             $rootScope.loadingRest=false;
         }else{
         console.log('no data found');
         }
         });
        $rootScope.filterChange=function(availOpt){
           // var option=$('.available-dropdown > .filter-dropdown > span').html();
            //var temp;
            console.log('selected available for:',availOpt);
            console.log('available for filter changed');
            if(availOpt==="Delivery" ){
                $scope.filterModel.sortByDropdown.options[3].text="Delivery time";
                $scope.filterModel.sortByDropdown.options[3].value="delivery-time";


            }else{
                $scope.filterModel.sortByDropdown.options[3].text="Ready Time";
                $scope.filterModel.sortByDropdown.options[3].value="ready-time";

            }

           /* temp=$('.sort-wrap > .dropdown-wrap > .sort-trigger > .filter-dropdown > span').html();
            if(temp===""){
                $('.sort-wrap > .dropdown-wrap > .sort-trigger > .filter-dropdown > span').html($scope.filterModel.sortByDropdown.options[0].text);
             //   sortByOption=$('.sort-wrap > .dropdown-wrap > .sort-trigger > .filter-dropdown > span').html();
            }*/
        };
        $scope.sortByFilterChange=function(){
            var sortByOption=$('.sort-wrap > .dropdown-wrap > .sort-trigger > .filter-dropdown > span').html();
        console.log('sortby option:'+sortByOption);
        };
        $rootScope.setFilterData=function(option,availForFlag,cusineFlag){
            var filterAttr={};
            var sortByOption;
            var availOption;
            if(availForFlag){
                availOption=option;
                sortByOption=$('.sort-wrap > .dropdown-wrap > .sort-trigger > .filter-dropdown > span').html();
                if(availOption==="Delivery" && sortByOption==="Ready Time"){
                    sortByOption="Delivery time";
                }
                if(availOption==="Pickup" && sortByOption==="Delivery time"){
                    sortByOption="Ready Time";
                }
            }else if(cusineFlag){
                sortByOption=$('.sort-wrap > .dropdown-wrap > .sort-trigger > .filter-dropdown > span').html();
                availOption=$('.available-dropdown > .filter-dropdown > span').html();
            }
            else{
                sortByOption=option;
                availOption=$('.available-dropdown > .filter-dropdown > span').html();
            }


            console.log('availbale:'+availOption+':sortby:'+sortByOption);


            filterAttr.sortBy=sortByOption;
            filterAttr.availFor=availOption;

            console.log('filter data:',filterAttr);
            return filterAttr;

        };

    }
]);
