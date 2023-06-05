// Eray Genç
// 19050111005

$(document).ready(function() {


	$("#nav_list a").click(function(event) {
        event.preventDefault();

    
        var title = $(this).attr("title");
    
        $.getJSON("json_files/" + title + ".json", function(data) {
            
          $("main").empty();
    
          data.speakers.forEach(function(speaker) {
            var titleElement = $("<h1>").text(speaker.title);
            var imageElement = $("<img>").attr("src", speaker.image);
            var monthElement = $("<h2>").html(speaker.month + "<br>" + speaker.speaker);
            var descriptionElement = $("<p>").text(speaker.text);
    
            $("main").append(titleElement, imageElement, monthElement, descriptionElement);
    

            });
          
        });  // end getJSON
    });  // end click
});  // end ready