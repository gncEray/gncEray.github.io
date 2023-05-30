// Eray Genç
// 19050111005

$(document).ready(function() {
    $("#slider").bxSlider({
	  auto: true,
	  slideWidth: 250,
	  slideMargin: 10,	
	  randomStart: true,
	  moveSlides: 1,  // carousel moves one slide at a time
	  pager: true,  // enabling pager
	  pagerType: 'short',  // displaying a short text representation of each slide
	  pagerCustom: "#pager",  // holdng place of "pager" on html
      pause: 3000,  // setting the time between the automatic transitions to 3 seconds
	  captions: true  // showing title at left bottom
	});
});