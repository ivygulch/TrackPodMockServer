exports.authenticate = function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var applicationKey = req.body.applicationKey;
    if (password == '') {
        authenticateFailure(res,username);
    } else {
        authenticateSuccess(res,username);
    }
};

function authenticateFailure(res, username) {
    var responseJSON = {
        success:false,
        message:"authentication failure for "+username,
        authenticated:false
    };
    res.contentType("application/json");
    res.send(JSON.stringify(responseJSON),404);
}

function authenticateSuccess(res, username) {
    var responseJSON = {
        authToken:"authToken",
        refreshToken:"refreshToken",
        expiration:"",
        firstName:"first_"+username,
        lastName:"last_"+username,
        email:"email_"+username
    };
    res.contentType("application/json");
    res.send(JSON.stringify(responseJSON));
}
