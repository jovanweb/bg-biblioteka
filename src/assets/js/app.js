  
$(window).on("load", () => {
  $(".js-preloader").fadeOut("slow");
});

  
$(document).ready(() => {
  const header = $('.header-main');
  $(".js-main-slider") &&
  $(".js-main-slider").slick({
    prevArrow: $(".main-slider-arrows .slick-prev"),
    nextArrow: $(".main-slider-arrows .slick-next"),
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    pauseOnHover:false,
    fade: true,
    infinite: true,
  });
  const homeSlider = $('.home-slider');
  const calculateMainSliderSize = () => {
    const header_height = header.outerHeight();
    homeSlider.css('height', 'calc(100vh - ' + header_height + 'px)')
  }

  calculateMainSliderSize()

  //back to top icon
  var to_top_icon = $('.js-back-to-top');
  $(window).scroll(function(){
      if ($(this).scrollTop() > 500) {
          to_top_icon.addClass('is-visible');
      } else {
          to_top_icon.removeClass('is-visible');
      }
  });

  var rtime;
  var timeout = false;
  var delta = 300;
  $(window).on('resize', function() {
    
    if($('.home-slider').length) {
      rtime = new Date();
      if (timeout === false) {
          timeout = true;
          setTimeout(resizeend, delta);
      }

      function resizeend() {
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;
            calculateMainSliderSize()
        }               
      }
    }
  });

  to_top_icon.on('click', function(e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "fast");
      return false;
  });

  $('.js-read-more').on('click', function(e){
    e.preventDefault();
    $(this).stop().prev('.hidden-content').slideToggle();
    $(this).toggleClass("active");

    if($(this).hasClass("active")) {

      $(this).children("a").find("span").text("Затворите");
      console.log("ima")
    }else {
      console.log("nema")
      $(this).children("a").find("span").text("Прочитај више");

    }
  })

  $('.js-read-more-table').on('click', function(e){
    e.preventDefault();
    $(this).stop().toggleClass('read-less').parent('td').parent('tr').next('tr.hidden-content').toggle();
  })
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

  $(".styled-radiobutton").on('click', function() {
    if($('.js-radio-advanced').is(':checked')) { 
      $('.search__filters').addClass('show-advance-link')
    } else {
      $('.search__filters').removeClass('show-advance-link')
    }
  })
    
  const subNavigationHeight = $(".sub-navigation").height();

  $('.sub-navigation a[href*="#"').smoothScroll({
    offset: -subNavigationHeight + 1,
    speed: 500,
    easing: "easeInOutExpo",
  });

  const navigation = $(".js-nav-main");
  $(".js-navigation-trigger").on("click", function () {
    navigation.stop().toggleClass("is-active");
  });
  
  navigation.on("click", () => {
    navigation.removeClass("is-active");
  });

  let masonry_index = 0;

  $('.masonry-grid__item').on('click', function() {
    masonry_index = $(this).index();
  })

  //maginfic popup
  $('.js-openpopup').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in',
    callbacks: {
      open: function() {
        if ( $('.js-popup-slider').length ) {
          // resources slick carousel
            setTimeout(() => {
              $('.js-popup-slider').slick(
                {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: $(".main-slider-arrows .slick-prev"),
                nextArrow: $(".main-slider-arrows .slick-next"),
              }).slick('slickGoTo', masonry_index);
            }, 0);
        };
      },
      close: function() {
        if ( $('.js-popup-slider').length ) {
          $('.js-popup-slider').slick('unslick');
        }
      }
    }
  });
    
  if ($("#map").length) {
    var markers = [
      [$("#marker1"), 44.82023507525302, 20.453583269618516],
      [$("#marker2"), 44.82259418823125, 20.455825596388227],
      [$("#marker3"), 44.80888570942217, 20.404171050601455],
      [$("#marker4"), 44.820569591017865, 20.46321036497864],
      [$("#marker5"), 44.816726335429586, 20.463371297511575],
      [$("#marker6"), 44.8247626331152, 20.460217019686034],
      [$("#marker7"), 44.577570517762965, 20.4172405831044],
      [$("#marker8"), 44.77796483059163, 20.47623833177993],
      [$("#marker9"), 44.79788144762473, 20.4673905407817],
      [$("#marker10"), 44.67151028413334, 20.71919831194273],
      [$("#marker11"), 44.795843787942616, 20.497911640781776],
      [$("#marker12"), 44.84412844135959, 20.414673184963792],
      [$("#marker13"), 44.4423672969676, 20.69181724077387],
      [$("#marker14"), 44.80250335568269, 20.378651811945605],
      [$("#marker15"), 44.74717825471872, 20.451138027289282],
      [$("#marker16"), 44.79954190262542, 20.46111508310946],
      [$("#marker17"), 44.519893422806724, 20.575455456120366],
      [$("#marker18"), 44.72893970216426, 20.31889076961647],

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
            $(this).addClass('is-active').siblings().removeClass('is-active');
            changeMarker(mapItem);
            var thisLat = markers[mapItem][1],
              thisLon = markers[mapItem][2];
            map.panTo({ lat: thisLat, lng: thisLon });
            google.maps.event.trigger(Markers[mapItem], 'click');
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
                $('.map-places li:eq(' + i + ')').addClass('is-active').siblings().removeClass('is-active')
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
  if ($(".masonry-grid").length) {
    $(".masonry-grid").imagesLoaded(function() {
      $(".masonry-grid").masonry({
        itemSelector: ".masonry-grid__item"
      });
    });
  }
});
