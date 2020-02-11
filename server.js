var express = require("express");
var app = express();

var cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); 

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// app.get("/api/hello", function(req, res) {
//   res.json({ greeting: "hello API" });
// });

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
    res.json({ unix: req.params.date, utc: new Date(req.params.date) });
  } else {
    res.json({ unix: date.getTime(), utc: date.toUTCString() });
  }
});

app.get("/api/timestamp", (req, res) => {
  var date = new Date();
  res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

//listen for requests 
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
