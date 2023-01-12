import puzzle from "../item/puzzle.js";
import Background from "../item/background.js";

export default class GameCanvas {
    constructor() {
        this.dom = document.querySelector(".game-canvas");
        this.dom.focus();
        /** @type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
        this.puzzle = new puzzle();
        // this.boy = new Boy(100, 100);
        this.background = new Background(0, 0);

        this.dom.onclick = this.clickHandler.bind(this);

    }
    run() {
        this.update();
        this.draw();

        window.setTimeout(function () {
            this.run();
            console.log("time out");
        }.bind(this), 5)
    }

    update() {
        this.puzzle.update();
    }

    draw() {
        this.background.draw(this.ctx);
        this.puzzle.draw(this.ctx);
    }
    clickHandler(e) {
        this.puzzle.move(e.x, e.y);
    }

}