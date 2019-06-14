// Parse.Cloud.job("Migrate_Score", function(request, status) {
//
// var oldQuery = Parse.Object.extend("Score");
// var query = new Parse.Query(oldQuery);
//
// query.limit(1000);
//
//     query.find({
//             success:function(results) {
//
//             console.info("total old scores needing to ARCHIVE = "+results.length);
//                 for (var i = 0; i < results.length; i++) {
//                        var result = results[i];
//
//                       var firstscore = result.get("firstScore");
//                       var secondscore = result.get("secondScore");
//                       var thirdscore = result.get("thirdScore");
//                       var fourthscore = result.get("fourthScore");
//                       var firstnote = result.get("firstNote");
//                       var secondnote = result.get("secondNote");
//                       var thirdnote = result.get("thirdNote");
//                       var fourthnote = result.get("fourthNote");
//
//                       var userobjectid = result.get("userObjectId");
//                       var newemail = result.get("newEmail");
//                       var active = result.get("active");
//
//                       var daysout = result.get("daysOut");
//                       var daysinputout = result.get("daysInputOut");
//
//                       var daysin = result.get("daysIn");
//                       var daysinputin = result.get("daysInputIn");
//
//
//                        var Score2018 = Parse.Object.extend("Score_2018");
//
//                        var Score = new Score2018();
//
//                        Score.set("firstScore",firstscore);
//                        Score.set("secondScore",secondscore);
//                        Score.set("thirdScore",thirdscore);
//                        Score.set("fourthScore",fourthscore);
//                        Score.set("firstNote",firstnote);
//                        Score.set("secondNote",secondnote);
//                        Score.set("thirdNote",thirdnote);
//                        Score.set("fourthNote",fourthnote);
//
//                        Score.set("userObjectId",userobjectid);
//                        Score.set("newEmail",newemail);
//                        Score.set("active",active);
//                        Score.set("daysOut",daysout);
//                        Score.set("daysInputOut",daysinputout);
//                        Score.set("daysIn",daysin);
//                        Score.set("daysInputIn",daysinputin);
//
//
//
//                       Score.save(null, {
//   success: function(Score) {
//     // Execute any logic that should take place after the object is saved.
//     //console.info('Sale archived with label ='+salelabel);
//     //status.success("SZSales completed")
//     //res.send("success");
//      status.success("Score Migration successfull");
//
//   },
//   error: function(result, error) {
//     // Execute any logic that should take place if the save fails.
//     // error is a Parse.Error with an error code and description.
//     console.info('Failed to update score, with error code: ' + error.message);
//
//     //res.send("fail");
//   }
// });
//
//
//                 }
//
//                       status.success("Score Migration successfull");
//             },
//             error: function(error) {
//             status.error("Uh oh, something went wrong.");
//             console.info("Failed!");
//             }
//     })
//
// });
//
// Parse.Cloud.job("Migrate_Hours", function(request, status) {
//
// var hoursQuery = Parse.Object.extend("Hours");
// var query = new Parse.Query(hoursQuery);
//
// query.limit(1000);
//
//     query.find({
//             success:function(results) {
//
//             console.info("total old hours needing to ARCHIVE = "+results.length);
//                 for (var i = 0; i < results.length; i++) {
//                        var result = results[i];
//
//                       var logdatedate = result.get("logDateDate");
//                       var jobnotes = result.get("jobNotes");
//                       var jobname = result.get("jobName");
//                       var jobtotal = result.get("jobTotal");
//
//                       var jobhours = result.get("jobHours");
//                       var joblocation = result.get("jobLocation");
//                       var jobrate = result.get("jobRate");
//                       var userobjectid = result.get("userObjectId");
//
//
//                        var Hours2018 = Parse.Object.extend("Hours_2018");
//
//                        var Hours = new Hours2018();
//
//                        Hours.set("logDateDate",logdatedate);
//                        Hours.set("jobNotes",jobnotes);
//                        Hours.set("jobName",jobname);
//                        Hours.set("jobHours",jobhours);
//                        Hours.set("jobTotal",jobtotal);
//                        Hours.set("jobRate",jobrate);
//                        Hours.set("jobLocation",joblocation);
//
//                        Hours.set("userObjectId",userobjectid);
//
//
//
//
//                       Hours.save(null, {
//   success: function(Hours) {
//     // Execute any logic that should take place after the object is saved.
//     //console.info('Sale archived with label ='+salelabel);
//     //status.success("SZSales completed")
//     //res.send("success");
//      status.success("Score Migration successfull");
//
//   },
//   error: function(result, error) {
//     // Execute any logic that should take place if the save fails.
//     // error is a Parse.Error with an error code and description.
//     console.info('Failed to update sale, with error code: ' + error.message);
//
//     //res.send("fail");
//   }
// });
//
//
//                 }
//
//                       status.success("Hours Migration successfull");
//             },
//             error: function(error) {
//             status.error("Uh oh, something went wrong.");
//             console.info("Failed!");
//             }
//     })
//
// });
//
// Parse.Cloud.job("Migrate_Documents", function(request, status) {
//
// var docsQuery = Parse.Object.extend("Document");
// var query = new Parse.Query(docsQuery);
//
// query.limit(1000);
//
//     query.find({
//             success:function(results) {
//
//             console.info("total old documents needing to ARCHIVE = "+results.length);
//                 for (var i = 0; i < results.length; i++) {
//                        var result = results[i];
//
//                        var userobjectid = result.get("userObjectId");
//                       var folder = result.get("folder");
//                       var filename = result.get("fileName");
//
//                       var file = result.get("file");
//
//
//                        var Docs2018 = Parse.Object.extend("Document_2018");
//
//                        var Docs = new Docs2018();
//
//                        Docs.set("userObjectId",userobjectid);
//                        Docs.set("folder",folder);
//                        Docs.set("fileName",filename);
//                        Docs.set("file",file);
//
//
//
//
//                       Docs.save(null, {
//   success: function(Docs) {
//     // Execute any logic that should take place after the object is saved.
//     //console.info('Sale archived with label ='+salelabel);
//     //status.success("SZSales completed")
//     //res.send("success");
//      status.success("Docs Migration successfull");
//
//   },
//   error: function(result, error) {
//     // Execute any logic that should take place if the save fails.
//     // error is a Parse.Error with an error code and description.
//     console.info('Failed to update sale, with error code: ' + error.message);
//
//     //res.send("fail");
//   }
// });
//
//
//                 }
//
//                       status.success("Documents Migration successfull");
//             },
//             error: function(error) {
//             status.error("Uh oh, something went wrong.");
//             console.info("Failed!");
//             }
//     })
//
// });

// Parse.Cloud.job("Migrate_Activity", function(request, status) {
//
//    var Act2018 = Parse.Object.extend("Activity_2018");
//
// var actQuery = Parse.Object.extend("Activity");
// var query = new Parse.Query(actQuery);
// query.skip(1900);
// query.limit(500);
//     query.find({
//             success:function(results) {
//
//             console.info("total old activity needing to 5th skip 1900 500  = "+results.length);
//                 for (var i = 0; i < results.length; i++) {
//                        var result = results[i];
//
//                        if (result.get("logDateDate")) {
//                            var logdatedate = result.get("logDateDate");
//
//
//
//
//                        if (result.get("userObjectId")) {
//                          var userobjectid = result.get("userObjectId");
//                        }
//                       if (result.get("userLocation")) {
//                          var userlocation = result.get("userLocation");
//                       }
//                       if (result.get("place")) {
//                         var place = result.get("place");
//                       }
//
//
//
//                       if (result.get("logDate")) {
//                           var logdate = result.get("logDate");
//                       }
//                       if (result.get("type")) {
//                             var type = result.get("type");
//                       }
//
//
//
//
//
//                        var Act = new Act2018();
//                        if (userobjectid) {
//                          Act.set("userObjectId",userobjectid);
//                        }
//                        if (logdatedate) {
//                          Act.set("logDateDate",logdatedate);
//                        }
//
//                        if (place) {
//                             Act.set("place",place);
//                        }
//
//                        if (userlocation) {
//                           Act.set("userLocation",userlocation);
//                        }
//                        if (logdate) {
//                             Act.set("logDate",logdate);
//                        }
//                        if (type) {
//                             Act.set("type",type);
//                        }
//
//
//
//
//
//                       Act.save(null, {
//   success: function(Act) {
//     // Execute any logic that should take place after the object is saved.
//     //console.info('Activity archived with place = '+place);
//     //status.success("SZSales completed")
//     //res.send("success");
//      //status.success("Score Migration successfull");
//
//   },
//   error: function(result, error) {
//     // Execute any logic that should take place if the save fails.
//     // error is a Parse.Error with an error code and description.
//     console.info('Failed to update Activity, with error code: ' + error.message);
//
//     //res.send("fail");
//   }
// });
//
//
//                 }
//               }
//
//                       status.success("Activity Migration 5th 500 successfull");
//             },
//             error: function(error) {
//             status.error("Uh oh, something went wrong.");
//             console.info("Failed!");
//             }
//     })
//
// });

// Parse.Cloud.job("Clean_Activity", function(request, status) {
//
// var actQuery = Parse.Object.extend("Activity");
// var query = new Parse.Query(actQuery);
//
// var day1 = new Date(2018,00,01);
// var day2 = new Date(2018,10,20);
//
//
// //query.greaterThan("logDateDate", day2);
// query.lessThan("logDateDate", day2);
// query.limit(50);
//     query.find({
//             success:function(results) {
//
//             console.info("total 2018 activity needing to cleam = "+results.length);
//                 for (var i = 0; i < results.length; i++) {
//                        var result = results[i];
//
//                       console.info("logDateDate = "+result.get("logDateDate"))
//
// result.destroy({
// success: function(myObject) {
// // The object was deleted from the Parse Cloud
// //console.info("Sale deleted from SampleSales = "+salelabel);
//
// //console.info("Destroy: "+result);
// console.info("deleted = "+result.get("logDateDate"));
// },
// error: function(myObject, error) {
// // The delete failed.
// // error is a Parse.Error with an error code and message.
// }
// });
//
//
//
//
//
//                 }
//
//                       status.success("Activity_2018 cleaned");
//             },
//             error: function(error) {
//             status.error("Uh oh, something went wrong.");
//             console.info("Failed!");
//             }
//     })
//
// });

// Parse.Cloud.job("Migrate_Activity_1000", function(request, status) {
//
// var actQuery = Parse.Object.extend("Activity");
// var query = new Parse.Query(actQuery);
//
// query.limit(1000);
// query.skip(1000);
//     query.find({
//             success:function(results) {
//
//             console.info("total old activity needing to ARCHIVE = "+results.length);
//                 for (var i = 0; i < results.length; i++) {
//                        var result = results[i];
//
//                        var userobjectid = result.get("userObjectId");
//                       var logdatedate = result.get("logDateDate");
//                       var place = result.get("place");
//                       if (result.get("userLocation")) {
//                         var userlocation = result.get("userLocation");
//
//                       }
//
//
//                       var logdate = result.get("logDate");
//                       var type = result.get("type");
//
//
//                        var Act2018 = Parse.Object.extend("Activity_2018");
//
//                        var Act = new Act2018();
//
//                        Act.set("userObjectId",userobjectid);
//                        Act.set("logDateDate",logdatedate);
//                        Act.set("place",place);
//                        if (userlocation) {
//                           Act.set("userLocation",userlocation);
//                        }
//
//                        Act.set("logDate",logdate);
//                        Act.set("type",type);
//
//
//
//
//                       Act.save(null, {
//   success: function(Act) {
//     // Execute any logic that should take place after the object is saved.
//     //console.info('Activity archived with label');
//     //status.success("SZSales completed")
//     //res.send("success");
//      status.success("Score Migration successfull");
//
//   },
//   error: function(result, error) {
//     // Execute any logic that should take place if the save fails.
//     // error is a Parse.Error with an error code and description.
//     console.info('Failed to update Activity, with error code: ' + error.message);
//
//     //res.send("fail");
//   }
// });
//
//
//                 }
//
//                       status.success("Activity Migration successfull");
//             },
//             error: function(error) {
//             status.error("Uh oh, something went wrong.");
//             console.info("Failed!");
//             }
//     })
//
// });
//
// Parse.Cloud.job("Migrate_Activity_2000", function(request, status) {
//
// var actQuery = Parse.Object.extend("Activity");
// var query = new Parse.Query(actQuery);
//
// query.limit(1000);
// query.skip(2000);
//     query.find({
//             success:function(results) {
//
//             console.info("total old activity needing to ARCHIVE = "+results.length);
//                 for (var i = 0; i < results.length; i++) {
//                        var result = results[i];
//
//                        var userobjectid = result.get("userObjectId");
//                       var logdatedate = result.get("logDateDate");
//                       var place = result.get("place");
//                       if (result.get("userLocation")) {
//                         var userlocation = result.get("userLocation");
//
//                       }
//
//
//                       var logdate = result.get("logDate");
//                       var type = result.get("type");
//
//
//                        var Act2018 = Parse.Object.extend("Activity_2018");
//
//                        var Act = new Act2018();
//
//                        Act.set("userObjectId",userobjectid);
//                        Act.set("logDateDate",logdatedate);
//                        Act.set("place",place);
//                        if (userlocation) {
//                           Act.set("userLocation",userlocation);
//                        }
//
//                        Act.set("logDate",logdate);
//                        Act.set("type",type);
//
//
//
//
//                       Act.save(null, {
//   success: function(Act) {
//     // Execute any logic that should take place after the object is saved.
//     //console.info('Activity archived with label');
//     //status.success("SZSales completed")
//     //res.send("success");
//      status.success("Score Migration successfull");
//
//   },
//   error: function(result, error) {
//     // Execute any logic that should take place if the save fails.
//     // error is a Parse.Error with an error code and description.
//     console.info('Failed to update Activity, with error code: ' + error.message);
//
//     //res.send("fail");
//   }
// });
//
//
//                 }
//
//                       status.success("Activity Migration successfull");
//             },
//             error: function(error) {
//             status.error("Uh oh, something went wrong.");
//             console.info("Failed!");
//             }
//     })
//
// });
// Parse.Cloud.job("Migrate_AuthFail", function(request, status) {
//
//
//
// var actQuery = Parse.Object.extend("AuthFail");
// var query = new Parse.Query(actQuery);
//
// query.limit(100);
// //query.skip(1000);
//
//
// //query.descending("logDateDate");
//
//     query.find({
//             success:function(results) {
//
//             console.info("total  AuthFails returned = "+results.length);
//
//                 for (var i = 0; i < results.length; i++) {
//                        var result = results[i];
//
//                        if (result.get("userObjectId")) {
//                           var userobjectid = result.get("userObjectId");
//                        }
//                        if (result.get("logDateDate")) {
//                           var logdatedate = result.get("logDateDate");
//                        }
//                       if (result.get("userLocation")) {
//                           var userlocation = result.get("userLocation");
//                       }
//
//
//
//
//                        var ActOrig = Parse.Object.extend("AuthFail_2018");
//                        var Act = new ActOrig();
//
//                        //console.info("got this far = "+userobjectid);
//
//                        //Act.set("userObjectId",userobjectid);
//                        if (userobjectid) {
//                          Act.set("userObjectId", {__type: "Pointer", className: "User", objectId:userobjectid});
//                        }
//                       if (logdatedate) {
//                            Act.set("logDateDate",logdatedate);
//                       }
//                       if (userLocation) {
//                         Act.set("userLocation",userLocation);
//                       }
//
//                       console.info("the three to write = "+userobjectid+" "+logdatedate+" "+userLocation);
//
//                       Act.save(null, {
//   success: function(Act) {
//     // Execute any logic that should take place after the object is saved.
//     console.info('Activity archived with '+userobjectid);
//     //status.success("SZSales completed")
//     //res.send("success");
//      status.success("authfail Migration successfull");
//
//   },
//   error: function(result, error) {
//     // Execute any logic that should take place if the save fails.
//     // error is a Parse.Error with an error code and description.
//     console.info('Failed to update Activity, with error code: ' + error.message);
//
//     //res.send("fail");
//   }
// });
//
//
//                 }
//
//                       //status.success("AuthFail Migration successfull");
//             },
//             error: function(error) {
//             status.error("Uh oh, something went wrong.");
//             console.info("Failed!");
//             }
//     })
//
// });

//pushquery.find({useMasterKey:true,
//success:function(results) {...


Parse.Cloud.job("PRPUSH", function(request, status) {

var sent = [];
var pushquery = new Parse.Query(Parse.Installation);

  // {useMasterKey:true}
//query.greaterThanOrEqualTo("wins", 50);

 pushquery.greaterThanOrEqualTo("appVersion", "2.");

    pushquery.find({useMasterKey:true,
            success:function(results) {

            console.info("total Installations for push = "+results.length);

            for (var i = 0; i < results.length; i++) {

              var dT = +results[i].get("deviceToken");
              //results[i]
              //console.info(" USER ID = "+results[i].get("userObjectId"));
                //console.info(" Device Token = "+results[i].get("deviceToken"));

                //if (results[i].get("installationId") === '96e53143-900e-4137-8724-c283f4b14d05') {

                  console.info(" appVersion match= "+results[i].get("appVersion"));

              if(!sent.includes(dT)){
                  Parse.Push.send({
          //channels: [ "PRRESIDENT","VIRESIDENT" ],
           where: pushquery,
          data: {
                  "content-available": 1
                }
        }, {
          success: function() {
            // Push was successful
            sent.push(dT);
              console.info(" PUSH SUCCEEDED ");

          },
          error: function(error) {
            // Handle error
            //alert("(error"+eval(error));
              console.info(" PUSH FAILED: "+error);
          }
        });


            }


            }





                      status.success("Installation query success");
            },
            error: function(error) {
            status.error("Uh oh, something went wrong.");
            console.info("Failed!");
            }
    })

});

///////////////////////////////////////////////////////////////////////////////////////
   //// Function to locate and translate after any sale is saved ////

///////////////////////////Mailgun API /////////////////////////////////////
Parse.Cloud.afterSave("AuthFail", function(request) {


  if (request.object.get("userObjectId")) {
    var userobjectid = request.object.get("userObjectId");
  }
   if (request.object.get("logDateDate")) {
    var date = request.object.get("logDateDate");
  }
   if(request.object.get("location")){
    var location = request.object.get("location");
  }else{
    var location = 'none avaialable';
  }
  if(request.object.get("type")){
   var type = request.object.get("type");
 }else{
   var type = 'not avaialable';
 }

var userid = userobjectid.get("objectId");

console.info('userobjectid from json = '+userobjectid.get("objectId"));


 var API_KEY = '751b6721f3770b3847b7dab30186df2f-16ffd509-dd7aab75';
 var DOMAIN = 'sandboxcc71126d1a57488d9666c319825317a1.mailgun.org';
 var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

 const data = {
   from: 'postmaster@sandboxcc71126d1a57488d9666c319825317a1.mailgun.org',
   to: 'failure@footprints365.com',
   subject: userobjectid+'Authentication Failure',
   text: userobjectid+ ' failed authentication at '+location+' on '+date+' cause was '+type
 };

 mailgun.messages().send(data, (error, body) => {
   console.info('body = '+body);
 });


 //var uq = Parse.Object.extend("_User");
 var userquery = new Parse.Query(Parse.User);


 userquery.limit(200);

 userquery.equalTo("objectId",userid);

//console.info('got this far');

     userquery.find({
             success:function(results) {

               console.info('results retuend = '+results.length);

               for (var i = 0; i < results.length; i++) {
                var result = results[i]

                 if(result.get("displayName")){
                     var displayname = result.get("displayName");
                   }

                   if(result.get("email")){
                    var email = result.get("email");
                  }

               console.info("user = "+displayname);
               console.info("email = "+email);

               }




                       status.success("getuser successfull");

                       //var text = 'User '+displayname+' has failed authentiction with '+type+' at '+location+' on '+date+'';

                       // var API_KEY = '751b6721f3770b3847b7dab30186df2f-16ffd509-dd7aab75';
                       // var DOMAIN = 'footprints365.com';
                       // var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});
                       //
                       // const data = {
                       //   from: 'postmaster@sandboxcc71126d1a57488d9666c319825317a1.mailgun.org',
                       //   to: 'failure@footprints365.com',
                       //   subject: ' Authentication Failure',
                       //   text: 'testing'
                       // };
                       //
                       // mailgun.messages().send(data, (error, body) => {
                       //   console.info(body);
                       // });
             },
             error: function(error) {
             status.error("Uh oh, something went wrong.");
             console.info("Failed!");
             }
     });


});






/////////////////////////////////////////////////////////////////////////



// var datacenter = "us13";
//
// //bc04ffb869ce1d8c226c7365a5d34359-us13  footprints365 MAILCHIMP API Key
// var MAILCHIMP_URL = "https://randomUser:bc04ffb869ce1d8c226c7365a5d34359-us13" + datacenter + ".api.mailchimp.com/3.0/";
// //var MAILCHIMP_URL = "https://randomUser:5a4ffefdb48b1c9c23d91c7069e681c5-us8@" + datacenter + ".api.mailchimp.com/3.0/";
// //var MAILCHIMP_LIST_NEWSLETTER_ID = "69093aaced"; //7c5c46538a //69093aaced Newsletter app
//
// Parse.Cloud.define("SubscribeUserToMailingList", function(request, response) {
//
//
//   // if (!request.params ||
//   //       !request.params.email){
//   //   response.error("Must supply email address, firstname and lastname to Mailchimp signup");
//   //   return;
//   // }
//
//   // var email = request.params.email;
//   // var firstName = request.params.firstname;
//   // var lastName = request.params.lastname;
//
//   // this converts the email string into an MD5 hash.
//   // this is Required if you want to use a "PUT" which allows add/update of an entry, compared to the POST that allows only adding a new subscriber.
//
//   console.info('email passed to function from params = ' + request.params.email);
//
//   var email = request.params.email;
//
//   var emailHash = md5(email);
//
//   var mailchimpData = {
//     'email_address': email,
//     'status': "subscribed"
//     //'interests':{'app':true}
//   };
//
//   var url = MAILCHIMP_URL + "lists/" + MAILCHIMP_LIST_NEWSLETTER_ID + "/members/" + emailHash;
//
//   // using a "PUT" allows you to add/update an entry.
//   Parse.Cloud.httpRequest({
//     method: 'PUT',
//     url: url,
//     body: JSON.stringify(mailchimpData),
//     success: function(httpResponse) {
//       //console.info(httpResponse.text);
//   console.info('Request success response status ' + httpResponse.status);
//       response.success("Successfully subscribed");
//
//       var USER = Parse.Object.extend("_User");
//       var query = new Parse.Query(USER);
//       query.equalTo("user_email",email);
//       query.limit(1000);
//       query.first({
//         success: function(result) {
//
//          //console.info("items returned for current USER "+results.length);
//
//          result.set("newsletter",true);
//
//           result.save(null, {useMasterKey: true});
//
//         }
//         });
//
//
//
//
//     },
//     error: function(httpResponse) {
//       console.info('Request failed with response code ' + httpResponse.status);
//       console.info('Request failed with response text ' +httpResponse.text);
//
//       response.error('Mailchimp subscribe failed with response code ' + httpResponse.status);
//     }
//   });
// });
/////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Parse.Cloud.job("AuthFailJob", function(request, status) {
//
// var oldQuery = Parse.Object.extend("AuthFail");
// var query = new Parse.Query(oldQuery);
// query.skip(1000);
// query.limit(1000);
//
//     query.find({
//             success:function(results) {
//
//             console.info("total AuthFail = "+results.length);
//                 for (var i = 0; i < results.length; i++) {
//                        var result = results[i];
//
//                        if (result.get("userObjectId")) {
//                           var userobjectid = result.get("userObjectId");
//
//                        }
//                        if (result.get("logDateDate")) {
//                           var logdatedate = result.get("logDateDate");
//                        }
//                       if (result.get("userLocation")) {
//                         //var point = new Parse.GeoPoint({latitude: 40.0, longitude: -30.0});
//                           var userlocation = new Parse.GeoPoint(result.get("userLocation"));
//                       }
//
//
//                        var af2018 = Parse.Object.extend("AuthFail_2018");
//
//                        var auth = new af2018();
//
//                        if (userobjectid) {
//                          auth.set("userObjectId", userobjectid);
//                        }
//                       if (logdatedate) {
//                            auth.set("logDateDate",logdatedate);
//                       }
//                       if (userlocation) {
//                         auth.set("userLocation",userlocation);
//                       }
//
//
//
//
//
//                       auth.save(null, {
//   success: function(auth) {
//     // Execute any logic that should take place after the object is saved.
//     //console.info('Sale archived with label ='+salelabel);
//     //status.success("SZSales completed")
//     //res.send("success");
//      status.success("AuthFail Migration successfull");
//
//   },
//   error: function(result, error) {
//     // Execute any logic that should take place if the save fails.
//     // error is a Parse.Error with an error code and description.
//     console.info('Failed to update auth, with error code: ' + error.message);
//
//     //res.send("fail");
//   }
// });
//
//
//                 }
//
//                       status.success("AuthFail Migration successfull");
//             },
//             error: function(error) {
//             status.error("Uh oh, something went wrong.");
//             console.info("Failed!");
//             }
//     })
//
// });


// Parse.Cloud.job("Clean_AuthFail", function(request, status) {
//
// var actQuery = Parse.Object.extend("AuthFail_2018");
// var query = new Parse.Query(actQuery);
//
// var day1 = new Date(2018,00,01);
// var day2 = new Date(2018,10,20);
//
//
// //query.greaterThan("logDateDate", day2);
// query.startsWith("logDateDate", "2017");
// //query.startsWith("logDateDate", "2017");
//
// query.limit(1500);
//     query.find({
//             success:function(results) {
//
//             console.info("total 2018 activity needing to cleam = "+results.length);
//                 for (var i = 0; i < results.length; i++) {
//                        var result = results[i];
//
//                       //console.info("logDateDate = "+result.get("logDateDate"))
//
// result.destroy({
// success: function(myObject) {
// // The object was deleted from the Parse Cloud
// //console.info("Sale deleted from SampleSales = "+salelabel);
//
// //console.info("Destroy: "+result);
// console.info("deleted = "+result.get("logDateDate"));
// },
// error: function(myObject, error) {
// // The delete failed.
// // error is a Parse.Error with an error code and message.
// }
// });
//
//
//
//
//
//                 }
//
//                       status.success("aUTHFAIL cleaned");
//             },
//             error: function(error) {
//             status.error("Uh oh, something went wrong.");
//             console.info("Failed!");
//             }
//     })
//
// });
