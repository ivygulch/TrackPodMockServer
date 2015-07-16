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
exports.sessions102 = function(req, res) {
    
    var responseJSON = {
    success:true,
    authenticated:true,
    message:"sessions102",
    result:[
            {
            prodID: 101,
            externalKey: "key101",
            code: "code101",
            name: "name 101",
            description: "scenario 1",
            location: "room 101",
            startsOn: "2015-07-01T09:00:00GMT",
            endsOn: "2015-07-01T16:00:00GMT",
            isTicketed: true,
            capacity: 60,
            currentAttendance: 55,
            soldOutMsg:"full",
            sortOrder: 1,
            cancelled: false,
            defaultMinAttendanceTime: 12,
            allowOverrides: true,
            scenarioID: 1,
            scenarioDesc: "scenario 1"
            },
            {
            prodID: 102,
            externalKey: "key102",
            code: "code102",
            name: "name 102",
            description: "scenario 2",
            location: "room 102",
            startsOn: "2015-07-01T09:00:00GMT",
            endsOn: "2015-07-01T16:00:00GMT",
            isTicketed: true,
            capacity: 60,
            currentAttendance: 55,
            soldOutMsg:"full",
            sortOrder: 1,
            cancelled: false,
            defaultMinAttendanceTime: 12,
            allowOverrides: true,
            scenarioID: 1,
            scenarioDesc: "scenario 2"
            },
            {
            prodID: 103,
            externalKey: "key103",
            code: "code103",
            name: "name 103",
            description: "scenario 3",
            location: "room 103",
            startsOn: "2015-07-01T09:00:00GMT",
            endsOn: "2015-07-01T16:00:00GMT",
            isTicketed: true,
            capacity: 60,
            currentAttendance: 55,
            soldOutMsg:"full",
            sortOrder: 1,
            cancelled: false,
            defaultMinAttendanceTime: 12,
            allowOverrides: true,
            scenarioID: 1,
            scenarioDesc: "scenario 3"
            }
            ]
    };
    res.contentType("application/json");
    res.send(JSON.stringify(responseJSON),200);
}

