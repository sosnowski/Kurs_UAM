angular.module('myapp').controller('UserCtrl', function ($scope, $state, $stateParams, usersList) {
    $scope.userId = $stateParams.userId;
    $scope.user = usersList[$stateParams.userId];

    $scope.showFavs = function () {
        $state.go('user.favorites', {
            userId: $stateParams.userId
        });
    }
});
