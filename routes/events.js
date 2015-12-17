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
exports.events = function(req, res) {
    var responseJSON = {
        success:true,
        authenticated:true,
        message:"events",
        result:[
            {
                eventID:101,
                externalKey:"key101",
                code:"code101",
                name:"name 101",
                startsOn:"2015-06-30T09:00:00GMT",
                endsOn:"2015-07-02T16:00:00GMT"
            },
            {
                eventID:102,
                externalKey:"key102",
                code:"code102",
                name:"name 102",
                startsOn:"2015-07-01T09:00:00GMT",
                endsOn:"2015-07-01T16:00:00GMT"
            },
            {
                eventID:103,
                externalKey:"key103",
                code:"code103",
                name:"name 103",
                startsOn:"2015-06-28T09:00:00GMT",
                endsOn:"2015-08-07T16:00:00GMT"
            }
        ]
    };
    res.contentType("application/json");
    res.send(JSON.stringify(responseJSON),200);
}
