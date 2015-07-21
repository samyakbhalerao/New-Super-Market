/**
 * Created by ACER on 03/07/2015.
 */
ApplicationConfiguration.registerModule('eTOe.common.directives.dropdown',[]);

angular.module('eTOe.common.directives.dropdown').directive("dropdown", ['$rootScope', function($rootScope) {

    return {
        replace: true,
        restrict: "E",
        templateUrl: 'directives/dropdown/template.tpl.html',
        scope: {
            model: '=',
            onOptionChange: '=onoptionchange'
        },

        controller: ["$scope", function($scope) {
            if(!$scope.model){
                $scope.model = {
                    isOpen: false
                };
            }

            if(!$scope.model.selectedOption && $scope.model.options.length > 0){
                $scope.model.selectedOption = $scope.model.options[0];
            }

            $scope.onOptionClicked = function(option){
                var prevOption = $scope.model.selectedOption;
                if(prevOption == option){
                    return;
                }
                $scope.model.selectedOption = option;
                if($scope.onOptionChange){
                    $scope.onOptionChange(option, prevOption);
                }
                $scope.model.isOpen = false;
            };
        }]
    };
}]);