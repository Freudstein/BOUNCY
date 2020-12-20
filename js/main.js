$(document).ready(function(){
	$('.team__slider').slick({
		arrows: false,
		infinite: true,
		dots: true,
		appendDots: $('.team__slider-nav'),
	});

	$('.testimonials__slider').slick({
		arrows: false,
		infinite: true,
		dots: true,
		appendDots: $('.testimonials__slider-nav'),
	});

	$('.blog__slider').slick({
		vertical: true,
		arrows: false,
		infinite: true,
		dots: true,
		appendDots: $('.blog__slider-nav'),
	});
});