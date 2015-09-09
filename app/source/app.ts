/// <reference path="../_all.ts" />


/**
 * @ngdoc overview
 * @name uirouterApp
 * @description
 * # uirouterApp
 *
 * Main module of the application.
 */
module UiRouter{
  'use strict';
var modules = [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
];

class Routing{
  constructor($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
}
var app = angular.module('uirouterApp', modules);
app.controller('MainCtrl', MainCtrl);
app.controller('AboutCtrl', MainCtrl);
app.config(Routing);
// app.config(function ($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'views/main.html',
//         controller: 'MainCtrl',
//         controllerAs: 'main'
//       })
//       .when('/about', {
//         templateUrl: 'views/about.html',
//         controller: 'AboutCtrl',
//         controllerAs: 'about'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
//   });
}
