angular.module('personalPro').controller('nav1Ctrl', function($scope, motorServ){

      $scope.selectedItem = 1;
      $scope.filter = 1;

      motorServ.getItems().then(function(response){
        $scope.items = response;
        console.log(response);
      })
      motorServ.getCategory().then(function(response){
        $scope.category = response;
        console.log(response);
      })
      motorServ.gettype().then(function(response){
        $scope.type = response;
        console.log(response);
      })

      $scope.filterType = function(type){
        $scope.selectedItem = type;

      }

})
