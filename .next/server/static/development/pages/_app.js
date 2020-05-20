module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contexts/FavsContext.js":
/*!*********************************!*\
  !*** ./contexts/FavsContext.js ***!
  \*********************************/
/*! exports provided: FavsContext, FavsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavsContext", function() { return FavsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavsState", function() { return FavsState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./contexts/types.js");
/* harmony import */ var _FavsReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FavsReducer */ "./contexts/FavsReducer.js");
/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useLocalStorage */ "./hooks/useLocalStorage.js");
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/contexts/FavsContext.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const FavsContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const FavsState = props => {
  const [favs] = Object(_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__["useLocalStorage"])('favs', undefined);
  const empyArr = [];

  const initialValue = () => {
    if (favs !== undefined) {
      return favs;
    }

    return empyArr;
  };

  const initialState = {
    myList: initialValue()
  };
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_FavsReducer__WEBPACK_IMPORTED_MODULE_2__["FavsReducer"], initialState);

  const Follow = channel => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_FOLLOW"],
    data: channel
  });

  const Unfollow = channel => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FROM_FOLLOW"],
    data: channel
  });

  return __jsx(FavsContext.Provider, {
    value: {
      myList: state.myList,
      Follow,
      Unfollow
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, props.children);
};

/***/ }),

/***/ "./contexts/FavsReducer.js":
/*!*********************************!*\
  !*** ./contexts/FavsReducer.js ***!
  \*********************************/
/*! exports provided: FavsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavsReducer", function() { return FavsReducer; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./contexts/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const FavsReducer = (state, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_FOLLOW"]:
      return _objectSpread({}, state, {
        myList: [...state.myList, action.data]
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_FROM_FOLLOW"]:
      return _objectSpread({}, state, {
        myList: state.myList.filter(items => items.id !== action.data.id)
      });

    default:
      return {
        state
      };
  }
};

/***/ }),

/***/ "./contexts/PlayerContext.js":
/*!***********************************!*\
  !*** ./contexts/PlayerContext.js ***!
  \***********************************/
/*! exports provided: PlayerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerContext", function() { return PlayerContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PlayerContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

/***/ }),

/***/ "./contexts/PlayerReducer.js":
/*!***********************************!*\
  !*** ./contexts/PlayerReducer.js ***!
  \***********************************/
/*! exports provided: PlayerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerReducer", function() { return PlayerReducer; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./contexts/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const PlayerReducer = (state, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"]:
      return _objectSpread({}, state, {
        loading: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_SONG"]:
      return _objectSpread({}, state, {
        currentSong: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_SONG_INDEX"]:
      return _objectSpread({}, state, {
        currentSongIndex: action.data,
        playing: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_PLAYING"]:
      return _objectSpread({}, state, {
        playing: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_PLAYLIST"]:
      return _objectSpread({}, state, {
        playlist: action.data
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./contexts/PlayerState.js":
/*!*********************************!*\
  !*** ./contexts/PlayerState.js ***!
  \*********************************/
/*! exports provided: PlayerState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerState", function() { return PlayerState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PlayerContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerContext */ "./contexts/PlayerContext.js");
/* harmony import */ var _PlayerReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerReducer */ "./contexts/PlayerReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./contexts/types.js");
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/contexts/PlayerState.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PlayerState = props => {
  const initialState = {
    currentSong: 0,
    currentSongIndex: null,
    playlist: null,
    playing: false,
    audio: null,
    loading: true
  };
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_PlayerReducer__WEBPACK_IMPORTED_MODULE_2__["PlayerReducer"], initialState);

  const SetLoading = loading => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["SET_LOADING"],
    data: loading
  });

  const SetCurrent = currentSong => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["SET_CURRENT_SONG"],
    data: currentSong
  });

  const SetCurrentIndex = index => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["SET_CURRENT_SONG_INDEX"],
    data: index
  });

  const SetPlaylist = playlistArray => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["SET_PLAYLIST"],
    data: playlistArray
  });

  const togglePlaying = () => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["TOGGLE_PLAYING"],
    data: state.playing ? false : true
  });

  const prevSong = () => {
    if (state.currentSong === 0) {
      SetCurrentIndex(0);
    } else {
      SetCurrentIndex(state.currentSongIndex - 1);
    } // console.log('hola');

  };

  const nextSong = () => {
    console.log('hola');
  };

  return __jsx(_PlayerContext__WEBPACK_IMPORTED_MODULE_1__["PlayerContext"].Provider, {
    value: {
      currentSong: state.currentSong,
      currentSongIndex: state.currentSongIndex,
      playlist: state.playlist,
      playing: state.playing,
      audio: state.audio,
      loading: state.loading,
      SetLoading,
      SetCurrent,
      SetCurrentIndex,
      SetPlaylist,
      prevSong,
      nextSong,
      togglePlaying
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, props.children);
};

/***/ }),

/***/ "./contexts/types.js":
/*!***************************!*\
  !*** ./contexts/types.js ***!
  \***************************/
/*! exports provided: SET_CURRENT_SONG, TOGGLE_PLAYING, SET_CURRENT_SONG_INDEX, SET_PLAYLIST, SET_LOADING, ADD_TO_FOLLOW, REMOVE_FROM_FOLLOW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_SONG", function() { return SET_CURRENT_SONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_PLAYING", function() { return TOGGLE_PLAYING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_SONG_INDEX", function() { return SET_CURRENT_SONG_INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PLAYLIST", function() { return SET_PLAYLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_FOLLOW", function() { return ADD_TO_FOLLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FROM_FOLLOW", function() { return REMOVE_FROM_FOLLOW; });
// PLAYER REDUCER 
const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
const TOGGLE_PLAYING = 'TOGGLE_PLAYING';
const SET_CURRENT_SONG_INDEX = 'SET_CURRENT_SONG_INDEX';
const SET_PLAYLIST = 'SET_PLAYLIST';
const SET_LOADING = 'SET_LOADING'; // FAVS REDUCER

const ADD_TO_FOLLOW = 'ADD_TO_FOLLOW';
const REMOVE_FROM_FOLLOW = 'REMOVE_FROM_FOLLOW';

/***/ }),

/***/ "./hooks/useLocalStorage.js":
/*!**********************************!*\
  !*** ./hooks/useLocalStorage.js ***!
  \**********************************/
/*! exports provided: useLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocalStorage", function() { return useLocalStorage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useLocalStorage = (key, initialValue) => {
  const {
    0: storedValue,
    1: setStoredValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setLocalStorage = value => {
    try {
      const itemValue = () => {
        if (typeof value === String) {
          return value;
        }

        return JSON.stringify(value);
      };

      window.localStorage.setItem(key, itemValue());
      setStoredValue(value);
    } catch (e) {
      console.log(e);
    }
  };

  return [storedValue, setLocalStorage];
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_PlayerState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/PlayerState */ "./contexts/PlayerState.js");
/* harmony import */ var _contexts_FavsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/FavsContext */ "./contexts/FavsContext.js");
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function MyApp({
  Component,
  pageProps
}) {
  return __jsx(_contexts_PlayerState__WEBPACK_IMPORTED_MODULE_1__["PlayerState"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_contexts_FavsContext__WEBPACK_IMPORTED_MODULE_2__["FavsState"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }))));
} // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }


/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map