/**
 * Created by TJ on 3/1/15.
 */

angular.module('eTOe.customer.order').controller('Customer.Order.CTRL', ['$scope','getData','shareData','$rootScope',
    function ($scope,getData,shareData,$rootScope) {

        $rootScope.model={};
        $scope.loading="";
        $rootScope.model.cart=[];
        $rootScope.model.cart.menu=[];
        $rootScope.model.cart.total=0;
        $rootScope.model.cart.tip=0;
        shareData.setSharedData($scope.model.menu);


        console.log("rest Id:"+localStorage.getItem("selRestaurant_id"));
        $('.order-trigger').click(function(){
            $('.order-summary').addClass('active');
            $('body').css('overflow','hidden');
        });
        $('.order-summary-close').click(function(){
            $('.order-summary').removeClass('active');
            $('body').css('overflow','auto');
        });
        $('.order-tab-item').click(function(){
            if(!$(this).hasClass('active')){
                var itemId = $(this).attr('data-id');
                $('.order-tab-item, .order-tab-content').removeClass('active');
                $(this).addClass('active');
                $('#'+itemId).addClass('active');
            }
        });
        $rootScope.removeItem=function(index,cost){
            $rootScope.model.cart.menu.splice(index,1);
            $rootScope.model.cart.total-=(+cost.substring(1,cost.length));
            $rootScope.model.cart.tip=15/$rootScope.model.cart.total;
        };
        $rootScope.addToCart=function(menu_name,cost){
            $rootScope.model.cart.menu.push({'name':menu_name,
            'cost':cost});
            $rootScope.model.cart.total+=(+cost.substring(1,cost.length));
            $rootScope.model.cart.tip=15/$rootScope.model.cart.total;
        };
        var loadRestaurantsMenu=function(url,queryString,body) {
            $scope.loading =true;
            getData.fromUrl(url+'?'+queryString).then(function (requested, header) {
                if (requested.status == 200) {
                    console.log('data inside restaurant:',requested);
                    console.log('header:', requested.status);
                    $rootScope.model.menu = requested.data[0];

                    $scope.loading = false;
                } else {
                    console.log('no data found');
                }
            });
        };
        loadRestaurantsMenu('http://104.154.38.217:3000/restaurant/menu/'+localStorage.getItem("selRestaurant_id"),'','');

    }
]);
