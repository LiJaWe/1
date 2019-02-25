$(document).ready(function() {
    var timer1 = null;
    $('.string').mouseenter(function() {
        timer1 = setTimeout(function() {
            $('.div1').addClass('swing1');
        }, 500)
    })
    $('.string').mouseleave(function() {
        $('.div1').removeClass('swing1');
    })


    var swing = function() {
        setTimeout(function() {
            $('.div1').removeClass('swing1');
        }, 500)
    }
    var play1 = function() {
        setTimeout(function() {
            $('.div21>div').removeClass('play1');
            $('.div21>div').addClass('play2');
        }, 400)
    }

    setInterval(function() {
        $('.div21>div').removeClass('play2');
        $('.div21>div').addClass('play1');
        play1();
    }, 4000)

    var i = 0;
    $('.div1').mousedown(function() {
        if ($('.string').hasClass('swing2')) {
            $('.div1').addClass('swing1');
            $('.string').removeClass('swing2');
            $('.string').addClass('swing3');
            if ($('imgg').show()) {
                $('.imgg').hide();
            }
            if ($('imgg1').show()) {
                $('.imgg1').hide();
            }
            $('.div13').removeClass('div133')
            $('body').removeClass('body2');
            $('.eye').removeClass('eye1');
        } else {
            $('.div1').addClass('swing1');
            $('.string').addClass('swing2');
            $('.string').removeClass('swing3');
            if (i % 2) {
                $('.imgg1').show();
                $('.imgg').hide();
            } else {
                $('.imgg').show();
                $('.imgg1').hide();
            }
            $('.div13').addClass('div133')
            $('body').addClass('body2');
            $('.eye').addClass('eye1');
            i += 1;
        }
        swing();
    })

})