class Calculator {

	constructor(layername, number) {
		this.layername = layername;
		this.number = number;

		this.answer = document.querySelector('#main').appendChild(Elements.createDiv(`${layername}_answer`));

		document.querySelector('#main').appendChild(Elements.createButton(`${layername}_decrease`, 'Vähemaks'));
		document.querySelector(`#${layername}_decrease`).addEventListener('click', this.decreaseNumber.bind(this));

		document.querySelector('#main').appendChild(Elements.createSelect(`${layername}_select`));
		this.selection = `${layername}_select`;

		document.querySelector('#main').appendChild(Elements.createButton(`${layername}_increase`, 'Suuremaks'));
		document.querySelector(`#${layername}_increase`).addEventListener('click', this.increaseNumber.bind(this));

		document.querySelector('#main').appendChild(Elements.createButton(`${layername}_zero`, 'Nulli'));
		document.querySelector(`#${layername}_zero`).addEventListener('click', this.numberToZero.bind(this));

		this.showAnswer();
	}

	increaseNumber() {
		let increaseValue = parseInt(document.querySelector(`#${this.selection}`).value);
		this.number += increaseValue;
		this.showAnswer();
	}

	decreaseNumber() {
		let decreaseValue = parseInt(document.querySelector(`#${this.selection}`).value);
		this.number -= decreaseValue;
		this.showAnswer();
	}

	numberToZero() {
        this.number = 0;
        this.showAnswer();
    }

	showAnswer() {
        this.answer.innerHTML = 'Arv: ' + this.number;
    }
    
}