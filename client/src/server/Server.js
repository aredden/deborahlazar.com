
var AWS = require('aws-sdk');
var fs = require('fs');
AWS.config={ "accessKeyId": "AKIAJL4S44H4SUVYJDUQ", "secretAccessKey": "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", "region": "us-east-1" };
var s3 = new AWS.S3({apiVersion: '2006-03-01'});
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-8-10'})
import {getPaintings} from './getpaintings.js';
import {putpainting} from './putpainting.js';

export function getPaintingsList(cb){
  getPaintings(cb,s3)
}

export function putPainting(painting,name,desc,med,price,category,date,number,cb){
  putPainting(painting,name,desc,med,price,category,date,number,cb,s3,dynamodb,fs);
}
