$(document).ready(function(){
	$(".carousel-top").slick({
		nextArrow: '<img class="next-arrow" src="assets/img/top-carousel/fleche_slide_droite.png">',
  		prevArrow: '<img class="prev-arrow" src="assets/img/top-carousel/fleche_slide_gauche.png">',
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
	});
	$(".top-info-carousel").slick({
		slidesToScroll: 1,
		nextArrow: false,
		prevArrow: false,
		autoplay: false,
		dots: true,
	});
	$('.middle-info-carousel').slick({
 		slidesToShow: 1,
		slidesToScroll: 1,
 		arrows: false,
 		dots: false,
 		speed: 250,
 		asNavFor: '.slider-nav',
	});
	$('.slider-nav').slick({
 		slidesToShow: 5,
 		slidesToScroll: 1,
		asNavFor: '.middle-info-carousel',
 		dots: true,
 		focusOnSelect: true,
	});
});