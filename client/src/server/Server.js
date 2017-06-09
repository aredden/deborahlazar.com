
var AWS = require('aws-sdk');
var fs = require('fs');
AWS.config={ "accessKeyId": "AKIAIOV2CKTOPBPRITSA", "secretAccessKey": "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", "region": "us-east-1" };
var s3 = new AWS.S3({apiVersion: '2006-03-01'});
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-8-10'})
import {getPaintings} from './getpaintings.js';
import {putpainting} from './putpainting.js';
import {putnewuser} from './putnewuser.js';

export function getPaintingsList(cb){
  getPaintings(cb,s3)
}

export function putPainting(painting,name,desc,med,price,category,date,number,cb){
  putpainting(painting,name,desc,med,price,category,date,number,cb,s3,dynamodb,fs);
}

export function putNewUser(fname,lname,email,email2,phone,pass,pass2){
  putnewuser(fname,lname,email,email2,phone,pass,pass2,dynamodb);
}
