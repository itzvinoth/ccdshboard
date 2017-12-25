var express = require("express");

// Init app
var port = 3000;
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Serve static assets
app.use("/dist", express.static("./dist"))

// API's
/*var User = require("./user");

app.get("/api/users", (req, res) => {
    User.find({}).exec(function(err, users) {
        if (err) {
            res.send("No users found")
        } else {
            res.json(users);
        }
    })
});*/



// Serve root
app.get("/*", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});
