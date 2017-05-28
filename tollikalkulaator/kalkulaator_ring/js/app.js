function Computer(layername){
	this.begin = function(){
		this.layer = document.getElementById(layername);
		this.layer.innerHTML=
			"Ringi raadius: <input type='text' id='box1' /> "+
			"<input type='button' class='button' value='Arvuta pindala' "+
			"onClick='input.compute();' /> "+
			"<div id='answer'></div>";
		this.box = document.getElementById("box1");
		this.vastusekiht = document.getElementById("answer");
	}
	this.compute = function(){
		this.vastusekiht.innerHTML = "Ringi pindala on: "+parseFloat(Math.PI * Math.pow(parseFloat(this.box.value),2)).toFixed(3);
	}
	this.begin();
}

var input;

function onLoad(){
	input = new Computer("layer1");
}