angular.module('app').directive('addition', function() {
    return {
        replace: true,
        scope: {
            additionObj: '='
        },
        controller: 'AdditionCtrl',
        templateUrl: 'templates/addition.html'
    };
});