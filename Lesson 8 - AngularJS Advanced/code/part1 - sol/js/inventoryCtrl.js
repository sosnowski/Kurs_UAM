angular.module('myapp').controller('InventoryCtrl', function ($scope, $stateParams, usersList) {
    $scope.inventory = usersList[$stateParams.userId].inventory;
});
