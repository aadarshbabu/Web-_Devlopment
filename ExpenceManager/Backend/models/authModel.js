const { passwordhash } = require("../middleware/passwordAuth")
const mongoose = require("mongoose");

const schema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    pattnerUserEmail: {
        type: String,
        lowercase: true,
        trim: true
    },
    ispattner: {
        type: Boolean
    }
});


schema.pre("save", passwordhash);
const User = mongoose.model("User", schema);
module.exports = User