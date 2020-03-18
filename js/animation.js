/* ANIMATION SMOOTH APPARITION */
window.onload = () => scroll(0, 1);
$(window).scroll(function() {
  var scrolledFromTop = $(window).scrollTop() + $(window).height();
  $(".appear").each(function() {
    var distanceFromTop = $(this).offset().top;
    if (scrolledFromTop >= distanceFromTop) {
      var delaiAnim = $(this).data("delai");
      $(this)
        .delay(delaiAnim)
        .animate({
          top: 0,
          opacity: 1
        });
    }
  });
  /* ANIMATION PROGRESS BAR */
  $(".progressbar").each(function() {
    var distanceFromTop = $(this).offset().top;
    if (scrolledFromTop >= distanceFromTop) {
      var delaiAnim = $(this).data("delai");
      $(this)
        .delay(200)
        .animate(
          {
            width: "100%",
            opacity: 1
          },
          800
        );
    }
  });
  $(".progressbarlangue").each(function() {
    var distanceFromTop = $(this).offset().top;
    if (scrolledFromTop >= distanceFromTop) {
      var delaiAnim = $(this).data("delai");
      $(this)
        .delay(200)
        .animate(
          {
            width: "80%",
            opacity: 1
          },
          800
        );
    }
  });
});
