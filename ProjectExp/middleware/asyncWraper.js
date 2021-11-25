

// it is a middilewere its handel a try catch block..



let asycnWraper = (fn) => {
    return async (req, res, next) => {

        try {
            fn(req, res, next);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = asycnWraper;