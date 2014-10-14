describe("Event Emitter class", function() {
	var ee;

	beforeEach(function () {
		ee  = new UAM.EventEmitter();
	});

	describe('Basics', function () {
		it('Should return an object', function () {
			expect(typeof ee).toBe('object');
			expect(ee).not.toBe(null);
		});

		it('Should return an instance of a class', function () {
			expect(ee instanceof UAM.EventEmitter).toBe(true);
		});

		it('Should create new instance every time', function () {
			var ee2 = new UAM.EventEmitter();

			expect(ee).not.toBe(ee2);
		});

		it('Should have two main ee methods', function () {
			expect(typeof ee.on).toBe('function');
			expect(typeof ee.emit).toBe('function');
		});

		it('Should have an internal, instance unique collection of listeners', function () {
			var ee2 = new UAM.EventEmitter();
			expect(ee.listeners).toBeDefined();
			expect(ee.listeners).not.toBe(ee2.listeners);
		});

		it('Should have methods in the prototype not in the instance', function () {
			expect(ee.hasOwnProperty('on')).toBe(false);
			expect(ee.hasOwnProperty('emit')).toBe(false);
		});

		it('Should share the methods in the prototype', function () {
			var ee2 = new UAM.EventEmitter();
			expect(ee.on).toBe(ee2.on);
			expect(ee.emit).toBe(ee2.emit);
		});
	});

	describe('Basic listeners', function () {
		var list1, list2, list3, context;

		beforeEach(function () {
			context = { key: 'value' };
			list1 = jasmine.createSpy('Listener1');
			list2 = jasmine.createSpy('Listener2');
			list3 = jasmine.createSpy('Listener3');

			ee.on('test1', list1);
			ee.on('test1', list2, context);
			ee.on('test2', list3);
		});

		it('Should execute the listeners for the given event', function () {
			ee.emit('test1');
			expect(list1).toHaveBeenCalled();
			expect(list2).toHaveBeenCalled();
		});

		it('Every listener should be executed only once', function () {
			ee.emit('test1');
			expect(list1.calls.count()).toBe(1);
			expect(list2.calls.count()).toBe(1);
		});

		it('Should not execute listeners for other event', function () {
			ee.emit('test1');
			expect(list3).not.toHaveBeenCalled();
		});

		it('Should execute listener in the default global context', function () {
			ee.emit('test2');

			expect(list3).toHaveBeenCalled();
			expect(list3.calls.mostRecent().object).toBe(window);
		});

		it('Should execute listener in the provided custom context', function () {
			ee.emit('test1');
			expect(list2.calls.mostRecent().object).toBe(context);
		});

		it('Should execute the listener with proper arguments', function () {
			ee.emit('test1', 1, 2, "3");

			expect(list1).toHaveBeenCalledWith(1, 2, "3");
			expect(list2).toHaveBeenCalledWith(1, 2, "3");
		});
	});

	describe('Removing listeners', function () {
		var res1, res2, res3, list1, list2, list3;

		beforeEach(function () {
			list1 = jasmine.createSpy('Listener1');
			list2 = jasmine.createSpy('Listener2');
			list3 = jasmine.createSpy('Listener3');

			res1 = ee.on('test1', list1);
			res2 = ee.on('test1', list2);
			res3 = ee.on('test1', list3);
		});

		it('Should return the deregistration function when listener is added', function () {
			expect(typeof res1).toBe('function');
			expect(typeof res2).toBe('function');
			expect(typeof res3).toBe('function');
		});

		it('Should execute all listeners', function () {
			ee.emit('test1');
			expect(list1).toHaveBeenCalled();
			expect(list2).toHaveBeenCalled();
			expect(list3).toHaveBeenCalled();
		});

		it('Should remove the listener from the event emitter', function () {
			res2();

			ee.emit('test1');

			expect(list1).toHaveBeenCalled();
			expect(list2).not.toHaveBeenCalled();
			expect(list3).toHaveBeenCalled();
		});

		it('Should remove all listeners from the event emitter', function () {
			res1();
			res2();
			res3();

			ee.emit('test1');

			expect(list1).not.toHaveBeenCalled();
			expect(list2).not.toHaveBeenCalled();
			expect(list3).not.toHaveBeenCalled();
		});

		it('Should always remove correct listener', function () {
			var res4, list4 = jasmine.createSpy('listener4');

			res3();

			res4 = ee.on('test1', list4);

			res3(); //check if it's not removing the newly added listener

			ee.emit('test1');

			expect(list1).toHaveBeenCalled();
			expect(list2).toHaveBeenCalled();
			expect(list3).not.toHaveBeenCalled();
			expect(list4).toHaveBeenCalled();
		});
	});
});
