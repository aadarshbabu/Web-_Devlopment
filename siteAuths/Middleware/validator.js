const { customError } = require("../errors/errors")
const validator = require("validator");

let validate = (email, password, repassword) => {
    const validEmail = validator.isEmail(email);
    const pass = validator.equals(password, repassword);
    const StrongPass = validator.isStrongPassword(password);
    console.log(validEmail, pass, StrongPass)
    if (validEmail && pass && StrongPass)
        return true;

    return { validEmail, pass, StrongPass };

}

function Validator(req, res, next) {

    const { email, password, repassword } = req.body;
    let valid = validate(email, password, repassword);
    if (valid) {
        return next();
    }
    else if (!valid.validEmail)
        next(customError("Please check Your Email its not valid", 500));
    else if (!valid.pass)
        next(customError("Your Password is not match.", 500));
    else if (!valid.StrongPass)
        next(customError("Your Passowrd is not Strong", 500));
}
module.exports = Validator;