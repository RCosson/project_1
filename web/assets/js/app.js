$(document).ready(function(){

	$(".carousel-top").slick({
		nextArrow: '<img class="next-arrow" src="assets/img/top-carousel/fleche_slide_droite.png">',
  		prevArrow: '<img class="prev-arrow" src="assets/img/top-carousel/fleche_slide_gauche.png">',
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		placeholders: false,
	});

	var $carousel1 = $(".top-info-carousel").slick({
		slidesToScroll: 1,
		nextArrow: false,
		prevArrow: false,
		autoplay: false,
		speed: 275,
		dots: false,
		asNavFor: '.slider-nav-top',
		responsive: [
    {
      breakpoint: 736,
      settings: {
        draggable: false,
		fade: true,
		swipe: false,
		touchMove: false,
      }
    }
  ]
	});
	var select1 = $("#select1");
	$("#select1").change(function(){
		goTo = select1.prop("selectedIndex");
		console.log( goTo );
		$carousel1.slick( "goTo", goTo );
	});

	$('.slider-nav-top').slick({
 		slidesToShow: 5,
 		slidesToScroll: 1,
		asNavFor: '.top-info-carousel',
 		focusOnSelect: true,
	});

	var $carousel2 = $('.middle-info-carousel').slick({
 		slidesToShow: 1,
		slidesToScroll: 1,
 		arrows: false,
 		dots: false,
 		speed: 275,
 		asNavFor: '.slider-nav',
 		responsive: [
    {
      breakpoint: 736,
      settings: {
        draggable: false,
		fade: true,
		swipe: false,
		touchMove: false,
      }
    }
  ]
	});
	var select2 = $("#select2");
	$("#select2").change(function(){
		goTo = select2.prop("selectedIndex");
		console.log( goTo );
		$carousel2.slick( "goTo", goTo );
	});

	$('.slider-nav').slick({
 		slidesToShow: 5,
 		slidesToScroll: 1,
		asNavFor: '.middle-info-carousel',
 		focusOnSelect: true,
	});
	$('.dropdown-resp-button').click(function(){
		$('.dropdown-resp').slideToggle('slow', function(){

		});
		$('.dropdown-resp').toggleClass('none');
	});
	$('.options').click(function(){
		$('.dropdown-resp').slideToggle('slow', function(){

		});
		$('.dropdown-resp').toggleClass('none');
	});
});