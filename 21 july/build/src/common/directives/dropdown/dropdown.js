ApplicationConfiguration.registerModule('eTOe.common.directives',[]);

angular.module('eTOe.common.directives').directive("dropdown", ['$rootScope', function($rootScope) {

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

          console.log("option selected:",option);
          var prevOption = $scope.model.selectedOption;
          console.log('prev opt:',prevOption);
          console.log(this);
         // if(prevOption == option){
          //  return;
          //}
          $rootScope.$emit("sortByEvent",option);
          $scope.model.selectedOption = option;

          if($scope.onOptionChange){
            $scope.onOptionChange(option, prevOption);
          }
          $scope.model.isOpen = false;


        };
       /* var setSortBYModel=function(data){
          return data;
        };*/
      }]
    };
}]);