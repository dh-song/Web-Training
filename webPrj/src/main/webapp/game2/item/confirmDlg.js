export default class confirmDlg {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.width = 400;
        this.height = 200;

        this.btnYes = {
            x: 70,
            y: 100,
            width: 100,
            height: 50,
            label: 'YES'
        };

        this.btnNo = {
            x: 230,
            y: 100,
            width: 100,
            height: 50,
            label: 'NO'
        };

        this.isVisible = false;

        this.onContinue = false;
        this.onEnd = false;
        this.onclick = false;
    }

    notifyClick(x, y) {
        if ((this.x < x && x < this.x + this.width) 
        && (this.y < y && y < this.y + this.height)){
            console.log("클릭");
            if (this.onclick) {
                this.onclick(3); //1번은 dlg, 2는 yes,3은 no
            }
        }
    }

    show() {
        this.isVisible = true;
    }

    update() {

    }
    draw(ctx) {
        if (!(this.isVisible)) {
            return;
        }

        let { x, y } = this;

        // 흰색 배경에
        ctx.fillStyle = '#FFF5';
        ctx.fillRect(x, y, this.width, this.height);

        // 검은색 테두리
        ctx.fillStyle = '#000';
        ctx.strokeRect(x, y, this.width, this.height);

        ctx.fillStyle = 'black'
        ctx.font = 'bold 48px serif'
        ctx.fillText('Continue?', this.width / 2, y + 70);


        let btns = [this.btnYes, this.btnNo];

        for (let btn of btns) {
            let { x, y, width: w, height: h, label } = btn;


            ctx.fillStyle = 'gray';
            ctx.fillRect(this.x + x, this.y + y, w, h);
            ctx.fillStyle = 'black';
            ctx.strokeRect(this.x + x, this.y + y, w, h);
            ctx.font = 'bold 30px serif'
            ctx.fillText(label, this.x + x + 20, y + 135);
        }




        // ctx.fillStyle = '#FFF';
        // ctx.fillRect(100,100,this.width, this.height);

        // ctx.fillStyle = '#000';
        // ctx.strokeRect(100,100,this.width, this.height);
    }
}