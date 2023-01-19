export default class Text {
    constructor(x, y) {
        this.x = 0 || 50;
        this.y = 0 || 700;

        this.font = "35px '맑은 고딕'";
        this.globalAlpha = 1.0;
        this.needText = true;

    }
    drawText(ctx) {
        if (!this.needText) {
            ctx.globalAlpha = 1.0;
            ctx.font = this.font;
            ctx.fillStyle = "black";
            ctx.fillText("Press Key!", 250, 700);
            return;
        }
        console.log(this.needText);
        ctx.globalAlpha = this.globalAlpha;
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 680, 800);
        this.globalAlpha = this.globalAlpha.toFixed(1) -0.1;
        console.log(this.globalAlpha);
        console.log(this.globalAlpha.toFixed(1));

    }
    update(ctx) {
        ctx.clearRect(0, 0, 680, 800);
        if (this.globalAlpha <= 0) {
            this.needText = false;
        }

    }

}
