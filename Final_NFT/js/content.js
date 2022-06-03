$(document).ready(function() {
	(function($){
		layOut();
	})(jQuery);
});

function layOut() {
	(function($){
		// Header Scroll
		$(window).on('scroll', function() {
			var scroll = $(window).scrollTop();
			if (scroll >= 50) {
				$('.header').addClass('fixed');
                $('.header .logo img').attr("src", "./image/logo_after.png");
                $('.header .menu').addClass('fixed');
			} else {
				$('.header').removeClass('fixed');
                $('.header .logo img').attr("src", "./image/logo.png");
                $('.header .menu').removeClass('fixed');
			}
		});
	})(jQuery);
}