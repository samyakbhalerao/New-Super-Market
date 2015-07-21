/**
 * Created by TJ on 3/15/15.
 */

angular.module('eTOe.customer.restaurants').controller('Customer.Restaurants.Specials.CTRL', ['$scope',
    function($scope) {
        $scope.myInterval = 5000;
        $scope.slides = [{
            image: 'assets/images/customer/core/special1.png',
            head: 'Beef Bacons'
        }, {
            image: 'assets/images/customer/core/special2.png',
            head: 'Chicken nuggets'
        }, {
            image: 'assets/images/customer/core/special3.png',
            head: 'American cheese Burger'
        }];
    }
]);