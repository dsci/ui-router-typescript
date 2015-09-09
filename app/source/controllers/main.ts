module UiRouter{
'use strict';

/**
 * @ngdoc function
 * @name uirouterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uirouterApp
 */
 export class MainCtrl{
   public static $inject = ['$scope'];

   private awesomeThings;

   constructor(private $scope){
     this.awesomeThings = this.awesomeThings = [
       {
         title: 'HTML5 Boilerplate',
         desc: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'
       },
       {
         title: 'AngularJS',
         desc: 'AngularJS is a toolset for building the framework most suited to your application development.'
       },
       {
         title: 'Karma',
         desc: 'Spectacular Test Runner for JavaScript.'
       }
     ];
     $scope.awesomeThings = this.awesomeThings;
   }
 }
}

//angular.module('uirouterApp').controller('MainCtrl', MainCtrl);
