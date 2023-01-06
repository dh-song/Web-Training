class Background{
    constructor(){

        this.x = 0;
        this.y = 0;

        this.img = document.querySelector("#bg");
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y);
    }

    update(){

    }



}



// function BackGround(){

// }

// BackGround.prototype = {
//     scroll: function(d){

//     },
//     update: function () {

//     },
//     draw: function (ctx) {
//         var img = new Image();
//         img.src = "./image/3.png";
//         img.onload = function () {

//             ctx.drawImage(img);
//         }.bind(this);
//     },
// }
