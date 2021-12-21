
class userError extends Error {
    constructor(msg, status) {
        super(msg);
        this.status = status;
    }

};

function customError(msg, status) {
    return new userError(msg, status)
}

module.exports = {
    userError,
    customError,
}