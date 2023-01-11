export default class Background {
	constructor(x, y) {
		this.x = 0;
		this.y = 0;

		this.img = document.querySelector("#bg");
	}
	draw(ctx) {
		ctx.drawImage(this.img, this.x, this.y);
	}

	scroll(dir) {
		switch (dir) {
			case 1: // 북쪽
				break;
			case 2: // 동쪽
				break;
			case 3: // 남쪽
				break;
			case 4: // 서쪽
				break;
		}
	}
	update() {
	}
}