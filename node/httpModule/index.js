// In http module You create own server.

// if you crete  a server first you have import the http moudle.

const http = require('http') // this line import the http server. module
// when you require the http module You can create a server with the help of http module
// in http module there are a funcion creteserver(). its take callback function with two args. 1. request, 2. responce, 

const server = http.createServer((req, res) => {
    // console.log(req.url)
    if (req.url == '/') {
        res.writeHead(200, { "content-Type": "text" })
        res.write("You are the home page");
        res.end();// when you call this fun that meance res. is send.
    }
    else if (req.url == "/about") {
        res.writeHead(200, { "content-Type": "text" })
        res.write("This is the local world");
        res.end();
    }
    else if (req.url == "/services") {
        res.write("hello This is Your services page");
        res.end();
    }
    else {

        res.writeHead(404, { "content-Type": "text/plain" })
        res.end("error")
    }

    // WriteHead method is use to Write Responce Head. its take more then 2 args. 1. responce code. 2. content Type and many more.
});
// when you invock the createServer method its send the responce. But its can't handle the request until this function is call
server.listen(80, "127.0.0.1", () => {
    console.log("Listning the port 80")
});

// this listen method lisen Your request on clint. it's take a three argument 1. PortNo 2.IP addres. 3. callbackFuncion.(it is optcinal) CallBack funcion in call if every thing is ok then call back func