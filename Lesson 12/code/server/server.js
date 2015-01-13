var express    = require('express');
var bodyParser = require('body-parser');
var _          = require('lodash');
var app        = express();
var helpers    = require('./helpers');
var emails = [], sent = [], labels = [];
var invalidRequest = function (req, res) {
	return function (record) {

	};
};

app.use(express.static(__dirname + '/../'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse text
app.use(bodyParser.text());

// parse application/json
app.use(bodyParser.json());


//IN PROGRESS
// //define routing here

// // GET SENT EMAILS
// app.get('/sent', function (req, res) {
// 	setTimeout(function () {
// 		res.json(sent);
// 	}, 600);
// });

// //SEND EMAIL

// app.post('/sent', function (req, res) {
// 	helpers.verifySendRequest(req.body, function (record) {
// 		record.id = Date.now();

// 		sent.push(record);
// 		res.json(record);
// 	}, invalidRequest(req, res));
// });

// //GET LABELS
// app.get('/labels', function (req, res) {
// 	setTimeout(function () {
// 		res.json(labels);
// 	}, 600);
// });

// //CREATE LABEL
// app.post('/labels', function (req, res) {
// 	helpers.verifyLabel(req.body, function (record) {
// 		record.id = Date.now();
// 		labels.push(record);
// 		res.json(record);
// 	}, invalidRequest(req, res));
// });

// app.put('/labels/:id', function (req, res) {
// 	helpers.verifyLabel(req.body, function (newRecord) {
// 		var currentRecord = _.find(labels, function (label) {
// 			return label.id === req.params.id;
// 		});
// 		if (!currentRecord) {
// 			res.send(404, '');
// 		} else {
// 			_.assign(currentRecord, newRecord);
// 			res.json(currentRecord);
// 		}
// 	}, invalidRequest(req, res));
// });

// //GET ALL EMAILS | PARAMS: ?labels=label1,label2&query=test
// app.get('/emails', function (req, res) {
// 	//TODO: filters
// 	var labels = req.query.labels ? req.query.labels.split(',') : [];
// 	setTimeout(function () {
// 		res.json(emails);
// 	});
// });

// //GET ONE EMAIL
// app.get('/emails/:id', function (req, res) {
// 	var record = _.find(emails, function (email) {
// 		return email.id === req.params.id;
// 	});

// 	if (!record) {
// 		res.send(404, '');
// 	} else {
// 		res.json(record);
// 	}
// });

// //CREATE EMAIL
// app.post('/emails', function (req, res) {
// 	helpers.verifyEmail(req.body, function (record) {
// 		record.id = Date.now();
// 		emails.push(record);
// 		res.json(record);
// 	}, invalidRequest(req, res));
// });

// //UPDATE EMAIL
// app.put('/emails/:id', function (req, res) {
// 	helpers.verifyEmail(req.body, function (newRecord) {
// 		var currentRecord = _.find(labels, function (label) {
// 			return label.id === req.params.id;
// 		});
// 		if (!currentRecord) {
// 			res.send(404, '');
// 		} else {
// 			_.assign(currentRecord, newRecord);
// 			res.json(currentRecord);
// 		}
// 	}, invalidRequest(req, res));
// });




var server = app.listen(8080, function () {

  var port = server.address().port;

  console.log('Example app listening at http://localhost:%s', port);

});
