var express = require("express");
var bodyParser = require("body-parser");
var https = require("https");
var fs = require("fs");
var app = express();

  app.use(bodyParser.text());
  app.use(bodyParser.json());
  app.use(express.static("../client/build"));

  function sendDatabaseError(res, err) {
    res.status(500).send("A database error occurred: " + err);
  }

  app.listen(3000, function() {
  console.log("Listening on port 3000");
})
