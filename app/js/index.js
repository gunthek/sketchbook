jQuery(document).ready(function() {

      // INITIALIZE FASTCLICK
    FastClick.attach(document.body);


    // REMOVE UNNECESSARY / NONWORKING ELEMENTS ON MOBILE/TOUCH DEVICES
    if (navigator.userAgent.match(/mobile/i)) {
        $('.no-touch').remove();
    }

    // INITIALIZE SKROLLR
    var s = skrollr.init({ smoothScrolling: false });


    //TOP NAV FUNCTIONALITY
    $('.menu-btn').click(function(e){
        e.preventDefault();
        $('#scroll-nav').toggleClass('active');
    });

    $(document).on('keyup', function(e) {
        // esc key closes menu
        if (e.keyCode == 27 ) {
            $('#scroll-nav').removeClass('active');
        }
    });

});
