angular.module('personalPro').controller('sxsCtrl', function($scope){

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

})
