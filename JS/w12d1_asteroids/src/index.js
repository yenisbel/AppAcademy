const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const Game = require('./game.js');
const GameView = require('./game_view.js');
window.MovingObject = MovingObject;
window.Asteroid = Asteroid;



document.addEventListener("DOMContentLoaded", function(){
    const gameName = document.getElementById("game-canvas");
    const ctx = gameName.getContext("2d");
    gameName.width = 640;
    gameName.height = 480;

    // const ast = new Asteroid([40, 40]);
    // ast.draw(ctx);


    const g = new Game();
    // console.log(g);
    // g.draw(ctx);
    const gv = new GameView(g, ctx);
    gv.start();
    // console.log(gv);
    // const ast = new Asteroid([30, 30]);
    // console.log(ast);
    // ast.draw(ctx);
    // const mo = new MovingObject({
    //     pos: [30, 30],
    //     vel: [10, 10],
    //     radius: 5,
    //     color: "#00FF00"
    // });
    // console.log(mo);
    // mo.draw(ctx);
    

   

})