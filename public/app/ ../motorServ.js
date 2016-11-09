angular.module('personalPro').service('motorServ', function($http){

  this.getItems = function(){
    return $http({
      method: 'GET',
      url: '/items',
    }).then(function(response){
        return response.data;
    })
  }
  this.getCategory = function(){
    return $http({
      method: 'GET',
      url: '/category',
    }).then(function(response){
        return response.data;
    })
  }
  this.gettype = function(){
    return $http({
      method: 'GET',
      url: '/type',
    }).then(function(response){
        return response.data;
    })
  }
})
