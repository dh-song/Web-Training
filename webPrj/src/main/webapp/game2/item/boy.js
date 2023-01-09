export default class Boy {
    #speed; // private 대신 모든 변수명에 #추가
    constructor(x, y) {
        

        this.x = x || 100; //값이 없으면 100
        this.y = y || 100;

        this.vx = 0;
        this.vy = 0;

        this.dx = 0;
        this.dy = 0;

        this.walkDelay = 15;

        this.moveLeft = false;
        this.moveRigft = false;
        this.moveUp = false;
        this.moveDown = false;

        this.#speed = 1;


        // this.fx = 0;

        // -----------------------이미지 그리기 변수
        this.img = document.querySelector("#boy");
        this.ix = 1;
        this.iy = 2;
        // ------------------
        this.sw = 106;
        this.sh = 148.25;
        this.sx = this.sw * this.ix;
        this.sy = this.sh * this.iy;


    }

    set Speed(speed){ //띄어쓰기 속성처럼 사용
        this.#speed = speed;
    }
    get Speed(){
        return this.#speed;
    }

    draw(ctx) {
        this.sx = this.sw * this.ix;
        this.sy = this.sh * this.iy;

        ctx.drawImage(this.img,
            this.sx, this.sy, this.sw, this.sh,
            this.x - this.sw / 4, this.y - this.sh + 75, this.sw / 2, this.sh / 2);

        // var img = new Image();
        // img.src = "./image/1.png";
        // img.onload = function () { //this 는 Boy가 아니고 img(함수를 부른 쪽의 this)

        //     ctx.drawImage(img,
        //         this.sx, this.sy, this.sw, this.sh,
        //         this.x-this.sw/2, this.y-this.sh+15, this.sw, this.sh);
        // }.bind(this); // img가 아니라 밖의 this 전달

        //img를 html에 display none 으로 올리고 this img로 사용
    }
    update() {
        //walkdelay와 vx 0 함수의 순서 중요

        // if (this.fx>this.dx && this.x<this.dx) {
        //     this.vx = 0;
        //     this.vy = 0;
        // }
        // if (this.fx<this.dx && this.x>this.dx) {
        //     this.vx = 0;
        //     this.vy = 0;
        // }

        this.walkDelay--;

        //--------키 이동
        if (this.moveUp) {
            this.iy = 0;
            this.y -= this.#speed;

            this.vx = 0;
            this.vy = 0;
        }
        if (this.moveDown) {
            this.iy = 2;
            this.y += this.#speed;

            this.vx = 0;
            this.vy = 0;
        }
        if (this.moveLeft) {
            this.iy = 3;
            this.x -= this.#speed;

            this.vx = 0;
            this.vy = 0;
        }
        if (this.moveRigft) {
            this.iy = 1;
            this.x += this.#speed;

            this.vx = 0;
            this.vy = 0;
        }



        // switch (this.dir) {
        //     case 1: //북
        //         this.iy = 0;
        //         this.y -= 1;
        //         break;
        //     case 2: //동
        //         this.iy = 1;
        //         this.x += 1;
        //         break;
        //     case 3: //남
        //         this.iy = 2;
        //         this.y += 1;
        //         break;
        //     case 4: //서
        //         this.iy = 3;
        //         this.x -= 1;
        //         break;
        // }


        if (this.walkDelay == 0) {
            this.ix = this.ix == 2 ? 0 : 2;
            // this.sx = this.sw * this.ix; //draw로 이동
            this.walkDelay = 15;
        };

        // if (this.walkDelay == 0) {
        //     if (this.ix == 0) {
        //         this.ix = 2;
        //     } else if(this.ix == 2){
        //         this.ix = 0;
        //     };
        //     this.walkDelay=15;
        // };
        // this.sx = this.sw * this.ix;

        if ((this.dx + 1 > this.x && this.x > this.dx - 1)
            || (this.dy + 1 > this.y && this.y > this.dy - 1)) {
            this.vx = 0;
            this.vy = 0;
        };

        // || 은 true 일떄 왼쪽 반환
        if (!(this.moveDown || this.moveLeft || this.moveRigft || this.moveUp || false)) {
            if (this.vx == 0 && this.vy == 0) {
                this.ix = 1;
                return;
            }
        }

        // if (this.vx == 0 && this.vy == 0) {
        //     this.ix = 1;
        //     return;
        // }

        this.x += this.vx;
        this.y += this.vy;



    }

    moveTo(dx, dy) {


        this.dx = dx;
        // this.fx = this.x;

        let w = dx - this.x;
        let h = dy - this.y;

        // this.ix = 0;

        if (h * h < w * w) { // 클릭 방향 이미지
            0 < w ? this.iy = 1 : this.iy = 3;
        } else {
            0 < h ? this.iy = 2 : this.iy = 0;
        }

        let d = Math.sqrt(w * w + h * h);
        this.vx = w / d;
        this.vy = h / d;
    }
    move(dir) { // 키 를 각자 나눠서 독립적으로 작동
        switch (dir) {
            case 1: //북
                this.moveUp = true;
                break;
            case 2: //동
                this.moveRigft = true;
                break;
            case 3: //남
                this.moveDown = true;
                break;
            case 4: //서
                this.moveLeft = true;
                break;
        }
    }

    stop(dir) {
        switch (dir) {
            case 1: //북
                this.moveUp = false;
                break;
            case 2: //동
                this.moveRigft = false;
                break;
            case 3: //남
                this.moveDown = false;
                break;
            case 4: //서
                this.moveLeft = false;
                break;

        }
    }


};








// Boy.prototype = {
//     draw: function (ctx) {
//         var img = new Image();
//         img.src = "./image/1.png";
//         img.onload = function () { //this 는 Boy가 아니고 img(함수를 부른 쪽의 this)

//             ctx.drawImage(img,
//                 this.sx, this.sy, this.sw, this.sh,
//                 this.x, this.y, 106, 148.25);
//         }.bind(this); // img가 아니라 밖의 this 전달
//     }
//     ,
//     move: function (dir) {
//         switch (dir) {
//             case 1: //북
//                 this.y -= 1;
//                 break;
//             case 2: //동
//                 this.x += 1;
//                 break;
//             case 3: //남
//                 this.x += 1;
//                 break;
//             case 4: //서
//                 this.x -= 1;
//                 break;
//         }
//     }

// };