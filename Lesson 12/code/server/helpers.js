var verifySendRequest, verifyLabel, verifyEmail;

verifySendRequest = function (record, onValid, onInvalid) {
	if (!record || typeof record !== 'object') {
		onInvalid(record);
	}
	else {
		onValid(record);
	}
};

verifyLabel = function (record, onValid, onInvalid) {
	if (!record || typeof record !== 'object') {
		onInvalid(record);
	} else {
		onValid(record);
	}
};

verifyEmail = function (record, onValid, onInvalid) {
	if (!record || typeof record !== 'object') {
		onInvalid(record);
	} else {
		onValid(record);
	}
};

module.exports = {
	verifySendRequest: verifySendRequest,
	verifyLabel: verifyLabel,
	verifyEmail: verifyEmail
};
