Parse.Cloud.job("Migrate_Score", function(request, status) {

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


                       var Score2017 = Parse.Object.extend("Score_2017");

                       var Score = new Score2017();

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

Parse.Cloud.job("Migrate_Hours", function(request, status) {

var hoursQuery = Parse.Object.extend("Hours");
var query = new Parse.Query(hoursQuery);

query.limit(1000);

    query.find({
            success:function(results) {

            console.info("total old hours needing to ARCHIVE = "+results.length);
                for (var i = 0; i < results.length; i++) {
                       var result = results[i];

                      var logdatedate = result.get("logDateDate");
                      var jobnotes = result.get("jobNotes");
                      var jobname = result.get("jobName");
                      var jobtotal = result.get("jobTotal");

                      var jobhours = result.get("jobHours");
                      var joblocation = result.get("jobLocation");
                      var jobrate = result.get("jobRate");
                      var userobjectid = result.get("userObjectId");


                       var Hours2017 = Parse.Object.extend("Hours_2017");

                       var Hours = new Hours2017();
                       
                       Hours.set("logDateDate",logdatedate);
                       Hours.set("jobNotes",jobnotes);
                       Hours.set("jobName",jobname);
                       Hours.set("jobHours",jobhours);
                       Hours.set("jobTotal",jobtotal);
                       Hours.set("jobRate",jobrate);
                       Hours.set("jobLocation",joblocation);

                       Hours.set("userObjectId",userobjectid);




                      Hours.save(null, {
  success: function(Hours) {
    // Execute any logic that should take place after the object is saved.
    //console.info('Sale archived with label ='+salelabel);
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

                      status.success("Hours Migration successfull");
            },
            error: function(error) {
            status.error("Uh oh, something went wrong.");
            console.info("Failed!");
            }
    })

});

Parse.Cloud.job("Migrate_Documents", function(request, status) {

var docsQuery = Parse.Object.extend("Document");
var query = new Parse.Query(docsQuery);

query.limit(1000);

    query.find({
            success:function(results) {

            console.info("total old hours needing to ARCHIVE = "+results.length);
                for (var i = 0; i < results.length; i++) {
                       var result = results[i];

                       var userobjectid = result.get("userObjectId");
                      var folder = result.get("folder");
                      var filename = result.get("fileName");

                      var file = result.get("file");


                       var Docs2017 = Parse.Object.extend("Document_2017");

                       var Docs = new Docs2017();

                       Docs.set("userObjectId",userobjectid);
                       Docs.set("folder",folder);
                       Docs.set("fileName",filename);
                       Docs.set("file",file);




                      Docs.save(null, {
  success: function(Docs) {
    // Execute any logic that should take place after the object is saved.
    //console.info('Sale archived with label ='+salelabel);
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

                      status.success("Documents Migration successfull");
            },
            error: function(error) {
            status.error("Uh oh, something went wrong.");
            console.info("Failed!");
            }
    })

});

Parse.Cloud.job("Migrate_Activity", function(request, status) {

var actQuery = Parse.Object.extend("Activity");
var query = new Parse.Query(actQuery);

query.limit(100);
//query.skip();
    query.find({
            success:function(results) {

            console.info("total old activity needing to ARCHIVE = "+results.length);
                for (var i = 0; i < results.length; i++) {
                       var result = results[i];

                       var userobjectid = result.get("userObjectId");
                      var logdatedate = result.get("logDateDate");
                      var place = result.get("place");
                      var userlocation = result.get("userLocation");

                      var logdate = result.get("logDate");
                      var type = result.get("type");


                       var Act2017 = Parse.Object.extend("Activity_2017");

                       var Act = new Act2017();

                       Act.set("userObjectId",userobjectid);
                       Act.set("logDateDate",logdatedate);
                       Act.set("place",place);
                       Act.set("userLocation",userlocation);
                       Act.set("logDate",logdate);
                       Act.set("type",type);




                      Act.save(null, {
  success: function(Act) {
    // Execute any logic that should take place after the object is saved.
    //console.info('Sale archived with label ='+salelabel);
    //status.success("SZSales completed")
    //res.send("success");
     //status.success("Score Migration successfull");

  },
  error: function(result, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and description.
    console.info('Failed to update Activity, with error code: ' + error.message);

    //res.send("fail");
  }
});


                }

                      status.success("Activity Migration successfull");
            },
            error: function(error) {
            status.error("Uh oh, something went wrong.");
            console.info("Failed!");
            }
    })

});
