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
}])

angular.module('personalPro').controller('accountCtrl', ["$scope", function($scope){



}])

angular.module('personalPro').controller('homeCtrl', ["$scope", "$interval", function($scope, $interval){

  var myIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var pots = document.getElementsByClassName("carouselTopper");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 2 seconds
    // lets try this thing again
      for (i = 0; i < pots.length; i++) {
        pots[i].className = pots[i].className.replace(" backRed", "");
      }
     pots[myIndex-1].className += " backRed";
  }
    var slideIndex = 1;
    showDivs(slideIndex);

    $scope.currentDiv = function(n) {
    showDivs(slideIndex = n);
    myIndex = n;
    }

    function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var pots = document.getElementsByClassName("carouselTopper");

    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    for (i = 0; i < pots.length; i++) {
    pots[i].className = pots[i].className.replace(" backRed", "");
    }
    x[slideIndex-1].style.display = "block";
    pots[slideIndex-1].className += " backRed";
    }



  // this is the one i have on w3school


    // var myIndex = 0;
    // carousel();
    //
    // function carousel() {
    //     var i;
    //     var x = document.getElementsByClassName("mySlides");
    //     var dots = document.getElementsByClassName("demo");
    //
    //     for (i = 0; i < x.length; i++) {
    //        x[i].style.display = "none";
    //     }
    //     myIndex++;
    //     if (myIndex > x.length) {myIndex = 1}
    //     x[myIndex-1].style.display = "block";
    //     setTimeout(carousel, 4000); // Change image every 2 seconds
    //     for (i = 0; i < dots.length; i++) {
    //       dots[i].className = dots[i].className.replace(" w3-red", "");
    //     }
    //    dots[myIndex-1].className += " w3-red";
    //
    // }
    //
    // var slideIndex = 1;
    // showDivs(slideIndex);
    //
    // function currentDiv(n) {
    //   showDivs(slideIndex = n);
    // }
    //
    // function showDivs(n) {
    //   var i;
    //   var x = document.getElementsByClassName("mySlides");
    //   var dots = document.getElementsByClassName("demo");
    //   if (n > x.length) {slideIndex = 1}
    //   if (n < 1) {slideIndex = x.length}
    //   for (i = 0; i < x.length; i++) {
    //      x[i].style.display = "none";
    //   }
    //   for (i = 0; i < dots.length; i++) {
    //      dots[i].className = dots[i].className.replace(" w3-red", "");
    //   }
    //   x[slideIndex-1].style.display = "block";
    //   dots[slideIndex-1].className += " w3-red";
    // }


}])

angular.module('personalPro').controller('mainCtrl', ["$scope", function($scope){

      $scope.test = 'Jake is Awesome';

}])

angular.module('personalPro').controller('planTripCtrl', ["$scope", function($scope){






  function initMap() {
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 40.77852, lng: -111.931414}
    });
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('right-panel'));

    var control = document.getElementById('floating-panel');
    // control.style.display = 'block';
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

    $scope.onChangeHandler = function() {
      calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    // document.getElementById('start').addEventListener('change', onChangeHandler);
    // document.getElementById('end').addEventListener('change', onChangeHandler);
  }

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    directionsService.route({
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
  initMap()

}])

angular.module('personalPro').controller('registerCtrl', ["$scope", function($scope){

    function initMap() {
      var directionsDisplay = new google.maps.DirectionsRenderer;
      var directionsService = new google.maps.DirectionsService;
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 41.85, lng: -87.65}
      });
      directionsDisplay.setMap(map);
      directionsDisplay.setPanel(document.getElementById('right-panel'));

      var control = document.getElementById('floating-panel');
      control.style.display = 'block';
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

      var onChangeHandler = function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
      };
      document.getElementById('start').addEventListener('change', onChangeHandler);
      document.getElementById('end').addEventListener('change', onChangeHandler);
    }

    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
      var start = document.getElementById('start').value;
      var end = document.getElementById('end').value;
      directionsService.route({
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }
    initMap()



}])

angular.module('personalPro').controller('sxsCtrl', ["$scope", function($scope){

  // this is a fade in animation for accessories********************************************
  $(window).scroll(function(){

    var winScroll = $(this).scrollTop();

    if(winScroll > $('.image-flow-container').offset().top - ($(window).height() / 2)) {
        $('.image-flow').each(function(i){
          setTimeout(function(){
            $('.image-flow').eq(i).addClass('is-showing');
          }, 150 * (i+1));
        });
      }
  });
  // another fade in animation for specs ***********************************************
  $(window).scroll(function(){

    var winScroll = $(this).scrollTop();

    if(winScroll > $('.image-fuel-container').offset().top - ($(window).height() / 2)) {
        $('.image-fuel').each(function(i){
          setTimeout(function(){
            $('.image-fuel').eq(i).addClass('is-fuel');
          }, 150 * (i+1));
        });
      }
  });

  // this is a slideshow for color picker*****************************************************
  var myIndex = 0;
  carousel();

  function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}
      x[myIndex-1].style.display = "block";
      setTimeout(carousel, 4000); // Change image every 2 seconds
  }

  // this lets me change colors of the auto********************************************************
  $(function(){
    $("#redBtnH").on("click",function(){
      $(".default").css({"background-image": "url('https://powersports.honda.com/images/HL4/color-1000/Pioneer1000-5_DLX_Red.png')"});
    });
  });
  $(function(){
    $("#whiteBtnH").on("click",function(){
      $(".default").css({"background-image": "url('https://powersports.honda.com/images/HL4/color-1000/Pioneer1000-5_DLX_White.png')"});
    });
  });
  $(function(){
    $("#greyBtnH").on("click",function(){
      $(".default").css({"background-image": "url('https://powersports.honda.com/images/HL4/color-1000/Pioneer1000-5_DLX_MetallicSilver.png')"});
    });
  });
  $(function(){
    $("#camoBtnH").on("click",function(){
      $(".default").css({"background-image": "url('https://powersports.honda.com/images/HL4/color-1000/Pioneer1000-5_DLX_HondaPhantomCamo.png')"});
    });
  });
  // this is where i'm going to do scroll links****************************************************
  $(function() {
        // Select link by id and add click event
        $('#link1').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#part-one").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });
  $(function() {
        // Select link by id and add click event
        $('#link2').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#part-two").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });
  $(function() {
        // Select link by id and add click event
        $('#link3').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#part-three").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });
  $(function() {
        // Select link by id and add click event
        $('#link4').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#part-four").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });
  $(function() {
        // Select link by id and add click event
        $('#link5').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#part-five").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });

      // this is where im going to use window scroll to animate the nav bar*****************
      $(window).scroll(function(){
        var scrollLo = $(this).scrollTop();
        // turn the background to clear and fix the nav bar
          if(scrollLo >59){
            $(".navBotCon").css({
              "background": "rgba(255,255,255,0.9)",
              "position":"fixed",
              "top":"0px",
              "z-index":"10"
            });
          }
          else {
            $(".navBotCon").css({
              "background": "white",
              "position":"static"
            });
          }
          // turn the second button red
          if(scrollLo >59){
            $("#bBoxTrunRed").css({
              "background": "#DE1B22"
            });
          }
          else {
            $("#bBoxTrunRed").css({
              "background": "#242424"
            });
          }
          // this will fade in the arrow
          if(scrollLo>59){
            $(".hiddenIcon").show().css({
              "top":"3px",
              "opacity":1
            })
            $(".anchorLinkCon").css({
              "left":37
            })
          }
          else {
            $(".hiddenIcon").hide().css({
              "top":"20px",
              "opacity":0
            })
            $(".anchorLinkCon").css({
              "left":0
            })
          }

        // console.log(scrollLo);
      })
      // this is where i'm going to use windowscroll to fade out my titles*******************
      $(window).scroll(function(){
        $(".pioneerTxtHolder").css("opacity", 1 - $(window).scrollTop() / 325);
      });

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
