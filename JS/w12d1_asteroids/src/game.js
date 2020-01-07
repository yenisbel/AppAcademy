

// Game.prot.draw(ctx) should call clear Rect
// Game.prot.moveObj(ctx) should call clear move
// call draw on each asteroids

const Asteroid = require('./asteroid.js');
const Ship = require('./ship.js');

const CONSTANTS = {
    DIM_X: 640,
    DIM_Y: 480,
    NUM_ASTEROIDS: 10
};

function Game() {
    this.asteroids = [];
    this.x = CONSTANTS.DIM_X;
    this.y = CONSTANTS.DIM_Y;
    this.num_asteroids = CONSTANTS.NUM_ASTEROIDS;
    this.ship = new Ship(this.randomPosition(), this);
    this.addAsteroids();
};

Game.prototype.addAsteroids = function() {
    for (let i = 0; i < this.num_asteroids; i++) {
        let pos = this.randomPosition();
        let asteroid = new Asteroid(pos, this);   //modifying this
        this.asteroids.push(asteroid)  
    }
};



Game.prototype.randomPosition = function() {
    return [this.x * Math.random(), this.y * Math.random()];
};

Game.prototype.draw = function(ctx) {
    // ctx.fillStyle = "black";
    // ctx.fillRect(0, 0, 300, 300);
    // ctx.clearRect(50, 50, 200, 200);
    
    ctx.clearRect(0, 0, this.x, this.y);
    this.allObjects().forEach((obj) => {
        obj.draw(ctx);
    });

    // for (let i = 0; i < this.asteroids.length; i++) {
    //     this.asteroids[i].draw(ctx);
    // }
   

};

Game.prototype.moveObjects = function() {
    this.allObjects().forEach((obj) => {
        obj.move();
    });
};

Game.prototype.wrap = function(pos) {
    if (pos[0] < 0) {
        pos[0] = this.x;
    } else if (pos[0] > this.x) {
        pos[0] = 0;
    } else if (pos[1] < 0) {
        pos[1] = this.y;
    } else if (pos[1] > this.y) {
        pos[1] = 0;
    }
    return [pos[0], pos[1]];
};

Game.prototype.checkCollissions = function(){
    const allObjects = this.allObjects();
    for (let i = 0; i < allObjects.length; i++) {
        for (let j = i+1; j < allObjects.length; j++) {
            // debugger
            if (allObjects[i].isCollidedWith(allObjects[j])) {
                // debugger
                // if (allObjects[j] instanceof Ship) { debugger }
                allObjects[i].collideWith(allObjects[j]);
            }
        }
    }
};

Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollissions();
};

Game.prototype.removeAsteroid = function(asteroid) {
   let index = this.asteroids.indexOf(asteroid);
   this.asteroids.splice(index, 1);
};

Game.prototype.allObjects = function() {
    return this.asteroids.concat(this.ship);
}

module.exports = Game;