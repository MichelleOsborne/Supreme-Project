"use strict";

// get the main app
var mainApp = angular.module("mainApp", []);

// create the controller
mainApp.controller("loginController", function($scope, $http){

    // get request for login data
    $http.get('/login-data').then(function(response){

        
        // assign Login data to $scope.usernames so it can be accessed in HTML page
        $scope.usernames = response.data;

        //arrays to hold username by staff id.
       $scope.ST001 = [];
       $scope.ST002 = [];

        //for loop to add username to respective staff member
        for (var username of $scope.usernames){
            // check if item is a starter
             if(username.staff == "TBlock123"){

                $scope.ST001.push(username);
          };

             if(username.staff == "T.Crayne90210"){

                $scope.ST002.push(username);
            };
          };  
        });

    
        // Function for checking username and password matches
    $scope.getUsernamesandPasswords = function getInfo(username, password){
     
      for (var stafflogin of $scope.getUsernamesandPasswords){
     

        if (stafflogin.username == "TBlock123" && stafflogin.password =="djkfik4e9rtj"){
            document.location.href = "simplestaffpage.html"
            return 
        }
    }
            console.log("incorrect username or password")

    // function to Login when user presses 'Login'
 
    $scope.LoginStatus = function(){

      console.log(data);
      // POST request to server with data that has been inputted variable
      $http.post("/loginSuccessful", data).then(function(response){

          // log response from server
          console.log(response.data);
      });
       
    }};
});