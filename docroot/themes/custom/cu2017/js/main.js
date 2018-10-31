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
    //slider
    jQuery('.field--name-field-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });
    
    jQuery('.slideshow_wrapper').slick({
         appendArrows: jQuery("<div></div>").addClass("new-arrows").insertAfter(".field--name-field-slide")
    });
    
    jQuery('.field--name-field-slide').on('afterChange', function(event, slick, currentSlide, nextSlide){
        
        checkWindowSize();
    });

    // checkWindowSize();
    // function checkWindowSize(){
    // if ( jQuery(window).width() <= 480) {      
    //     removeOldText();
    //     changePosition(); 
    //     jQuery('.slick-active .slideText').appendTo();
    // } 
    // else {
    // }
    // }
    // function changePosition(){
    //     var neededText = jQuery(".slick-active .slideText");
    //     jQuery(neededText).addClass("active-text").insertAfter(row_1);
    // }
    // function removeOldText(){
    //     jQuery('.active-text').detach();
    // }

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
    // TODO: modify to loop through multiple email addresses
    // and also to handle multiple contact boxes?
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
    newWindow('ul#information_for_menu_body li a');
});
