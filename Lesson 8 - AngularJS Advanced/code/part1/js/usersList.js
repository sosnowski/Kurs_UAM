angular.module('myapp').factory('usersList', function () {
    return {
        1: {
            firstName: 'Jan',
            lastName: 'Kowalski',
            description: 'A businessman',
            inventory: ['briefcase', 'pen']
        },
        2: {
            firstName: 'Jonh',
            lastName: 'Doe',
            description: 'A knight',
            inventory: ['sword', 'shield']
        }
    };
});
