const { passwordhash } = require("../middleware/passwordAuth")
const mongoose = require("mongoose");
const schema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    pattners: {
        type: Array,
        patner: {
            username: {
                type: String,
                require: true
            },
            name: {
                type: String,
                require: true
            },
            email: {
                type: String,
                require: true
            },
            password: {
                type: String,
                require: true
            },
            ispatner: {
                type: Boolean,
                require: true
            }
        }

    }
});


schema.pre("save", passwordhash);
const User = mongoose.model("User", schema);
module.exports = User