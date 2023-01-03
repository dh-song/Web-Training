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