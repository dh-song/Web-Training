import puzzle from "../item/puzzle.js";
import Background from "../item/background.js";

export default class GameCanvas {
    constructor() {
        this.dom = document.querySelector(".game-canvas");
        this.dom.focus();
        /** @type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
        this.puzzle = new puzzle();
        this.background = new Background(0, 0);
        this.introTextBox = true;
        this.endTextBox = false;

        this.dom.onclick = this.clickHandler.bind(this);
        this.dom.onkeydown = this.keyDownHandler.bind(this);

    }
    run() {
        this.update();
        this.draw();
        

        window.setTimeout(function () {
            this.run();
            console.log("time out");
        }.bind(this), 5)
    }

    draw() {
        this.background.draw(this.ctx);
        this.puzzle.draw(this.ctx);
    }

    update() {
        if (!this.puzzle.clearPz) { // 퍼즐 클리어 시 무효
        this.puzzle.update();
        }
    }

    
    clickHandler(e) {
        if (!this.puzzle.clearPz) { // 퍼즐 클리어 시 무효
            console.log("x: "+e.x+"  y: "+e.y);
            this.puzzle.move(e.x, e.y);    
        }
        
    }
}