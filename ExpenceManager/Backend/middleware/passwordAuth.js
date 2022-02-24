const bcrypt = require("bcrypt");


async function passwordhash(next) {
    const salt = 10;
    this.password = await bcrypt.hash(this.password, salt);
    next();
}

async function passwordVerify(userDetails, userpassword) {
    try {
        const { password } = userDetails;
        const valid = await bcrypt.compare(userpassword, password);
        console.log(valid);
        if (valid) {
            return true
        }
        return false;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    passwordhash,
    passwordVerify
}