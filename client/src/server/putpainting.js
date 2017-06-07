
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

function dynamoPutPainting(name,desc,med,price,category,date,painting,number,dynamodb){
  debugger;
    number = number.toString();
    var params = {
      Item:{
          "id": {
            S:number
          },
          "name": {
            S:name
          },
          "description": {
            S:desc
          },
          "category": {
            S:category
          },
          "medium": {
            S:med
          },
          "date": {
            S:date
          },
          "filename": {
            S:painting.name
          },
          "sold": {
            BOOL: false,
          },
          "price": {
            N: price.toString()
          }
        },
      ReturnConsumedCapacity:"TOTAL",
      TableName:"paintings"
    }
    dynamodb.putItem(params, function(err, data) {
        if (err) {
            console.log(err)
            return alert('There was an error uploading your photo data: ', JSON.stringify(err));

        } else {
            alert('Successfully uploaded photo data.');
        }
    });
}

export function putpainting(painting,name,desc,med,price,category,date,number,cb,s3,dynamodb,fs){
  debugger;
var preview = document.querySelector('img');
var file    = document.querySelector('input[type=file]').files[0];
var reader  = new FileReader();

  dynamoPutPainting(name,desc,med,price,category,date,painting,number,dynamodb);

  reader.addEventListener("load", function () {
    preview.src = reader.result;
    var files = [b64toBlob(preview.src.substring(23,preview.src.length))];
    putpaintinghelper(files,painting)
  }, false);
  if (file) {
    reader.readAsDataURL(file);
  }
}
