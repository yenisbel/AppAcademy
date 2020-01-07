function GameView (game, ctx) {
    this.game = game;
    this.ctx = ctx;
    // this.ship = 
}

GameView.prototype.start = function() {
    setInterval(() => {
        this.game.step();
        // this.game.draw(this.ctx);
    }, 20);
    // setInterval(func, delay, [arg1, arg2, ...])
    // this.game.draw(this.ctx);
    setInterval(() => {
        this.game.draw(this.ctx);
    }, 20);
};

module.exports = GameView;