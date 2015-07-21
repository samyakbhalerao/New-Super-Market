angular.module('eTOe.customer.order').controller('Customer.Order.Modals.CTRL', ['$scope',
    function($scope) {
        $('.modal-close').click(function(){
            $(this).closest('.modal-window').removeClass('modal-show');
            $('.modal-overlay').removeClass('open');
        });
        $('.modal-overlay').click(function(){
            $('.modal-window').removeClass('modal-show');
            $(this).removeClass('open');
        });
    }
]);