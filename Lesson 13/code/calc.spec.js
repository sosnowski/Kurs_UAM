describe('Calculator', function () {
	var cal;
	beforeEach(function () {
		//test setup
		cal = new Calc();
	});

	describe('Adding two values', function () {

	});

	describe('Multiplying values', function () {

	});

	describe('Dividing values', function () {

	});

	describe('Custom operation', function () {
		var customOp;
		beforeEach(function () {
			customOp = jasmine.createSpy('customOperation').and.returnValue(666);
		});
	});

	afterEach(function () {
		//clear after test
	});
});
