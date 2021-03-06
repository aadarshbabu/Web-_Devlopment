const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const { connection } = require("./db/conn");
const { authRouter } = require("./routes/authRoute");
const { taskRouter } = require("./routes/taskRoute");
const errorHandler = require("./middleware/errorHandler");
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(express.json());
app.use("/api/v0/auth", authRouter);
app.use("/api/v0/task", taskRouter);
app.use(errorHandler);
app.listen(port, () => {
    console.log("Server is listning..", port);
    connection();
})