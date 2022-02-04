


const { student } = require("../Models/model");
const wraperfunc = require("../Middleware/wraperFunction")

let getdata = wraperfunc(async (req, res) => {

    let data = await student.find({});
    res.json(data);
})


let setdata = wraperfunc(async (req, res, next) => {
    let responce = await student.create(req.body);

    res.json(responce);
    console.log(responce);
});


module.exports = {
    getdata,
    setdata,
}
