export function loginuser(email,pass,dynamodb){

  var params = {
    Item:{
        "email": {
          S:email
        },
        "pass": {
          S:pass
        }
      },
    ReturnConsumedCapacity:"TOTAL",
    TableName:"users"
  }

  dynamodb.getItem(params, function(err, data) {
    debugger;
      if (err) {
          console.log(err)
          return alert('There was an error logging in: ', err);
      } else {
          alert('Successfully logged in!');
      }
  });

}
