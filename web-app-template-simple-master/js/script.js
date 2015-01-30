
var playerData;

$(document).ready(function() {
    console.log("Hello world.")
	getData();
});

var array=[ "string1", "string2"];
var obj={};

function getData() {
	$.getJSON("js/Assignment 1 baseball player_Tsai.json", function(data,error) {
		console.log (data, error);
		playerData=data;
		
		drawStuff();
	});
	
	
function drawStuff() {	
	console.log (playerData);
	$(".chart").html(playerData.name);
	
	$.each(playerData.stats, function (i, item) {
		$(".chart").append ("<p>"+item.AVG+"</p>");
	});
	
}



}