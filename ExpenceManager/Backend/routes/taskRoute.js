const express = require("express");
const Router = express.Router();
const { verifyToken } = require("../middleware/auth");
const { addList, updateList, deleteList, getList, getAprovle } = require("../controller/taskController");

//Add Product API Route.

Router.route("/addlist").post(verifyToken, addList);

Router.route("/updateList").put(verifyToken, updateList);

Router.route("/deleteList").delete(verifyToken, deleteList);
Router.route("/getList").get(verifyToken, getList);
Router.route("/getList/:email").get(verifyToken, getList);

Router.route("/getAprovle").get(verifyToken, getAprovle);


module.exports = {
    taskRouter: Router
}