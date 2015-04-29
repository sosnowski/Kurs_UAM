angular.module('app').controller('AdditionCtrl', function($scope) {
    
    $scope.possibleAdditions = ["Spoiler", "Progi boczne", "Lusterka", "Felgi"];
    
    $scope.selectedAddition = '';
    
    $scope.changeAdditionName = function() {
        $scope.additionObj.name = $scope.selectedAddition;
    };
    
    $scope.changeColor = function(color) {
        $scope.additionObj.color = color;
    };
    
});