const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { connection } = require("./db/conn");
const { authRouter } = require("./routes/authRoute");
const { taskRouter } = require("./routes/taskRoute");
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(express.json());
app.use("/api/v0/auth", authRouter);
app.use("api/v0/task", taskRouter);

app.listen(port, () => {
    console.log("Server is listning..");
    connection();
})