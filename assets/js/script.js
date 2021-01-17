
$('.nav_menu ul li').on('click', function() {
    $(this).addClass('active')
        .siblings().removeClass('active');
})
$('.burger-menu_nav ul li').on('click', function() {
    $(this).addClass('active')
        .siblings().removeClass('active');
})
$('.footer-top .nav_menu ul li').on('click', function() {
    $(this).addClass('active')
        .siblings().removeClass('active');
})
$(document).ready(function(){
    $(".gallery-slider").owlCarousel({
        items: 4,
        loop:true,
        nav:true,
        navText:true,
        margin:36,
        responsive: {
            0:{
                items: 1,
                autowidth:true,
                stagePadding:50,
                margin:20,
            },
            480:{
                items:2
            },
            767:{
                items:2
            },
            991:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
});
jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});
var element = document.getElementById('number_mask');
var maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
}
var mask = new IMask(element, maskOptions);

$('.image-popup-zoom').magnificPopup({
    type: 'image',
    zoom: {
        enabled: true,
        duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
    }
});
function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger-menu_button");
    let links = menu.find("burger-menu_link");
    let overlay = menu.find("burger-menu_overlay");
    button.on("click",(e) => {
        e.preventDefault();
        toogleMenu();
    });
    links.on("click", () => toogleMenu());
    overlay.on("click", () => toogleMenu());
    function toogleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css("overflow","hidden");
        }else  {
            $("body").css("overflow","visible")
        }
    }
}
burgerMenu('.burger-menu');

$('.burger-menu_link').on('click',function () {
    $('.burger-menu').removeClass('burger-menu_active')
    $('.burger-menu_nav').removeClass('burger-menu_active')

});
$(window).resize(function() {
    if ( $(window).width() < 991 ) {
        const accordions = document.querySelectorAll(".accordion-wrapper");
        for (const accordion of accordions) {
            const panels = accordion.querySelectorAll(".accordion");
            for (const panel of panels) {
                const head = panel.querySelector(".accordion-header");
                head.addEventListener('click', () => {
                    for (const otherPanel of panels) {
                        if (otherPanel !== panel) {
                            otherPanel.classList.remove('accordion-expanded');
                        }
                    }
                    panel.classList.toggle('accordion-expanded');
                });
            }
        }
    }

});
$(window).resize(function() {
    if ( $(window).width() < 991 ) {
        $(document).ready(function(){
            $(".nav-slider").owlCarousel({
                items: 1,
                loop:true,
                nav:false,
                dots:false,
                margin:0,
                responsive: {
                    0:{
                        items: 1,
                        margin:20,
                    },
                    480:{
                        items:2
                    },
                    767:{
                        items:1
                    },
                }
            });
        });
    }

});

