window.onload = () => scroll(0, 1);
$(window).scroll(function() {
  var scrolledFromTop = $(window).scrollTop() + $(window).height();
  console.log(scrolledFromTop);
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
});
