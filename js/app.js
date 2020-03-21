/* PROGRESS BAR */
var bars = document.getElementsByClassName("bar");

for (i = 0; i < bars.length; i++) {
  bars[i].style.width = bars[i].textContent + "%";
  bars[i].textContent = "";
}

/* DARK MODE */
const toggleSwitch = document.querySelector('.checkbox input[type="checkbox"]');
let currentTheme = "light";

try {
  currentTheme = localStorage.getItem("theme");
} catch (e) {
  currentTheme = "light";
}

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    try {
      localStorage.setItem("theme", "dark");
    } catch (e) {
      console.log("Localstorage impossible");
    }
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    try {
      localStorage.setItem("theme", "light");
    } catch (e) {
      console.log("Localstorage impossible");
    }
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

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
    if (screen.width < 600) {
      var progress = pathLength - (scroll * pathLength) / height - 5;
    } else {
      var progress = pathLength - (scroll * pathLength) / height;
    }

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
