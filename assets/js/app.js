/*
-------------------------------------------------------------------------
* Template Name    : Axzisz - Startup Agency and SasS Business Template * 
* Author           : ThemesBoss                                         *
* Version          : 1.0.0                                              *
* Created          : June 2019                                          * 
* File Description : Main JS file of the template                       *
*------------------------------------------------------------------------
*/

// function($) {
'use strict';

import * as $ from 'jquery';

class Axzisz {
  // constructor() {}

  // TODO: Make the menu buttons to hide on click
  basicFunctions() {
    // $(document).on(
    //   'click',
    //   '.navbar-nav>li>a, .navbar-brand, .dropdown-menu>a',
    //   function(e) {
    //     if (
    //       $(e.target).is('a') &&
    //       $(e.target).attr('class') !== 'nav-link dropdown-toggle'
    //     ) {
    //       $('.navbar-collapse').collapse('hide');
    //     }
    //   }
    // );
    // };
    // $('.navbar-nav>li>a').on('click', function() {
    //   $('.navbar-collapse').collapse('hide');
    // });
  }

  initStickyAddMenu() {
    $(window).on('scroll', function() {
      const scroll = $(window).scrollTop();
      if (scroll >= 50) {
        $('.sticky').addClass('stickyadd');
      } else {
        $('.sticky').removeClass('stickyadd');
      }
    });
  }
  initMenuSub() {
    $('a.first_sub_menu').on('click', function(e) {
      if (window.matchMedia('(max-width: 992px)').matches) {
        e.preventDefault();
        $(this).toggleClass('active_menu');
        $(this)
          .next($('.sec_sub_menu'))
          .slideToggle();
      }
    });
    $('a.nav-link[href^="#"]').on('click', function(event) {
      const $anchor = $(this);
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top,
          },
          1500,
          'easeInOutExpo'
        );
      event.preventDefault();
    });
  }
  initMenuActive() {
    $('.main_menu a').each(function() {
      if (this.href === window.location.href) {
        $(this)
          .parent()
          .addClass('active'); // add active to li of the current link
        $(this)
          .parent()
          .parent()
          .parent()
          .addClass('active'); // add active class to an anchor
        $(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass('active'); // add active class to an anchor
      }
    });
  }
  initSmoothLink() {
    $('.scroll_down').on('click', function(event) {
      const $anchor = $(this);
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top - 50,
          },
          1500,
          'easeInOutExpo'
        );
      event.preventDefault();
    });
  }
  initMFPImage() {
    $('.img-zoom').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-fade',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
    });
  }
  initWorkFilter() {
    $(window).on('load', function() {
      const $container = $('.work-filter');
      const $filter = $('#menu-filter');
      $container.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
          duration: 750,
          easing: 'linear',
        },
      });
      $filter.find('a').on('click', function() {
        const selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
          filter: selector,
          animationOptions: {
            animationDuration: 750,
            easing: 'linear',
            queue: false,
          },
        });
        return false;
      });
    });
  }
  // moved to owlCarousel file`
  // initClientSlider() {
  //   $('#owl-demo').owlCarousel({
  //     autoPlay: 10000,
  //     items: 2,
  //     itemsDesktop: [1199, 2],
  //     itemsDesktopSmall: [979, 2],
  //   });
  // }
  initBTT() {
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 100) {
        $('.back_top').fadeIn();
      } else {
        $('.back_top').fadeOut();
      }
    });
    $('.back_top').on('click', function() {
      $('html, body').animate(
        {
          scrollTop: 0,
        },
        1000
      );
      return false;
    });
  }
  initMFPVideoPlay() {
    $('.video_presentation_play , .video_home , .video_blog').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  }
  init() {
    this.basicFunctions();
    // this.initStickyAddMenu();
    this.initMenuSub();
    this.initMenuActive();
    this.initSmoothLink();
    // this.initMFPImage();
    // this.initWorkFilter();
    // this.initClientSlider();
    this.initBTT();
    // this.initMFPVideoPlay();
  }
}

// init
$.Axzisz = new Axzisz();
$.Axzisz.Constructor = Axzisz;

export default $.Axzisz;
