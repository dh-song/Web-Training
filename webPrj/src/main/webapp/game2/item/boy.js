class Boy {
    constructor(x, y) {


        this.x = x || 100; //값이 없으면 100
        this.y = y || 100;

        this.vx = 0;
        this.vy = 0;

        this.dx = 0;
        this.dy = 0;

        this.walkDelay = 15;

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

    draw(ctx) {
        this.sx = this.sw * this.ix;
        this.sy = this.sh * this.iy;

        ctx.drawImage(this.img,
            this.sx, this.sy, this.sw, this.sh,
            this.x - this.sw / 2, this.y - this.sh + 15, this.sw, this.sh);

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

            this.ix = 1;

        };
    
        this.x += this.vx;
        this.y += this.vy;


    }

    moveTo(dx, dy) {
        this.ix = 0;

        this.dx = dx;
        // this.fx = this.x;

        let w = dx - this.x;
        let h = dy - this.y;

        let d = Math.sqrt(w * w + h * h);
        this.vx = w / d;
        this.vy = h / d;
    }
    move(dir) {
        switch (dir) {
            case 1: //북
                this.y -= 5;
                break;
            case 2: //동
                this.x += 5;
                break;
            case 3: //남
                this.y += 5;
                break;
            case 4: //서
                this.x -= 5;
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