import Boy from '../item/boy.js'
import Background from '../item/background.js'
import Interaction from '../item/interaction.js'

export default class GameCanvas {
	constructor() {
		this.dom = document.querySelector(".game-canvas");
		this.dom.focus();
		/** @type {CanvasRenderingContext2D} */
		this.ctx = this.dom.getContext("2d");
		this.boy = new Boy(1024 / 2, 700);
		this.bg = new Background();
		this.interactions = []
		// this.enemy = new Enemy(1024 / 2, 0);
		// this.enemies = [];
		// this.enemies.push(this.enemy1);
		// this.enemies.push(this.enemy2);
		// 게임 상태변수
		this.gameover = false;
		this.pause = false;
		this.pause2 = true;

		//----- game2 -----
		this.textX = 670 / 2;
		this.textY = 1120 / 2;
		//-----------------

		this.interActionKeyPressed = false;

		this.dom.onclick = this.clickHandler.bind(this);
		this.dom.addEventListener("keydown", this.keyDownHandler.bind(this), false);
		this.dom.addEventListener("keyup", this.keyUpHandler.bind(this), false);
		// document.onclick = this.clickHandler.bind(this);
		// document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
		// document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
	}

	initItems() {
		this.interactions = [
			new Interaction(500, 100, "b", false, 100, 100),
			new Interaction(500, 300, "b", false, 60, 120),
			new Interaction(180, 650, "b", false, 100, 100),
			new Interaction(0, 960, "b", false, 200, 200),
			new Interaction(500, 1070, "b", false, 200, 100),
		]
	}

	run() {
		// console.log(this);
		if (this.pause)
			return;

		// 60프레임으로 다시 그리는 코드
		this.update();
		this.draw();
		// this.collisionDetection();

		window.setTimeout(this.run.bind(this), 16);
		// window.setTimeout(function(){
		// 	this.run();
		// }.bind(this), 16)
	}

	miniGameRun() {
		if (this.pause2)
			return;

		// 60프레임으로 다시 그리는 코드
		this.drawGame2();
		
		// console.log("game2");

		// window.setTimeout(this.miniGameRun.bind(this), 16);
	}

	drawGame2() {
		this.ctx.clearRect(0, 0, 670, 1120);
		this.ctx.fillStyle = "black";
		this.ctx.font = "40px serif";
		this.ctx.textAlign = "center";
		this.ctx.fillText("Game2", this.textX, this.textY - 300);
		this.ctx.fillText("1 + 1 = 2", this.textX, this.textY- 100);
		this.ctx.fillText("O", 150, this.textY + 100);
		this.ctx.fillText("X", 670 - 150, this.textY + 100);
	}

	update() {
		this.boy.update()
		for (let interaction of this.interactions)
			interaction.update();
	}
	draw() {
		this.bg.draw(this.ctx);
		this.boy.draw(this.ctx);
		for (let interaction of this.interactions)
			interaction.draw(this.ctx);
	}

	// ----- event handlers -----
	clickHandler(e) {
		console.log(`x : ${e.x}, y : ${e.y}`);
		if (!this.pause) {
			if ((0 <= e.x && e.x <= this.dom.width && 0 <= e.y && e.y < this.dom.height))
				this.boy.moveTo(e.x, e.y);
		}
		if (!this.pause2) {
			if (0 <= e.x && e.x <= this.dom.width / 2 && 0 <= e.y && e.y < this.dom.height) {
				alert("정답")
				this.pause = false;
				this.pause2 = true;
				this.run();
			}
			else if (this.dom.width / 2 < e.x && e.x <= this.dom.width && 0 <= e.y && e.y < this.dom.height) {
				alert("오답")
			}
		}
	}

	keyDownHandler(e) {
		switch (e.key) {
			case "ArrowUp":
				this.boy.move(1);
				break;
			case "ArrowRight":
				this.boy.move(2);
				break;
			case "ArrowDown":
				this.boy.move(3);
				break;
			case "ArrowLeft":
				this.boy.move(4);
				break;
			case " ":
				// this.interActionKeyPressed = true;
				this.collisionDetection()
				break;
			case "Escape":
				if (this.pause == true) {
					this.pause = false;
					this.pause2 = true;
					// this.miniGame.style.display = 'none'
					// this.dom.style.display = 'block'
					this.run();
				}
				break;
		}
	}

	keyUpHandler(e) {
		switch (e.key) {
			case "ArrowUp":
				this.boy.stop(1);
				break;
			case "ArrowRight":
				this.boy.stop(2);
				break;
			case "ArrowDown":
				this.boy.stop(3);
				break;
			case "ArrowLeft":
				this.boy.stop(4);
				break;
			// case " ":
			// this.interActionKeyPressed = false;
			// break;
		}
	}

	collisionDetection() {
		for (let interaction of this.interactions) {
			if (this.boy.x + this.boy.boxXR > interaction.x && this.boy.x - this.boy.boxXR < interaction.x + interaction.width
				&& this.boy.y + this.boy.boxYR > interaction.y && this.boy.y - this.boy.boxYR < interaction.y + interaction.height
				&& interaction.state == true) {
				this.interactionControll(interaction)
			}
		}
		console.log(this.boy.x, this.boy.y);
	}

	interactionControll(interaction) {
		if (interaction.interactionName == "a") {
			alert("→")
		}
		else if (interaction.interactionName == "b") {
			this.pause = true;
			this.pause2 = false;
			this.miniGameRun();
		}
		else if (interaction.interactionName == "c") {
			alert("↗")
		}
		else if (interaction.interactionName == "d") {
			alert("아이템을 찾았다!")
		}
	}
}
