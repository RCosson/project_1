$(document).ready(function(){
	$(".carousel-top").slick({
		nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
  		prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
	});
	$(".top-info-carousel").slick({
		nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
  		prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
	});
});