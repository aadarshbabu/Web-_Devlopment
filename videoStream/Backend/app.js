const express = require("express");
const app = express();
const fs = require("fs");

const video = './videos/video.mp4';
const videosize = fs.statSync(video).size;


app.get("/video", (req, res) => { // video end point .

    let range = req.headers.range; // Its take the video range.
    if (!range)
        range = "1"; // when range is not spicify put the value.

    const chunkSize = 1 * 1e+6;  // What amount data load or Tranfer the server.

    const start = Number(range.replace(/\D/g, '')); // replace - and change range value to integer.

    const end = Math.min(start + chunkSize, videosize - 1);
    // videosize-1 or start + chunkSize . it return the min value. if start and chunkSize of the video is larger the videosize byte. then its return the video size.

    const contentLength = end - start + 1;  // Its decide the how many Byte length content Transfer. through internet.


    // http res header. bcz clint re request the server.
    const headers = {
        // "Content-Range": `bytes ${start}-${end}/${videosize}`,

        "Content-Range": `bytes ${start}-${end}/${videosize}`,
        "Content-Length": contentLength,
        "Accept-Ranges": "bytes",
        "Content-Type": "video/mp4"
    }


    res.writeHead(206, headers) // 206 status code is show the content is partials. 
    const stream = fs.createReadStream(video, { start, end }); // read the data in file. create a readable file stream.
    stream.pipe(res) // this method create a pipeline between server and clint.
    // its take a responce obj. and sent the request. automatically.

});




// Server is listning port. 3000
app.listen(3000, (e) => {
    console.log("port is renning is 3000")
})