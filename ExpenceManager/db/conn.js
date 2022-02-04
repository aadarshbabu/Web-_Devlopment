
const mongoose = require("mongoose");
async function connection() {

    const con = await mongoose.connect("y");

    if (con) {
        console.log("connected");
    } else {
        console.log("not connected.")
    }

}

module.exports.connection = connection;
