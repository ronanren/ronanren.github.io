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

/* ANIMATION TEXTE H1 */
/*
$(window).ready(() => {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  new Typewriter("#typewriter", {
    delay: 35,
    deleteSpeed: 12,
    loop: true,
    stringSplitter,
  })
    .pauseFor(400)
    .typeString("je suis Ronan Renoux. 👋")
    .pauseFor(1200)
    .deleteChars(23)
    .typeString("Étudiant en alternance. 🎓")
    .pauseFor(1200)
    .deleteChars(25)
    .typeString("bonne visite 😉")
    .pauseFor(6000)
    .start();
}); */
