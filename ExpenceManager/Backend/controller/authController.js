// controller is use to application.
const User = require("../models/authModel");
const { passwordhash, passwordVerify } = require("../middleware/passwordAuth")
const wraper = require("../middleware/wraperFunction");
const { usererror } = require("../error/error");
const { createToken } = require("../middleware/auth");
const { use } = require("bcrypt/promises");

const login = wraper(async (req, res, next) => {
    const { email, password, ispattner } = req.body;
    // check the userId and password if doesnot exist then send bad request.
    if (!email || !password) {
        next(usererror("Bad request", 400));
    }

    // if pattner login then run this code.
    if (ispattner) {
        const userDetails = await User.findOne(
            { email, ispattner, },
            { name: 1, email: 1, password: 1, token: 1, pattnerUserEmail }
        );
        // userDetails object contin about name, email, password, and token
        const validUser = await passwordVerify(userDetails, password);
        if (validUser) {
            const { _id, name, email, token, pattnerUserEmail } = userDetails;
            return res.json({
                statusCode: 200,
                status: "sucesses", msg: {
                    id: _id,
                    name,
                    email,
                    token,
                    pattnerUserEmail
                }
            });
        }
        else {
            next(usererror("Invalid user Id or password", 400));
        }
    }
    // if user is not a pattner user.
    else {
        const userDetails = await User.findOne({ email }, { email: 1, password: 1, token: 1, name: 1 });

        if (userDetails) {
            const validUser = await passwordVerify(userDetails, password);
            if (validUser) {
                const { _id, name, email, token } = userDetails;
                res.json({
                    statusCode: 200,
                    status: "sucesses", msg: {
                        id: _id,
                        name,
                        email,
                        token
                    }
                });
            }
        }
        else {
            next(usererror("Invalid user Id or password", 400));
        }
    }

});


// User Register Section.
const register = wraper(async (req, res, next) => {

    const { ispattner, email } = req.body;
    const token = createToken(email);
    req.body.token = token;
    if (ispattner) {
        const { pattnerUserEmail, username, name, email, phone, password, token, ispattner } = req.body;
        if (!pattnerUserEmail || !username || !name || !email || !phone || !password) {
            return next(usererror("Bad Request", 400));
        }

        const resp = await User.create(
            {
                pattnerUserEmail,
                username,
                name,
                email,
                phone,
                password,
                token,
                ispattner
            });
        if (resp._id) {
            return res.json({ status: 200, msg: { register: "sucesses" } });
        }
        next(usererror("Somthing went wrong", 500));
    }
    else {
        let resp = await User.create(req.body);
        if (resp)
            res.json({ status: 200, msg: { register: "sucesses" } });
    }
});



const usersEmail = wraper(async (req, res, next) => {
    const { email } = req.body;
    const emails = await User.find({ $or: [{ pattnerUserEmail: email }, { email: email }] }, { email: 1, _id: 0 });
    res.send(emails);
});

module.exports = {
    login,
    register,
    usersEmail
}

