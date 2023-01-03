function BackGround(){

}

BackGround.prototype = {
    scroll: function(d){

    },
    update: function () {

    },
    draw: function (ctx) {
        var img = new Image();
        img.src = "./image/3.png";
        img.onload = function () {

            ctx.drawImage(img);
        }.bind(this);
    },
}
