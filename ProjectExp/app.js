
const express = require('express')
const app = express();
require('dotenv').config();

// require the Api root.
const routeApi = require("./Routes/api");

const port = process.env.port || 3000;
// when you use the midileware you must to be export the "router" module.

//MidileWare
app.use(express.json());
app.use(express.static("./public"));


//routes.
app.use("/api/v1/", routeApi);



app.listen(port, () => {
    console.log(`App is runnign in port ${port} `)
});

