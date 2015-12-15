(function($) {

	/* 
	    "use strict"; // Start of use strict

	    $('a[href^="#"]').on('click',function (e) {
		    e.preventDefault();

		    var target = this.hash;
		    var $target = $(target);

		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 900, 'swing', function () {
		        window.location.hash = target;
		    });
		});

	*/

	$('#gsearch').submit(function(event) {
        
        $this = $(this);
        
        var qs1 = $('input[type="search"]').val() + ' site:mouvcoaching.com';
        
        var url = $this.attr('action') + '?q=' + encodeURI(qs1);
        window.location.href = url;

        event.preventDefault();


    });



})(jQuery); // End of use strict


