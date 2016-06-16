var projectsApp = angular.module('projectsApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'ngRoute']);

projectsApp.config(['$routeProvider', function ($routeProvider) {
       
    $routeProvider
        
    .when('/', {
        templateUrl: 'static/pages/support-genius.html'
        })

    .when('/ratings', {
        templateUrl: 'static/pages/ratings-analysis.html'
    })
    .otherwise({
        redirectTo: '/'
    });
        
        
}])
.directive('resize', function () {
    return {
      scope: {},
      link: function(scope, elem, attrs) {
            elem.css('height', '300px');
            elem.css('width', '550px');
      }
    };
  });

