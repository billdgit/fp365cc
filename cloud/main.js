 // These two lines are required to initialize Express in Cloud Code.
var express = require('express');
var app = express();
var moment = require('moment');

  var objectid;
  var stringdate;
  var newdate;
  var idArray = [];
  var stringArray = [];
  var dateArray = [];
  
  Parse.Cloud.job("deleteOldActivity", function(request, status) {
 
var oldQuery = Parse.Object.extend("Activity");
var query = new Parse.Query(oldQuery);
 
var day = new Date();
var today = moment();
var tomorrow = moment(today).add(1, 'day');

var yesterday = moment(day.setDate(day.getDate() - 1)); 

console.log("YESTERDAY = "+day);

query.limit(1000);
 
query.lessThan("updatedAt", day);

 
    query.find({
            success:function(results) {
            
            console.log("total old activity needing to delete = "+results.length);
                for (var i = 0; i < results.length; i++) {
                    var result = results[i];
                 
                     
                    result.destroy({
                      success: function(myObject) {
                        // The object was deleted from the Parse Cloud.
                         
                        console.log("Destroy: "+result);
                      },
                      error: function(myObject, error) {
                        // The delete failed.
                        // error is a Parse.Error with an error code and message.
                      }
                    });
                     
 
                }   
                  
                  //status.success("Delete successfull");       
            },
            error: function(error) {
            status.error("Uh oh, something went wrong.");
            console.log("Failed!");         
            }
    })
 
});
  
  
  
Parse.Cloud.job("addDateDate", function(request, status) {
  // Set up to modify user data
  Parse.Cloud.useMasterKey();
  var counter = 0;
  // Query for all Activity
  
   var Activity = Parse.Object.extend("Activity");
    var query = new Parse.Query(Activity);
    query.limit(1000);
   query.find({
      success: function(results) {
        //response.send("success to save for: " + results[0].id);
        
        for (var i =0 ; i < results.length ; i++){
      
         localStorage.setItem('tempAct'+[i], JSON.stringify(results[i]));
         
         
         var jsonAct = JSON.parse(localStorage.getItem("tempAct"+[i]));
                                           
       
       
        objectid = jsonAct.objectId;
       
        stringdate = jsonAct.logDate; 
     
        newdate = new Date(stringdate);
        
        userlocation = jsonAct.userLocation;
        place = jsonAct.place;
        type = jsonAct.type;
        userobjectid = jsonAct.userObjectId;
          
          	console.log("OBJECTID: " +objectid);
            console.log("STRINGDATE: " +stringdate);
            console.log("NEWDATE B4 = " +newdate);
          
       
        
        
        var Activity = Parse.Object.extend("Activity");
var activity = new Activity();

activity.save({
  userLocation: userlocation,
  place: place,
  logDate: stringdate,
  logDateDate: newdate,
  userObjectId: userobjectid,
  type: type,
  

}, {
  success: function(activity) {
    // The object was saved successfully.
    console.log("object saved");
  },
  error: function(activity, error) {
    // The save failed.
    // error is a Parse.Error with an error code and message.
  }
});
          
          
          
     } 
     
      },
      error: function(error) {
        console.log("Error: " + error.code + " " + error.message);
        //response.send("fail"); 
      }
    });
  
  
});



Parse.Cloud.define("addInDay", function(request, response) {
 Parse.Cloud.useMasterKey();
 
   var results = "updated User Class";
    console.log (" LOGDATE from DB = "+request.params.logDate);
    
     console.log (" USER from DB = "+request.params.objectId);
    
 
 var User = Parse.Object.extend("User");
    var query = new Parse.Query(User);
    query.equalTo("objectId", request.params.objectId);
 
    query.find({
      success: function(results) {
        //response.send("success to save for: " + results[0].id);
      
            var user = Parse.Object.extend("User");
            var newdate = new user();
            newdate.addUnique("daysInputIn", request.params.logDate );
           
        
          newdate.save;
          

      },
      error: function(error) {
        console.log("Error: " + error.code + " " + error.message);
        //response.send("fail"); 
      }
    });
  
 
});


//PFQuery *pushQuery = [PFInstallation query]; [pushQuery whereKey:@"userObjectId" matchesQuery:userQuery];
  
  
  
Parse.Cloud.job("userPush", function(request, status) {

  var inArray=[];
  var outArray=[];
  var inputinArray=[];
  var inputoutArray=[];
  var objectid;
  var object;
  // Set up to modify user data
  Parse.Cloud.useMasterKey();
 
  var yesterday = (function(d){ d.setDate(d.getDate()-1); return d})(new Date);
   var yesstring0 = yesterday.toISOString().slice(0,10).replace(/-/g,"/");
   var yesstring1 = yesstring0.replace(/\/0/g,"\/");
   
   var yesstring = yesstring1.trim();
  console.log("yesstring = "+yesstring);
  
  
  // Query for all users

 
var Score = Parse.Object.extend("Score");
var queryUsers = new Parse.Query(Score);
 
//queryUsers.exists("base_residency");


//queryUsers.equalTo("userObjectId","Odj8E7CCbh");



queryUsers.find({
  success: function(results) {
  
 
   console.log("items returned from users "+results.length);
  
  
  for (var j=0;j<1;j++){
  var inArray=[];
  var outArray=[];
  var inputinArray=[];
  var inputoutArray=[];
  //var objectid;
  //var object;
 
     //console.log("results ===== "+JSON.stringify(results));
     
      
   object = results[j];
   
   //console.log("object ===== "+JSON.stringify(object));
   
   objectid = object.id;
   //console.log("objectid ===== "+objectid);
   
   var inday = results[j].get("daysIn");
   var outday = results[j].get("daysOut");
   var inputinday = results[j].get("daysInputIn");
   var inputoutday = results[j].get("daysInputOut");
   var userobjectid = results[j].get("userObjectId");
   
     // inArray.push(inday);
     // outArray.push(outday);
     // inputinArray.push(inputinday);
     // inputoutArray.push(inputoutday);
     //} 
      
      console.log("inday ===== "+inday);
      console.log("outday ===== "+outday);
      //console.log("inputinday ===== "+inputinday);
      //console.log("inputoutday ===== "+inputoutday);

     if (inday.length > 0){
      if(!(inday.indexOf(yesstring) > -1 )){
        console.log("missed yesterday inday ="+userobjectid.id);
              
                    var query = new Parse.Query(Parse.Installation);
					query.equalTo('userObjectId', userobjectid);
					var yesmessage = yesstring.substring(5);

					Parse.Push.send({
					  where: query,
					  data: {
						alert: "Your location did not log yesterday. Please enter your location manually for "+yesmessage 
					  }
					}, {
					  success: function() {
						// Push was successful
	
						console.log("PUSH SUCCESS");
					  },
					  error: function(error) {
						// Handle error
						console.log("PUSH FAILED");
					  }
					}); 
					break; 
      }
      }
      
      else if (outday.length > 0){
       if(!(outday.indexOf(yesstring) > -1) ){
        console.log("missed yesterday outday ="+userobjectid.id);
          var query = new Parse.Query(Parse.Installation);
					query.equalTo('userObjectId', userobjectid);
					var yesmessage = yesstring.substring(5);

					Parse.Push.send({
					  where: query,
					  data: {
						alert: "Your location did not log yesterday. Please enter your location manually for "+yesmessage 
					  }
					}, {
					  success: function() {
						// Push was successful
	
						console.log("PUSH SUCCESS");
					  },
					  error: function(error) {
						// Handle error
						console.log("PUSH FAILED");
					  }
					}); 
					break; 
      }
      }
      
      else if (inputinday.length > 0){
      if(!(inputinday.indexOf(yesstring) > -1) ){
        //console.log("missed yesterday inputinday ="+userobjectid.id);
          var query = new Parse.Query(Parse.Installation);
					query.equalTo('userObjectId', userobjectid);
					var yesmessage = yesstring.substring(5);

					Parse.Push.send({
					  where: query,
					  data: {
						alert: "Your location did not log yesterday. Please enter your location manually for "+yesmessage 
					  }
					}, {
					  success: function() {
						// Push was successful
	
						console.log("PUSH SUCCESS");
					  },
					  error: function(error) {
						// Handle error
						console.log("PUSH FAILED");
					  }
					}); 
					break; 
					
      }
      }
    else  if (inputoutday.length > 0){
      if(!(inputoutday.indexOf(yesstring) > -1) ){
        //console.log("missed yesterday inputoutday ="+userobjectid.id);
          var query = new Parse.Query(Parse.Installation);
					query.equalTo('userObjectId', userobjectid);
					var yesmessage = yesstring.substring(5);

					Parse.Push.send({
					  where: query,
					  data: {
						alert: "Your location did not log yesterday. Please enter your location manually for "+yesmessage 
					  }
					}, {
					  success: function() {
						// Push was successful
	
						console.log("PUSH SUCCESS");
					  },
					  error: function(error) {
						// Handle error
						console.log("PUSH FAILED");
					  }
					}); 
					break; 
      }
      }
  
   
    

  }
  
  
  
  
  },
 
 
      
  }).then(function() {
    // Set the job's success status
    status.success("Users listed successfully.");
   
    
    
    
    
    
  }, function(error) {
    // Set the job's error status
    status.error("Uh oh, something went wrong.");
  });
});


Parse.Cloud.job("todayPush", function(request, status) {

  var inArray=[];
  var outArray=[];
  var inputinArray=[];
  var inputoutArray=[];
  var objectid;
  var object;
  // Set up to modify user data
  Parse.Cloud.useMasterKey();
 
  var today = (function(d){ d.setDate(d.getDate()); return d})(new Date);
   var todstring0 = today.toISOString().slice(0,10).replace(/-/g,"/");
   var todstring1 = todstring0.replace(/\/0/g,"\/");
   
   var todstring = todstring1.trim();
  console.log("todstring = "+todstring);
  
  
  // Query for all users

 
var Score = Parse.Object.extend("Score");
var queryUsers = new Parse.Query(Score);
 
//queryUsers.exists("base_residency");

//queryUsers.equalTo("objectId","Odj8E7CCbh");
queryUsers.notEqualTo("daysIn", todstring);
queryUsers.notEqualTo("daysOut", todstring);
queryUsers.notEqualTo("daysInputIn", todstring);
queryUsers.notEqualTo("daysInputOut", todstring);


queryUsers.find({
  success: function(results) {
  
 
   console.log("items returned from users "+results.length);
  
  
  for (var j=0;j<results.length;j++){
  var inArray=[];
  var outArray=[];
  var inputinArray=[];
  var inputoutArray=[];
  //var objectid;
  //var object;
 
     //console.log("results ===== "+JSON.stringify(results));
     
      
   object = results[j];
   
   console.log("object ===== "+JSON.stringify(object));
   
   objectid = object.id;
   console.log("objectid ===== "+objectid);
   
   var inday = results[j].get("daysIn");
   var outday = results[j].get("daysOut");
   var inputinday = results[j].get("daysInputIn");
   var inputoutday = results[j].get("daysInputOut");
   
   var userobjectid = results[j].get("userObjectId");
   
      inArray.push(inday);
      outArray.push(outday);
      inputinArray.push(inputinday);
      inputoutArray.push(inputoutday);
      
        if(!inArray.indexOf(todstring) > -1 && !outArray.indexOf(todstring) > -1 && !inputinArray.indexOf(todstring) > -1 && !inputoutArray.indexOf(todstring) > -1 ){
      console.log("missed this morning so send push for id ="+userobjectid.id);
      
      //"objectId","Odj8E7CCbh"
      var query = new Parse.Query(Parse.Installation);


console.log("PUSH TO ::: "+object);
query.equalTo('userObjectId', userobjectid);

var todmessage = todstring.substring(5);

/*
Parse.Push.send({
  where: query,
  data: {
    alert: "Your location did not log this morning. Please enter your location manually for "+todmessage 
  }
}, {
  success: function() {
    // Push was successful
    
    console.log("PUSH SUCCESS");
  },
  error: function(error) {
    // Handle error
    console.log("PUSH FAILED");
  }
});
      
 */     
      
      }
    

  }
  
  
  
  
  },
 
 
      
  }).then(function() {
    // Set the job's success status
    status.success("Users listed successfully.");
   
    
    
    
    
    
  }, function(error) {
    // Set the job's error status
    status.error("Uh oh, something went wrong.");
  });
});