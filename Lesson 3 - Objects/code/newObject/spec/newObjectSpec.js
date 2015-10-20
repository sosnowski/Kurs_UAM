describe("newObject", function() {
	var newObject;

	beforeEach(function () {
		newObject = UAM.newObject;
	});

	it('Should create a new object based on constructor and parameters', function() {
		var Person = function(name) {
			this.name = name;
		};
		Person.prototype.sayHello = function() {
			return "Hello, " + this.name;
		}
		var obj = newObject(Person, "me");

		expect(Object.getPrototypeOf(obj)).toBe(Person.prototype);
		expect(obj.sayHello()).toBe("Hello, me");
	});

	it('Should create a new object based on constructor result', function() {
		var result = {}
		var Person = function(name) {
			this.name = name;
			return result;
		};
		var obj = newObject(Person, "me");
		expect(obj).toBe(result);
	});

});
