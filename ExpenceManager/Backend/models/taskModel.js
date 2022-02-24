
const mongoose = require("mongoose");


const schema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productPrise: {
        type: Number,
        required: true
    },
    buyer: {
        type: String,
        required: true
    },
    approvle: {
        type: Boolean,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }

}, { timestamps: true })

const Product = mongoose.model("Product", schema);

module.exports = {
    Product,
}