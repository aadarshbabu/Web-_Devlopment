require("dotenv").config()
const mongoose = require("mongoose");

async function connection() {

    const con = await mongoose.connect(process.env.DBCONFIG);

    if (con) {
        console.log("connected");
    } else {
        console.log("not connected.")
    }

}

module.exports.connection = connection;
