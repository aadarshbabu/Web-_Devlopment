const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({
    port: 1234
});




wss.on('connection', function (ws) {

    ws.on("message", function (data) {
        console.log('received: %s', data);
    })
    ws.send("hello")
});
