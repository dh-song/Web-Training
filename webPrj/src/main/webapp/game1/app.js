function Box() {

}
Box.prototype = {
    test: function (x, y) {
        console.log(this);
        console.log(x);
        console.log(y);
    }
};

var box1 = new Box();
var f1 = box1.test;
f1();

var obj = { kore: 2 };
obj.onload = box1.test;
obj.onload();

var n1 = { id: 1, title: 'hello' };

obj.onload();
obj.onload.call(n1); //n1이 this
obj.onload.apply(n1, ['hi', 'okay']); // n1과 배열 전달

window.onclick = function(){
    console.log("w clicked");
};

window.addEventListener("load", function () {



    var canvas = document.querySelector(".game-canvas");


    canvas.onclick = function(){
        console.log("canv clicked");
    }
    // var img = this.document.querySelector("img");
    // console.log(canvas);
    /** @type {CanvasRenderingContext2D}*/
    var ctx = canvas.getContext("2d");

    function Boy(x, y) {
        this.ix = 1;
        this.iy = 2;

        this.x = x || 100; //값이 없으면 100
        this.y = y || 100;

        this.sw = 106;
        this.sh = 148.25;
        this.sx = this.sw * this.ix;
        this.sy = this.sh * this.iy;
    }

    Boy.prototype = {
        draw: function (ctx) {
            var img = new Image();
            img.src = "./image/1.png";
            img.onload = function () { //this 는 Boy가 아니고 img(함수를 부른 쪽의 this)
                console.log(this);

                ctx.drawImage(img,
                    this.sx, this.sy, this.sw, this.sh,
                    this.x, this.y, 106, 148.25);
            }.bind(this); // img가 아니라 밖의 this 전달
        }
        ,
        move: function (dir) {
            switch (dir) {
                case 1: //북
                    this.y -= 10;
                    break;
                case 2: //동
                    this.x += 10;
                    break;
                case 3: //남
                    this.x += 10;
                    break;
                case 4: //서
                    this.x -= 10;
                    break;
            }
        }

    };
    var boy1 = new Boy();
    boy1.draw(ctx);

    var boy2 = new Boy();
    boy2.draw(ctx);
    boy2.move(2);
    boy2.move(2);
    boy2.move(2);
    boy2.move(2);
    boy2.move(2);
    boy2.draw(ctx);


    // var img = new Image();
    // img.src = "./image/1.png";
    // var img2 = new Image();
    // img2.src = "./image/2.png";

    // img.onload = function () {
    //     ctx.drawImage(img, 100,100); 위치
    //     ctx.drawImage(img, 100, 100, 106, 148.25); 그 위치에 통으로


    //     var ix = 1;
    //     var iy = 2;

    //     var sw = 106;
    //     var sh = 148.25;
    //     var sx = sw*ix;
    //     var sy = sh*iy;
    //     ctx.drawImage(img,
    //         sx, sy, sw, sh, //시작 좌표, 자를 크기, 그릴 좌표, 크기
    //         100, 100, 106, 148.25);
    //     ctx.drawImage(img,
    //         106, 296.5, sw, sh,
    //         250, 100, 106, 148.25);
    //     ctx.drawImage(img2,
    //         320, 240, 160, 120,
    //         220, 200, 160, 120);

    // }
    // img.src = "./image/boy.png";





});