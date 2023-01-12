export default class Background1{
    constructor(x,y){
        this.img = document.querySelector("#background");
        this.x = x || 0;
        this.y = x || 0;
    }

    draw(ctx){
        ctx.drawImage(this.img,this.x,this.y,640,800);
    }
}