const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');
const Bullet = require('./bullet')

const CONSTANTS = {
    RADIUS: 20,
    COLOR: "green"
}

function Ship (position, game) {
    const options = {
        pos: position,
        vel: Util.randomVec(0),
        radius: CONSTANTS.RADIUS,
        color: CONSTANTS.COLOR
    }
    MovingObject.call(this, options, game);
}
Util.inherits(Ship, MovingObject);
Ship.prototype.power = function(impulse) {

}

Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    console.log(this.pos);
    this.vel = [0, 0];
}
module.exports = Ship;