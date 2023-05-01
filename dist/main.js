/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameBoard\": () => (/* binding */ GameBoard),\n/* harmony export */   \"Ship\": () => (/* binding */ Ship),\n/* harmony export */   \"fillArray\": () => (/* binding */ fillArray)\n/* harmony export */ });\nconst Ship = function (length, hitNumber = 0, sunk = false) {\n    function hit() {\n        this.hitNumber++\n        if (this.hitNumber == this.length) this.sunk = true\n    }\n    return {\n        length, hitNumber, sunk, hit\n    }\n}\n\nconst fillArray = function (array, length) {\n    for (let i = 0; i < length; i++) {\n        const element = [];\n        array.push(element)\n        for (let j = 0; j < length; j++) {\n            element[j] = ''\n        }\n    }\n    return array\n}\nfunction placeShip(row, col) {\n    const newShip = Ship(1)\n    const { map } = this\n    row -= 1\n    col -= 1\n    if ((row + newShip.length) > map.length) return console.log('stop');\n    for (let i = row; i < (row + newShip.length); i++) {\n        map[i][col] = newShip\n    }\n    this.allShips.push(newShip)\n}\nfunction playerChecker(player, map) {\n    if (player == player1) {\n        player1.myTurn = false\n        player2.myTurn = true\n    }\n    if (player == player2) {\n        player2.myTurn = false\n        player1.myTurn = true\n    }\n}\nfunction receiveAttack(row, col) {\n    if (this.myTurn == false) return\n    playerChecker(this)\n    const { map } = this\n    console.log(map);\n    row -= 1\n    col -= 1\n    if (map[row][col] == 0) console.log('occupied');\n    if (map[row][col] == '') map[row][col] = '0'\n    if (map[row][col] != '' && map[row][col] != 0) {\n        map[row][col].hit();\n    }\n}\n\nfunction checkSunk(number = 0) {\n    this.allShips.forEach(item => {\n        if (item.sunk == true) number++\n    })\n    if (number == this.allShips.length)\n        return console.log('all dead');\n}\n\nconst GameBoard = function (length) {\n    const map = []\n    const myTurn = true\n    const allShips = []\n    fillArray(map, length)\n    return {\n        length, map, placeShip,\n        receiveAttack, allShips, checkSunk,\n        myTurn\n    }\n}\nconst player1 = GameBoard(10)\nconst player2 = GameBoard(10)\nconsole.log(player1.length);\nconsole.log(player2.length);\n\nplayer1.placeShip(4, 4)\nplayer1.placeShip(2, 2)\nplayer1.receiveAttack(2, 2)\nplayer2.receiveAttack(2, 2)\nplayer1.receiveAttack(4, 4)\nplayer2.receiveAttack(4, 4)\n\n\n//# sourceURL=webpack://template/./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n\n\n// player1.placeShip(4, 4)\n// player1.placeShip(2, 2)\n// player1.receiveAttack(2, 2)\n// player1.receiveAttack(4, 4)\n// player1.checkSunk()\n// console.log(player1);\n\n\n\n//# sourceURL=webpack://template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;