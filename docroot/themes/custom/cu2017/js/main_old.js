/*
*
*  This has the header scroll function at the bottom of the file
*
*/

jQuery(document).ready(function() {
    // mega menu
    jQuery("body").on("click", "#mega_menu_toggle", function(){
        var megaMenu = document.getElementById('mega_menu');
        var primaryNav = document.getElementById('header_nav');
        if (megaMenu.style.display == 'none' || megaMenu.style.display == '') {
            megaMenu.style.display = 'block';
            primaryNav.classList.add('open');
            this.classList.add('open');
            jQuery("header").css('position','relative');
        } else {
            megaMenu.style.display = 'none';
            this.classList.remove('open');
            primaryNav.classList.remove('open');
            jQuery("header").css('position','fixed');
        }
    });
    // slideshow
    jQuery('.field--name-field-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });
    /* 
    * updates header opacity and/or top margin based on presence of 
    * header alert, header background image, and 
    * hero/front page slider
    */
    var headerTopBarHeight = jQuery('.header_top_section').height();
    var headerInnerHeight = jQuery('.header_inner_wrapper').height();
    var headerAlertHeight = 0;
    var headerImageHeight = 0;
    var slideshowHeight = 0;
    if(jQuery('.header_alert_wrapper')[0]) {
        headerAlertHeight = jQuery('#header_alert_wrapper').height();
    }
    if(jQuery('#header_image')[0]) {
        headerImageHeight = -(headerTopBarHeight + headerInnerHeight);
    } else if (jQuery('.main_front')[0] && !jQuery('.slideshow_wrapper')[0]) {
        slideshowHeight = -headerInnerHeight;
    }
    var marginHeight = headerTopBarHeight + headerInnerHeight + headerAlertHeight + headerImageHeight + slideshowHeight;
    jQuery('.main').css('margin-top', marginHeight);
    // if header image is present, change header opacity to 85% and insert the header image before layout-content
    if (jQuery('#header_image')[0] && jQuery(window).width() >= 480) {
        jQuery('#header_image').css('margin-top', headerTopBarHeight);
        jQuery('header').addClass('header_opacity');
        jQuery('#header_image').insertBefore('.layout-content');
    } else if (jQuery('#header_image')[0]){
        jQuery('#header_image').insertBefore('.layout-content');
        jQuery('#header_image').css('margin-top', headerTopBarHeight + headerInnerHeight);
    }
    // if header image and header alert are present, push header image down 
    if(jQuery('#header_image')[0] && jQuery('#header_alert_wrapper')[0]) {
        jQuery('#header_image').css('margin-top', (headerTopBarHeight + headerAlertHeight));
    }
    // if header image and slideshow are present, push slider down
    if(jQuery('.main_front')[0] && jQuery('#header_alert_wrapper')[0]) {
        jQuery('.main_front').css('margin-top', (headerTopBarHeight + headerAlertHeight));
    }
    // if front page slider is present and window width > 768, change header opcacity to 85%
    if(jQuery(window).width() >= 1300 && jQuery('.main_front')[0]) {
        jQuery('header').addClass('header_opacity');
    }
    // on resize check window width and adjust top margin and header opacity accordingly
    jQuery(window).on('resize', function() {
        var windowWidth = jQuery(window).width();
        if(windowWidth < 480 && jQuery('#header_image')[0]) {
            jQuery('header').removeClass('header_opacity');
            jQuery('#header_image').css('margin-top', jQuery('.header_top_section').height()+jQuery('.header_inner_wrapper').height());
        } else if(windowWidth >= 480 && jQuery('#header_image')[0]) {
            jQuery('header').removeClass('header_opacity');
            jQuery('#header_image').css('margin-top', jQuery('.header_top_section').height());
        } else if(windowWidth > 768 && jQuery('.main_front')[0]) {
            jQuery('header').removeClass('header_opacity');
            jQuery('#header_image').css('margin-top', jQuery('.header_top_section').height());
        } else if(windowWidth <= 768 && jQuery('.main_front')[0]) {
            jQuery('header').removeClass('header_opacity');
            jQuery('#header_image').css('margin-top', jQuery('.header_top_section').height());
        } else if(windowWidth >= 1300 && jQuery('.main_front')[0]) {
            jQuery('header').addClass('header_opacity');
        }
    });   
    // header alert/sticky header
    if(jQuery('#header_alert_wrapper')[0]) {
        jQuery('.main.container').addClass('sticky_header_alert');
        jQuery('.header_top_section_mega_menu').addClass('sticky_header_alert');
        jQuery('.header_top_section_menu_wrapper').addClass('sticky_header_alert'); 
    } else if(jQuery('.sticky_header_alert')[0]) {
        jQuery('.main.container.sticky_header_alert').removeClass('sticky_header_alert');
        jQuery('.header_top_section_mega_menu.sticky_header_alert').removeClass('sticky_header_alert');
        jQuery('.header_top_section_menu_wrapper').removeClass('sticky_header_alert');
    }   
    // standard accordion
    jQuery('.accordion .accordion_title').on('click', function(){
        var el = jQuery(this);

        if (el.hasClass('active')) {
            el.removeClass('active');
            el.next().slideUp(100);
        } else {
            jQuery('.accordion .accordion_title').removeClass('active');
            jQuery('.accordion .accordion_body').slideUp(100);
            el.addClass('active');
            el.next().slideDown(100);
        }
    });
    // tabbed accordion
    var first = jQuery('.tabbed_accordion .accordion_title:first');
    jQuery(first).addClass('active');
    jQuery(first).next().addClass('show');

    jQuery('.tabbed_accordion .accordion_title').each(function() {
        jQuery(this).next().attr('id', jQuery(this).text().toLowerCase().replace(/[^\w\s]/g, '').replace(/ /g, '_'));
    });
    // side tab accordion
    if(jQuery('.side_tab_wrapper')) {
        jQuery('<div class="row"></div>').appendTo('.side_tab_wrapper');
        jQuery('<div class="col-md-3 no_padding"></div>').appendTo('.side_tab_wrapper .row');
        jQuery('<div class="col-md-9 no_padding"></div>').appendTo('.side_tab_wrapper .row');
        jQuery('<div id="side_tab_title"></div>').appendTo('.side_tab_wrapper .col-md-3');
        jQuery('<div id="side_tab_body"></div>').appendTo('.side_tab_wrapper .col-md-9');

        var title = jQuery('.side_tab_wrapper .accordion_title');
        jQuery(title).appendTo('#side_tab_title');
        var body = jQuery('.side_tab_wrapper .accordion_body');
        jQuery(body).appendTo('#side_tab_body');
    }
    // top tab accordion
    if(jQuery('.top_tab_wrapper')) {
        jQuery('<div class="row title_row" id="title_row"></div>').appendTo('.top_tab_wrapper');
        jQuery('<ul class="list-inline"></ul>').appendTo('#title_row')
        jQuery('<div class="row body_row" id="body_row"></div>').appendTo('.top_tab_wrapper');

        var title = jQuery('.top_tab_wrapper .accordion_title');
        jQuery(title).appendTo('.list-inline');
        var body = jQuery('.top_tab_wrapper .accordion_body');
        jQuery(body).appendTo('#body_row');
    }
    // active class toggle for tabbed accordions
    jQuery('.tabbed_accordion .accordion_title').on("click", function(){
        var el = jQuery(this);
        if (!el.hasClass('active')) {
            jQuery('.tabbed_accordion .accordion_title').removeClass('active');
            jQuery('.tabbed_accordion .accordion_body').removeClass('show');
            el.addClass('active');
            jQuery('#' + el.text().toLowerCase().replace(/[^\w\s]/g, '').replace(/ /g, '_')).addClass('show');
        }
    });

    // jQuery("header").sticky({topSpacing:0});

    // slide header up when scrolling down and vice versa
    var elem = document.querySelector("header");
    console.log(marginHeight + " right before headroom function call");
    var headroom = new Headroom(elem, {
        "offset": marginHeight,
        "tolerance": 10,
        "classes": {
            "initial": "animated",
            "pinned": "slideDown",
            "unpinned": "slideUp",
            "top": "headroom--top",
            "notTop": "headroom--not-top"
    }
    });
    headroom.init(); 
});
