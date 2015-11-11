/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	eval("// Bad code is commented out\r\nvar MeObj = (function () {\r\n    // constructor function for new objects\r\n    function MeObj(name) {\r\n        this.name = name;\r\n    }\r\n    ;\r\n    MeObj.prototype.setName = function (newName) {\r\n        this.name = newName;\r\n    };\r\n    ;\r\n    return MeObj;\r\n})();\r\n;\r\n// var me = new MeObj(23);\t// doesn't like me passing a number in instead of a string\r\nvar me = new MeObj('Sam Skeen');\r\nfunction setName_me(newName) {\r\n    me.name = newName;\r\n}\r\n// me.setName(5);\t// doesn't like me passing a number in instead of a string\r\n// setName_me({\t\t// doesn't like me passing in an object instead of a string\r\n// \tname: 'Jar Jar'\r\n// });\r\nme.setName('R2-D2');\r\nsetName_me('C-3PO');\r\nfunction replaceMe(newPerson) {\r\n    me = newPerson;\r\n}\r\n// replaceMe('Dr. Dingelhopper');\t// Doesn't like the fact that I'm trying to pass in \r\n// a string instead of an object that matches the criteria for MeObj\r\nvar Superman = new MeObj('Clark Kent');\r\nreplaceMe(Superman);\r\nreplaceMe({\r\n    name: 'Ginger Snapps',\r\n    age: 35,\r\n    setName: function (newName) {\r\n        this.name = newName;\r\n    }\r\n});\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./Typing.ts\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./Typing.ts?");

/***/ }
/******/ ]);