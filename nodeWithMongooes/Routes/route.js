
const express = require("express");

const router = express.Router();

const { getdata, setdata } = require("../Controllers/controller")


router.route("/").get(getdata).post(setdata)






module.exports = router;
