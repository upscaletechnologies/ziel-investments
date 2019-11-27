/*
-------------------------------------------------------------------------
* Template Name    : Axzisz - Startup Agency and SasS Business Template * 
* Author           : ThemesBoss                                         *
* Version          : 1.0.0                                              *
* Created          : June 2019                                          * 
* File Description : Main JS file of the template                       *
*------------------------------------------------------------------------
*/

! function($) {
    "use strict";

    var Axzisz = function() {};

        Axzisz.prototype.initFunFacts = function() {
            var a = 0;
            $(window).on('scroll', function() {
                var oTop = $('#counter').offset().top - window.innerHeight;
                if (a == 0 && $(window).scrollTop() > oTop) {
                    $('.features_count').each(function() {
                        var $this = $(this),
                            countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                                //alert('finished');
                            }

                        });
                    });
                    a = 1;
                }
            });
        },

        Axzisz.prototype.init = function() {
            this.initFunFacts();
        },
        //init
        $.Axzisz = new Axzisz, $.Axzisz.Constructor = Axzisz
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.Axzisz.init();
}(window.jQuery);