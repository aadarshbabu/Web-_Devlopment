
const ws = new WebSocket("ws://127.0.0.1:1234");

ws.onopen = function () {
    ws.send("Hello for testing")
}
ws.onmessage = function (e) {
    console.log(e)
}


