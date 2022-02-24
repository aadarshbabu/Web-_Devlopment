const validator = require("validator");
const { usererror } = require("../error/error");

function validate(email, password, repassword) {
    const validEmail = validator.isEmail(email);
    const equalPassword = validator.equals(password, repassword);
    const strongPassword = validator.isStrongPassword(password);
    if (validEmail && equalPassword && strongPassword) {
        return true;
    }
    return { validEmail, equalPassword, strongPassword };

}

const uservalidator = (req, res, next) => {

    const { email, password, repassword } = req.body;
    const valid = validate(email, password, repassword);
    if (valid === true) {
        return next();
    }
    else if (!valid.validEmail) {
        next(usererror("Email is not valid", 400));
    }
    else if (!valid.equalPassword) {
        next(usererror("User Email / password is not valid", 400));

    }
    else if (!valid.strongPassword) {
        next(usererror("Email or Password is not valid", 400));
    }

}

module.exports = uservalidator