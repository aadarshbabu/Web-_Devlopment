const port = process.env.port || 3000;
const hbs = require("hbs");
const express = require("express");
const app = express();

// require a path module in node.
const path = require("path")
// path module. its use to create a abslute path.
const views = path.join(__dirname, "/templates/views");
const partial = path.join(__dirname, "/templates/partials");

// add the static folder in express
app.use(express.static("public"))

// if you want to use a diffrent view engine. first you set the view engine.
app.set('view engine', 'hbs');

// hbs.registerpartials() is use to register a partials folder in the expresss.
hbs.registerPartials(partial);

//defint a view path. 
app.set('views', views);

hbs.registerHelper('lowercase', function (str) {
    if (str && typeof str === "string") {
        return str.toLowerCase();
    }
    return "no conversion";
});

//request responce
// You can pass the data into Javascript object format. 
// obj is the key. in js object.
app.get('/', (req, res) => {
    res.render('index', {
        p1: {
            name: "AadarshSingh",
            home: "aurangabad",
            class: "BCA"
        }
    })
})

app.get("*", (req, res) => {
    res.render('error')
})

app.listen(port, () => {
    console.log(`Host is running is port ${port}`);
})