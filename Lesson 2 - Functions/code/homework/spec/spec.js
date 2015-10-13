describe("Aircraft application tests", function() {

	it('addAircraft should be a function', function () {
		expect(typeof UAM.addAircraft).toBe('function');
	});
    
    it('removeAircraft should be a function', function () {
		expect(typeof UAM.removeAircraft).toBe('function');
	});
    
    it('addWorkToAircraft should be a function', function () {
		expect(typeof UAM.addWorkToAircraft).toBe('function');
	});
    
    it('reduceTimeToExecute should be a function', function () {
		expect(typeof UAM.reduceTimeToExecute).toBe('function');
	});
    
    it('getAircraftsForRepairs should be a function', function () {
		expect(typeof UAM.getAircraftsForRepairs).toBe('function');
	});

	describe('Functional tests', function () {
        
		beforeEach(function () {
		});
        
	});
});
