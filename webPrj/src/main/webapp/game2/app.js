import GameCanvas from "./panel/game-canvas.js";
import newlec from "./newlec.js";
import RankCanvas from "./panel/rank-canvas.js";

window.addEventListener("load", function () {


    const gameCanvas = new GameCanvas();
    gameCanvas.ongameOver = (e) => {
        gameCanvas.pause = true;
        gameCanvas.dom.classList.add("d-none");
        rankCanvas.dom.classList.remove("d-none");
    }
    gameCanvas.run();
    const rankCanvas = new RankCanvas();
    
    rankCanvas.run();


    // gameCanvas.pause1();






    // var canvas = document.querySelector(".game-canvas");


    // canvas.onclick = function(){       
    //     boy2.move(2);
    // boy2.draw(ctx);


    // }
    // var img = this.document.querySelector("img");
    // console.log(canvas);





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