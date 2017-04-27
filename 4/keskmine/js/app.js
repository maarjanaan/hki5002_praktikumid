function begin(){
			new Calculator('tere');
}

class Box {
			constructor(input, layer) {
				this.box = document.createElement("input");
				this.box.type = "number";
				this.box.id = input;
        		layer.appendChild(this.box);
			}
}

class Calculator {
			constructor(id) {
			        this.numbers = [];
			        this.id = id;
			        this.div = document.createElement("div");
			        this.div.setAttribute("id", id);
			        this.divToLayer = document.getElementById("layer");
			        document.body.insertBefore(this.div, this.divToLayer);
			        document.querySelector('#add').addEventListener('click', this.addBox.bind(this));
			        document.querySelector('#average').addEventListener('click', this.calculate.bind(this));
			}

			calculate(){
				let sum = 0;
				this.numbers.forEach(function(n) { 
  					sum += parseInt(n.box.value);
  					console.log(n.box.value);
				});
				const average = parseFloat(sum / this.numbers.length);
				// console.log(average);
				document.getElementById("answer").innerHTML = average.toFixed(2);
			}

			addBox(){
				this.numbers.push(new Box(this.id, this.div));
			}
}