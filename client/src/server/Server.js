
var AWS = require('aws-sdk');
var fs = require('fs');
AWS.config={ "accessKeyId": "AKIAJ36ILXF4K753ZA6Q", "secretAccessKey": "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", "region": "us-east-1" };
var s3 = new AWS.S3({apiVersion: '2006-03-01'});
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-8-10'})
import {getPaintings} from './getpaintings.js';
import {putpainting} from './putpainting.js';
import {putnewuser} from './putnewuser.js';
import {loginuser} from './loginuser.js';
import {signUpNewUser} from './cognito-signup.js';

export function getPaintingsList(cb){
  getPaintings(cb,s3)
}

export function putPainting(painting,name,desc,med,price,category,date,number,cb){
  putpainting(painting,name,desc,med,price,category,date,number,cb,s3,dynamodb,fs);
}

export function putNewUser(fname,lname,email,email2,phone,pass,pass2){
  if(pass!=pass2){
    return alert('passwords do not match!');
  }
  if(email!=email2){
    return alert('emails do not match!');
  }
  signUpNewUser(fname,lname,email,phone,pass);
}

export function loginUser(user,pass){
  loginuser(user,pass,dynamodb);
}

export function authenticate(user,code){

}
