/*
-------------------------------------------------------------------------
* Template Name    : Axzisz - Startup Agency and SasS Business Template * 
* Author           : ThemesBoss                                         *
* Version          : 1.0.0                                              *
* Created          : June 2019                                          * 
* File Description : Main JS file of the template                       *
*------------------------------------------------------------------------
*/

/* eslint-disable prettier/prettier, no-unused-expressions */

import * as $ from 'jquery';

! function($) {
    "use strict";

    var Axzisz = function() {};

        Axzisz.prototype.initStickyAddMenu = function() {
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();

                if (scroll >= 50) {
                    $(".sticky").addClass("stickyadd");
                } else {
                    $(".sticky").removeClass("stickyadd");
                }
            });
        },

        Axzisz.prototype.initMenuSub = function() {
            $('a.first_sub_menu').on('click', function(e) {
                if (window.matchMedia('(max-width: 992px)').matches) {
                    e.preventDefault();
                    $(this).toggleClass("active_menu");
                    $(this).next($('.sec_sub_menu')).slideToggle();
                }
            });
            $('a.nav-link[href^="#"]').on('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        },

        Axzisz.prototype.initMenuActive = function() {
            $(".main_menu a").each(function() {
                if (this.href == window.location.href) {
                    $(this).parent().addClass("active"); // add active to li of the current link
                    $(this).parent().parent().parent().addClass("active"); // add active class to an anchor
                    $(this).parent().parent().parent().parent().parent().addClass("active"); // add active class to an anchor
                }
            });
        },

        Axzisz.prototype.initSmoothLink = function() {
            $('.scroll_down').on('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 50
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        },

        Axzisz.prototype.initSmoothLink = function() {
            $('.scroll_down').on('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 50
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        },

        Axzisz.prototype.initMFPImage = function() {
            $('.img-zoom').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                mainClass: 'mfp-fade',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                }
            });
        },

        Axzisz.prototype.initWorkFilter = function() {
            $(window).on('load', function() {
                var $container = $('.work-filter');
                var $filter = $('#menu-filter');
                $container.isotope({
                    filter: '*',
                    layoutMode: 'masonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });

                $filter.find('a').on("click", function() {
                    var selector = $(this).attr('data-filter');
                    $filter.find('a').removeClass('active');
                    $(this).addClass('active');
                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            animationDuration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });
                    return false;
                });
            });

        },

        Axzisz.prototype.initClientSlider = function() {
            $("#owl-demo").owlCarousel({
                autoPlay: 10000,
                items: 2,
                itemsDesktop: [1199, 2],
                itemsDesktopSmall: [979, 2]
            });
        },

        Axzisz.prototype.initBTT = function() {
            $(window).on('scroll', function() {
                if ($(this).scrollTop() > 100) {
                    $('.back_top').fadeIn();
                } else {
                    $('.back_top').fadeOut();
                }
            });
            $('.back_top').on('click', function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 1000);
                return false;
            });
        },

        Axzisz.prototype.initMFPVideoPlay = function() {
            $('.video_presentation_play , .video_home , .video_blog').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        },

        Axzisz.prototype.init = function() {
            this.initStickyAddMenu();
            this.initMenuSub();
            this.initMenuActive();
            this.initSmoothLink();
            this.initMFPImage();
            this.initWorkFilter();
            this.initClientSlider();
            this.initBTT();
            this.initMFPVideoPlay();
        },
        //init
        $.Axzisz = new Axzisz, $.Axzisz.Constructor = Axzisz
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.Axzisz.init();
}(window.jQuery);