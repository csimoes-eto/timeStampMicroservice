// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function(req, res) {
  res.json({ greeting: "hello API" });
});

//get timestamp
app.get("/api/timestamp/:date", function(req, res) {
  var date = new Date(req.params.date);
  if (
    date.toString() == "Invalid Date" &&
    /\d{13}/.test(req.params.date.toString()) == false
  ) {
    res.json({ error: "Invalid Date" });
  } else if (/\d{13}/.test(req.params.date.toString())) {
    console.log(req.params.date, date)
    ///not working///////////////
    res.json({ unix: req.params.date, utc: new Date(req.params.date) });
    ////////////
  } else {
    res.json({ unix: date.getTime(), utc: date.toUTCString() });
  }
});

app.get("/api/timestamp", (req, res) => {
  var date = new Date();
  res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
