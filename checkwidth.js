( function ($) {
  
    function checkWidth(){
        var $window = $(window);
        var windowsize = $window.width();
        if ( windowsize < 1024 ) {
            $("#menu-main-menu .sub-menu").hide();
        } else {
            $("#menu-main-menu .sub-menu").show();
        }
    }
    // execute on load
    checkWidth();
    // bind to listener
    $(window).resize( checkWidth() );
    
} (jQuery) );