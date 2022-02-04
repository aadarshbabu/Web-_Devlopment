const port = 3000;
const express = require("express");
const app = express();
const route = require("./Routes/route");
const db = require("./db/config");
const errorHandlerMiddleware = require("./Middleware/errorhandler");


app.use(errorHandlerMiddleware);

app.use(express.json())
app.use("/api/v1/", route)




app.listen(port, (err) => {
    console.log(`port is running in port: ${port}`)
    if (db()) {
        console.log("Database connection sucessfull");
    }
})

