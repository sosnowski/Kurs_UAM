var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('./'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse text
app.use(bodyParser.text());

// parse application/json
app.use(bodyParser.json());

var server = app.listen(8080, function () {

  var port = server.address().port;

  console.log('Example app listening at http://localhost:%s', port);

});
