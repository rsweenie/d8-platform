jQuery(document).ready(function() {
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
    // show first tabbed accordion body on page load
    jQuery('.tabbed_accordion').each(function(e) {
        jQuery('.tabbed_accordion').eq(e).attr("id", "tabbed_accordion_" + e);
        var selector = "#tabbed_accordion_" + e + " .accordion_title";
        var title_bar = jQuery(selector).first();
        title_bar.addClass('active');
        jQuery('#' + snakeCase(title_bar.text())).show();;
    });
    // active class & show toggle for tabbed accordions
    jQuery('.tabbed_accordion .accordion_title').on("click", function(){
        var title_bar = jQuery(this);
        console.log(title_bar.parents('.tabbed_accordion'));
        var tabbed_accordion = title_bar.parents('.tabbed_accordion');
        tabbed_accordion.find('.accordion_title').removeClass('active');
        title_bar.addClass('active');
        tabbed_accordion.find('.accordion_body').hide();
        jQuery('#' + snakeCase(title_bar.text())).show();
    });
});