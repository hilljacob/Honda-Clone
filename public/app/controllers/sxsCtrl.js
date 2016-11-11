angular.module('personalPro').controller('sxsCtrl', function($scope){

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

})
