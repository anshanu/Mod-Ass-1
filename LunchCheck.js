(function(){
  'use strict;'

  angular.module('LunchCheckApp',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){

      $scope.menu = "";
      $scope.result = "";

      $scope.checkLunch = function(){
        if($scope.menu == ""){
          window.alert("Please enter data first");
        } else {
            var menuList =  getList($scope.menu);
            var listCount = menuList.length;
            if(listCount >3){
              $scope.result = "Too much!";
            } else {
              $scope.result = "Enjoy!";
            }
        }
      };


      $scope.reset = function(){
          $scope.menu = "";
          $scope.result = "";
      };

      function getList(string){
        var list = string.split(',');
        return list;
      }
  }

})();
