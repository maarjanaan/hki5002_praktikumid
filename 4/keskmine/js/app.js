function begin(){
			new Calculator();
}

class Box {
			constructor(input) {
				this.box = document.createElement("input");
				this.box.type = "number";
        		input.appendChild(this.box);
			}
}

class Calculator {
			constructor(id) {
			        this.numbers = [];
			        
			        this.div = document.createElement("div");
			        this.div.setAttribute("id", id);
			        this.divToLayer = document.getElementById("layer");
			        document.body.insertBefore(this.div, this.divToLayer);

			        document.querySelector('#add').addEventListener('click', this.addBox.bind(this));
			        document.querySelector('#average').addEventListener('click', this.calculate.bind(this));
			}

			calculate(){
				console.log(this.numbers);
				this.sum = 0;
				this.numbers.forEach(function(n){
  					this.sum += parseInt(n.div.value);
				});
				this.average = this.sum / this.numbers.length;
				document.getElementById("answer").innerHTML = parseFloat(this.average.value)
			}

			addBox(){
				this.numbers.push(new Box(this.div));
			}
}