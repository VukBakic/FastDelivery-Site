var lastScrollTop = 0;
$(document).ready(function() {

    var stickyNav = function() {
        if ($('.navbar-collapse').hasClass('show')) return;
        var scrollTop = $(window).scrollTop();

        if (scrollTop > 100) {
            $('.navbar').removeClass('navbar-dark');
            $('.navbar').addClass('navbar-light bg-light');
            $('.fa-search').addClass('dark-fa-search');
            $('.pretraga').addClass('pretraga-dark');
            $('.pretraga').addClass('pretraga-dark');
            $('#light-logo').addClass('hidden-logo');
            $('#dark-logo').removeClass('hidden-logo');

        } else {
            $('.navbar').removeClass('navbar-light bg-light');
            $('.navbar').addClass('navbar-dark');
            $('.fa-search').removeClass('dark-fa-search');
            $('.pretraga').removeClass('pretraga-dark');
            $('#light-logo').removeClass('hidden-logo');
            $('#dark-logo').addClass('hidden-logo');

        }
        if (scrollTop > 220) {
            $(".dropdown-putanja").addClass("dropdown-putanja-show");
        } else {
            $(".dropdown-putanja").removeClass("dropdown-putanja-show");
        }
        if (scrollTop > 500) {
            if (scrollTop > lastScrollTop) {
                $(".dropdown-putanja").removeClass("dropdown-putanja-show");
            } else {
                $(".dropdown-putanja").addClass("dropdown-putanja-show");
            }
        }
        lastScrollTop = scrollTop;
    };
    stickyNav();
    $(window).scroll(function() {
        stickyNav();

    });

    $('.navbar-toggler').on('click', function() {
        var scrollTop = $(window).scrollTop();
        if ($('.navbar-collapse').hasClass('show') && (scrollTop < 200)) {
            $('.navbar').addClass('navbar-dark');
            $('.navbar').removeClass('navbar-light bg-light');
            $('.fa-search').removeClass('dark-fa-search');
            $('.pretraga').removeClass('pretraga-dark');
            $('#light-logo').removeClass('hidden-logo');
            $('#dark-logo').addClass('hidden-logo');

        } else {
            $('.navbar').removeClass('navbar-dark');
            $('.navbar').addClass('navbar-light bg-light');
            $('.fa-search').addClass('dark-fa-search');
            $('.pretraga').addClass('pretraga-dark');
            $('#light-logo').addClass('hidden-logo');
            $('#dark-logo').removeClass('hidden-logo');


        }
    })

    $('.dropdown-submenu > a').on("click", function(e) {
        var submenu = $(this);
        $('.dropdown-submenu .dropdown-menu').removeClass('show');
        submenu.next('.dropdown-menu').addClass('show');
        e.stopPropagation();
    });

    $('.dropdown').on("hidden.bs.dropdown", function() {
        // hide any open menus when parent closes
        $('.dropdown-menu.show').removeClass('show');
    });
    /* ----------SCROLL BUTTON -----------*/
    var btn = jQuery('#button');
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 100) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, '300');
    });
    /* ----------!SCROLL BUTTON -----------*/
    $(".overlay, .btn-pink").click(function(e) {
        $(".ripple").remove();
        var posX = $(this).offset().left,
            posY = $(this).offset().top,
            buttonWidth = $(this).width(),
            buttonHeight = $(this).height();
        $(this).prepend("<span class='ripple'></span>");
        if (buttonWidth >= buttonHeight) {
            buttonHeight = buttonWidth;
        } else {
            buttonWidth = buttonHeight;
        }

        var x = e.pageX - posX - buttonWidth / 2;
        var y = e.pageY - posY - buttonHeight / 2;

        $(".ripple").css({
            width: buttonWidth,
            height: buttonHeight,
            top: y + 'px',
            left: x + 'px'
        }).addClass("rippleEffect");
    });


    let storage = JSON.parse(sessionStorage.getItem("dostava"));
    if(storage!=null){
      $('.fa.fa-shopping-cart').addClass("active-cart");
    }
});
