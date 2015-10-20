describe("Animals", function() {
	var Cat = UAM.Cat, Bird = UAM.Bird, Worm = UAM.Worm,
		cat1, cat2, bird1, bird2, worm1, worm2;

	beforeEach(function () {
		cat1 = Object.create(Cat);
		cat2 = Object.create(Cat);
		bird1 = Object.create(Bird);
		bird2 = Object.create(Bird);
		worm1 = Object.create(Worm);
		worm2 = Object.create(Worm);
	});

	it('Should provide eat method for each animal', function() {
		expect(cat1.eat).toBeDefined();
		expect(bird1.eat).toBeDefined();
		expect(worm1.eat).toBeDefined();
	});

	it('Should allow cats to eat only birds', function() {
		expect(cat1.eat(bird1)).toBe("Mniam!");
		expect(cat1.eat(cat1)).toBe("Blee!");
		expect(cat1.eat(cat2)).toBe("Blee!");
		expect(cat1.eat(worm1)).toBe("Blee!");
	});

	it('Should allow birds to eat only worms', function() {
		expect(bird1.eat(worm1)).toBe("Mniam!");
		expect(bird1.eat(bird1)).toBe("Blee!");
		expect(bird1.eat(bird2)).toBe("Blee!");
		expect(bird1.eat(cat1)).toBe("Blee!");
	});

	it('Should disallow worms to eat anything', function() {
		expect(worm1.eat(worm1)).toBe("Blee!");
		expect(worm1.eat(worm2)).toBe("Blee!");
		expect(worm1.eat(bird1)).toBe("Blee!");
		expect(worm1.eat(cat1)).toBe("Blee!");
	});

	it('Should use the same eat method for each animal', function() {
		expect(cat1.eat).toBe(cat2.eat);
		expect(cat2.eat).toBe(bird1.eat);
		expect(bird1.eat).toBe(bird2.eat);
		expect(bird2.eat).toBe(worm1.eat);
		expect(worm1.eat).toBe(worm2.eat);
		expect(worm2.eat).toBe(cat1.eat);
	});
});
