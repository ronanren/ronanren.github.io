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

var charElem = document.querySelectorAll(".progressbar"),
  i;

var charElemj = document.querySelectorAll(".progressbarlangue"),
  j;
var itab = new Array();
var jtab = new Array();

itab.fill(false, 0, i);
jtab.fill(false, 0, j);
window.onscroll = function() {
  for (i = 0; i < charElem.length; ++i) {
    if (isElementInViewport(charElem[i]) && !itab[i]) {
      charElem[i].className += " anim";
      itab[i] = true;
    }
  }
  for (j = 0; j < charElemj.length; ++j) {
    if (isElementInViewport(charElemj[j]) && !jtab[j]) {
      charElemj[j].className += " anim";
      jtab[j] = true;
    }
  }
};

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight + 20 || document.documentElement.clientHeight + 20) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
