(function (global) {
    var mapArray;

    if (!global.UAM) {
        global.UAM = {};
    }

    global.UAM.aircrafts = [];

    //////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////// Sample aircraft with sample service  /////////////// 

    global.UAM.aircrafts.push({
        code: 'SP-ABC',
        services: []
    });

    // We don't need services to be an array
    global.UAM.aircrafts[0].services =
    {
        name: 'smth1',
        timeToExecute: 120
    };

    //////////////////////////////////////////////////////////////////////////////////////

    global.UAM.addAircraft = function (newAircraftCode) {
        global.UAM.aircrafts.push({code: newAircraftCode, services: []});
        return newAircraftCode;
    };

    var newAircraft1 = global.UAM.addAircraft('SP-XY1');
    var newAircraft2 = global.UAM.addAircraft('SP-XY2');
    var newAircraft3 = global.UAM.addAircraft('SP-XY3');

    global.UAM.removeAircraft = function (aircraftObj) {
        var i;
        for (i = 0; i < global.UAM.aircrafts.length; i++) {
            if (aircraftObj === global.UAM.aircrafts[i].code) {
                global.UAM.aircrafts.splice(i, 1)
            }
        }
    };

    global.UAM.removeAircraft(newAircraft1);

    global.UAM.addWorkToAircraft = function (aircraftObj, name, timeToExecute) {
        var i;
        for (i = 0; i < global.UAM.aircrafts.length; i++) {
            if (aircraftObj === global.UAM.aircrafts[i].code) {
                global.UAM.aircrafts[i].services = {name: name, timeToExecute: timeToExecute}
            }
        }
    };

    global.UAM.addWorkToAircraft(newAircraft2, 'stefan niszczyciel', 120);
    global.UAM.addWorkToAircraft(newAircraft3, 'JOHAN', 110);


    global.UAM.reduceTimeToExecute = function (aircraftObj, time) {
        var i;
        for (i = 0; i < global.UAM.aircrafts.length; i++) {
            if (aircraftObj === global.UAM.aircrafts[i].code) {
                global.UAM.aircrafts[i].services.timeToExecute = global.UAM.aircrafts[i].services.timeToExecute - time;
            }
        }
    };

    global.UAM.reduceTimeToExecute(newAircraft2, 30);


    global.UAM.getAircraftsForRepairs = function (maxTimeToExecute) {
        var i;
        var aircraftsForRepair = [];
        for (i = 0; i < global.UAM.aircrafts.length; i++) {
            if (global.UAM.aircrafts[i].services.timeToExecute <= maxTimeToExecute) {
                aircraftsForRepair.push(global.UAM.aircrafts[i])
            }
        }
        return aircraftsForRepair;
    };
    console.log(global.UAM.getAircraftsForRepairs(111));
    console.log(global.UAM.getAircraftsForRepairs(169));

}(window));

/*

 Przykład użycia:

 var newAircraft1 = addAircraft('SP-XY1');
 var newAircraft2 = addAircraft('SP-XY2');

 addWorkToAircraft(newAircraft1, 'serviceXY1a', 110);
 addWorkToAircraft(newAircraft1, 'serviceXY1b', 130);
 reduceTimeToExecute(newAircraft1, 20);

 var sxy2a = addWorkToAircraft(newAircraft2, 'serviceXY2a', 130);
 var sxy2b = addWorkToAircraft(newAircraft2, 'serviceXY2b', 160);
 reduceTimeToExecute(newAircraft2, 20);

 getAircraftsForRepairs(100); // [ newAircraft1 ]

 removeAircraft(newAircraft1);

 getAircraftsForRepairs(100); // []

 reduceTimeToExecute(newAircraft2, 20);

 getAircraftsForRepairs(100); // [ newAircraft2 ]

 */
