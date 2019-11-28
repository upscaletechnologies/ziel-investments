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
  // constructor() {}

  initFunFacts() {
    let a = 0;
    $(window).on('scroll', function() {
      const oTop = $('#counter').offset().top - window.innerHeight;
      if (a === 0 && $(window).scrollTop() > oTop) {
        $('.features_count').each(function() {
          const $this = $(this);
          const countTo = $this.attr('data-count');
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 2000,
              easing: 'swing',
              step() {
                $this.text(Math.floor(this.countNum));
              },
              complete() {
                $this.text(this.countNum);
                // alert('finished');
              },
            }
          );
        });
        a = 1;
      }
    });
  }
  init() {
    this.initFunFacts();
  }
}

// init
$.Axzisz = new Axzisz();
$.Axzisz.Constructor = Axzisz;

export default $.Axzisz;
