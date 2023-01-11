export default class Boy {
	#speed;
	constructor(x, y) {
		this.x = x || 0;
		this.y = y || 0;

		this.vx = 0;
		this.vy = 0;

		this.dx = 0;
		this.dy = 0;

		// ----- 상호작용을 위한 hitbox -----
		this.boxWidth = 60;
		this.boxXR = this.boxWidth / 2;
		this.boxheight = 60;
		this.boxYR = this.boxheight / 2;

		this.walkDelay = 20;

		this.dir = 0;
		this.#speed = 4;

		this.isKeydown = false;

		this.moveLeft = false;
		this.moveRight = false;
		this.moveUp = false;
		this.moveDown = false;


		// ----- 이미지를 그리기 위한 변수 -----

		this.ix = 1;
		this.iy = 2;

		this.sw = 106;
		this.sh = 148.25;

		this.sx = this.sw * this.ix;
		this.sy = this.sh * this.iy;


		this.img = document.querySelector("#boy");
	}

	set speed(value) {
		this.#speed = value;
	}
	get speed() {
		return this.#speed;
	}

	draw(ctx) {
		/*--- hitbox rendering ---*/
		ctx.fillStyle = "red";
		ctx.fillRect(this.x - this.boxXR, this.y - this.boxYR, this.boxWidth, this.boxheight);
		/*------------------------*/

		this.sx = this.sw * this.ix;
		this.sy = this.sh * this.iy;
		ctx.drawImage(this.img,
			this.sx, this.sy, this.sw, this.sh,
			this.x - (this.sw / 2), this.y - this.sh + 30, this.sw, this.sh);
	}
	update() {
		if ((this.vx != 0 && this.vy != 0)
			|| (this.moveLeft || this.moveRight || this.moveUp || this.moveDown)) {
			this.walkDelay--;
			if (this.walkDelay == 0) {
				this.ix = (this.ix == 2) ? 0 : 2;
				this.walkDelay = 20;
			}
		}
		if (this.vx != 0 && this.vx != 0) {
			if (Math.abs(this.vx) > Math.abs(this.vy))
				this.iy = (this.vx < 0) ? 3 : 1
			else
				this.iy = (this.vy < 0) ? 0 : 2
		}
		if ((this.dx - 1 <= this.x && this.x <= this.dx + 1)
			|| (this.dy - 1 <= this.y && this.y <= this.dy + 1)) {
			this.vx = 0;
			this.vy = 0;
		}
		if ((this.vx == 0 && this.vx == 0)
			&& !(this.moveLeft || this.moveRight || this.moveUp || this.moveDown))
			this.ix = 1;

		this.x += this.vx;
		this.y += this.vy;

		// ----------------------



		// ----- 키보드 이동 -----

		//352~442 / 520~610 / 670~760 / 830~920
		if (this.moveLeft) {
			this.iy = 3;
			if (this.x > 0) {
				if ((352 < this.y && this.y < 442) ||
					(520 < this.y && this.y < 610) ||
					(670 < this.y && this.y < 760) ||
					(830 < this.y && this.y < 920)) {
					if (this.x + (this.sw / 2) - this.#speed < 460) {
						this.x += this.#speed;
					}
				}
				this.x -= this.#speed;
			}
		}
		if (this.moveRight) {
			this.iy = 1;
			if (this.x < 670){

			}
			this.x += this.#speed;
		}
		if (this.moveUp) {
			this.iy = 0;
			if (this.y > 30)
				this.y -= this.#speed;
		}
		if (this.moveDown) {
			this.iy = 2;
			if (this.y < 1120)
				this.y += this.#speed;
		}
	}
	moveTo(dx, dy) {
		this.ix = 0;

		let w = dx - this.x;
		let h = dy - this.y;
		let d = Math.sqrt(w * w + h * h)

		this.vx = (w / d) * this.#speed;
		this.vy = (h / d) * this.#speed;

		this.dx = dx;
		this.dy = dy;
	}
	move(dir) {
		switch (dir) {
			case 1: // 북쪽
				this.moveUp = true;
				break;
			case 2: // 동쪽
				this.moveRight = true;
				break;
			case 3: // 남쪽
				this.moveDown = true;
				break;
			case 4: // 서쪽
				this.moveLeft = true;
				break;
		}
	}
	stop(dir) {
		switch (dir) {
			case 1: // 북쪽
				this.moveUp = false;
				break;
			case 2: // 동쪽
				this.moveRight = false;
				break;
			case 3: // 남쪽
				this.moveDown = false;
				break;
			case 4: // 서쪽
				this.moveLeft = false;
				break;
		}
	}
}