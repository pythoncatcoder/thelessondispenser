document.addEventListener('contextmenu', event => event.preventDefault());

var slide = 1;

// Next/previous controls
function incrementSlides(n) {
    showSlides(slide += n);
}

// Thumbnail image controls
function setSlide(n) {
    showSlides(slide = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slide = 1 }
    if (n < 1) { slide = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide - 1].style.display = "block";
}


function closeFullscreen() {
    console.log("starting");
    if (document.exitFullscreen) {
        console.log("plain");
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
        console.log("moz");
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        console.log("webkit");
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
        console.log("ms");
        document.msExitFullscreen();
    }
}
/*function showSlides(n) {
  var i
}*/

/*$(function() {
  $('').addClass('hidden').hide();
  $('#button').click(function() {
      if ($('#divvy').hasClass('hidden')) {
          $('#divvy').removeClass('hidden').fadeIn(1000);
      }
      else {
          $('#divvy').addClass('hidden').fadeOut(1000);
      }
  });
});*/