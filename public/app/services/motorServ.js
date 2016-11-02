angular.module('personalPro').service('motorServ', function($http){

  this.getItems = function(){
    return $http({
      method: 'GET',
      url: '/items',
    }).then(function(response){
        return response.data;
    })
  }


})
