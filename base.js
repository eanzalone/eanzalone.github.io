console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	    $(".diagonal-bg svg line").attr("stroke-width",  ((30 + scroll/20)  + "%"));
	    //30 is the starting width
	    //alter the amount of growth by changing scroll/x
	});
	$(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 475) {
      $('#nav_bar').addClass('navbar-fixed');
      $('navbar-fixed').animate({backgroundColor: "#CD3333"}, "slow");
    }
    if ($(window).scrollTop() < 476) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });

  // fade in background color when add class .navbar-fixed


});