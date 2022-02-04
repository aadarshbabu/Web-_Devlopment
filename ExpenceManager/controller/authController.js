// controller is use to application.
const { param } = require("express/lib/request");
const User = require("../models/authModel");
const login = async (req, res) => {
    res.send({ "hello": "aadarsh" })
}

const register = async (req, res) => {

    const parentuser = req.body.parentuser;
    if (parentuser) {
        let resp = await User.findOneAndUpdate({ username: parentuser }, { $push: { pattners: req.body } });
        res.send(resp);
    }
    else {
        let resp = await User.create(req.body);
        res.send(resp);
    }

}

module.exports = {
    login,
    register,
}

