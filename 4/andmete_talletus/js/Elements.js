class Elements {

	static createHeading(id, value) {
		const heading = document.createElement('h1');
		heading.setAttribute('id', id);
		heading.textContent = value;
		return heading;
	}

	static createDiv(id) {
		const div = document.createElement('div');
		div.setAttribute('id', id);
		return div;
	}

	static createButton(id, text) {
		const button = document.createElement('input');
		button.setAttribute('id', id);
		button.type = 'button';
		button.value = text;
		return button;
	}

	static createSelect(id) {
		const select = document.createElement('select');
		select.setAttribute('id', id);
		for (let i = 0; i < 10; i++) {
			const option = document.createElement('option');
			option.value += i;
			option.innerHTML = option.value;
			select.appendChild(option);
		}
		return select;
	}

	// 	static createNumberInput(id, value) {
	// 	const numberInput = document.createElement('input');
	// 	numberInput.setAttribute('id', id);
	// 	numberInput.type = 'number';
	// 	numberInput.value = value;
	// 	return numberInput;
	// }

}