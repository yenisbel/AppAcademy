/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\n\nconst CONSTANTS = {\n    COLOR: \"red\",\n    RADIUS: 10\n};\n\nfunction Asteroid (position, game) {\n    // this.color = CONSTANTS.COLOR;\n    // this.radius = CONSTANTS.RADIUS;\n    // this.velocity = \n    // this.position = pos;\n    const options = {\n        pos: position,\n        vel: Util.randomVec(5),\n        radius: CONSTANTS.RADIUS,\n        color: CONSTANTS.COLOR\n    }\n\n    MovingObject.call(this, options, game);\n}\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function(otherObject) {\n    // debugger\n    if (otherObject instanceof Ship) {\n        // debugger\n        otherObject.relocate();\n    }\n}\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\")\n\nfunction Bullet(radius){\n    this.radius = radius;\n    MovingObject.call(this);\n}\n\nUtil.inherits(Bullet, MovingObject);\nmodule.exports = Bullet;\n\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n\n// Game.prot.draw(ctx) should call clear Rect\n// Game.prot.moveObj(ctx) should call clear move\n// call draw on each asteroids\n\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nconst CONSTANTS = {\n    DIM_X: 640,\n    DIM_Y: 480,\n    NUM_ASTEROIDS: 10\n};\n\nfunction Game() {\n    this.asteroids = [];\n    this.x = CONSTANTS.DIM_X;\n    this.y = CONSTANTS.DIM_Y;\n    this.num_asteroids = CONSTANTS.NUM_ASTEROIDS;\n    this.ship = new Ship(this.randomPosition(), this);\n    this.addAsteroids();\n};\n\nGame.prototype.addAsteroids = function() {\n    for (let i = 0; i < this.num_asteroids; i++) {\n        let pos = this.randomPosition();\n        let asteroid = new Asteroid(pos, this);   //modifying this\n        this.asteroids.push(asteroid)  \n    }\n};\n\n\n\nGame.prototype.randomPosition = function() {\n    return [this.x * Math.random(), this.y * Math.random()];\n};\n\nGame.prototype.draw = function(ctx) {\n    // ctx.fillStyle = \"black\";\n    // ctx.fillRect(0, 0, 300, 300);\n    // ctx.clearRect(50, 50, 200, 200);\n    \n    ctx.clearRect(0, 0, this.x, this.y);\n    this.allObjects().forEach((obj) => {\n        obj.draw(ctx);\n    });\n\n    // for (let i = 0; i < this.asteroids.length; i++) {\n    //     this.asteroids[i].draw(ctx);\n    // }\n   \n\n};\n\nGame.prototype.moveObjects = function() {\n    this.allObjects().forEach((obj) => {\n        obj.move();\n    });\n};\n\nGame.prototype.wrap = function(pos) {\n    if (pos[0] < 0) {\n        pos[0] = this.x;\n    } else if (pos[0] > this.x) {\n        pos[0] = 0;\n    } else if (pos[1] < 0) {\n        pos[1] = this.y;\n    } else if (pos[1] > this.y) {\n        pos[1] = 0;\n    }\n    return [pos[0], pos[1]];\n};\n\nGame.prototype.checkCollissions = function(){\n    const allObjects = this.allObjects();\n    for (let i = 0; i < allObjects.length; i++) {\n        for (let j = i+1; j < allObjects.length; j++) {\n            // debugger\n            if (allObjects[i].isCollidedWith(allObjects[j])) {\n                // debugger\n                // if (allObjects[j] instanceof Ship) { debugger }\n                allObjects[i].collideWith(allObjects[j]);\n            }\n        }\n    }\n};\n\nGame.prototype.step = function () {\n    this.moveObjects();\n    this.checkCollissions();\n};\n\nGame.prototype.removeAsteroid = function(asteroid) {\n   let index = this.asteroids.indexOf(asteroid);\n   this.asteroids.splice(index, 1);\n};\n\nGame.prototype.allObjects = function() {\n    return this.asteroids.concat(this.ship);\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function GameView (game, ctx) {\n    this.game = game;\n    this.ctx = ctx;\n    // this.ship = \n}\n\nGameView.prototype.start = function() {\n    setInterval(() => {\n        this.game.step();\n        // this.game.draw(this.ctx);\n    }, 20);\n    // setInterval(func, delay, [arg1, arg2, ...])\n    // this.game.draw(this.ctx);\n    setInterval(() => {\n        this.game.draw(this.ctx);\n    }, 20);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n    const gameName = document.getElementById(\"game-canvas\");\n    const ctx = gameName.getContext(\"2d\");\n    gameName.width = 640;\n    gameName.height = 480;\n\n    // const ast = new Asteroid([40, 40]);\n    // ast.draw(ctx);\n\n\n    const g = new Game();\n    // console.log(g);\n    // g.draw(ctx);\n    const gv = new GameView(g, ctx);\n    gv.start();\n    // console.log(gv);\n    // const ast = new Asteroid([30, 30]);\n    // console.log(ast);\n    // ast.draw(ctx);\n    // const mo = new MovingObject({\n    //     pos: [30, 30],\n    //     vel: [10, 10],\n    //     radius: 5,\n    //     color: \"#00FF00\"\n    // });\n    // console.log(mo);\n    // mo.draw(ctx);\n    \n\n   \n\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nfunction MovingObject (options, game) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n    this.game = game;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI,\n        false\n        );\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(){\n    let new_x = this.pos[0] + this.vel[0];\n    let new_y = this.pos[1] + this.vel[1];\n   \n    this.pos = this.game.wrap([new_x, new_y]);\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n    let sumRadii = this.radius + otherObject.radius;\n    let distance = Util.calcDistance(this.pos, otherObject.pos);\n    if (distance < sumRadii) return true;\n}\n\nMovingObject.prototype.collideWith = function(otherObject) {\n//     // this.game.remove(this);\n//     // this.game.remove(otherObject);\n//     this.collideWith(otherObject);\n//     console.log(otherObjects);\n}\n\nmodule.exports = MovingObject;\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\")\n\nconst CONSTANTS = {\n    RADIUS: 20,\n    COLOR: \"green\"\n}\n\nfunction Ship (position, game) {\n    const options = {\n        pos: position,\n        vel: Util.randomVec(0),\n        radius: CONSTANTS.RADIUS,\n        color: CONSTANTS.COLOR\n    }\n    MovingObject.call(this, options, game);\n}\nUtil.inherits(Ship, MovingObject);\nShip.prototype.power = function(impulse) {\n\n}\n\nShip.prototype.relocate = function() {\n    this.pos = this.game.randomPosition();\n    console.log(this.pos);\n    this.vel = [0, 0];\n}\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(childClass, parentClass){\n        function Surrogate() {};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n      // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    },\n    \n    calcDistance(pos1, pos2) {\n        let x1 = pos1[0];\n        let y1 = pos1[1];\n        let x2 = pos2[0];\n        let y2 = pos2[1];\n        return Math.hypot(x1-x2, y1-y2);\n    }\n\n    // calcDistance(pos1, pos2) {\n    //     return Math.sqrt(\n    //         Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n    //     );\n    // },\n\n}\n\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });