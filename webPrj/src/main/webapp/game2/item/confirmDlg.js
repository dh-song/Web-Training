export default class confirmDlg{
    constructor(){

        this.width = 400;
        this.height = 200;

        this.isVisible = false;

        this.onContinue = false;
        this.onEnd = false;
    }

    show(){
        this.isVisible = false;
    }

    update(){

    }
    draw(ctx){
        if (this.isVisible) {
            return;
        }
        ctx.fillStyle = '#FFF';
        ctx.fillRect(100,100,this.width, this.height);

        ctx.fillStyle = '#000';
        ctx.strokeRect(100,100,this.width, this.height);
    }
}