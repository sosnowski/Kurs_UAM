angular.module('app', []).controller('CarCtrl', function($scope) {
    
    $scope.additions = [];
    
    $scope.addAddition = function() {
        $scope.additions.push({
            name: '',
            color: ''
        });
    };
});