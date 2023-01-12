export default class Enemy {

    constructor(x, y) {
        this.x = x || 350; //값이 없으면 100
        this.y = y || 100;
        this.speed = 1;
        this.onOutOfScreen = null;
        this.img = document.querySelector("#enemy");
        this.flame = document.querySelector("#flame");
        this.isHit = false;

        this.eIx = 0;
        this.eIy = 0;
        // ------------------
        //640 x 600
        this.esw = this.flame.width / 4;
        this.esh = this.flame.height / 5;
        this.esx = this.esw * this.eIx;
        this.esy = this.esh * this.eIy;
        // ------------------
        this.hitDelay = 10;

    }
    get centerX() {
        return this.x + this.img.width / 2;
    }

    get centerY() {
        return this.y + this.img.height / 2;
    }

    hit() {
        this.isHit = true;
    }

    draw(ctx) {


        if (this.isHit) {
            this.y--;
            this.esx = this.esw * this.eIx;
            this.esy = this.esh * this.eIy;
            ctx.drawImage(this.flame,
                this.esx, this.esy, this.esw, this.esh,
                this.x - this.esw / 2, this.y - this.esh / 2, this.esw, this.esh);
            this.hitDelay--;

        } else {
            ctx.drawImage(this.img, this.x - (this.img.width / 2), this.y - (this.img.height / 2));
        }



        ctx.beginPath();
        ctx.arc(this.x, this.y, this.img.width / 2, 0, 2 * Math.PI);
        ctx.stroke();

    }
    update() {
        if (this.hitDelay == 0) {
            this.eIx++;
            this.hitDelay = 10;
        }
        if (this.eIx >= 4) {
            this.eIy++;
            if (this.eIy >= 4 && this.eIx >=2 ) {
                this.y=650;
            }
            this.eIx = 0;
        }



        this.y++;
        

        if (this.y > 650) {
            if (this.onOutOfScreen != null) {
                this.onOutOfScreen(this);
            }
        }


    }


}