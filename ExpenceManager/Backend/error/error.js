
class customError extends Error {
    constructor(msg, status) {
        super(msg);
        this.status = status;
    }
}

function usererror(msg, status) {
    return new customError(msg, status)
}

module.exports = {
    usererror,
    customError
}