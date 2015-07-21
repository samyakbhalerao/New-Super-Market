angular.module('eTOe.customer.order').controller('Customer.Order.Specials.CTRL', ['$scope','shareData','$rootScope',
    function($scope,shareData,$rootScope) {
        $scope.model={};
        $scope.model.special_menu=shareData.getSharedData();
        $scope.model.special_menu=$rootScope.model.menu.specials;
        console.log('specials data:',$scope.model.special_menu);
        console.log('got shared data:',shareData.getSharedData());
             $('.special-extra-trigger').click(function(){
            console.log('arrow clicked');
            $(this).toggleClass('active');
            $(this).closest('.special-item-outer').toggleClass('active');
        });
        $('.special-tab-item').click(function(){
            if(!$(this).hasClass('active')){
                var itemId = $(this).attr('data-id');
                $('.special-tab-item, .special-tab-content').removeClass('active');
                $(this).addClass('active');
                $('#'+itemId).addClass('active');
            }
        });
    }
]);