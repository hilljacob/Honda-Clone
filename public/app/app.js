angular.module('personalPro', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

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



})
