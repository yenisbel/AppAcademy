const Util = require('./utils.js');

function MovingObject (options, game) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = game;
}

MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        false
        );
    ctx.fill();
}

MovingObject.prototype.move = function(){
    let new_x = this.pos[0] + this.vel[0];
    let new_y = this.pos[1] + this.vel[1];
   
    this.pos = this.game.wrap([new_x, new_y]);
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
    let sumRadii = this.radius + otherObject.radius;
    let distance = Util.calcDistance(this.pos, otherObject.pos);
    if (distance < sumRadii) return true;
}

MovingObject.prototype.collideWith = function(otherObject) {
//     // this.game.remove(this);
//     // this.game.remove(otherObject);
//     this.collideWith(otherObject);
//     console.log(otherObjects);
}

module.exports = MovingObject;

