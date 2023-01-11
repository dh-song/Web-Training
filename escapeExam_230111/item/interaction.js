export default class interaction {
	constructor(x, y, interactionName, visible, width, height) {
		this.x = x || 0;
		this.y = y || 0;
		this.interactionName = interactionName;
		this.visible = visible ?? true; // visible 속성 기본값 true

		this.width = width || 48;
		this.height = height || 64;

		this.state = 1;

		this.img = document.querySelector("#enemy");
	}
	draw(ctx) {
		if (this.visible)
			ctx.drawImage(this.img, this.x, this.y);
		else {
			ctx.beginPath();
			ctx.rect(this.x, this.y, this.width, this.height);
			ctx.strokeStyle = "red";
			ctx.stroke();
			ctx.closePath();
		}
	}

	update() {
	}
}