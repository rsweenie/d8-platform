jQuery(document).ready(function() {
    // mega menu
    jQuery('#mega_menu_toggle').on('click', function(){
        var megaMenu = jQuery('#mega_menu')[0];
        var headerNav = jQuery('#header_nav')[0];
        if (megaMenu.style.display == 'none' || megaMenu.style.display == '') {
            megaMenu.style.display = 'block';
            headerNav.classList.add('open');
            this.classList.add('open');
        } else {
            megaMenu.style.display = 'none';
            this.classList.remove('open');
            headerNav.classList.remove('open');
        }
    });
    // slideshow
    jQuery('.field--name-field-slide').on("init", function() {
        $(".new-arrows").appendTo(".slider");
        })
        .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            appendArrows: jQuery("<div></div>").addClass("new-arrows").insertAfter(".field--name-field-slide")
    });
    // if mobile, build the slide text below the slide
    if (jQuery('.region-hero-slideshow')[0] && jQuery(window).width() < 768) {
        var slideTextjq = jQuery(".region-hero-slideshow .slick-active .slideText");
        jQuery("<div class='mobile-slide-text'></div>").insertAfter(".region-hero-slideshow");
        jQuery(slideTextjq).appendTo(".mobile-slide-text");
    }
    // find the size of the header logo and assign classes accordingly
    var logo = jQuery('.cu2017_logo');
    if (logo.width() > 200) {
        logo.addClass('schools_and_colleges_logo');
    }
    // updates header opacity if there is a header background image or front page slider 
    // if header image is present, change header opacity to 85% and insert the header image before layout-content
    if (jQuery('#block-headerbackgroundimage')[0] && jQuery(window).width() >= 1251) {
        jQuery('header').addClass('header_opacity');
    }
    // if front page slider is present and window width > 768, change header opcacity to 85%
    if(jQuery(window).width() >= 1251 && jQuery('.main_front')[0]) {
        jQuery('header').addClass('header_opacity');
    }
    // snake case transformation
    function snakeCase($text) {
        return $text.toLowerCase().replace(/[^\w\s]/g, '').replace(/ /g, '_');
    }
    // add id to accordion body
    jQuery('.accordion_title').each(function(i) {
        jQuery(this).next().attr('id', snakeCase(jQuery('.accordion_title').eq(i).text()));
    });
    // standard accordion functionality
    jQuery('.accordion .accordion_title').on('click', function(){
        var title_bar = jQuery(this);
        jQuery('.accordion .accordion_title').each(function() {
            if(this == title_bar[0]) {
                title_bar.toggleClass('active');
                title_bar.hasClass('active') ? title_bar.next().slideDown(100) : title_bar.next().slideUp(100);
            } else {
                jQuery(this).removeClass('active');
                jQuery(this).next().slideUp(100);
            } 
        });
    }); 
    // link to accordion tab
    var index = jQuery(window)[0].location.href.indexOf('#');
    if(index != -1 && jQuery(window)[0].location.href.charAt(index+1) && (jQuery('.accordion') || jQuery('.tabbed_accordion'))) {
        jQuery('.accordion_body').each(function(i) {
            var body = jQuery(this);
            if(jQuery(window)[0].location.href.indexOf(body[0].id) != -1) {
                jQuery('.accordion_body').each(function(){
                    jQuery('.accordion') ? jQuery(this).slideUp(100) : jQuery(this).hide();
                });
                jQuery('.accordion') ? body.slideDown(100) : body.show();
                jQuery(window)[0].scrollTo(0, jQuery('.accordion_body').eq(i).offset().top);
                jQuery('.accordion_title').each(function(i) {
                    snakeCase(jQuery('.accordion_title').eq(i).text()) == body[0].id ? jQuery(this).addClass('active') : jQuery(this).removeClass('active');
                })
                return false;
            }
        });
    } else if (jQuery('.tabbed_accordion')[0]) {
        var title_bar = jQuery('.tabbed_accordion .accordion_title:first');
        title_bar.addClass('active');
        jQuery('.tabbed_accordion .accordion_body').each(function(){
            jQuery(this).hide();
        });
        jQuery('#' + snakeCase(title_bar.text())).show();
    }
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
    // active class & show toggle for tabbed accordions
    jQuery('.tabbed_accordion .accordion_title').on("click", function(){
        var title_bar = jQuery(this);
        jQuery('.tabbed_accordion .accordion_title').each(function() {
            jQuery(this).removeClass('active');
        })
        title_bar.addClass('active');
        jQuery('.tabbed_accordion .accordion_body').each(function() {
            jQuery(this).hide();
        })
        jQuery('#' + snakeCase(title_bar.text())).show();
    });
    // collapse schools and colleges and information for menus at <769px
    if (jQuery(window).width() < 769) {
        // collapse 9 schools and colleges menu and information for menu onload 
        jQuery('.two_col_menu').addClass('hidden');
        // toggle hidden class to show and hide menus onclick
        jQuery('#schools_and_colleges_menu').on("click", function() {
            jQuery('#schools_and_colleges_menu_body').toggleClass('hidden');
            jQuery(this).toggleClass('rotate_arrow');
        });
        jQuery('#block-informationfor-menu').on("click", function() {
            jQuery('#information_for_menu_body').toggleClass('hidden');
            jQuery(this).toggleClass('rotate_arrow');
        });
    }
    // Funnelback
    if(jQuery(window).width() >= 769) {
        jQuery('header input.cu-query').autocompletion({
            program: 'https://search.creighton.edu/s/suggest.json',
            alpha: '0.5',
            show: '10',
            sort: '0',
            length: '3',
            datasets:{
                organic: {
                    name: 'Suggestions',
                    collection: 'creighton-search',
                    profile: '_default',
                    show: '10'
                }
            }
       });
    }
    // updates font size if the width of the email address in the contact box 
    // exceeds contact box width
    if(jQuery('.contact_us')[0]) {
        var contact = jQuery('.contact_us');
        var email = jQuery('.contact_us p a');
        var font_size;
        email[0].style.fontSize == '' ? font_size = 16 : font_size = parseInt(email[0].style.fontSize.slice(0, -2));

        while(contact.width() <= (email.width() + 5)) {
            font_size--;
            email[0].style.fontSize = font_size.toString() + 'px';
        }
    }
    // making menu links open in new window if the links leave the current site
    function newWindow($menuSelector) {
        var currentDomain = document.domain;
        jQuery($menuSelector).each(function() {
            var link = jQuery(this).attr('href');
                if (link.indexOf(":") > -1) {
                    var linkDomain = link.split("/");
                    linkDomain = linkDomain[2]; // set variable to the 3rd element from the array created by split
                }
                else (linkDomain = currentDomain);
                if (linkDomain != currentDomain) {
                    jQuery(this).attr("target","_blank");
                }
            }
        );
    }
    newWindow('ul.menu--transaction-menu li a');
    newWindow('ul.header_nav li a');
    newWindow('ul#schools_and_colleges_menu_body  li a');
    newWindow('ul#information_for_menu_body li a')
});
