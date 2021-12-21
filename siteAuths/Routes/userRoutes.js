const express = require("express");
const Router = express.Router();
const { indexPage, userLogin, userRegistration, logout } = require("../Controllers/usersController")
const Validator = require("../Middleware/validator");
const { userauth } = require("../Middleware/auth");

Router.route("/").get(userauth, indexPage);

Router.route("/logout").get(logout);

Router.route("/login").get(userLogin).post(userLogin)
Router.route("/register").get(userRegistration).post(Validator, userRegistration);

module.exports = Router;