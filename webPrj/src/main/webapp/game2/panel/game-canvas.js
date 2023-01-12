import Boy from "../item/boy.js";
import Background from "../item/background.js";
import Enemy from "../item/enemy.js";
import newlec from "../newlec.js";
import confirmDlg from "../item/confirmDlg.js"

export default class GameCanvas {

    constructor() {
        this.dom = document.querySelector(".game-canvas");
        this.dom.focus(); // 창이 뜨지마자 키 입력 가능
        /** @type {CanvasRenderingContext2D}*/
        this.ctx = this.dom.getContext("2d");
        this.boy = new Boy(100, 100);
        this.boy.onNoLife = this.boyNoLifeHandler.bind(this);

        this.dlg = new confirmDlg();
        this.dlg.onclick = ()=>{
            console.log("clicked");
        }
        this.dlg.show();

        newlec.x++;
        console.log("x: "+ newlec.x);

        this.enemies = [];
        this.enmGenSpeed = 60;
        // this.enemies = [new Enemy(100, 20), new Enemy(150, 30),
        // new Enemy(200, 40), new Enemy(250, 50), new Enemy(300, 60), new Enemy(350, 70),
        // new Enemy(400, 80), new Enemy(450, 90), new Enemy(500, 100), new Enemy(550, 110), ];

        this.bg = new Background();

        newlec.enemies = this.enemies;

        // 콜백 함수
        // for (let enemy of this.enemies) {
        //     enemy.onOutOfScreen = (en) => {
        //         console.log(this.enemies.indexOf(en));
        //         this.enemies.splice(this.enemies.indexOf(en), 1);
        //     }
        // }


        this.gameover = false;
        this.pause = false;

        this.boy.Speed++; //get, set 띄어쓰기 후 속성처럼 사용.
        // this.boy.setSpeed(this.boy.getSpeed()+0); // #비공개로 getter, setter 이용

        this.dom.onclick = this.clickHandler.bind(this); //bind가 없으면 main 캔버스
        this.dom.onkeydown = this.keyDownHandler.bind(this);
        this.dom.onkeyup = this.keyUpHandler.bind(this);



    }

    run() {
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

        window.setTimeout(() => { //밖 this를 쓰지만 지역화가 없음
            this.run();
            console.log("time out");
        }, 5);
    }
    update() {
        this.boy.update();
        for (let enemy of this.enemies) {
            enemy.update();
        }
        
        this.enmGenSpeed--;
        // this.boy.move(2);

        if (this.enmGenSpeed == 0) {
            let min = Math.ceil(0);
            let max = Math.floor(700);
            let ran = Math.floor(Math.random() * (max - min + 1)) + min;
            let x = ran; // -50~ this.dom.width+50;
            let y = 50;

            // this.enemies.push(new Enemy(x, y));
            // for (let enemy of this.enemies) {
            //     enemy.onOutOfScreen = (en) => {
            //         console.log(this.enemies.indexOf(en));
            //         this.enemies.splice(this.enemies.indexOf(en), 1);
            //     }
            // }
            let enemy = new Enemy(x, y);
            enemy.onOutOfScreen = this.enemyOutOfScreenHandler.bind(this);
            this.enemies.push(enemy);

            this.enmGenSpeed = Math.floor(Math.random() * (60 - 300 + 1)) + 30;
            {
                let min = Math.ceil(30);
                let max = Math.floor(60);
                let ran = Math.floor(Math.random() * (max - min + 1)) + min;
                console.log(ran);
            }
            this.enmGenSpeed = ran;
        }

        this.dlg.update();



    }
    draw() {
        this.bg.draw(this.ctx);
        this.boy.draw(this.ctx);
        for (let enemy of this.enemies) {
            enemy.draw(this.ctx);
        }
        this.dlg.draw(this.ctx);

    }

    pause1() {
        this.pause = true;
    }

    //---------event handlers------------------
    clickHandler(e) {
        // this.pause = true;

        // this.boy.notifyClick(e.x, e.y);
        // for (let enemy of this.enemies) {
        //     enemy.notifyClick(e.x, e.y);
        // }
        // this.dlg.notifyClick(e.x, e.y);



        this.boy.moveTo(e.x, e.y);
        // this.boy.move(2);
        // this.boy.draw(this.ctx);

    }
    keyDownHandler(e) {

        switch (e.key) {
            case 'ArrowUp':
                this.boy.move(1);
                break;

            case 'ArrowRight':
                this.boy.move(2);
                break;

            case 'ArrowDown':
                this.boy.move(3);
                break;

            case 'ArrowLeft':
                this.boy.move(4);
                break;

            default:
                break;
        }
    }
    keyUpHandler(e) {

        switch (e.key) {
            case 'ArrowUp':
                this.boy.stop(1);
                break;

            case 'ArrowRight':
                this.boy.stop(2);
                break;

            case 'ArrowDown':
                this.boy.stop(3);
                break;

            case 'ArrowLeft':
                this.boy.stop(4);
                break;

            default:
                break;
        }
    }

    enemyOutOfScreenHandler(en) {
        let idx = this.enemies.indexOf(en);
        console.log(idx);
        this.enemies.splice(idx, 1);
    }

    boyNoLifeHandler(){
        
    }
}



// export default GameCanvas;
