$(document).ready(function() {
    // Event Listener for navbar, carousel button and footer button.
    $("#collapsibleNavbar ul li a[href^='#'], .carousel-caption a[href^='#'], #footerTopButton a[href^='#']").on('click', function(e) {
        // prevent default anchor click behavior
        e.preventDefault();
        // store hash
        var hash = this.hash;
        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 1000, function(){
            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });
    });
});
