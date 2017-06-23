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
var cognito = require('./cognito-signup.js');


  app.use(bodyParser.text());
  app.use(bodyParser.json());
  app.use(express.static("../client/build"));

  function sendDatabaseError(res, err) {
    res.status(500).send("A database error occurred: " + err);
  }

  app.put("/newuser/",function(req,res){
    var info = req.body;
    cognito.signUpNewUser(info.fname,info.lname,info.email,info.phone,info.pass,
      (outcome)=>{res.send(outcome)}
    )
  });

  app.post("/authenticate/"),function(req,res){
    var info = req.body;
    cognito.authenticateUser(info.user,info.code,(result)=>{
       res.send(result);
    })
  }

  app.get("/paintings/", function(req,res){
    GetPaintings.getPaintings(
      (paintings)=>{res.send(paintings)}
      ,s3);
  });

  app.put("/login/", function(req,res){
    var info = req.body;
    cognito.loginuser(info.user,info.pass,AWS,
      (outcome,response,name)=>{res.send([outcome,response,name])}
    )
    }
  )

  app.listen(3000, function() {
  console.log("Listening on port 3000");
})
