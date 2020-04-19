$(document).ready(function () {
  var owl = $(".owl-carousel");
  if (owl.length) {
    owl.owlCarousel({
      navigation: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      items: 1,
      itemsDesktop: false,
      itemsDesktopSmall: false,
      itemsTablet: false,
      itemsMobile: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      responsiveClass: true,
    });
  }
});
