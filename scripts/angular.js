var colgateApp = angular.module('colgateApp', ['ngRoute', 'ngAnimate']);

colgateApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: "../pages/before.html",
    })
    .when('/after', {
        templateUrl: "../pages/after.html",
    })
    .otherwise({
        redirectTo: '/'
    });
});

colgateApp.controller('mainController', function($scope, $location, $window, dataService, $http) {
  0

});


angular.module('colgateApp')
    .service('dataService', function($http, $q) {
        
    })