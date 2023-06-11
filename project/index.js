
// I took top wealthiest 100 countries as list for autocompleting
const countries = ["United States", "China", "Japan", "Germany", "India", "United Kingdom", "France", "Italy", "Canada", "South Korea", "Australia", "Russia", "Spain", "Brazil", "Mexico", "Indonesia", "Netherlands", "Saudi Arabia", "Turkey", "Switzerland", "Argentina", "Taiwan", "Sweden", "Poland", "Belgium", "Thailand", "Iran", "Austria", "United Arab Emirates", "Norway", "Nigeria", "South Africa", "Israel", "Ireland", "Hong Kong", "Denmark", "Malaysia", "Singapore", "Philippines", "Colombia", "Chile", "Egypt", "Pakistan", "Finland", "Czech Republic", "Greece", "Portugal", "Vietnam", "Romania", "Peru", "New Zealand", "Iraq", "Algeria", "Kazakhstan", "Qatar", "Hungary", "Kuwait", "Ukraine", "Morocco", "Angola", "Ecuador", "Slovakia", "Puerto Rico", "Cuba", "Sri Lanka", "Ethiopia", "Dominican Republic", "Kenya", "Oman", "Guatemala", "Luxembourg", "Uruguay", "Costa Rica", "Panama", "Bulgaria", "Croatia", "Tanzania", "Lebanon", "Slovenia", "Lithuania", "Serbia", "Ghana", "Azerbaijan", "Uzbekistan", "Democratic Republic of the Congo", "Jordan", "Turkmenistan", "Côte d'Ivoire", "Bolivia", "Cameroon", "Paraguay", "Latvia", "El Salvador", "Honduras", "Belarus", "Uganda", "Tunisia", "Estonia"];


$(document).ready(function() {

    $("#bdate").datepicker();  // adding datepicker to birthday field
    $("#country").autocomplete({  // adding autocomplete to countries field
        source: countries
    });

    
    // fading out all forms at the beginning
    $("#contact").fadeOut(0)
    $("#apply").fadeOut(0)
    $("#req_res").fadeOut(0)
    $("#dialog").fadeOut(0)
    $(".quiz").fadeOut(0)
    


    // opens daily quiz in index.html
    $("#btn_quiz").click(function () {
        $(".quiz").fadeIn()
    });


    // opens contact form in contact.html
    $("#btn_contact").click(function() {
        $("#contact").fadeIn()
        $("#apply").fadeOut()
        $("#req_res").fadeOut()
    })

    // opens apply form in contact.html
    $("#btn_apply").click(function() {
        $("#req_res").fadeIn()
        $("#contact").fadeOut()
        $("#apply").fadeIn()
    })


    // opening pop up dialog when button is clicked
    $(".buy-button").click(function() {
        $("#dialog").dialog({
            width: 500, // setting the width of the dialog
            dialogClass: 'custom-dialog'
          });
    })


    // filters products in shop.html
    $('input[name="filter"]').change(function() {
        var selectedFilter = $('input[name="filter"]:checked').val();
        if(selectedFilter == "art") {
            $(".row_art").fadeIn()
            $(".row_cine").fadeOut()
            $(".row_book").fadeOut()
        }
        else if(selectedFilter == "book") {
            $(".row_art").fadeOut()
            $(".row_cine").fadeOut()
            $(".row_book").fadeIn()
        }
        else if(selectedFilter == "cinema") {
            $(".row_art").fadeOut()
            $(".row_cine").fadeIn()
            $(".row_book").fadeOut()
        }
        else {
            $(".row_art").fadeIn()
            $(".row_cine").fadeIn()
            $(".row_book").fadeIn()
        }
        
    })




    //------------ Sprint 3 and 4  ---------//


    // JSON art.html
    $("#nav_list button").click(function(event) {
        event.preventDefault();
    
        var title = $(this).attr("title");
    
        $.getJSON("json_files/" + title + ".json", function(data) {
            
          $(".art_main").empty();  // clearing the elements from the main element
    
          data.arts.forEach(function(art) {
            var title = $("<h1>").text(art.title);
            var image = $("<img>").attr("src", art.image);
            var artist = $("<h2>").html(art.artist);
            var popular = $("<h2>").html(art.popular);
            var description = $("<p>").text(art.text);
    
            // putting data taken from JSON
            $(".art_main").append(title, image, artist, description);
            });
        });  // end getJSON
    });  // end click



    // XML book.html
    $("#btn_book button").click(function(event) {
        $("#books_main").empty();
        $.get("books.xml", function(data) {
            $(data).find("library").children().each(function() {
              var xmlDoc = $(this);
              var bookTitle = xmlDoc.find("title").text();
              var bookAuthor = xmlDoc.find("author").text();
              var bookGenre = xmlDoc.find("genre").text();
              var bookYear = xmlDoc.find("year").text();
        
              var listItem = $("<li>").html("<h3>" + bookTitle + "</h3>" +
                "<p>" + bookAuthor + "</p>" +
                "<p>" + bookGenre + "</p>" +
                "<p>" + bookYear + "</p>");

              $("#books_main").append(listItem);  // appending taken book items as list item to HTML
        
            });
          });
    });  // end click


    // API cinema.html
    // Taking API from api.themoviedb.org and show data in cinema.html
    $("#btn_cinema button").click(function(event) {
        var apiKey = '154b3dd12fe7f8bd63f51d29378c0460'; // api key I took from website
        var url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey;

        $.getJSON(url, function(data) {
            var movies = data.results;
            var html = '<div id="movies">';

            $.each(movies, function(i, movie) {
                var posterUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
                html += '<div class="movie">';
                html += '<img src="' + posterUrl + '">';
                html += '<h2>' + movie.title + '</h2>';
                html += '<p>IMDb Points: ' + movie.vote_average + '</p>';
                html += '<p>Release Year: ' + movie.release_date.substring(0, 4) + '</p>';  // substring to take only year
                html += '<p>Overview: ' + movie.overview + '</p>';
                html += '</div>';
            });

            html += '</div>';
            $('#movies').append(html);
        });

    });  // end clicks


})