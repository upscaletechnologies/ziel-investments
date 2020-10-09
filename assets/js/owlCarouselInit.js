/* eslint-disable */
/*
-------------------------------------------------------------------------
* Template Name    : Axzisz - Startup Agency and SasS Business Template * 
* Author           : ThemesBoss                                         *
* Version          : 1.0.0                                              *
* Created          : June 2019                                          * 
* File Description : Main JS file of the template                       *
*------------------------------------------------------------------------
*/

'use strict';

import * as $ from 'jquery';

class Axzisz {
  initOwlCarousel() {
    if ($('#home-slider').length) {
      $('#home-slider').owlCarousel({
        autoPlay: 10000,
        singleItem: true,
        // items: 1,
        // itemsDesktop: [1199, 1],
        // itemsDesktopSmall: [979, 1],
      });
    }
    if ($('#ziel-fresh-slider').length) {
      $('#ziel-fresh-slider').owlCarousel({
        loop: true,
        items: 3,
        autoPlay: 3000,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
      });
    }
    if ($('#owl-demo').length) {
      $('#owl-demo').owlCarousel({
        autoPlay: 10000,
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 2],
      });
    }
  }
  init() {
    this.initOwlCarousel();
  }
}

// init
$.Axzisz = new Axzisz();
$.Axzisz.Constructor = Axzisz;

export default $.Axzisz;
