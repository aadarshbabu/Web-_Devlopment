const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    // res.writeHead(200, { "content-Type": "image/jpg" })// WriteHead method is use to Write Responce Head. its take more then 2 args. 1. responce code. 2. content Type and many more.
    // console.log(res.statusCode) // is use to show the responce Code.
    // let userdata = "";

    // when You try to access the Query string. in Node js. You have to menully parse the url.

    let urlobj = url.parse(req.url, true); // its return the Url obj that contin all about url. properity like path, Url , query.. query is a boject that contain all url data in key value pair...
    console.log(urlobj.query.name);
    console.log(urlobj.query.address);
    // console.log(urlobj);

    req.on('data', (chunk) => { // if node js has a data to readable strim then data Emmit call
        userdata += chunk;
        res.write(userdata);
        // console.log(userdata);
    })
    // req.pipe(res); // its handel all the method 
    req.on("end", () => { // when data is not abliable to read. or server get to responce the end call and 
        // THIS METHOD write the data. in user responce
        console.log("end");
        res.end();
    })

});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listining");
})