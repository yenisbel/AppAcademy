export default class Bird {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.x = this.dimensions.width/3;
        this.y = this.dimensions.height/2;
        this.velocity = 0;
    }
    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, 40, 30)
    }

    moveBird() {
        //for each frame, the bird should move by it's current velocity
        //velocity is 'pixels per frame', so each frame it should update position by vel
        this.y += this.velocityl;
        //the acceleration of gravity is in pixels per second per second
        //so each second, it changes the velocity by whatever the gravity constant is
        this.velocity += 0.4;
        //we set a 'terminal velocity', a maximum speed the bird can travel
        //this keeps the game from becoming too wild because the bird is moving too fast to control
        if (Math.abs(this.velocity) > 12) {
          //if the terminal velocity is exceeded, we set it to the terminal velicty
          if (this.velocity > 0) {
            this.velocity = 12;
          } else {
            this.velocity = 12 * -1;
          }
        }
    }


    animate(ctx) {
        this.moveBird();
        this.drawBird(ctx);
    }

    bounds() {
        return {
          left: this.x,
          right: this.x + 40,
          top: this.y,
          bottom: this.y + 30
        };
    }
};