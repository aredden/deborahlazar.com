
var AWS = require('aws-sdk');
var fs = require('fs');
AWS.config={ "accessKeyId": "AKIAJL4S44H4SUVYJDUQ", "secretAccessKey": "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", "region": "us-east-1" };
var s3 = new AWS.S3({apiVersion: '2006-03-01'});
var docClient = new AWS.DynamoDB.DocumentClient();

export function getPaintingsList(cb){
  var bucketParams = {
     Bucket : "deb-lazar-images"
  };
  var albumBucketName = 'deb-lazar-images';
    s3.listObjects(bucketParams, function(err, data) {
      if (err) {
        console.log(err);
        return alert('There was an error viewing your album: ' + err.message);

      }
      // `this` references the AWS.Response instance that represents the response
      var href = this.request.httpRequest.endpoint.href;
      var bucketUrl = href + albumBucketName + '/';
      cb(data.Contents.map(function(photo) {
        var photoKey = photo.Key;
        var photoUrl = bucketUrl + encodeURIComponent(photoKey);
        return photoUrl;
      }))
  });
}

function b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

      var blob = new Blob(byteArrays, {type: contentType});
      return blob;
}

function putpaintinghelper(files,painting){
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  if (!files.length) {
    return alert('Please choose a file to upload first.');
  }
  var fileName = painting.name;
  var file = files[0];
  var albumName = 'deb-lazar-images';
  var albumPhotosKey = encodeURIComponent(albumName) + '//';
  var photoKey = albumPhotosKey + fileName;
  s3.upload({
    Key: photoKey,
    Body: file,
    ACL: 'public-read',
    Bucket: albumName
  }, function(err, data) {
    if (err) {
      console.log(err);
      return alert('There was an error uploading your photo: ', err);
    }
    alert('Successfully uploaded photo.');
  });
}

export function putPainting(painting,cb){
var preview = document.querySelector('img');
var file    = document.querySelector('input[type=file]').files[0];
var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
    var files = [b64toBlob(preview.src.substring(23,preview.src.length))];
    putpaintinghelper(files,painting)
  }, false);
  if (file) {
    reader.readAsDataURL(file);
  }
}
