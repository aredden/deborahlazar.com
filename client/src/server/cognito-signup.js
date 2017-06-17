import {
   Config,
   CognitoIdentityCredentials,
   CognitoIdentityServiceProvider
  } from "aws-sdk";
import {
  AuthenticationDetails,
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser
} from "amazon-cognito-identity-js";

import appConfig from "./config";
//sign up for cognito user service
export function signUpNewUser(fname,lname,email,phone,pass){

var poolData = {
    UserPoolId : 'us-east-1_TzXRc5peD', // Your user pool id here
    ClientId : '73bmb52ok9ca90dsecmpk8m43q' // Your client id here
};
var userPool = new CognitoUserPool(poolData);

var attributeList = [];

var dataFName = {
    Name : 'name',
    Value : fname
};

var dataLName = {
    Name : 'family_name',
    Value : lname
};

var dataPhoneNumber = {
    Name : 'phone_number',
    Value : '+1'+phone
};

var dataEmail = {
    Name: 'email',
    Value: email
}
var attributeEmail = new CognitoUserAttribute(dataEmail);
var attributeFName = new CognitoUserAttribute(dataFName);
var attributeLName = new CognitoUserAttribute(dataLName);
var attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);

attributeList.push(attributeEmail);
attributeList.push(attributeFName);
attributeList.push(attributeLName);
attributeList.push(attributePhoneNumber);

userPool.signUp(email, pass, attributeList, null, function(err, result){
    if (err) {
        alert(err);
        return;
    }
    var cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());
});
}


export function authenticateUser(user,code){

  var poolData = {
      UserPoolId : 'us-east-1_TzXRc5peD', // Your user pool id here
      ClientId : '73bmb52ok9ca90dsecmpk8m43q' // Your client id here
  };
  var userPool = new CognitoUserPool(poolData);
  var userData = {
    Username : user,
    Pool : userPool
  };
  var cognitoUser = new CognitoUser(userData);
  cognitoUser.confirmRegistration(code, true, function(err, result) {
      if (err) {
          alert(err);
          return;
      }
      console.log('call result: ' + result);
  })
}

export function loginuser(user, pass, AWS, cb){
  var authenticationData = {
    Username : user,
    Password : pass,
};
var authenticationDetails = new AuthenticationDetails(authenticationData);
var poolData = {
    UserPoolId : 'us-east-1_TzXRc5peD', // Your user pool id here
    ClientId : '73bmb52ok9ca90dsecmpk8m43q' // Your client id here
};
var userPool = new CognitoUserPool(poolData);
var userData = {
    Username : user,
    Pool : userPool
};
var cognitoUser = new CognitoUser(userData);
cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
        console.log('access token + ' + result.getAccessToken().getJwtToken());

        //POTENTIAL: Region needs to be set if not already set previously elsewhere.
        AWS.config.region = 'us-east-1';

        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId : 'us-east-1_TzXRc5peD', // your identity pool id here
            Logins : {
                // Change the key below according to the specific region your user pool is in.
                'cognito-idp.us-east-1.amazonaws.com/us-east-1_TzXRc5peD' : result.getIdToken().getJwtToken()
            }
        });

        cb("logged-in",result);

        // Instantiate aws sdk service objects now that the credentials have been updated.
        // example: var s3 = new AWS.S3();

    },

    onFailure: function(err) {
        cb("login-error",err);
    },

});
}
