var ApplicationConfiguration = (function() {

    var applicationModuleName = 'eTOe';
    var applicationModuleVendorDependencies = [
        'templates-app',
        'templates-common',
        'ngResource',
        'ngCookies',
        'ngAnimate',
        'ngTouch',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'ui.utils'
    ];

    var registerModule = function(moduleName, dependencies) {
        angular.module(moduleName, dependencies || []);
        angular.module(applicationModuleName).requires.push(moduleName);
    };

    return {
        applicationModuleName: applicationModuleName,
        applicationModuleVendorDependencies: applicationModuleVendorDependencies,
        registerModule: registerModule
    };
})();

angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider','$urlRouterProvider',
  function($locationProvider,$urlRouterProvider) {
    //$locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise( '/' );

  }
])
.run( function run () {
})

.controller( 'AppCtrl', ["$scope", "$location", function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      console.log("$state change:",event,",tostate:",toState,',toParams:',toParams,",fromState:",fromState,',fromParams:',fromParams);
    if ( toState.data && angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | eTOe' ;
    }
  });
}]);