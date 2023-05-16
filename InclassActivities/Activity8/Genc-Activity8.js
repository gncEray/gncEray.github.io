// Eray Genç 
// 19050111005 

// defining array for autocomplete language names
var languages = ["HTML", "CSS", "JavaScript", "ActionScript", "AppleScript", "Asp",  "Lisp", "Perl", "PHP", "Python", "C", "Java"];


$(document).ready(function() {

    $("#birthday").datepicker();  // adding datepicker to birthday field

    $("#languages").autocomplete({  // adding autocomplete to languages field
        source: languages
    });

})