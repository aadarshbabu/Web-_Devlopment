// Middleware Funcion.
const { promise } = require("bcrypt/promises");
const jwt = require("jsonwebtoken");
require("dotenv").config

const userauth = (req, res, next) => {
    try {
        const { secret } = req.cookies;
        jwt.verify(secret, process.env.Secret);
        next();
    } catch (error) {
        res.redirect('/login');
    }
}



function createToken() {
    const secret = jwt.sign({ id: this._id }, process.env.Secret);
    console.log(this.session);
    this.session.push({ secret });

}

module.exports.userauth = userauth;
module.exports.createToken = createToken;
