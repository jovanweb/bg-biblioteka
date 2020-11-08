(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// ON DOCUMENT READY
$(document).ready(function () {
  $('.js-main-slider') && $('.js-main-slider').slick({
    prevArrow: $('.main-slider-arrows .slick-prev'),
    nextArrow: $('.main-slider-arrows .slick-next')
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
    responsive: [{
      breakpoint: 780,
      settings: {
        arrows: false,
        slidesToShow: 4
      }
    }, {
      breakpoint: 630,
      settings: {
        arrows: true,
        slidesToShow: 3
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: true,
        slidesToShow: 2
      }
    }, {
      breakpoint: 350,
      settings: {
        arrows: true,
        slidesToShow: 1
      }
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
});

},{}]},{},[1])

//# sourceMappingURL=app.js.map
