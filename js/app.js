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

/* ANIMATION SCROLL BAR */

$(window).scroll(function() {
  var scrolledFromTop = $(window).scrollTop() + $(window).height();
  $(".progressbar").each(function() {
    var distanceFromTop = $(this).offset().top;
    if (scrolledFromTop >= distanceFromTop) {
      $(this).addClass("anim");
    }
  });
  $(".progressbarlangue").each(function() {
    var distanceFromTop = $(this).offset().top;
    if (scrolledFromTop >= distanceFromTop) {
      $(this).addClass("anim");
    }
  });
});
