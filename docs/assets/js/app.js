(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// ON DOCUMENT READY
$(window).on('load', function () {
  $('.js-preloader').fadeOut('slow');
});
$(document).ready(function () {
  $('.js-main-slider') && $('.js-main-slider').slick({
    prevArrow: $('.main-slider-arrows .slick-prev'),
    nextArrow: $('.main-slider-arrows .slick-next'),
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    infinite: true
  });
  $('.js-navigation-slider') && $('.js-navigation-slider').slick({
    // dots: false,
    infinite: true,
    // arrows: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 30000,
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
      breakpoint: 550,
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
  var navigation = $('.js-nav-main');
  $('.js-navigation-trigger').on('click', function () {
    navigation.stop().toggleClass('is-active');
  });
  navigation.on('click', function () {
    navigation.removeClass('is-active');
  });

  if ($('#map').length) {
    var markers = [[$('#marker1'), 44.814357, 20.397957], [$('#marker2'), 44.804140, 20.461326], [$('#marker3'), 44.778598, 20.462889], [$('#marker4'), 44.789598, 20.492889]];

    var initializeMap = function initializeMap() {
      var center = {
        lat: 44.7978649,
        lng: 20.4512446
      },
          map = new google.maps.Map(document.getElementById('map'), {
        disableDefaultUI: false,
        center: center,
        zoom: 5
      });
      var Markers = [];
      var iconNormal = {
        url: 'assets/images/map/marker.png',
        size: new google.maps.Size(33, 44)
      },
          // iconSelected = 'https://webdesign.danols.com/static/template/images/icons/light/pin_map_icon&48.png',
      bounds = new google.maps.LatLngBounds();

      var setMarkers = function setMarkers(map) {
        var _loop = function _loop() {
          marker = markers[i];
          infowindow = new google.maps.InfoWindow();
          myLatLng = new google.maps.LatLng(marker[1], marker[2]);
          eachMarker = new google.maps.Marker({
            record_id: i,
            position: myLatLng,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconNormal
          }); //var selectedMarker;

          bounds.extend(myLatLng);
          Markers.push(eachMarker); // google.maps.event.addListener(eachMarker,'click', function() {
          //   changeIcon(this);
          // });
          // function changeIcon(e){
          //   if (selectedMarker) {
          //     selectedMarker.setIcon(iconNormal);
          //   }
          //   e.setIcon(iconSelected);
          //   selectedMarker = e;
          // }
          // choose from list

          $('.map-places li').on('click', function () {
            var mapItem = $(this).index();
            changeMarker(mapItem);
            var thisLat = markers[mapItem][1],
                thisLon = markers[mapItem][2];
            map.panTo({
              lat: thisLat,
              lng: thisLon
            });
          });

          function changeMarker(record_id) {
            for (i in Markers) {
              Markers[i].setIcon(iconNormal); // Markers[record_id].setIcon(iconSelected);
            }
          }

          google.maps.event.addListener(eachMarker, 'click', function (eachMarker, i) {
            return function () {
              infowindow.setContent(markers[i][0].prop("innerHTML"));
              infowindow.open(map, eachMarker);
            };
          }(eachMarker, i));
        };

        for (var i = 0; i < markers.length; i++) {
          var marker, infowindow, myLatLng, eachMarker;

          _loop();
        }
      };

      map.fitBounds(bounds);
      setMarkers(map);
    };

    google.maps.event.addDomListener(window, 'load', initializeMap);
  }
});

},{}]},{},[1])

//# sourceMappingURL=app.js.map
