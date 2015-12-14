angular.module('myapp').controller('FavoritesCtrl', function ($scope, $stateParams, usersList) {
    $scope.favorites = usersList[$stateParams.userId].favorites;
});
