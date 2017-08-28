(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })

})(jQuery); // End of use strict

$(document).ready(function() {
    
    //More images control
    $("#expand").click(function(){
        $("#more-images").fadeToggle(1300);
        $(this).hide();
        $("#collapse").show();
    });

    $("#collapse").click(function(){
        $("#more-images").fadeToggle(500);
        $(this).hide();
        $("#expand").show();
        $('html, body').animate({
            scrollTop: $(".ecowaterless-title").offset().top - 50
        }, 1000);
    });


     // Initialize ScrollReveal
    window.sr = ScrollReveal();

    // Customizing reveal sets
    sr.reveal('.optigo-image', { 
        origin: "right",
        duration: 1000,
        delay: 0 });

    sr.reveal('.main-ecowaterless-image', { 
        duration: 1000 });


    sr.reveal('.gr-image', { 
            origin: "right",
            duration: 1000 });
    
});