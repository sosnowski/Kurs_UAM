describe("addManyValues function", function() {
	var addManyValues;

	beforeEach(function () {
		addManyValues = window.UAM.addManyValues;
	});

	it('The function addManyValues should be defined', function () {
		expect(typeof addManyValues).toBe('function');
	});

	it('Should return a function', function () {
		expect(typeof addManyValues()).toBe('function');
	});

	describe('Adding values', function () {
		var addMore;
		beforeEach(function () {
			addMore = addManyValues(2, 3, 5);
		});

		it('Should add all values provided to both functions', function () {
			expect(addMore(3, 1)).toBe(14);
		});

		it('Should add new and old values', function () {
			expect(addMore(7, 3)).toBe(20);
		});

		it('Should accept many arguments', function () {
			expect(addMore(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)).toBe(21);
		});

		it('Should add different values', function () {
			var addOther = addManyValues(1, 1, 1);

			expect(addOther(2, 2, 2, 1)).toBe(10);
		});

	});

});
