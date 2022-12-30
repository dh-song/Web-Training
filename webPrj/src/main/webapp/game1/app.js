window.addEventListener("load", function(){
    var canvas = document.querySelector(".game-canvas");
    // var img = this.document.querySelector("img");
    // console.log(canvas);
    /** @type {CanvasRenderingContext2D}*/
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.onload = function(){
        ctx.drawImage(img, 100,100);
    }
    // img.src = "./image/boy.png";

    
    
    
    
});