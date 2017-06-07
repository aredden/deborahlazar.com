
export function getPaintings(cb,s3){
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
