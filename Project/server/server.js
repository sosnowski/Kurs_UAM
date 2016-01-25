/* globals require, setTimeout, setInterval, console, __dirname */

/** API:
 *  GET /contact - returns object
 *  GET /menu - returns array of objects, each containing id, name, ingredients (their ids) and price
 *  GET /ingredients - returns array of object, each containing id, name and (extra) price
 *  GET /extras - returns array of objects, each containing id, name and price
 *  POST /order - post order in form of object.
 *                Property order must be an array of object containing id (of the pizza) and quantity.
 *                Property extras must be an array of object containing id (of the extras) and quantity.
 *                Property orderInfo must be an object containing orders info.
 *  GET /order/:id - returns object with order, ordered (time when order was processed) and estimated (time of arrival)
 */
var express = require('express'),
    webSocketServer = require('websocket').server,
    bodyParser = require('body-parser'),
    _ = require('lodash'),
    data = {
        menu: require('./data/menu'),
        ingredients: require('./data/ingredients'),
        extras: require('./data/extras')
    };


var app = express(),
    orders = {},
    i = 0;
var httpServer, wsServer, wsConnections = [];

app.use(express.static(__dirname + '/../build/'));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.get('/contact', function (req, res) {
    setTimeout(function () {
        res.json({
            name: 'Pizzeria',
            address: {
                street: 'Św. Marcin 1',
                city: 'Poznań'
            },
            phone: '123-456-789',
            hours: '12:00 - 22:00'
        });
    }, _.random(100, 1500));
});

app.get('/menu', function (req, res) {
    setTimeout(function () {
        res.json(data.menu);
    }, _.random(100, 1500));
});

app.get('/ingredients', function (req, res) {
    setTimeout(function () {
        res.json(data.ingredients);
    }, _.random(100, 1500));
});

app.get('/extras', function (req, res) {
    setTimeout(function () {
        res.json(data.extras);
    }, _.random(100, 1500));
});

/**
 * Checks if request is valid
 * @param   {object} order Requests body
 * @returns {boolean}      Is order valid
 */
function checkIsOrderValid(reqData) {
    var isOrderAnArray = reqData.order instanceof Array,
        areOrderItemsValid = isListValid(reqData.order, data.menu),
        areExtrasAnArray = reqData.extras instanceof Array,
        areExtrasValid = isListValid(reqData.extras, data.extras),
        isOrderInfoAnObject = reqData.orderInfo instanceof Object;

    function isListValid (listToCheck, entities) {
        return _.every(listToCheck, function (position) {
            var isQuantityValid = _.isNumber(position.quantity) && position.quantity > 0,
                isValidEntity = _.isNumber(position.id) && !_.isEmpty(_.find(entities, {
                    id: position.id
                }));

            return isQuantityValid && isValidEntity;
        });
    }

    return isOrderAnArray & areOrderItemsValid & areExtrasAnArray & areExtrasValid & isOrderInfoAnObject;
}

/**
 * Update all connected WS clients
 * @param {number} id
 * @param {object} order
 */
function updateClients(id, order) {
    _.forEach(wsConnections, function(connection) {
        connection.sendUTF(JSON.stringify({
            id: id,
            order: order
        }));
    });
}

app.post('/order', function (req, res) {
    setTimeout(function () {
        console.log('Order recived', req.body);
        if (checkIsOrderValid(req.body)) {
            var now = Date.now();

            orders[i] = {
                order: {
                    order: req.body.order.map(function (position) {
                        return {
                            pizza: {
                                id: position.id,
                                extraIngredients: position.extraIngredients
                            },
                            quantity: position.quantity
                        };
                    }),
                    extras: req.body.extras
                },
                orderInfo: req.body.orderInfo,
                ordered: new Date(now),
                estimated: new Date(now + _.random(30, 120) * 10000),
                status: 0
            };
            console.log('Order status: 0');

            res.json({
                id: i
            });

            i++;
        } else {
            res.status(500).send('Invalid order.');
            console.error('Invalid order!');
        }
    }, _.random(100, 1500));
});

app.get('/order/:id', function (req, res) {
    setTimeout(function () {
        if (orders[req.params.id] === undefined) {
            res.status(404).send('Order does not exist.');
        } else {
            res.json(orders[req.params.id]);
        }
    }, _.random(100, 1500));
});

setInterval(function () {
    _.forEach(orders, function (order, id) {
        var diff = order.estimated - order.ordered;

        if (order.status < 1 && order.ordered * 1 + diff * 0.2 <= Date.now()) {
            order.status = 1;
            console.log('Order ' + id + ' changed status to 1');
            updateClients(id, order);
        }
        if (order.status < 2 && order.ordered * 1 + diff * 0.5 <= Date.now()) {
            order.status = 2;
            console.log('Order ' + id + ' changed status to 2');
            updateClients(id, order);
        }
        if (order.status < 3 && order.estimated <= Date.now()) {
            order.status = 3;
            console.log('Order ' + id + ' changed status to 3');
            updateClients(id, order);
        }
    });
}, 500);

httpServer = app.listen(8080, function () {
    console.log('Server running on port 8080.');
});
wsServer = new webSocketServer({
    httpServer: httpServer
});

wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);
    var index = wsConnections.push(connection);

    console.log('WebSocket Client connected on ' + new Date());

    connection.on('close', function(con) {
        wsConnections.slice(index, 1);
    });
});
