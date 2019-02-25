$(document).ready(function() {
    $('.first-122>ul>li').mouseenter(function() {
        var target = $(this);
        timer1 = setTimeout(function() {
            target.find('ul').slideDown('fast');
        }, 200);
    })
    $('.first-122>ul>li').mouseleave(function() {
        clearTimeout(timer1);
        $(this).find('ul').hide();
    })
    var timer2 = null;

    timer2 = setInterval(play1, 4000);
    var i = 0;
    var a = -1;

    function play1() {
        $('.first-2>ul').children().eq(i).fadeOut('slow');
        $('.first-2>ul').children().eq(i + 1).fadeIn('slow');
        $('.first-22>ul').children().removeClass('on');
        $('.first-22>ul').children().eq(i + 1).addClass('on');
        i += 1;
        if (i == 3) {
            i = -1;
        }
    }
    $('.first-2').mouseenter(function() {
        clearInterval(timer2);
    })
    $('.first-2').mouseleave(function() {
        timer2 = setInterval(play1, 4000);
    })
    $('.first-22>ul>li').mousedown(function() {
        var index = $(this).index() - 1;
        if (a == $(this).index() - 1) {
            return;
        }
        a = $(this).index() - 1;
        $('.first-2>ul').children().fadeOut('slow');
        $('.first-2>ul').children().eq(index + 1).fadeIn('slow');
        $('.first-22>ul').children().removeClass('on');
        $(this).addClass('on');
        i = a;
        play1();
    });

})
window.onload = function() {
    var oDiv1 = document.getElementById('div1');
    var timer = null;
    oDiv1.onclick = function() {
        clearInterval(timer);
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        timer = setInterval(function() {
            var speed = (0 - scrolltop) / 9;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (0 == scrolltop) {
                clearInterval(timer);
            } else {
                scrolltop = scrolltop + speed;
                window.scrollTo(0, scrolltop);
            }
        }, 30)
    }


    var timer1 = null;

    window.onscroll = function() {
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrolltop >= 300) {
            play(oDiv1, 'opacity', 100);
        } else {
            play(oDiv1, 'opacity', 0);
        }
    }


    function play(obj, attr, target) {
        clearInterval(timer1);
        timer1 = setInterval(function() {
            var cur = null;
            if (attr == 'opacity') {
                cur = Math.round(parseFloat(getComputedStyle(obj, null)[attr]) * 100);
            } else {
                cur = parseInt(getComputedStyle(obj, null)[attr]);
            }
            var speed = (target - cur) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (cur == target) {
                clearInterval(timer1);
            } else {
                if (attr == 'opacity') {
                    obj.style[attr] = (cur + speed) / 100;
                } else {
                    obj.style[attr] = cur + speed + 'px';
                }
            }
        }, 30)

    }
}