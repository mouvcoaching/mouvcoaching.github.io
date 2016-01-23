(function($) {

	if (window.location.hash) {

		var target = window.location.hash;
		//var $target = $(target);

		var yOffset = $(target).offset().top - 90;

		 $('html, body').stop().animate({
					'scrollTop': yOffset
			}, 900, 'swing', function () {
					window.location.hash = target;
			});


	}

			if (window.location.pathname.length > 1)
			{
				$.each($(".navbar-nav").find("li"), function() {
						$(this).toggleClass('active',
								$(this).find('a').attr('href') == window.location.pathname.replace(/\/$/, ''));
				});
			}

	$('#gsearch').submit(function(event) {

        $this = $(this);

        var qs1 = $('input[type="search"]').val() + ' site:mouvcoaching.com';

        var url = $this.attr('action') + '?q=' + encodeURI(qs1);
        window.location.href = url;

        event.preventDefault();


    });



})(jQuery); // End of use strict
