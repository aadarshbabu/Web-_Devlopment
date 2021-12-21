require("./db/config"); // require a database files.
require("dotenv").config;
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const routes = require("./Routes/userRoutes");
const path = require("path");
const hbs = require('hbs')
const errorsHandler = require("./Middleware/errorHandler");
const cookieParser = require("cookie-parser");


const staticPath = path.join(__dirname, "Public");
const Views = path.join(__dirname, "views");
const partialsPath = path.join(__dirname, "/views/partials")


app.set('view engine', 'hbs');
app.set("views", Views);
hbs.registerPartials(partialsPath);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(staticPath));
app.use(routes);
app.use(errorsHandler);


app.listen(port, () => {
    console.log(`Server is running in pror ${port}`)
});









