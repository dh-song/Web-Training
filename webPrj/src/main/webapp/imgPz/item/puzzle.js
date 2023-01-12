export default class Puzzle {
    #speed; // private 대신 모든 변수명에 #추가
    constructor(x, y) {


        this.x = x || 100; //값이 없으면 100
        this.y = y || 100;


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
        // for (let i = 0; i < 3; i++) {
        //     this.ix = i;
        //     for (let j = 0; j < 3; j++) {
        //         this.iy = j;
        //         this.sx = this.sw * this.ix;
        //         this.sy = this.sh * this.iy;
        //         ctx.drawImage(this.img,
        //             this.sx, this.sy, this.sw, this.sh,
        //             this.x, this.y, this.sw, this.sh);
        //     }
        
        }
        


    
    update() {


    }


    move(x, y) { // 키 를 각자 나눠서 독립적으로 작동
        return null;
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