class customApiError extends Error {

    constructor(msg, code) {
        supper(msg);
        this.statusCode = code;
    }

};

const customerror = (msg, code) => {
    return new customApiError(msg, code);
}

module.exports = {
    customApiError,
    customerror,
}