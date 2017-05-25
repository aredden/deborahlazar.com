var express = require("express");
var bodyParser = require("body-parser");
var https = require("https");
var fs = require("fs");
var mongo_express = require("mongo-express/lib/middleware");
var mongo_express_config = require("mongo-express/config.default.js");

var app = express();

var MongoDB = require("mongodb");


var MongoClient = MongoDB.MongoClient;
var ObjectID = MongoDB.ObjectID;
Grid = MongoClient.Grid;
var url = 'mongodb://localhost:27017/dlazar-data';
MongoClient.connect(url, function(err, db) {

  app.use(bodyParser.text());
  app.use(bodyParser.json());
  app.use(express.static("../client/build"));
  app.use("/mongo_express", mongo_express(mongo_express_config));

  app.put("/addpainting/:name/:desc",function(req,res){
    var userid = getUserIdFromToken(req.get("Authorization"));
    name = req.params.name;
    desc = req.params.desc;
    img = req.body.preview;
    console.log(img);

})


  function sendDatabaseError(res, err) {
    res.status(500).send("A database error occurred: " + err);
  }


  function getUserIdFromToken(authorizationLine) {
     try {
       // Cut off "Bearer " from the header value.
       var token = authorizationLine.slice(7);
       // Convert the base64 string to a UTF-8 string.
       var regularString = new Buffer(token, "base64").toString("utf8");
       // Convert the UTF-8 string into a JavaScript object.
       var tokenObj = JSON.parse(regularString);
       var id = tokenObj["id"];
       // Check that id is a string.
       if (typeof id === "string") {
         return id;
       } else {
         // Not a number. Return "", an invalid ID.
         return "";
       }
     } catch (e) {
       // Return an invalid ID.
       return -1;
     }
   }

  app.listen(3000, function() {
  console.log("Listening on port 3000");
})
});
