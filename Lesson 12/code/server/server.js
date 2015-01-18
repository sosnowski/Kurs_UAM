var express    = require('express');
var bodyParser = require('body-parser');
var _          = require('lodash');
var faker      = require('faker');
var app        = express();
var helpers    = require('./helpers');
var emails = [], sent = [];
var invalidRequest = function (req, res) {
	return function (record) {
		req.status(400).send('Invalid request format!');
	};
};

app.use(express.static(__dirname + '/../'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse text
app.use(bodyParser.text());

// parse application/json
app.use(bodyParser.json());

//define routing

app.get('/emails', function (req, res) {
	setTimeout(function () {
		res.json(emails);
	}, 1000);
});

app.get('/emails/:id', function (req, res) {
	var record = _.find(emails, function (email) {
		return email.id === req.params.id;
	});

	if (!record) {
		res.status(404).send('Email not found');
	} else {
		res.json(record);
	}
});

app.put('/emails/:id', function (req, res) {
	var record = _.find(emails, function (email) {
		return email.id === req.params.id;
	});

	if (!record) {
		res.status(404).send('Email not found');
	} else {
		helpers.verifyEmail(req.body, function (newRecord) {
			_.assign(record, newRecord);
			res.json(record);

			helpers.saveToFile('emails', emails);
		}, invalidRequest(req, res));
	}
});

app.delete('/emails/:id', function (req, res) {
	var emailIndex = _.findIndex(emails, function (email) {
		return email.id === req.params.id;
	});

	if (emailIndex === -1) {
		res.status(404).send('Email not found');
	} else {
		res.json(emails.splice(emailIndex, 1)[0]);
	}
});


app.get('/sent', function (req, res) {
	setTimeout(function () {
		res.json(sent);
	}, 1000);
});

app.post('/sent', function (req, res) {
	helpers.verifySent(req.body, function (record) {
		sent.push(record);
		res.json(record);

		helpers.saveToFile('sent', sent);
	}, invalidRequest(req, res));
});

//load saved emails

helpers.loadFromFile('emails', function (err, data) {
	if (err) {
		throw err;
	}
	emails = data;
});

helpers.loadFromFile('sent', function (err, data) {
	if (err) {
		throw err;
	}
	sent = data;
});

//"receive" new email every 2 minutes
setInterval(function () {
	emails.push({
		id: "" + Date.now(),
		read: false,
		title: faker.lorem.sentence(),
		sender: faker.internet.email(),
		content: faker.lorem.paragraphs(3),
		received: Date.now()
	});
	helpers.saveToFile('emails', emails);
	console.log('New email added');
}, 1000 * 60);



var server = app.listen(8080, function () {

  var port = server.address().port;

  console.log('Example app listening at http://localhost:%s', port);

});
