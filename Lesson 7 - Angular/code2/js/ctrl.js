angular.module('myapp').controller('MyCtrl', ["$scope", "deps1", function ($sc, dp1) {
	$sc.name = "Gucio";

	$sc.clear = function () {
		$sc.name = '';
	};
}]);
