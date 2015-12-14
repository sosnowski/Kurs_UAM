angular.module('myapp', []).directive('textField', function () {
    return {
        restrict: 'AE',
        template: '<div class="custom-text-field"><input ng-model="value" /><button ng-click="clear()">x</button></div>',
        replace: true,
        scope: {
            value: '=textFieldValue'
        },
        controller: function ($scope) {
            $scope.clear = function () {
                $scope.value = '';
            };
        }
    };
}).directive('redOnHover', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element[0].onmouseover = function () {
                element[0].style.color = 'red';
            };
            element[0].onmouseout = function () {
                element[0].style.color = '';
            };
        }
    };
});
