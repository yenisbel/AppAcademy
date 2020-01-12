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

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nconst clockId = document.getElementById('clock');\n\nclass Clock {\n    constructor() {\n        const date = new Date();\n        this.hours = date.getHours();\n        this.minutes = date.getMinutes();\n        this.seconds = date.getSeconds();\n        setInterval(test =>{\n            this.tick();\n            this.printTime();\n        }, 1000);\n    }\n\n    printTime() {\n        const timeString = `${this.hours}:${this.minutes}:${this.seconds}`;\n        // debugger;\n        Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(timeString, clockId);\n    }\n\n    tick() {\n        if (this.minutes === 59 && this.seconds === 59) {\n            this.hours++;\n        } else if (this.seconds === 59) {\n            this.minutes++;\n        }\n        this.seconds++;\n        this.seconds = this.seconds % 60;\n        this.minutes = this.minutes % 60;\n        this.hours = this.hours % 24;\n      \n    }\n}\n\nconst clock = new Clock();\n// clock.printTime()\n\n\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nconst ul = document.getElementsByClassName('drop-down-dog-list')[0];\n\nfunction dogLinkCreator() {\n  const keys = Object.keys(dogs);\n  const dogLinksA = [];\n  keys.forEach(dog => {\n    let a = document.createElement('a');\n    a.innerHTML = dog;\n    a.setAttribute('href', dogs[dog]);\n\n    let liTag = document.createElement('li');\n    liTag.classList.add('dog-link');\n    // liTag.classList.add('hidden');\n    liTag.appendChild(a);\n    dogLinksA.push(liTag);\n  });\n  return dogLinksA;\n}\n\nfunction attachDogLinks() {\n  let dogLinks = dogLinkCreator();\n  dogLinks.forEach(dogLink => {\n    ul.appendChild(dogLink);\n  });\n}\n\nfunction handleEnter(e) {\n  ul.classList.remove('hidden');\n  ul.classList.add('visible');\n}\n\nfunction handleLeave(e) {\n  ul.classList.remove('visible');\n  ul.classList.add('hidden');\n}\n\nconst dropDown = document.getElementsByClassName('drop-down-dog-nav')[0];\ndropDown.addEventListener('mouseenter', handleEnter);\ndropDown.addEventListener('mouseleave', handleLeave);\nattachDogLinks();\n\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _slide_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slide_scroll */ \"./src/slide_scroll.js\");\n/* harmony import */ var _slide_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_slide_scroll__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search */ \"./src/search.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_search__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/?offset=150&limit=150'\nconst searchInput = document.querySelector('.search')\nconst searchUl = document.querySelector('.suggestions')\n\nlet pokemonList = []\n\nfetch(pokemonAPI)\n    .then((response) => {\n        return response.json();\n    })\n    .then((myJson) => {\n        pokemonList = myJson.results;\n    });\n\n// displayMatches\nfunction findMatches(word){\n\n    pokemonList.find( (pokemon) => {\n        const re = new RegExp(word);\n        const found = pokemon.name.match(re)\n    });\n    return found\n    // const regex = /[A-Z]/g;\n    // const regex = /[word]/g;\n    // pokemonList.find(word)\n}\n\n\n//*\nlet str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';\nlet regexp = /[A-E]/gi;\nlet matches_array = str.match(regexp);\n\nconsole.log(matches_array);\n// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']\n\n//# sourceURL=webpack:///./src/search.js?");

/***/ }),

/***/ "./src/slide_scroll.js":
/*!*****************************!*\
  !*** ./src/slide_scroll.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// set up an event listener on the window for the scroll e\nconst imgs = Array.from(document.querySelectorAll('.slide'));\nfunction myEvenImg(e){\n\n  imgs.forEach(img => {\n    \n    const middleOfImg = (img.offsetTop + (img.height /2));\n    const bottomOfImg = img.offsetTop + img.height;\n    const bottomOfScreen = window.scrollY + window.innerHeight;\n    const topOfScreen = window.scrollY;\n\n    let isOnScreen = (middleOfImg < bottomOfScreen);\n    \n    if (isOnScreen) {\n      // debugger;\n      // console.log(img);\n      img.classList.add('active');\n    } else {\n      img.classList.remove('active');\n    }\n    \n    // img.height;\n    // img.offsetTop;\n  });\n}\n\n// window.scrollY\n// window.innerHeight\n\n\n\n\nwindow.addEventListener('scroll', debounce(myEvenImg))\n\nfunction debounce(func, wait = 20, immediate = true) {\n  let timeout;\n\n  // This is the function that is actually executed when\n  // the DOM event is triggered.\n  return function executedFunction() {\n    // Store the context of this and any\n    // parameters passed to executedFunction\n    const context = this;\n    const args = arguments;\n\n    // The function to be called after debounce time has elapsed\n    const later = function () {\n      // null timeout to indicate the debounce ended\n      timeout = null;\n\n      // Call function now if you did not in the beginning\n      if (!immediate) func.apply(context, args);\n    };\n\n    // Determine if you should call the function\n    // on the leading or trail end\n    const callNow = immediate && !timeout;\n\n    // This will reset the waiting every function execution.\n    clearTimeout(timeout);\n\n    // Restart the debounce waiting period - returns true\n    timeout = setTimeout(later, wait);\n\n    // Call immediately if you're doing a leading end execution\n    if (callNow) func.apply(context, args);\n  };\n}\n\n//# sourceURL=webpack:///./src/slide_scroll.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let todos = JSON.parse(localStorage.getItem('todo')) || [];\n\nconst todoList = document.getElementsByClassName('todos')[0];\nconst todoForm = document.getElementsByClassName('add-todo-form')[0];\n\nfunction addTodo(e) {\n    e.preventDefault();\n    const todoInput = document.querySelectorAll('input[name=\"add-todo\"]')[0];\n    let todoValue = todoInput.value;\n    const todo = {\n        value: todoValue,\n        done: false\n    }\n    todos.push(todo);\n    // todoValue = '';\n    todoInput.value = '';\n    localStorage.setItem('todo', JSON.stringify(todos));\n    // todoInput.setAttribute('value', ' ');\n    populateList(todos);\n    todos = []\n}\n\nfunction populateList(todos) {\n    todos.forEach((todo) => {\n        const label = document.createElement('label');\n        label.innerHTML = todo.value;\n        const input = document.createElement('input');\n        input.setAttribute('type', 'checkbox');\n        input.setAttribute('value', todo.done);\n        const li = document.createElement('li');\n        li.appendChild(input);\n        li.appendChild(label);\n        todoList.appendChild(li);\n    });\n    \n}\n\nconst test = document.querySelector('input[type = \"submit\"]')\ntest.addEventListener('click', addTodo);\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    let newElement = document.createElement('p');\n    newElement.innerHTML = string;\n    Array.from(htmlElement.children).forEach(child => {\n        htmlElement.removeChild(child);\n    });\n    htmlElement.appendChild(newElement);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });