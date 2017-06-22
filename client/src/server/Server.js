
// export function putPainting(painting,name,desc,med,price,category,date,number,cb){
//   putpainting(painting,name,desc,med,price,category,date,number,cb,s3,dynamodb,fs);
// }
//
// export function putNewUser(fname,lname,email,email2,phone,pass,pass2){
//   if(pass!=pass2){
//     return alert('passwords do not match!');
//   }
//   if(email!=email2){
//     return alert('emails do not match!');
//   }
//   signUpNewUser(fname,lname,email,phone,pass);
// }
//
// export function loginUser(user,pass,cb){
//   loginuser(user,pass,AWS,cb);
// }
//
// export function authenticate(user,code){
//   authenticateUser(user,code);
// }


export function getPaintingsList(cb) {
  // We don"t need to send a body, so pass in "undefined" for the body.
  sendXHR("GET", "/paintings/", undefined, (xhr) => {
    // Call the callback with the data.
    cb(JSON.parse(xhr.responseText));
  });
}

var token = "";
function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);
  xhr.setRequestHeader("Authorization", "Bearer " + token);

  /* global ErrorBanner */

  // Response received from server. It could be a failure, though!
  xhr.addEventListener("load", function() {
    var statusCode = xhr.status;
    if (statusCode >= 200 && statusCode < 300) {
      // Success: Status code is in the [200, 300) range.
      // Call the callback with the final XHR object.
      cb(xhr);
    } else {
      // Client or server error.
      ErrorBanner();
    }
  });

  // Time out the request if it takes longer than 10,000 milliseconds (10 seconds)
  xhr.timeout = 10000;

  // Network failure: Could not connect to server.
  xhr.addEventListener("error", function() {
    ErrorBanner();
  });

  // Network failure: request took too long to complete.
  xhr.addEventListener("timeout", function() {
    ErrorBanner();
  });

  switch (typeof(body)) {
    case "undefined":
      // No body to send.
      xhr.send();
      break;
    case "string":
      // Tell the server we are sending text.
      xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      xhr.send(body);
      break;
    case "object":
      // Tell the server we are sending JSON.
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      // Convert body into a JSON string.
      xhr.send(JSON.stringify(body));
      break;
    default:
      throw new Error("Unknown body type: " + typeof(body));
  }
}
