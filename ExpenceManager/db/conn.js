
const mongoose = require("mongoose");
async function connection() {

    const con = await mongoose.connect("mongodb+srv://aadarsh:Aadarsh123@cluster0.2emw5.mongodb.net/ExpenceManager?retryWrites=true&w=majority");

    if (con) {
        console.log("connected");
    } else {
        console.log("not connected.")
    }

}

module.exports.connection = connection;
