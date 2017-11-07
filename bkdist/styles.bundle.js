webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.sass":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.sass");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--9-3!./styles.sass", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--9-3!./styles.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  margin: 0; }\n\n.head {\n  background-color: #ed6460;\n  height: 1.06666667rem;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  font-size: 16px;\n  line-height: 1.06666667rem; }\n  [data-dpr=\"2\"] .head {\n    font-size: 32px; }\n  [data-dpr=\"3\"] .head {\n    font-size: 48px; }\n  @media only screen and (min-device-width: 749px) {\n    .head {\n      font-size: 19.2px !important; } }\n  [data-dpr=\"4\"] .head {\n    font-size: 64px; }\n\n.app_nav ul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 0;\n  margin: 0.26666667rem 0 0 0; }\n  .app_nav ul li {\n    width: 25%;\n    text-align: center;\n    height: 0.8rem;\n    line-height: 0.8rem;\n    display: block; }\n    .app_nav ul li.active {\n      background-color: #ed6460; }\n\n.hotlist ul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 0;\n  margin: 0.4rem 0 0 0; }\n  .hotlist ul li {\n    width: 33%;\n    text-align: center;\n    height: 4rem;\n    line-height: 2.13333333rem;\n    display: block;\n    border: 1px solid #ddd;\n    box-sizing: border-box; }\n    .hotlist ul li.s_list {\n      width: 100%;\n      padding: 0.26666667rem;\n      font-size: 16px;\n      text-align: left;\n      border: 0;\n      border-bottom: 1px solid #ddd;\n      height: 2rem; }\n      [data-dpr=\"2\"] .hotlist ul li.s_list {\n        font-size: 32px; }\n      [data-dpr=\"3\"] .hotlist ul li.s_list {\n        font-size: 48px; }\n      @media only screen and (min-device-width: 749px) {\n        .hotlist ul li.s_list {\n          font-size: 19.2px !important; } }\n      [data-dpr=\"4\"] .hotlist ul li.s_list {\n        font-size: 64px; }\n      .hotlist ul li.s_list h3 {\n        font-size: 20px;\n        line-height: 0.53333333rem;\n        margin: 0; }\n        [data-dpr=\"2\"] .hotlist ul li.s_list h3 {\n          font-size: 40px; }\n        [data-dpr=\"3\"] .hotlist ul li.s_list h3 {\n          font-size: 60px; }\n        @media only screen and (min-device-width: 749px) {\n          .hotlist ul li.s_list h3 {\n            font-size: 24px !important; } }\n        [data-dpr=\"4\"] .hotlist ul li.s_list h3 {\n          font-size: 80px; }\n      .hotlist ul li.s_list p {\n        margin: 0.26666667rem 0 0 0;\n        line-height: 0.46666667rem; }\n\n.booklist ul li {\n  font-size: 16px;\n  line-height: 0.8rem; }\n  [data-dpr=\"2\"] .booklist ul li {\n    font-size: 32px; }\n  [data-dpr=\"3\"] .booklist ul li {\n    font-size: 48px; }\n  @media only screen and (min-device-width: 749px) {\n    .booklist ul li {\n      font-size: 19.2px !important; } }\n  [data-dpr=\"4\"] .booklist ul li {\n    font-size: 64px; }\n  .booklist ul li a {\n    color: #000;\n    text-decoration: none; }\n\n.booklist .bl_title {\n  font-size: 22px;\n  text-align: center;\n  padding: 0.13333333rem 0; }\n  [data-dpr=\"2\"] .booklist .bl_title {\n    font-size: 44px; }\n  [data-dpr=\"3\"] .booklist .bl_title {\n    font-size: 66px; }\n  @media only screen and (min-device-width: 749px) {\n    .booklist .bl_title {\n      font-size: 26.4px !important; } }\n  [data-dpr=\"4\"] .booklist .bl_title {\n    font-size: 88px; }\n\n.booklist .bl_author {\n  font-size: 14px;\n  text-align: center;\n  padding: 0.13333333rem 0;\n  margin: 0; }\n  [data-dpr=\"2\"] .booklist .bl_author {\n    font-size: 28px; }\n  [data-dpr=\"3\"] .booklist .bl_author {\n    font-size: 42px; }\n  @media only screen and (min-device-width: 749px) {\n    .booklist .bl_author {\n      font-size: 16.8px !important; } }\n  [data-dpr=\"4\"] .booklist .bl_author {\n    font-size: 56px; }\n\n.booklist .bl_jianjie {\n  font-size: 14px;\n  text-align: left;\n  padding: 0.26666667rem 0.13333333rem;\n  margin: 0;\n  line-height: 0.53333333rem; }\n  [data-dpr=\"2\"] .booklist .bl_jianjie {\n    font-size: 28px; }\n  [data-dpr=\"3\"] .booklist .bl_jianjie {\n    font-size: 42px; }\n  @media only screen and (min-device-width: 749px) {\n    .booklist .bl_jianjie {\n      font-size: 16.8px !important; } }\n  [data-dpr=\"4\"] .booklist .bl_jianjie {\n    font-size: 56px; }\n\n.booklist .bl_count {\n  font-size: 12px;\n  text-align: left;\n  color: #ccc;\n  padding: 0.13333333rem;\n  position: relative; }\n  [data-dpr=\"2\"] .booklist .bl_count {\n    font-size: 24px; }\n  [data-dpr=\"3\"] .booklist .bl_count {\n    font-size: 36px; }\n  @media only screen and (min-device-width: 749px) {\n    .booklist .bl_count {\n      font-size: 14.4px !important; } }\n  [data-dpr=\"4\"] .booklist .bl_count {\n    font-size: 48px; }\n  .booklist .bl_count span {\n    text-align: right;\n    position: absolute;\n    right: 0.26666667rem;\n    top: 0; }\n\n.bookv {\n  font-size: 14px;\n  line-height: 0.66666667rem;\n  padding: 0 0.26666667rem;\n  position: relative; }\n  [data-dpr=\"2\"] .bookv {\n    font-size: 28px; }\n  [data-dpr=\"3\"] .bookv {\n    font-size: 42px; }\n  @media only screen and (min-device-width: 749px) {\n    .bookv {\n      font-size: 16.8px !important; } }\n  [data-dpr=\"4\"] .bookv {\n    font-size: 56px; }\n  .bookv .boov_setting {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .bookv .boov_setting span {\n      width: 33%;\n      text-align: center;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; }\n  .bookv .setting .fontchange {\n    width: 70%;\n    margin: 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .bookv .setting .fontchange span {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      text-align: center;\n      height: 0.8rem;\n      border: 1px solid #ddd;\n      border-radius: initial !important; }\n  .bookv .setting .canseting {\n    position: fixed;\n    z-index: 10;\n    left: 0;\n    bottom: 1.33333333rem;\n    min-height: 3.46666667rem;\n    background-color: #fff;\n    color: #000;\n    width: 100%; }\n    .bookv .setting .canseting .looktype span {\n      width: 1.33333333rem;\n      height: 1.33333333rem;\n      border-radius: 50%;\n      text-align: center;\n      line-height: 1.33333333rem;\n      display: inline-block;\n      margin-left: 0.8rem; }\n      .bookv .setting .canseting .looktype span.rj {\n        background-color: #fff;\n        border: 1px solid #ddd;\n        color: #000; }\n      .bookv .setting .canseting .looktype span.hy {\n        border-color: #97b998;\n        background-color: #e2f0da;\n        color: #3b6058; }\n      .bookv .setting .canseting .looktype span.zz {\n        border-color: #cabb9e;\n        background-color: #f4eee1;\n        color: #754531; }\n      .bookv .setting .canseting .looktype span.yj {\n        border-color: #181b1c;\n        background-color: #181b1c;\n        color: #999; }\n      .bookv .setting .canseting .looktype span.active {\n        border: solid 3px #f5682b; }\n  .bookv .setting .settop {\n    width: 2rem;\n    height: 1.33333333rem;\n    line-height: 1.33333333rem;\n    text-align: center;\n    position: fixed;\n    top: 50%;\n    left: 0;\n    z-index: 10;\n    background-color: rgba(0, 0, 0, 0.7);\n    border: 1px solid #ddd;\n    border-left: 0;\n    color: #fff; }\n  .bookv .setting .setbtm {\n    width: 2rem;\n    height: 1.33333333rem;\n    line-height: 1.33333333rem;\n    text-align: center;\n    position: fixed;\n    top: 50%;\n    right: 0;\n    z-index: 10;\n    background-color: rgba(0, 0, 0, 0.7);\n    border: 1px solid #ddd;\n    border-right: 0;\n    color: #fff; }\n  .bookv .setting .setall {\n    width: 100%;\n    height: 1.33333333rem;\n    line-height: 1.33333333rem;\n    text-align: center;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    z-index: 10;\n    background-color: black;\n    border-top: 1px solid #ddd;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    color: #fff; }\n    .bookv .setting .setall span {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      width: 33%;\n      text-align: center; }\n    .bookv .setting .setall a {\n      color: #fff;\n      text-decoration: none; }\n  .bookv .setting .disable {\n    background-color: #ddd;\n    color: #eee; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
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
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
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

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
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

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.sass");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map