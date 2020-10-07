$( window ).on('load', function() {
    pageTop.init();
    scrolledIntoView.handleScroll();
});

$(window).scroll(function(){
    scrolledIntoView.handleScroll();
});

// $(window).on('beforeunload', function(){
//     $(window).scrollTop(0);
// });

var pageTop = {
    imagePercentage: 100,
    zoomDirection: 1,
    zoomEvery: 10,
    count: 0,

    init: function() {
        $('.slide1').css('transform', 'translateX(100%)');
        $('.slide2').css('transform', 'translateX(-100%)');
        $('.slide3').css('transform', 'translateX(100%)');

        setTimeout(function() {
            $('#name').css({
                'opacity': .8,
                'transform': 'none',
            });
        }, 800);

        setTimeout(function() {
            $('#my-position').css({
                'opacity': .8,
                'transform': 'translate(-50%, 0%)',
            });

            $('body').css('overflow-y', 'auto');
        }, 1200)

        $('#top-container').on('mousemove', function() {
            if (++pageTop.count % pageTop.zoomEvery === 0) {
                if (pageTop.zoomDirection === 1 && pageTop.imagePercentage === 130) {
                    pageTop.zoomDirection = 0;
                    pageTop.zoomOut();
                } else if (pageTop.zoomDirection === 0 && pageTop.imagePercentage === 100) {
                    pageTop.zoomDirection = 1;
                    pageTop.zoomIn();
                } else if (pageTop.zoomDirection === 1 && pageTop.imagePercentage < 130) {
                    pageTop.zoomIn();
                } else if (pageTop.zoomDirection === 0 && pageTop.imagePercentage > 100) {
                    pageTop.zoomOut();
                }
            }
        });
    },

    zoomIn: function() {
        $('#top-container').css('background-size', ++pageTop.imagePercentage + '%');
    },

    zoomOut: function() {
        $('#top-container').css('background-size', --pageTop.imagePercentage + '%');
    }
}

var scrolledIntoView = {
        simonImageRotate: 90,

        elementScrolled: function(elem, customOffset) {
            var elementTop = $(elem).offset().top + customOffset;
            var elementBottom = elementTop + $(elem).outerHeight() - customOffset;

            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            return elementBottom > viewportTop && elementTop < viewportBottom;
        },

        handleScroll: function() {
            if(scrolledIntoView.elementScrolled('#about', 0)) {
                $('#about').css({
                    'opacity': '1',
                    'transform': 'none'
                });
            } else {
                $('#about').css({
                    'opacity': '0',
                    'transform': 'translateY(130px)'
                });
            }

            // if (scrolledIntoView.elementScrolled('#simon-image', 300)) {
            //     // get current
            //     var newVal = Number(scrolledIntoView.simonImageRotate - 1);
            //     scrolledIntoView.simonImageRotate = newVal;
            //
            //     if (newVal > 0) {
            //         $('#simon-image img').css({
            //             'transition': '0s',
            //             'opacity': 1,
            //             'transform': 'rotateY('+ newVal +'deg) rotateX('+ newVal +'deg)',
            //         });
            //     } else {
            //         $('#simon-image img').css({
            //             'transition': '2s',
            //             'opacity': 1,
            //             'transform': 'rotateX(0deg) rotateY(0deg)'
            //         });
            //     }
            // } else {
            //     scrolledIntoView.simonImageRotate = 90;
            //     $('#simon-image img').css({
            //         'opacity': 0,
            //         'transform': 'rotateY('+ 90 +'deg) rotateX('+ 90 +'deg)',
            //     });
            // }

            if (scrolledIntoView.elementScrolled('#simon-image', 400)) {
                $('#simon-image img').css({
                    'opacity': 1,
                    'transform': 'none',
                });
            } else {
                $('#simon-image img').css({
                    'opacity': '0',
                    'transform': 'translateY(80px)'
                });
            }

            if (scrolledIntoView.elementScrolled('#about-me-copy-1', 300)) {
                $('#about-me-copy-1').css({
                    'opacity': 1,
                    'transform': 'none',
                });
            } else {
                $('#about-me-copy-1').css({
                    'opacity': '0',
                    'transform': 'translateY(80px)'
                });
            }

            if (scrolledIntoView.elementScrolled('#about-me-copy-2', 300)) {
                $('#about-me-copy-2').css({
                    'opacity': 1,
                    'transform': 'none',
                });
            } else {
                $('#about-me-copy-2').css({
                    'opacity': '0',
                    'transform': 'translateY(80px)'
                });
            }

            if (scrolledIntoView.elementScrolled('#about-me-copy-3', 300)) {
                $('#about-me-copy-3').css({
                    'opacity': 1,
                    'transform': 'none',
                });
            } else {
                $('#about-me-copy-3').css({
                    'opacity': '0',
                    'transform': 'translateY(80px)'
                });
            }

            if(scrolledIntoView.elementScrolled('#professional', 300)) {
                $('#professional').css({
                    'opacity': '1',
                    'transform': 'none'
                });
            } else {
                $('#professional').css({
                    'opacity': '0',
                    'transform': 'translateY(130px)'
                });
            }

            if(scrolledIntoView.elementScrolled('#project-1', 150)) {
                $('#project-1').css({
                    'opacity': '1',
                    'transform': 'none'
                });
            } else {
                $('#project-1').css({
                    'opacity': '0',
                    'transform': 'translateY(130px)'
                });
            }

            if(scrolledIntoView.elementScrolled('#project-2', 150)) {
                $('#project-2').css({
                    'opacity': '1',
                    'transform': 'none'
                });
            } else {
                $('#project-2').css({
                    'opacity': '0',
                    'transform': 'translateY(130px)'
                });
            }

            if(scrolledIntoView.elementScrolled('#project-3', 150)) {
                $('#project-3').css({
                    'opacity': '1',
                    'transform': 'none'
                });
            } else {
                $('#project-3').css({
                    'opacity': '0',
                    'transform': 'translateY(130px)'
                });
            }

            if(scrolledIntoView.elementScrolled('#project-4', 150)) {
                $('#project-4').css({
                    'opacity': '1',
                    'transform': 'none'
                });
            } else {
                $('#project-4').css({
                    'opacity': '0',
                    'transform': 'translateY(130px)'
                });
            }

            if(scrolledIntoView.elementScrolled('#project-5', 150)) {
                $('#project-5').css({
                    'opacity': '1',
                    'transform': 'none'
                });
            } else {
                $('#project-5').css({
                    'opacity': '0',
                    'transform': 'translateY(130px)'
                });
            }

            if(scrolledIntoView.elementScrolled('#project-6', 150)) {
                $('#project-6').css({
                    'opacity': '1',
                    'transform': 'none'
                });
            } else {
                $('#project-6').css({
                    'opacity': '0',
                    'transform': 'translateY(130px)'
                });
            }

            if(scrolledIntoView.elementScrolled('#project-7', 150)) {
                $('#project-7').css({
                    'opacity': '1',
                    'transform': 'none'
                });
            } else {
                $('#project-7').css({
                    'opacity': '0',
                    'transform': 'translateY(130px)'
                });
            }
        }
}