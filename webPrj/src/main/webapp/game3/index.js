window.addEventListener("load", function () {
    let inputSend = this.document.querySelector(".input-send");
    let btnSend = this.document.querySelector(".btn-send");
    let btnConn = this.document.querySelector(".btn-conn");

    let socket = null;

    btnConn.onclick = function (e) {

        // WebSocket 연결 생성
        let username = 'newlec';
        socket = new WebSocket(`ws://ict.newlec.com/chat`);

        // 연결이 열리면
        socket.addEventListener('open', function (event) {
            // socket.send('Hello Server!');
        });

        // 메시지 수신
        socket.addEventListener('message', function (event) {
            // console.log('Message from server ', event.data);
            console.log();
        });
        console.log(event.data);
    }

    btnSend.onclick = function (e) {
        let msg = inputSend.value;
        console.log(msg);
        if (socket) {
            socket.send(msg);
        }
    }
})