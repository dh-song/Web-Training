export default class Enemy {

    constructor(x, y) {
        this.x = x || 350; //값이 없으면 100
        this.y = y || 100;
        this.speed = 1;
        this.onOutOfScreen = null;
        this.img = document.querySelector("#enemy");
        this.destroy = document.querySelector("#destroy");

        this.eIx = 0;
        this.eIy = 0;
        // ------------------
        //640 x 600
        this.esw = this.destroy.width / 4;
        this.esh = this.destroy.height / 5;
        this.esx = this.esw * this.eIx;
        this.esy = this.esh * this.eIy;
        // ------------------

    }
    get centerX() {
        return this.x + this.img.width / 2;
    }

    get centerY() {
        return this.y + this.img.height / 2;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x - (this.img.width / 2), this.y - (this.img.height / 2));
        ctx.drawImage(this.destroy,
            this.esx, this.esy, this.esw, this.esh,
            this.x - this.esw / 2, this.y - this.esh / 2, this.esw, this.esh);
        



        ctx.beginPath();
        ctx.arc(this.x, this.y, this.img.width / 2, 0, 2 * Math.PI);
        ctx.stroke();

    }
    update() {
        this.y++;

        if (this.y > 650) {
            if (this.onOutOfScreen != null) {
                this.onOutOfScreen(this);
            }
        }

    }
}