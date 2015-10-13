describe("mapArray function", function() {

	it('mapArray should be a function', function () {
		expect(typeof UAM.mapArray).toBe('function');
	});

	describe('Basic mapping', function () {
		var arr, spy, newArray;

		beforeEach(function () {
			arr  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
			spy = jasmine.createSpy('callback').and.callFake(function (element) {
				return element * 2;
			});

			newArray = UAM.mapArray(arr, spy);
		});

		it('Should call the callback for every array element', function () {
			expect(spy.calls.count()).toBe(10);
		});

		it('Should call the callback with proper arguments', function () {
			expect(spy.calls.argsFor(0)).toEqual([1, 0, arr]);
			expect(spy.calls.argsFor(1)).toEqual([2, 1, arr]);
			expect(spy.calls.argsFor(2)).toEqual([3, 2, arr]);
			expect(spy.calls.argsFor(3)).toEqual([4, 3, arr]);
			expect(spy.calls.argsFor(4)).toEqual([5, 4, arr]);
			expect(spy.calls.argsFor(5)).toEqual([6, 5, arr]);
			expect(spy.calls.argsFor(6)).toEqual([7, 6, arr]);
			expect(spy.calls.argsFor(7)).toEqual([8, 7, arr]);
			expect(spy.calls.argsFor(8)).toEqual([9, 8, arr]);
			expect(spy.calls.argsFor(9)).toEqual([10, 9, arr]);
		});

		it('Should create new array, with proper set of results', function () {
			expect(newArray).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
		});

		it('Should not modify the original array', function () {
			expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		});
	});

	describe('Callback context', function () {
		var arr, spy, newArray, ctx;

		beforeEach(function () {
			arr  = [1, 2, 3, 4, 5];
			spy = jasmine.createSpy('callback').and.callFake(function (element) {
				return element + this.by;
			});
			ctx = {
				by: 2
			};

			newArray = UAM.mapArray(arr, spy, ctx);
		});


		it('Should create proper results based on the context', function () {
			expect(newArray).toEqual([3, 4, 5, 6, 7]);
		});

		it('Should call callback in a proper context', function () {
			expect(spy.calls.first().object).toBe(ctx);
		});
	});
});
