
const { userError } = require("../errors/errors")

function errorsHandler(err, req, res, next) {

    if (err instanceof userError)
        res.status(err.status).json({ msg: err.message, status: err.status });

    res.status(500).json({ msg: "internal Server Error" });

}


module.exports = errorsHandler;

