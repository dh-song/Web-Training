class TexBox{
    constructor(){

    }

    drawTextBox(ctx){
        ctx.beginPath();
        ctx.fillStyle = "white";            // 댓글 부분
        ctx.rect(0, 600, 640, 200);
        ctx.fill();
        ctx.closePath(); 

        ctx.beginPath();
        ctx.fillStyle = "black";            // 게임 화면 부분
        ctx.rect(0, 0, 640, 600);
        ctx.fill();
        ctx.closePath(); 

        ctx.font = this.font;                
        ctx.fillStyle = "black";

        
        if(this.count != this.text.length){
            ctx.fillText(this.text[this.count], this.x, this.y);
            this.count++;
        }

    }
}

