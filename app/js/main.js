$(function () {

$('.blog__items').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  var mixer1 = mixitup('.product-content', {
selectors: {
  control: '.filter-1',
}
  });

  var mixer2 = mixitup('.new-design__content', {
selectors: {
  control: '.filter-2',
}
  });


});
