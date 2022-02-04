
const express = require("express");
const Router = express.Router();
const { login, register } = require("../controller/authController");

Router.route("/login").get(login);
Router.route("/register").post(register);




module.exports = { authRouter: Router }; // 