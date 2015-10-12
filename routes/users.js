/*
 {
 success: {boolean},
 authenticated: {boolean},
 message: {string},
 result: [
 {
 indID:{indID},
 key:{key},
 externalKey":{externalKey},
 badgeNumber":{badgeNumber},
 firstName":{firstName},
 lastName":{lastName},
 emailAddress":{emailAddress},
 companyName":{companyName},
 lastScannedOn":{lastScannedOn},
 direction":{direction}
 }, {
 prodID: {integer},
 externalKey: {string},
 code: {string},
 */
exports.users = function(req, res) {
    var responseJSON = {
        success:true,
        authenticated:true,
        message:"users",
        result:[
            {
                indID:1,
                key:"key101",
                externalKey:"key101",
                badgeNumber:"DummyGoodID",
                firstName:"1ryan",
                lastName:"Sjoquist",
                emailAddress:"exe@gmail.com",
                companyName:"sunetos",
                lastScannedOn:"2015-06-01T09:00:00GMT",
                direction:"in"
                },
            {
                indID:2,
                key:"key102",
                externalKey:"key102",
                badgeNumber:"DummyGoodID",
                firstName:"2ryan",
                lastName:"Sjoquist",
                emailAddress:"exe@gmail.com",
                companyName:"sunetos",
                lastScannedOn:"2015-07-01T09:00:00GMT",
                direction:"out"
            },
            {
                indID:3,
                key:"key103",
                externalKey:"key103",
                badgeNumber:"DummyGoodID",
                firstName:"3ryan",
                lastName:"Sjoquist",
                emailAddress:"exe@gmail.com",
                companyName:"sunetos",
                lastScannedOn:"2015-08-01T09:00:00GMT",
                direction:"out"
            }
        ]
        };
    res.contentType("application/json");
    res.send(JSON.stringify(responseJSON),200);
}
