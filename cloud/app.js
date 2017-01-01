    Parse.Cloud.job("deleteOldDevSample", function(request, status) {
 
var oldQuery = Parse.Object.extend("Score");
var query = new Parse.Query(oldQuery);
 
query.limit(1000);

    query.find({
            success:function(results) {
            
            console.info("total old scores needing to ARCHIVE = "+results.length);
                for (var i = 0; i < results.length; i++) {
                       var result = results[i];
                      
                      var firstscore = result.get("firstScore");
                      var secondscore = result.get("secondScore");
                      var thirdscore = result.get("thirdScore");
                      var fourthscore = result.get("fourthScore");
                      var firstnote = result.get("firstNote");
                      var secondnote = result.get("secondNote");
                      var thirdnote = result.get("thirdNote");
                      var fourthnote = result.get("fourthNote");
                      
                      var userobjectid = result.get("userObjectId");
                      var newemail = result.get("newEmail");
                      var active = result.get("active");
                      
                      var daysout = result.get("daysOut");
                      var daysinputout = result.get("daysInputOut");
                      
                      var daysin = result.get("daysIn");
                      var daysinputin = result.get("daysInputIn");
                      
                      
                       var Score2016 = Parse.Object.extend("Score_2016");
     
                       var Score = new Score2016();
                       
                       Score.set("firstScore",firstscore);
                       Score.set("secondScore",secondscore);
                       Score.set("thirdScore",thirdscore);
                       Score.set("fourthScore",fourthscore);
                       Score.set("firstNote",firstnote);
                       Score.set("secondNote",secondnote);
                       Score.set("thirdNote",thirdnote);
                       Score.set("fourthNote",fourthnote);
                       
                       Score.set("userObjectId",userobjectid);
                       Score.set("newEmail",newemail);
                       Score.set("active",active);
                       Score.set("daysOut",daysout);
                       Score.set("daysInputOut",daysinputout);
                       Score.set("daysIn",daysin);
                       Score.set("daysInputIn",daysinputin);
            
              
                     
                      Score.save(null, {
  success: function(Score) {
    // Execute any logic that should take place after the object is saved.
    console.info('Sale archived with label ='+salelabel);
    //status.success("SZSales completed")
    //res.send("success");
     //status.success("Score Migration successfull");
              
  },
  error: function(result, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and description.
    console.info('Failed to update sale, with error code: ' + error.message);
    
    //res.send("fail");
  }
});
                 
                  
                }   
                  
                      status.success("Score Migration successfull");  
            },
            error: function(error) {
            status.error("Uh oh, something went wrong.");
            console.info("Failed!");         
            }
    })
 
});