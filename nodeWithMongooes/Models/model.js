const mongooes = require("mongoose");

const studentmodel = mongooes.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Name must be spicify"],
        trim: true,
        maxlength: [220, "name can not be greter the 22 charector."],
        minlength: [2, "Name must be 2 charector long"]

    },
    phone: { type: Number, default: 123456 },
    data: { type: Date, default: Date.now() }

});

const student = mongooes.model("Student", studentmodel);



module.exports = {
    student,
}
