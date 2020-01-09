const MovingObject = require('./moving_object');
const Util = require('./utils')

function Bullet(radius){
    this.radius = radius;
    MovingObject.call(this);
}

Util.inherits(Bullet, MovingObject);
module.exports = Bullet;
