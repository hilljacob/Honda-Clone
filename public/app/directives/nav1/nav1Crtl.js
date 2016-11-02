angular.module('personalPro').controller('nav1Ctrl', function($scope, motorServ){


      motorServ.getItems().then(function(response){
        $scope.items = response;
        console.log(response);
      })

})
