// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var tableRes = [];
var waitList = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/reserve.html"));
});

app.post("/api/tables", function(req, res) {
  //console.log(req.body)
  const newTable = req.body;
  if(tableRes.length < 5){
    tableRes.push(newTable);
  }
  else{
    waitList.push(newTable);
  }
  //console.log(tableRes)
  res.json(newTable);
});

app.get("/api/tables", function(req, res) {
  res.json(tableRes);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
