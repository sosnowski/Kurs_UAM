var express = require('express');
var faker = require('faker');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('./'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse text
app.use(bodyParser.text());

// parse application/json
app.use(bodyParser.json());



app.get('/api/todos', function (req, res) {
	var records = [], number = Math.floor(Math.random() * 10) + 3;
	for (var i = 0; i < number; i++) {
		records.push({
			id: i,
			value: faker.lorem.words(2).join(' ')
		});
	}
	setTimeout(function () {
		res.json(records);
	}, 500);
});

app.post('/api/todos', function (req, res) {
	var data;
	try {
		data = JSON.parse(req.body);
		if (!req.body || !Array.isArray(data)) {
			throw new Error('Wrong data format!');
		}
		if (!data.length) {
			throw new Error('Passed array is empty');
		}
		res.json({
			status: true,
			msg: 'Saved ' + data.length + ' elements'
		});
	} catch (e) {
		res.json({
			status: false,
			msg: e.message
		});
	}

});


var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
