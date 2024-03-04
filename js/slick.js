$(document).ready(function(){
	$('.slick').slick({
		arrows:false,
		autoplay:true,
		swipe: true,
		mobileFirst:true,
infinite: true,
slidesToShow: 1,
slidesToScroll: 1,
responsive: [
	{
		breakpoint: 576,
		settings: {
			slidesToShow: 2,
		},
	},
	{
		breakpoint: 991,
		settings: {
			slidesToShow: 3,
		},
	},
]
});
  });
