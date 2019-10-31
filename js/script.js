// Scroll back to top

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $('.back-top').fadeIn();
    } else {
      $('.back-top').fadeOut();
    }
  });
});

function scrolltotop() {
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
}


// parallax

// jumbotron
$(window).scroll(function () {
  var naik = $(this).scrollTop();

  $('.jumbotron img').css({
    'transform': 'translate(0px, ' + naik / 3 + '%)'
  });

  $('.jumbotron h1').css({
    'transform': 'translate(0px, ' + naik / 1 + '%)'
  });

  // parallax menu

  if (naik > $('.card-deck').offset().top - 500) {
    $('.card-deck .card').each(function (i) {
      setTimeout(function () {
        $('.card-deck .card').eq(i).addClass('deckmuncul');

      }, 500 * i);
    });

  }

});


// parallax isi menu
$(window).on('load', function () {
  setTimeout(function () {

    $('.menu').addClass('mMuncul');
  }, 1000);
});


// parallax poster