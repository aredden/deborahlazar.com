var AWS = require('aws-sdk');
var AWSCognito = require("amazon-cognito-identity-js");

//sign up for cognito user service

module.exports ={
  signUpNewUser: function(fname,lname,email,phone,pass){

    var poolData = {
        UserPoolId : 'us-east-1_TzXRc5peD', // Your user pool id here
        ClientId : '73bmb52ok9ca90dsecmpk8m43q' // Your client id here
    };
    var userPool = new AWSCognito.CognitoUserPool(poolData);

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
    var attributeEmail = new AWSCognito.CognitoUserAttribute(dataEmail);
    var attributeFName = new AWSCognito.CognitoUserAttribute(dataFName);
    var attributeLName = new AWSCognito.CognitoUserAttribute(dataLName);
    var attributePhoneNumber = new AWSCognito.CognitoUserAttribute(dataPhoneNumber);

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
  },
  authenticateUser: function(user,code,cb){

      var poolData = {
          UserPoolId : 'us-east-1_TzXRc5peD', // Your user pool id here
          ClientId : '73bmb52ok9ca90dsecmpk8m43q' // Your client id here
      };
      var userPool = new AWSCognito.CognitoUserPool(poolData);
      var userData = {
        Username : user,
        Pool : userPool
      };
      var cognitoUser = new AWSCognito.CognitoUser(userData);
      cognitoUser.confirmRegistration(code, true, function(err, result) {
          if (err) {
              cb(err);
              return;
          }

          cb(result);
      })
  },
  loginuser(user,pass,AWS,cb){
    var authenticationData = {
      Username : user,
      Password : pass,
  };
  var authenticationDetails = new AWSCognito.AuthenticationDetails(authenticationData);
  var poolData = {
      UserPoolId : 'us-east-1_TzXRc5peD', // Your user pool id here
      ClientId : '73bmb52ok9ca90dsecmpk8m43q' // Your client id here
  };
  var userPool = new AWSCognito.CognitoUserPool(poolData);
  var userData = {
      Username : user,
      Pool : userPool
  };
  var cognitoUser = new AWSCognito.CognitoUser(userData);
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
}
