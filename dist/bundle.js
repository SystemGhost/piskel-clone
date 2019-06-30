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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/App.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/App.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\r\n  background-color: rgba(131, 122, 146, 0.671);\r\n}\r\n\r\n.add-frame {\r\n  position: relative;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n\r\n.tools-container {\r\n  max-width: 100px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.tools-container button {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 40px;\r\n  height: 40px;\r\n  border: 1px solid black;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/canvas/style.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/canvas/style.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".container {\r\n  position: relative;\r\n}\r\n\r\n.container-block {\r\n  display: block;\r\n  height: 160px;\r\n}\r\n\r\n.layout {\r\n  position: absolute;\r\n}\r\n\r\ncanvas {\r\n  border: 1px solid gray;\r\n  cursor: crosshair;\r\n  user-select: none;\r\n}\r\n\r\n#canvas-container {\r\n  display: inline-block;\r\n  position: relative;\r\n  left: 20px;\r\n  top: -200px;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/layers/style.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/layers/style.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#layers-container {\r\n  position: fixed;\r\n  right: 0;\r\n  top: 260px;\r\n  max-width: 166px;\r\n  width: 100%;\r\n}\r\n\r\n.layer {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid black;\r\n  width: 150px;\r\n  height: 50px;\r\n  background-color: lightgrey;\r\n}\r\n\r\n.layer-id {\r\n  position: absolute;\r\n  top: 0px;\r\n}\r\n\r\n#add-layer {\r\n  position: relative;\r\n  left: 0;\r\n  top: 0;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/palette/style.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/palette/style.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#palette-container {\r\n  display: inline-block;\r\n  border: 1px solid black;\r\n  padding-top: 2px;\r\n}\r\n\r\n#groupColor {\r\n  text-align: center;\r\n  max-width: 84px;\r\n  user-select: none;\r\n}\r\n\r\n#primaryColor, #secondaryColor {\r\n  display: inline-block;\r\n  width: 30px;\r\n  height: 30px;\r\n  border: 1px solid black;\r\n}\r\n\r\n#primaryColor {\r\n  background-color: black;\r\n}\r\n\r\n#secondaryColor {\r\n  background-color: white;\r\n}\r\n\r\n.color-cell {\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 1px solid black;\r\n}\r\n\r\n#temp-colors {\r\n  text-align: center;\r\n}\r\n\r\n#black {\r\n  background-color: black;\r\n}\r\n\r\n#white {\r\n  background-color: white;\r\n}\r\n\r\n#green {\r\n  background-color: green;\r\n}\r\n\r\n#red {\r\n  background-color: red;\r\n}\r\n\r\n#blue {\r\n  background-color: blue;\r\n}\r\n\r\n#gray {\r\n  background-color: gray;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/preview/style.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/preview/style.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#preview-container {\r\n  position: fixed;\r\n  right: 0;\r\n}\r\n\r\n.group-preview {\r\n  max-width: 200px;\r\n}\r\n\r\n#fullscreen-preview {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  margin: 0 auto;\r\n}\r\n\r\n:-webkit-full-screen #fullscreen-preview, :-webkit-full-screen #preview {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n:-moz-full-screen #fullscreen-preview, :-webkit-full-screen #preview {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n/* Chrome, Safari and Opera syntax */\r\n\r\n:-webkit-full-screen {\r\n  background-color: gray;\r\n}\r\n\r\n/* Firefox syntax */\r\n\r\n:-moz-full-screen {\r\n  background-color: gray;\r\n}\r\n\r\n/* IE/Edge syntax */\r\n\r\n:-ms-fullscreen {\r\n  background-color: gray;\r\n}\r\n\r\n/* Standard syntax */\r\n\r\n:fullscreen {\r\n  background-color: gray;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/timeline/style.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/timeline/style.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#timeline-container {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  max-width: 116px;\r\n  width: 100%;\r\n}\r\n\r\n.timeline-table {\r\n  position: relative;\r\n  max-width: 400px;\r\n  width: 100%;\r\n  border: 1px solid black;\r\n  user-select: none;\r\n}\r\n\r\n.frame-holder {\r\n  height: 102px;\r\n  width: 102px;\r\n  background-color: white;\r\n  display: inline-block;\r\n}\r\n\r\n.figure {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid black;\r\n  width: 100px;\r\n  height: 100px;\r\n  background-color: lightgrey;\r\n}\r\n\r\n.delete-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  left: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.frame-button {\r\n  position: absolute;\r\n  bottom: 0px;\r\n}\r\n\r\n.frame-id {\r\n  position: absolute;\r\n  top: 0px;\r\n}\r\n\r\n#del-framec {\r\n  left: 0px;\r\n}\r\n\r\n#clone-frame {\r\n  right: 0px;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/tools/style.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/tools/style.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#tools {\r\n  display: inline-block;\r\n  max-width: 150px;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/components/App.css":
/*!********************************!*\
  !*** ./src/components/App.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ "./src/components/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _canvas_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas/index */ "./src/components/canvas/index.js");
/* harmony import */ var _tools_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/index */ "./src/components/tools/index.js");
/* harmony import */ var _timeline_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline/index */ "./src/components/timeline/index.js");
/* harmony import */ var _preview_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preview/index */ "./src/components/preview/index.js");
/* harmony import */ var _download_file_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./download_file/index */ "./src/components/download_file/index.js");
/* harmony import */ var _layers_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layers/index */ "./src/components/layers/index.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./palette */ "./src/components/palette/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var App =
/*#__PURE__*/
function () {
  function App(rootName) {
    _classCallCheck(this, App);

    this.arrFrames = [];
    this.rootName = rootName;
    this.index = 1;
    this.root = document.getElementById(this.rootName);
    this.tools = new _tools_index__WEBPACK_IMPORTED_MODULE_2__["default"]('tools');
    this.tempFrame = null;
    this.timeline = new _timeline_index__WEBPACK_IMPORTED_MODULE_3__["default"]('timeline-container', 'timeline-table');
    this.preview = new _preview_index__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.downloadFile = new _download_file_index__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.layers = new _layers_index__WEBPACK_IMPORTED_MODULE_6__["default"]('layers');
    this.timeline.setChangeLayers(this.layers.getChangeLayers());
    this.downloadFile.setConfigPreview(this.preview.getConfig());
    this.btnAddNewFrame = document.getElementById('add-new-frame');
    this.palette = new _palette__WEBPACK_IMPORTED_MODULE_7__["default"]('palette-container');
    this.createNewFrame = this.createNewFrame.bind(this);
    this.init();
  }

  _createClass(App, [{
    key: "createNewFrame",
    value: function createNewFrame() {
      var frame = document.createElement('div');
      frame.id = "frame".concat(this.index);
      this.index += 1;
      this.root.append(frame);
      this.createNewFrameItem(frame);
      this.tempFrame = frame;
    }
  }, {
    key: "createNewFrameItem",
    value: function createNewFrameItem(root) {
      if (this.arrFrames.length > 0) {
        this.arrFrames[this.arrFrames.length - 1].root.style.display = 'none';
      }

      var frame = new _canvas_index__WEBPACK_IMPORTED_MODULE_1__["default"](root.id);
      frame.init();
      frame.setColorConfig(this.palette.getConfig());
      this.arrFrames.push({
        root: root,
        frame: frame
      });
      this.tools.setTempFrame(frame);
      frame.getTool = this.tools.getTool;
      var frameObj = {
        root: root,
        frame: frame
      };
      this.timeline.addNewFrame(frameObj);
      this.layers.changeLayers(frameObj);
    }
  }, {
    key: "init",
    value: function init() {
      this.btnAddNewFrame.addEventListener('click', this.createNewFrame);
      this.tools.init();
      this.timeline.init('frame-holder', 'figure');
      this.preview.setArrFrames(this.arrFrames);
      this.downloadFile.setArrFrame(this.arrFrames);
      this.timeline.setAddFrame(this.createNewFrame);
    }
  }]);

  return App;
}();

window.onload = function () {
  var main = new App('canvas-container');
  main.init();
  main.createNewFrame();
};

/***/ }),

/***/ "./src/components/canvas/index.js":
/*!****************************************!*\
  !*** ./src/components/canvas/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CanvasField; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/components/canvas/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var CanvasField =
/*#__PURE__*/
function () {
  function CanvasField(root) {
    var maxUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32;
    var heightPixel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 15;
    var widthPixel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 15;

    _classCallCheck(this, CanvasField);

    this.rootName = root;
    this.canvasRoot = document.getElementById(this.rootName);
    this.maxUnit = maxUnit;
    this.stepWidth = this.maxUnit;
    this.stepHeight = this.maxUnit;
    this.heightPixel = heightPixel;
    this.widthPixel = widthPixel;
    this.massLayer = [];
    this.indexLayer = 0;
    this.canvasBackground = null;
    this.tempCanvas = null;
    this.tempContext = null;
    this.verticalTool = false;
    this.horizontalTool = false;
    this.drag = false;
    this.primaryColor = 'black';
    this.secondaryColor = 'white';
    this.configColor = null;
    this.thickBrush = 1;
    this.tool = 'brush'; // bucket or brush

    this.rightMouseButtonKey = 0;
    this.leftMouseButtonKey = 2;
    this.tempMouseButtonKey = 0;
    this.actionOneClick = this.actionOneClick.bind(this);
    this.dragTrue = this.dragTrue.bind(this);
    this.dragFalse = this.dragFalse.bind(this);
    this.mouseMoveToDraw = this.mouseMoveToDraw.bind(this);
    this.contextMenu = this.contextMenu.bind(this);
    this.addNewLayer = this.addNewLayer.bind(this);
    this.getTool = null;
  }

  _createClass(CanvasField, [{
    key: "createLayerBackground",
    value: function createLayerBackground(root) {
      if (!this.canvasBackground) {
        var layer = document.createElement('canvas');
        layer.width = (this.maxUnit * this.widthPixel).toString();
        layer.height = (this.maxUnit * this.heightPixel).toString();
        layer.className = 'layout';
        layer.id = 'layerBackground';
        root.append(layer);
        this.canvasBackground = layer;
      }
    }
  }, {
    key: "checkmateBackground",
    value: function checkmateBackground(canvas) {
      var tempContext = canvas.getContext('2d');
      var grayColorChoose = true;

      for (var i = 0; i < this.stepHeight; i += 1) {
        if (i % 2 === 0) {
          grayColorChoose = true;
        } else {
          grayColorChoose = false;
        }

        for (var j = 0; j < this.stepWidth; j += 1) {
          if (grayColorChoose) {
            tempContext.fillStyle = 'rgba(191,191,191,1)';
            tempContext.fillRect(j * this.widthPixel, i * this.heightPixel, this.widthPixel, this.heightPixel);
          } else {
            tempContext.fillStyle = 'white';
            tempContext.fillRect(j * this.widthPixel, i * this.heightPixel, this.widthPixel, this.heightPixel);
          }

          grayColorChoose = !grayColorChoose;
        }
      }
    }
  }, {
    key: "addNewLayer",
    value: function addNewLayer() {
      var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.canvasRoot;
      var layer = document.createElement('canvas');
      layer.width = (this.maxUnit * this.widthPixel).toString();
      layer.height = (this.maxUnit * this.heightPixel).toString();
      layer.className = 'layout';
      layer.setAttribute('index', this.indexLayer);
      this.indexLayer += 1;
      root.append(layer);
      this.massLayer.push(layer);
    }
  }, {
    key: "opacityLayers",
    value: function opacityLayers() {
      for (var i = 0; i < this.massLayer.length; i += 1) {
        this.massLayer[i].style.opacity = 0.5;
      }
    }
  }, {
    key: "switchLayer",
    value: function switchLayer(number) {
      if (this.massLayer[number]) {
        this.opacityLayers();
        this.massLayer[number].style.opacity = '1.0';
        this.tempCanvas = this.massLayer[number];
        this.tempContext = this.tempCanvas.getContext('2d');
      }
    }
  }, {
    key: "getMousePos",
    value: function getMousePos(e) {
      var rect = this.tempCanvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  }, {
    key: "paint",
    value: function paint(x, y, color) {
      var unitX = Math.floor(x / this.widthPixel);
      var unitY = Math.floor(y / this.heightPixel);
      this.tempContext.fillStyle = color;
      this.tempContext.fillRect(unitX * this.widthPixel, unitY * this.heightPixel, this.widthPixel * this.thickBrush, this.heightPixel * this.thickBrush);

      if (this.verticalTool) {
        this.tempContext.fillRect(unitX * this.widthPixel, (this.maxUnit - unitY - this.thickBrush) * this.heightPixel, this.widthPixel * this.thickBrush, this.heightPixel * this.thickBrush);
      }

      if (this.horizontalTool) {
        this.tempContext.fillRect((this.maxUnit - unitX - this.thickBrush) * this.widthPixel, unitY * this.heightPixel, this.widthPixel * this.thickBrush, this.heightPixel * this.thickBrush);
      }
    }
  }, {
    key: "getColor",
    value: function getColor() {
      if (this.tempMouseButtonKey === this.rightMouseButtonKey) {
        return this.configColor.primaryColor;
      }

      if (this.tempMouseButtonKey === this.leftMouseButtonKey) {
        return this.configColor.secondaryColor;
      }

      return '';
    }
  }, {
    key: "draw",
    value: function draw(e) {
      var pos = this.getMousePos(e);

      if (pos.x >= 0 && pos.y >= 0 && pos.x <= this.tempCanvas.width && pos.y <= this.tempCanvas.height) {
        this.paint(pos.x, pos.y, this.getColor());
      }
    }
  }, {
    key: "colorPixel",
    value: function colorPixel(x, y, color) {
      this.tempContext.fillStyle = color;
      this.tempContext.fillRect(x * this.widthPixel, y * this.heightPixel, this.widthPixel, this.heightPixel);
    }
  }, {
    key: "matchStartColor",
    value: function matchStartColor(x, y, startColor) {
      var centerPixelX = x * this.widthPixel;
      var centerPixelY = y * this.heightPixel;
      var imgData = this.tempContext.getImageData(centerPixelX, centerPixelY, 1, 1);

      if (startColor[0] === imgData.data[0] && startColor[1] === imgData.data[1] && startColor[2] === imgData.data[2] && startColor[3] === imgData.data[3]) {
        return true;
      }

      return false;
    }
  }, {
    key: "paintBucket",
    value: function paintBucket(e) {
      var pos = this.getMousePos(e);

      if (pos.x >= 0 && pos.y >= 0 && pos.x <= this.tempCanvas.width && pos.y <= this.tempCanvas.height) {
        this.spillColor(pos.x, pos.y, this.getColor());
      }
    }
  }, {
    key: "spillColor",
    value: function spillColor(x1, y1, color) {
      var unitX = Math.floor(x1 / this.widthPixel);
      var unitY = Math.floor(y1 / this.heightPixel);
      var centerPixelX = unitX * this.widthPixel;
      var centerPixelY = unitY * this.heightPixel;
      var imgData = this.tempContext.getImageData(centerPixelX, centerPixelY, 1, 1);
      var pixelStack = [[unitX, unitY]];
      var newPos;
      var x;
      var y;
      var reachLeft;
      var reachRight;

      while (pixelStack.length) {
        newPos = pixelStack.pop(); // eslint-disable-next-line prefer-destructuring

        x = newPos[0]; // eslint-disable-next-line prefer-destructuring

        y = newPos[1];

        while (y >= 0 && this.matchStartColor(x, y, imgData.data, this.tempContext)) {
          y -= 1;
        }

        y += 1;
        reachLeft = false;
        reachRight = false;

        while (y < this.stepHeight && this.matchStartColor(x, y, imgData.data, this.tempContext)) {
          this.colorPixel(x, y, color);

          if (x > 0) {
            if (this.matchStartColor(x - 1, y, imgData.data, this.tempContext)) {
              if (!reachLeft) {
                pixelStack.push([x - 1, y]);
                reachLeft = true;
              }
            } else if (reachLeft) {
              reachLeft = false;
            }
          }

          if (x < this.stepWidth - 1) {
            if (this.matchStartColor(x + 1, y, imgData.data, this.tempContext)) {
              if (!reachRight) {
                pixelStack.push([x + 1, y]);
                reachRight = true;
              }
            } else if (reachRight) {
              reachRight = true;
            }
          }

          y += 1;
        }
      }
    }
  }, {
    key: "dragFalse",
    value: function dragFalse(e) {
      this.drag = false;
      e.stopPropagation();
    }
  }, {
    key: "setButtonMouse",
    value: function setButtonMouse(button) {
      if (button === this.leftMouseButtonKey) {
        this.tempMouseButtonKey = this.leftMouseButtonKey;
      } else if (button === this.rightMouseButtonKey) {
        this.tempMouseButtonKey = this.rightMouseButtonKey;
      }
    }
  }, {
    key: "dragTrue",
    value: function dragTrue(e) {
      this.setButtonMouse(e.button);
      this.drag = true;
      e.stopPropagation();
    }
  }, {
    key: "mouseMoveToDraw",
    value: function mouseMoveToDraw(e) {
      if (this.drag && this.tool === 'brush') {
        this.draw(e);
      }

      e.stopPropagation();
    }
  }, {
    key: "actionOneClick",
    value: function actionOneClick(e) {
      this.setButtonMouse(e.button);
      this.tool = this.getTool();

      switch (this.tool) {
        case 'brush':
          this.draw(e);
          break;

        case 'bucket':
          this.paintBucket(e);
          break;

        default:
          break;
      }
    }
  }, {
    key: "contextMenu",
    value: function contextMenu(e) {
      this.actionOneClick(e);
      e.preventDefault();
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      this.canvasRoot.addEventListener('mousedown', this.dragTrue);
      this.canvasRoot.addEventListener('mousemove', this.mouseMoveToDraw);
      this.canvasRoot.addEventListener('click', this.actionOneClick);
      this.canvasRoot.addEventListener('contextmenu', this.contextMenu);
      document.addEventListener('mouseup', this.dragFalse);
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      this.canvasRoot.removeEventListener('mousedown', this.dragTrue);
      this.canvasRoot.removeEventListener('mousemove', this.mouseMoveToDraw);
      this.canvasRoot.removeEventListener('click', this.actionOneClick);
      this.canvasRoot.removeEventListener('contextmenu', this.contextMenu);
      document.removeEventListener('mouseup', this.dragFalse);
    }
  }, {
    key: "disable",
    value: function disable() {
      this.tempCanvas = null;
    }
  }, {
    key: "enable",
    value: function enable() {
      if (this.massLayer.length > 0) {
        this.switchLayer(this.massLayer.length - 1);
      }
    }
  }, {
    key: "init",
    value: function init() {
      this.canvasRoot.innerHTML = '';
      this.massLayer = [];
      this.createLayerBackground(this.canvasRoot);
      this.checkmateBackground(this.canvasBackground);
      this.addNewLayer(this.canvasRoot);
      this.switchLayer(0);
      this.removeEvents();
      this.initEvents();
    }
  }, {
    key: "setColorConfig",
    value: function setColorConfig(config) {
      this.configColor = config;
    }
  }]);

  return CanvasField;
}();



/***/ }),

/***/ "./src/components/canvas/style.css":
/*!*****************************************!*\
  !*** ./src/components/canvas/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/canvas/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/download_file/index.js":
/*!***********************************************!*\
  !*** ./src/components/download_file/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DownloadFile; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable no-undef */
var DownloadFile =
/*#__PURE__*/
function () {
  function DownloadFile() {
    _classCallCheck(this, DownloadFile);

    this.arrFrames = null;
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.width = 150;
    this.height = 150;
    this.dowbloadButton = document.getElementById('download');
    this.configPreview = null;
    this.downloadGif = this.downloadGif.bind(this);
    this.init();
  }

  _createClass(DownloadFile, [{
    key: "init",
    value: function init() {
      this.dowbloadButton.addEventListener('click', this.downloadGif);
    }
  }, {
    key: "downloadGif",
    value: function downloadGif(e) {
      e.stopPropagation();
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.context.fillStyle = 'rgb(255,255,255)';
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      var encoder = new GIFEncoder();
      encoder.setRepeat(0);
      var delay;

      if (this.configPreview) {
        if (this.configPreview.fpsInterval && this.configPreview.fpsInterval > 0) {
          delay = this.configPreview.fpsInterval;
        }
      } else {
        delay = 500;
      }

      encoder.setDelay(delay);
      encoder.start();

      for (var i = 0; i < this.arrFrames.length; i += 1) {
        this.context.fillStyle = 'rgba(255,255,255)';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        for (var j = 0; j < this.arrFrames[i].frame.massLayer.length; j += 1) {
          this.context.drawImage(this.arrFrames[i].frame.massLayer[j], 0, 0, this.width, this.height);
        }

        encoder.addFrame(this.context);
      }

      encoder.finish();
      encoder.download('download.gif');
    }
  }, {
    key: "setArrFrame",
    value: function setArrFrame(arrFrame) {
      this.arrFrames = arrFrame;
    }
  }, {
    key: "setConfigPreview",
    value: function setConfigPreview(config) {
      this.configPreview = config;
    }
  }]);

  return DownloadFile;
}();



/***/ }),

/***/ "./src/components/layers/index.js":
/*!****************************************!*\
  !*** ./src/components/layers/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layers; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/components/layers/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Layers =
/*#__PURE__*/
function () {
  function Layers(rootName) {
    _classCallCheck(this, Layers);

    this.rootName = rootName;
    this.root = document.getElementById(this.rootName);
    this.layerIndex = 0;
    this.changeLayers = this.changeLayers.bind(this);
    this.addNewLayer = this.addNewLayer.bind(this);
    this.layersEvent = this.layersEvent.bind(this);
    this.init();
  }

  _createClass(Layers, [{
    key: "init",
    value: function init() {
      document.getElementById('add-layer').addEventListener('click', this.addNewLayer);
      document.getElementById('layers').addEventListener('click', this.layersEvent);
    }
  }, {
    key: "addNewLayer",
    value: function addNewLayer() {
      if (this.tempFrame) {
        this.tempFrame.frame.addNewLayer();
        this.addLayer();
      }
    }
  }, {
    key: "layersEvent",
    value: function layersEvent(e) {
      e.stopPropagation();

      if (e.target.className === 'layer') {
        var index = e.target.getAttribute('index');
        this.tempFrame.frame.switchLayer(index);
      }
    }
  }, {
    key: "addLayer",
    value: function addLayer() {
      var layer = document.createElement('div');
      layer.className = 'layer';
      layer.id = "layer".concat(this.layerIndex);
      layer.setAttribute('index', this.layerIndex);
      var textId = document.createElement('div');
      textId.classList = 'layer-id';
      textId.innerHTML = this.layerIndex;
      this.layerIndex += 1;
      layer.appendChild(textId);
      this.root.append(layer);
    }
  }, {
    key: "changeLayers",
    value: function changeLayers(frame) {
      this.tempFrame = frame;
      this.layerIndex = 0;
      this.root.innerHTML = '';

      for (var i = 0; i < this.tempFrame.frame.massLayer.length; i += 1) {
        this.addLayer();
      }
    }
  }, {
    key: "getChangeLayers",
    value: function getChangeLayers() {
      return this.changeLayers;
    }
  }]);

  return Layers;
}();



/***/ }),

/***/ "./src/components/layers/style.css":
/*!*****************************************!*\
  !*** ./src/components/layers/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/layers/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/palette/index.js":
/*!*****************************************!*\
  !*** ./src/components/palette/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pallete; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/components/palette/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Pallete =
/*#__PURE__*/
function () {
  function Pallete(rootName) {
    _classCallCheck(this, Pallete);

    this.config = Object.create(null);
    this.config.primaryColor = 'black';
    this.config.secondaryColor = 'white';
    this.rootName = rootName;
    this.root = document.getElementById(this.rootName);
    this.primaryColorDOM = document.getElementById('primaryColor');
    this.secondaryColorDOM = document.getElementById('secondaryColor');
    this.leftButton = 0;
    this.rightButton = 2;
    this.palleteEvent = this.palleteEvent.bind(this);
    this.contextMenu = this.contextMenu.bind(this);
    this.init();
  }

  _createClass(Pallete, [{
    key: "init",
    value: function init() {
      this.root.addEventListener('click', this.palleteEvent);
      this.root.addEventListener('contextmenu', this.contextMenu);
    }
  }, {
    key: "contextMenu",
    value: function contextMenu(e) {
      this.palleteEvent(e);
      e.preventDefault();
    }
  }, {
    key: "palleteEvent",
    value: function palleteEvent(e) {
      e.stopPropagation();
      e.preventDefault();

      if (e.srcElement.className === 'color-cell') {
        if (e.button === this.leftButton) {
          this.config.primaryColor = e.srcElement.id;
          this.primaryColorDOM.style.backgroundColor = this.config.primaryColor;
        } else if (e.button === this.rightButton) {
          this.config.secondaryColor = e.srcElement.id;
          this.secondaryColorDOM.style.backgroundColor = this.config.secondaryColor;
        }
      }
    }
  }, {
    key: "getConfig",
    value: function getConfig() {
      return this.config;
    }
  }]);

  return Pallete;
}();



/***/ }),

/***/ "./src/components/palette/style.css":
/*!******************************************!*\
  !*** ./src/components/palette/style.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/palette/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/preview/index.js":
/*!*****************************************!*\
  !*** ./src/components/preview/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Preview; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/components/preview/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Preview =
/*#__PURE__*/
function () {
  function Preview() {
    _classCallCheck(this, Preview);

    this.name = 'preview';
    this.arrFrames = null;
    this.canvas = document.getElementById('preview');
    this.context = this.canvas.getContext('2d');
    this.startAnimation = document.getElementById('start-preview');
    this.endAnimation = document.getElementById('end-preview');
    this.fullScreenButton = document.getElementById('fullscreen-preview');
    this.fullScreenContainer = document.getElementById('preview-screen');
    this.width = 150;
    this.height = 150;
    this.widthFrame = this.width / 3;
    this.heightFrame = this.height / 3;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.defaultColor = 'lightgrey';
    this.startAnimate = this.startAnimate.bind(this);
    this.stopAnimate = this.stopAnimate.bind(this);
    this.stop = false;
    this.fps = 1;
    this.fpsInterval = 500;
    this.then = null;
    this.now = null;
    this.elapsed = null;
    this.tempFrame = 0;
    this.config = {
      fpsInterval: this.fpsInterval
    };
    this.slider = document.getElementById('myRange');
    this.output = document.getElementById('demo');
    this.output.innerHTML = this.fps;
    this.sliderValue = this.sliderValue.bind(this);
    this.fullScreen = this.fullScreen.bind(this);
    this.init();
  }

  _createClass(Preview, [{
    key: "sliderValue",
    value: function sliderValue(e) {
      this.output.innerHTML = e.target.valueAsNumber;
      this.changeFps(e.target.valueAsNumber);
    }
  }, {
    key: "stopAnimate",
    value: function stopAnimate() {
      this.stop = true;
    }
  }, {
    key: "startAnimate",
    value: function startAnimate() {
      this.changeFps(this.fps);
      this.stop = false;
      this.then = Date.now();
      this.animate();
    }
  }, {
    key: "changeFps",
    value: function changeFps(fps) {
      if (fps <= 0 || fps === undefined) {
        this.fps = 1;
      } else {
        this.fps = fps;
      }

      this.fpsInterval = 1000 / this.fps;
      this.config.fpsInterval = this.fpsInterval;
    }
  }, {
    key: "nextFrame",
    value: function nextFrame() {
      this.tempFrame += 1;

      if (this.tempFrame >= this.arrFrames.length) {
        this.tempFrame = 0;
      }

      return this.arrFrames[this.tempFrame];
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this = this;

      if (this.stop || this.arrFrames.length === 0) return;
      requestAnimationFrame(function () {
        return _this.animate();
      });
      this.now = Date.now();
      this.elapsed = this.now - this.then;

      if (this.elapsed > this.fpsInterval) {
        this.then = this.now - this.elapsed % this.fpsInterval;
        this.context.clearRect(0, 0, this.width, this.height);
        this.drawFrame(this.nextFrame());
      }
    }
  }, {
    key: "drawFrame",
    value: function drawFrame(sourceCanvas) {
      for (var i = 0; i < sourceCanvas.frame.massLayer.length; i += 1) {
        this.context.drawImage(sourceCanvas.frame.massLayer[i], 0, 0, this.width, this.height);
      }
    }
  }, {
    key: "init",
    value: function init() {
      this.startAnimation.addEventListener('click', this.startAnimate);
      this.endAnimation.addEventListener('click', this.stopAnimate);
      this.slider.addEventListener('input', this.sliderValue);
      this.fullScreenButton.addEventListener('click', this.fullScreen);
    }
  }, {
    key: "setArrFrames",
    value: function setArrFrames(arrFrames) {
      this.arrFrames = arrFrames;
    }
  }, {
    key: "getConfig",
    value: function getConfig() {
      return this.config;
    }
  }, {
    key: "fullScreen",
    value: function fullScreen() {
      console.log('fullscreen', this.fullScreenContainer);
      var elem = this.fullScreenContainer;

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    }
  }]);

  return Preview;
}();



/***/ }),

/***/ "./src/components/preview/style.css":
/*!******************************************!*\
  !*** ./src/components/preview/style.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/preview/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/timeline/index.js":
/*!******************************************!*\
  !*** ./src/components/timeline/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timeline; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/components/timeline/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Timeline =
/*#__PURE__*/
function () {
  function Timeline(rootContainer, rootGroup) {
    _classCallCheck(this, Timeline);

    this.arrFrame = [];
    this.rootContainer = rootContainer;
    this.rootContainerElem = document.getElementById(this.rootContainer);
    this.rootGroup = rootGroup;
    this.root = document.getElementById(this.rootGroup);
    this.frameHolder = '';
    this.frame = '';
    this.frameId = 1;
    this.figure = null;
    this.startPlace = null;
    this.dragged = null;
    this.flagDragg = false;
    this.tempFrame = {};
    this.changeLayers = null;
    this.addFrame = null;
    this.switchFrame = this.switchFrame.bind(this);
    this.timelineEvent = this.timelineEvent.bind(this);
    this.replaceNodeInArr = this.replaceNodeInArr.bind(this);
    this.cloneFrame = this.cloneFrame.bind(this);
  }

  _createClass(Timeline, [{
    key: "addNewFrame",
    value: function addNewFrame(canvasFrame) {
      var _this = this;

      var holder = document.createElement('div');
      holder.className = this.frameHolder;
      var frame = document.createElement('div');
      frame.className = this.frame;
      frame.draggable = true;
      frame.addEventListener('click', function (e) {
        return _this.switchFrame(e, canvasFrame);
      });
      var buttonMinus = document.createElement('input');
      buttonMinus.type = 'button';
      buttonMinus.classList = 'frame-button';
      buttonMinus.id = 'del-frame';
      buttonMinus.value = '-';
      var buttonClone = document.createElement('input');
      buttonClone.type = 'button';
      buttonClone.classList = 'frame-button';
      buttonClone.id = 'clone-frame';
      buttonClone.value = '*';
      var textId = document.createElement('div');
      textId.classList = 'frame-id';
      textId.innerHTML = this.frameId;
      this.frameId += 1;
      frame.appendChild(textId);
      frame.append(buttonMinus);
      frame.append(buttonClone);
      holder.append(frame);
      this.root.append(holder);
      this.arrFrame.push({
        canvasFrame: canvasFrame,
        holder: holder,
        frame: frame
      });
    }
  }, {
    key: "disableFrames",
    value: function disableFrames() {
      for (var i = 0; i < this.arrFrame.length; i += 1) {
        this.arrFrame[i].canvasFrame.frame.disable();
        this.arrFrame[i].canvasFrame.root.style.display = 'none';
      }
    }
  }, {
    key: "switchFrame",
    value: function switchFrame(e, frame) {
      if (e.srcElement.className === 'figure') {
        this.tempFrame = frame;
        this.disableFrames();
        this.tempFrame.frame.enable();
        this.tempFrame.root.style.display = '';
        this.changeLayers(this.tempFrame);
      }
    }
  }, {
    key: "timelineEvent",
    value: function timelineEvent(e) {
      if (e.target.className === 'frame') {
        this.tempFrame = e.srcElement;
      }

      if (e.target.id === 'del-frame') {
        this.deleteFrame(e.target.parentElement);
      }

      if (e.target.id === 'clone-frame') {
        this.cloneFrame(e.target.parentElement);
      }
    }
  }, {
    key: "cloneFrame",
    value: function cloneFrame(frame) {
      var frameToClone;

      for (var i = 0; i < this.arrFrame.length; i += 1) {
        if (this.arrFrame[i].frame === frame) {
          frameToClone = this.arrFrame[i];
          break;
        }
      }

      if (frameToClone) {
        this.addFrame();
        var copyFrame = this.arrFrame[this.arrFrame.length - 1];
        var massLayer = frameToClone.canvasFrame.frame.massLayer;
        var contextCopyFrame;

        for (var _i = 0; _i < massLayer.length; _i += 1) {
          if (_i !== 0) {
            copyFrame.canvasFrame.frame.addNewLayer();
          }

          contextCopyFrame = copyFrame.canvasFrame.frame.massLayer[_i].getContext('2d');
          contextCopyFrame.drawImage(massLayer[_i], 0, 0, massLayer[_i].width, massLayer[_i].height);
        }
      }
    }
  }, {
    key: "deleteFrame",
    value: function deleteFrame(frame) {
      var delFrame;

      for (var i = 0; i < this.arrFrame.length; i += 1) {
        if (this.arrFrame[i].frame === frame) {
          delFrame = this.arrFrame.splice(i, 1);
          break;
        }
      }

      delFrame[0].holder.remove();
      delFrame[0].canvasFrame.root.remove();
    }
  }, {
    key: "init",
    value: function init(frameHolder, frame) {
      var _this2 = this;

      this.frameHolder = frameHolder;
      this.frame = frame;
      var dragged;
      var startPlace;
      this.root.addEventListener('click', this.timelineEvent);
      this.root.addEventListener('drag', function () {}, false);
      this.root.addEventListener('dragstart', function (event) {
        dragged = event.target;
        startPlace = event.path.splice(1, 1); // eslint-disable-next-line no-param-reassign

        event.target.style.opacity = 0.5;
        _this2.flagDragg = true;
      }, false);
      this.root.addEventListener('dragend', function (event) {
        // eslint-disable-next-line no-param-reassign
        event.target.style.opacity = '';
      }, false);
      this.root.addEventListener('dragover', function (event) {
        event.preventDefault();
      }, false);
      this.root.addEventListener('dragenter', function (event) {
        if (event.target.className === 'frame-holder') {
          // eslint-disable-next-line no-param-reassign
          event.target.style.background = 'purple';
        }
      }, false);
      this.root.addEventListener('dragleave', function (event) {
        if (event.target.className === 'frame-holder') {
          // eslint-disable-next-line no-param-reassign
          event.target.style.background = '';
        }
      }, false);
      this.root.addEventListener('drop', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (event.target.className === 'figure' && _this2.flagDragg) {
          // eslint-disable-next-line no-param-reassign
          event.target.style.background = '';
          var holder = event.path.splice(1, 1);
          var replacedNode = holder[0].replaceChild(dragged, holder[0].firstElementChild);
          startPlace[0].append(replacedNode);
          _this2.flagDragg = false;

          _this2.replaceNodeInArr(dragged, replacedNode);
        }
      }, false);
    }
  }, {
    key: "replaceNodeInArr",
    value: function replaceNodeInArr(dragged, replaceNode) {
      var node1 = -1;
      var node2 = -1;

      for (var i = 0; i < this.arrFrame.length; i += 1) {
        if (this.arrFrame[i].frame === dragged) {
          node1 = i;
        }

        if (this.arrFrame[i].frame === replaceNode) {
          node2 = i;
        }
      }

      if (node1 !== -1 && node2 !== -1) {
        var removed1 = this.arrFrame.splice(node1, 1, null);
        var removed2 = this.arrFrame.splice(node2, 1, null);
        var holder = removed1[0].holder;
        removed1[0].holder = removed2[0].holder;
        removed2[0].holder = holder;
        this.arrFrame.splice(node1, 1, removed2[0]);
        this.arrFrame.splice(node2, 1, removed1[0]);
      }
    }
  }, {
    key: "setChangeLayers",
    value: function setChangeLayers(layersFunc) {
      this.changeLayers = layersFunc;
    }
  }, {
    key: "setAddFrame",
    value: function setAddFrame(funcAddFrame) {
      this.addFrame = funcAddFrame;
    }
  }]);

  return Timeline;
}();



/***/ }),

/***/ "./src/components/timeline/style.css":
/*!*******************************************!*\
  !*** ./src/components/timeline/style.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/timeline/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tools/index.js":
/*!***************************************!*\
  !*** ./src/components/tools/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tools; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/components/tools/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Tools =
/*#__PURE__*/
function () {
  function Tools(rootName) {
    _classCallCheck(this, Tools);

    this.state = 'Tools';
    this.rootName = rootName;
    this.root = document.getElementById(this.rootName);
    this.eventToolsClick = this.eventToolsClick.bind(this);
    this.tempFrame = null;
    this.tempTool = 'brush';
    this.getTool = this.getTool.bind(this);
  }

  _createClass(Tools, [{
    key: "eventToolsClick",
    value: function eventToolsClick(e) {
      e.stopPropagation();
      e.preventDefault();
      if (!this.tempFrame) return;
      if (e.srcElement.className !== 'tool' && e.srcElement.parentNode.className !== 'tool') return;
      var tempTool;

      if (e.srcElement.className === 'tool') {
        tempTool = e.srcElement.id;
      } else if (e.srcElement.parentNode.className === 'tool') {
        tempTool = e.srcElement.parentNode.id;
      }

      switch (tempTool) {
        case 'brush':
          {
            this.tempFrame.tool = 'brush';
            this.tempFrame.verticalTool = false;
            this.tempFrame.horizontalTool = false;
            this.tempTool = 'brush';
            break;
          }

        case 'bucket':
          {
            this.tempFrame.tool = 'bucket';
            this.tempTool = 'bucket';
            break;
          }

        case 'thicc-1':
          {
            this.tempFrame.thickBrush = 1;
            break;
          }

        case 'thicc-2':
          {
            this.tempFrame.thickBrush = 2;
            break;
          }

        case 'thicc-3':
          {
            this.tempFrame.thickBrush = 3;
            break;
          }

        case 'thicc-4':
          {
            this.tempFrame.thickBrush = 4;
            break;
          }

        case 'vertical-brush':
          {
            this.tempFrame.tool = 'brush';
            this.tempFrame.verticalTool = true;
            this.tempFrame.horizontalTool = false;
            this.tempTool = 'vertical-brush';
            break;
          }

        case 'horizontal-brush':
          {
            this.tempFrame.tool = 'brush';
            this.tempFrame.verticalTool = false;
            this.tempFrame.horizontalTool = true;
            this.tempTool = 'horizontal-brush';
            break;
          }

        case 'vert-horiz-brush':
          {
            this.tempFrame.tool = 'brush';
            this.tempFrame.verticalTool = true;
            this.tempFrame.horizontalTool = true;
            this.tempTool = 'vert-horiz-brush';
            break;
          }

        default:
          break;
      }
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      this.root.addEventListener('click', this.eventToolsClick);
    }
  }, {
    key: "init",
    value: function init() {
      this.initEvents();
    }
  }, {
    key: "setTempFrame",
    value: function setTempFrame(frame) {
      this.tempFrame = frame;
    }
  }, {
    key: "getTool",
    value: function getTool() {
      return this.tempTool;
    }
  }]);

  return Tools;
}();



/***/ }),

/***/ "./src/components/tools/style.css":
/*!****************************************!*\
  !*** ./src/components/tools/style.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/tools/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");

console.log('hello');

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map