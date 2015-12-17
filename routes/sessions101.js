/*
 {
 success: {boolean},
 authenticated: {boolean},
 message: {string},
 result: [
 {
 eventID: {integer},
 externalKey: {string},
 code: {string},
 name: {string},
 startsOn: {timestamp},
 endsOn: {timestamp}
 }, {
 eventID: {integer},
 externalKey: {string},
 code: {string},
 */

function sessionEntry(key, startsOn, endsOn) {
    return {
        prodID: key,
        externalKey: "key"+key,
        code: "code"+key,
        name: "name "+key,
        description: "scenario "+key,
        location: "room "+key,
        startsOn: startsOn,
        endsOn: endsOn,
        isTicketed: true,
        capacity: 60,
        currentAttendance: 55,
        soldOutMsg:"full",
        sortOrder: 1,
        cancelled: false,
        defaultMinAttendanceTime: 12,
        allowOverrides: false,
        scenarioID: 1,
        scenarioDesc: "scenario "+key
    };
}

exports.sessions101 = function(req, res) {
    
    var responseJSON = {
    success:true,
    authenticated:true,
    message:"sessions101",
        result:[
            sessionEntry(101,"2015-06-30T09:00:00GMT", "2015-06-30T10:00:00GMT"),
            sessionEntry(102,"2015-06-30T09:00:00GMT", "2015-06-30T10:00:00GMT"),
            sessionEntry(103,"2015-06-30T10:30:00GMT", "2015-06-30T13:00:00GMT"),
            sessionEntry(104,"2015-06-30T13:00:00GMT", "2015-06-30T16:00:00GMT"),
            sessionEntry(105,"2015-07-01T08:00:00GMT", "2015-07-01T09:00:00GMT"),
            sessionEntry(106,"2015-07-01T09:00:00GMT", "2015-07-01T16:00:00GMT"),
            sessionEntry(107,"2015-07-01T09:00:00GMT", "2015-07-01T16:00:00GMT"),
        ]
    };
    res.contentType("application/json");
    res.send(JSON.stringify(responseJSON),200);
}

