// ==UserScript==
// @name         ShinyColorsEng
// @namespace    https://github.com/snowyivu/ShinyColors
// @version      0.9.1
// @description  For questions or submitting translations https://github.com/snowyivu/ShinyColors
// @icon         https://shinycolors.enza.fun/icon_192x192.png
// @author       biuuu
// @match        https://shinycolors.enza.fun/*
// @run-at       document-end
// @grant        GM_xmlhttpRequest
// @connect      api.interpreter.caiyunai.com
// @connect      translate.google.cn
// @connect      fanyi.baidu.com
// @updateURL    https://github.com/snowyivu/ShinyColors/raw/gh-pages/ShinyColors.user.js
// @supportURL   https://github.com/snowyivu/ShinyColors/issues
// ==/UserScript==
(function () {
	'use strict';

	const ENVIRONMENT = "";
	    const DATA_URL = '';
	    const DEV = false;
	    const SHOW_UPDATE_TEXT = false;
	    const COLLECT_CARD_RATE = false;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = _freeGlobal || freeSelf || Function('return this')();

	var _root = root;

	/** Built-in value references. */
	var Symbol = _root.Symbol;

	var _Symbol = Symbol;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag$1 && symToStringTag$1 in Object(value))
	    ? _getRawTag(value)
	    : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	var isArray_1 = isArray;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike;

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag);
	}

	var isString_1 = isString;

	const tagText = text => {
	  return "\u200B".concat(text);
	};

	const restoreConsole = () => {
	  const iframe = document.createElement('iframe');
	  iframe.style.display = 'none';
	  document.body.appendChild(iframe);
	  return iframe.contentWindow.console;
	};

	const isDomain = str => {
	  if (!/^https?:\/\//.test(str)) return false;
	  if (/\s/.test(str.trim())) return false;
	  return true;
	};

	const trim = str => {
	  if (!str) return '';

	  let _str = str.replace(/[\u0020]+$/g, '');

	  return _str.replace(/^[\u0020]+/g, '');
	};

	const trimWrap = str => {
	  return trim(str).replace(/\\r/g, '\n').replace(/\\n/g, '\n').replace(/\n{2,}/g, '\n');
	};

	const fixWrap = str => {
	  return trim(str).replace(/\r/g, '\n').replace(/\n{2,}/g, '\n');
	};

	const pureRE = str => {
	  return str.replace(/\?/g, '\\?').replace(/\./g, '\\.').replace(/\*/g, '\\*').replace(/\+/g, '\\+').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
	};

	let _console = restoreConsole(); // if (ENVIRONMENT === 'development') {
	//   _console = restoreConsole()
	// }


	const log = (...args) => {
	  if (ENVIRONMENT === 'development') {
	    _console.log(...args);
	  }
	};

	const log2 = (...args) => {
	  _console.log(...args);
	};

	const tryDownload = (content, filename) => {
	  const eleLink = document.createElement('a');
	  eleLink.download = filename;
	  eleLink.style.display = 'none';
	  const blob = new Blob([content], {
	    type: 'text/csv'
	  });
	  eleLink.href = URL.createObjectURL(blob);
	  document.body.appendChild(eleLink);
	  eleLink.click();
	  document.body.removeChild(eleLink);
	};

	const replaceWrap = text => {
	  if (isString_1(text)) {
	    return text.replace(/\r?\n|\r/g, '\\n');
	  }

	  return text;
	};

	const randomSep = (length = 2) => {
	  let str = '';

	  for (let i = 0; i < length; i++) {
	    str += String.fromCharCode(Math.floor(Math.random() * 16 + 65520));
	  }

	  return str;
	};

	const replaceWords = (str, map) => {
	  if (!str || !str.length) return str;
	  let _str = str;
	  let needSplit = false;
	  let sep = randomSep(3);

	  if (Array.isArray(str)) {
	    _str = str.join(sep);
	    needSplit = true;
	  }

	  for (let [key, val] of map) {
	    if (!key || key.length < 2) continue;
	    const expr = key.replace(/\./g, '\\.').replace(/\*/g, '\\*');
	    _str = _str.replace(new RegExp(expr, 'g'), val);
	  }

	  if (needSplit) {
	    return _str.split(sep);
	  }

	  return _str;
	};

	const replaceQuote = str => {
	  return str.replace(/"([^"]*)"/g, '“$1”').replace(/'([^']*)'/g, '“$1”').replace(/‘([^']+)'/g, '“$1”');
	};

	const speakerList = ['プロデューサー', '審査員'];

	const transSpeaker = (item, nameMap) => {
	  if (item.speaker) {
	    const speaker = trim(item.speaker);

	    if (speakerList.includes(speaker) && nameMap.has(speaker)) {
	      item.speaker = tagText(nameMap.get(speaker));
	    }
	  }
	};

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]';

	/**
	 * Checks if `value` is classified as a boolean primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
	 * @example
	 *
	 * _.isBoolean(false);
	 * // => true
	 *
	 * _.isBoolean(null);
	 * // => false
	 */
	function isBoolean(value) {
	  return value === true || value === false ||
	    (isObjectLike_1(value) && _baseGetTag(value) == boolTag);
	}

	var isBoolean_1 = isBoolean;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	var _overArg = overArg;

	/** Built-in value references. */
	var getPrototype = _overArg(Object.getPrototypeOf, Object);

	var _getPrototype = getPrototype;

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto$2 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = _getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	var isPlainObject_1 = isPlainObject;

	var version = "0.9.1";

	const PREVIEW_COUNT = 5;
	const config = {
	  origin: DATA_URL,
	  hash: '',
	  localHash: '',
	  version: version,
	  story: 'normal',
	  timeout: 30,
	  font1: 'yuanti',
	  font2: 'heiti',
	  auto: 'off',
	  bgm: 'off'
	};
	const defaultConfig = Object.assign({}, config);
	const fontList = ['yuanti', 'heiti', 'yuanti2'];
	const FONT = {
	  HEITI_JA: 'UDKakugo_SmallPr6-B',
	  HEITI_TRANS: "sczh-heiti,UDKakugo_SmallPr6-B",
	  YUAN_JA: 'HummingStd-E',
	  YUAN_TRANS: "sczh-yuanti,HummingStd-E"
	};
	const _keys = ['origin', 'font1', 'font2', 'timeout', 'story', 'auto', 'bgm'];
	const keys = DEV ? _keys.slice(1, _keys.length) : _keys;

	const setFont = () => {
	  FONT.HEITI_TRANS = "".concat(fontList.includes(config.font2) ? 'sczh-' : '').concat(config.font2, ",").concat(FONT.HEITI_JA);
	  FONT.YUAN_TRANS = "".concat(fontList.includes(config.font1) ? 'sczh-' : '').concat(config.font1, ",").concat(FONT.YUAN_JA);
	};

	const fixDefault = data => {
	  if (data.origin === 'https://snowyivu.github.io/ShinyColors') {
	    data.origin = defaultConfig.origin;
	  }
	};

	const getLocalConfig = () => {
	  const str = localStorage.getItem('sczh:setting');
	  let setting = JSON.parse(str);
	  if (!isPlainObject_1(setting)) setting = {};
	  fixDefault(setting);
	  const {
	    origin
	  } = setting;

	  if (isDomain(origin)) {
	    config.origin = origin.trim();
	  }

	  keys.forEach(key => {
	    let value = setting[key];
	    if (isString_1(value)) value = value.trim();

	    if (isBoolean_1(value) || value) {
	      config[key] = value;
	    }
	  });
	  setFont();
	};

	const saveConfig = () => {
	  const data = {};
	  keys.forEach(key => {
	    if (config[key] !== defaultConfig[key]) {
	      data[key] = config[key];
	    }
	  });
	  setFont();
	  localStorage.setItem('sczh:setting', JSON.stringify(data));
	};

	const getConfigFromHash = () => {
	  let str = location.hash;
	  str = str.slice(1).replace(/\?tdsourcetag=s_pc(tim|qq)_aiomsg/, '');
	  let arr = str.split(';');
	  arr.forEach(_str => {
	    let _arr = _str.split('=');

	    let k = decodeURIComponent(_arr[0].trim());
	    let v = _arr[1] ? decodeURIComponent(_arr[1].trim()) : '';

	    if (k && keys.includes(k)) {
	      if (v) {
	        config[k] = v;
	      } else {
	        config[k] = defaultConfig[k];
	      }

	      saveConfig();
	    }
	  });
	};

	const getLocalHash = () => {
	  try {
	    const str = sessionStorage.getItem('sczh:data');
	    const data = JSON.parse(str);
	    config.localHash = data.hash;
	  } catch (err) {// ignore
	  }
	};

	getLocalConfig();
	getLocalHash();
	getConfigFromHash();
	window.addEventListener('hashchange', getConfigFromHash);

	const {
	  origin
	} = config;
	let fetchInfo = {
	  status: 'init',
	  result: false,
	  data: null
	};

	const tryFetch = async () => {
	  if (fetch) {
	    try {
	      const res = await fetch("".concat(origin, "/manifest.json"));
	      const data = await res.json();
	      fetchInfo.data = data;
	      fetchInfo.result = true;
	    } catch (e) {}
	  }

	  fetchInfo.status = 'finished';
	};

	const request = async pathname => {
	  if (fetchInfo.result) {
	    return new Promise((rev, rej) => {
	      let timer = setTimeout(() => {
	        rej("\u52A0\u8F7D".concat(pathname, "\u8D85\u65F6"));
	      }, config.timeout * 1000);
	      fetch("".concat(origin).concat(pathname)).then(res => {
	        clearTimeout(timer);
	        const type = res.headers.get('content-type');

	        if (type && type.includes('json')) {
	          return res.json();
	        }

	        return res.text();
	      }).then(rev).catch(rej);
	    });
	  } else {
	    return await fetchData(pathname);
	  }
	};

	const getHash = new Promise((rev, rej) => {
	  if (fetchInfo.status !== 'finished') {
	    tryFetch().then(() => {
	      const beforeStart = data => {
	        config.newVersion = data.version;
	        config.hash = data.hash;
	      };

	      if (fetchInfo.result) {
	        beforeStart(fetchInfo.data);
	        rev(fetchInfo.data);
	      } else {
	        rej('网络错误');
	      }
	    }).catch(rej);
	  } else {
	    rev(fetchInfo.data.hash);
	  }
	});

	const fetchWithHash = async pathname => {
	  const {
	    hash
	  } = await getHash;
	  const data = await request("".concat(pathname, "?v=").concat(hash));
	  return data;
	};

	var papaparse_min = createCommonjsModule(function (module, exports) {
	/* @license
	Papa Parse
	v4.6.3
	https://github.com/mholt/PapaParse
	License: MIT
	*/
	Array.isArray||(Array.isArray=function(e){return "[object Array]"===Object.prototype.toString.call(e)}),function(e,t){module.exports=t();}(commonjsGlobal,function(){var s,e,f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{},n=!f.document&&!!f.postMessage,o=n&&/(\?|&)papaworker(=|&|$)/.test(f.location.search),a=!1,h={},u=0,k={parse:function(e,t){var r=(t=t||{}).dynamicTyping||!1;z(r)&&(t.dynamicTypingFunction=r,r={});if(t.dynamicTyping=r,t.transform=!!z(t.transform)&&t.transform,t.worker&&k.WORKERS_SUPPORTED){var i=function(){if(!k.WORKERS_SUPPORTED)return !1;if(!a&&null===k.SCRIPT_PATH)throw new Error("Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.");var e=k.SCRIPT_PATH||s;e+=(-1!==e.indexOf("?")?"&":"?")+"papaworker";var t=new f.Worker(e);return t.onmessage=m,t.id=u++,h[t.id]=t}();return i.userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=z(t.step),t.chunk=z(t.chunk),t.complete=z(t.complete),t.error=z(t.error),delete t.worker,void i.postMessage({input:e,config:t,workerId:i.id})}var n=null;"string"==typeof e?n=t.download?new c(t):new _(t):!0===e.readable&&z(e.read)&&z(e.on)?n=new g(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new p(t));return n.stream(e)},unparse:function(e,t){var i=!1,g=!0,m=",",y="\r\n",n='"',r=!1;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||k.BAD_DELIMITERS.filter(function(e){return -1!==t.delimiter.indexOf(e)}).length||(m=t.delimiter);("boolean"==typeof t.quotes||Array.isArray(t.quotes))&&(i=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(r=t.skipEmptyLines);"string"==typeof t.newline&&(y=t.newline);"string"==typeof t.quoteChar&&(n=t.quoteChar);"boolean"==typeof t.header&&(g=t.header);}();var s=new RegExp(M(n),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return o(null,e,r);if("object"==typeof e[0])return o(a(e[0]),e,r)}else if("object"==typeof e)return "string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:a(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),o(e.fields||[],e.data||[],r);throw "exception: Unable to serialize unrecognized input";function a(e){if("object"!=typeof e)return [];var t=[];for(var r in e)t.push(r);return t}function o(e,t,r){var i="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&g){for(var a=0;a<e.length;a++)0<a&&(i+=m),i+=v(e[a],a);0<t.length&&(i+=y);}for(var o=0;o<t.length;o++){var h=n?e.length:t[o].length,u=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(r&&!n&&(u="greedy"===r?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===r&&n){for(var d=[],l=0;l<h;l++){var c=s?e[l]:l;d.push(t[o][c]);}u=""===d.join("").trim();}if(!u){for(var p=0;p<h;p++){0<p&&!f&&(i+=m);var _=n&&s?e[p]:p;i+=v(t[o][_],p);}o<t.length-1&&(!r||0<h&&!f)&&(i+=y);}}return i}function v(e,t){if(null==e)return "";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);e=e.toString().replace(s,n+n);var r="boolean"==typeof i&&i||Array.isArray(i)&&i[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return !0;return !1}(e,k.BAD_DELIMITERS)||-1<e.indexOf(m)||" "===e.charAt(0)||" "===e.charAt(e.length-1);return r?n+e+n:e}}};if(k.RECORD_SEP=String.fromCharCode(30),k.UNIT_SEP=String.fromCharCode(31),k.BYTE_ORDER_MARK="\ufeff",k.BAD_DELIMITERS=["\r","\n",'"',k.BYTE_ORDER_MARK],k.WORKERS_SUPPORTED=!n&&!!f.Worker,k.SCRIPT_PATH=null,k.NODE_STREAM_INPUT=1,k.LocalChunkSize=10485760,k.RemoteChunkSize=5242880,k.DefaultDelimiter=",",k.Parser=v,k.ParserHandle=r,k.NetworkStreamer=c,k.FileStreamer=p,k.StringStreamer=_,k.ReadableStreamStreamer=g,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var r=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return !0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},r)});}),e(),this;function e(){if(0!==h.length){var e,t,r,i,n=h[0];if(z(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,r=n.inputElem,i=s.reason,void(z(o.error)&&o.error({name:e},t,r,i));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config));}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){z(a)&&a(e,n.file,n.inputElem),u();},k.parse(n.file,n.instanceConfig);}else z(o.complete)&&o.complete();}function u(){h.splice(0,1),e();}};}function l(e){this._handle=null,this._finished=!1,this._completed=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=E(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new r(t),(this._handle.streamer=this)._config=t;}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&z(this._config.beforeFirstChunk)){var r=this._config.beforeFirstChunk(e);void 0!==r&&(e=r);}this.isFirstChunk=!1;var i=this._partialLine+e;this._partialLine="";var n=this._handle.parse(i,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=i.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:k.WORKER_ID,finished:a});else if(z(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return;n=void 0,this._completeResults=void 0;}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!z(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}},this._sendError=function(e){z(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:k.WORKER_ID,error:e,finished:!1});};}function c(e){var i;(e=e||{}).chunkSize||(e.chunkSize=k.RemoteChunkSize),l.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded();}:function(){this._readChunk();},this.stream=function(e){this._input=e,this._nextChunk();},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(i=new XMLHttpRequest,this._config.withCredentials&&(i.withCredentials=this._config.withCredentials),n||(i.onload=w(this._chunkLoaded,this),i.onerror=w(this._chunkError,this)),i.open("GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)i.setRequestHeader(t,e[t]);}if(this._config.chunkSize){var r=this._start+this._config.chunkSize-1;i.setRequestHeader("Range","bytes="+this._start+"-"+r),i.setRequestHeader("If-None-Match","webkit-no-cache");}try{i.send();}catch(e){this._chunkError(e.message);}n&&0===i.status?this._chunkError():this._start+=this._config.chunkSize;}},this._chunkLoaded=function(){4===i.readyState&&(i.status<200||400<=i.status?this._chunkError():(this._finished=!this._config.chunkSize||this._start>function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return -1;return parseInt(t.substr(t.lastIndexOf("/")+1))}(i),this.parseChunk(i.responseText)));},this._chunkError=function(e){var t=i.statusText||e;this._sendError(new Error(t));};}function p(e){var i,n;(e=e||{}).chunkSize||(e.chunkSize=k.LocalChunkSize),l.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((i=new FileReader).onload=w(this._chunkLoaded,this),i.onerror=w(this._chunkError,this)):i=new FileReaderSync,this._nextChunk();},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk();},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t);}var r=i.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:r}});},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result);},this._chunkError=function(){this._sendError(i.error);};}function _(e){var r;l.call(this,e=e||{}),this.stream=function(e){return r=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e=this._config.chunkSize,t=e?r.substr(0,e):r;return r=e?r.substr(e):"",this._finished=!r,this.parseChunk(t)}};}function g(e){l.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause();},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume();},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError);},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0);},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0;},this._streamData=w(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()));}catch(e){this._streamError(e);}},this),this._streamError=w(function(e){this._streamCleanUp(),this._sendError(e);},this),this._streamEnd=w(function(){this._streamCleanUp(),i=!0,this._streamData("");},this),this._streamCleanUp=w(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError);},this);}function r(g){var a,o,h,i=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,n=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,t=this,r=0,s=0,u=!1,e=!1,f=[],d={data:[],errors:[],meta:{}};if(z(g.step)){var l=g.step;g.step=function(e){if(d=e,p())c();else{if(c(),0===d.data.length)return;r+=e.data.length,g.preview&&r>g.preview?o.abort():l(d,t);}};}function m(e){return "greedy"===g.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function c(){if(d&&h&&(y("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+k.DefaultDelimiter+"'"),h=!1),g.skipEmptyLines)for(var e=0;e<d.data.length;e++)m(d.data[e])&&d.data.splice(e--,1);return p()&&function(){if(!d)return;for(var e=0;p()&&e<d.data.length;e++)for(var t=0;t<d.data[e].length;t++){var r=d.data[e][t];g.trimHeaders&&(r=r.trim()),f.push(r);}d.data.splice(0,1);}(),function(){if(!d||!g.header&&!g.dynamicTyping&&!g.transform)return d;for(var e=0;e<d.data.length;e++){var t,r=g.header?{}:[];for(t=0;t<d.data[e].length;t++){var i=t,n=d.data[e][t];g.header&&(i=t>=f.length?"__parsed_extra":f[t]),g.transform&&(n=g.transform(n,i)),n=_(i,n),"__parsed_extra"===i?(r[i]=r[i]||[],r[i].push(n)):r[i]=n;}d.data[e]=r,g.header&&(t>f.length?y("FieldMismatch","TooManyFields","Too many fields: expected "+f.length+" fields but parsed "+t,s+e):t<f.length&&y("FieldMismatch","TooFewFields","Too few fields: expected "+f.length+" fields but parsed "+t,s+e));}g.header&&d.meta&&(d.meta.fields=f);return s+=d.data.length,d}()}function p(){return g.header&&0===f.length}function _(e,t){return r=e,g.dynamicTypingFunction&&void 0===g.dynamicTyping[r]&&(g.dynamicTyping[r]=g.dynamicTypingFunction(r)),!0===(g.dynamicTyping[r]||g.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(i.test(t)?parseFloat(t):n.test(t)?new Date(t):""===t?null:t):t;var r;}function y(e,t,r,i){d.errors.push({type:e,code:t,message:r,row:i});}this.parse=function(e,t,r){var i=g.quoteChar||'"';if(g.newline||(g.newline=function(e,t){e=e.substr(0,1048576);var r=new RegExp(M(t)+"([^]*?)"+M(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return "\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(e,i)),h=!1,g.delimiter)z(g.delimiter)&&(g.delimiter=g.delimiter(e),d.meta.delimiter=g.delimiter);else{var n=function(e,t,r,i){for(var n,s,a,o=[",","\t","|",";",k.RECORD_SEP,k.UNIT_SEP],h=0;h<o.length;h++){var u=o[h],f=0,d=0,l=0;a=void 0;for(var c=new v({comments:i,delimiter:u,newline:t,preview:10}).parse(e),p=0;p<c.data.length;p++)if(r&&m(c.data[p]))l++;else{var _=c.data[p].length;d+=_,void 0!==a?1<_&&(f+=Math.abs(_-a),a=_):a=0;}0<c.data.length&&(d/=c.data.length-l),(void 0===s||s<f)&&1.99<d&&(s=f,n=u);}return {successful:!!(g.delimiter=n),bestDelimiter:n}}(e,g.newline,g.skipEmptyLines,g.comments);n.successful?g.delimiter=n.bestDelimiter:(h=!0,g.delimiter=k.DefaultDelimiter),d.meta.delimiter=g.delimiter;}var s=E(g);return g.preview&&g.header&&s.preview++,a=e,o=new v(s),d=o.parse(a,t,r),c(),u?{meta:{paused:!0}}:d||{meta:{paused:!1}}},this.paused=function(){return u},this.pause=function(){u=!0,o.abort(),a=a.substr(o.getCharIndex());},this.resume=function(){u=!1,t.streamer.parseChunk(a,!0);},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),d.meta.aborted=!0,z(g.complete)&&g.complete(d),a="";};}function M(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function v(e){var S,O=(e=e||{}).delimiter,x=e.newline,T=e.comments,I=e.step,A=e.preview,D=e.fastMode,L=S=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(L=e.escapeChar),("string"!=typeof O||-1<k.BAD_DELIMITERS.indexOf(O))&&(O=","),T===O)throw "Comment character same as delimiter";!0===T?T="#":("string"!=typeof T||-1<k.BAD_DELIMITERS.indexOf(T))&&(T=!1),"\n"!==x&&"\r"!==x&&"\r\n"!==x&&(x="\n");var P=0,F=!1;this.parse=function(i,t,r){if("string"!=typeof i)throw "Input must be a string";var n=i.length,e=O.length,s=x.length,a=T.length,o=z(I),h=[],u=[],f=[],d=P=0;if(!i)return C();if(D||!1!==D&&-1===i.indexOf(S)){for(var l=i.split(x),c=0;c<l.length;c++){if(f=l[c],P+=f.length,c!==l.length-1)P+=x.length;else if(r)return C();if(!T||f.substr(0,a)!==T){if(o){if(h=[],k(f.split(O)),R(),F)return C()}else k(f.split(O));if(A&&A<=c)return h=h.slice(0,A),C(!0)}}return C()}for(var p,_=i.indexOf(O,P),g=i.indexOf(x,P),m=new RegExp(M(L)+M(S),"g");;)if(i[P]!==S)if(T&&0===f.length&&i.substr(P,a)===T){if(-1===g)return C();P=g+s,g=i.indexOf(x,P),_=i.indexOf(O,P);}else if(-1!==_&&(_<g||-1===g))f.push(i.substring(P,_)),P=_+e,_=i.indexOf(O,P);else{if(-1===g)break;if(f.push(i.substring(P,g)),w(g+s),o&&(R(),F))return C();if(A&&h.length>=A)return C(!0)}else for(p=P,P++;;){if(-1===(p=i.indexOf(S,p+1)))return r||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:P}),E();if(p===n-1)return E(i.substring(P,p).replace(m,S));if(S!==L||i[p+1]!==L){if(S===L||0===p||i[p-1]!==L){var y=b(-1===g?_:Math.min(_,g));if(i[p+1+y]===O){f.push(i.substring(P,p).replace(m,S)),P=p+1+y+e,_=i.indexOf(O,P),g=i.indexOf(x,P);break}var v=b(g);if(i.substr(p+1+v,s)===x){if(f.push(i.substring(P,p).replace(m,S)),w(p+1+v+s),_=i.indexOf(O,P),o&&(R(),F))return C();if(A&&h.length>=A)return C(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:P}),p++;}}else p++;}return E();function k(e){h.push(e),d=P;}function b(e){var t=0;if(-1!==e){var r=i.substring(p+1,e);r&&""===r.trim()&&(t=r.length);}return t}function E(e){return r||(void 0===e&&(e=i.substr(P)),f.push(e),P=n,k(f),o&&R()),C()}function w(e){P=e,k(f),f=[],g=i.indexOf(x,P);}function C(e){return {data:h,errors:u,meta:{delimiter:O,linebreak:x,aborted:F,truncated:!!e,cursor:d+(t||0)}}}function R(){I(C()),h=[],u=[];}},this.abort=function(){F=!0;},this.getCharIndex=function(){return P};}function m(e){var t=e.data,r=h[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,y(t.workerId,{data:[],errors:[],meta:{aborted:!0}});},pause:b,resume:b};if(z(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:[t.results.data[s]],errors:t.results.errors,meta:t.results.meta},n),!i);s++);delete t.results;}else z(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results);}t.finished&&!i&&y(t.workerId,t.results);}function y(e,t){var r=h[e];z(r.userComplete)&&r.userComplete(t),r.terminate(),delete h[e];}function b(){throw "Not implemented."}function E(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=E(e[r]);return t}function w(e,t){return function(){e.apply(t,arguments);}}function z(e){return "function"==typeof e}return o?f.onmessage=function(e){var t=e.data;void 0===k.WORKER_ID&&t&&(k.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:k.WORKER_ID,results:k.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var r=k.parse(t.input,t.config);r&&f.postMessage({workerId:k.WORKER_ID,results:r,finished:!0});}}:k.WORKERS_SUPPORTED&&(e=document.getElementsByTagName("script"),s=e.length?e[e.length-1].src:"",document.body?document.addEventListener("DOMContentLoaded",function(){a=!0;},!0):a=!0),(c.prototype=Object.create(l.prototype)).constructor=c,(p.prototype=Object.create(l.prototype)).constructor=p,(_.prototype=Object.create(_.prototype)).constructor=_,(g.prototype=Object.create(l.prototype)).constructor=g,k});
	});

	const parseCsv = str => {
	  try {
	    return papaparse_min.parse(str.replace(/^\ufeff/, ''), {
	      header: true
	    }).data;
	  } catch (err) {
	    console.log(err);
	    return {};
	  }
	};

	let data = null;

	const getLocalData = async type => {
	  if (DEV) return false;
	  if (data) return data[type];
	  const {
	    hash
	  } = await getHash;

	  try {
	    const str = localStorage.getItem('sczh:data');
	    if (!str) return false;
	    data = JSON.parse(str);

	    if (data.hash !== hash) {
	      data = null;
	      localStorage.removeItem('sczh:data');
	      localStorage.removeItem('sczh:data');
	      return false;
	    }

	    return data[type];
	  } catch (err) {
	    console.log(err);
	  }

	  return false;
	};

	const setLocalData = (type, value) => {
	  if (DEV) return false;
	  if (!data) data = {
	    hash: config.hash
	  };
	  data[type] = value;
	  const str = JSON.stringify(data);

	  try {
	    localStorage.setItem('sczh:data', str);
	  } catch (err) {
	    console.log(err);
	  }
	};

	const phraseMap = new Map();
	let loaded = false;

	const getPhrase = async (full = false) => {
	  if (!loaded) {
	    let csv = await getLocalData('phrase');

	    if (!csv) {
	      csv = await fetchWithHash('/data/phrase.csv');
	      setLocalData('phrase', csv);
	    }

	    const list = parseCsv(csv);
	    list.forEach(item => {
	      if (item && item.name) {
	        const _name = trimWrap(item.name);

	        const _zh = trimWrap(item.zh);

	        if (_name && (_zh || full)) {
	          phraseMap.set(_name, tagText(_zh));
	        }
	      }
	    });
	    loaded = true;
	  }

	  return phraseMap;
	};

	const setIdList = (id, offset) => {
	  let start = id - 2;
	  let end = id + 2;
	  let list = [];

	  for (let i = start; i <= end; i++) {
	    if (i >= 0 && i !== id) {
	      list.push(i);
	    }
	  }

	  list.unshift(id);
	  return list;
	};

	const findModule = (id, conditionFunc) => {
	  let idList = setIdList(id);
	  let module;

	  for (let i = 0; i < idList.length; i++) {
	    let cid = idList[i];

	    let _module = primJsp([], [], [cid]);

	    if (conditionFunc(_module)) {
	      module = _module;
	      break;
	    }
	  }

	  return module;
	};

	const getModule = async (name, condition) => {
	  let md;

	  try {
	    const {
	      moduleId
	    } = await getHash;
	    md = findModule(moduleId[name], condition);
	  } catch (e) {
	    log(e);
	  }

	  if (!md) {
	    throw new Error("".concat(name, " NOT FOUND."));
	  }

	  return md;
	};

	const getAoba = async () => {
	  let aoba = await getModule('AOBA', module => {
	    return module.loaders && module.Text && module.BLEND_MODES;
	  });
	  return aoba;
	};

	const getScMd = async () => {
	  let scMd = await getModule('SCENARIO', module => {
	    return module.default && module.default['load'] && module.default['_errorEvent'] && module.default['_handleError'];
	  });
	  return scMd.default;
	};

	const getRequest = async () => {
	  let md = await getModule('REQUEST', module => {
	    return module.default && module.default.get && module.default.post && module.default.put && module.default.patch;
	  });
	  return md.default;
	};

	const getPhraseMd = async () => {
	  let md = await getModule('PHRASE', module => {
	    return module.default && module.default._polyglot && module.default._polyglot.phrases;
	  });
	  return md.default._polyglot.phrases;
	};

	let phraseMap$1 = null;

	async function transPhrase() {
	  const obj = await getPhraseMd();
	  if (!obj) return; // if (ENVIRONMENT === 'development') {
	  //   phraseMap = await getPhrase(true)
	  //   collectPhrases(obj)
	  // }

	  phraseMap$1 = await getPhrase();

	  for (let [key, value] of phraseMap$1) {
	    obj[key] = value;
	  }
	}

	const itemMap = new Map();
	const itemLimitMap = new Map();
	let loaded$1 = false;

	const getItem = async () => {
	  if (!loaded$1) {
	    let csv = await getLocalData('item');

	    if (!csv) {
	      csv = await fetchWithHash('/data/item.csv');
	      setLocalData('item', csv);
	    }

	    const list = parseCsv(csv);
	    list.forEach(item => {
	      if (item && item.text) {
	        const text = trimWrap(item.text);
	        const trans = trimWrap(item.trans);
	        const type = trim(item.type) || 'normal';

	        if (text && trans && text !== trans) {
	          if (type === 'limit') {
	            itemLimitMap.set(text, trans);
	          } else {
	            itemMap.set(text, trans);
	          }
	        }
	      }
	    });
	    loaded$1 = true;
	  }

	  return {
	    itemMap,
	    itemLimitMap
	  };
	};

	const nameMap = new Map();
	let loaded$2 = false;

	const getName = async () => {
	  if (!loaded$2) {
	    let csv = await getLocalData('name');

	    if (!csv) {
	      csv = await fetchWithHash('/data/name.csv');
	      setLocalData('name', csv);
	    }

	    const list = parseCsv(csv);
	    list.forEach(item => {
	      const name = trim(item.name);
	      const trans = trim(item.trans);

	      if (name && trans && name !== trans) {
	        nameMap.set(name, trans);
	      }
	    });
	    loaded$2 = true;
	  }

	  return nameMap;
	};

	let commonMap = new Map();
	let loaded$3 = false;

	const getCommMap = async () => {
	  if (!loaded$3) {
	    let csv = await getLocalData('common');

	    if (!csv) {
	      csv = await fetchWithHash('/data/common.csv');
	      setLocalData('common', csv);
	    }

	    const list = parseCsv(csv);
	    list.forEach(item => {
	      if (item && item.ja) {
	        const _ja = trimWrap(item.ja);

	        const _zh = trimWrap(item.zh);

	        if (_ja && _zh && _ja !== _zh) {
	          commonMap.set(_ja, _zh);
	        }
	      }
	    });
	    const {
	      itemMap
	    } = await getItem();
	    const nameMap = await getName();
	    commonMap = new Map([...itemMap, ...nameMap, ...commonMap]);
	    loaded$3 = true;
	  }

	  return commonMap;
	};

	const storyTemp = new Map();
	const storyTitle = new Map();
	const commStoryMap = new Map();
	let commStoryLoaded = false;
	let storyIndex = null;

	const collectStoryTitle = data => {
	  if (data.communications && data.communications.length) {
	    data.communications.forEach(item => {
	      storyTitle.set(item.communicationId, item.title);
	    });
	  } else if (data.idol && data.idol.produceIdolEvents) {
	    data.idol.produceIdolEvents.forEach(item => {
	      storyTitle.set(item.id, item.title);
	    });
	    data.idol.produceAfterEvents.forEach(item => {
	      storyTitle.set(item.id, item.title);
	    });
	  } else if (data.supportIdol && data.supportIdol.produceSupportIdolEvents) {
	    data.supportIdol.produceSupportIdolEvents.forEach(item => {
	      storyTitle.set(item.id, item.title);
	    });
	  } else if (data.gameEvents) {
	    data.gameEvents.forEach(events => {
	      events.communications.forEach(item => {
	        storyTitle.set(item.id, "".concat(item.name, " ").concat(item.title));
	      });
	    });
	  } else if (data.specialEvents) {
	    data.specialEvents.forEach(events => {
	      events.communications.forEach(item => {
	        storyTitle.set(item.id, "".concat(item.name, " ").concat(item.title));
	      });
	    });
	  }

	  return storyTitle;
	};

	const getStoryMap = csv => {
	  const list = parseCsv(csv);
	  const storyMap = new Map();
	  list.forEach(item => {
	    const id = trim(item.id);
	    const text = trimWrap(item.text);
	    const trans = trimWrap(item.trans);
	    const name = trim(item.name);

	    if (text && trans) {
	      if (id && !/^0+$/.test(id) && id !== 'select') {
	        storyMap.set(id, tagText(trans));
	      } else {
	        if (id === 'select') {
	          storyMap.set("".concat(text, "-select"), tagText(trans));
	        } else {
	          storyMap.set(text, tagText(trans));
	        }
	      }
	    }

	    if (id && name && id === 'info') {
	      storyMap.set('name', name);
	    }
	  });
	  return storyMap;
	};

	const getStory = async name => {
	  if (!storyIndex) {
	    let storyIndexStr = await getLocalData('story-index');

	    if (!storyIndexStr) {
	      const storyIndexData = await fetchWithHash('/story.json');
	      storyIndex = new Map(storyIndexData);
	      setLocalData('story-index', JSON.stringify(storyIndexStr));
	    } else {
	      storyIndex = new Map(JSON.parse(storyIndexStr));
	    }
	  }

	  if (storyIndex.has(name)) {
	    if (storyTemp.has(name)) {
	      return storyTemp.get(name);
	    } else {
	      const csvPath = storyIndex.get(name);
	      const csvStr = await fetchWithHash(csvPath);
	      const storyMap = getStoryMap(csvStr);
	      storyTemp.set(name, storyMap);
	      return storyMap;
	    }
	  }

	  return false;
	};

	const getCommStory = async () => {
	  if (!commStoryLoaded) {
	    let csv = await getLocalData('comm-story');

	    if (!csv) {
	      csv = await fetchWithHash('/data/comm-story.csv');
	      setLocalData('comm-story', csv);
	    }

	    const list = parseCsv(csv);
	    list.forEach(item => {
	      if (item && item.ja) {
	        const _ja = trimWrap(item.ja);

	        const _zh = trimWrap(item.zh);

	        if (_ja && _zh && _ja !== _zh) {
	          commStoryMap.set(_ja, _zh);
	        }
	      }
	    });
	    commStoryLoaded = true;
	  }

	  return commStoryMap;
	};

	let typeTextMap = new Map();
	let loaded$4 = false;

	const getTypeTextMap = async () => {
	  if (!loaded$4) {
	    let csv = await getLocalData('type-text');

	    if (!csv) {
	      csv = await fetchWithHash('/data/type-text.csv');
	      setLocalData('type-text', csv);
	    }

	    const list = parseCsv(csv);
	    list.forEach(item => {
	      if (item && item.ja) {
	        const _ja = trimWrap(item.ja);

	        const _zh = trimWrap(item.zh);

	        if (_ja && _zh && _ja !== _zh) {
	          typeTextMap.set(_ja, _zh);
	        }
	      }
	    });
	    const commStoryMap = await getCommStory();
	    typeTextMap = new Map([...commStoryMap, ...typeTextMap]);
	    loaded$4 = true;
	  }

	  return typeTextMap;
	};

	let commMap = new Map();
	let typeTextMap$1 = new Map();

	const replaceFont = style => {
	  if (style && style.fontFamily) {
	    if (style.fontFamily === FONT.HEITI_JA) {
	      Reflect.set(style, 'fontFamily', FONT.HEITI_TRANS);
	    } else if (style.fontFamily === FONT.YUAN_JA) {
	      Reflect.set(style, 'fontFamily', FONT.YUAN_TRANS);
	    }
	  }
	};

	const restoreFont = style => {
	  if (style && style.fontFamily) {
	    if (style.fontFamily === FONT.HEITI_TRANS) {
	      Reflect.set(style, 'fontFamily', FONT.HEITI_JA);
	    } else if (style.fontFamily === FONT.YUAN_TRANS) {
	      Reflect.set(style, 'fontFamily', FONT.YUAN_JA);
	    }
	  }
	};

	const textInMap = (text, map, style) => {
	  let _text = text;
	  let key = fixWrap(text);

	  if (map.has(key)) {
	    _text = '\u200b' + map.get(key);
	    replaceFont(style);
	  } else if (!text.startsWith('\u200b')) {
	    restoreFont(style);
	  }

	  return _text;
	};

	const fontCheck = (text, style, isType = false) => {
	  if (!isString_1(text)) return text;
	  let _text = text;

	  if (text.startsWith('\u200b')) {
	    replaceFont(style);
	  } else if (text.trim()) {
	    if (isType) {
	      _text = textInMap(text, typeTextMap$1, style);
	    } else {
	      _text = textInMap(text, commMap, style);
	    }
	  }

	  return _text;
	};

	async function watchText() {
	  let aoba = await getAoba();
	  if (!aoba) return;
	  commMap = await getCommMap();
	  typeTextMap$1 = await getTypeTextMap();
	  const Text = new Proxy(aoba.Text, {
	    construct(target, args, newTarget) {
	      const text = args[0];
	      const option = args[1];
	      if (SHOW_UPDATE_TEXT) log('new text', ...args);
	      args[0] = fontCheck(text, option);
	      return Reflect.construct(target, args, newTarget);
	    }

	  }); // watch typeText

	  const originTypeText = aoba.Text.prototype.typeText;

	  aoba.Text.prototype.typeText = function (...args) {
	    const text = args[0];
	    if (SHOW_UPDATE_TEXT) log('type text', ...args);
	    args[0] = fontCheck(text, this.style, true);
	    return originTypeText.apply(this, args);
	  };

	  const originUpdateText = aoba.Text.prototype.updateText;

	  aoba.Text.prototype.updateText = function (t) {
	    if (this.localStyleID !== this._style.styleID && (this.dirty = !0, this._style.styleID), this.dirty || !t) {
	      if (DEV && SHOW_UPDATE_TEXT) log('update text', this._text);
	      const value = fontCheck(this._text, this._style);
	      Reflect.set(this, '_text', value);
	      return originUpdateText.call(this, t);
	    }
	  };

	  GLOBAL.aoba = new Proxy(aoba, {
	    get(target, name, receiver) {
	      if (name === 'Text') {
	        return Text;
	      }

	      return Reflect.get(target, name, receiver);
	    }

	  });
	}

	const autoTransCache = new Map();

	const replaceText = (text, expMap, wordMaps) => {
	  if (autoTransCache.has(text)) return autoTransCache.get(text);
	  let result = text;

	  for (let [re, trans] of expMap) {
	    result = result.replace(re, (...arr) => {
	      let _trans = trans;

	      for (let i = 1; i < arr.length - 2; i++) {
	        let eleKey = arr[i];
	        let replaced = false;
	        wordMaps.forEach(map => {
	          if (map.has(eleKey)) {
	            _trans = _trans.replace("$".concat(i), map.get(eleKey));
	            replaced = true;
	          }
	        });

	        if (!replaced) {
	          _trans = _trans.replace("$".concat(i), arr[i]);
	        }
	      }

	      return _trans;
	    });
	    re.lastIndex = 0;
	  }

	  autoTransCache.set(text, result);
	  return result;
	};

	const replaceItem = (item, key, data) => {
	  if (!item) return;
	  const {
	    expMap,
	    wordMaps,
	    textMap
	  } = data;
	  const text = fixWrap(item[key]);
	  let _text = text;
	  if (!text) return;

	  if (textMap && textMap.has(text)) {
	    item[key] = tagText(textMap.get(text));
	  } else {
	    _text = replaceText(text, expMap, wordMaps);

	    if (text !== _text) {
	      item[key] = tagText(_text);
	    }
	  }
	};

	const sortWords = (list, key = 'EMPTY') => {
	  return list.sort((prev, next) => {
	    let valPrev = prev;
	    let valNext = next;

	    if (key !== 'EMPTY') {
	      valPrev = prev[key];
	      valNext = next[key];
	    }

	    if (!valNext) valNext = '';
	    if (!valPrev) valPrev = '';

	    if (valNext.length > valPrev.length) {
	      return 1;
	    } else if (valPrev.length > valNext.length) {
	      return -1;
	    } else {
	      return 0;
	    }
	  });
	};

	const numRE = '([+-＋－]?\\d{1,10}\\.?\\d{0,4}?)';
	const percentRE = '([+-＋－]?\\d{1,10}\\.?\\d{0,4}?[%％])';
	const unknownRE = '(.+?)';

	const parseRegExp = (str, list) => {
	  let result = str.replace(/\$num/g, numRE).replace(/\$percent/g, percentRE).replace(/\$unknown/g, unknownRE).replace(/\$uk/g, unknownRE);
	  list.forEach(item => {
	    result = result.replace(item.re, item.exp);
	    item.re.lastIndex = 0;
	  });
	  return new RegExp(result, 'gi');
	};

	const supportSkillCache = {
	  expMap: new Map(),
	  nounMap: new Map(),
	  nounArr: [],
	  loaded: false
	};

	const brackets = str => {
	  return str.replace(/\[/g, '\\[').replace(/\]/g, '\\]');
	};

	const getSupportSkill = async () => {
	  const {
	    expMap,
	    nounMap,
	    nounArr,
	    loaded
	  } = supportSkillCache;

	  if (!loaded) {
	    let csv = await getLocalData('support-skill');

	    if (!csv) {
	      csv = await fetchWithHash('/data/support-skill.csv');
	      setLocalData('support-skill', csv);
	    }

	    const list = parseCsv(csv);
	    const reMap = new Map();
	    sortWords(list, 'text').forEach(item => {
	      if (item && item.text) {
	        const text = trimWrap(item.text);
	        const trans = trimWrap(item.trans);
	        const type = trim(item.type);

	        if (text && trans) {
	          if (type === 'noun') {
	            nounArr.push(pureRE(text));
	            nounMap.set(text, trans);
	          } else {
	            reMap.set(text, trans);
	          }
	        }
	      }
	    });
	    const expList = [{
	      re: /\$noun/g,
	      exp: "(".concat(nounArr.join('|'), ")")
	    }];

	    for (let [key, value] of reMap) {
	      const re = parseRegExp(key, expList);
	      expMap.set(re, value);
	    }

	    supportSkillCache.loaded = true;
	  }

	  return {
	    expMap,
	    wordMaps: [nounMap]
	  };
	};

	const skillCache = {
	  expMap: new Map(),
	  textMap: new Map(),
	  nounMap: new Map(),
	  nameMap: new Map(),
	  otherMap: new Map(),
	  nounArr: [],
	  nameArr: [],
	  otherArr: [],
	  loaded: false
	};

	const getSkill = async () => {
	  const {
	    expMap,
	    nounMap,
	    textMap,
	    nameMap,
	    otherMap,
	    nounArr,
	    nameArr,
	    otherArr,
	    loaded
	  } = skillCache;

	  if (!loaded) {
	    let csv = await getLocalData('skill');

	    if (!csv) {
	      csv = await fetchWithHash('/data/skill.csv');
	      setLocalData('skill', csv);
	    }

	    const list = parseCsv(csv);
	    const reMap = new Map();
	    sortWords(list, 'text').forEach(item => {
	      if (item && item.text) {
	        const text = trimWrap(item.text);
	        const trans = trimWrap(item.trans);
	        const type = trim(item.type);

	        if (text && trans) {
	          if (type === 'noun') {
	            nounArr.push(pureRE(text));
	            nounMap.set(text, trans);
	          } else if (type === 'text') {
	            textMap.set(text, trans);
	          } else if (type === 'name') {
	            nameArr.push(pureRE(text));
	            nameMap.set(text, trans);
	          } else if (type === 'other') {
	            otherArr.push(pureRE(text));
	            otherMap.set(text, trans);
	          } else {
	            reMap.set(brackets(text), trans);
	          }
	        }
	      }
	    });
	    const expList = [{
	      re: /\$noun/g,
	      exp: "(".concat(nounArr.join('|'), ")")
	    }, {
	      re: /\$name/g,
	      exp: "(".concat(nameArr.join('|'), ")")
	    }, {
	      re: /\$other/g,
	      exp: "(".concat(otherArr.join('|'), ")")
	    }];

	    for (let [key, value] of reMap) {
	      const re = parseRegExp(key, expList);
	      expMap.set(re, value);
	    }

	    skillCache.loaded = true;
	  }

	  const wordMaps = [nounMap, otherMap, nameMap];
	  return {
	    expMap,
	    wordMaps,
	    textMap
	  };
	};

	let skillData = null;

	const ensureSkillData = async () => {
	  if (!skillData) {
	    skillData = await getSkill();
	  }

	  return skillData;
	};

	const nameWithPlus = (list, data) => {
	  if (data) {
	    list.forEach((str, index) => {
	      list[index] = str + data[index];
	    });
	  } else {
	    let arr = [];
	    list.forEach((str, index) => {
	      let rgs = str.match(/([＋+]+)$/);

	      if (rgs && rgs[1]) {
	        arr.push(rgs[1]);
	        list[index] = str.replace(/[＋+]+$/, '');
	      } else {
	        arr.push('');
	      }
	    });
	    return arr;
	  }
	};

	const transSkill = (item, key, data) => {
	  if (item && item[key]) {
	    let arr = item[key].split('/');
	    arr.forEach((txt, index) => {
	      let plusList = nameWithPlus(arr);
	      replaceItem(arr, index, data);
	      nameWithPlus(arr, plusList);
	    });
	    let text = arr.join('/');

	    if (text !== item[key]) {
	      item[key] = tagText(text);
	    }
	  }
	};

	const supportSkill = async data => {
	  let obj = data;
	  if (data.gameData) return;
	  if (data.userSupportIdol) obj = data.userSupportIdol;
	  let sskill;
	  const asskill = obj.acquiredSupportSkills;

	  if (obj.supportSkills) {
	    sskill = obj.supportSkills;
	  } else if (obj.supportIdol && obj.supportIdol.supportSkills) {
	    sskill = obj.supportIdol.supportSkills;
	  }

	  const skillData = await getSupportSkill();
	  sskill && sskill.forEach(item => {
	    transSkill(item, 'description', skillData);
	    transSkill(item, 'name', skillData);
	  });
	  asskill && asskill.forEach(item => {
	    transSkill(item, 'description', skillData);
	    transSkill(item, 'name', skillData);
	  });
	};

	const transEffects = (data, skillData) => {
	  data.skillEffects && data.skillEffects.forEach(item => {
	    transSkill(item, 'effectName', skillData);
	    transSkill(item, 'effectDescription', skillData);
	  });
	  data.rivalMemoryAppealEffects && data.rivalMemoryAppealEffects.forEach(item => {
	    transSkill(item, 'effectName', skillData);
	    transSkill(item, 'effectDescription', skillData);
	  });
	};

	const commSkill = (data, skillData, transEffect = false) => {
	  if (!data) return;
	  transSkill(data, 'comment', skillData);
	  transSkill(data, 'name', skillData);

	  if (transEffect) {
	    transEffects(data, skillData);
	  }

	  if (data.linkSkill) {
	    transSkill(data.linkSkill, 'comment', skillData);
	    transSkill(data.linkSkill, 'name', skillData);

	    if (transEffect) {
	      transEffects(data.linkSkill, skillData);
	    }
	  }
	};

	const exSkill = (data, skillData) => {
	  transSkill(data, 'name', skillData);
	  transSkill(data, 'description', skillData);
	};

	const skillPanel = (data, skillData) => {
	  if (!data) return;
	  data.forEach(item => {
	    transSkill(item, 'releaseConditions', skillData);
	    transSkill(item.passiveSkills, 'comment', skillData);
	    transSkill(item.passiveSkills, 'name', skillData);
	    commSkill(item.skill, skillData);
	    commSkill(item.concertActiveSkill, skillData);

	    if (item.activeSkills) {
	      item.activeSkills.forEach(skill => {
	        commSkill(skill, skillData);
	      });
	    }
	  });
	};

	const memoryAppeal = (data, skillData) => {
	  data.forEach(item => {
	    commSkill(item, skillData);
	  });
	};

	const shortProIdol = (data, skillData, panel = false) => {
	  let proIdol = data.userProduceIdol;
	  if (!proIdol) return;
	  proIdol.activeSkills && proIdol.activeSkills.forEach(item => {
	    commSkill(item, skillData);
	  });
	  proIdol.passiveSkills && proIdol.passiveSkills.forEach(item => {
	    commSkill(item, skillData);
	  });
	  proIdol.limitBreaks && proIdol.limitBreaks.forEach(item => {
	    commSkill(item, skillData);
	  });

	  if (panel) {
	    skillPanel(proIdol.skillPanels, skillData);
	  }
	};

	const judegsSkill = (data, skillData) => {
	  data.forEach(judge => {
	    commSkill(judge.skill, skillData, true);
	  });
	};

	const fesRivalsSkill = (data, skillData) => {
	  data.forEach(rival => {
	    rival.userFesDeck && rival.userFesDeck.userFesDeckMembers.forEach(member => {
	      member.userFesIdol.activeSkills.forEach(skill => {
	        transEffects(skill, skillData);
	      });
	    });
	    rival.rival && rival.rival.rivalSkills.forEach(skill => {
	      transEffects(skill, skillData);
	    });
	  });
	};

	const audRivalsSkill = (data, skillData) => {
	  data.forEach(rival => {
	    transEffects(rival.rivalMemoryAppeal, skillData);
	    rival.rivalSkills.forEach(skill => {
	      transEffects(skill, skillData);
	    });
	  });
	}; // ==================================================
	// request entry


	const userIdolsSkill = async data => {
	  const skillData = await ensureSkillData();
	  skillPanel(data.idol.skillPanels, skillData);
	  memoryAppeal(data.idol.memoryAppeals, skillData);
	  data.userIdolProduceExSkills.forEach(item => {
	    exSkill(item.produceExSkill, skillData);
	  });
	};

	const userProIdolsSkill = async data => {
	  const skillData = await ensureSkillData();
	  data.activeSkills.forEach(item => {
	    commSkill(item, skillData);
	  });
	  memoryAppeal(data.userIdol.idol.memoryAppeals, skillData);
	  data.userProduceIdolProduceExSkills.forEach(item => {
	    exSkill(item.produceExSkill, skillData);
	  });
	};

	const reserveUserIdolsSkill = async data => {
	  const skillData = await ensureSkillData();
	  skillPanel(data.idol.skillPanels, skillData);
	  memoryAppeal(data.idol.memoryAppeals, skillData);
	};

	const userSptIdolsSkill = async data => {
	  const skillData = await ensureSkillData();
	  skillPanel(data.supportIdol.skillPanels, skillData);
	  data.userSupportIdolProduceExSkills.forEach(item => {
	    exSkill(item.produceExSkill, skillData);
	  });

	  try {
	    data.supportIdol.supportIdolActiveSkill.activeSkills.forEach(item => {
	      transSkill(item, 'comment', skillData);
	      transSkill(item, 'name', skillData);
	    });
	  } catch (e) {}
	};

	const userProSptIdolsSkill = async data => {
	  const skillData = await ensureSkillData();
	  skillPanel(data.skillPanels, skillData);
	  data.userProduceSupportIdolProduceExSkills.forEach(item => {
	    exSkill(item.produceExSkill, skillData);
	  });

	  try {
	    data.userSupportIdol.supportIdol.supportIdolActiveSkill.activeSkills.forEach(item => {
	      transSkill(item, 'comment', skillData);
	      transSkill(item, 'name', skillData);
	    });
	  } catch (e) {}
	};

	const reserveUserSptIdolsSkill = async data => {
	  const skillData = await ensureSkillData();
	  skillPanel(data.supportIdol.skillPanels, skillData);

	  try {
	    data.supportIdol.supportIdolActiveSkill.activeSkills.forEach(item => {
	      transSkill(item, 'comment', skillData);
	      transSkill(item, 'name', skillData);
	    });
	  } catch (e) {}
	};

	const userFesIdolsSkill = async data => {
	  const skillData = await ensureSkillData();
	  const fesIdol = data.userFesIdol;
	  fesIdol.activeSkills.forEach(item => {
	    commSkill(item, skillData);
	  });
	  commSkill(fesIdol.memoryAppeal, skillData);
	  fesIdol.passiveSkills.forEach(item => {
	    transSkill(item, 'comment', skillData);
	    transSkill(item, 'name', skillData);
	  });
	  fesIdol.userFesIdolProduceExSkills.forEach(item => {
	    exSkill(item.produceExSkill, skillData);
	  });
	  fesIdol.userFesSupportIdols.forEach(sptIdol => {
	    sptIdol.userFesSupportIdolProduceExSkills.forEach(item => {
	      exSkill(item.produceExSkill, skillData);
	    });
	  });
	};

	const otherFesIdolSkill = userFesIdolsSkill;

	const produceExSkillTop = async data => {
	  const skillData = await ensureSkillData();
	  data.userProduceExSkills.forEach(item => {
	    exSkill(item.produceExSkill, skillData);
	  });
	};

	const userFesDeck = async data => {
	  const skillData = await ensureSkillData();
	  data.userFesDecks.forEach(deck => {
	    deck.userFesDeckMembers.forEach(member => {
	      member.userFesIdol.activeSkills.forEach(item => {
	        commSkill(item, skillData);
	      });
	    });
	  });
	};

	const proSkillPanels = async data => {
	  const skillData = await ensureSkillData();
	  data.userProduceSupportIdols.forEach(item => {
	    skillPanel(item.skillPanels, skillData);
	  });
	  shortProIdol(data, skillData, true);
	  data.userProduceLimitedSkills && data.userProduceLimitedSkills.forEach(item => {
	    commSkill(item.passiveSkills, skillData);
	    commSkill(item.skill, skillData);
	  });

	  try {
	    skillPanel(data.userProduceIdol.userIdol.idol.skillPanels, skillData);
	  } catch (e) {}
	};

	const produceFinish = async data => {
	  if (data.gameData) return;
	  const skillData = await ensureSkillData();
	  shortProIdol(data, skillData);
	};

	const fesMatchConcertSkill = async data => {
	  const skillData = await ensureSkillData();
	  data.userFesDeck.userFesDeckMembers.forEach(member => {
	    member.userFesIdol.activeSkills.forEach(item => {
	      commSkill(item, skillData, true);
	    });
	    commSkill(member.userFesIdol.memoryAppeal, skillData, true);
	    member.userFesIdol.passiveSkills.forEach(item => {
	      transSkill(item, 'comment', skillData);
	      transSkill(item, 'name', skillData);
	      transEffects(item, skillData);
	    });
	  });
	  judegsSkill(data.judges, skillData);
	  fesRivalsSkill(data.userFesRivals, skillData);
	};

	const auditionSkill = async data => {
	  const skillData = await ensureSkillData();
	  data.userProduceSupportIdols.forEach(item => {
	    commSkill(item.activeSkill, skillData, true);
	  });
	  let proIdol = data.userProduceIdol;
	  proIdol.activeSkills.forEach(skill => {
	    commSkill(skill, skillData, true);
	  });
	  commSkill(proIdol.memoryAppeal, skillData, true);
	  proIdol.passiveSkills.forEach(skill => {
	    commSkill(skill, skillData, true);
	  });
	  let audition = data.produceAudition || data.produceConcert;
	  judegsSkill(audition.judges, skillData);
	  audRivalsSkill(audition.rivals, skillData);
	};

	const resumeGameSkill = async data => {
	  if (!data.gameData) return;

	  try {
	    let gData = JSON.parse(data.gameData);

	    if (gData.produceAudition || gData.produceConcert) {
	      await auditionSkill(gData);
	    } else if (gData.userFesDeck) {
	      await fesMatchConcertSkill(gData);
	    }

	    data.gameData = JSON.stringify(gData);
	  } catch (e) {
	    log(e);
	  }
	};

	const produceResultSkill = async data => {
	  const skillData = await ensureSkillData();
	  data.produceExSkillRewards.forEach(reward => {
	    exSkill(reward.produceExSkill, skillData);
	  });
	};

	const ideaNotesSkill = async data => {
	  if (!data.userProduceIdeaNotes) return;
	  const skillData = await ensureSkillData();
	  data.userProduceIdeaNotes.forEach(note => {
	    let bonus = note.produceIdeaNote.produceIdeaNoteCompleteBonus;
	    transSkill(bonus, 'title', skillData);
	    transSkill(bonus, 'comment', skillData);
	    note.produceIdeaNote.produceIdeaNoteExtraBonuses.forEach(item => {
	      transSkill(item, 'comment', skillData);
	      transSkill(item, 'condition', skillData);
	    });
	  });
	};

	const noteResultSkill = async data => {
	  const skillData = await ensureSkillData();

	  try {
	    let item = data.lessonResult.userProduceIdeaNote.produceIdeaNote.produceIdeaNoteCompleteBonus;
	    commSkill(item, skillData);
	  } catch (e) {}
	};

	let textMap = new Map();
	let expMap = new Map();
	let nounMap = new Map();
	let nameMap$1 = new Map();
	let noteMap = new Map();
	let loaded$5 = false;

	const getMission = async (full = false) => {
	  if (!loaded$5) {
	    let csv = await getLocalData('mission');

	    if (!csv) {
	      csv = await fetchWithHash('/data/mission-re.csv');
	      setLocalData('mission', csv);
	    }

	    const list = parseCsv(csv);
	    const nounArr = [];
	    const nameArr = [];
	    const noteArr = [];
	    const reMap = new Map();
	    sortWords(list, 'text').forEach(item => {
	      if (item && item.text) {
	        const text = trimWrap(item.text);
	        const trans = trimWrap(item.trans);
	        const type = trim(item.type);

	        if (text && trans) {
	          if (type === 'noun') {
	            nounArr.push(pureRE(text));
	            nounMap.set(text, trans);
	          } else if (type === 'note') {
	            noteArr.push(pureRE(text));
	            noteMap.set(text, trans);
	            reMap.set("\u3010".concat(text, "\u3011"), "\u3010".concat(trans, "\u3011"));
	          } else if (type === 'name') {
	            nameArr.push(pureRE(text));
	            nameMap$1.set(text, trans);
	          } else if (type === 'text') {
	            textMap.set(text, trans);
	          } else {
	            reMap.set(text, trans);
	          }
	        }
	      }
	    });
	    const expList = [{
	      re: /\$name/g,
	      exp: "(".concat(nameArr.join('|'), ")")
	    }, {
	      re: /\$noun/g,
	      exp: "(".concat(nounArr.join('|'), ")")
	    }, {
	      re: /\$note/g,
	      exp: "(".concat(noteArr.join('|'), ")")
	    }];

	    for (let [key, value] of reMap) {
	      const re = parseRegExp(key, expList);
	      expMap.set(re, value);
	    }

	    loaded$5 = true;
	  }

	  const wordMaps = [nounMap, noteMap, nameMap$1];
	  let {
	    itemMap
	  } = await getItem();
	  textMap = new Map([...itemMap, ...textMap]);
	  return {
	    expMap,
	    wordMaps,
	    textMap
	  };
	};

	let missionData = null;

	const ensureMissionData = async () => {
	  if (!missionData) {
	    missionData = await getMission();
	  }

	  return missionData;
	};

	const replaceMission = (data, key) => {
	  if (!data) return;
	  const {
	    expMap,
	    wordMaps,
	    textMap
	  } = missionData;
	  const text = fixWrap(data[key]);
	  let _text = text;
	  if (!text) return;

	  if (textMap.has(text)) {
	    data[key] = tagText(textMap.get(text));
	  } else {
	    _text = replaceText(text, expMap, wordMaps);

	    if (text !== _text) {
	      data[key] = tagText(_text);
	    }
	  }
	};

	const processMission = list => {
	  list.forEach(item => {
	    replaceMission(item.mission, 'title');
	    replaceMission(item.mission, 'comment');

	    if (item.mission.missionReward.content) {
	      replaceMission(item.mission.missionReward.content, 'name');
	      replaceMission(item.mission.missionReward.content, 'comment');
	    }
	  });
	};

	const processRaidMission = list => {
	  list.forEach(item => {
	    let mission = item.fesRaidAccumulatedReward;
	    replaceMission(mission, 'title');
	    replaceMission(mission, 'comment');
	    let content = mission.fesRaidAccumulatedRewardContent;

	    if (content && content.content) {
	      replaceMission(content.content, 'name');
	      replaceMission(content.content, 'comment');
	    }
	  });
	};

	const transMission = async data => {
	  await ensureMissionData();
	  processMission(data.dailyUserMissions);
	  processMission(data.weeklyUserMissions);
	  data.eventUserMissions.forEach(item => {
	    if (item && item.userMissions) {
	      processMission(item.userMissions);
	    }
	  });
	  processMission(data.normalUserMissions);
	  processMission(data.specialUserMissions);
	};

	const reportMission = async data => {
	  await ensureMissionData();
	  processMission(data.reportUserMissions);
	};

	const accumulatedPresent = (item, key) => {
	  if (item && item[key] && /イベントミッションを\d+個達成しよう/.test(item[key])) {
	    item[key] = tagText(item[key].replace(/イベントミッションを(\d+)個達成しよう/, '完成$1个活动任务'));
	  }
	};

	const fesRecomMission = async data => {
	  await ensureMissionData();
	  replaceMission(data.userRecommendedMission.mission, 'comment');
	  replaceMission(data.userRecommendedMission.mission, 'title');
	  data.accumulatedPresent.userGameEventAccumulatedPresents.forEach(item => {
	    accumulatedPresent(item.gameEventAccumulatedPresent, 'comment');
	    accumulatedPresent(item.gameEventAccumulatedPresent, 'title');
	  });
	};

	const fesRaidMission = async data => {
	  await ensureMissionData();
	  processRaidMission(data.fesRaidBestScoreRewards);
	  processRaidMission(data.fesRaidLapRewards);
	  processRaidMission(data.fesRaidPointRewards);
	};

	const teachingMission = async data => {
	  await ensureMissionData();
	  data.teachingHints && data.teachingHints.forEach(item => {
	    item.userProduceTeachingHints.forEach(hint => {
	      replaceMission(hint.produceTeachingHint, 'title');
	    });
	  });
	};

	const userItemTypes = ['userRecoveryItems', 'userProduceItems', 'userExchangeItems', 'userLotteryTickets', 'userEvolutionItems', 'userGashaTickets', 'userScoutTickets', 'userEnhancementItems'];
	const itemTypes = ['produceItem', 'recoveryItem', 'exchangeItem', 'lotteryTicket', 'evolutionItem', 'gashaTicket', 'scoutTicket', 'enhancementItem'];

	const transItem = (item, key, {
	  itemMap,
	  itemLimitMap
	}) => {
	  if (!item || typeof item[key] !== 'string') return;
	  let text = fixWrap(item[key]);
	  let limit = '';

	  if (/[\r\n]{1,2}\[[^\]]+\]$/.test(text)) {
	    let rgs = text.match(/([\s\S]+)[\r\n]{1,2}(\[[^\]]+\])$/);

	    if (rgs && rgs[1]) {
	      text = rgs[1].trim();

	      if (itemLimitMap.has(rgs[2])) {
	        limit = itemLimitMap.get(rgs[2]);
	      } else {
	        limit = rgs[2];
	      }
	    }
	  }

	  if (itemMap.has(text)) {
	    let trans = itemMap.get(text);

	    if (limit) {
	      trans += "\n".concat(limit);
	    }

	    item[key] = tagText(trans);
	  }
	};

	const switchShop = (shop, maps) => {
	  if (shop && shop.shopMerchandises) {
	    shop.shopMerchandises.forEach(item => {
	      transItem(item, 'title', maps);
	      transItem(item, 'comment', maps);
	    });
	  }
	};

	const transShopItem = async data => {
	  const maps = await getItem();

	  if (data) {
	    if (Array.isArray(data.userShops)) {
	      data.userShops.forEach(shop => {
	        switchShop(shop, maps);
	      });
	    }

	    if (Array.isArray(data.userEventShops)) {
	      data.userEventShops.forEach(item => {
	        switchShop(item.userShop, maps);
	      });
	    }
	  }
	};

	const transUserItem = async data => {
	  let list = data;
	  if (data.userProduceItems) list = data.userProduceItems;
	  const maps = await getItem();

	  if (Array.isArray(list)) {
	    list.forEach(obj => {
	      const item = obj[itemTypes[0]] || obj[itemTypes[1]] || obj[itemTypes[2]] || obj[itemTypes[3]] || obj[itemTypes[4]] || obj[itemTypes[5]] || obj[itemTypes[6]] || obj[itemTypes[7]];
	      transItem(item, 'name', maps);
	      transItem(item, 'comment', maps);
	    });
	  }
	};

	const transShopPurchase = async data => {
	  const maps = await getItem();

	  if (data && data.shopMerchandise) {
	    transItem(data.shopMerchandise, 'title', maps);
	    transItem(data.shopMerchandise, 'comment', maps);
	  }
	};

	const transPresentItem = async data => {
	  const maps = await getItem();

	  if (Array.isArray(data)) {
	    data.forEach(obj => {
	      transItem(obj.content, 'name', maps);
	    });
	  }
	};

	const transReceivePresent = async data => {
	  const maps = await getItem();
	  transItem(data.receivedPresent, 'Name', maps);
	};

	const transReceiveMission = async data => {
	  const maps = await getItem();
	  transItem(data.userMission.mission.missionReward.content, 'name', maps);
	};

	const transLoginBonus = async data => {
	  const maps = await getItem();
	  data.userLoginBonuses.forEach(item => {
	    item.loginBonus.sheets.forEach(sheet => {
	      sheet.rewards.forEach(reward => {
	        transItem(reward.content, 'name', maps);
	      });
	    });
	  });
	  data.userTotalBonuses.forEach(item => {
	    item.rewards.forEach(reward => {
	      transItem(reward.content, 'name', maps);
	    });
	  });
	};

	const transFesReward = async data => {
	  const maps = await getItem();

	  if (data.lastRankingResult) {
	    if (Array.isArray(data.lastRankingResult.fesMatchGradeRewards)) {
	      data.lastRankingResult.fesMatchGradeRewards.forEach(item => {
	        transItem(item.content, 'name', maps);
	      });
	    }
	  }
	};

	const transAccumulatedPresent = async data => {
	  const maps = await getItem();
	  data.accumulatedPresent.userGameEventAccumulatedPresents.forEach(item => {
	    item.gameEventAccumulatedPresent.rewards.forEach(reward => {
	      transItem(reward.content, 'name', maps);
	    });
	  });
	};

	const nounFixMap = new Map();
	let nfLoaded = false;

	const getNounFix = async () => {
	  if (!nfLoaded) {
	    let csv = await getLocalData('noun-fix');

	    if (!csv) {
	      csv = await fetchWithHash('/data/etc/noun-fix.csv');
	      setLocalData('noun-fix', csv);
	    }

	    const list = parseCsv(csv);
	    sortWords(list, 'text').forEach(item => {
	      const text = trim(item.text);
	      const fixed = trim(item.fixed);

	      if (text) {
	        nounFixMap.set(text, fixed);
	      }
	    });
	    nfLoaded = true;
	  }

	  return nounFixMap;
	};

	const cyPrefixMap = new Map();
	let cyfLoaded = false;

	const getCaiyunPrefix = async () => {
	  if (!cyfLoaded) {
	    let csv = await getLocalData('caiyun-prefix');

	    if (!csv) {
	      csv = await fetchWithHash('/data/etc/caiyun-prefix.csv');
	      setLocalData('caiyun-prefix', csv);
	    }

	    const list = parseCsv(csv);
	    sortWords(list, 'text').forEach(item => {
	      const text = trim(item.text);
	      const fixed = trim(item.fixed);

	      if (text) {
	        cyPrefixMap.set(text, fixed);
	      }
	    });
	    cyfLoaded = true;
	  }

	  return cyPrefixMap;
	};

	const CROSS_DOMAIN_REQ = !!window.GM_xmlhttpRequest;

	const request$1 = (url, option = {}) => {
	  const {
	    method = 'GET',
	    headers,
	    responseType = 'json',
	    data,
	    cors = false,
	    credentials
	  } = option;

	  if (cors) {
	    return fetch(url, {
	      body: data,
	      headers,
	      method,
	      mode: 'cors',
	      credentials
	    }).then(res => res.json());
	  }

	  return new Promise((rev, rej) => {
	    if (!CROSS_DOMAIN_REQ) {
	      return rej('GM_XHR MISSING');
	    }

	    window.GM_xmlhttpRequest({
	      method,
	      url,
	      headers,
	      responseType,
	      data,

	      onload({
	        status,
	        responseText,
	        statusText
	      }) {
	        if (status >= 200 && status < 300) {
	          if (responseType === 'json') {
	            const obj = JSON.parse(responseText);
	            rev(obj);
	          } else {
	            rev(responseText);
	          }
	        } else {
	          rej(statusText);
	        }
	      },

	      onerror(err) {
	        rej(err);
	      }

	    });
	  });
	};

	var BrowserId = (function () {

	  var e = function (t) {
	    if (!(this instanceof e)) return new e(t);
	    this.options = this.extend(t, {
	      swfContainerId: "fingerprintjs2",
	      swfPath: "flash/compiled/FontList.swf",
	      detectScreenOrientation: !0,
	      sortPluginsFor: [/palemoon/i],
	      userDefinedFonts: [],
	      excludeDoNotTrack: !0,
	      excludePixelRatio: !0
	    }), this.nativeForEach = Array.prototype.forEach, this.nativeMap = Array.prototype.map;
	  };

	  return e.prototype = {
	    extend: function (e, t) {
	      if (null == e) return t;

	      for (var n in e) null != e[n] && t[n] !== e[n] && (t[n] = e[n]);

	      return t;
	    },
	    get: function (e) {
	      var t = this,
	          n = {
	        data: [],
	        addPreprocessedComponent: function (e) {
	          var r = e.value;
	          "function" == typeof t.options.preprocessor && (r = t.options.preprocessor(e.key, r)), n.data.push({
	            key: e.key,
	            value: r
	          });
	        }
	      };
	      n = this.userAgentKey(n), n = this.languageKey(n), n = this.colorDepthKey(n), n = this.deviceMemoryKey(n), n = this.pixelRatioKey(n), n = this.hardwareConcurrencyKey(n), n = this.screenResolutionKey(n), n = this.availableScreenResolutionKey(n), n = this.timezoneOffsetKey(n), n = this.sessionStorageKey(n), n = this.localStorageKey(n), n = this.indexedDbKey(n), n = this.addBehaviorKey(n), n = this.openDatabaseKey(n), n = this.cpuClassKey(n), n = this.platformKey(n), n = this.doNotTrackKey(n), n = this.pluginsKey(n), n = this.canvasKey(n), n = this.webglKey(n), n = this.webglVendorAndRendererKey(n), n = this.adBlockKey(n), n = this.hasLiedLanguagesKey(n), n = this.hasLiedResolutionKey(n), n = this.hasLiedOsKey(n), n = this.hasLiedBrowserKey(n), n = this.touchSupportKey(n), n = this.customEntropyFunction(n), this.fontsKey(n, function (n) {
	        var r = [];
	        t.each(n.data, function (e) {
	          var t = e.value;
	          t && "function" == typeof t.join && (t = t.join(";")), r.push(t);
	        });
	        var i = t.x64hash128(r.join("~~~"), 31);
	        return e(i, n.data);
	      });
	    },
	    customEntropyFunction: function (e) {
	      return "function" == typeof this.options.customFunction && e.addPreprocessedComponent({
	        key: "custom",
	        value: this.options.customFunction()
	      }), e;
	    },
	    userAgentKey: function (e) {
	      return this.options.excludeUserAgent || e.addPreprocessedComponent({
	        key: "user_agent",
	        value: this.getUserAgent()
	      }), e;
	    },
	    getUserAgent: function () {
	      return navigator.userAgent;
	    },
	    languageKey: function (e) {
	      return this.options.excludeLanguage || e.addPreprocessedComponent({
	        key: "language",
	        value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ""
	      }), e;
	    },
	    colorDepthKey: function (e) {
	      return this.options.excludeColorDepth || e.addPreprocessedComponent({
	        key: "color_depth",
	        value: window.screen.colorDepth || -1
	      }), e;
	    },
	    deviceMemoryKey: function (e) {
	      return this.options.excludeDeviceMemory || e.addPreprocessedComponent({
	        key: "device_memory",
	        value: this.getDeviceMemory()
	      }), e;
	    },
	    getDeviceMemory: function () {
	      return navigator.deviceMemory || -1;
	    },
	    pixelRatioKey: function (e) {
	      return this.options.excludePixelRatio || e.addPreprocessedComponent({
	        key: "pixel_ratio",
	        value: this.getPixelRatio()
	      }), e;
	    },
	    getPixelRatio: function () {
	      return window.devicePixelRatio || "";
	    },
	    screenResolutionKey: function (e) {
	      return this.options.excludeScreenResolution ? e : this.getScreenResolution(e);
	    },
	    getScreenResolution: function (e) {
	      var t;
	      return t = this.options.detectScreenOrientation && window.screen.height > window.screen.width ? [window.screen.height, window.screen.width] : [window.screen.width, window.screen.height], e.addPreprocessedComponent({
	        key: "resolution",
	        value: t
	      }), e;
	    },
	    availableScreenResolutionKey: function (e) {
	      return this.options.excludeAvailableScreenResolution ? e : this.getAvailableScreenResolution(e);
	    },
	    getAvailableScreenResolution: function (e) {
	      var t;
	      return window.screen.availWidth && window.screen.availHeight && (t = this.options.detectScreenOrientation ? window.screen.availHeight > window.screen.availWidth ? [window.screen.availHeight, window.screen.availWidth] : [window.screen.availWidth, window.screen.availHeight] : [window.screen.availHeight, window.screen.availWidth]), void 0 !== t && e.addPreprocessedComponent({
	        key: "available_resolution",
	        value: t
	      }), e;
	    },
	    timezoneOffsetKey: function (e) {
	      return this.options.excludeTimezoneOffset || e.addPreprocessedComponent({
	        key: "timezone_offset",
	        value: new Date().getTimezoneOffset()
	      }), e;
	    },
	    sessionStorageKey: function (e) {
	      return !this.options.excludeSessionStorage && this.hasSessionStorage() && e.addPreprocessedComponent({
	        key: "session_storage",
	        value: 1
	      }), e;
	    },
	    localStorageKey: function (e) {
	      return !this.options.excludeSessionStorage && this.hasLocalStorage() && e.addPreprocessedComponent({
	        key: "local_storage",
	        value: 1
	      }), e;
	    },
	    indexedDbKey: function (e) {
	      return !this.options.excludeIndexedDB && this.hasIndexedDB() && e.addPreprocessedComponent({
	        key: "indexed_db",
	        value: 1
	      }), e;
	    },
	    addBehaviorKey: function (e) {
	      return !this.options.excludeAddBehavior && document.body && document.body.addBehavior && e.addPreprocessedComponent({
	        key: "add_behavior",
	        value: 1
	      }), e;
	    },
	    openDatabaseKey: function (e) {
	      return !this.options.excludeOpenDatabase && window.openDatabase && e.addPreprocessedComponent({
	        key: "open_database",
	        value: 1
	      }), e;
	    },
	    cpuClassKey: function (e) {
	      return this.options.excludeCpuClass || e.addPreprocessedComponent({
	        key: "cpu_class",
	        value: this.getNavigatorCpuClass()
	      }), e;
	    },
	    platformKey: function (e) {
	      return this.options.excludePlatform || e.addPreprocessedComponent({
	        key: "navigator_platform",
	        value: this.getNavigatorPlatform()
	      }), e;
	    },
	    doNotTrackKey: function (e) {
	      return this.options.excludeDoNotTrack || e.addPreprocessedComponent({
	        key: "do_not_track",
	        value: this.getDoNotTrack()
	      }), e;
	    },
	    canvasKey: function (e) {
	      return !this.options.excludeCanvas && this.isCanvasSupported() && e.addPreprocessedComponent({
	        key: "canvas",
	        value: this.getCanvasFp()
	      }), e;
	    },
	    webglKey: function (e) {
	      return !this.options.excludeWebGL && this.isWebGlSupported() && e.addPreprocessedComponent({
	        key: "webgl",
	        value: this.getWebglFp()
	      }), e;
	    },
	    webglVendorAndRendererKey: function (e) {
	      return !this.options.excludeWebGLVendorAndRenderer && this.isWebGlSupported() && e.addPreprocessedComponent({
	        key: "webgl_vendor",
	        value: this.getWebglVendorAndRenderer()
	      }), e;
	    },
	    adBlockKey: function (e) {
	      return this.options.excludeAdBlock || e.addPreprocessedComponent({
	        key: "adblock",
	        value: this.getAdBlock()
	      }), e;
	    },
	    hasLiedLanguagesKey: function (e) {
	      return this.options.excludeHasLiedLanguages || e.addPreprocessedComponent({
	        key: "has_lied_languages",
	        value: this.getHasLiedLanguages()
	      }), e;
	    },
	    hasLiedResolutionKey: function (e) {
	      return this.options.excludeHasLiedResolution || e.addPreprocessedComponent({
	        key: "has_lied_resolution",
	        value: this.getHasLiedResolution()
	      }), e;
	    },
	    hasLiedOsKey: function (e) {
	      return this.options.excludeHasLiedOs || e.addPreprocessedComponent({
	        key: "has_lied_os",
	        value: this.getHasLiedOs()
	      }), e;
	    },
	    hasLiedBrowserKey: function (e) {
	      return this.options.excludeHasLiedBrowser || e.addPreprocessedComponent({
	        key: "has_lied_browser",
	        value: this.getHasLiedBrowser()
	      }), e;
	    },
	    fontsKey: function (e, t) {
	      return this.options.excludeJsFonts ? this.flashFontsKey(e, t) : this.jsFontsKey(e, t);
	    },
	    flashFontsKey: function (e, t) {
	      return this.options.excludeFlashFonts ? t(e) : this.hasSwfObjectLoaded() && this.hasMinFlashInstalled() ? void 0 === this.options.swfPath ? t(e) : void this.loadSwfAndDetectFonts(function (n) {
	        e.addPreprocessedComponent({
	          key: "swf_fonts",
	          value: n.join(";")
	        }), t(e);
	      }) : t(e);
	    },
	    jsFontsKey: function (e, t) {
	      var n = this;
	      return setTimeout(function () {
	        var r = ["monospace", "sans-serif", "serif"],
	            i = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
	        n.options.extendedJsFonts && (i = i.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])), i = (i = i.concat(n.options.userDefinedFonts)).filter(function (e, t) {
	          return i.indexOf(e) === t;
	        });

	        var o = document.getElementsByTagName("body")[0],
	            a = document.createElement("div"),
	            s = document.createElement("div"),
	            c = {},
	            u = {},
	            l = function () {
	          var e = document.createElement("span");
	          return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.style.fontStyle = "normal", e.style.fontWeight = "normal", e.style.letterSpacing = "normal", e.style.lineBreak = "auto", e.style.lineHeight = "normal", e.style.textTransform = "none", e.style.textAlign = "left", e.style.textDecoration = "none", e.style.textShadow = "none", e.style.whiteSpace = "normal", e.style.wordBreak = "normal", e.style.wordSpacing = "normal", e.innerHTML = "mmmmmmmmmmlli", e;
	        },
	            d = function () {
	          for (var e = [], t = 0, n = r.length; t < n; t++) {
	            var i = l();
	            i.style.fontFamily = r[t], a.appendChild(i), e.push(i);
	          }

	          return e;
	        }();

	        o.appendChild(a);

	        for (var p = 0, f = r.length; p < f; p++) c[r[p]] = d[p].offsetWidth, u[r[p]] = d[p].offsetHeight;

	        var h = function () {
	          for (var e, t, n, o = {}, a = 0, c = i.length; a < c; a++) {
	            for (var u = [], d = 0, p = r.length; d < p; d++) {
	              var f = (e = i[a], t = r[d], n = void 0, (n = l()).style.fontFamily = "'" + e + "'," + t, n);
	              s.appendChild(f), u.push(f);
	            }

	            o[i[a]] = u;
	          }

	          return o;
	        }();

	        o.appendChild(s);

	        for (var g = [], m = 0, y = i.length; m < y; m++) (function (e) {
	          for (var t = !1, n = 0; n < r.length; n++) if (t = e[n].offsetWidth !== c[r[n]] || e[n].offsetHeight !== u[r[n]]) return t;

	          return t;
	        })(h[i[m]]) && g.push(i[m]);

	        o.removeChild(s), o.removeChild(a), e.addPreprocessedComponent({
	          key: "js_fonts",
	          value: g
	        }), t(e);
	      }, 1);
	    },
	    pluginsKey: function (e) {
	      return this.options.excludePlugins || (this.isIE() ? this.options.excludeIEPlugins || e.addPreprocessedComponent({
	        key: "ie_plugins",
	        value: this.getIEPlugins()
	      }) : e.addPreprocessedComponent({
	        key: "regular_plugins",
	        value: this.getRegularPlugins()
	      })), e;
	    },
	    getRegularPlugins: function () {
	      var e = [];
	      if (navigator.plugins) for (var t = 0, n = navigator.plugins.length; t < n; t++) navigator.plugins[t] && e.push(navigator.plugins[t]);
	      return this.pluginsShouldBeSorted() && (e = e.sort(function (e, t) {
	        return e.name > t.name ? 1 : e.name < t.name ? -1 : 0;
	      })), this.map(e, function (e) {
	        var t = this.map(e, function (e) {
	          return [e.type, e.suffixes].join("~");
	        }).join(",");
	        return [e.name, e.description, t].join("::");
	      }, this);
	    },
	    getIEPlugins: function () {
	      var e = [];
	      return (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) && (e = this.map(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], function (e) {
	        try {
	          return new window.ActiveXObject(e), e;
	        } catch (e) {
	          return null;
	        }
	      })), navigator.plugins && (e = e.concat(this.getRegularPlugins())), e;
	    },
	    pluginsShouldBeSorted: function () {
	      for (var e = !1, t = 0, n = this.options.sortPluginsFor.length; t < n; t++) {
	        var r = this.options.sortPluginsFor[t];

	        if (navigator.userAgent.match(r)) {
	          e = !0;
	          break;
	        }
	      }

	      return e;
	    },
	    touchSupportKey: function (e) {
	      return this.options.excludeTouchSupport || e.addPreprocessedComponent({
	        key: "touch_support",
	        value: this.getTouchSupport()
	      }), e;
	    },
	    hardwareConcurrencyKey: function (e) {
	      return this.options.excludeHardwareConcurrency || e.addPreprocessedComponent({
	        key: "hardware_concurrency",
	        value: this.getHardwareConcurrency()
	      }), e;
	    },
	    hasSessionStorage: function () {
	      try {
	        return !!window.sessionStorage;
	      } catch (e) {
	        return !0;
	      }
	    },
	    hasLocalStorage: function () {
	      try {
	        return !!window.localStorage;
	      } catch (e) {
	        return !0;
	      }
	    },
	    hasIndexedDB: function () {
	      try {
	        return !!window.indexedDB;
	      } catch (e) {
	        return !0;
	      }
	    },
	    getHardwareConcurrency: function () {
	      return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "unknown";
	    },
	    getNavigatorCpuClass: function () {
	      return navigator.cpuClass ? navigator.cpuClass : "unknown";
	    },
	    getNavigatorPlatform: function () {
	      return navigator.platform ? navigator.platform : "unknown";
	    },
	    getDoNotTrack: function () {
	      return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : "unknown";
	    },
	    getTouchSupport: function () {
	      var e = 0,
	          t = !1;
	      void 0 !== navigator.maxTouchPoints ? e = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);

	      try {
	        document.createEvent("TouchEvent"), t = !0;
	      } catch (e) {}

	      return [e, t, "ontouchstart" in window];
	    },
	    getCanvasFp: function () {
	      var e = [],
	          t = document.createElement("canvas");
	      t.width = 2e3, t.height = 200, t.style.display = "inline";
	      var n = t.getContext("2d");
	      return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), e.push("canvas winding:" + (!1 === n.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", this.options.dontUseFakeFontInCanvas ? n.font = "11pt Arial" : n.font = "11pt no-real-font-123", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), n.globalCompositeOperation = "multiply", n.fillStyle = "rgb(255,0,255)", n.beginPath(), n.arc(50, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(0,255,255)", n.beginPath(), n.arc(100, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,255,0)", n.beginPath(), n.arc(75, 100, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,0,255)", n.arc(75, 75, 75, 0, 2 * Math.PI, !0), n.arc(75, 75, 25, 0, 2 * Math.PI, !0), n.fill("evenodd"), t.toDataURL && e.push("canvas fp:" + t.toDataURL()), e.join("~");
	    },
	    getWebglFp: function () {
	      var e,
	          t = function (t) {
	        return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + t[0] + ", " + t[1] + "]";
	      };

	      if (!(e = this.getWebglCanvas())) return null;
	      var n = [],
	          r = e.createBuffer();
	      e.bindBuffer(e.ARRAY_BUFFER, r);
	      var i = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
	      e.bufferData(e.ARRAY_BUFFER, i, e.STATIC_DRAW), r.itemSize = 3, r.numItems = 3;
	      var o = e.createProgram(),
	          a = e.createShader(e.VERTEX_SHADER);
	      e.shaderSource(a, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(a);
	      var s = e.createShader(e.FRAGMENT_SHADER);
	      e.shaderSource(s, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(s), e.attachShader(o, a), e.attachShader(o, s), e.linkProgram(o), e.useProgram(o), o.vertexPosAttrib = e.getAttribLocation(o, "attrVertex"), o.offsetUniform = e.getUniformLocation(o, "uniformOffset"), e.enableVertexAttribArray(o.vertexPosArray), e.vertexAttribPointer(o.vertexPosAttrib, r.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(o.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, r.numItems);

	      try {
	        n.push(e.canvas.toDataURL());
	      } catch (e) {}

	      n.push("extensions:" + (e.getSupportedExtensions() || []).join(";")), n.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), n.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), n.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), n.push("webgl max anisotropy:" + function (e) {
	        var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");

	        if (t) {
	          var n = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
	          return 0 === n && (n = 2), n;
	        }

	        return null;
	      }(e)), n.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), n.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), n.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), n.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), n.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), n.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), n.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), n.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), n.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), n.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), n.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), n.push("webgl red bits:" + e.getParameter(e.RED_BITS)), n.push("webgl renderer:" + e.getParameter(e.RENDERER)), n.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), n.push("webgl vendor:" + e.getParameter(e.VENDOR)), n.push("webgl version:" + e.getParameter(e.VERSION));

	      try {
	        var c = e.getExtension("WEBGL_debug_renderer_info");
	        c && (n.push("webgl unmasked vendor:" + e.getParameter(c.UNMASKED_VENDOR_WEBGL)), n.push("webgl unmasked renderer:" + e.getParameter(c.UNMASKED_RENDERER_WEBGL)));
	      } catch (e) {}

	      return e.getShaderPrecisionFormat ? (n.push("webgl vertex shader high float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision), n.push("webgl vertex shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMin), n.push("webgl vertex shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMax), n.push("webgl vertex shader medium float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision), n.push("webgl vertex shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMin), n.push("webgl vertex shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMax), n.push("webgl vertex shader low float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).precision), n.push("webgl vertex shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMin), n.push("webgl vertex shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMax), n.push("webgl fragment shader high float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision), n.push("webgl fragment shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMin), n.push("webgl fragment shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMax), n.push("webgl fragment shader medium float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision), n.push("webgl fragment shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMin), n.push("webgl fragment shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMax), n.push("webgl fragment shader low float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).precision), n.push("webgl fragment shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMin), n.push("webgl fragment shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMax), n.push("webgl vertex shader high int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).precision), n.push("webgl vertex shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMin), n.push("webgl vertex shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMax), n.push("webgl vertex shader medium int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).precision), n.push("webgl vertex shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMin), n.push("webgl vertex shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMax), n.push("webgl vertex shader low int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).precision), n.push("webgl vertex shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMin), n.push("webgl vertex shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMax), n.push("webgl fragment shader high int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).precision), n.push("webgl fragment shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMin), n.push("webgl fragment shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMax), n.push("webgl fragment shader medium int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).precision), n.push("webgl fragment shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMin), n.push("webgl fragment shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMax), n.push("webgl fragment shader low int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).precision), n.push("webgl fragment shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMin), n.push("webgl fragment shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMax), n.join("~")) : n.join("~");
	    },
	    getWebglVendorAndRenderer: function () {
	      try {
	        var e = this.getWebglCanvas(),
	            t = e.getExtension("WEBGL_debug_renderer_info");
	        return e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL);
	      } catch (e) {
	        return null;
	      }
	    },
	    getAdBlock: function () {
	      var e = document.createElement("div");
	      e.innerHTML = "&nbsp;", e.className = "adsbox";
	      var t = !1;

	      try {
	        document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e);
	      } catch (e) {
	        t = !1;
	      }

	      return t;
	    },
	    getHasLiedLanguages: function () {
	      if (void 0 !== navigator.languages) try {
	        if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0;
	      } catch (e) {
	        return !0;
	      }
	      return !1;
	    },
	    getHasLiedResolution: function () {
	      return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight;
	    },
	    getHasLiedOs: function () {
	      var e,
	          t = navigator.userAgent.toLowerCase(),
	          n = navigator.oscpu,
	          r = navigator.platform.toLowerCase();
	      if (e = t.indexOf("windows phone") >= 0 ? "Windows Phone" : t.indexOf("win") >= 0 ? "Windows" : t.indexOf("android") >= 0 ? "Android" : t.indexOf("linux") >= 0 ? "Linux" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 ? "iOS" : t.indexOf("mac") >= 0 ? "Mac" : "Other", ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e) return !0;

	      if (void 0 !== n) {
	        if ((n = n.toLowerCase()).indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e) return !0;
	        if (n.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e) return !0;
	        if (n.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e) return !0;
	        if ((-1 === n.indexOf("win") && -1 === n.indexOf("linux") && -1 === n.indexOf("mac")) != ("Other" === e)) return !0;
	      }

	      return r.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e || (r.indexOf("linux") >= 0 || r.indexOf("android") >= 0 || r.indexOf("pike") >= 0) && "Linux" !== e && "Android" !== e || (r.indexOf("mac") >= 0 || r.indexOf("ipad") >= 0 || r.indexOf("ipod") >= 0 || r.indexOf("iphone") >= 0) && "Mac" !== e && "iOS" !== e || (-1 === r.indexOf("win") && -1 === r.indexOf("linux") && -1 === r.indexOf("mac")) != ("Other" === e) || void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e;
	    },
	    getHasLiedBrowser: function () {
	      var e,
	          t = navigator.userAgent.toLowerCase(),
	          n = navigator.productSub;
	      if (("Chrome" == (e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("chrome") >= 0 ? "Chrome" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== n) return !0;
	      var r,
	          i = eval.toString().length;
	      if (37 === i && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
	      if (39 === i && "Internet Explorer" !== e && "Other" !== e) return !0;
	      if (33 === i && "Chrome" !== e && "Opera" !== e && "Other" !== e) return !0;

	      try {
	        throw "a";
	      } catch (e) {
	        try {
	          e.toSource(), r = !0;
	        } catch (e) {
	          r = !1;
	        }
	      }

	      return !(!r || "Firefox" === e || "Other" === e);
	    },
	    isCanvasSupported: function () {
	      var e = document.createElement("canvas");
	      return !(!e.getContext || !e.getContext("2d"));
	    },
	    isWebGlSupported: function () {
	      if (!this.isCanvasSupported()) return !1;
	      var e = this.getWebglCanvas();
	      return !!window.WebGLRenderingContext && !!e;
	    },
	    isIE: function () {
	      return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent));
	    },
	    hasSwfObjectLoaded: function () {
	      return void 0 !== window.swfobject;
	    },
	    hasMinFlashInstalled: function () {
	      return window.swfobject.hasFlashPlayerVersion("9.0.0");
	    },
	    addFlashDivNode: function () {
	      var e = document.createElement("div");
	      e.setAttribute("id", this.options.swfContainerId), document.body.appendChild(e);
	    },
	    loadSwfAndDetectFonts: function (e) {
	      var t = "___fp_swf_loaded";

	      window[t] = function (t) {
	        e(t);
	      };

	      var n = this.options.swfContainerId;
	      this.addFlashDivNode();
	      var r = {
	        onReady: t
	      };
	      window.swfobject.embedSWF(this.options.swfPath, n, "1", "1", "9.0.0", !1, r, {
	        allowScriptAccess: "always",
	        menu: "false"
	      }, {});
	    },
	    getWebglCanvas: function () {
	      var e = document.createElement("canvas"),
	          t = null;

	      try {
	        t = e.getContext("webgl") || e.getContext("experimental-webgl");
	      } catch (e) {}

	      return t || (t = null), t;
	    },
	    each: function (e, t, n) {
	      if (null !== e) if (this.nativeForEach && e.forEach === this.nativeForEach) e.forEach(t, n);else if (e.length === +e.length) {
	        for (var r = 0, i = e.length; r < i; r++) if (t.call(n, e[r], r, e) === {}) return;
	      } else for (var o in e) if (e.hasOwnProperty(o) && t.call(n, e[o], o, e) === {}) return;
	    },
	    map: function (e, t, n) {
	      var r = [];
	      return null == e ? r : this.nativeMap && e.map === this.nativeMap ? e.map(t, n) : (this.each(e, function (e, i, o) {
	        r[r.length] = t.call(n, e, i, o);
	      }), r);
	    },
	    x64Add: function (e, t) {
	      e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
	      var n = [0, 0, 0, 0];
	      return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]];
	    },
	    x64Multiply: function (e, t) {
	      e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
	      var n = [0, 0, 0, 0];
	      return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]];
	    },
	    x64Rotl: function (e, t) {
	      return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t]);
	    },
	    x64LeftShift: function (e, t) {
	      return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0];
	    },
	    x64Xor: function (e, t) {
	      return [e[0] ^ t[0], e[1] ^ t[1]];
	    },
	    x64Fmix: function (e) {
	      return e = this.x64Xor(e, [0, e[0] >>> 1]), e = this.x64Multiply(e, [4283543511, 3981806797]), e = this.x64Xor(e, [0, e[0] >>> 1]), e = this.x64Multiply(e, [3301882366, 444984403]), this.x64Xor(e, [0, e[0] >>> 1]);
	    },
	    x64hash128: function (e, t) {
	      t = t || 0;

	      for (var n = (e = e || "").length % 16, r = e.length - n, i = [0, t], o = [0, t], a = [0, 0], s = [0, 0], c = [2277735313, 289559509], u = [1291169091, 658871167], l = 0; l < r; l += 16) a = [255 & e.charCodeAt(l + 4) | (255 & e.charCodeAt(l + 5)) << 8 | (255 & e.charCodeAt(l + 6)) << 16 | (255 & e.charCodeAt(l + 7)) << 24, 255 & e.charCodeAt(l) | (255 & e.charCodeAt(l + 1)) << 8 | (255 & e.charCodeAt(l + 2)) << 16 | (255 & e.charCodeAt(l + 3)) << 24], s = [255 & e.charCodeAt(l + 12) | (255 & e.charCodeAt(l + 13)) << 8 | (255 & e.charCodeAt(l + 14)) << 16 | (255 & e.charCodeAt(l + 15)) << 24, 255 & e.charCodeAt(l + 8) | (255 & e.charCodeAt(l + 9)) << 8 | (255 & e.charCodeAt(l + 10)) << 16 | (255 & e.charCodeAt(l + 11)) << 24], a = this.x64Multiply(a, c), a = this.x64Rotl(a, 31), a = this.x64Multiply(a, u), i = this.x64Xor(i, a), i = this.x64Rotl(i, 27), i = this.x64Add(i, o), i = this.x64Add(this.x64Multiply(i, [0, 5]), [0, 1390208809]), s = this.x64Multiply(s, u), s = this.x64Rotl(s, 33), s = this.x64Multiply(s, c), o = this.x64Xor(o, s), o = this.x64Rotl(o, 31), o = this.x64Add(o, i), o = this.x64Add(this.x64Multiply(o, [0, 5]), [0, 944331445]);

	      switch (a = [0, 0], s = [0, 0], n) {
	        case 15:
	          s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 14)], 48));

	        case 14:
	          s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 13)], 40));

	        case 13:
	          s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 12)], 32));

	        case 12:
	          s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 11)], 24));

	        case 11:
	          s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 10)], 16));

	        case 10:
	          s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 9)], 8));

	        case 9:
	          s = this.x64Xor(s, [0, e.charCodeAt(l + 8)]), s = this.x64Multiply(s, u), s = this.x64Rotl(s, 33), s = this.x64Multiply(s, c), o = this.x64Xor(o, s);

	        case 8:
	          a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 7)], 56));

	        case 7:
	          a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 6)], 48));

	        case 6:
	          a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 5)], 40));

	        case 5:
	          a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 4)], 32));

	        case 4:
	          a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 3)], 24));

	        case 3:
	          a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 2)], 16));

	        case 2:
	          a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 1)], 8));

	        case 1:
	          a = this.x64Xor(a, [0, e.charCodeAt(l)]), a = this.x64Multiply(a, c), a = this.x64Rotl(a, 31), a = this.x64Multiply(a, u), i = this.x64Xor(i, a);
	      }

	      return i = this.x64Xor(i, [0, e.length]), o = this.x64Xor(o, [0, e.length]), i = this.x64Add(i, o), o = this.x64Add(o, i), i = this.x64Fmix(i), o = this.x64Fmix(o), i = this.x64Add(i, o), o = this.x64Add(o, i), ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8);
	    }
	  }, e.VERSION = "1.8.0", e;
	})();

	let defaultUid = '5a096eec830f7876a48aac47';
	let bid = '';
	let uid = '';
	let pid = '';
	let auth = null;

	const sleep = time => {
	  return new Promise(rev => {
	    setTimeout(rev, time);
	  });
	};

	const testCookies = async () => {
	  await getHash;
	  const res = await request$1('https://biz.caiyunapp.com/test_cookies', {
	    cors: true,
	    credentials: 'include',
	    headers: {
	      'X-Authorization': "token ".concat(fetchInfo.data.cyweb_token)
	    }
	  });

	  if (res.status === 'ok' && res.cookies.cy_user) {
	    const data = JSON.parse(decodeURIComponent(res.cookies.cy_user));
	    uid = data._id || defaultUid;
	  } else {
	    return false;
	  }
	};

	const getAuth = () => {
	  if (!auth) {
	    auth = new Promise((rev, rej) => {
	      testCookies().then(async () => {
	        if (!uid && !bid) {
	          new BrowserId().get(id => bid = id);
	          let count = 5;

	          while (!bid || --count > 0) {
	            await sleep(300);
	          }

	          if (!bid) {
	            throw new Error('timeout: get browser id ');
	          }
	        }

	        return request$1('https://api.interpreter.caiyunai.com/v1/page/auth', {
	          cors: true,
	          method: 'POST',
	          headers: {
	            'X-Authorization': "token ".concat(fetchInfo.data.cyweb_token),
	            'Content-Type': 'application/json'
	          },
	          data: JSON.stringify({
	            browser_id: bid,
	            device_id: '',
	            os_type: 'web',
	            title: document.title,
	            url: document.URL,
	            user_id: uid
	          })
	        });
	      }).then(res => {
	        if (res.auth_type === -1 || !res.page_id) {
	          throw new Error('caiyun api out of limit.');
	        } else {
	          pid = res.page_id;
	        }
	      }).then(rev).catch(rej);
	    });
	  }

	  return auth;
	};

	const translator = async (list, from = 'ja') => {
	  await getAuth();
	  await auth;
	  const res = await request$1('https://api.interpreter.caiyunai.com/v1/page/translator', {
	    cors: true,
	    method: 'POST',
	    headers: {
	      'X-Authorization': "token ".concat(fetchInfo.data.cyweb_token),
	      'Content-Type': 'application/json'
	    },
	    data: JSON.stringify({
	      cached: true,
	      os_type: 'web',
	      page_id: pid,
	      replaced: true,
	      request_id: bid || uid,
	      source: list,
	      trans_type: "".concat(from, "2zh"),
	      url: document.URL
	    })
	  });

	  if (res && res.target) {
	    return res.target.map(item => item.target);
	  }

	  return [];
	};

	function a(r) {
	  if (Array.isArray(r)) {
	    for (var o = 0, t = Array(r.length); o < r.length; o++) t[o] = r[o];

	    return t;
	  }

	  return Array.from(r);
	}

	function n(r, o) {
	  for (var t = 0; t < o.length - 2; t += 3) {
	    var a = o.charAt(t + 2);
	    a = a >= "a" ? a.charCodeAt(0) - 87 : Number(a), a = "+" === o.charAt(t + 1) ? r >>> a : r << a, r = "+" === o.charAt(t) ? r + a & 4294967295 : r ^ a;
	  }

	  return r;
	}

	const bdsign = r => {
	  var o = r.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g);

	  if (null === o) {
	    var t = r.length;
	    t > 30 && (r = "" + r.substr(0, 10) + r.substr(Math.floor(t / 2) - 5, 10) + r.substr(-10, 10));
	  } else {
	    for (var e = r.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/), C = 0, h = e.length, f = []; h > C; C++) "" !== e[C] && f.push.apply(f, a(e[C].split(""))), C !== h - 1 && f.push(o[C]);

	    var g = f.length;
	    g > 30 && (r = f.slice(0, 10).join("") + f.slice(Math.floor(g / 2) - 5, Math.floor(g / 2) + 5).join("") + f.slice(-10).join(""));
	  }

	  var u = void 0;
	  u = fetchInfo.data.bdsign.gtk || '320305.131321201';

	  for (var d = u.split("."), m = Number(d[0]) || 0, s = Number(d[1]) || 0, S = [], c = 0, v = 0; v < r.length; v++) {
	    var A = r.charCodeAt(v);
	    128 > A ? S[c++] = A : (2048 > A ? S[c++] = A >> 6 | 192 : (55296 === (64512 & A) && v + 1 < r.length && 56320 === (64512 & r.charCodeAt(v + 1)) ? (A = 65536 + ((1023 & A) << 10) + (1023 & r.charCodeAt(++v)), S[c++] = A >> 18 | 240, S[c++] = A >> 12 & 63 | 128) : S[c++] = A >> 12 | 224, S[c++] = A >> 6 & 63 | 128), S[c++] = 63 & A | 128);
	  }

	  for (var p = m, F = "" + String.fromCharCode(43) + String.fromCharCode(45) + String.fromCharCode(97) + ("" + String.fromCharCode(94) + String.fromCharCode(43) + String.fromCharCode(54)), D = "" + String.fromCharCode(43) + String.fromCharCode(45) + String.fromCharCode(51) + ("" + String.fromCharCode(94) + String.fromCharCode(43) + String.fromCharCode(98)) + ("" + String.fromCharCode(43) + String.fromCharCode(45) + String.fromCharCode(102)), b = 0; b < S.length; b++) p += S[b], p = n(p, F);

	  return p = n(p, D), p ^= s, 0 > p && (p = (2147483647 & p) + 2147483648), p %= 1e6, p.toString() + "." + (p ^ m);
	};

	const joinBr = (list, br, transArr) => {
	  br.forEach(count => {
	    let i = count;
	    let str = '';

	    while (i >= 0) {
	      i--;

	      let _str = list.shift();

	      if (isString_1(_str)) {
	        if (!_str) {
	          _str = '……';
	        }

	        str += _str + '\n';
	      }
	    }

	    if (str) {
	      transArr.push(str.slice(0, str.length - 1));
	    }
	  });
	};

	const joinText = list => {
	  let br = [];

	  let _list = list.map(text => fixWrap(text));

	  _list.forEach(text => {
	    let count = [...text].filter(l => l === '\n').length;
	    br.push(count);
	  });

	  let query = _list.join('\n');

	  return [query, br];
	};

	const splitText = (text, WORDS_LIMIT = 4000) => {
	  let strTemp = '';
	  let arr = [];
	  let count = 0;
	  text.split('\n').forEach(txt => {
	    strTemp += txt;
	    count += new Blob([txt]).size;

	    if (count > WORDS_LIMIT) {
	      arr.push(strTemp);
	      count = 0;
	      strTemp = '';
	    } else {
	      strTemp += '\n';
	    }
	  });

	  if (strTemp) {
	    arr.push(strTemp.replace(/\n$/, ''));
	  }

	  return arr;
	};

	const bdsApi = async (query, from = 'jp') => {
	  let formData = new FormData();
	  formData.append('from', from);
	  formData.append('to', 'zh');
	  formData.append('query', query);
	  formData.append('transtype', 'realtime');
	  formData.append('simple_means_flag', '3');
	  formData.append('sign', bdsign(query));
	  formData.append('token', fetchInfo.data.bdsign.token || 'b8441b5ad0953d78dbf4c8829bd226d1');
	  let res = await request$1("https://fanyi.baidu.com/v2transapi?from=".concat(from, "&to=zh"), {
	    data: formData,
	    method: 'POST',
	    headers: {
	      'accept': '*/*',
	      'referer': 'https://fanyi.baidu.com/translate',
	      'origin': 'https://fanyi.baidu.com'
	    }
	  });

	  if (res.error || !isString_1(res.trans_result.data[0].dst)) {
	    throw new Error('trans fail');
	  }

	  return res.trans_result.data.map(item => item.dst);
	};

	const baiduTrans = async (source, from = 'jp') => {
	  try {
	    let [query, br] = joinText(source);
	    let textArr = splitText(query);
	    let result = await Promise.all(textArr.map(query => bdsApi(query, from)));
	    let list = result.reduce((a, b) => a.concat(b));
	    let transArr = [];
	    joinBr(list, br, transArr);
	    return transArr;
	  } catch (e) {
	    log(e);
	    return [];
	  }
	};

	const caiyunTrans = async source => {
	  try {
	    let [query, br] = joinText(source);
	    let textArr = splitText(query);
	    let result = await Promise.all(textArr.map(query => {
	      return translator(query.split('\n'));
	    }));
	    let list = result.reduce((a, b) => a.concat(b));
	    let transArr = [];
	    joinBr(list, br, transArr);
	    return transArr;
	  } catch (e) {
	    log(e);
	    return [];
	  }
	};

	const textKeys = ['text', 'select', 'comment', 'title', 'actionComment', 'actionComment2', 'reactionComment', 'resultLoseComment', 'resultStartComment', 'resultWinComment', 'characterComment', 'producerComment', 'comment1', 'comment2'];

	const collectText = (data, commMap, typeTextMap) => {
	  const textInfo = [];
	  const textList = [];
	  data.forEach((item, index) => {
	    textKeys.forEach(key => {
	      let text = fixWrap(item[key]);

	      if (item[key]) {
	        if (commMap.has(text)) {
	          item[key] = tagText(commMap.get(text));
	        } else if (typeTextMap.has(text)) {
	          item[key] = tagText(typeTextMap.get(text));
	        } else {
	          textInfo.push({
	            key,
	            index
	          });
	          textList.push(text);
	        }
	      }
	    });
	  });
	  return {
	    textInfo,
	    textList
	  };
	};

	const preFix = async list => {
	  const cyfMap = await getCaiyunPrefix();
	  return replaceWords(list, cyfMap);
	};

	const nounFix = async list => {
	  const nounFixMap = await getNounFix();
	  return replaceWords(list, nounFixMap);
	};

	const autoWrap = (text, count) => {
	  if (text.length > count && !text.includes('\n')) {
	    const len = Math.floor(text.length / 2) + 1;
	    return text.slice(0, len) + '\n' + text.slice(len, text.length);
	  }

	  return text;
	};

	const autoTransCache$1 = new Map();

	const autoTrans = async (data, name, printText, skip = false) => {
	  if (config.auto !== 'on' || !data.length) return;
	  let fixedTransList;
	  const commMap = await getCommStory();
	  const typeTextMap = await getTypeTextMap();
	  const {
	    textInfo,
	    textList
	  } = collectText(data, commMap, typeTextMap);
	  if (!textInfo.length) return;
	  const storyKey = name || data;
	  let hasCache = false;

	  if (autoTransCache$1.has(storyKey)) {
	    hasCache = true;
	    fixedTransList = autoTransCache$1.get(storyKey);
	  } else {
	    const fixedTextList = await preFix(textList);
	    let transList = [];

	    if (!skip) {
	      if (fetchInfo.data.trans_api === 'caiyun') {
	        transList = await caiyunTrans(fixedTextList);
	      } else {
	        transList = await baiduTrans(fixedTextList);
	      }
	    }

	    fixedTransList = await nounFix(transList);
	    autoTransCache$1.set(storyKey, fixedTransList);
	  }

	  if (!hasCache && (DEV || !name || printText)) {
	    let mergedList = [];
	    textList.forEach((text, index) => {
	      mergedList.push(replaceWrap(text), fixedTransList[index]);
	    });
	    let _log = log;
	    if (!name || printText) _log = log2;

	    _log(mergedList.join('\n'));
	  }

	  fixedTransList.forEach((trans, idx) => {
	    let _trans = trans;
	    const {
	      key,
	      index
	    } = textInfo[idx];

	    if (key === 'select') {
	      _trans = autoWrap(_trans, 8);
	    }

	    _trans = replaceQuote(_trans);
	    if (idx === 0 && !printText) _trans = "".concat(_trans, " \u2601\uFE0F");
	    data[index][key] = tagText(_trans);
	  });
	  const nameMap = await getName();
	  data.forEach(item => {
	    transSpeaker(item, nameMap);
	  });
	};

	const autoTransText = async (data, key = 'comment') => {
	  const name = data.map(item => item[key]).join('').trim();
	  await autoTrans(data, name, true);
	};

	const transText = async (data, key = 'comment') => {
	  const name = data.map(item => item[key]).join('').trim();
	  await autoTrans(data, name, true, true);
	};

	const auditionKeys = ['actionComment', 'actionComment2', 'reactionComment', 'resultLoseComment', 'resultStartComment', 'resultWinComment'];

	const produceAudition = async data => {
	  try {
	    if (data.produceAudition) {
	      let name = data.produceAudition.judges.map(item => {
	        return auditionKeys.map(key => item[key] || '').join('');
	      }).join('').trim();
	      await autoTrans(data.produceAudition.judges, name, true);
	    }

	    if (data.produceConcert) {
	      let name = data.produceConcert.judges.map(item => {
	        return auditionKeys.map(key => item[key] || '').join('');
	      }).join('').trim();
	      await autoTrans(data.produceConcert.judges, name, true);
	    }
	  } catch (e) {}
	};

	const fesMatchConcert = async data => {
	  if (data.judges) {
	    let name = data.judges.map(item => {
	      return auditionKeys.map(key => item[key] || '').join('');
	    }).join('').trim();
	    await autoTrans(data.judges, name, true);
	  }
	};

	const mypageComments = async data => {
	  try {
	    let list = [];

	    if (data.userHomeDeck.userHomeDeckAnimationMember) {
	      list = [...data.userHomeDeck.userHomeDeckAnimationMember.mypageComments];
	    }

	    if (data.userHomeDeck.userHomeDeckMembers.length) {
	      data.userHomeDeck.userHomeDeckMembers.forEach(member => {
	        member.mypageComments.forEach(comm => {
	          list.push(comm);
	        });
	      });
	    }

	    await transText(list);
	  } catch (e) {}
	};

	const fesDeckReactions = async data => {
	  if (!data.userFesDeck) return;

	  try {
	    let list = [];
	    let members = data.userFesDeck.userFesDeckMembers;

	    for (let member of members) {
	      member.fesTopCharacterReactions.forEach(item => {
	        list.push(item);
	      });
	    }

	    await autoTransText(list);
	  } catch (e) {}
	};

	const topCharacterReaction = async data => {
	  if (!data.topCharacterReaction) return;

	  try {
	    const list = [...data.topCharacterReaction.moveReactions, ...data.topCharacterReaction.skillReleasedReactions, ...data.topCharacterReaction.touchExReactions, ...data.topCharacterReaction.touchReactions, ...data.topCharacterReaction.waitReactions];
	    await autoTransText(list);
	  } catch (e) {}
	};

	const lessonResult = async data => {
	  if (!data.lessonResult) return;
	  let lr = data.lessonResult;

	  try {
	    let list = [];
	    if (lr.produceActCutinComment) list = list.concat(lr.produceActCutinComment); // if (lr.produceActIdolComment) list = list.concat(lr.produceActIdolComment)
	    // if (lr.produceActSupportIdolComments) list = list.concat(lr.produceActSupportIdolComments)

	    if (lr.produceRestBoostIdolComment) list = list.concat(lr.produceRestBoostIdolComment);
	    if (lr.produceRestBoostSupportIdolComment) list = list.concat(lr.produceRestBoostSupportIdolComment);
	    if (lr.produceRestComments) list = list.concat(lr.produceRestComments);
	    await autoTransText(list);
	  } catch (e) {}
	};

	const produceEndWeek = async data => {
	  let staff = data.produceStaffComments || [];
	  let concert = data.produceStaffConcertComments || [];
	  let fail = data.produceStaffFailComments || [];
	  let season = data.produceStaffSeasonComments || [];
	  let list = [...staff, ...concert, ...fail, ...season];
	  await autoTransText(list);
	};

	const resumeGamedata = async data => {
	  if (!data.gameData) return;

	  try {
	    let gData = JSON.parse(data.gameData);

	    if (gData.judges) {
	      await fesMatchConcert(gData);
	    } else {
	      await produceAudition(gData);
	    }

	    data.gameData = JSON.stringify(gData);
	  } catch (e) {
	    log(e);
	  }
	};

	const characterComment = async data => {
	  if (!data.characterComment) return;
	  let list = [];
	  list = list.concat(data.characterComment);
	  await autoTransText(list);
	};

	const helperSupportIdols = async data => {
	  try {
	    let name = data.characterComment + data.producerComment;
	    await autoTrans([data], name, true);
	  } catch (e) {}
	};

	const produceReporterAnswer = async data => {
	  try {
	    let list = data.produceReporterEvent.produceReporterEventAnswers;
	    await autoTransText(list, 'comment2');
	  } catch (e) {}
	};

	const trustLevelUp = async data => {
	  try {
	    let list = data.characterTrustLevelUpComments;
	    await autoTransText(list);
	  } catch (e) {}
	};

	function collectCardName (data) {
	  if (!DEV || !COLLECT_CARD_RATE) return;
	  const normal = [];
	  const sr = [];
	  data.forEach(item => {
	    if (item.buttonImage === 'normal_gasha_button') {
	      item.contents.forEach(cont => {
	        normal.push({
	          name: cont.contentName,
	          rate: cont.rate
	        });
	      });
	    } else if (item.buttonImage === 'sr_up_button') {
	      item.contents.forEach(cont => {
	        sr.push({
	          name: cont.contentName,
	          rate: cont.rate
	        });
	      });
	    }
	  });
	  fetch('http://127.0.0.1:8032/imsccard', {
	    body: JSON.stringify({
	      type: 'normal',
	      text: JSON.stringify(normal)
	    }),
	    method: 'post',
	    mode: 'cors',
	    headers: {
	      'content-type': 'application/json'
	    }
	  });
	  fetch('http://127.0.0.1:8032/imsccard', {
	    body: JSON.stringify({
	      type: 'sr',
	      text: JSON.stringify(sr)
	    }),
	    method: 'post',
	    mode: 'cors',
	    headers: {
	      'content-type': 'application/json'
	    }
	  });
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	var eq_1 = eq;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq_1(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var _assocIndexOf = assocIndexOf;

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	var _listCacheDelete = listCacheDelete;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return _assocIndexOf(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	var _listCacheSet = listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = _listCacheClear;
	ListCache.prototype['delete'] = _listCacheDelete;
	ListCache.prototype.get = _listCacheGet;
	ListCache.prototype.has = _listCacheHas;
	ListCache.prototype.set = _listCacheSet;

	var _ListCache = ListCache;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new _ListCache;
	  this.size = 0;
	}

	var _stackClear = stackClear;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	var _stackDelete = stackDelete;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	var _stackGet = stackGet;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	var _stackHas = stackHas;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject;

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject_1(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = _baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = _root['__core-js_shared__'];

	var _coreJsData = coreJsData;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	var _isMasked = isMasked;

	/** Used for built-in method references. */
	var funcProto$1 = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString$1.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	var _toSource = toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto$2 = Function.prototype,
	    objectProto$3 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$2 = funcProto$2.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString$2.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject_1(value) || _isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(_toSource(value));
	}

	var _baseIsNative = baseIsNative;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = _getValue(object, key);
	  return _baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative;

	/* Built-in method references that are verified to be native. */
	var Map$1 = _getNative(_root, 'Map');

	var _Map = Map$1;

	/* Built-in method references that are verified to be native. */
	var nativeCreate = _getNative(Object, 'create');

	var _nativeCreate = nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (_nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet;

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$4.call(data, key);
	}

	var _hashHas = hashHas;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var _hashSet = hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = _hashClear;
	Hash.prototype['delete'] = _hashDelete;
	Hash.prototype.get = _hashGet;
	Hash.prototype.has = _hashHas;
	Hash.prototype.set = _hashSet;

	var _Hash = Hash;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new _Hash,
	    'map': new (_Map || _ListCache),
	    'string': new _Hash
	  };
	}

	var _mapCacheClear = mapCacheClear;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	var _isKeyable = isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return _isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	var _getMapData = getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = _getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return _getMapData(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return _getMapData(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = _getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = _mapCacheClear;
	MapCache.prototype['delete'] = _mapCacheDelete;
	MapCache.prototype.get = _mapCacheGet;
	MapCache.prototype.has = _mapCacheHas;
	MapCache.prototype.set = _mapCacheSet;

	var _MapCache = MapCache;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof _ListCache) {
	    var pairs = data.__data__;
	    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new _MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	var _stackSet = stackSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new _ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = _stackClear;
	Stack.prototype['delete'] = _stackDelete;
	Stack.prototype.get = _stackGet;
	Stack.prototype.has = _stackHas;
	Stack.prototype.set = _stackSet;

	var _Stack = Stack;

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	var _arrayEach = arrayEach;

	var defineProperty = (function() {
	  try {
	    var func = _getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	var _defineProperty = defineProperty;

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && _defineProperty) {
	    _defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	var _baseAssignValue = baseAssignValue;

	/** Used for built-in method references. */
	var objectProto$6 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty$5.call(object, key) && eq_1(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    _baseAssignValue(object, key, value);
	  }
	}

	var _assignValue = assignValue;

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      _baseAssignValue(object, key, newValue);
	    } else {
	      _assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	var _copyObject = copyObject;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	var _baseTimes = baseTimes;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
	}

	var _baseIsArguments = baseIsArguments;

	/** Used for built-in method references. */
	var objectProto$7 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$7.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
	  return isObjectLike_1(value) && hasOwnProperty$6.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	var isArguments_1 = isArguments;

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	var stubFalse_1 = stubFalse;

	var isBuffer_1 = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports =  exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? _root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse_1;

	module.exports = isBuffer;
	});

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	var _isIndex = isIndex;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
	}

	var isLength_1 = isLength;

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag$1 = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag$1 = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag$1 = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag$1 = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag$1] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag$1] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike_1(value) &&
	    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
	}

	var _baseIsTypedArray = baseIsTypedArray;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary;

	var _nodeUtil = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports =  exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && _freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;
	});

	/* Node.js helper references. */
	var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

	var isTypedArray_1 = isTypedArray;

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray_1(value),
	      isArg = !isArr && isArguments_1(value),
	      isBuff = !isArr && !isArg && isBuffer_1(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? _baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$7.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           _isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys;

	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$9;

	  return value === proto;
	}

	var _isPrototype = isPrototype;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = _overArg(Object.keys, Object);

	var _nativeKeys = nativeKeys;

	/** Used for built-in method references. */
	var objectProto$a = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!_isPrototype(object)) {
	    return _nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$8.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeys = baseKeys;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength_1(value.length) && !isFunction_1(value);
	}

	var isArrayLike_1 = isArrayLike;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys$1(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
	}

	var keys_1 = keys$1;

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && _copyObject(source, keys_1(source), object);
	}

	var _baseAssign = baseAssign;

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _nativeKeysIn = nativeKeysIn;

	/** Used for built-in method references. */
	var objectProto$b = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject_1(object)) {
	    return _nativeKeysIn(object);
	  }
	  var isProto = _isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty$9.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeysIn = baseKeysIn;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn$1(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
	}

	var keysIn_1 = keysIn$1;

	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssignIn(object, source) {
	  return object && _copyObject(source, keysIn_1(source), object);
	}

	var _baseAssignIn = baseAssignIn;

	var _cloneBuffer = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports =  exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? _root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;
	});

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	var _copyArray = copyArray;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	var _arrayFilter = arrayFilter;

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	var stubArray_1 = stubArray;

	/** Used for built-in method references. */
	var objectProto$c = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable$1 = objectProto$c.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable$1.call(object, symbol);
	  });
	};

	var _getSymbols = getSymbols;

	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return _copyObject(source, _getSymbols(source), object);
	}

	var _copySymbols = copySymbols;

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	var _arrayPush = arrayPush;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
	  var result = [];
	  while (object) {
	    _arrayPush(result, _getSymbols(object));
	    object = _getPrototype(object);
	  }
	  return result;
	};

	var _getSymbolsIn = getSymbolsIn;

	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbolsIn(source, object) {
	  return _copyObject(source, _getSymbolsIn(source), object);
	}

	var _copySymbolsIn = copySymbolsIn;

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
	}

	var _baseGetAllKeys = baseGetAllKeys;

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return _baseGetAllKeys(object, keys_1, _getSymbols);
	}

	var _getAllKeys = getAllKeys;

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
	}

	var _getAllKeysIn = getAllKeysIn;

	/* Built-in method references that are verified to be native. */
	var DataView = _getNative(_root, 'DataView');

	var _DataView = DataView;

	/* Built-in method references that are verified to be native. */
	var Promise$1 = _getNative(_root, 'Promise');

	var _Promise = Promise$1;

	/* Built-in method references that are verified to be native. */
	var Set = _getNative(_root, 'Set');

	var _Set = Set;

	/* Built-in method references that are verified to be native. */
	var WeakMap = _getNative(_root, 'WeakMap');

	var _WeakMap = WeakMap;

	/** `Object#toString` result references. */
	var mapTag$1 = '[object Map]',
	    objectTag$2 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag$1 = '[object Set]',
	    weakMapTag$1 = '[object WeakMap]';

	var dataViewTag$1 = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = _toSource(_DataView),
	    mapCtorString = _toSource(_Map),
	    promiseCtorString = _toSource(_Promise),
	    setCtorString = _toSource(_Set),
	    weakMapCtorString = _toSource(_WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = _baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$1) ||
	    (_Map && getTag(new _Map) != mapTag$1) ||
	    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
	    (_Set && getTag(new _Set) != setTag$1) ||
	    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
	  getTag = function(value) {
	    var result = _baseGetTag(value),
	        Ctor = result == objectTag$2 ? value.constructor : undefined,
	        ctorString = Ctor ? _toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag$1;
	        case mapCtorString: return mapTag$1;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag$1;
	        case weakMapCtorString: return weakMapTag$1;
	      }
	    }
	    return result;
	  };
	}

	var _getTag = getTag;

	/** Used for built-in method references. */
	var objectProto$d = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$a = objectProto$d.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty$a.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	var _initCloneArray = initCloneArray;

	/** Built-in value references. */
	var Uint8Array = _root.Uint8Array;

	var _Uint8Array = Uint8Array;

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
	  return result;
	}

	var _cloneArrayBuffer = cloneArrayBuffer;

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	var _cloneDataView = cloneDataView;

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	var _cloneRegExp = cloneRegExp;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	var _cloneSymbol = cloneSymbol;

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	var _cloneTypedArray = cloneTypedArray;

	/** `Object#toString` result references. */
	var boolTag$2 = '[object Boolean]',
	    dateTag$1 = '[object Date]',
	    mapTag$2 = '[object Map]',
	    numberTag$1 = '[object Number]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$2 = '[object Set]',
	    stringTag$2 = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag$1 = '[object ArrayBuffer]',
	    dataViewTag$2 = '[object DataView]',
	    float32Tag$1 = '[object Float32Array]',
	    float64Tag$1 = '[object Float64Array]',
	    int8Tag$1 = '[object Int8Array]',
	    int16Tag$1 = '[object Int16Array]',
	    int32Tag$1 = '[object Int32Array]',
	    uint8Tag$1 = '[object Uint8Array]',
	    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
	    uint16Tag$1 = '[object Uint16Array]',
	    uint32Tag$1 = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag$1:
	      return _cloneArrayBuffer(object);

	    case boolTag$2:
	    case dateTag$1:
	      return new Ctor(+object);

	    case dataViewTag$2:
	      return _cloneDataView(object, isDeep);

	    case float32Tag$1: case float64Tag$1:
	    case int8Tag$1: case int16Tag$1: case int32Tag$1:
	    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
	      return _cloneTypedArray(object, isDeep);

	    case mapTag$2:
	      return new Ctor;

	    case numberTag$1:
	    case stringTag$2:
	      return new Ctor(object);

	    case regexpTag$1:
	      return _cloneRegExp(object);

	    case setTag$2:
	      return new Ctor;

	    case symbolTag:
	      return _cloneSymbol(object);
	  }
	}

	var _initCloneByTag = initCloneByTag;

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject_1(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	var _baseCreate = baseCreate;

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !_isPrototype(object))
	    ? _baseCreate(_getPrototype(object))
	    : {};
	}

	var _initCloneObject = initCloneObject;

	/** `Object#toString` result references. */
	var mapTag$3 = '[object Map]';

	/**
	 * The base implementation of `_.isMap` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 */
	function baseIsMap(value) {
	  return isObjectLike_1(value) && _getTag(value) == mapTag$3;
	}

	var _baseIsMap = baseIsMap;

	/* Node.js helper references. */
	var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

	/**
	 * Checks if `value` is classified as a `Map` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 * @example
	 *
	 * _.isMap(new Map);
	 * // => true
	 *
	 * _.isMap(new WeakMap);
	 * // => false
	 */
	var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

	var isMap_1 = isMap;

	/** `Object#toString` result references. */
	var setTag$3 = '[object Set]';

	/**
	 * The base implementation of `_.isSet` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 */
	function baseIsSet(value) {
	  return isObjectLike_1(value) && _getTag(value) == setTag$3;
	}

	var _baseIsSet = baseIsSet;

	/* Node.js helper references. */
	var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

	/**
	 * Checks if `value` is classified as a `Set` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 * @example
	 *
	 * _.isSet(new Set);
	 * // => true
	 *
	 * _.isSet(new WeakSet);
	 * // => false
	 */
	var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

	var isSet_1 = isSet;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG = 4;

	/** `Object#toString` result references. */
	var argsTag$2 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    boolTag$3 = '[object Boolean]',
	    dateTag$2 = '[object Date]',
	    errorTag$1 = '[object Error]',
	    funcTag$2 = '[object Function]',
	    genTag$1 = '[object GeneratorFunction]',
	    mapTag$4 = '[object Map]',
	    numberTag$2 = '[object Number]',
	    objectTag$3 = '[object Object]',
	    regexpTag$2 = '[object RegExp]',
	    setTag$4 = '[object Set]',
	    stringTag$3 = '[object String]',
	    symbolTag$1 = '[object Symbol]',
	    weakMapTag$2 = '[object WeakMap]';

	var arrayBufferTag$2 = '[object ArrayBuffer]',
	    dataViewTag$3 = '[object DataView]',
	    float32Tag$2 = '[object Float32Array]',
	    float64Tag$2 = '[object Float64Array]',
	    int8Tag$2 = '[object Int8Array]',
	    int16Tag$2 = '[object Int16Array]',
	    int32Tag$2 = '[object Int32Array]',
	    uint8Tag$2 = '[object Uint8Array]',
	    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
	    uint16Tag$2 = '[object Uint16Array]',
	    uint32Tag$2 = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] =
	cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] =
	cloneableTags[boolTag$3] = cloneableTags[dateTag$2] =
	cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
	cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
	cloneableTags[int32Tag$2] = cloneableTags[mapTag$4] =
	cloneableTags[numberTag$2] = cloneableTags[objectTag$3] =
	cloneableTags[regexpTag$2] = cloneableTags[setTag$4] =
	cloneableTags[stringTag$3] = cloneableTags[symbolTag$1] =
	cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
	cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
	cloneableTags[errorTag$1] = cloneableTags[funcTag$2] =
	cloneableTags[weakMapTag$2] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG;

	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject_1(value)) {
	    return value;
	  }
	  var isArr = isArray_1(value);
	  if (isArr) {
	    result = _initCloneArray(value);
	    if (!isDeep) {
	      return _copyArray(value, result);
	    }
	  } else {
	    var tag = _getTag(value),
	        isFunc = tag == funcTag$2 || tag == genTag$1;

	    if (isBuffer_1(value)) {
	      return _cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag$3 || tag == argsTag$2 || (isFunc && !object)) {
	      result = (isFlat || isFunc) ? {} : _initCloneObject(value);
	      if (!isDeep) {
	        return isFlat
	          ? _copySymbolsIn(value, _baseAssignIn(result, value))
	          : _copySymbols(value, _baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = _initCloneByTag(value, tag, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new _Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (isSet_1(value)) {
	    value.forEach(function(subValue) {
	      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	    });
	  } else if (isMap_1(value)) {
	    value.forEach(function(subValue, key) {
	      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	    });
	  }

	  var keysFunc = isFull
	    ? (isFlat ? _getAllKeysIn : _getAllKeys)
	    : (isFlat ? keysIn : keys_1);

	  var props = isArr ? undefined : keysFunc(value);
	  _arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}

	var _baseClone = baseClone;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG$1 = 1,
	    CLONE_SYMBOLS_FLAG$1 = 4;

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return _baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
	}

	var cloneDeep_1 = cloneDeep;

	/** `Object#toString` result references. */
	var regexpTag$3 = '[object RegExp]';

	/**
	 * The base implementation of `_.isRegExp` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	 */
	function baseIsRegExp(value) {
	  return isObjectLike_1(value) && _baseGetTag(value) == regexpTag$3;
	}

	var _baseIsRegExp = baseIsRegExp;

	/* Node.js helper references. */
	var nodeIsRegExp = _nodeUtil && _nodeUtil.isRegExp;

	/**
	 * Checks if `value` is classified as a `RegExp` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	 * @example
	 *
	 * _.isRegExp(/abc/);
	 * // => true
	 *
	 * _.isRegExp('/abc/');
	 * // => false
	 */
	var isRegExp = nodeIsRegExp ? _baseUnary(nodeIsRegExp) : _baseIsRegExp;

	var isRegExp_1 = isRegExp;

	const logStyles = color => ["background-color:".concat(color, ";color:#fff;padding:0 0.3em"), '', "color:".concat(color, ";text-decoration:underline")];

	const requestLog = (method, color, args, data) => {
	  if (DEV) {
	    let _data = data;

	    if (data) {
	      _data = cloneDeep_1(data);
	    }

	    log("%c".concat(method, "%c %c").concat(args[0]), ...logStyles(color), args[1] || '', '\n=>', _data);
	  }
	};

	const requestRouter = async (data, type, list) => {
	  try {
	    for (let [paths, handles] of list) {
	      if (!Array.isArray(paths)) paths = [paths];
	      let pass = false;

	      for (let path of paths) {
	        if (isString_1(path) && path === type) {
	          pass = true;
	        } else if (isRegExp_1(path) && path.test(type)) {
	          pass = true;
	        }
	      }

	      if (pass) {
	        if (!Array.isArray(handles)) handles = [handles];

	        for (let handle of handles) {
	          if (isString_1(handle)) {
	            if (handle === 'storyTitle') collectStoryTitle(data);else if (handle === 'cardName') collectCardName(data);
	          } else {
	            await handle(data);
	          }
	        }
	      }
	    }
	  } catch (e) {
	    log(e);
	  }
	};

	const requestOfGet = [[[/^userSupportIdols\/\d+$/, /^userSupportIdols\/statusMax/, /^produceTeachingSupportIdols\/\d+$/], [supportSkill, userSptIdolsSkill, 'storyTitle']], [/^userProduce(Teaching)?SupportIdols\/\d+$/, [supportSkill, userProSptIdolsSkill]], [/^userReserveSupportIdols\/userSupportIdol\/\d+$/, [supportSkill, reserveUserSptIdolsSkill]], [/^userIdols\/\d+\/produceExSkillTop$/, produceExSkillTop], [/^userSupportIdols\/\d+\/produceExSkillTop$/, produceExSkillTop], [[/^userIdols\/\d+$/, /^userIdols\/statusMax$/, /^produceTeachingIdols\/\d+$/], [userIdolsSkill, 'storyTitle']], [[/^userProduce(Teaching)?Idols\/\d+$/, 'userProduceTeachingIdol'], userProIdolsSkill], [/^userReserveIdols\/userIdol\/\d+$/, reserveUserIdolsSkill], [/^userFesIdols\/\d+$/, userFesIdolsSkill], [['userProduces/skillPanels', 'userProduceTeachings/skillPanels'], proSkillPanels], ['userMissions', transMission], [/^fesRaidEvents\/\d+\/rewards$/, fesRaidMission], [['characterAlbums', 'album/top'], 'storyTitle'], [['userShops', 'userIdolPieceShops'], transShopItem], [userItemTypes, transUserItem], [[/^userPresents\?limit=/, /^userPresentHistories\?limit=/], transPresentItem], [/gashaGroups\/\d+\/rates/, 'cardName'], ['userProduces', [topCharacterReaction]], [/^fes(Match)?Concert\/actions\/resume$/, [resumeGamedata, resumeGameSkill]], [/earthUsers\/[^\/]+\/userFesIdols\/\d+$/, otherFesIdolSkill]];
	const requestOfPost = [['myPage', [reportMission, mypageComments]], [/^(produceMarathons|fesMarathons|trainingEvents)\/\d+\/top$/, [fesRecomMission, transAccumulatedPresent]], [/userIdols\/\d+\/produceExSkills\/\d+\/actions\/set/, userIdolsSkill], ['userShops/actions/purchase', transShopPurchase], [/produces\/\d+\/actions\/ready/, transUserItem], [/userPresents\/\d+\/actions\/receive/, transReceivePresent], [/userMissions\/\d+\/actions\/receive/, transReceiveMission], ['userLoginBonuses', transLoginBonus], ['fesTop', [transFesReward, fesDeckReactions]], [[/^userProduce(Teaching)?s\/skillPanels\/\d+$/, /^userProduces\/limitedSkills\/\d+$/], proSkillPanels], [/userSupportIdols\/\d+\/produceExSkills\/\d+\/actions\/set/, [userSptIdolsSkill, supportSkill]], [/^produces\/actions\/(resume|next)$/, [ideaNotesSkill, topCharacterReaction, produceEndWeek, resumeGamedata, characterComment, produceAudition, produceReporterAnswer, supportSkill]], [['produces/actions/resume', 'produces/actions/finish', 'produceTeachings/resume'], [produceFinish, resumeGameSkill]], ['produces/actions/endWeek', produceEndWeek], ['produces/actions/act', [lessonResult, noteResultSkill]], [/^fes(Match)?Concert\/actions\/start$/, [fesMatchConcert, fesMatchConcertSkill]], [/^fes(Match)?Concert\/actions\/resume$/, [resumeGamedata, resumeGameSkill]], ['produces/actions/result', [trustLevelUp, produceResultSkill]], [[/^produce(Teaching)?s\/(\d+\/audition|concert)\/actions\/start$/, /^produceTeachings\/(auditions|concerts)\/start$/], [auditionSkill]], [/^produces\/(\d+\/audition|concert)\/actions\/(start|finish)$/, [produceAudition, characterComment]], ['userProduceHelperSupportIdols', helperSupportIdols], [['produceTeachings/resume', 'produceTeachings/next'], [teachingMission, supportSkill]]];
	const requestOfPatch = [[/^userSupportIdols\/\d+$/, supportSkill], ['userFesDecks', userFesDeck]];
	async function requestHook() {
	  const request = await getRequest();
	  if (!request || !request.get) return; // GET

	  const originGet = request.get;

	  request.get = async function (...args) {
	    const type = args[0];
	    const res = await originGet.apply(this, args);
	    if (!type) return res;
	    let data = res.body;
	    requestLog('GET', '#009688', args, data);
	    await requestRouter(data, type, requestOfGet);
	    return res;
	  }; // PATCH


	  const originPatch = request.patch;

	  request.patch = async function (...args) {
	    const type = args[0];
	    const res = await originPatch.apply(this, args);
	    if (!type) return res;
	    let data = res.body;
	    requestLog('PATCH', '#8BC34A', args, data);
	    await requestRouter(data, type, requestOfPatch);
	    return res;
	  }; // POST


	  const originPost = request.post;

	  request.post = async function (...args) {
	    const type = args[0];
	    const res = await originPost.apply(this, args);
	    if (!type) return res;
	    let data = res.body;
	    requestLog('POST', '#3F51B5', args, data);
	    await requestRouter(data, type, requestOfPost);
	    return res;
	  }; // PUT


	  const originPut = request.put;

	  request.put = async function (...args) {
	    const type = args[0];
	    const res = await originPut.apply(this, args);
	    if (!type) return res;
	    let data = res.body;
	    requestLog('PUT', '#9C27B0', args, data);
	    return res;
	  };
	}

	const imageMap = new Map();
	let loaded$6 = false;

	const getImage = async () => {
	  if (!loaded$6) {
	    let csv = await getLocalData('image');

	    if (!csv) {
	      csv = await fetchWithHash('/data/image.csv');
	      setLocalData('image', csv);
	    }

	    const list = parseCsv(csv);
	    list.forEach(item => {
	      if (item && item.name) {
	        const name = trim(item.name);
	        const url = trim(item.url);
	        const version = trim(item.version) || '1';

	        if (name && url) {
	          imageMap.set(name, {
	            url,
	            version
	          });
	        }
	      }
	    });
	    loaded$6 = true;
	  }

	  return imageMap;
	};

	const logStyles$1 = color => ["background-color:".concat(color, ";color:#fff;padding:0 0.3em"), '', "color:".concat(color, ";text-decoration:underline")];

	const imageLog = (method, color, path, url) => {
	  if (DEV) {
	    log("%c".concat(method, "%c %c").concat(path), ...logStyles$1(color), '\n=>', url);
	  }
	};

	let replaced = false;
	async function resourceHook() {
	  let aoba = await getAoba();
	  if (!aoba || replaced) return;
	  const originLoadElement = aoba.loaders.Resource.prototype._loadElement;

	  aoba.loaders.Resource.prototype._loadElement = async function (type) {
	    if (DEV && type === 'image') {
	      imageLog('IMAGE', '#ed9636', this.name, this.url);
	    }

	    try {
	      const imageMap = await getImage();

	      if (type === 'image' && imageMap.has(this.name)) {
	        const data = imageMap.get(this.name);

	        if (this.url.endsWith("v=".concat(data.version))) {
	          this.url = "".concat(config.origin, "/data/image/").concat(data.url, "?V=").concat(config.hash);
	          this.crossOrigin = true;
	        } else {
	          log('%cimage version not match', 'color:#fc4175');
	        }
	      }
	    } catch (e) {}

	    return originLoadElement.call(this, type);
	  };

	  replaced = true;
	}

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return _root.Date.now();
	};

	var now_1 = now;

	/** `Object#toString` result references. */
	var symbolTag$2 = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag$2);
	}

	var isSymbol_1 = isSymbol;

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol_1(value)) {
	    return NAN;
	  }
	  if (isObject_1(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject_1(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	var toNumber_1 = toNumber;

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber_1(wait) || 0;
	  if (isObject_1(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        timeWaiting = wait - timeSinceLastCall;

	    return maxing
	      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
	      : timeWaiting;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now_1();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now_1());
	  }

	  function debounced() {
	    var time = now_1(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        clearTimeout(timerId);
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	var debounce_1 = debounce;

	var papaparse = createCommonjsModule(function (module, exports) {
	/* @license
	Papa Parse
	v4.6.3
	https://github.com/mholt/PapaParse
	License: MIT
	*/

	// Polyfills
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Polyfill
	if (!Array.isArray)
	{
		Array.isArray = function(arg) {
			return Object.prototype.toString.call(arg) === '[object Array]';
		};
	}

	(function(root, factory)
	{
		/* globals define */
		{
			// Node. Does not work with strict CommonJS, but
			// only CommonJS-like environments that support module.exports,
			// like Node.
			module.exports = factory();
		}
	}(commonjsGlobal, function()
	{

		var global = (function() {
			// alternative method, similar to `Function('return this')()`
			// but without using `eval` (which is disabled when
			// using Content Security Policy).

			if (typeof self !== 'undefined') { return self; }
			if (typeof window !== 'undefined') { return window; }
			if (typeof global !== 'undefined') { return global; }

			// When running tests none of the above have been defined
			return {};
		})();

		var IS_WORKER = !global.document && !!global.postMessage,
			IS_PAPA_WORKER = IS_WORKER && /(\?|&)papaworker(=|&|$)/.test(global.location.search),
			LOADED_SYNC = false, AUTO_SCRIPT_PATH;
		var workers = {}, workerIdCounter = 0;

		var Papa = {};

		Papa.parse = CsvToJson;
		Papa.unparse = JsonToCsv;

		Papa.RECORD_SEP = String.fromCharCode(30);
		Papa.UNIT_SEP = String.fromCharCode(31);
		Papa.BYTE_ORDER_MARK = '\ufeff';
		Papa.BAD_DELIMITERS = ['\r', '\n', '"', Papa.BYTE_ORDER_MARK];
		Papa.WORKERS_SUPPORTED = !IS_WORKER && !!global.Worker;
		Papa.SCRIPT_PATH = null;	// Must be set by your code if you use workers and this lib is loaded asynchronously
		Papa.NODE_STREAM_INPUT = 1;

		// Configurable chunk sizes for local and remote files, respectively
		Papa.LocalChunkSize = 1024 * 1024 * 10;	// 10 MB
		Papa.RemoteChunkSize = 1024 * 1024 * 5;	// 5 MB
		Papa.DefaultDelimiter = ',';			// Used if not specified and detection fails

		// Exposed for testing and development only
		Papa.Parser = Parser;
		Papa.ParserHandle = ParserHandle;
		Papa.NetworkStreamer = NetworkStreamer;
		Papa.FileStreamer = FileStreamer;
		Papa.StringStreamer = StringStreamer;
		Papa.ReadableStreamStreamer = ReadableStreamStreamer;
		if (typeof PAPA_BROWSER_CONTEXT === 'undefined') {
			Papa.DuplexStreamStreamer = DuplexStreamStreamer;
		}

		if (global.jQuery)
		{
			var $ = global.jQuery;
			$.fn.parse = function(options)
			{
				var config = options.config || {};
				var queue = [];

				this.each(function(idx)
				{
					var supported = $(this).prop('tagName').toUpperCase() === 'INPUT'
									&& $(this).attr('type').toLowerCase() === 'file'
									&& global.FileReader;

					if (!supported || !this.files || this.files.length === 0)
						return true;	// continue to next input element

					for (var i = 0; i < this.files.length; i++)
					{
						queue.push({
							file: this.files[i],
							inputElem: this,
							instanceConfig: $.extend({}, config)
						});
					}
				});

				parseNextFile();	// begin parsing
				return this;		// maintains chainability


				function parseNextFile()
				{
					if (queue.length === 0)
					{
						if (isFunction(options.complete))
							options.complete();
						return;
					}

					var f = queue[0];

					if (isFunction(options.before))
					{
						var returned = options.before(f.file, f.inputElem);

						if (typeof returned === 'object')
						{
							if (returned.action === 'abort')
							{
								error('AbortError', f.file, f.inputElem, returned.reason);
								return;	// Aborts all queued files immediately
							}
							else if (returned.action === 'skip')
							{
								fileComplete();	// parse the next file in the queue, if any
								return;
							}
							else if (typeof returned.config === 'object')
								f.instanceConfig = $.extend(f.instanceConfig, returned.config);
						}
						else if (returned === 'skip')
						{
							fileComplete();	// parse the next file in the queue, if any
							return;
						}
					}

					// Wrap up the user's complete callback, if any, so that ours also gets executed
					var userCompleteFunc = f.instanceConfig.complete;
					f.instanceConfig.complete = function(results)
					{
						if (isFunction(userCompleteFunc))
							userCompleteFunc(results, f.file, f.inputElem);
						fileComplete();
					};

					Papa.parse(f.file, f.instanceConfig);
				}

				function error(name, file, elem, reason)
				{
					if (isFunction(options.error))
						options.error({name: name}, file, elem, reason);
				}

				function fileComplete()
				{
					queue.splice(0, 1);
					parseNextFile();
				}
			};
		}


		if (IS_PAPA_WORKER)
		{
			global.onmessage = workerThreadReceivedMessage;
		}
		else if (Papa.WORKERS_SUPPORTED)
		{
			AUTO_SCRIPT_PATH = getScriptPath();

			// Check if the script was loaded synchronously
			if (!document.body)
			{
				// Body doesn't exist yet, must be synchronous
				LOADED_SYNC = true;
			}
			else
			{
				document.addEventListener('DOMContentLoaded', function() {
					LOADED_SYNC = true;
				}, true);
			}
		}




		function CsvToJson(_input, _config)
		{
			_config = _config || {};
			var dynamicTyping = _config.dynamicTyping || false;
			if (isFunction(dynamicTyping)) {
				_config.dynamicTypingFunction = dynamicTyping;
				// Will be filled on first row call
				dynamicTyping = {};
			}
			_config.dynamicTyping = dynamicTyping;

			_config.transform = isFunction(_config.transform) ? _config.transform : false;

			if (_config.worker && Papa.WORKERS_SUPPORTED)
			{
				var w = newWorker();

				w.userStep = _config.step;
				w.userChunk = _config.chunk;
				w.userComplete = _config.complete;
				w.userError = _config.error;

				_config.step = isFunction(_config.step);
				_config.chunk = isFunction(_config.chunk);
				_config.complete = isFunction(_config.complete);
				_config.error = isFunction(_config.error);
				delete _config.worker;	// prevent infinite loop

				w.postMessage({
					input: _input,
					config: _config,
					workerId: w.id
				});

				return;
			}

			var streamer = null;
			if (_input === Papa.NODE_STREAM_INPUT && typeof PAPA_BROWSER_CONTEXT === 'undefined')
			{
				// create a node Duplex stream for use
				// with .pipe
				streamer = new DuplexStreamStreamer(_config);
				return streamer.getStream();
			}
			else if (typeof _input === 'string')
			{
				if (_config.download)
					streamer = new NetworkStreamer(_config);
				else
					streamer = new StringStreamer(_config);
			}
			else if (_input.readable === true && isFunction(_input.read) && isFunction(_input.on))
			{
				streamer = new ReadableStreamStreamer(_config);
			}
			else if ((global.File && _input instanceof File) || _input instanceof Object)	// ...Safari. (see issue #106)
				streamer = new FileStreamer(_config);

			return streamer.stream(_input);
		}






		function JsonToCsv(_input, _config)
		{
			// Default configuration

			/** whether to surround every datum with quotes */
			var _quotes = false;

			/** whether to write headers */
			var _writeHeader = true;

			/** delimiting character(s) */
			var _delimiter = ',';

			/** newline character(s) */
			var _newline = '\r\n';

			/** quote character */
			var _quoteChar = '"';

			/** whether to skip empty lines */
			var _skipEmptyLines = false;

			unpackConfig();

			var quoteCharRegex = new RegExp(escapeRegExp(_quoteChar), 'g');

			if (typeof _input === 'string')
				_input = JSON.parse(_input);

			if (Array.isArray(_input))
			{
				if (!_input.length || Array.isArray(_input[0]))
					return serialize(null, _input, _skipEmptyLines);
				else if (typeof _input[0] === 'object')
					return serialize(objectKeys(_input[0]), _input, _skipEmptyLines);
			}
			else if (typeof _input === 'object')
			{
				if (typeof _input.data === 'string')
					_input.data = JSON.parse(_input.data);

				if (Array.isArray(_input.data))
				{
					if (!_input.fields)
						_input.fields =  _input.meta && _input.meta.fields;

					if (!_input.fields)
						_input.fields =  Array.isArray(_input.data[0])
							? _input.fields
							: objectKeys(_input.data[0]);

					if (!(Array.isArray(_input.data[0])) && typeof _input.data[0] !== 'object')
						_input.data = [_input.data];	// handles input like [1,2,3] or ['asdf']
				}

				return serialize(_input.fields || [], _input.data || [], _skipEmptyLines);
			}

			// Default (any valid paths should return before this)
			throw 'exception: Unable to serialize unrecognized input';


			function unpackConfig()
			{
				if (typeof _config !== 'object')
					return;

				if (typeof _config.delimiter === 'string'
	                && !Papa.BAD_DELIMITERS.filter(function(value) { return _config.delimiter.indexOf(value) !== -1; }).length)
				{
					_delimiter = _config.delimiter;
				}

				if (typeof _config.quotes === 'boolean'
					|| Array.isArray(_config.quotes))
					_quotes = _config.quotes;

				if (typeof _config.skipEmptyLines === 'boolean'
					|| typeof _config.skipEmptyLines === 'string')
					_skipEmptyLines = _config.skipEmptyLines;

				if (typeof _config.newline === 'string')
					_newline = _config.newline;

				if (typeof _config.quoteChar === 'string')
					_quoteChar = _config.quoteChar;

				if (typeof _config.header === 'boolean')
					_writeHeader = _config.header;
			}


			/** Turns an object's keys into an array */
			function objectKeys(obj)
			{
				if (typeof obj !== 'object')
					return [];
				var keys = [];
				for (var key in obj)
					keys.push(key);
				return keys;
			}

			/** The double for loop that iterates the data and writes out a CSV string including header row */
			function serialize(fields, data, skipEmptyLines)
			{
				var csv = '';

				if (typeof fields === 'string')
					fields = JSON.parse(fields);
				if (typeof data === 'string')
					data = JSON.parse(data);

				var hasHeader = Array.isArray(fields) && fields.length > 0;
				var dataKeyedByField = !(Array.isArray(data[0]));

				// If there a header row, write it first
				if (hasHeader && _writeHeader)
				{
					for (var i = 0; i < fields.length; i++)
					{
						if (i > 0)
							csv += _delimiter;
						csv += safe(fields[i], i);
					}
					if (data.length > 0)
						csv += _newline;
				}

				// Then write out the data
				for (var row = 0; row < data.length; row++)
				{
					var maxCol = hasHeader ? fields.length : data[row].length;

					var emptyLine = false;
					var nullLine = hasHeader ? Object.keys(data[row]).length === 0 : data[row].length === 0;
					if (skipEmptyLines && !hasHeader)
					{
						emptyLine = skipEmptyLines === 'greedy' ? data[row].join('').trim() === '' : data[row].length === 1 && data[row][0].length === 0;
					}
					if (skipEmptyLines === 'greedy' && hasHeader) {
						var line = [];
						for (var c = 0; c < maxCol; c++) {
							var cx = dataKeyedByField ? fields[c] : c;
							line.push(data[row][cx]);
						}
						emptyLine = line.join('').trim() === '';
					}
					if (!emptyLine)
					{
						for (var col = 0; col < maxCol; col++)
						{
							if (col > 0 && !nullLine)
								csv += _delimiter;
							var colIdx = hasHeader && dataKeyedByField ? fields[col] : col;
							csv += safe(data[row][colIdx], col);
						}
						if (row < data.length - 1 && (!skipEmptyLines || (maxCol > 0 && !nullLine)))
						{
							csv += _newline;
						}
					}
				}
				return csv;
			}

			/** Encloses a value around quotes if needed (makes a value safe for CSV insertion) */
			function safe(str, col)
			{
				if (typeof str === 'undefined' || str === null)
					return '';

				if (str.constructor === Date)
					return JSON.stringify(str).slice(1, 25);

				str = str.toString().replace(quoteCharRegex, _quoteChar + _quoteChar);

				var needsQuotes = (typeof _quotes === 'boolean' && _quotes)
								|| (Array.isArray(_quotes) && _quotes[col])
								|| hasAny(str, Papa.BAD_DELIMITERS)
								|| str.indexOf(_delimiter) > -1
								|| str.charAt(0) === ' '
								|| str.charAt(str.length - 1) === ' ';

				return needsQuotes ? _quoteChar + str + _quoteChar : str;
			}

			function hasAny(str, substrings)
			{
				for (var i = 0; i < substrings.length; i++)
					if (str.indexOf(substrings[i]) > -1)
						return true;
				return false;
			}
		}

		/** ChunkStreamer is the base prototype for various streamer implementations. */
		function ChunkStreamer(config)
		{
			this._handle = null;
			this._finished = false;
			this._completed = false;
			this._input = null;
			this._baseIndex = 0;
			this._partialLine = '';
			this._rowCount = 0;
			this._start = 0;
			this._nextChunk = null;
			this.isFirstChunk = true;
			this._completeResults = {
				data: [],
				errors: [],
				meta: {}
			};
			replaceConfig.call(this, config);

			this.parseChunk = function(chunk, isFakeChunk)
			{
				// First chunk pre-processing
				if (this.isFirstChunk && isFunction(this._config.beforeFirstChunk))
				{
					var modifiedChunk = this._config.beforeFirstChunk(chunk);
					if (modifiedChunk !== undefined)
						chunk = modifiedChunk;
				}
				this.isFirstChunk = false;

				// Rejoin the line we likely just split in two by chunking the file
				var aggregate = this._partialLine + chunk;
				this._partialLine = '';

				var results = this._handle.parse(aggregate, this._baseIndex, !this._finished);

				if (this._handle.paused() || this._handle.aborted())
					return;

				var lastIndex = results.meta.cursor;

				if (!this._finished)
				{
					this._partialLine = aggregate.substring(lastIndex - this._baseIndex);
					this._baseIndex = lastIndex;
				}

				if (results && results.data)
					this._rowCount += results.data.length;

				var finishedIncludingPreview = this._finished || (this._config.preview && this._rowCount >= this._config.preview);

				if (IS_PAPA_WORKER)
				{
					global.postMessage({
						results: results,
						workerId: Papa.WORKER_ID,
						finished: finishedIncludingPreview
					});
				}
				else if (isFunction(this._config.chunk) && !isFakeChunk)
				{
					this._config.chunk(results, this._handle);
					if (this._handle.paused() || this._handle.aborted())
						return;
					results = undefined;
					this._completeResults = undefined;
				}

				if (!this._config.step && !this._config.chunk) {
					this._completeResults.data = this._completeResults.data.concat(results.data);
					this._completeResults.errors = this._completeResults.errors.concat(results.errors);
					this._completeResults.meta = results.meta;
				}

				if (!this._completed && finishedIncludingPreview && isFunction(this._config.complete) && (!results || !results.meta.aborted)) {
					this._config.complete(this._completeResults, this._input);
					this._completed = true;
				}

				if (!finishedIncludingPreview && (!results || !results.meta.paused))
					this._nextChunk();

				return results;
			};

			this._sendError = function(error)
			{
				if (isFunction(this._config.error))
					this._config.error(error);
				else if (IS_PAPA_WORKER && this._config.error)
				{
					global.postMessage({
						workerId: Papa.WORKER_ID,
						error: error,
						finished: false
					});
				}
			};

			function replaceConfig(config)
			{
				// Deep-copy the config so we can edit it
				var configCopy = copy(config);
				configCopy.chunkSize = parseInt(configCopy.chunkSize);	// parseInt VERY important so we don't concatenate strings!
				if (!config.step && !config.chunk)
					configCopy.chunkSize = null;  // disable Range header if not streaming; bad values break IIS - see issue #196
				this._handle = new ParserHandle(configCopy);
				this._handle.streamer = this;
				this._config = configCopy;	// persist the copy to the caller
			}
		}


		function NetworkStreamer(config)
		{
			config = config || {};
			if (!config.chunkSize)
				config.chunkSize = Papa.RemoteChunkSize;
			ChunkStreamer.call(this, config);

			var xhr;

			if (IS_WORKER)
			{
				this._nextChunk = function()
				{
					this._readChunk();
					this._chunkLoaded();
				};
			}
			else
			{
				this._nextChunk = function()
				{
					this._readChunk();
				};
			}

			this.stream = function(url)
			{
				this._input = url;
				this._nextChunk();	// Starts streaming
			};

			this._readChunk = function()
			{
				if (this._finished)
				{
					this._chunkLoaded();
					return;
				}

				xhr = new XMLHttpRequest();

				if (this._config.withCredentials)
				{
					xhr.withCredentials = this._config.withCredentials;
				}

				if (!IS_WORKER)
				{
					xhr.onload = bindFunction(this._chunkLoaded, this);
					xhr.onerror = bindFunction(this._chunkError, this);
				}

				xhr.open('GET', this._input, !IS_WORKER);
				// Headers can only be set when once the request state is OPENED
				if (this._config.downloadRequestHeaders)
				{
					var headers = this._config.downloadRequestHeaders;

					for (var headerName in headers)
					{
						xhr.setRequestHeader(headerName, headers[headerName]);
					}
				}

				if (this._config.chunkSize)
				{
					var end = this._start + this._config.chunkSize - 1;	// minus one because byte range is inclusive
					xhr.setRequestHeader('Range', 'bytes=' + this._start + '-' + end);
					xhr.setRequestHeader('If-None-Match', 'webkit-no-cache'); // https://bugs.webkit.org/show_bug.cgi?id=82672
				}

				try {
					xhr.send();
				}
				catch (err) {
					this._chunkError(err.message);
				}

				if (IS_WORKER && xhr.status === 0)
					this._chunkError();
				else
					this._start += this._config.chunkSize;
			};

			this._chunkLoaded = function()
			{
				if (xhr.readyState !== 4)
					return;

				if (xhr.status < 200 || xhr.status >= 400)
				{
					this._chunkError();
					return;
				}

				this._finished = !this._config.chunkSize || this._start > getFileSize(xhr);
				this.parseChunk(xhr.responseText);
			};

			this._chunkError = function(errorMessage)
			{
				var errorText = xhr.statusText || errorMessage;
				this._sendError(new Error(errorText));
			};

			function getFileSize(xhr)
			{
				var contentRange = xhr.getResponseHeader('Content-Range');
				if (contentRange === null) { // no content range, then finish!
					return -1;
				}
				return parseInt(contentRange.substr(contentRange.lastIndexOf('/') + 1));
			}
		}
		NetworkStreamer.prototype = Object.create(ChunkStreamer.prototype);
		NetworkStreamer.prototype.constructor = NetworkStreamer;


		function FileStreamer(config)
		{
			config = config || {};
			if (!config.chunkSize)
				config.chunkSize = Papa.LocalChunkSize;
			ChunkStreamer.call(this, config);

			var reader, slice;

			// FileReader is better than FileReaderSync (even in worker) - see http://stackoverflow.com/q/24708649/1048862
			// But Firefox is a pill, too - see issue #76: https://github.com/mholt/PapaParse/issues/76
			var usingAsyncReader = typeof FileReader !== 'undefined';	// Safari doesn't consider it a function - see issue #105

			this.stream = function(file)
			{
				this._input = file;
				slice = file.slice || file.webkitSlice || file.mozSlice;

				if (usingAsyncReader)
				{
					reader = new FileReader();		// Preferred method of reading files, even in workers
					reader.onload = bindFunction(this._chunkLoaded, this);
					reader.onerror = bindFunction(this._chunkError, this);
				}
				else
					reader = new FileReaderSync();	// Hack for running in a web worker in Firefox

				this._nextChunk();	// Starts streaming
			};

			this._nextChunk = function()
			{
				if (!this._finished && (!this._config.preview || this._rowCount < this._config.preview))
					this._readChunk();
			};

			this._readChunk = function()
			{
				var input = this._input;
				if (this._config.chunkSize)
				{
					var end = Math.min(this._start + this._config.chunkSize, this._input.size);
					input = slice.call(input, this._start, end);
				}
				var txt = reader.readAsText(input, this._config.encoding);
				if (!usingAsyncReader)
					this._chunkLoaded({ target: { result: txt } });	// mimic the async signature
			};

			this._chunkLoaded = function(event)
			{
				// Very important to increment start each time before handling results
				this._start += this._config.chunkSize;
				this._finished = !this._config.chunkSize || this._start >= this._input.size;
				this.parseChunk(event.target.result);
			};

			this._chunkError = function()
			{
				this._sendError(reader.error);
			};

		}
		FileStreamer.prototype = Object.create(ChunkStreamer.prototype);
		FileStreamer.prototype.constructor = FileStreamer;


		function StringStreamer(config)
		{
			config = config || {};
			ChunkStreamer.call(this, config);

			var remaining;
			this.stream = function(s)
			{
				remaining = s;
				return this._nextChunk();
			};
			this._nextChunk = function()
			{
				if (this._finished) return;
				var size = this._config.chunkSize;
				var chunk = size ? remaining.substr(0, size) : remaining;
				remaining = size ? remaining.substr(size) : '';
				this._finished = !remaining;
				return this.parseChunk(chunk);
			};
		}
		StringStreamer.prototype = Object.create(StringStreamer.prototype);
		StringStreamer.prototype.constructor = StringStreamer;


		function ReadableStreamStreamer(config)
		{
			config = config || {};

			ChunkStreamer.call(this, config);

			var queue = [];
			var parseOnData = true;
			var streamHasEnded = false;

			this.pause = function()
			{
				ChunkStreamer.prototype.pause.apply(this, arguments);
				this._input.pause();
			};

			this.resume = function()
			{
				ChunkStreamer.prototype.resume.apply(this, arguments);
				this._input.resume();
			};

			this.stream = function(stream)
			{
				this._input = stream;

				this._input.on('data', this._streamData);
				this._input.on('end', this._streamEnd);
				this._input.on('error', this._streamError);
			};

			this._checkIsFinished = function()
			{
				if (streamHasEnded && queue.length === 1) {
					this._finished = true;
				}
			};

			this._nextChunk = function()
			{
				this._checkIsFinished();
				if (queue.length)
				{
					this.parseChunk(queue.shift());
				}
				else
				{
					parseOnData = true;
				}
			};

			this._streamData = bindFunction(function(chunk)
			{
				try
				{
					queue.push(typeof chunk === 'string' ? chunk : chunk.toString(this._config.encoding));

					if (parseOnData)
					{
						parseOnData = false;
						this._checkIsFinished();
						this.parseChunk(queue.shift());
					}
				}
				catch (error)
				{
					this._streamError(error);
				}
			}, this);

			this._streamError = bindFunction(function(error)
			{
				this._streamCleanUp();
				this._sendError(error);
			}, this);

			this._streamEnd = bindFunction(function()
			{
				this._streamCleanUp();
				streamHasEnded = true;
				this._streamData('');
			}, this);

			this._streamCleanUp = bindFunction(function()
			{
				this._input.removeListener('data', this._streamData);
				this._input.removeListener('end', this._streamEnd);
				this._input.removeListener('error', this._streamError);
			}, this);
		}
		ReadableStreamStreamer.prototype = Object.create(ChunkStreamer.prototype);
		ReadableStreamStreamer.prototype.constructor = ReadableStreamStreamer;


		function DuplexStreamStreamer(_config) {
			var Duplex = require('stream').Duplex;
			var config = copy(_config);
			var parseOnWrite = true;
			var writeStreamHasFinished = false;
			var parseCallbackQueue = [];
			var stream = null;

			this._onCsvData = function(results)
			{
				var data = results.data;
				for (var i = 0; i < data.length; i++) {
					if (!stream.push(data[i]) && !this._handle.paused()) {
						// the writeable consumer buffer has filled up
						// so we need to pause until more items
						// can be processed
						this._handle.pause();
					}
				}
			};

			this._onCsvComplete = function()
			{
				// node will finish the read stream when
				// null is pushed
				stream.push(null);
			};

			config.step = bindFunction(this._onCsvData, this);
			config.complete = bindFunction(this._onCsvComplete, this);
			ChunkStreamer.call(this, config);

			this._nextChunk = function()
			{
				if (writeStreamHasFinished && parseCallbackQueue.length === 1) {
					this._finished = true;
				}
				if (parseCallbackQueue.length) {
					parseCallbackQueue.shift()();
				} else {
					parseOnWrite = true;
				}
			};

			this._addToParseQueue = function(chunk, callback)
			{
				// add to queue so that we can indicate
				// completion via callback
				// node will automatically pause the incoming stream
				// when too many items have been added without their
				// callback being invoked
				parseCallbackQueue.push(bindFunction(function() {
					this.parseChunk(typeof chunk === 'string' ? chunk : chunk.toString(config.encoding));
					if (isFunction(callback)) {
						return callback();
					}
				}, this));
				if (parseOnWrite) {
					parseOnWrite = false;
					this._nextChunk();
				}
			};

			this._onRead = function()
			{
				if (this._handle.paused()) {
					// the writeable consumer can handle more data
					// so resume the chunk parsing
					this._handle.resume();
				}
			};

			this._onWrite = function(chunk, encoding, callback)
			{
				this._addToParseQueue(chunk, callback);
			};

			this._onWriteComplete = function()
			{
				writeStreamHasFinished = true;
				// have to write empty string
				// so parser knows its done
				this._addToParseQueue('');
			};

			this.getStream = function()
			{
				return stream;
			};
			stream = new Duplex({
				readableObjectMode: true,
				decodeStrings: false,
				read: bindFunction(this._onRead, this),
				write: bindFunction(this._onWrite, this)
			});
			stream.once('finish', bindFunction(this._onWriteComplete, this));
		}
		if (typeof PAPA_BROWSER_CONTEXT === 'undefined') {
			DuplexStreamStreamer.prototype = Object.create(ChunkStreamer.prototype);
			DuplexStreamStreamer.prototype.constructor = DuplexStreamStreamer;
		}


		// Use one ParserHandle per entire CSV file or string
		function ParserHandle(_config)
		{
			// One goal is to minimize the use of regular expressions...
			var FLOAT = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i;
			var ISO_DATE = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;

			var self = this;
			var _stepCounter = 0;	// Number of times step was called (number of rows parsed)
			var _rowCounter = 0;	// Number of rows that have been parsed so far
			var _input;				// The input being parsed
			var _parser;			// The core parser being used
			var _paused = false;	// Whether we are paused or not
			var _aborted = false;	// Whether the parser has aborted or not
			var _delimiterError;	// Temporary state between delimiter detection and processing results
			var _fields = [];		// Fields are from the header row of the input, if there is one
			var _results = {		// The last results returned from the parser
				data: [],
				errors: [],
				meta: {}
			};

			if (isFunction(_config.step))
			{
				var userStep = _config.step;
				_config.step = function(results)
				{
					_results = results;

					if (needsHeaderRow())
						processResults();
					else	// only call user's step function after header row
					{
						processResults();

						// It's possbile that this line was empty and there's no row here after all
						if (_results.data.length === 0)
							return;

						_stepCounter += results.data.length;
						if (_config.preview && _stepCounter > _config.preview)
							_parser.abort();
						else
							userStep(_results, self);
					}
				};
			}

			/**
			 * Parses input. Most users won't need, and shouldn't mess with, the baseIndex
			 * and ignoreLastRow parameters. They are used by streamers (wrapper functions)
			 * when an input comes in multiple chunks, like from a file.
			 */
			this.parse = function(input, baseIndex, ignoreLastRow)
			{
				var quoteChar = _config.quoteChar || '"';
				if (!_config.newline)
					_config.newline = guessLineEndings(input, quoteChar);

				_delimiterError = false;
				if (!_config.delimiter)
				{
					var delimGuess = guessDelimiter(input, _config.newline, _config.skipEmptyLines, _config.comments);
					if (delimGuess.successful)
						_config.delimiter = delimGuess.bestDelimiter;
					else
					{
						_delimiterError = true;	// add error after parsing (otherwise it would be overwritten)
						_config.delimiter = Papa.DefaultDelimiter;
					}
					_results.meta.delimiter = _config.delimiter;
				}
				else if(isFunction(_config.delimiter))
				{
					_config.delimiter = _config.delimiter(input);
					_results.meta.delimiter = _config.delimiter;
				}

				var parserConfig = copy(_config);
				if (_config.preview && _config.header)
					parserConfig.preview++;	// to compensate for header row

				_input = input;
				_parser = new Parser(parserConfig);
				_results = _parser.parse(_input, baseIndex, ignoreLastRow);
				processResults();
				return _paused ? { meta: { paused: true } } : (_results || { meta: { paused: false } });
			};

			this.paused = function()
			{
				return _paused;
			};

			this.pause = function()
			{
				_paused = true;
				_parser.abort();
				_input = _input.substr(_parser.getCharIndex());
			};

			this.resume = function()
			{
				_paused = false;
				self.streamer.parseChunk(_input, true);
			};

			this.aborted = function()
			{
				return _aborted;
			};

			this.abort = function()
			{
				_aborted = true;
				_parser.abort();
				_results.meta.aborted = true;
				if (isFunction(_config.complete))
					_config.complete(_results);
				_input = '';
			};

			function testEmptyLine(s) {
				return _config.skipEmptyLines === 'greedy' ? s.join('').trim() === '' : s.length === 1 && s[0].length === 0;
			}

			function processResults()
			{
				if (_results && _delimiterError)
				{
					addError('Delimiter', 'UndetectableDelimiter', 'Unable to auto-detect delimiting character; defaulted to \'' + Papa.DefaultDelimiter + '\'');
					_delimiterError = false;
				}

				if (_config.skipEmptyLines)
				{
					for (var i = 0; i < _results.data.length; i++)
						if (testEmptyLine(_results.data[i]))
							_results.data.splice(i--, 1);
				}

				if (needsHeaderRow())
					fillHeaderFields();

				return applyHeaderAndDynamicTypingAndTransformation();
			}

			function needsHeaderRow()
			{
				return _config.header && _fields.length === 0;
			}

			function fillHeaderFields()
			{
				if (!_results)
					return;
				for (var i = 0; needsHeaderRow() && i < _results.data.length; i++)
					for (var j = 0; j < _results.data[i].length; j++)
					{
						var header = _results.data[i][j];

						if (_config.trimHeaders) {
							header = header.trim();
						}

						_fields.push(header);
					}
				_results.data.splice(0, 1);
			}

			function shouldApplyDynamicTyping(field) {
				// Cache function values to avoid calling it for each row
				if (_config.dynamicTypingFunction && _config.dynamicTyping[field] === undefined) {
					_config.dynamicTyping[field] = _config.dynamicTypingFunction(field);
				}
				return (_config.dynamicTyping[field] || _config.dynamicTyping) === true;
			}

			function parseDynamic(field, value)
			{
				if (shouldApplyDynamicTyping(field))
				{
					if (value === 'true' || value === 'TRUE')
						return true;
					else if (value === 'false' || value === 'FALSE')
						return false;
					else if (FLOAT.test(value))
						return parseFloat(value);
					else if (ISO_DATE.test(value))
						return new Date(value);
					else
						return (value === '' ? null : value);
				}
				return value;
			}

			function applyHeaderAndDynamicTypingAndTransformation()
			{
				if (!_results || (!_config.header && !_config.dynamicTyping && !_config.transform))
					return _results;

				for (var i = 0; i < _results.data.length; i++)
				{
					var row = _config.header ? {} : [];

					var j;
					for (j = 0; j < _results.data[i].length; j++)
					{
						var field = j;
						var value = _results.data[i][j];

						if (_config.header)
							field = j >= _fields.length ? '__parsed_extra' : _fields[j];

						if (_config.transform)
							value = _config.transform(value,field);

						value = parseDynamic(field, value);

						if (field === '__parsed_extra')
						{
							row[field] = row[field] || [];
							row[field].push(value);
						}
						else
							row[field] = value;
					}

					_results.data[i] = row;

					if (_config.header)
					{
						if (j > _fields.length)
							addError('FieldMismatch', 'TooManyFields', 'Too many fields: expected ' + _fields.length + ' fields but parsed ' + j, _rowCounter + i);
						else if (j < _fields.length)
							addError('FieldMismatch', 'TooFewFields', 'Too few fields: expected ' + _fields.length + ' fields but parsed ' + j, _rowCounter + i);
					}
				}

				if (_config.header && _results.meta)
					_results.meta.fields = _fields;

				_rowCounter += _results.data.length;
				return _results;
			}

			function guessDelimiter(input, newline, skipEmptyLines, comments)
			{
				var delimChoices = [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP];
				var bestDelim, bestDelta, fieldCountPrevRow;

				for (var i = 0; i < delimChoices.length; i++)
				{
					var delim = delimChoices[i];
					var delta = 0, avgFieldCount = 0, emptyLinesCount = 0;
					fieldCountPrevRow = undefined;

					var preview = new Parser({
						comments: comments,
						delimiter: delim,
						newline: newline,
						preview: 10
					}).parse(input);

					for (var j = 0; j < preview.data.length; j++)
					{
						if (skipEmptyLines && testEmptyLine(preview.data[j]))
						{
							emptyLinesCount++;
							continue;
						}
						var fieldCount = preview.data[j].length;
						avgFieldCount += fieldCount;

						if (typeof fieldCountPrevRow === 'undefined')
						{
							fieldCountPrevRow = 0;
							continue;
						}
						else if (fieldCount > 1)
						{
							delta += Math.abs(fieldCount - fieldCountPrevRow);
							fieldCountPrevRow = fieldCount;
						}
					}

					if (preview.data.length > 0)
						avgFieldCount /= (preview.data.length - emptyLinesCount);

					if ((typeof bestDelta === 'undefined' || delta > bestDelta)
						&& avgFieldCount > 1.99)
					{
						bestDelta = delta;
						bestDelim = delim;
					}
				}

				_config.delimiter = bestDelim;

				return {
					successful: !!bestDelim,
					bestDelimiter: bestDelim
				};
			}

			function guessLineEndings(input, quoteChar)
			{
				input = input.substr(0, 1024 * 1024);	// max length 1 MB
				// Replace all the text inside quotes
				var re = new RegExp(escapeRegExp(quoteChar) + '([^]*?)' + escapeRegExp(quoteChar), 'gm');
				input = input.replace(re, '');

				var r = input.split('\r');

				var n = input.split('\n');

				var nAppearsFirst = (n.length > 1 && n[0].length < r[0].length);

				if (r.length === 1 || nAppearsFirst)
					return '\n';

				var numWithN = 0;
				for (var i = 0; i < r.length; i++)
				{
					if (r[i][0] === '\n')
						numWithN++;
				}

				return numWithN >= r.length / 2 ? '\r\n' : '\r';
			}

			function addError(type, code, msg, row)
			{
				_results.errors.push({
					type: type,
					code: code,
					message: msg,
					row: row
				});
			}
		}

		/** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions */
		function escapeRegExp(string)
		{
			return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
		}

		/** The core parser implements speedy and correct CSV parsing */
		function Parser(config)
		{
			// Unpack the config object
			config = config || {};
			var delim = config.delimiter;
			var newline = config.newline;
			var comments = config.comments;
			var step = config.step;
			var preview = config.preview;
			var fastMode = config.fastMode;
			var quoteChar;
			/** Allows for no quoteChar by setting quoteChar to undefined in config */
			if (config.quoteChar === undefined) {
				quoteChar = '"';
			} else {
				quoteChar = config.quoteChar;
			}
			var escapeChar = quoteChar;
			if (config.escapeChar !== undefined) {
				escapeChar = config.escapeChar;
			}

			// Delimiter must be valid
			if (typeof delim !== 'string'
				|| Papa.BAD_DELIMITERS.indexOf(delim) > -1)
				delim = ',';

			// Comment character must be valid
			if (comments === delim)
				throw 'Comment character same as delimiter';
			else if (comments === true)
				comments = '#';
			else if (typeof comments !== 'string'
				|| Papa.BAD_DELIMITERS.indexOf(comments) > -1)
				comments = false;

			// Newline must be valid: \r, \n, or \r\n
			if (newline !== '\n' && newline !== '\r' && newline !== '\r\n')
				newline = '\n';

			// We're gonna need these at the Parser scope
			var cursor = 0;
			var aborted = false;

			this.parse = function(input, baseIndex, ignoreLastRow)
			{
				// For some reason, in Chrome, this speeds things up (!?)
				if (typeof input !== 'string')
					throw 'Input must be a string';

				// We don't need to compute some of these every time parse() is called,
				// but having them in a more local scope seems to perform better
				var inputLen = input.length,
					delimLen = delim.length,
					newlineLen = newline.length,
					commentsLen = comments.length;
				var stepIsFunction = isFunction(step);

				// Establish starting state
				cursor = 0;
				var data = [], errors = [], row = [], lastCursor = 0;

				if (!input)
					return returnable();

				if (fastMode || (fastMode !== false && input.indexOf(quoteChar) === -1))
				{
					var rows = input.split(newline);
					for (var i = 0; i < rows.length; i++)
					{
						row = rows[i];
						cursor += row.length;
						if (i !== rows.length - 1)
							cursor += newline.length;
						else if (ignoreLastRow)
							return returnable();
						if (comments && row.substr(0, commentsLen) === comments)
							continue;
						if (stepIsFunction)
						{
							data = [];
							pushRow(row.split(delim));
							doStep();
							if (aborted)
								return returnable();
						}
						else
							pushRow(row.split(delim));
						if (preview && i >= preview)
						{
							data = data.slice(0, preview);
							return returnable(true);
						}
					}
					return returnable();
				}

				var nextDelim = input.indexOf(delim, cursor);
				var nextNewline = input.indexOf(newline, cursor);
				var quoteCharRegex = new RegExp(escapeRegExp(escapeChar) + escapeRegExp(quoteChar), 'g');
				var quoteSearch;

				// Parser loop
				for (;;)
				{
					// Field has opening quote
					if (input[cursor] === quoteChar)
					{
						// Start our search for the closing quote where the cursor is
						quoteSearch = cursor;

						// Skip the opening quote
						cursor++;

						for (;;)
						{
							// Find closing quote
							quoteSearch = input.indexOf(quoteChar, quoteSearch + 1);

							//No other quotes are found - no other delimiters
							if (quoteSearch === -1)
							{
								if (!ignoreLastRow) {
									// No closing quote... what a pity
									errors.push({
										type: 'Quotes',
										code: 'MissingQuotes',
										message: 'Quoted field unterminated',
										row: data.length,	// row has yet to be inserted
										index: cursor
									});
								}
								return finish();
							}

							// Closing quote at EOF
							if (quoteSearch === inputLen - 1)
							{
								var value = input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar);
								return finish(value);
							}

							// If this quote is escaped, it's part of the data; skip it
							// If the quote character is the escape character, then check if the next character is the escape character
							if (quoteChar === escapeChar &&  input[quoteSearch + 1] === escapeChar)
							{
								quoteSearch++;
								continue;
							}

							// If the quote character is not the escape character, then check if the previous character was the escape character
							if (quoteChar !== escapeChar && quoteSearch !== 0 && input[quoteSearch - 1] === escapeChar)
							{
								continue;
							}

							// Check up to nextDelim or nextNewline, whichever is closest
							var checkUpTo = nextNewline === -1 ? nextDelim : Math.min(nextDelim, nextNewline);
							var spacesBetweenQuoteAndDelimiter = extraSpaces(checkUpTo);

							// Closing quote followed by delimiter or 'unnecessary spaces + delimiter'
							if (input[quoteSearch + 1 + spacesBetweenQuoteAndDelimiter] === delim)
							{
								row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
								cursor = quoteSearch + 1 + spacesBetweenQuoteAndDelimiter + delimLen;
								nextDelim = input.indexOf(delim, cursor);
								nextNewline = input.indexOf(newline, cursor);
								break;
							}

							var spacesBetweenQuoteAndNewLine = extraSpaces(nextNewline);

							// Closing quote followed by newline or 'unnecessary spaces + newLine'
							if (input.substr(quoteSearch + 1 + spacesBetweenQuoteAndNewLine, newlineLen) === newline)
							{
								row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
								saveRow(quoteSearch + 1 + spacesBetweenQuoteAndNewLine + newlineLen);
								nextDelim = input.indexOf(delim, cursor);	// because we may have skipped the nextDelim in the quoted field

								if (stepIsFunction)
								{
									doStep();
									if (aborted)
										return returnable();
								}

								if (preview && data.length >= preview)
									return returnable(true);

								break;
							}


							// Checks for valid closing quotes are complete (escaped quotes or quote followed by EOF/delimiter/newline) -- assume these quotes are part of an invalid text string
							errors.push({
								type: 'Quotes',
								code: 'InvalidQuotes',
								message: 'Trailing quote on quoted field is malformed',
								row: data.length,	// row has yet to be inserted
								index: cursor
							});

							quoteSearch++;
							continue;

						}

						continue;
					}

					// Comment found at start of new line
					if (comments && row.length === 0 && input.substr(cursor, commentsLen) === comments)
					{
						if (nextNewline === -1)	// Comment ends at EOF
							return returnable();
						cursor = nextNewline + newlineLen;
						nextNewline = input.indexOf(newline, cursor);
						nextDelim = input.indexOf(delim, cursor);
						continue;
					}

					// Next delimiter comes before next newline, so we've reached end of field
					if (nextDelim !== -1 && (nextDelim < nextNewline || nextNewline === -1))
					{
						row.push(input.substring(cursor, nextDelim));
						cursor = nextDelim + delimLen;
						nextDelim = input.indexOf(delim, cursor);
						continue;
					}

					// End of row
					if (nextNewline !== -1)
					{
						row.push(input.substring(cursor, nextNewline));
						saveRow(nextNewline + newlineLen);

						if (stepIsFunction)
						{
							doStep();
							if (aborted)
								return returnable();
						}

						if (preview && data.length >= preview)
							return returnable(true);

						continue;
					}

					break;
				}


				return finish();


				function pushRow(row)
				{
					data.push(row);
					lastCursor = cursor;
				}

				/**
	             * checks if there are extra spaces after closing quote and given index without any text
	             * if Yes, returns the number of spaces
	             */
				function extraSpaces(index) {
					var spaceLength = 0;
					if (index !== -1) {
						var textBetweenClosingQuoteAndIndex = input.substring(quoteSearch + 1, index);
						if (textBetweenClosingQuoteAndIndex && textBetweenClosingQuoteAndIndex.trim() === '') {
							spaceLength = textBetweenClosingQuoteAndIndex.length;
						}
					}
					return spaceLength;
				}

				/**
				 * Appends the remaining input from cursor to the end into
				 * row, saves the row, calls step, and returns the results.
				 */
				function finish(value)
				{
					if (ignoreLastRow)
						return returnable();
					if (typeof value === 'undefined')
						value = input.substr(cursor);
					row.push(value);
					cursor = inputLen;	// important in case parsing is paused
					pushRow(row);
					if (stepIsFunction)
						doStep();
					return returnable();
				}

				/**
				 * Appends the current row to the results. It sets the cursor
				 * to newCursor and finds the nextNewline. The caller should
				 * take care to execute user's step function and check for
				 * preview and end parsing if necessary.
				 */
				function saveRow(newCursor)
				{
					cursor = newCursor;
					pushRow(row);
					row = [];
					nextNewline = input.indexOf(newline, cursor);
				}

				/** Returns an object with the results, errors, and meta. */
				function returnable(stopped)
				{
					return {
						data: data,
						errors: errors,
						meta: {
							delimiter: delim,
							linebreak: newline,
							aborted: aborted,
							truncated: !!stopped,
							cursor: lastCursor + (baseIndex || 0)
						}
					};
				}

				/** Executes the user's step function and resets data & errors. */
				function doStep()
				{
					step(returnable());
					data = [];
					errors = [];
				}
			};

			/** Sets the abort flag */
			this.abort = function()
			{
				aborted = true;
			};

			/** Gets the cursor position */
			this.getCharIndex = function()
			{
				return cursor;
			};
		}


		// If you need to load Papa Parse asynchronously and you also need worker threads, hard-code
		// the script path here. See: https://github.com/mholt/PapaParse/issues/87#issuecomment-57885358
		function getScriptPath()
		{
			var scripts = document.getElementsByTagName('script');
			return scripts.length ? scripts[scripts.length - 1].src : '';
		}

		function newWorker()
		{
			if (!Papa.WORKERS_SUPPORTED)
				return false;
			if (!LOADED_SYNC && Papa.SCRIPT_PATH === null)
				throw new Error(
					'Script path cannot be determined automatically when Papa Parse is loaded asynchronously. ' +
					'You need to set Papa.SCRIPT_PATH manually.'
				);
			var workerUrl = Papa.SCRIPT_PATH || AUTO_SCRIPT_PATH;
			// Append 'papaworker' to the search string to tell papaparse that this is our worker.
			workerUrl += (workerUrl.indexOf('?') !== -1 ? '&' : '?') + 'papaworker';
			var w = new global.Worker(workerUrl);
			w.onmessage = mainThreadReceivedMessage;
			w.id = workerIdCounter++;
			workers[w.id] = w;
			return w;
		}

		/** Callback when main thread receives a message */
		function mainThreadReceivedMessage(e)
		{
			var msg = e.data;
			var worker = workers[msg.workerId];
			var aborted = false;

			if (msg.error)
				worker.userError(msg.error, msg.file);
			else if (msg.results && msg.results.data)
			{
				var abort = function() {
					aborted = true;
					completeWorker(msg.workerId, { data: [], errors: [], meta: { aborted: true } });
				};

				var handle = {
					abort: abort,
					pause: notImplemented,
					resume: notImplemented
				};

				if (isFunction(worker.userStep))
				{
					for (var i = 0; i < msg.results.data.length; i++)
					{
						worker.userStep({
							data: [msg.results.data[i]],
							errors: msg.results.errors,
							meta: msg.results.meta
						}, handle);
						if (aborted)
							break;
					}
					delete msg.results;	// free memory ASAP
				}
				else if (isFunction(worker.userChunk))
				{
					worker.userChunk(msg.results, handle, msg.file);
					delete msg.results;
				}
			}

			if (msg.finished && !aborted)
				completeWorker(msg.workerId, msg.results);
		}

		function completeWorker(workerId, results) {
			var worker = workers[workerId];
			if (isFunction(worker.userComplete))
				worker.userComplete(results);
			worker.terminate();
			delete workers[workerId];
		}

		function notImplemented() {
			throw 'Not implemented.';
		}

		/** Callback when worker thread receives a message */
		function workerThreadReceivedMessage(e)
		{
			var msg = e.data;

			if (typeof Papa.WORKER_ID === 'undefined' && msg)
				Papa.WORKER_ID = msg.workerId;

			if (typeof msg.input === 'string')
			{
				global.postMessage({
					workerId: Papa.WORKER_ID,
					results: Papa.parse(msg.input, msg.config),
					finished: true
				});
			}
			else if ((global.File && msg.input instanceof File) || msg.input instanceof Object)	// thank you, Safari (see issue #106)
			{
				var results = Papa.parse(msg.input, msg.config);
				if (results)
					global.postMessage({
						workerId: Papa.WORKER_ID,
						results: results,
						finished: true
					});
			}
		}

		/** Makes a deep copy of an array or object (mostly) */
		function copy(obj)
		{
			if (typeof obj !== 'object' || obj === null)
				return obj;
			var cpy = Array.isArray(obj) ? [] : {};
			for (var key in obj)
				cpy[key] = copy(obj[key]);
			return cpy;
		}

		function bindFunction(f, self)
		{
			return function() { f.apply(self, arguments); };
		}

		function isFunction(func)
		{
			return typeof func === 'function';
		}

		return Papa;
	}));
	});

	const html = "\n  <style>\n  #sczh-story-tool {\n    position: absolute;\n    display: none;\n    background: #ffffff;\n    border-radius: 24px;\n    box-sizing: border-box;\n    font-family: sczh-yuanti;\n    align-items: center;\n    justify-content: center;\n    color: #ff6499;\n    text-shadow: 0 0 6px #fff;\n    cursor: pointer;\n    user-select: none;\n    width: 100px;\n    height: 100px;\n    font-size: 32px;\n    border: 7px solid transparent;\n    border-image: url(".concat(config.origin, "/data/image/border.png);\n    border-image-slice: 7;\n    transform-origin: top right;\n  }\n  .story-tool-btns {\n    width: 100%;\n    height: 100%;\n    display: none;\n  }\n  .story-tool-btns .btn-download-sczh,\n  .story-tool-btns label {\n    flex: 1;\n    height: 100%;\n    background: #fff;\n    display: flex;\n    box-sizing: content-box;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    color: #c0aade;\n    text-shadow: 0 0 6px #fff;\n  }\n  .story-tool-btns .btn-download-sczh:hover {\n    color: #9f66ec;\n  }\n  .story-tool-btns label {\n    color: rgb(242, 156, 199);\n    border-right: 1px solid #c9c9c9;\n  }\n  #sczh-story-tool .btn-close-sczh {\n    height: 25px;\n    width: 50px;\n    background: rgba(0, 0, 0, 0.58);\n    color: #fff;\n    letter-spacing: 2px;\n    position: absolute;\n    right: -25px;\n    top: -20px;\n    border-radius: 4px;\n    display: none;\n    align-items: center;\n    justify-content: center;\n    z-index: 1;\n    font-family: sczh-heiti;\n    font-size: 15px;\n  }\n  #sczh-story-tool:hover {\n    width: 200px;\n  }\n  #sczh-story-tool:hover .story-tool-btns {\n    display: flex;\n  }\n  #sczh-story-tool:hover .btn-close-sczh {\n    display: flex;\n  }\n  #sczh-story-tool:hover > .text-sczh {\n    display: none;\n  }\n  #sczh-story-tool .btn-close-sczh:hover {\n    background: rgba(0, 0, 0, 0.9);\n  }\n  .story-tool-btns label:hover {\n    color: #f270b1;\n  }\n  .story-tool-btns .btn-download-sczh:hover,\n  .story-tool-btns label:hover {\n    background-color: #f7f7f7;\n  }\n  </style>\n  <div id=\"sczh-story-tool\"><span class=\"text-sczh\">Story</span>\n    <span id=\"btn-close-sczh\" class=\"btn-close-sczh\">X</span>\n    <input type=\"file\" style=\"display:none\" id=\"ipt-preview-sczh\" multiple accept=\".csv\">\n    <div class=\"story-tool-btns\">\n      <label for=\"ipt-preview-sczh\">Import</label>\n      <div id=\"btn-download-sczh\" class=\"btn-download-sczh\">DL</div>\n    </div>\n  </div>\n  ");

	const savePreview = map => {
	  const arr = [...map].slice(-PREVIEW_COUNT);
	  const newArr = arr.map(item => {
	    item[1] = [...item[1]];
	    return item;
	  });
	  sessionStorage.setItem('sczh:preview', JSON.stringify(newArr));
	};

	let showToolFlag = false;

	const showStoryTool = storyCache => {
	  if (showToolFlag) return;
	  showToolFlag = true;
	  document.body.insertAdjacentHTML('beforeend', html);
	  const cont = document.getElementById('sczh-story-tool');
	  const setToolPos = debounce_1(() => {
	    const pos = [0.017, 0.22];
	    const height = window.innerHeight;
	    const width = window.innerWidth;
	    const h_w = height / width;
	    let ch = height;
	    let cw = width;
	    let offsetTop = 0;
	    let offsetRight = 0;

	    if (h_w > 9 / 16) {
	      ch = width * 9 / 16;
	      offsetTop = (height - ch) / 2;
	    } else {
	      cw = height * 16 / 9;
	      offsetRight = (width - cw) / 2;
	    }

	    cont.style.right = Math.floor(offsetRight + pos[0] * cw) + 'px';
	    cont.style.top = Math.floor(offsetTop + pos[1] * ch) + 'px';
	    cont.style.transform = "scale(".concat((ch / 900).toFixed(3), ")"); // cont.style.width = Math.floor(size[0] * cw) + 'px'
	    // cont.style.height = Math.floor(size[1] * cw) + 'px'
	    // cont.style.fontSize = Math.floor(size[1] * cw * 0.35) + 'px'

	    if (storyCache.name) {
	      cont.style.display = 'flex';
	    } else {
	      cont.style.display = 'none';
	    }
	  }, 300);
	  setToolPos();
	  window.addEventListener('resize', setToolPos);
	  const btnDl = document.getElementById('btn-download-sczh');
	  btnDl.addEventListener('click', function () {
	    if (storyCache.name) {
	      const str = papaparse.unparse(storyCache.list);
	      tryDownload(str, storyCache.filename);
	    }
	  });
	  const btnClose = document.getElementById('btn-close-sczh');
	  btnClose.addEventListener('click', function () {
	    cont.style.display = 'none';
	    config.story = 'normal';
	    saveConfig();
	  });
	  const iptPreview = document.getElementById('ipt-preview-sczh');
	  iptPreview.addEventListener('change', function () {
	    const files = this.files;
	    if (!files.length) return;
	    files.forEach(file => {
	      const reader = new FileReader();

	      reader.onload = e => {
	        const text = e.target.result;
	        const storyMap = getStoryMap(text);

	        if (storyMap.has('name')) {
	          const _name = storyMap.get('name');

	          storyCache.preview.set(_name, storyMap);
	          savePreview(storyCache.preview);
	          alert("\u5BFC\u5165".concat(_name, "\u6210\u529F"));
	        }
	      };

	      reader.readAsText(file);
	    });
	  });
	};

	const storyCache = {
	  name: '',
	  filename: '',
	  list: '',
	  preview: new Map()
	};
	let previewLoaded = false;

	const getPreview = () => {
	  if (previewLoaded) return;
	  previewLoaded = true;
	  const str = sessionStorage.getItem('sczh:preview');
	  if (!str) return;

	  try {
	    const arr = JSON.parse(str);
	    const map = new Map(arr);

	    for (let [key, value] of map) {
	      map.set(key, new Map(value));
	    }

	    storyCache.preview = map;
	  } catch (e) {
	    log(e);
	  }
	};

	const getCid = name => {
	  const res = name.match(/\/(\d+)$/);
	  if (res && res[1]) return res[1];
	  return '';
	};

	const saveData = (data, name) => {
	  const _name = name.replace('.json', '');

	  const _cid = getCid(_name);

	  const filename = storyTitle.get(_cid) || _name.replace(/\//g, '_');

	  const list = [];
	  data.forEach(item => {
	    let text = trim(replaceWrap(item.text));

	    if (text && text.trim()) {
	      list.push({
	        id: item.id || '0000000000000',
	        name: item.speaker || '',
	        text,
	        trans: ''
	      });
	    } else if (item.select) {
	      list.push({
	        id: 'select',
	        name: '',
	        text: trim(replaceWrap(item.select)),
	        trans: ''
	      });
	    }
	  });
	  list.push({
	    id: 'info',
	    name,
	    text: '',
	    trans: ''
	  });
	  list.push({
	    id: '译者',
	    name: '',
	    text: '',
	    trans: ''
	  });
	  storyCache.name = name;
	  storyCache.filename = "".concat(filename, ".csv");
	  storyCache.list = list;
	};

	const transStory = (data, storyMap, commMap, nameMap) => {
	  if (!Array.isArray(data)) return;
	  data.forEach(item => {
	    transSpeaker(item, nameMap);

	    if (item.text) {
	      if (item.id) {
	        const id = item.id + '';

	        if (storyMap.has(id)) {
	          item.text = storyMap.get(id);
	        }
	      } else {
	        const text = fixWrap(item.text);

	        if (storyMap.has(text)) {
	          item.text = storyMap.get(text);
	        } else if (commMap.has(item.text)) {
	          item.text = tagText(commMap.get(item.text));
	        }
	      }
	    }

	    if (item.select) {
	      const select = fixWrap(item.select);
	      const sKey = "".concat(select, "-select");

	      if (storyMap.has(sKey)) {
	        item.select = storyMap.get(sKey);
	      } else if (commMap.has(select)) {
	        item.select = tagText(commMap.get(item.select));
	      }
	    }
	  });
	};

	const transScenario = async () => {
	  const scnModule = await getScMd();
	  if (!scnModule) return;
	  const originLoad = scnModule.load;

	  scnModule.load = async function (...args) {
	    const res = await originLoad.apply(this, args);
	    const type = args[0];
	    if (!type) return res;
	    if (DEV && type.includes('/assets/json/')) requestLog('STORY', '#ad37c2', args, res);

	    if (type.includes('/produce_events/') || type.includes('/produce_communications/') || type.includes('/produce_communications_promises/') || type.includes('/produce_communication_promise_results/') || type.includes('/game_event_communications/') || type.includes('/special_communications/') || type.includes('/produce_communication_cheers/') || type.includes('/produce_communication_auditions/') || type.includes('/produce_communication_televisions/')) {
	      try {
	        const name = type.replace(/^\/assets\/json\//, '');
	        let storyMap;

	        if (config.story === 'edit') {
	          saveData(res, name);
	          showStoryTool(storyCache);
	        }

	        getPreview();

	        if (storyCache.preview.has(name)) {
	          storyMap = storyCache.preview.get(name);
	        } else {
	          storyMap = await getStory(name);
	        }

	        if (storyMap) {
	          const commMap = await getCommStory();
	          const nameMap = await getName();
	          transStory(res, storyMap, commMap, nameMap);
	        } else if (config.auto === 'on') {
	          await autoTrans(res, name);
	        }
	      } catch (e) {
	        log(e);
	      }
	    }

	    return res;
	  };
	};

	const preload = src => {
	  const link = document.createElement('link');
	  link.setAttribute('rel', 'preload');
	  link.setAttribute('href', src);
	  link.setAttribute('as', 'font');
	  link.setAttribute('type', 'font/woff2');
	  link.setAttribute('crossorigin', 'anonymous');
	  document.head.appendChild(link);
	};

	const addFont = async () => {
	  const tag = document.createElement('style');
	  const {
	    hash
	  } = await getHash;
	  tag.innerHTML = "\n  @font-face {\n    font-family: \"sczh-heiti\";\n    src: url(\"".concat(config.origin, "/data/font/heiti.woff2?v=").concat(hash, "\");\n  }\n  @font-face {\n    font-family: \"sczh-yuanti\";\n    src: url(\"").concat(config.origin, "/data/font/yuanti.woff2?v=").concat(hash, "\");\n  }\n  @font-face {\n    font-family: \"sczh-yuanti2\";\n    src: url(\"").concat(config.origin, "/data/font/yuanti2.woff2?v=").concat(hash, "\");\n  }\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  ");

	  if (config.font1 === 'yuanti') {
	    preload("".concat(config.origin, "/data/font/yuanti.woff2?v=").concat(hash));
	  } else if (config.font1 === 'yuanti2') {
	    preload("".concat(config.origin, "/data/font/yuanti2.woff2?v=").concat(hash));
	  }

	  if (config.font2 === 'heiti') {
	    preload("".concat(config.origin, "/data/font/heiti.woff2?v=").concat(hash));
	  }

	  document.head.appendChild(tag);
	};

	const keepBgm = () => {
	  window.addEventListener('blur', function (e) {
	    if (config.bgm === 'on') e.stopImmediatePropagation();
	  }, false);
	  document.addEventListener('visibilitychange', function (e) {
	    if (config.bgm === 'on') e.stopImmediatePropagation();
	  });
	};

	keepBgm();

	const main = async () => {
	  try {
	    await Promise.all([resourceHook(), addFont(), transPhrase(), watchText(), requestHook(), transScenario()]);
	  } catch (e) {
	    log(e);
	  }
	};

	if (window.unsafeWindow) {
	  unsafeWindow.addEventListener('load', main);
	} else {
	  window.addEventListener('load', main);
	}

}());
