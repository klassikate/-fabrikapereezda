//Preloader

$(window).on('load', function () {
    var $preloader = $('#preloader'),
        $picture   = $preloader.find('.picture');
    $picture.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});


//Custom JS

$(document).ready(function() {
	//mmenu
      $("#my-menu").mmenu({
         // options
      }, {
         // configuration
         offCanvas: {
            pageNodetype: "section",
            pageSelector: ".content"
         }
      });

   });