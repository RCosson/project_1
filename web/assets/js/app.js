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
		autoplay: false,
		dots: true,
	});
});