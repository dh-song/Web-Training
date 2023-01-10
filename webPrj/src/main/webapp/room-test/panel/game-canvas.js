import Boy from "../item/boy.js";
import { boy } from "../item/boy.js";
import Background from "../item/background.js";

export default class GameCanvas {
    constructor() {
        this.dom = document.querySelector(".game-canvas");
        this.dom.focus();
        /** @type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
        // this.boy = new Boy(100, 100);
        this.background = new Background(0, 0);

        this.dom.onkeydown = this.keyDownHandler.bind(this);
        this.dom.onkeyup = this.keyUpHandler.bind(this);

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
        boy.update();
    }

    draw() {
        this.background.draw(this.ctx);
        boy.draw(this.ctx);
    }

    keyDownHandler(e) {
        switch (e.key) {
            case "ArrowUp":
                boy.move(8);
                break;
            case "ArrowDown":
                boy.move(2);
                break;
            case "ArrowLeft":
                boy.move(4);
                break;
            case "ArrowRight":
                boy.move(6);
                break;

            default:
                break;
        }
    }
    keyUpHandler(e) {
        switch (e.key) {
            case "ArrowUp":
                boy.stop(8);
                break;
            case "ArrowDown":
                boy.stop(2);
                break;
            case "ArrowLeft":
                boy.stop(4);
                break;
            case "ArrowRight":
                boy.stop(6);
                break;

            default:
                break;
        }

    }
}