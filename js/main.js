$(document).ready(function(){
	$('.team__slider').slick({
		arrows: false,
		//speed: 2000,
		//fade: true,
		//autoplay: true,
		infinite: true,
		dots: true,
		appendDots: $('.team__slider-nav'),
	});
});