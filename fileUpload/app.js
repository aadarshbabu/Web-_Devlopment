const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");

// uuid is a library to create a unique id.
const uuid = require("uuid");
// v4 is a function for uuid object. v4: uid is a renaming convension.
const { v4: uid } = uuid;


app.use(express.static("public"));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, "./data");
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname)
        cb(null, uid() + file.originalname + ext);
    }
});

const upload = multer({ storage }); //

const middleware = upload.single("avatar"); //

app.get("/", (req, res) => {

    res.send("hello word")
})


app.post("/image", (req, res) => {

    middleware(req, res, () => {
        res.send("data print")
    });


})

app.listen(3000, () => {
    console.log("Port is listning....")
})