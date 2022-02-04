const { WriteError } = require("mongoose/node_modules/mongodb")

let wraperFunction = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            next(error);
        }

    }
}


module.exports = wraperFunction;