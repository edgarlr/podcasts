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

  var handleProgress = function handleProgress(e) {
    var compute = e.target.value * duration / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    audio.current.volume = stateVolume;

    if (playing) {
      toggleAudio();
    }
  }, [currentSong]);
  return __jsx("div", {
    className: "jsx-1107761816" + " " + 'player',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("audio", {
    onCanPlay: function onCanPlay(e) {
      return setDuration(e.target.duration);
    },
    onTimeUpdate: function onTimeUpdate(e) {
      return setCurrentTime(e.target.currentTime);
    },
    ref: audio,
    autoPlay: false,
    className: "jsx-1107761816",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("source", {
    preload: "true",
    src: clipSrc,
    type: "audio/mpeg",
    className: "jsx-1107761816",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-1107761816" + " " + 'main-player',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "jsx-1107761816" + " " + 'controller-button',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdSkipPrevious"], {
    color: "white",
    size: "3em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  })), __jsx("button", {
    onClick: function onClick() {
      toggleAudio();
      togglePlaying();
    },
    className: "jsx-1107761816" + " " + 'play-button',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, playing ? __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdPause"], {
    color: "white",
    size: "3em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }) : __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdPlayArrow"], {
    color: "white",
    size: "3em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  })), __jsx("button", {
    className: "jsx-1107761816" + " " + 'controller-button',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdSkipNext"], {
    color: "white",
    size: "3em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }))), __jsx("input", {
    onChange: handleProgress,
    value: duration ? currentTime * 100 / duration : 0,
    type: "range",
    name: "progressbar",
    id: "pgrbar",
    className: "jsx-1107761816" + " " + 'slider',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-1107761816" + " " + 'progress-time',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1107761816",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, fmtMSS(currentTime)), __jsx("div", {
    className: "jsx-1107761816",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, fmtMSS(duration))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1107761816",
    __self: this
  }, ".slider.jsx-1107761816{-webkit-appearance:none;height:4px;background-color:#5e5f5f;width:100%;outline:none;-webkit-transition:0.2s;-webkit-transition:opacity 0.2s;transition:opacity 0.2s;}.slider.jsx-1107761816::-webkit-slider-thumb{-webkit-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:2.5em;height:2.5em;border-radius:50%;border:4px solid #131414;cursor:pointer;background:#fff;}.slider.jsx-1107761816::-webkit-slider-runnable-track{-webkit-appearance:none;}.player.jsx-1107761816{height:auto;}.main-player.jsx-1107761816{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10%;}.controller-button.jsx-1107761816{background:none;border:none;}.play-button.jsx-1107761816{width:72px;height:72px;border-radius:50%;border:1px solid white;background:none;}.play-button.jsx-1107761816:focus{border:none;}.control-bar.jsx-1107761816{height:4px;background:#5e5f5f;width:100%;position:relative;margin:16px 0;}.progress-bar.jsx-1107761816{position:absolute;height:4px;background:#ffffff;left:0;right:20%;}.payback-controller.jsx-1107761816{position:absolute;height:20px;width:20px;border-radius:50%;border:4px solid #131414;right:0;top:0;background:#fff;margin:-12px -12px;}.progress-time.jsx-1107761816{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#979797;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvQXVkaW9Db250cm9scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRmtCLEFBR21DLEFBVUEsQUFZQSxBQUlaLEFBR0MsQUFNRyxBQUlMLEFBT0MsQUFHRCxBQU9PLEFBT0EsQUFXTCxXQWxDRCxBQVVPLENBdkJyQixBQW9CQSxJQVhjLEVBcUJELEFBT0MsS0F2Qk0sQ0F4Q1AsQUFVSyxBQVlsQixJQWNBLENBcUJxQixDQVBSLEFBY0EsS0EvRGMsTUF3Q0YsQUFVTCxBQWNBLE9BUFgsT0FDRyxJQVBJLEFBY1csQ0FoRWQsSUF3Q0ssQ0FrQmxCLE1BekRlLEVBa0RmLENBeEIrQixBQTZDQyxNQS9CaEMsSUF2QzBCLEFBK0RoQixDQXhESSxPQXlETixLQXhETyxDQXlERyxVQWhFUSxFQVFOLElBeURDLGNBeERNLEtBeUQzQixvQkF4RGlCLFdBVGpCLElBV2tCLGdCQUNsQixLQXlEZ0IsUUE3Q0ssTUE4Q0osZUFDakIsd0VBOUNvQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2VkZ2FybG9wZXovQ29kZS9jb3Vyc2VzL3JlYWN0L25leHQvcG9kY2FzdHMvY29tcG9uZW50cy9BdWRpb0NvbnRyb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTWRQYXVzZSwgTWRQbGF5QXJyb3csIE1kU2tpcFByZXZpb3VzLCBNZFNraXBOZXh0IH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHtQbGF5ZXJDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdWRpb0NvbnRyb2xzKHtjbGlwU3JjfSkge1xuICBjb25zdCB7XG4gICAgY3VycmVudFNvbmcsXG4gICAgcGxheWluZyxcbiAgICB0b2dnbGVQbGF5aW5nXG4gIH0gPSB1c2VDb250ZXh0KFBsYXllckNvbnRleHQpXG5cbiAgY29uc3QgYXVkaW8gPSB1c2VSZWYoJ2F1ZGlvX3RhZycpXG5cbiAgY29uc3QgW3N0YXRlVm9sdW1lLCBzZXRTdGF0ZVZvbHVtZV0gPSB1c2VTdGF0ZSgwLjUpO1xuICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY3VycmVudFRpbWUsIHNldEN1cnJlbnRUaW1lXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGZtdE1TUyA9IChzKSA9PiB7XG4gICAgcmV0dXJuIChzIC0gKHMgJT0gNjApKSAvIDYwICsgKDkgPCBzID8gJzonIDogJzowJykgKyB+fnM7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlQXVkaW8gPSAoKSA9PlxuICAgIGF1ZGlvLmN1cnJlbnQucGF1c2VkID8gYXVkaW8uY3VycmVudC5wbGF5KCkgOiBhdWRpby5jdXJyZW50LnBhdXNlKCk7XG5cbiAgY29uc3QgaGFuZGxlUHJvZ3Jlc3MgPSBlID0+IHtcbiAgICBsZXQgY29tcHV0ZSA9IChlLnRhcmdldC52YWx1ZSAqIGR1cmF0aW9uKSAvIDEwMDtcbiAgICBzZXRDdXJyZW50VGltZShjb21wdXRlKTtcbiAgICBhdWRpby5jdXJyZW50LmN1cnJlbnRUaW1lID0gY29tcHV0ZTsgICBcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXVkaW8uY3VycmVudC52b2x1bWUgPSBzdGF0ZVZvbHVtZVxuICAgIGlmIChwbGF5aW5nKSB7XG4gICAgICB0b2dnbGVBdWRpbygpO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRTb25nXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXInPlxuICAgICAgPGF1ZGlvXG4gICAgICAgIG9uQ2FuUGxheT17KGUpID0+IHNldER1cmF0aW9uKGUudGFyZ2V0LmR1cmF0aW9uKX1cbiAgICAgICAgb25UaW1lVXBkYXRlPXtlID0+IHNldEN1cnJlbnRUaW1lKGUudGFyZ2V0LmN1cnJlbnRUaW1lKX1cblxuICAgICAgICByZWY9e2F1ZGlvfVxuICAgICAgICBhdXRvUGxheT17ZmFsc2V9XG4gICAgICA+XG4gICAgICAgIDxzb3VyY2UgcHJlbG9hZD0ndHJ1ZScgc3JjPXtjbGlwU3JjfSB0eXBlPSdhdWRpby9tcGVnJyAvPlxuICAgICAgPC9hdWRpbz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4tcGxheWVyJz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2NvbnRyb2xsZXItYnV0dG9uJz5cbiAgICAgICAgICA8TWRTa2lwUHJldmlvdXMgY29sb3I9J3doaXRlJyBzaXplPSczZW0nIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPSdwbGF5LWJ1dHRvbidcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICB0b2dnbGVBdWRpbygpO1xuICAgICAgICAgICAgdG9nZ2xlUGxheWluZygpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7cGxheWluZyA/IChcbiAgICAgICAgICAgIDxNZFBhdXNlIGNvbG9yPSd3aGl0ZScgc2l6ZT0nM2VtJyAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TWRQbGF5QXJyb3cgY29sb3I9J3doaXRlJyBzaXplPSczZW0nIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7LyogPE1kUGxheUFycm93IGNvbG9yPSd3aGl0ZScgc2l6ZT0nM2VtJyAvPiAqL31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdjb250cm9sbGVyLWJ1dHRvbic+XG4gICAgICAgICAgPE1kU2tpcE5leHQgY29sb3I9J3doaXRlJyBzaXplPSczZW0nIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxpbnB1dFxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlUHJvZ3Jlc3N9XG4gICAgICAgIHZhbHVlPXtkdXJhdGlvbiA/IChjdXJyZW50VGltZSAqIDEwMCkgLyBkdXJhdGlvbiA6IDB9XG4gICAgICAgIHR5cGU9J3JhbmdlJ1xuICAgICAgICBuYW1lPSdwcm9ncmVzc2JhcidcbiAgICAgICAgaWQ9J3BncmJhcidcbiAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXInXG4gICAgICAvPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sLWJhcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9ncmVzcy1iYXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXliYWNrLWNvbnRyb2xsZXInIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZ3Jlc3MtdGltZSc+XG4gICAgICAgIDxkaXY+e2ZtdE1TUyhjdXJyZW50VGltZSl9PC9kaXY+XG4gICAgICAgIDxkaXY+e2ZtdE1TUyhkdXJhdGlvbil9PC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuc2xpZGVyIHtcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVlNWY1ZjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gICAgICAgIH1cblxuICAgICAgICAuc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgd2lkdGg6IDIuNWVtO1xuICAgICAgICAgIGhlaWdodDogMi41ZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICMxMzE0MTQ7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAucGxheWVyIHtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLm1haW4tcGxheWVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgICAgICB9XG4gICAgICAgIC5jb250cm9sbGVyLWJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnBsYXktYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogNzJweDtcbiAgICAgICAgICBoZWlnaHQ6IDcycHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnBsYXktYnV0dG9uOmZvY3Vze1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuY29udHJvbC1iYXIge1xuICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM1ZTVmNWY7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9ncmVzcy1iYXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDIwJTtcbiAgICAgICAgfVxuICAgICAgICAucGF5YmFjay1jb250cm9sbGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjMTMxNDE0O1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIG1hcmdpbjogLTEycHggLTEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2dyZXNzLXRpbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGNvbG9yOiAjOTc5Nzk3O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/edgarlopez/Code/courses/react/next/podcasts/components/AudioControls.js */"));
}

/***/ })

})
//# sourceMappingURL=[podcast].js.9e13a1c2a707a5e01e22.hot-update.js.map