describe("Aircraft application tests", function() {

	describe('Functional tests', function () {
        
        beforeEach(function() {
            while (UAM.aircrafts.length > 0) {
                UAM.aircrafts.splice(0, 1);
            }
        });
        
        it ('Add aircraft should add new object into array and return new aircraft object', function() {
            var aircraft1 = UAM.addAircraft('SP-XYZ');
            var aircraft2 = UAM.addAircraft('SP-ZYX');
            expect(UAM.aircrafts.length).toBe(2);
            expect(UAM.aircrafts[0]).toBe(aircraft1);
            expect(UAM.aircrafts[1]).toBe(aircraft2);
            expect(aircraft1.code).toBe('SP-XYZ');
            expect(aircraft2.code).toBe('SP-ZYX');
            expect(aircraft1.services.length).toBe(0);
            expect(aircraft2.services.length).toBe(0);
        });
        
        it ('remove aircraft should remove object from array', function() {
            var aircraft1 = UAM.addAircraft('SP-XYZ');
            var aircraft2 = UAM.addAircraft('SP-ZYX');
            
            expect(UAM.aircrafts.length).toBe(2);
            UAM.removeAircraft(aircraft2);
            expect(UAM.aircrafts.length).toBe(1);
            UAM.removeAircraft(aircraft1);
            expect(UAM.aircrafts.length).toBe(0);
        });
        
        it ("remove not existing object shouldn't have impact to aircrafts array", function() {
            var aircraft1 = UAM.addAircraft('SP-XYZ');
            var aircraft2 = UAM.addAircraft('SP-ZYX');
            
            var wrongAircraft1 = {};
            var wrongAircraft2 = { code: 'SP-XYZ', services: [] };
            
            expect(UAM.aircrafts.length).toBe(2);
            UAM.removeAircraft(wrongAircraft1);
            expect(UAM.aircrafts.length).toBe(2);
            UAM.removeAircraft(wrongAircraft2);
            expect(UAM.aircrafts.length).toBe(2);
        });
        
        it ("Add work to aircraft should add work to services array with proper params", function() {
            var aircraft = UAM.addAircraft('SP-XYZ');
            
            UAM.addWorkToAircraft(aircraft, 's1', 100);
            UAM.addWorkToAircraft(aircraft, 's2', 50);
            
            expect(aircraft.services.length).toBe(2);
            expect(aircraft.services[0].name).toBe('s1');
            expect(aircraft.services[1].name).toBe('s2');
            expect(aircraft.services[0].timeToExecute).toBe(100);
            expect(aircraft.services[1].timeToExecute).toBe(50);
        });
        
        it ("Reduce time to execute should reduce time on every service in aircraft", function() {
            var aircraft1 = UAM.addAircraft('SP-XYZ');
            var aircraft2 = UAM.addAircraft('SP-ZYX');
            
            UAM.addWorkToAircraft(aircraft1, 's1', 100);
            UAM.addWorkToAircraft(aircraft1, 's2', 50);
            UAM.addWorkToAircraft(aircraft1, 's3', 130);
            UAM.addWorkToAircraft(aircraft2, '---', 60);
            
            expect(aircraft1.services[0].timeToExecute).toBe(100);
            expect(aircraft1.services[1].timeToExecute).toBe(50);
            expect(aircraft1.services[2].timeToExecute).toBe(130);
            expect(aircraft2.services[0].timeToExecute).toBe(60);
            
            UAM.reduceTimeToExecute(aircraft1, 20);
            expect(aircraft1.services[0].timeToExecute).toBe(80);
            expect(aircraft1.services[1].timeToExecute).toBe(30);
            expect(aircraft1.services[2].timeToExecute).toBe(110);
            expect(aircraft2.services[0].timeToExecute).toBe(60);
            
            UAM.reduceTimeToExecute(aircraft2, 10);
            expect(aircraft1.services[0].timeToExecute).toBe(80);
            expect(aircraft1.services[1].timeToExecute).toBe(30);
            expect(aircraft1.services[2].timeToExecute).toBe(110);
            expect(aircraft2.services[0].timeToExecute).toBe(50);
        });
        
        it ("Reduce time to execute on wrong structure of aircraft object shouldn't throw error", function() {
            var aircraft = { code: 'SP-XYZ', services: null };
            UAM.aircrafts = [ aircraft ];
            
            expect(UAM.reduceTimeToExecute(aircraft, 10)).not.toThrow();
        });
        
        it ("Get aircrafts for repair should return proper set of aircrafts", function() {
            var aircraft1 = { code: 'SP-XYZ', services: [ 
                { name: 's1', timeToExecute: 100 }, 
                { name: 's2', timeToExecute: 120 }, 
                { name: 's3', timeToExecute: 80 } ]
            };
            var aircraft2 = { code: 'SP-ZYX', services: [ 
                { name: 's1', timeToExecute: 110 }, 
                { name: 's2', timeToExecute: 130 }, 
                { name: 's3', timeToExecute: 90 } ]
            };
            var aircraft3 = { code: 'SP-DCE', services: [ 
                { name: 's1', timeToExecute: 140 }, 
                { name: 's2', timeToExecute: 150 }, 
                { name: 's3', timeToExecute: 91 } ]
            };
            UAM.aircrafts = [ aircraft1, aircraft2, aircraft3 ];
            
            var result = UAM.getAircraftsForRepairs(90);
            expect(result).toEqual([ aircraft1, aircraft2 ]);
            result = UAM.getAircraftsForRepairs(150);
            expect(result).toEqual([ aircraft1, aircraft2, aircraft3 ]);
            result = UAM.getAircraftsForRepairs(50);
            expect(result).toEqual([]);
        });
        
        it ("Get aircrafts for repair on array with aircraft with wrong structure should't trow error", function() {
            var aircraft1 = { code: 'SP-XYZ', services: [ 
                { name: 's1', timeToExecute: 100 }, 
                { name: 's2', timeToExecute: 120 }, 
                { name: 's3', timeToExecute: 80 } ]
            };
            var aircraft2 = { code: 'SP-ZYX', services: [ 
                { name: 's1', timeToExecute: 110 }, 
                { name: 's2', timeToExecute: 130 }, 
                { name: 's3', timeToExecute: 90 } ]
            };
            var aircraft3 = { code: 'SP-DCE', services: null };
            UAM.aircrafts = [ aircraft1, aircraft2, aircraft3 ];
            
            expect(UAM.getAircraftsForRepairs(90)).not.toThrow();
        });
	});
});
