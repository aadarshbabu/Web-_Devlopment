const bcrypt = require("bcrypt");
const verifypassword = (req, res, next) => {



}

const passwordhash = async (next) => {

    this.password = await bcrypt.hash(this.password, 10);
    next();

}

module.exports = {
    verifypassword,
    passwordhash
}