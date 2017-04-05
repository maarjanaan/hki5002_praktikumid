var kmPrice;


function dayOrNight() {
	var dayNight= document.getElementById("dayNight").value;

	if (dayNight === "Day"){
		document.body.className = "Day";
		kmPrice = 0.5;		
	} else {
		document.body.className = "Night";
	 	kmPrice = 0.7;
	}
	document.getElementById("kmPrice").innerHTML = kmPrice+"€";
}


function calculate() {
	var km = document.getElementById("km").value;
	var answer = parseFloat(2.9 + (kmPrice * km)).toFixed(2);
	document.getElementById("answer").innerHTML = "Sõidu hind: "+answer+"€";
}