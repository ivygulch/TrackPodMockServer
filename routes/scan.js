7/*
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
exports.scan = function(req, res) {
    console.log("scan\n");
    console.log(JSON.stringify(req.body));
    
    if (req.body.badgeNumber == "DummyGoodID") {
        scanGood(res)
    }
    else if (req.body.badgeNumber == "DummyScanTwiceID") {
        scanTwice(res)
    }
    else if(req.body.badgeNumber == "DummyProduct1"){
        scanProduct1(res)
    }
    else if(req.body.badgeNumber == "DummyProduct2"){
        scanProduct2(res)
    }
    else if(req.body.badgeNumber == "DummyProduct3"){
        scanProduct3(res)
    }
    else{
        scanBad(res)
    }
    
}


function scanBad(res){
    console.log("bad scan");

    var responseJSON = {
    success:false,
    authenticated:true,
    message:"unauthorized",
    prodID:101,
    result:
        {
        indID: 4,
        firstName: "ryan",
        lastName: "me",
        emailAddress: "something",
        companyName: "somethingLLC",
        authorized: false,
        reason: "Not Authorized",
        currentAttendance:1,
        remaining:1
        }
        
    };
    res.contentType("application/json");
    res.send(JSON.stringify(responseJSON),200);
}


function scanTwice(res){
    console.log("twice scanned");
    var responseJSON = {
    success:true,
    authenticated:false,
    message:"user1",
    prodID:101,
    result:
        {
        indID: 1,
        firstName: "ryan",
        lastName: "me",
        emailAddress: "something",
        companyName: "somethingLLC",
        authorized: false,
        reason: "Scanning Twice",
        currentAttendance:1,
        remaining:1
        }
        
    };
    res.contentType("application/json");
    res.send(JSON.stringify(responseJSON),200);

}

function scanProduct1(res)
{
    var responseJSON = {
    success:true,
    authenticated:true,
    message:"user1",
    prodID:101,
    result:
        {
        indID: 2,
        firstName: "ryan",
        lastName: "me",
        emailAddress: "something",
        companyName: "somethingLLC",
        authorized: true,
        reason: "product 1",
        currentAttendance:1,
        remaining:1
        }
        
    };
    res.contentType("application/json");
    res.send(JSON.stringify(responseJSON),200);
}
function scanProduct2(res)
{
    var responseJSON = {
    success:true,
    authenticated:true,
    message:"user1",
    prodID:101,
    result:
        {
        indID: 2,
        firstName: "ryan",
        lastName: "me",
        emailAddress: "something",
        companyName: "somethingLLC",
        authorized: true,
        reason: "product 2",
        currentAttendance:2,
        remaining:0
        }
        
    };
    res.contentType("application/json");
    res.send(JSON.stringify(responseJSON),200);
}
function scanProduct3(res)
{
    var responseJSON = {
    success:true,
    authenticated:true,
    message:"user1",
    prodID:101,
    result:
        {
        indID: 2,
        firstName: "ryan",
        lastName: "me",
        emailAddress: "something",
        companyName: "somethingLLC",
        authorized: false,
        reason: "product 3",
        currentAttendance:2,
        remaining:0
        }
        
    };
    res.contentType("application/json");
    res.send(JSON.stringify(responseJSON),200);
}

function scanGood(res)
{
    var responseJSON = {
    success:true,
    authenticated:true,
    message:"user1",
    prodID:101,
    result:
        {
        indID: 3,
        firstName: "ryan",
        lastName: "me",
        emailAddress: "something",
        companyName: "somethingLLC",
        authorized: true,
        reason: "reason",
        currentAttendance:12,
        remaining:82
        }
        
    };
    res.contentType("application/json");
    res.send(JSON.stringify(responseJSON),200);
}

