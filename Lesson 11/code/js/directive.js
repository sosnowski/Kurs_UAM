angular.module('myapp', []).directive('uamSearchField', function () {
	return {
		restrict: 'E',
		scope: {
			value: '=',
			showClear: '@'
		},
		controller: function ($scope) {
			// scope.value - binding
			// scope.showClear - attribute
			$scope.clear = function () {
				$scope.value = '';
			};


		},
		templateUrl: 'templates/search_field.html'
	};
});


angular.module('myapp').controller('AppCtrl', function ($scope) {
	$scope.searchValue = 'Initial search';
});
