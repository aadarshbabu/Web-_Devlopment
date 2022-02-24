
const express = require("express");
const { get } = require("express/lib/response");
const Router = express.Router();
const { login, register, usersEmail } = require("../controller/authController");
const uservalidator = require("../middleware/validator");

Router.route("/login").post(login);
Router.route("/register").get().post(uservalidator, register);
Router.route("/getEmails").get(usersEmail)



module.exports = { authRouter: Router }; // 