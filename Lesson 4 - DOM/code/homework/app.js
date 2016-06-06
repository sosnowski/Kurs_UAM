window.addEventListener('DOMContentLoaded', function () {

    //Create area and ship as `div` in `document` node
    var playArea = {}, // ??
        ship = {}; // ??

    var key = {
        right: false,
        left: false,
        up: false,
        down: false
    };

    var shipWidth = ship.offsetWidth,
        shipHeight = ship.offsetHeight,
        shipPos = {
            x: 0,
            y: 0
        },
        shipSpeed = 4;

    // Add player area and ship element at the end of `document.body` element

    // ??
    // ??

    // Add CSS classes accordingly ( player -> player, playArea -> playArea)

    // ??
    // ??

    //move mechanics
    shipPos.x = (playArea.offsetWidth / 2 + playArea.offsetLeft) - (ship.offsetWidth / 2);
    shipPos.y = (playArea.offsetHeight + playArea.offsetTop) - (ship.offsetHeight * 2);

    playArea.leftBoundary = playArea.offsetLeft + 10;
    playArea.rightBoundary = (playArea.offsetLeft + playArea.offsetWidth - 10) - ship.offsetWidth;

    playArea.topBoundary = playArea.offsetTop + 10;
    playArea.bottomBoundary = (playArea.offsetTop + playArea.offsetHeight - 10) - ship.offsetHeight;

    //keys support
    function keyDown(e) {
        if (e.keyCode === 39) {
            key.right = true;
        } else if (e.keyCode === 37) {
            key.left = true;
        }
        if (e.keyCode === 38) {
            key.up = true;
        } else if (e.keyCode === 40) {
            key.down = true;
        }
    }

    function keyUp(e) {
        if (e.keyCode === 39) {
            key.right = false;
        } else if (e.keyCode === 37) {
            key.left = false;
        }
        if (e.keyCode === 38) {
            key.up = false;
        } else if (e.keyCode === 40) {
            key.down = false;
        }
    }

    // main 
    function moveShip() {
        if (key.right === true) {
            shipPos.x += shipSpeed;
        } else if (key.left === true) {
            shipPos.x -= shipSpeed;
        }
        if (key.up === true) {
            shipPos.y -= shipSpeed;
        } else if (key.down === true) {
            shipPos.y += shipSpeed;
        }
        if (shipPos.x < playArea.leftBoundary) {
            shipPos.x = playArea.leftBoundary;
        }
        if (shipPos.x > playArea.rightBoundary) {
            shipPos.x = playArea.rightBoundary;
        }
        if (shipPos.y < playArea.topBoundary) {
            shipPos.y = playArea.topBoundary;
        }
        if (shipPos.y > playArea.bottomBoundary) {
            shipPos.y = playArea.bottomBoundary;
        }

        //setting right style for positioning skip
        ship.style.left = shipPos.x + 'px';
        ship.style.top = shipPos.y + 'px';
    }

    // add event listeners observers for both `keydown` and `keyup` events
    // using 'keydown' and 'keyup' functions provided above

    // ??
    // ??

    // Main game loop
    function loop() {
        moveShip();
        setTimeout(loop, 1000 / 60);
    }

    loop();

});

// Resources
// https://developer.mozilla.org/pl/docs/Web/API/Document/createElement
// https://developer.mozilla.org/pl/docs/Web/API/Element/appendChild
// https://developer.mozilla.org/pl/docs/Web/API/Element/classList
// https://developer.mozilla.org/pl/docs/Web/API/Element/addEventListener