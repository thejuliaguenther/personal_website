var projectsApp = angular.module('projectsApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'ngRoute']);

projectsApp.config(['$routeProvider', function ($routeProvider) {
       
    $routeProvider
        
    .when('/support-genius', {
        templateUrl: 'static/pages/support-genius.html'
        })

    .when('/ratings', {
        templateUrl: 'static/pages/ratings-analysis.html'
    })
        
    // .when('/projects', {
    //     templateUrl: 'static/pages/projects.html'
    // })
        
    // .when('/contact', {
    //     templateUrl: 'static/pages/contact.html'
    // })
        
}]);


/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/