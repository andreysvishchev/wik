$(function () {

  $('select').styler();
  $('.input-style').styler();

  $('.prod-slider__big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.prod-slider__thumb',
    arrows: true,
    swipe: false
  })

  $('.prod-slider__thumb').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.prod-slider__big',
    focusOnSelect: true,
    arrows: false
  })

  $('.prod-slider__big-item').fancybox({
    helpers: {
      title: {
        type: 'float'
      }
    }
  })

  $('.search__btn').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('search__btn--active')

    $($(this).attr('href')).toggleClass('search-form--active')
  })

  $('.production__tab-button').on('click', function (e) {
    e.preventDefault();

    $('.production__tab-button').removeClass('tab__button--active')
    $('.production__content').removeClass('tab__content--active')

    $(this).addClass('tab__button--active')
    $($(this).attr('href')).addClass('tab__content--active')
  })

  $('.realization__tab-button').on('click', function (e) {
    e.preventDefault();

    $('.realization__tab-button').removeClass('tab__button--active')
    $('.realization__content').removeClass('tab__content--active')

    $(this).addClass('tab__button--active')
    $($(this).attr('href')).addClass('tab__content--active')
  })

  $('.prod-tab__button').on('click', function (e) {
    e.preventDefault();

    $('.prod-tab__button').removeClass('tab__button--active')
    $('.prod-tab__content').removeClass('tab__content--active')

    $(this).addClass('tab__button--active')
    $($(this).attr('href')).addClass('tab__content--active')
  })

  $('.nav__btn').on('click', function () {
    $(this).toggleClass('nav__btn--active')
    $('.nav__list').toggleClass('nav__list--active')
  })

  $('#aside-list > li > a').on('click', function () {
    if ($(this).parent().find('ul').length) {
      $(this).parent().find('ul').slideToggle(200);
      return false;
    }
  });

  $('.aside__link-list').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('aside__link-list--active')
  })

  var elem = $(".product__title");

  if (elem.length > 20) {
    console.log('red');
  }
})

$window = $(window);
$window.scroll(function () {
  $scroll_position = $window.scrollTop();
  if ($scroll_position > 500) {
    $('.menu').addClass('menu--fixed')
    // $('#menu-fixed').append($('#menu-top>.user-nav'))
    // $('#menu-top').css({
    //   display: 'none'
    // })
    // $('.lang-top').css({
    //   display: 'none'
    // })
    // $('.user-nav').css({
    //   marginLeft: '20px'
    // })
  } else {

    $('.menu').removeClass('menu--fixed')
    // $('#menu-top').append($('#menu-fixed>.user-nav'))
    // $('#menu-top').css({
    //   display: 'flex'
    // })
    // $('.lang-top').css({
    //   display: 'block'
    // })
    // $('.user-nav').css({
    //   marginLeft: '60px'
    // })
  }
});

var swiper = new Swiper(".main-slider", {
  effect: "fade",
  navigation: {
    nextEl: ".main-slider__btn-next",
    prevEl: ".main-slider__btn-prev",
  },
  pagination: {
    el: ".main-slider__pagintation",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
})

var swiper = new Swiper(".activity__slider", {
  navigation: {
    nextEl: ".activity__slider-next",
    prevEl: ".activity__slider-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
})

var $settingsSlider = {
  responsive: [{
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 9999,
      settings: "unslick"
    }
  ]
};

var $slider = $('.news__inner-slider');
$slickSliderOnLoadAndResize($settingsSlider, $slider, 768);

function $slickSliderOnLoadAndResize(_sliderSettings_, _initSlider_, _resolution_) {
  $(window).on('load resize', function () {
    if ($(window).width() < _resolution_ && !_initSlider_.hasClass('slick-initialized')) {

      _initSlider_.on('setPosition', function () {
        $(this).find('.slick-slide').height('auto');
        var $slickTrack = $(this).find('.slick-track');
        var $slickTrackHeight = $($slickTrack).height();
        $(this).find('.slick-slide').css('height', $slickTrackHeight + 'px');
      });

      _initSlider_.slick(_sliderSettings_);
    }
  });
};

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map('map', {
    center: [55.663268, 38.004261],
    zoom: 13
  });
  var myPlacemark = new ymaps.Placemark(
    [55.663268, 38.004261]
  );
  myMap.geoObjects.add(myPlacemark);
}