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
        jQuery (".new-arrows").appendTo(".slider");
       
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
    jQuery('.field--name-field-slide').on('afterChange', function(event, slick, currentSlide, nextSlide){
        console.log("made it to after change")
        checkWindowSize();
        removeExisting();
    });
    function removeExisting(){
        // find the divs with slideText mobile_slide_tex undreneath front-page classic and remove all except first happening of slideText
    //     var allExistingElements = jQuery(".front-page-classic .slideText.mobile_slide_text")
//    FIRST VERSION
        // var mainElement = jQuery(".front-page-classic")
        // var children = mainElement[0].children
        // jQuery.each( children, function( i ,val ){
        //     console.log(val)
        //     debugger;
        //     if (val.classList.contains("mobile_slide_text") == true){
        //     console.log(children[i].text);
        //     val.remove();
        //     }
        //     else {
        //         console.log( "not found" );
        //     }
        // })
// FIRST VERSION
jQuery(".front-page-classic")[0].children[0].classList.contains("mobile_slide_text")
     var mainElement = jQuery(".front-page-classic")
     var children = mainElement[0].children
     jQuery.each( children, function ( i, val){
         
     })


    }
    checkWindowSize();
    function checkWindowSize(){
    if ( jQuery(window).width() <= 480) {      
        changePosition(); 
    } 
    else {
        console.log("no function needed") 
    }
    }
    function changePosition(){
        var neededText = jQuery(".slick-active .slideText")
        jQuery(neededText).insertAfter(row_1);
        console.log("finished changePosition")
    }
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
