class Rectangle {
	constructor(x, y, width, height, color) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
		this.context = undefined;
	}

	draw(context) {
		this.context = context;
		this.context.fillStyle = this.color;
		this.context.fillRect(this.x, this.y, this.width, this.height);
		this.context.fill();
	}

	set widthValue(value) {
		this.width = value;
		if(0 > this.width) {
			this.width = 0;
		}
		if(this.width > 400) {
			this.width = 400;
		}
		
	}

}