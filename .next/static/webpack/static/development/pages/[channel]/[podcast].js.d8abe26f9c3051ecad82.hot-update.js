webpackHotUpdate("static/development/pages/[channel]/[podcast].js",{

/***/ "./components/AudioControls.js":
/*!*************************************!*\
  !*** ./components/AudioControls.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AudioControls; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/PlayerContext */ "./contexts/PlayerContext.js");
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/components/AudioControls.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function AudioControls(_ref) {
  var clipSrc = _ref.clipSrc;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_3__["PlayerContext"]),
      currentSong = _useContext.currentSong,
      playing = _useContext.playing,
      togglePlaying = _useContext.togglePlaying;

  var audio = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('audio_tag');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0.5),
      stateVolume = _useState[0],
      setStateVolume = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      duration = _useState2[0],
      setDuration = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentTime = _useState3[0],
      setCurrentTime = _useState3[1];

  var fmtMSS = function fmtMSS(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s;
  };

  var toggleAudio = function toggleAudio() {
    return audio.current.paused ? audio.current.play() : audio.current.pause();
  };

  return __jsx("div", {
    className: "jsx-688533068" + " " + 'player',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("audio", {
    autoPlay: false,
    className: "jsx-688533068",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("source", {
    src: clipSrc,
    type: "audio/mpeg",
    className: "jsx-688533068",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-688533068" + " " + 'main-player',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "jsx-688533068" + " " + 'controller-button',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdSkipPrevious"], {
    color: "white",
    size: "3em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  })), __jsx("button", {
    className: "jsx-688533068" + " " + 'play-button',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdPlayArrow"], {
    color: "white",
    size: "3em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  })), __jsx("button", {
    className: "jsx-688533068" + " " + 'controller-button',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdSkipNext"], {
    color: "white",
    size: "3em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }))), __jsx("input", {
    type: "range",
    name: "progressbar",
    id: "pgrbar",
    className: "jsx-688533068" + " " + 'slider',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-688533068" + " " + 'progress-time',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-688533068",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "0:43"), __jsx("div", {
    className: "jsx-688533068",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "0:43")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "688533068",
    __self: this
  }, ".slider.jsx-688533068{-webkit-appearance:none;height:4px;background-color:#5e5f5f;width:100%;outline:none;overflow:hidden;-webkit-transition:0.2s;-webkit-transition:opacity 0.2s;transition:opacity 0.2s;}.slider.jsx-688533068::-webkit-slider-thumb{-webkit-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:2.5em;height:2.5em;border-radius:50%;border:4px solid #131414;cursor:pointer;background:#fff;box-shadow:-210px 0 0 200px #fff;}.slider.jsx-688533068::-webkit-slider-runnable-track{-webkit-appearance:none;}.player.jsx-688533068{height:auto;}.main-player.jsx-688533068{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10%;}.controller-button.jsx-688533068{background:none;border:none;}.play-button.jsx-688533068{width:72px;height:72px;border-radius:50%;border:1px solid white;background:none;}.control-bar.jsx-688533068{height:4px;background:#5e5f5f;width:100%;position:relative;margin:16px 0;}.progress-bar.jsx-688533068{position:absolute;height:4px;background:#ffffff;left:0;right:20%;}.payback-controller.jsx-688533068{position:absolute;height:20px;width:20px;border-radius:50%;border:4px solid #131414;right:0;top:0;background:#fff;margin:-12px -12px;}.progress-time.jsx-688533068{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#979797;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvQXVkaW9Db250cm9scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRGtCLEFBR21DLEFBV0EsQUFhQSxBQUlaLEFBR0MsQUFNRyxBQUlMLEFBT0EsQUFPTyxBQU9BLEFBV0wsV0EvQkQsQUFPTyxDQXBCckIsSUFTYyxFQWtCRCxBQU9DLEtBcEJNLENBMUNQLEFBV0ssQUFhbEIsSUFjQSxDQWtCcUIsQ0FQUixBQWNBLEtBOURjLE1BMENGLEFBT0wsQUFjQSxPQVBYLE9BQ0csSUFQSSxBQWNXLENBL0RkLElBMENLLENBZWxCLE1BeERlLEVBaURmLENBckIrQixBQTBDQyxNQTVCaEMsSUF6Q2tCLEFBOERSLENBdERJLE9BdUROLEtBdERPLENBdURHLEVBL0RRLFVBU04sSUF1REMsVUEvREssSUFTQyxLQXVEM0Isb0JBdERpQixlQUVDLFlBWGxCLElBWW1DLEtBdURuQixRQTFDSyxNQTJDSixjQXZEakIsQ0F3REEsd0VBM0NvQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2VkZ2FybG9wZXovQ29kZS9jb3Vyc2VzL3JlYWN0L25leHQvcG9kY2FzdHMvY29tcG9uZW50cy9BdWRpb0NvbnRyb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1kUGF1c2UsIE1kUGxheUFycm93LCBNZFNraXBQcmV2aW91cywgTWRTa2lwTmV4dCB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCB7UGxheWVyQ29udGV4dH0gZnJvbSAnLi4vY29udGV4dHMvUGxheWVyQ29udGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXVkaW9Db250cm9scyh7Y2xpcFNyY30pIHtcbiAgY29uc3Qge1xuICAgIGN1cnJlbnRTb25nLFxuICAgIHBsYXlpbmcsXG4gICAgdG9nZ2xlUGxheWluZ1xuICB9ID0gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KVxuXG4gIGNvbnN0IGF1ZGlvID0gdXNlUmVmKCdhdWRpb190YWcnKVxuXG4gIGNvbnN0IFtzdGF0ZVZvbHVtZSwgc2V0U3RhdGVWb2x1bWVdID0gdXNlU3RhdGUoMC41KTtcbiAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2N1cnJlbnRUaW1lLCBzZXRDdXJyZW50VGltZV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBmbXRNU1MgPSAocykgPT4ge1xuICAgIHJldHVybiAocyAtIChzICU9IDYwKSkgLyA2MCArICg5IDwgcyA/ICc6JyA6ICc6MCcpICsgfn5zO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUF1ZGlvID0gKCkgPT5cbiAgICBhdWRpby5jdXJyZW50LnBhdXNlZCA/IGF1ZGlvLmN1cnJlbnQucGxheSgpIDogYXVkaW8uY3VycmVudC5wYXVzZSgpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncGxheWVyJz5cbiAgICAgIDxhdWRpbyBhdXRvUGxheT17ZmFsc2V9PlxuICAgICAgICA8c291cmNlIHNyYz17Y2xpcFNyY30gdHlwZT0nYXVkaW8vbXBlZycgLz5cbiAgICAgIDwvYXVkaW8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluLXBsYXllcic+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdjb250cm9sbGVyLWJ1dHRvbic+XG4gICAgICAgICAgPE1kU2tpcFByZXZpb3VzIGNvbG9yPSd3aGl0ZScgc2l6ZT0nM2VtJyAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3BsYXktYnV0dG9uJz5cbiAgICAgICAgICA8TWRQbGF5QXJyb3cgY29sb3I9J3doaXRlJyBzaXplPSczZW0nIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nY29udHJvbGxlci1idXR0b24nPlxuICAgICAgICAgIDxNZFNraXBOZXh0IGNvbG9yPSd3aGl0ZScgc2l6ZT0nM2VtJyAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aW5wdXQgdHlwZT0ncmFuZ2UnIG5hbWU9J3Byb2dyZXNzYmFyJyBpZD0ncGdyYmFyJyBjbGFzc05hbWU9J3NsaWRlcicgLz5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbC1iYXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZ3Jlc3MtYmFyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5YmFjay1jb250cm9sbGVyJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAqL31cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2dyZXNzLXRpbWUnPlxuICAgICAgICA8ZGl2PjA6NDM8L2Rpdj5cbiAgICAgICAgPGRpdj4wOjQzPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuc2xpZGVyIHtcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVlNWY1ZjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICB3aWR0aDogMi41ZW07XG4gICAgICAgICAgaGVpZ2h0OiAyLjVlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgIzEzMTQxNDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGJveC1zaGFkb3c6IC0yMTBweCAwIDAgMjAwcHggI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAucGxheWVyIHtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLm1haW4tcGxheWVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgICAgICB9XG4gICAgICAgIC5jb250cm9sbGVyLWJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnBsYXktYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogNzJweDtcbiAgICAgICAgICBoZWlnaHQ6IDcycHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRyb2wtYmFyIHtcbiAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWU1ZjVmO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgICAgfVxuICAgICAgICAucHJvZ3Jlc3MtYmFyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAyMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnBheWJhY2stY29udHJvbGxlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgIzEzMTQxNDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBtYXJnaW46IC0xMnB4IC0xMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5wcm9ncmVzcy10aW1lIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBjb2xvcjogIzk3OTc5NztcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/edgarlopez/Code/courses/react/next/podcasts/components/AudioControls.js */"));
}

/***/ })

})
//# sourceMappingURL=[podcast].js.d8abe26f9c3051ecad82.hot-update.js.map