$(document).ready(function() {
    
  window.onresize = function(e){
    
    if ($(window).width() < 640) {
      $("#front-social i").removeClass('fa-3x');
      $("#front-social i").addClass('fa-2x');
    }  else  {  
      $("#front-social i").removeClass('fa-2x');
      $("#front-social i").addClass('fa-3x');  
    }
  }
   
  
  window.onscroll = function (e) {  
$("#to-top").removeClass("hidden"); 
  if(document.body.scrollTop === 0){
  $("#to-top").addClass("hidden");
  }
} 
  $("body").scrollspy({ target: ".navbar", offset: 50 });
});


$("#myNavbar a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    if (!$(this).hasClass("active")) {
      $(".active").removeClass("active");
      $(this).addClass("active"); 
    }

    var hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

$(".nav a").on("click", function() {
  $(".nav").find(".active").removeClass("active");
  $(this).parent().addClass("active");
});