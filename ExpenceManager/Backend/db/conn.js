require("dotenv").config()
const mongoose = require("mongoose");

async function connection() {

<<<<<<< HEAD:ExpenceManager/Backend/db/conn.js
    const con = await mongoose.connect(process.env.DBCONFIG);
=======
    const con = await mongoose.connect("y");
>>>>>>> 08a471ff97ecde581849e9e363a6125ccc601f23:ExpenceManager/db/conn.js

    if (con) {
        console.log("connected");
    } else {
        console.log("not connected.")
    }

}

module.exports.connection = connection;
