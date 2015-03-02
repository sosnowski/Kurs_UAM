(function (global) {
	var addManyValues;

	if (!global.UAM) {
		global.UAM = {};
	}

	addManyValues = function () {

	};

	global.UAM.addManyValues = addManyValues;

}(window));

/*

Przykład użycia:

var addRest = UAM.addManyValues(2, 3);

addRest(1, 1, 3); // 10
addRest(3, 3); // 11
addRest(1, 1, 1, 1, 1); //10

var addOther = UAM.addManyValues(0, 10, 10);
addOther(10); // 30

*/
