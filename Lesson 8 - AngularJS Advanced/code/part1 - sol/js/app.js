angular.module('myapp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('users', {
            url: '/users',
            controller: 'UsersCtrl',
            templateUrl: 'partials/users.html'
        })
        .state('user', {
            url: '/user/:userId',
            templateUrl: 'partials/user.html',
            controller: 'UserCtrl'
        })
        .state('user.inventory', {
            url: '/inventory',
            templateUrl: 'partials/inventory.html',
            controller: 'InventoryCtrl'
        })
        .state('user.favorites', {
            url: '/favorites',
            templateUrl: 'partials/favorites.html',
            controller: 'FavoritesCtrl'
        });
    $urlRouterProvider.otherwise('/users');
});
