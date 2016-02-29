$(document).ready(function(){

	initScrollTop();
	initBannerSlider();
	
	function initScrollTop(){
		//Check to see if the window is top if not then display button
		$(window).scroll(function(){
			if ($(this).scrollTop() > 200) {
				$('.scrollToTop').fadeIn();
			} else {
				$('.scrollToTop').fadeOut();
			}
		});
		
		//Click event to scroll to top
		$('.scrollToTop').click(function(){
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});
	}

	function initBannerSlider(){
		//banner swiper effect
		var bannerSwiper = new Swiper ('.banner',{loop:true,autoplay:2000});	

		
		var prodListSwiper = new Swiper ('.prod_list',{
		 	loop:true,
		 	nextButton: '.left_arrow',
    		prevButton: '.right_arrow',
    		noSwiping:true,
		});	

		//prodListSwiper.detachEvents();
	}
	
});