module UiRouter{
  'use strict';

  class BaseController{
    constructor(){
      console.log("hello");
    }
  }

  export class AboutCtrl extends BaseController{

    static $inject = ['$scope'];
    constructor($scope){
      $scope.word = "Hi from About";
      super();
    }
  }
}
