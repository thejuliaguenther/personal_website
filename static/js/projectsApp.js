// var projectsApp = angular.module('projectsApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'ngRoute']);

// projectsApp.config(['$routeProvider', function ($routeProvider) {
       
//     $routeProvider
        
//     .when('/', {
//         templateUrl: 'static/pages/support-genius.html'
//         })

//     .when('/ratings', {
//         templateUrl: 'static/pages/ratings-analysis.html'
//     })
        
        
// }]);

var projectsApp = angular.module('projectsApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'ui.router']);

projectsApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/tab/dash');
        $stateProvider
        .state('view1', {
            url: '/',
            templateUrl: 'static/pages/support-genius.html'
        })
        .state('view2', {
            url: '/ratings',
            templateUrl: 'static/pages/ratings-analysis.html'
        });
    })
    .controller('projectCtrl', function($scope, $location, $log) {
        $scope.selectedIndex = 0;

        $scope.$watch('selectedIndex', function(current, old) {
            switch (current) {
                case 0:
                    $location.url("/");
                    break;
                case 1:
                    $location.url("/ratings");
                    break;
            }
        });
    });


/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/