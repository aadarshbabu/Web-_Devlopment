const mongoose = require("mongoose");
require("dotenv").config();

let dbconnection = async () => {
    try {
        let con = await mongoose.connect(process.env.CON_URI);
        if (con) {
            console.info("DB connection Sucessfull")
        }
    } catch (error) {
        console.log(error)
    }

}

dbconnection();

module.exports = dbconnection;