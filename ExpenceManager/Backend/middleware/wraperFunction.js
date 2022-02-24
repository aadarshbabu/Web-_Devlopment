const { usererror } = require("../error/error");
const wraper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            next(usererror("Bad Request", 400))
        }

    }
}

module.exports = wraper;
