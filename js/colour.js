$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() < 25) {
          $("#nav").removeClass("topColor")
       }
       if ($(this).scrollTop() > 25) {
          $("#nav").addClass("topColor")
       }
    });
 });