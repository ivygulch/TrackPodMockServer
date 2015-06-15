var express = require('express');
var app = express();
var authentication = require('./routes/authentication')
var bodyParser = require('body-parser');

app.use(bodyParser());

app.post('/authenticate', authentication.authenticate);

app.get('/test', function(req,res) {
  res.send('This worked');
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
