var express = require('express');
var app = express();
var authentication = require('./routes/authentication')
var events = require('./routes/events')
var bodyParser = require('body-parser')
var sessions101 = require('./routes/sessions101');
var sessions102 = require('./routes/sessions102');
var sessions103 = require('./routes/sessions103');
var userScan = require('./routes/userScan');
app.use(bodyParser());
app.disable('etag');

app.post('/authenticate', authentication.authenticate);
app.get('/events/earliestEndDate/*', events.events);
app.get('/events/101/products/earliestEndDate/*', sessions101.sessions101);
app.get('/events/102/products/earliestEndDate/*', sessions102.sessions102);
app.get('/events/103/products/earliestEndDate/*', sessions103.sessions103);
app.get('products/101/session_scans/individuals/%@', userScan.userScan);
app.get('/test', function(req,res) {
  res.send('This worked');
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
