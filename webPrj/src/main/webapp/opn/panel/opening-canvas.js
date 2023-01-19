import Text from "../text/text.js";

export default class GameCanvas {
    constructor() {
        this.dom = document.querySelector(".game-canvas");
        this.dom.focus();
        this.background = document.querySelector("#background");
        /** @type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
        this.text = new Text();
        this.textDelay = 20;
        this.backgroundDraw = true;
 
    }

    run() {
        this.update();
        this.draw();

        this.textDelay --;
        

        window.setTimeout(function () {
            this.run();
            console.log("time out");
        }.bind(this), 5)
    }

    draw() {
        // if (this.backgroundDraw) {
        //     this.ctx.drawImage(this.background, 0, 0);
        //     this.backgroundDraw = false;
        // }
        

        
        

        // ----- 텍스트
        if (this.textDelay == 0) {
            this.ctx.drawImage(this.background, 0, 0);
            this.text.drawText(this.ctx);
            this.textDelay=20;
        }
        
    }

    update(){
        if (this.textDelay == 0) {
            this.text.update(this.ctx);
        }
       
    }
}