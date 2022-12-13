
const WebSocket = require('ws');

let socket = new WebSocket('wss://bj.police.everknow.cn:9050/websocket');

socket.onopen = function (e) {
    console.info(`on open ...`);
    socket.send(`{
            "id": 0,
            "type": 0,
            "command": 0,
            "result": 0,
            "reason": 0,
            "params": {
                "device": "foo_js_socket",
                "token": "123456"
            }
        }`);
};

socket.onmessage = function (event) {
    console.info(`[message] Data received from server: ${event.data}`);
    socket.send(`{
            "id": ${event.data.id},
            "type": 1,
            "command": 0,
            "result": 0,
            "reason": 0
        }`);
};

socket.onclose = function (event) {
    if (event.wasClean) {
        alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
        // 例如服务器进程被杀死或网络中断
        // 在这种情况下，event.code 通常为 1006
        alert('[close] Connection died');
    }
};

socket.onerror = function (error) {
    alert(`[error] ${error}`);
};


// 函数实现，参数单位 毫秒 ；
function wait(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
};


// 调用方法；
async function run() {
    await wait(500000);
}

run()
// }