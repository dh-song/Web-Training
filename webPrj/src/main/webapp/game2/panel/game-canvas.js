class GameCanvas{

    constructor(){
        this.dom = document.querySelector(".game-canvas");
    /** @type {CanvasRenderingContext2D}*/
    this.ctx = this.dom.getContext("2d");
    this.boy = new Boy(100, 100);
    
    this.gameover = false;
    this.pause = false;

    this.dom.onclick = this.clickHandler.bind(this); //bind가 없으면 main 캔버스

    }

    run(){
        //60프레임 표시
        this.update();
        this.draw();

        if (this.pause) {
            return;
        }
        // window.setTimeout(function(){
        //     console.log("time out");
        // }, 3000)//5초
        // window.setTimeout(this.run.bind(this), 3000); // bind필요

        // window.setTimeout(function(){
        //     this.run();  //this는 window
        // },3000);

        window.setTimeout(()=>{ //밖 this를 쓰지만 지역화가 없음
            this.run();
            console.log("time out");
        },100);
    }
    update(){
        this.boy.update();
        // this.boy.move(2);

    }
    draw(){
        this.boy.draw(this.ctx);
    }

    pause1(){
        this.pause = true;
    }

    //---------event handlers------------------
    clickHandler(e){
        // this.pause = true;
        
        this.boy.moveTo(e.x, e.y);
        // this.boy.move(2);
        // this.boy.draw(this.ctx);
    
}
}


