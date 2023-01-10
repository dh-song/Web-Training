export default class Enemy{

    constructor(x, y){
        this.x = x || 350; //값이 없으면 100
        this.y = y || 100;
        this.speed = 1;
        this.onOutOfScreen = null;


        this.img = document.querySelector("#enemy");
        // ------------------
        this.sw = 106;
        this.sh = 148.25;
        this.sx = this.sw * this.ix;
        this.sy = this.sh * this.iy;
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x - 24, this.y);
        
    }
    update(){
        this.y++;

        if (this.y > 650) {
            if (this.onOutOfScreen != null) {
                this.onOutOfScreen(this);
            }
        }

    }
}