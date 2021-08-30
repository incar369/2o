/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/eng.mod.js":
/*!***************************!*\
  !*** ./src/js/eng.mod.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mod_mod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mod.mod */ "./src/js/mod.mod.js");






class Eng extends _mod_mod__WEBPACK_IMPORTED_MODULE_0__.default{
	constructor(){
		super('Eng','root')
	}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Eng);





/***/ }),

/***/ "./src/js/gra.mod.js":
/*!***************************!*\
  !*** ./src/js/gra.mod.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mod_mod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mod.mod */ "./src/js/mod.mod.js");


class Gra extends _mod_mod__WEBPACK_IMPORTED_MODULE_0__.default{
	constructor(){
        super('Gra','prim')
		this.canvas = (function(){
            let c = document.createElement('canvas')
            document.body.appendChild( c )
            return c
        })()
        this.context = this.canvas.getContext("2d")
        this.poolRenderObjects=[]
	}

    resize(){
        [this.canvas.height,this.canvas.width]=[window.innerHeight,window.innerWidth]
    }
    update(){}
    draw(){

        this.poolRenderObjects.forEach((v,i,a)=>{
            if(v){
                if(v.draw){
                    v.draw(this.context)
                }
            }
        })
    }
    init(){this.animLoop()}
    addRenderObjects(obj){
        this.poolRenderObjects.push(obj)
    }
    animLoop (){
        this.update()
        this.draw()
        requestAnimationFrame(()=>this.animLoop())
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gra);

/***/ }),

/***/ "./src/js/mod.mod.js":
/*!***************************!*\
  !*** ./src/js/mod.mod.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Mod{
	constructor(modName, modType){
        this.name = modName
		this.type = modType
	}
    addModule(module) {
		if(module.prototype.constructor&& true){
			this[module.name] = new module();
            this[module.name].upperLevelModule=this

			if(this[module.name].init){this[module.name].init()}
		}
	}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mod);



/***/ }),

/***/ "./src/js/test.object.js":
/*!*******************************!*\
  !*** ./src/js/test.object.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class test{
    constructor(x,y,r,color){
        this.x=x
        this.y=y
        this.r=r
        this.cl=color
    }
    draw(ctx){
        ctx.color=this.cl
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2 * Math.PI)
        ctx.stroke();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (test);




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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eng_mod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eng.mod */ "./src/js/eng.mod.js");
/* harmony import */ var _gra_mod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gra.mod */ "./src/js/gra.mod.js");
/* harmony import */ var _test_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.object */ "./src/js/test.object.js");



let Eng=__webpack_require__.g.eng=new _eng_mod__WEBPACK_IMPORTED_MODULE_0__.default()

;
Eng.addModule(_gra_mod__WEBPACK_IMPORTED_MODULE_1__.default)
Eng.Gra.addRenderObjects(new _test_object__WEBPACK_IMPORTED_MODULE_2__.default(10,10,3,'black'))

console.log(Eng)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vLy4vc3JjL2pzL2VuZy5tb2QuanMiLCJ3ZWJwYWNrOi8vby8uL3NyYy9qcy9ncmEubW9kLmpzIiwid2VicGFjazovL28vLi9zcmMvanMvbW9kLm1vZC5qcyIsIndlYnBhY2s6Ly9vLy4vc3JjL2pzL3Rlc3Qub2JqZWN0LmpzIiwid2VicGFjazovL28vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL28vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vby8uL3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7Ozs7OztBQU01QixrQkFBa0IsNkNBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWFU7O0FBRTVCLGtCQUFrQiw2Q0FBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEc7Ozs7Ozs7Ozs7Ozs7O0FDdENmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7O1VDZG5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNBOztBQUU3QixRQUFRLHFCQUFNLFNBQVMsNkNBQUk7O0FBRTNCLENBQWlDO0FBQ2pDLGNBQWMsNkNBQUk7QUFDbEIsNkJBQTZCLGlEQUFLOztBQUVsQyxnQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX21vZCBmcm9tIFwiLi9tb2QubW9kXCJcclxuXHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBFbmcgZXh0ZW5kcyBfbW9ke1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRzdXBlcignRW5nJywncm9vdCcpXHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEVuZ1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgX21vZCBmcm9tIFwiLi9tb2QubW9kXCJcclxuXHJcbmNsYXNzIEdyYSBleHRlbmRzIF9tb2R7XHJcblx0Y29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcignR3JhJywncHJpbScpXHJcblx0XHR0aGlzLmNhbnZhcyA9IChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZXQgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIGMgKVxyXG4gICAgICAgICAgICByZXR1cm4gY1xyXG4gICAgICAgIH0pKClcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcclxuICAgICAgICB0aGlzLnBvb2xSZW5kZXJPYmplY3RzPVtdXHJcblx0fVxyXG5cclxuICAgIHJlc2l6ZSgpe1xyXG4gICAgICAgIFt0aGlzLmNhbnZhcy5oZWlnaHQsdGhpcy5jYW52YXMud2lkdGhdPVt3aW5kb3cuaW5uZXJIZWlnaHQsd2luZG93LmlubmVyV2lkdGhdXHJcbiAgICB9XHJcbiAgICB1cGRhdGUoKXt9XHJcbiAgICBkcmF3KCl7XHJcblxyXG4gICAgICAgIHRoaXMucG9vbFJlbmRlck9iamVjdHMuZm9yRWFjaCgodixpLGEpPT57XHJcbiAgICAgICAgICAgIGlmKHYpe1xyXG4gICAgICAgICAgICAgICAgaWYodi5kcmF3KXtcclxuICAgICAgICAgICAgICAgICAgICB2LmRyYXcodGhpcy5jb250ZXh0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGluaXQoKXt0aGlzLmFuaW1Mb29wKCl9XHJcbiAgICBhZGRSZW5kZXJPYmplY3RzKG9iail7XHJcbiAgICAgICAgdGhpcy5wb29sUmVuZGVyT2JqZWN0cy5wdXNoKG9iailcclxuICAgIH1cclxuICAgIGFuaW1Mb29wICgpe1xyXG4gICAgICAgIHRoaXMudXBkYXRlKClcclxuICAgICAgICB0aGlzLmRyYXcoKVxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+dGhpcy5hbmltTG9vcCgpKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdyYSIsImNsYXNzIE1vZHtcclxuXHRjb25zdHJ1Y3Rvcihtb2ROYW1lLCBtb2RUeXBlKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBtb2ROYW1lXHJcblx0XHR0aGlzLnR5cGUgPSBtb2RUeXBlXHJcblx0fVxyXG4gICAgYWRkTW9kdWxlKG1vZHVsZSkge1xyXG5cdFx0aWYobW9kdWxlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciYmIHRydWUpe1xyXG5cdFx0XHR0aGlzW21vZHVsZS5uYW1lXSA9IG5ldyBtb2R1bGUoKTtcclxuICAgICAgICAgICAgdGhpc1ttb2R1bGUubmFtZV0udXBwZXJMZXZlbE1vZHVsZT10aGlzXHJcblxyXG5cdFx0XHRpZih0aGlzW21vZHVsZS5uYW1lXS5pbml0KXt0aGlzW21vZHVsZS5uYW1lXS5pbml0KCl9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vZFxyXG5cclxuIiwiY2xhc3MgdGVzdHtcclxuICAgIGNvbnN0cnVjdG9yKHgseSxyLGNvbG9yKXtcclxuICAgICAgICB0aGlzLng9eFxyXG4gICAgICAgIHRoaXMueT15XHJcbiAgICAgICAgdGhpcy5yPXJcclxuICAgICAgICB0aGlzLmNsPWNvbG9yXHJcbiAgICB9XHJcbiAgICBkcmF3KGN0eCl7XHJcbiAgICAgICAgY3R4LmNvbG9yPXRoaXMuY2xcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsdGhpcy55LHRoaXMuciwwLDIgKiBNYXRoLlBJKVxyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB0ZXN0XHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBfZW5nIGZyb20gXCIuL2VuZy5tb2RcIjtcclxuaW1wb3J0IF9ncmEgZnJvbSBcIi4vZ3JhLm1vZFwiO1xyXG5cclxubGV0IEVuZz1nbG9iYWwuZW5nPW5ldyBfZW5nKClcclxuXHJcbmltcG9ydCBfdGVzdCBmcm9tIFwiLi90ZXN0Lm9iamVjdFwiXHJcbkVuZy5hZGRNb2R1bGUoX2dyYSlcclxuRW5nLkdyYS5hZGRSZW5kZXJPYmplY3RzKG5ldyBfdGVzdCgxMCwxMCwzLCdibGFjaycpKVxyXG5cclxuY29uc29sZS5sb2coRW5nKSJdLCJzb3VyY2VSb290IjoiIn0=