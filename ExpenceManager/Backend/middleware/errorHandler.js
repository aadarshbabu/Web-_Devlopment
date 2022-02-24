
const { customError } = require("../error/error");
const errorHandler = (err, req, res, next) => {
    if (err instanceof customError) {
        return res.status(err.status).json({ msg: err.message, status: err.status })
    }
    res.status(500).json({ msg: "Internal Server error", status: 500 });
}

module.exports = errorHandler