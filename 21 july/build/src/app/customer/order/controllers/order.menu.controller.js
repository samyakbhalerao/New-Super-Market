angular.module('eTOe.customer.order').controller('Customer.Order.Menu.CTRL', ['$scope','shareData','$rootScope',
    function($scope,shareData,$rootScope) {
       console.log('shared data:',shareData.getSharedData());
        $scope.model.menu_categories= $rootScope.model.menu.menu_categories;
        $('#menu-tab-content').addClass('active');
        $('#menu_tab1').addClass('active');

        $scope.showMenu=function(index){
            console.log('element:',this);
            $('.menu-tab-item, .menu-tab-content').removeClass('active');
            $(".menu-ul-wrapper > ul >  li:eq("+index+")").addClass('active');
            $("#menu-wrap > .menu-content-wrapper >  div:eq("+index+")").addClass('active');
        //    $('#menu_tab'+index).addClass('active');
         //   $('#menu-tab-content'+index).addClass('active');
        };
        $('.menu-tab-item').click(function(){
            if(!$(this).hasClass('active')){
                var itemId = $(this).attr('data-id');
                $('.menu-tab-item, .menu-tab-content').removeClass('active');
                $(this).addClass('active');
                $('#'+itemId).addClass('active');
            }
        });
        $('.add-to-order').click(function(){
            $('.menu-customize-modal').addClass('modal-show');
            $('.modal-overlay').addClass('open');
        });
        angular.element(document).ready(function(){
            $("#menu-wrap > .menu-content-wrapper >  div:eq(0)").addClass('active');

            $(".menu-ul-wrapper > ul >  li:eq(0)").addClass('active');
        });

    }
]);