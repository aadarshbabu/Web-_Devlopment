
const { usererror } = require("../error/error");
const wraper = require("../middleware/wraperFunction");
const { Product } = require("../models/taskModel");

// Add a List from user. form user.
const addList = wraper(async (req, res, next) => {
    const { productName, productPrise, buyer, approvle, userEmail } = req.body;
    if (!productName && !productPrise && !buyer && !approvle && !userEmail) {
        return next(usererror("bad Request", 400));
    }
    const userDate = () => new Date().toString();
    const date = userDate();
    const usrRes = await Product.create({ productName, productPrise, buyer, userEmail, approvle, date });
    res.json({
        status: 200,
        msg: {
            id: usrRes._id,
            created: "sucesses",
        }
    })

});

// Update the task List

const updateList = wraper(async (req, res, next) => {
    const { id, productName, productPrise } = req.body;
    const _id = id
    if (!productName || !productPrise) {
        return next(usererror("bad Request", 400));
    }
    const update = await Product.updateOne({ _id }, { productName, productPrise, approvle: false })
    if (update.modifiedCount) {
        res.status(200).json({
            status: 200,
            msg: {
                updated: "sucesses"
            }
        })
    }
    res.status(400).json({
        status: 400,
        msg: {
            update: "unsucesses",
            err: "Data is not founded in database"
        }
    })

});


// Delete the Data from Database. // Either a query or either a json.
const deleteList = wraper(async (req, res, next) => {
    const { _id } = req.body;
    if (!_id) {
        return next(usererror("bad Request", 400));
    }
    const delList = await Product.deleteOne({ _id });
    if (delList.deletedCount) {
        return res.status(200).json({
            status: 204,
            msg: {
                deleted: "sucesses"
            }
        });
    }
    res.status(400).json({
        status: 400,
        msg: {
            deleted: "unsucesses",
            err: "Data is not founded in database"
        }
    })
});


// Get All the list in the product.
const getList = wraper(async (req, res, next) => {
    const { email } = req.params.email ? req.params : req.query;
    if (!email) {
        next(usererror("Bad request", 400));
    }
    const productList = await Product.find({ userEmail: email });
    const total = await Product.aggregate([{
        $group: {
            _id: "Total prise",
            TotalPrise: { $sum: "$productPrise" }
        }
    }]);
    res.json({ productList, total });
});


// Get aprovel.
const getAprovle = wraper(async (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        next(usererror("Bad request", 400));
    }
    const product = await Product.find({ userEmail: email, approvle: false });
    return res.json(product);
})



module.exports = {
    addList,
    updateList,
    deleteList,
    getList,
    getAprovle
}