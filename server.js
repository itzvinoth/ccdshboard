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
app.use("/app.min.js", express.static("./app.min.js"))

// Serve root
app.get("/*", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});
