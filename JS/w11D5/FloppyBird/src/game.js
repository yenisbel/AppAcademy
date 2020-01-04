import Level from './level';
import Bird from './bird.js';

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    canvas.height = 480;
    canvas.width = 640;
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
  }
  restart() {
    this.score = 0;
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
    this.animate();
  }
  // produce next image for level
  // produce next image for bird
  // redraw everything
  gameOver() {
    return (
      this.level.collidesWith(this.bird.bounds()) || this.bird.outOfBounds(this.height)
    );
  }

  animate() {
    this.level.animate(this.ctx);
    this.bird.animate(this.ctx);
    if (this.gameOver()) {
        alert(this.score);
        this.restart();
    }
  }

  click(e) {
    if (!this.running) {
      this.play();
    } 
    this.bird.flap();
  }

  play() {
    this.running = true;
    this.animate();
  }
}