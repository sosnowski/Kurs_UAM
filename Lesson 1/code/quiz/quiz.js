/* jshint ignore:start */

/* Quiz: Fill the method call with the proper value. See the example in the first question */
describe('Guess the value of the variable', function () {
    
	it('Question 1', function () {
		var a;

		expect(a).toBe(undefined); //!!!!!!!!!!!!!!!!!
	});

	it('Question 2', function () {
		var a = 1, b = "2";

		expect(a + b).toBe(); //!!!!!!!!!!!!!!!!!
	});

	it('Question 3', function () {
		var a = "a" * 2, b = 1;

		if (a) {
			b = 3;
		}
        
		expect(b).toBe(); //!!!!!!!!!!!!!!!!!
	});

	it('Question 4', function () {
		expect(typeof null).toBe(); //!!!!!!!!!!!!!!!!!
		expect(typeof 3).toBe(); //!!!!!!!!!!!!!!!!!
	});

	it('Question 5', function () {
		if (true) {
			var a = 1;
		}

		expect(a).toBe(); //!!!!!!!!!!!!!!!!!
	});

	it('Question 6', function () {
		var arr = [1, 2, 3, undefined, undefined];
		expect(arr.length).toBe(); //!!!!!!!!!!!!!!!!!
	});

	it('Question 7', function () {
		var arr = [1];
		arr[99] = 2;
		expect(arr.length).toBe(); //!!!!!!!!!!!!!!!!!
	});


	it('Question 8', function () {
		var a, obj = {};

		obj[a] = 12;

		expect(Object.keys(obj)[0]).toBe(); //!!!!!!!!!!!!!!!!!
	});

	it('Question 9', function () {
		var foo = 1;

		var bar = function () {
			var foo;
            
			expect(foo).toBe(); //!!!!!!!!!!!!!!!!!

			foo = 3;
			b = 4;
			return foo + 2;
		};

		expect(foo).toBe(); //!!!!!!!!!!!!!!!!!
		bar = bar();

		expect(b).toBe(); //!!!!!!!!!!!!!!!!!
		expect(bar).toBe(); //!!!!!!!!!!!!!!!!!
	});

	it('Question 10', function () {
		var err = false, result;

		result = 2 * "5";
		if (result === NaN) {
			err = true;
		}
		expect(err).toBe(); //!!!!!!!!!!!!!!!!!
	});

	it('Question 11', function () {
		expect(false || true || false).toBe(); //!!!!!!!!!!!!!!!!!
	});

	it('Question 12', function () {
		expect(false || "" || null || "0" || "test" || NaN).toBe(); //!!!!!!!!!!!!!!!!!
	});

	it('Question 13', function () {
		expect((true && ("t" + false) && {} && (1 - 1)) || ([undefined].length)).toBe(); //!!!!!!!!!!!!!!!!!
	});
});
/* jshint ignore:end */
