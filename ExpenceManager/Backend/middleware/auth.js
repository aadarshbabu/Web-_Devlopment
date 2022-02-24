const res = require("express/lib/response");
const jwt = require("jsonwebtoken");
const { usererror } = require("../error/error");
require("dotenv").config()

const verifyToken = (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return next(usererror("Unauthenticated access!", 401));
    }
    try {
        const verify = jwt.verify(token, process.env.SECRET);
        if (verify) {
            next();
        }
    } catch (error) {
        return next(usererror(error, 400))
    }

}

function createToken(email) {
    try {
        return jwt.sign(email, process.env.SECRET);
    } catch (error) {
        res.next(usererror("Something went Wrong", 500));
    }
}


module.exports = {
    createToken,
    verifyToken
}