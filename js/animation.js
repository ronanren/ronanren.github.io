/* ANIMATION SMOOTH APPARITION */
window.onload = function() {
  window.scrollTo(0, 1);
};

$(window).scroll(function() {
  var scrolledFromTop = $(window).scrollTop() + $(window).height();
  $(".appear").each(function() {
    var distanceFromTop = $(this).offset().top;
    if (scrolledFromTop >= distanceFromTop) {
      var delaiAnim = $(this).data("delai");
      $(this)
        .delay(delaiAnim)
        .animate({
          opacity: 1
        });
    }
  });
});

/* ANIMATION SCROLL BAR */
$(window).scroll(function() {
  var scrolledFromTop = $(window).scrollTop() + $(window).height();
  $(".progressbar").each(function() {
    var distanceFromTop = $(this).offset().top;
    if (scrolledFromTop >= distanceFromTop - 20 && screen.width >= 750) {
      $(this).addClass("anim");
    } else if (scrolledFromTop >= distanceFromTop - 140 && screen.width < 750) {
      $(this).addClass("anim");
    }
  });
});

/* ANIMATION TEXTE H1 */

$(window).ready(() => {
  const stringSplitter = string => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };
  new Typewriter("#typewriter", {
    delay: 45,
    deleteSpeed: 15,
    loop: true,
    stringSplitter
  })
    .pauseFor(1000)
    .typeString("Bonjour, je suis Ronan Renoux.")
    .pauseFor(1100)
    .deleteChars(13)
    .typeString("étudiant. 🎓")
    .pauseFor(1100)
    .deleteChars(11)
    .typeString("développeur. 💻")
    .pauseFor(1100)
    .deleteAll(10)
    .typeString("Bonne visite 😉")
    .pauseFor(6000)
    .start();
});
