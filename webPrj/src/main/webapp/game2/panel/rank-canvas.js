export default class RankCanvas {
    constructor() {
        this.dom = document.querySelector(".rank-canvas");
        this.dom.focus(); // 창이 뜨지마자 키 입력 가능
        /** @type {CanvasRenderingContext2D}*/
        this.ctx = this.dom.getContext("2d");
    }

    run() {

        this.update();
        this.draw();


        window.setTimeout(() => {
            this.run();
            console.log("rank time out");
        }, 5);
    }

    update() {

    }

    draw() {
        this.ctx.strokeRect(0, 0, this.dom.width - 1, this.dom.height - 1);
    }
}