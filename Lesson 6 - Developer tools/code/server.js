var express = require('express'),
    bodyParser = require('body-parser');
/// http://expressjs.com/api.html

var app = express(),
    numbers = [];

app.use(express.static(__dirname + '/'));
app.use(bodyParser.text()); // parse text

//GET /today returns date in string
app.get('/today', function (req, res) {
    setTimeout(function () {
        res.send((new Date()).toLocaleDateString());
    }, 1000);
});

//POST /numbers should save number for later
//GET /numbers should return comma separated list of numbers
//DELETE /numbers should
//GET /sum should return sum of stored numbers

app.listen(8080, function () {
    console.log('Server is running on localhost:' + this.address().port);
});
