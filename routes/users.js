/*
 {
 success: {boolean},
 authenticated: {boolean},
 message: {string},
 result: [
 {
 badgeNumber: {string},
 direction: {string},
 scannedOn: {timestamp},
 override: {boolean}
 } ]
 }
   */
exports.users = function(req, res) {
    var responseJSON = {
        success:true,
        authenticated:true,
        message:"users",
        result:[
            {
                badgeNumber:"DummyScanTwiceID",
                direction:"in",
                scannedOn:"2015-06-01T09:00:00GMT",
                override:false
            }
        ]
        };
    res.contentType("application/json");
    res.send(JSON.stringify(responseJSON),200);
}
