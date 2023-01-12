export default class Puzzle {
    #speed; // private 대신 모든 변수명에 #추가
    constructor(x, y) {


        this.x = x || 20; //값이 없으면 100
        this.y = y || 20;


        this.cIx = 0;
        this.cIy = 0;



        // this.fx = 0;

        // -----------------------이미지 그리기 변수
        this.img = document.querySelector("#ict");
        this.ix = 0;
        this.iy = 0;
        // ------------------
        this.sw = this.img.width / 3;
        this.sh = this.img.height / 3;
        this.sx = this.sw * this.ix;
        this.sy = this.sh * this.iy;

    }


    draw(ctx) {
        for (let i = 0; i < 3; i++) {
            this.ix = i;
            for (let j = 0; j < 3; j++) {
                this.iy = j;
                this.sx = this.sw * this.ix;
                this.sy = this.sh * this.iy;
                ctx.drawImage(this.img,
                    this.sx, this.sy, this.sw, this.sh,
                    this.sx+this.x, this.sy+this.y, this.sw, this.sh);
            }

        }

    }

    update() {


    };


    move(x, y) {
        return null;
    }
};