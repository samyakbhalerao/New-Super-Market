/**
 * Created by ACER on 03/07/2015.
 */
angular.module('eTOe.customer.dashboard').controller('Customer.Dashboard.History.CTRL', ['$scope',
    function($scope) {
        $scope.today = function() {
            $scope.dt = new Date();
            var today = new Date();
            $scope.dt1 = $scope.dt.setDate($scope.dt.getDate() + 10);
        };
        $scope.today();
        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };
    }
]);