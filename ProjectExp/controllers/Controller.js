const con = require("../db/conn");
let models = require("../models/models");
let asycnWraper = require('../middleware/asyncWraper');

// This controler is get data into database.
let getData = asycnWraper(async (req, res) => {

    let resp = (data) => {
        res.status(200).json({ data });
    }
    await models.alldata(resp);

})

let setTask = async (req, res) => {
    try {

        const { task, iscomplicted } = res.body;
        console.log(res.body);
        console.log(res.param);
        let result = await models.setTask("This is my task", false);

    } catch (error) {
        res.status(500).json({ error });
    }
}
let updateTask = (req, res) => {
    res.status(200).json({ id: true, password: "updated" })
}
let deleteTask = (req, res) => {
    res.status(201).json({ id: 233, msg: "SucessFully Deleted." })
}

module.exports = {
    getData,
    setTask,
    updateTask,
    deleteTask,
}