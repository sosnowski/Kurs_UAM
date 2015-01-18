var fs = require('fs');
var verifySent, verifyLabel, verifyEmail, saveToFile, loadFromFile, containsFields, hasFieldsFilled;

containsFields = function (record, fields) {
	var fieldMissing = fields.some(function (field) {
		return !record[field];
	});
	return !fieldMissing;
};

hasFieldsFilled = function (record, fields) {
	var recordsFields = Object.keys(record);

	var fieldNotFilled = recordsFields.some(function (recField) {
		return fields.indexOf(recField) > -1 && !record[recField];
	});
	return !fieldNotFilled;
};

verifySent = function (record, onValid, onInvalid) {
	if (!record || typeof record !== 'object' || !containsFields(record, ['id', 'title', 'receivers', 'content', 'sent'])) {
		onInvalid(record);
	}
	else {
		onValid(record);
	}
};

verifyEmail = function (record, onValid, onInvalid) {
	if (!record || typeof record !== 'object' || !hasFieldsFilled(record, ['id', 'title', 'sender', 'content', 'received'])) {
		onInvalid(record);
	} else {
		onValid(record);
	}
};

saveToFile = function (fileName, data) {
	var json = JSON.stringify(data, null, 2);
	fs.writeFile(__dirname + '/data/' + fileName + '.json', json, function (err) {
		if (err) {
			throw err; //fancy error handling :P
		}
	});
};

loadFromFile = function (fileName, callback) {
	fs.readFile(__dirname + '/data/' + fileName + '.json', function (err, data) {
		if (err) {
			callback(err);
		} else {
			callback(null, JSON.parse(data));
		}
	});
};

module.exports = {
	verifySent: verifySent,
	verifyLabel: verifyLabel,
	verifyEmail: verifyEmail,
	saveToFile: saveToFile,
	loadFromFile: loadFromFile
};
