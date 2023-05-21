
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

})