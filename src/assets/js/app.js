// ON DOCUMENT READY
$(document).ready(() => {
    $('.js-main-slider') && $('.js-main-slider').slick({
      prevArrow: $('.main-slider-arrows .slick-prev'),
      nextArrow: $('.main-slider-arrows .slick-next'),
    });
    $('.js-navigation-slider') && $('.js-navigation-slider').slick({
      // dots: false,
      infinite: true,
      // arrows: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: $('.navigation-slider-arrows .slick-prev'),
      nextArrow: $('.navigation-slider-arrows .slick-next'),
      responsive: [
        {
          breakpoint: 780,
          settings: {
            arrows: false,
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 630,
          settings: {
            arrows: true,
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 350,
          settings: {
            arrows: true,
            slidesToShow: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
});
