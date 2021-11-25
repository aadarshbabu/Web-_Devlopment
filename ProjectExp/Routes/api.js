const express = require("express");
const router = express.Router();

const { getData, setTask, updateTask, deleteTask } = require("../controllers/Controller")

// Router is a way to handel the GET POST PUT PATCH DELETE request.
// This is the way to handel the route.

// Method chaning. This route is handel two request 1. GET, 2.POST
router.route("/").get(getData).post(setTask);
router.route("/:id").patch(updateTask).delete(deleteTask)




module.exports = router;