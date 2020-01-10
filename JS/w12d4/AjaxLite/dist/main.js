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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DomNodeCollection {\n    constructor(nodes) {\n        this.nodes = nodes\n    }\n    empty(){\n        this.html('');\n    }\n\n    remove(){\n        this.nodes.forEach(node => {\n            node.parentNode.removeChild(node)\n        });\n    }\n\n    attr(attributeName, value){\n        if (typeof value === 'string'){\n            this.nodes.forEach(node => {\n                node.setAttribute(attributeName, value);\n            });\n        } else {\n            return this.nodes[0].getAttribute(attributeName);       \n        };\n    }   \n\n    addClass(className){\n        this.nodes.forEach(node => {\n            node.classList.add(className)\n        });\n    }\n    \n    removeClass(className){\n        this.nodes.forEach(node => {\n            node.classList.remove(className)\n        });\n    }\n\n    html(arg){\n        if (typeof arg === 'string') {\n            this.forEach(node => {\n                node.innerHTML =  arg;\n            });  \n        } else {\n            // this.nodes.innerHtml = this.node[0]\n            return this.nodes[0].innerHtml;\n        };   \n    }\n\n    find(selector){\n        let collectedNodes = [];\n        this.nodes.forEach(node => {\n            const nodesList = node.querySelectorAll(selector);\n            collectedNodes.push(Array.from(nodesList));\n        });\n        return new DomNodeCollection(collectedNodes);\n    }\n//     //const foo = document.getElementById('foo');\n// for (let i = 0; i < foo.children.length; i++) {\n//     console.log(foo.children[i].tagName);\n//   }\n    children(){\n        this.nodes.forEach(node => {\n            const myChildren = node.children\n        });\n        return new DomNodeCollection(Array.from(myChildren))\n    }\n\n    parent(){\n        const myParents = [];\n        this.nodes.forEach(node => {\n            myParents = node.parentNode\n        });\n        return new DomNodeCollection(Array.from(myParents))\n        \n    }\n\n    append(args){\n        if (typeof args === 'string') {\n            this.nodes.forEach(node =>{\n                this.innerHTML += args\n            });\n        }else if (args instanceof DomNodeCollection){\n            this.nodes.forEach(node =>{\n                this.args.nodes.forEach(argNode =>{\n                    // this.innerHTML += args\n                    node.appendChild(argNode);\n                });\n            });\n        }else {\n            args = $l(args);\n        };\n    };\n\n// the on method will have to store the callback as an attribute on the node\n// event handler should be registered for every element in the node array\n// n't worry about event delegation\n// syntax target.addEventListener(type, listener[options])\n    on(event, callback){\n        this.nodes.forEach(node => {\n            node.addEventListener(event, callback);\n            // node is hash?\n            node[event].push(callback)\n        });\n    };\n\n    // element.addEventListener(\"mousedown\", handleMouseDown, {passive: true\n    \n    off(event){\n        this.nodes.forEach(node => {\n            if(node[event]){\n                const cb = node[event]\n                node.removeEventListener(event, cb)\n            }\n               \n        });\n    }\n\n}\n\nmodule.exports = DomNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nwindow.$l = (selector) =>  {\n    if (typeof selector === 'string') {\n        return getNodes(selector);\n    } else if (typeof selector === 'function') {\n        return readyDoc()\n    }else {\n        return new DomNodeCollection(selector);\n    }\n\n}\n\nreadyDoc = () =>{\n    $(() => alert(\"the document is ready\"));\n}\n\ngetNodes = (selector) => {\n    const nodesList = document.querySelectorAll(selector);\n\n    return new DomNodeCollection(Array.from(nodesList))\n} \n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    console.log(\"the document is ready\");\n});\n\n$l.extend = (obj, ...values)=>{\n    values.forEach(value => {\n        for (const key in value) {\n            // if (arg.hasOwnProperty(key)) \n            obj[key] = value[key];   \n        }\n    });\n    // hash\n    return obj\n}\n// const objA = { a: \"a\", b: \"a\", c: \"a\" };\n// const objB = { b: \"b\", c: \"b\" };\n// const objC = { c: \"c\" };\n\n// $l.extend(objA, objB, objC); //=> {a: 'a', b: 'b', c: 'c'}\n\n\n// Create xhr obje\n//  Make a defaults object\n// ---Provide defaults for success, error, url, method, data, and contentType.\n// Merge the options onto the defaults\n\n\n $l.ajax = (options) =>{\n     const xhr = new XMLHttpRequest();\n     const defaults = {\n        method: 'GET',\n        url: \"\",\n        success: \"We have your weather!\",\n        error: \"An error occurred.\",\n        data: {},\n        contentType: 'json',\n\n     };\n    xhr.open(defaults.method, defaults.url) ;\n    xhr.onload = function () {\n        console.log(xhr.status)\n        if (xhr.status !== 404) {\n            options.success = defaults.success\n        }\n      \n        \n    }\n\n }\n\n/* \n $.ajax({\n      type: 'GET',\n      url: \"http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=bcb83c4b54aee8418983c2aff3073b3b\",\n      success(data) {\n        console.log(\"We have your weather!\")\n        console.log(data);\n      },\n      error() {\n        console.error(\"An error occurred.\");\n      },\n   });\n*/\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });