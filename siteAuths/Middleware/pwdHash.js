const bcrypt = require("bcrypt");
const async = require("hbs/lib/async");


const pwdHash = async function (next) {

    this.password = await bcrypt.hash(this.password, 10);
    next();
}

// passwordVerify section compare a hash password to user password.
const passwordVerify = async function (userpassword, dbhash) {

    let { password } = dbhash;

    return await bcrypt.compare(userpassword, password);

}


module.exports = {
    pwdHash,
    passwordVerify,
}



