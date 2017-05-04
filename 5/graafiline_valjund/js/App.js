window.onload = () => {
	document.querySelector('#main').appendChild(Elements.createHeading('heading', 'Andmete talletamine objektis'));
	new Calculator('layer1', 100);
	new Calculator('layer2', 100);
};