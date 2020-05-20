webpackHotUpdate("static/development/pages/[channel]/[podcast].js",{

/***/ "./pages/[channel]/[podcast].js":
/*!**************************************!*\
  !*** ./pages/[channel]/[podcast].js ***!
  \**************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return podcast; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/PlayerContext */ "./contexts/PlayerContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AudioPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/AudioPlayer */ "./components/AudioPlayer.js");
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/pages/[channel]/[podcast].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var __N_SSP = true;
function podcast(_ref) {
  var audioClips = _ref.audioClips;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_2__["PlayerContext"]),
      SetCurrentIndex = _useContext.SetCurrentIndex,
      SetPlaylist = _useContext.SetPlaylist,
      SetCurrent = _useContext.SetCurrent,
      SetLoading = _useContext.SetLoading,
      playlist = _useContext.playlist; // useEffect(() => {
  //   const setContextState = async () => {
  //     if (playlist === null) {
  //       SetPlaylist(audioClips)
  //     }
  //     for (let i = 0; i < audioClips.length; i++) {
  //       if (router.query.podcast == audioClips[i].id) {
  //         await SetCurrentIndex(i)
  //         await SetCurrent(audioClips[i])
  //         SetLoading(false)
  //       }
  //     }
  //   }
  //   setContextState()
  // }, [])


  if (loading) {
    return __jsx("div", {
      className: "modal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 12
      }
    }, "...");
  }

  return __jsx(_components_AudioPlayer__WEBPACK_IMPORTED_MODULE_4__["AudioPlayer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  });
}

/***/ })

})
//# sourceMappingURL=[podcast].js.1699354f34cb706d8e01.hot-update.js.map