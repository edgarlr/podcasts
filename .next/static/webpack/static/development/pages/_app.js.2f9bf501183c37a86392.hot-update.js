webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./contexts/PlayerContext.js":
/*!***********************************!*\
  !*** ./contexts/PlayerContext.js ***!
  \***********************************/
/*! exports provided: PlayerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerContext", function() { return PlayerContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var PlayerContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./contexts/types.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var PlayerReducer = function PlayerReducer(state, action) {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["SET_CURRENT_SONG"]:
      return _objectSpread({}, state, {
        currentSong: action.data,
        playing: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_PLAYING"]:
      return _objectSpread({}, state, {
        playing: action.data
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PlayerContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerContext */ "./contexts/PlayerContext.js");
/* harmony import */ var _PlayerReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerReducer */ "./contexts/PlayerReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./contexts/types.js");
var _this = undefined,
    _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/contexts/PlayerState.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PlayerState = function PlayerState(props) {
  var initialState = {
    currentSong: 0,
    // songs: songsArr,
    playing: false,
    audio: null
  };

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_PlayerReducer__WEBPACK_IMPORTED_MODULE_2__["PlayerReducer"], initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var togglePlaying = function togglePlaying() {
    return dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["TOGGLE_PLAYING"],
      data: state.playing ? false : true
    });
  };

  var SetCurrent = function SetCurrent(id) {
    return dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["SET_CURRENT_SONG"],
      data: id
    });
  };

  return __jsx(_PlayerContext__WEBPACK_IMPORTED_MODULE_1__["PlayerContext"].Provider, {
    value: {
      currentSong: state.currentSong,
      playing: state.playing,
      audio: state.audio,
      SetCurrent: SetCurrent,
      togglePlaying: togglePlaying
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, props.children);
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_PlayerState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/PlayerState */ "./contexts/PlayerState.js");

var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(PlayerContextProvider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  })));
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

/***/ })

})
//# sourceMappingURL=_app.js.2f9bf501183c37a86392.hot-update.js.map