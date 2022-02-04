
const mongooes = require("mongoose");

const db = async () => {
    try {
        const con = await mongooes.connect("mongodb+srv://aadarsh:Aadarsh123@cluster0.2emw5.mongodb.net/Learningdb?retryWrites=true&w=majority");
        return con;
    } catch (error) {
        throw error;
    }

}

module.exports = db
