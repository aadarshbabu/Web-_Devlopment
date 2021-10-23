
// fs.Stats is a object provide info about a file.
const fs = require('fs');
const http = require('http');
const file = fs.createReadStream('./data.txt');

fs.fstat(3, './data.txt', function (error, data) {
    if (error)
        throw error;
    console.log(data);
})

const server = http.createServer((req, res) => {

    file.pipe(res);

});

server.listen("8080", "127.0.0.1");