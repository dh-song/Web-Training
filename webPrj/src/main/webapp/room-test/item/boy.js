export default class Boy {
    constructor(x, y) {
        this.x = x || 100;
        this.y = y || 100;

        this.vx = 0;
        this.vy = 0;

        this.dx = 0;
        this.dy = 0;

        this.img = document.querySelector("#boy");
        this.ix = 1;
        this.iy = 2;
        this.sw = this.img.width/3;
        this.sh = this.img.height/4;
        this.sx = this.sw * this.ix;
        this.sy = this.sh * this.iy;

        this.moveUp = false;
        this.moveDown = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.walkDelay = 15;
        this.speed = 1.5;
    }

    draw(ctx) {
        this.sx = this.sw * this.ix;
        this.sy = this.sh * this.iy;
        ctx.drawImage(this.img,
            this.sx, this.sy, this.sw, this.sh,
            this.x - this.sw/2, this.y + this.sh, this.sw*2, this.sh*2);
    }

    update() {

        this.walkDelay--;

        if (this.moveUp) {
            this.iy = 0;
            this.y -= this.speed;
        }
        if (this.moveDown) {
            this.iy = 2;
            this.y += this.speed;
        }
        if (this.moveLeft) {
            this.iy = 3;
            this.x -= this.speed;
        }
        if (this.moveRight) {
            this.iy = 1;
            this.x += this.speed;
        }


        if (this.walkDelay == 0) {
            this.ix == 0? this.ix = 2 :this.ix = 0;
            this.walkDelay = 15;
        }

        if (!(this.moveUp || this.moveDown ||this.moveLeft||this.moveRight||false)) {
            this.ix =1;
        }
    }
    move(dir) {
        switch (dir) {
            case 8:
                this.moveUp = true;
                break;
            case 2:
                this.moveDown = true;
                break;
            case 4:
                this.moveLeft = true;
                break;
            case 6:
                this.moveRight = true;
                break;

            default:
                break;
        }
    }
    stop(dir) {
        switch (dir) {
            case 8:
                this.moveUp = false;
                break;
            case 2:
                this.moveDown = false;
                break;
            case 4:
                this.moveLeft = false;
                break;
            case 6:
                this.moveRight = false;
                break;

            default:
                break;
        }
    }
}
export let boy = new Boy(500, 500);