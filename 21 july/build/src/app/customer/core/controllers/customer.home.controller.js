/**
 * Created by Samyak on 08/06/2015.
 */
(function(){
    "use strict";
    angular.module('eTOe.customer').controller('Customer.Home.CTRL', ['$rootScope','$scope','$state','getData','shareData',function($rootScope,$scope,$state,getData,shareData) {
        console.log('landing page  controller');
        angular.element(document).ready(function(){
            $("#searchBox").on("keyup",function(){
                console.log('keyup');
                initialize();
            });
            var initialize=function() {
                var service = new google.maps.places.AutocompleteService();
                var query=$("#searchBox").val()||"";
                console.log('input:'+query);
                service.getQueryPredictions({ input: query }, callback);
            };

            var callback=function(predictions, status) {
                var results = document.getElementById('results');
                if (status != google.maps.places.PlacesServiceStatus.OK) {
                //    alert(status);
                    results.innerHTML='No results found';
                    return;
                }


                console.log('insidew callback');
                results.innerHTML='';
                for (var i = 0, prediction; prediction = predictions[i]; i++) {
                    results.innerHTML += '<li>' + prediction.description + '</li>';
                }
            };
        });
        $scope.startSearch=function(inputQuery){
            console.log('inside startSearch() method'+inputQuery);
         //   var query=$('.searchBox').val();
            $rootScope.query=inputQuery;
            localStorage.setItem("query",inputQuery);
         //  $state.go('customer.restaurants.cusines');



            window.location.href='http://localhost:3000/#/restaurants/cusines?query='+inputQuery;
        };
    }]);
})();