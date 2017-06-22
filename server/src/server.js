var express = require("express");
var bodyParser = require("body-parser");
var https = require("https");
var fs = require("fs");
var app = express();

var AWS = require('aws-sdk');
var fs = require('fs');
AWS.config={ "accessKeyId": "AKIAJ36ILXF4K753ZA6Q", "secretAccessKey": "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", "region": "us-east-1" };
var s3 = new AWS.S3({apiVersion: '2006-03-01'});
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-8-10'})
var GetPaintings = require('./getpaintings.js');
var putpainting = require('./putpainting.js');

// import {getPaintings} from './getpaintings.js';
// import {putpainting} from './putpainting.js';
// import {loginuser} from './cognito-signup.js';
// import {signUpNewUser} from './cognito-signup.js';
// import {authenticateUser} from './cognito-signup.js';


  app.use(bodyParser.text());
  app.use(bodyParser.json());
  app.use(express.static("../client/build"));

  function sendDatabaseError(res, err) {
    res.status(500).send("A database error occurred: " + err);
  }


  app.get("/paintings/", function(req,res){
    GetPaintings.getPaintings(
      (paintings)=>{res.send(paintings)}
      ,s3);
  });


  app.listen(3000, function() {
  console.log("Listening on port 3000");
})
