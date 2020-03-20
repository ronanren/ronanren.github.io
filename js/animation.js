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
  $(".progressbar, .progressbarlangue").each(function() {
    var distanceFromTop = $(this).offset().top;
    if (scrolledFromTop >= distanceFromTop - 30) {
      $(this).addClass("anim");
    }
  });
});

/* Animation texte h1 */
$(window).ready(() => {
  new Typewriter("#typewriter", {
    delay: 50,
    deleteSpeed: 20
  })
    .pauseFor(1000)
    .typeString("Bonjour, je suis Ronan Renoux.")
    .pauseFor(1000)
    .deleteChars(13)
    .typeString("étudiant.")
    .pauseFor(1000)
    .deleteChars(9)
    .typeString("développeur.")
    .pauseFor(1000)
    .deleteAll(5)
    .typeString("Bonne visite !")
    .start();
});
