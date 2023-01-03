class GameCanvas{

    constructor(){
        this.dom = document.querySelector(".game-canvas");
    /** @type {CanvasRenderingContext2D}*/
    this.ctx = this.dom.getContext("2d");
    this.boy = new Boy(100, 100);

    this.dom.onclick = this.clickHandler.bind(this); //bind가 없으면 main 캔버스

    }

    run(){
        //60프레임 표시
        this.update();
        this.draw();
    }
    update(){

    }
    draw(){
        this.boy.draw(this.ctx);
    }
    //---------event handlers------------------
    clickHandler(){
        this.boy.move(2);
        this.boy.draw(this.ctx);
    
}
}


