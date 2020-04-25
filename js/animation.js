/* ANIMATION SMOOTH APPARITION */
window.onload = function () {
  window.scrollTo(0, 1);
};

$(window).scroll(function () {
  var scrolledFromTop = $(window).scrollTop() + $(window).height();
  $(".appear").each(function () {
    var distanceFromTop = $(this).offset().top;
    if (scrolledFromTop >= distanceFromTop) {
      var delaiAnim = $(this).data("delai");
      $(this).delay(delaiAnim).animate({
        opacity: 1,
      });
    }
  });
});

/* ANIMATION SCROLL BAR */
$(window).scroll(function () {
  var scrolledFromTop = $(window).scrollTop() + $(window).height();
  $(".progressbar").each(function () {
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
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  new Typewriter("#typewriter", {
    delay: 48,
    deleteSpeed: 15,
    loop: true,
    stringSplitter,
  })
    .pauseFor(1200)
    .typeString("je suis Ronan Renoux. 👋")
    .pauseFor(1200)
    .deleteChars(15)
    .typeString("étudiant. 🎓")
    .pauseFor(1200)
    .deleteChars(19)
    .typeString("en recherche d'alternance . 👔")
    .pauseFor(1200)
    .deleteAll(18)
    .typeString("futur ingénieur logiciel. 💻")
    .pauseFor(1200)
    .deleteAll(18)
    .typeString("bonne visite 😉")
    .pauseFor(6000)
    .start();
});
