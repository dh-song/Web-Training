import puzzle from "../item/puzzle.js";
import Background from "../item/background.js";
import Text from "../item/text.js";

export default class GameCanvas {
    constructor() {
        this.dom = document.querySelector(".game-canvas");
        this.dom.focus();
        /** @type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
        this.puzzle = new puzzle();
        this.background = new Background(0, 0);
        this.text = new Text();

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
        this.puzzle.drawScore(this.ctx);

        // ----- 텍스트
        if (this.text.needText) {
            this.text.drawText(this.ctx);
        }
        
    }


    update() {
        if (!this.puzzle.clearPz) { // 퍼즐 클리어 시 무효
        this.puzzle.update();
        }
    }

    
    clickHandler(e) {

        if (!this.puzzle.clearPz && !this.text.needText) { // 퍼즐 클리어 시 무효
            console.log("x: "+e.x+"  y: "+e.y);
            this.puzzle.move(e.x, e.y);
        }
        
    }

    keyDownHandler(e){
        this.text.update();
    }
}