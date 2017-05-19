var express = require("express");
var bodyParser = require("body-parser");
var https = require("https");

var mongo_express = require("mongo-express/lib/middleware");
var mongo_express_config = require("mongo-express/config.default.js");

var app = express();

var MongoDB = require("mongodb");

var MongoClient = MongoDB.MongoClient;
var ObjectID = MongoDB.ObjectID;

var url = 'mongodb://localhost:27017/dlazar-data';
MongoClient.connect(url, function(err, db) {

  app.use(bodyParser.text());
  app.use(bodyParser.json());
  app.use(express.static("../client/build"));
  app.use("/mongo_express", mongo_express(mongo_express_config));


  function sendDatabaseError(res, err) {
    res.status(500).send("A database error occurred: " + err);
  }

  app.listen(3000, function() {
  console.log("Listening on port 3000");
})
});
