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
