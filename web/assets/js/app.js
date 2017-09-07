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
 		fade: true,
 		asNavFor: '.slider-nav',
	});
	$('.slider-nav').slick({
 		slidesToShow: 5,
 		slidesToScroll: 1,
		asNavFor: '.middle-info-carousel',
 		dots: true,
 		focusOnSelect: true,
	});
	$( ".nav-slide" ).click(function() {
	if ($(".nav-slide1").hasClass("slick-current")) {
		$("#entr").prop("src","assets/img/bottom-carousel/picto_les_entreprises_2.png");
		

	} else if ($(".nav-slide2").hasClass("slick-current")) {
		$("#com").prop("src","assets/img/bottom-carousel/picto_centres_commerciaux_2.png");
		if (!$(".nav-slide2").hasClass("slick-current")) {
			$("#com").prop("src","assets/img/bottom-carousel/picto_centres_commerciaux.png");
		}

	} else if ($(".nav-slide3").hasClass("slick-current")) {
		$("#collec").prop("src","assets/img/bottom-carousel/picto_collectivites_2.png");
		if (!$(".nav-slide3").hasClass("slick-current")) {
			$("#collec").prop("src","assets/img/bottom-carousel/picto_collectivites.png");
		}

	} else if ($(".nav-slide4").hasClass("slick-current")) {
		$("#ecoles").prop("src","assets/img/bottom-carousel/picto_ecoles_2.png");
		if (!$(".nav-slide4").hasClass("slick-current")) {
			$("#ecoles").prop("src","assets/img/bottom-carousel/picto_ecoles.png");
		}

	} else if ($(".nav-slide5").hasClass("slick-current")) {
		$("#parents").prop("src","assets/img/bottom-carousel/picto_parents_2.png");
		if (!$(".nav-slide5").hasClass("slick-current")) {
			$("#parents").prop("src","assets/img/bottom-carousel/picto_parents.png");
		}
	}
	});
});