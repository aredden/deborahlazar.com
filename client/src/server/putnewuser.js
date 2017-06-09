export function putnewuser(fname,lname,email,email2,phone,pass,pass2,dynamodb){
  if(pass!=pass2){
    return alert('passwords do not match!');
  }
  if(email!=email2){
    return alert('emails do not match!');
  }

  var params = {
    Item:{
        "fname": {
          S:fname
        },
        "lname": {
          S:lname
        },
        "email": {
          S:email
        },
        "phone": {
          S:phone
        },
        "pass": {
          S:pass
        }
      },
    ReturnConsumedCapacity:"TOTAL",
    TableName:"users"
  }

  dynamodb.putItem(params, function(err, data) {
      if (err) {
          console.log(err)
          return alert('There was an error uploading user data: ', err);
      } else {
          alert('Successfully Registered!');
      }
  });

}
