$(document).ready(function(){
	$(".carousel-top").slick({
		nextArrow: '<img class="next-arrow" src="assets/img/top-carousel/fleche_slide_droite.png">',
  		prevArrow: '<img class="prev-arrow" src="assets/img/top-carousel/fleche_slide_gauche.png">',
		slidesToScroll: 1,
		/*autoplay: true,
		autoplaySpeed: 5000,*/
		dots: true,
		responsive: [
    {
      breakpoint: 736,
      settings: {
        nextArrow: false,
        prevArrow: false,
      }
    }
  ]
	});
	$(".top-info-carousel").slick({
		slidesToScroll: 1,
		nextArrow: false,
		prevArrow: false,
		autoplay: false,
		speed: 275,
		dots: false,
		asNavFor: '.slider-nav-top'
	});
	$('.slider-nav-top').slick({
 		slidesToShow: 5,
 		slidesToScroll: 1,
		asNavFor: '.top-info-carousel',
 		focusOnSelect: true,
	});
	$('.middle-info-carousel').slick({
 		slidesToShow: 1,
		slidesToScroll: 1,
 		arrows: false,
 		dots: false,
 		speed: 275,
 		asNavFor: '.slider-nav',
	});
	$('.slider-nav').slick({
 		slidesToShow: 5,
 		slidesToScroll: 1,
		asNavFor: '.middle-info-carousel',
 		focusOnSelect: true,
	});
});