angular.module('personalPro').controller('homeCtrl', function($scope, $interval){

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


})
