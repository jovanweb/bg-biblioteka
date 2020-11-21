// ON DOCUMENT READY
$(window).on("load", () => {
  $(".js-preloader").fadeOut("slow");
});

$(document).ready(() => {
  $(".js-main-slider") &&
    $(".js-main-slider").slick({
      prevArrow: $(".main-slider-arrows .slick-prev"),
      nextArrow: $(".main-slider-arrows .slick-next"),
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 300,
      infinite: true,
    });

  //back to top icon
  var to_top_icon = $('.js-back-to-top');
  $(window).scroll(function(){
      if ($(this).scrollTop() > 500) {
          to_top_icon.addClass('is-visible');
      } else {
          to_top_icon.removeClass('is-visible');
      }
  });
  to_top_icon.click(function(e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "fast");
      return false;
  });

  $(".js-navigation-slider") &&
    $(".js-navigation-slider").slick({
      // dots: false,
      infinite: true,
      // arrows: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: $(".navigation-slider-arrows .slick-prev"),
      nextArrow: $(".navigation-slider-arrows .slick-next"),
      responsive: [
        {
          breakpoint: 780,
          settings: {
            arrows: false,
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 630,
          settings: {
            arrows: true,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 550,
          settings: {
            arrows: true,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 350,
          settings: {
            arrows: true,
            slidesToShow: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });

  $(".styled-radiobutton").on('click', ()=> {
    console.log('test')
    if($('.js-radio-advanced').is(':checked')) { 
      $('.search__filters').addClass('show-advance-link')
    } else {
      $('.search__filters').removeClass('show-advance-link')
    }
  })
    
  const subNavigationHeight = $(".sub-navigation").height();

  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
    offset: subNavigationHeight,
    speed: 300,
    easing: "easeInOutExpo",
  });

  const navigation = $(".js-nav-main");
  $(".js-navigation-trigger").on("click", function () {
    navigation.stop().toggleClass("is-active");
  });
  
  navigation.on("click", () => {
    navigation.removeClass("is-active");
  });

  if ($("#map").length) {
    var markers = [
      [$("#marker1"), 44.814357, 20.397957],
      [$("#marker2"), 44.80414, 20.461326],
      [$("#marker3"), 44.778598, 20.462889],
      [$("#marker4"), 44.789598, 20.492889],
    ];

    const initializeMap = () => {
      var center = { lat: 44.7978649, lng: 20.4512446 },
        map = new google.maps.Map(document.getElementById("map"), {
          disableDefaultUI: false,
          center: center,
          zoom: 5,
        });

      var Markers = [];

      var iconNormal = {
          url: "assets/images/map/marker.png",
          size: new google.maps.Size(33, 44),
        },
        // iconSelected = 'https://webdesign.danols.com/static/template/images/icons/light/pin_map_icon&48.png',
        bounds = new google.maps.LatLngBounds();
      const setMarkers = (map) => {
        for (var i = 0; i < markers.length; i++) {
          var marker = markers[i],
            infowindow = new google.maps.InfoWindow(),
            myLatLng = new google.maps.LatLng(marker[1], marker[2]),
            eachMarker = new google.maps.Marker({
              record_id: i,
              position: myLatLng,
              map: map,
              animation: google.maps.Animation.DROP,
              icon: iconNormal,
            });
          //var selectedMarker;
          bounds.extend(myLatLng);
          Markers.push(eachMarker);

          // google.maps.event.addListener(eachMarker,'click', function() {
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
          $(".map-places li").on("click", function () {
            const mapItem = $(this).index();
            changeMarker(mapItem);
            var thisLat = markers[mapItem][1],
              thisLon = markers[mapItem][2];
            map.panTo({ lat: thisLat, lng: thisLon });
          });

          function changeMarker(record_id) {
            for (i in Markers) {
              Markers[i].setIcon(iconNormal);
              // Markers[record_id].setIcon(iconSelected);
            }
          }

          google.maps.event.addListener(
            eachMarker,
            "click",
            (function (eachMarker, i) {
              return function () {
                infowindow.setContent(markers[i][0].prop("innerHTML"));
                infowindow.open(map, eachMarker);
              };
            })(eachMarker, i)
          );
        }
      };
      map.fitBounds(bounds);
      setMarkers(map);
    };
    google.maps.event.addDomListener(window, "load", initializeMap);
  }
});
