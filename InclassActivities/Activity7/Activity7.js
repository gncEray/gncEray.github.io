// Eray Genç
// 19050111005

var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	
	
};

function displayResults()
{
	var average = 0;
	for(var i=0;i<scores.length;i++) {
		average= (average*(i)+scores[i])/(i+1);
	}

	// getting highest values' index
	var highest = 0;
	for(var i=1; i<scores.length; i++) {
		if(scores[i] > scores[highest]) {
			highest = i;
		}
	}
	
	// writing average score and highest score data to "results" part 
	document.getElementById("results").innerHTML="<h2> Results </h2><br/> Average score is "+ average + "<br\> Highest score = "+ names[highest] + " with a score of " + scores[highest] + "<br\> "
	
}

function displayScores() 
{

	// creating table
	var table_content = "<table> <h2> Scores </h2><tr> <th>Name</th> <th>Score</th> </tr>"

	// filling table contents as HTML code
	for(var i=0;i<scores.length;i++) {
		table_content += "<tr> <td>"+names[i]+"</td> <td>"+scores[i]+"</td> </tr>"
	}
	table_content += "</table>"

	// writing table to HTML
	document.getElementById("scores_table").innerHTML = table_content
	
  
}

function addScore() 
{
	// getting data entered by user
	var name = document.getElementById("name").value;
	var score = parseInt(document.getElementById("score").value);

	if(name == "") {  // checking if name is empty or not
		alert("You must enter a name");

	} else if(score < 0 || score > 100 || isNaN(score)) {  // checking if score is a valid value
		alert("You must enter a valid score between 0 and 100");
	}
	else {  // adding name and score to arrays if name and score are okey
		names.push(name);
		scores.push(score);
	}
	
	

}


