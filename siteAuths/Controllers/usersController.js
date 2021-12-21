const pwdHash = require("../Middleware/pwdHash");
const { customError } = require("../errors/errors")
const user = require("../Models/userModel");
const { application } = require("express");
const { passwordVerify } = require("../Middleware/pwdHash");


// Get Requests Index page..
const indexPage = (req, res) => {
    res.render("index");
}

const logout = (req, res) => {
    try {
        res.clearCookie('secret');
        res.redirect("/login");
    } catch (error) {
        console.log(error)
    }

}

//Post or GET Request User Login page.
const userLogin = async (req, res, next) => {

    if (req.method == "GET") {
        res.render("login");
        return true;
    }

    // if UserLogin Get Post Request. 

    try {
        let { email, password } = req.body;
        let hash = await user.findOne({ email }, { password: 1, session: 1, _id: 0 });
        const [secret] = hash.session;
        let verify = await passwordVerify(password, hash);
        if (verify) {
            res.cookie('secret', secret.secret);
            return res.render("index");
        }
        next(customError("User and password is Invalid", 401))
    } catch (error) {
        next(customError("Email does Not exist Plese Register", 501))
    }

}


// Post and GET request in userRegistration Page.
const userRegistration = async (req, res, next) => {

    if (req.method == "GET") {
        res.render("register");
        return true;
    }

    // Below line of code. is run after Post request
    try {
        let resp = await user.create(req.body);
        res.status(200).json(resp);
    } catch (error) {
        next(customError(error, 500))
    }


}


module.exports = {
    indexPage,
    userLogin,
    userRegistration,
    logout,
}