const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');
const Ship = require('./ship.js');


const CONSTANTS = {
    COLOR: "red",
    RADIUS: 10
};

function Asteroid (position, game) {
    // this.color = CONSTANTS.COLOR;
    // this.radius = CONSTANTS.RADIUS;
    // this.velocity = 
    // this.position = pos;
    const options = {
        pos: position,
        vel: Util.randomVec(5),
        radius: CONSTANTS.RADIUS,
        color: CONSTANTS.COLOR
    }

    MovingObject.call(this, options, game);
}
Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function(otherObject) {
    // debugger
    if (otherObject instanceof Ship) {
        // debugger
        otherObject.relocate();
    }
}

module.exports = Asteroid;
