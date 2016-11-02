angular.module('personalPro', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('home', {
        url: '/',
        controller: 'homeCtrl',
        templateUrl: './app/routes/home.html'
      })
      .state('sxs', {
        url: '/sxs',
        controller: 'sxsCtrl',
        templateUrl: './app/routes/sxs.html'
      })
      .state('register', {
        url: '/register',
        controller: 'registerCtrl',
        templateUrl: './app/routes/register.html'
      })
      .state('account', {
        url: '/account',
        controller: 'accountCtrl',
        templateUrl: './app/routes/account.html'
      })
      .state('planTrip', {
        url: '/planTrip',
        controller: 'planTripCtrl',
        templateUrl: './app/routes/planTrip.html'
      })



}])

angular.module('personalPro').controller('accountCtrl', ["$scope", function($scope){



}])

angular.module('personalPro').controller('homeCtrl', ["$scope", function($scope){

      

}])

angular.module('personalPro').controller('mainCtrl', ["$scope", function($scope){

      $scope.test = 'Jake is Awesome';

}])

angular.module('personalPro').controller('planTripCtrl', ["$scope", function($scope){



}])

angular.module('personalPro').controller('registerCtrl', ["$scope", function($scope){



}])

angular.module('personalPro').controller('sxsCtrl', ["$scope", function($scope){



}])

angular.module('personalPro').service('googleServ', ["$http", function($http){

  
}])

angular.module('personalPro').service('motorServ', ["$http", function($http){

  this.getItems = function(){
    return $http({
      method: 'GET',
      url: '/items',
    }).then(function(response){
        return response.data;
    })
  }


}])

angular.module('personalPro').directive('footer1', function(){


  return {
    templateUrl:'./app/directives/footer1/footer1.html',
    restrict: 'E',
    controller:'footer1Ctrl',
    // scope:{
    //
    // }
  }

})

angular.module('personalPro').controller('footer1Ctrl', ["$scope", function($scope){


}])

angular.module('personalPro').directive('footer2', function(){


  return {
    templateUrl:'./app/directives/footer2/footer2.html',
    restrict: 'E',
    controller:'footer2Ctrl',
    // scope:{
    //
    // }
  }

})

angular.module('personalPro').controller('footer2Ctrl', ["$scope", function($scope){


}])

angular.module('personalPro').directive('nav1', function(){


  return {
    templateUrl:'./app/directives/nav1/nav1.html',
    restrict: 'E',
    controller:'nav1Ctrl',
    // scope:{
    //
    // }
  }

})

angular.module('personalPro').controller('nav1Ctrl', ["$scope", "motorServ", function($scope, motorServ){


      motorServ.getItems().then(function(response){
        $scope.items = response;
        console.log(response);
      })

}])

angular.module('personalPro').directive('nav2', function(){


  return {
    templateUrl:'./app/directives/nav2/nav2.html',
    restrict: 'E',
    controller:'nav2Ctrl',
    // scope:{
    //
    // }
  }

})

angular.module('personalPro').controller('nav2Ctrl', ["$scope", function($scope){


}])
