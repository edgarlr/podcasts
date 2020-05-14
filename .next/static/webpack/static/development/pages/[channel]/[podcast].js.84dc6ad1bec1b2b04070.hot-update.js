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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    audio.current.volume = stateVolume;

    if (playing) {
      toggleAudio();
    }
  }, [currentSong]);
  return __jsx("div", {
    className: "jsx-688533068" + " " + 'player',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("audio", {
    autoPlay: false,
    className: "jsx-688533068",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("source", {
    ref: audio,
    preload: "true",
    src: clipSrc,
    type: "audio/mpeg",
    className: "jsx-688533068",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-688533068" + " " + 'main-player',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "jsx-688533068" + " " + 'controller-button',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdSkipPrevious"], {
    color: "white",
    size: "3em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  })), __jsx("button", {
    onClick: function onClick() {
      toggleAudio();
      togglePlaying();
    },
    className: "jsx-688533068" + " " + 'play-button',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdPlayArrow"], {
    color: "white",
    size: "3em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  })), __jsx("button", {
    className: "jsx-688533068" + " " + 'controller-button',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdSkipNext"], {
    color: "white",
    size: "3em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 56,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-688533068" + " " + 'progress-time',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-688533068",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, "0:43"), __jsx("div", {
    className: "jsx-688533068",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "0:43")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "688533068",
    __self: this
  }, ".slider.jsx-688533068{-webkit-appearance:none;height:4px;background-color:#5e5f5f;width:100%;outline:none;overflow:hidden;-webkit-transition:0.2s;-webkit-transition:opacity 0.2s;transition:opacity 0.2s;}.slider.jsx-688533068::-webkit-slider-thumb{-webkit-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:2.5em;height:2.5em;border-radius:50%;border:4px solid #131414;cursor:pointer;background:#fff;box-shadow:-210px 0 0 200px #fff;}.slider.jsx-688533068::-webkit-slider-runnable-track{-webkit-appearance:none;}.player.jsx-688533068{height:auto;}.main-player.jsx-688533068{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10%;}.controller-button.jsx-688533068{background:none;border:none;}.play-button.jsx-688533068{width:72px;height:72px;border-radius:50%;border:1px solid white;background:none;}.control-bar.jsx-688533068{height:4px;background:#5e5f5f;width:100%;position:relative;margin:16px 0;}.progress-bar.jsx-688533068{position:absolute;height:4px;background:#ffffff;left:0;right:20%;}.payback-controller.jsx-688533068{position:absolute;height:20px;width:20px;border-radius:50%;border:4px solid #131414;right:0;top:0;background:#fff;margin:-12px -12px;}.progress-time.jsx-688533068{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#979797;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvQXVkaW9Db250cm9scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRWtCLEFBR21DLEFBV0EsQUFhQSxBQUlaLEFBR0MsQUFNRyxBQUlMLEFBT0EsQUFPTyxBQU9BLEFBV0wsV0EvQkQsQUFPTyxDQXBCckIsSUFTYyxFQWtCRCxBQU9DLEtBcEJNLENBMUNQLEFBV0ssQUFhbEIsSUFjQSxDQWtCcUIsQ0FQUixBQWNBLEtBOURjLE1BMENGLEFBT0wsQUFjQSxPQVBYLE9BQ0csSUFQSSxBQWNXLENBL0RkLElBMENLLENBZWxCLE1BeERlLEVBaURmLENBckIrQixBQTBDQyxNQTVCaEMsSUF6Q2tCLEFBOERSLENBdERJLE9BdUROLEtBdERPLENBdURHLEVBL0RRLFVBU04sSUF1REMsVUEvREssSUFTQyxLQXVEM0Isb0JBdERpQixlQUVDLFlBWGxCLElBWW1DLEtBdURuQixRQTFDSyxNQTJDSixjQXZEakIsQ0F3REEsd0VBM0NvQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2VkZ2FybG9wZXovQ29kZS9jb3Vyc2VzL3JlYWN0L25leHQvcG9kY2FzdHMvY29tcG9uZW50cy9BdWRpb0NvbnRyb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTWRQYXVzZSwgTWRQbGF5QXJyb3csIE1kU2tpcFByZXZpb3VzLCBNZFNraXBOZXh0IH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHtQbGF5ZXJDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdWRpb0NvbnRyb2xzKHtjbGlwU3JjfSkge1xuICBjb25zdCB7XG4gICAgY3VycmVudFNvbmcsXG4gICAgcGxheWluZyxcbiAgICB0b2dnbGVQbGF5aW5nXG4gIH0gPSB1c2VDb250ZXh0KFBsYXllckNvbnRleHQpXG5cbiAgY29uc3QgYXVkaW8gPSB1c2VSZWYoJ2F1ZGlvX3RhZycpXG5cbiAgY29uc3QgW3N0YXRlVm9sdW1lLCBzZXRTdGF0ZVZvbHVtZV0gPSB1c2VTdGF0ZSgwLjUpO1xuICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY3VycmVudFRpbWUsIHNldEN1cnJlbnRUaW1lXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGZtdE1TUyA9IChzKSA9PiB7XG4gICAgcmV0dXJuIChzIC0gKHMgJT0gNjApKSAvIDYwICsgKDkgPCBzID8gJzonIDogJzowJykgKyB+fnM7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlQXVkaW8gPSAoKSA9PlxuICAgIGF1ZGlvLmN1cnJlbnQucGF1c2VkID8gYXVkaW8uY3VycmVudC5wbGF5KCkgOiBhdWRpby5jdXJyZW50LnBhdXNlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhdWRpby5jdXJyZW50LnZvbHVtZSA9IHN0YXRlVm9sdW1lXG4gICAgaWYgKHBsYXlpbmcpIHtcbiAgICAgIHRvZ2dsZUF1ZGlvKCk7XG4gICAgfVxuICB9LCBbY3VycmVudFNvbmddKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3BsYXllcic+XG4gICAgICA8YXVkaW8gYXV0b1BsYXk9e2ZhbHNlfT5cbiAgICAgICAgPHNvdXJjZVxuICAgICAgICAgIHJlZj17YXVkaW99XG4gICAgICAgICAgcHJlbG9hZD0ndHJ1ZSdcbiAgICAgICAgICBzcmM9e2NsaXBTcmN9IFxuICAgICAgICAgIHR5cGU9J2F1ZGlvL21wZWcnIFxuICAgICAgICAvPlxuICAgICAgPC9hdWRpbz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4tcGxheWVyJz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2NvbnRyb2xsZXItYnV0dG9uJz5cbiAgICAgICAgICA8TWRTa2lwUHJldmlvdXMgY29sb3I9J3doaXRlJyBzaXplPSczZW0nIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncGxheS1idXR0b24nIG9uQ2xpY2s9eygpPT57dG9nZ2xlQXVkaW8oKTsgdG9nZ2xlUGxheWluZygpO319ID5cblxuICAgICAgICAgIDxNZFBsYXlBcnJvdyBjb2xvcj0nd2hpdGUnIHNpemU9JzNlbScgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdjb250cm9sbGVyLWJ1dHRvbic+XG4gICAgICAgICAgPE1kU2tpcE5leHQgY29sb3I9J3doaXRlJyBzaXplPSczZW0nIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxpbnB1dCB0eXBlPSdyYW5nZScgbmFtZT0ncHJvZ3Jlc3NiYXInIGlkPSdwZ3JiYXInIGNsYXNzTmFtZT0nc2xpZGVyJyAvPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sLWJhcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9ncmVzcy1iYXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXliYWNrLWNvbnRyb2xsZXInIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZ3Jlc3MtdGltZSc+XG4gICAgICAgIDxkaXY+MDo0MzwvZGl2PlxuICAgICAgICA8ZGl2PjA6NDM8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zbGlkZXIge1xuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU1ZjVmO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIHdpZHRoOiAyLjVlbTtcbiAgICAgICAgICBoZWlnaHQ6IDIuNWVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjMTMxNDE0O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgYm94LXNoYWRvdzogLTIxMHB4IDAgMCAyMDBweCAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbGF5ZXIge1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAubWFpbi1wbGF5ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRyb2xsZXItYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucGxheS1idXR0b24ge1xuICAgICAgICAgIHdpZHRoOiA3MnB4O1xuICAgICAgICAgIGhlaWdodDogNzJweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuY29udHJvbC1iYXIge1xuICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM1ZTVmNWY7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9ncmVzcy1iYXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDIwJTtcbiAgICAgICAgfVxuICAgICAgICAucGF5YmFjay1jb250cm9sbGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjMTMxNDE0O1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIG1hcmdpbjogLTEycHggLTEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2dyZXNzLXRpbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGNvbG9yOiAjOTc5Nzk3O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/edgarlopez/Code/courses/react/next/podcasts/components/AudioControls.js */"));
}

/***/ })

})
//# sourceMappingURL=[podcast].js.84dc6ad1bec1b2b04070.hot-update.js.map