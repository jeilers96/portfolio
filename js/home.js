

$(document).ready(function(){
  //add scrollspy
  $('body').scrollspy({target: ".navbar", offset: 180});

  $(".fade-in").fadeTo(2000, 1);

  $("#navbar a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
