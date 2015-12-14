angular.module('myapp').factory('usersList', function () {
    return {
        1: {
            firstName: 'Jan',
            lastName: 'Kowalski',
            description: 'A businessman',
            inventory: ['briefcase', 'pen'],
            favorites: ['finance']
        },
        2: {
            firstName: 'Jonh',
            lastName: 'Doe',
            description: 'A knight',
            inventory: ['sword', 'shield'],
            favorites: ['dragons']
        }
    };
});
