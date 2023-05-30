// Eray Genç
// 19050111005
$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {
		
		
		var caption = $(this).attr("title");
		$("#caption").fadeOut(1000, function() {  // fade out the caption over a duration of one second
			$("#caption").text(caption);
			$("#caption").fadeIn(1000);  // fade in the new caption over a duration of one second
			
		});

		var imageURL = $(this).attr("href");
		$("#image").fadeOut(1000, function() { // fade out the image over a duration of one second
			$("#image").attr("src", imageURL);
			$("#image").fadeIn(1000);  // fade in the new image over a duration of one second
		});

		evt.preventDefault();
	});

	// move focus to first thumbnail
	$("li:first-child a").focus();
});
