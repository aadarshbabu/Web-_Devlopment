const { customApiError } = require("../errors/customerror")

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof customApiError) {
        res.status(err.statusCode).json(err.message);
    }
    res.status(500).json({ msg: "Something went wrong" })
}

module.exports = errorHandlerMiddleware;