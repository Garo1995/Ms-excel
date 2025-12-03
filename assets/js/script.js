$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-content').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('.menu-content').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-content').removeClass('transition-menu');
        }
    });
    $('.nav-menu a').on('click', function () {
        $('.menu-content').addClass('menu-width');
        $('body').removeClass('body_fix');
        $('.menu-content').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});





$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu-faq').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }

    let accordion = new Accordion($('#accordion'), false);
});


$('.menu-scroll a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-130;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});




let learningSwiper = new Swiper(".creating-slider", {
    slidesPerView: 4,
    spaceBetween: 25,
    breakpoints: {
        1199: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 25,
        },
        1020: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 25,
            loop: true,

        },
        760: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 25,
            loop: true,
        },
        575: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 15,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        },
        430: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        },
    },
});









