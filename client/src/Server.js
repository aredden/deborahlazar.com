
var token = "YmFzaWN1c2VybmFtZTphYmMxMjM"

function getPaintingsList(size){

}

export function putPainting(painting,description,title,cb){
  sendXHR("PUT","/addpainting/"+title+"/"+description,painting,(xhr)=>
    {cb(JSON.parse(xhr.responseText))}
  );
}


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
