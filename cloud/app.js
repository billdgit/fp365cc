
Parse.Cloud.job("PRPUSH", function(request, status) {

var sent = [];
var pushquery = new Parse.Query(Parse.Installation);

  // {useMasterKey:true}
//query.greaterThanOrEqualTo("wins", 50);

 pushquery.greaterThanOrEqualTo("appVersion", "2.4");

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
    var userobjectid = request.object.get("userObjectId").id;
  }
   if (request.object.get("logDateDate")) {
    var date = request.object.get("logDateDate");
  }
   if(request.object.get("location")){
    var location = request.object.get("location");
  }else{
    var location = 'none available';
  }
  if(request.object.get("type")){
   var type = request.object.get("type");
 }else{
   var type = 'not available';
 }



console.info('userobjectid with id = '+userobjectid);





 //var uq = Parse.Object.extend("_User");

 if (type === "biometric-changed") {


 var userquery = new Parse.Query(Parse.User);


 userquery.limit(200);

 userquery.equalTo("objectId",userobjectid);

//console.info('got this far');

     userquery.first({
             success:function(result) {

               console.info('result retuend = '+result);

               // for (var i = 0; i < results.length; i++) {
               //  var result = results[i]

                 if(result.get("displayName")){
                     var displayname = result.get("displayName");
                      console.info("user displayname = "+displayname);
                   }

                   if(result.get("username")){
                    var email = result.get("username");
                    console.info("email from username = "+email);
                  }


               //}


               var API_KEY = '751b6721f3770b3847b7dab30186df2f-16ffd509-dd7aab75';
               var DOMAIN = 'footprints365.com';
               var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

               const data = {
                 from: 'fail@footprints365.com',
                 to: email,
                 subject: displayname+' Authentication Failure',
                 text: displayname+' failed authentication in '+location+' with a '+type+' on '+date
               };

               mailgun.messages().send(data, (error, body) => {
                 //console.info('body = '+body);
               });


                       status.success("getuser successfull");

             },
             error: function(error) {
             status.error("Uh oh, something went wrong.");
             console.info("Failed!");
             }
     });


}
});






/////////////////////////////////////////////////////////////////////////
