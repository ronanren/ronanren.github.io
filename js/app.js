/* PROGRESS BAR */
var bars = document.getElementsByClassName("bar");

for (i = 0; i < bars.length; i++) {
  bars[i].style.width = bars[i].textContent + "%";
  bars[i].textContent = "";
}

/* BOUTON BACK TO TOP */

$(document).ready(function() {
  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function() {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on("scroll", function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function(event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
});

/* REMOVE MENU ON CLICK ON SECTION */
function removeMenu() {
  $(".checkbox").click();
}

/* AGE */
age = Math.abs(new Date(Date.now() - new Date(2001, 6, 8).getTime()).getUTCFullYear() - 1970);
if (window.location.pathname === '/'){
  $('.age').append("<span>⌚ Age</span>" + age + " years old");
} else {
  $('.age').append("<span>⌚ Age</span>" + age + " ans");
}