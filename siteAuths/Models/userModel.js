const mongoose = require("mongoose");
const { pwdHash } = require("../Middleware/pwdHash");
const { createToken } = require("../Middleware/auth")

const userSchema = mongoose.Schema({

    fullname: {
        type: String,
        maxlength: 15,
        require: [true, "Name must be provided"],
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        maxlength: 30,
        require: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
    },
    phone: {
        type: Number,
        require: true,
        trim: true,
        validate(value) {
            return String(value).length == 10;
        },

    },
    password: {
        type: String,
        require: [true, "password must be Provided."]
    },
    session: [
        {
            type: Object,
            require: true

        }
    ]



});



userSchema.pre("save", createToken)

userSchema.pre("save", pwdHash); // this is middleware function in mongooes schema.. this pdwHash run before saving the data in database;

const User = mongoose.model("User", userSchema);
module.exports = User;