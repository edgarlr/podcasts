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
    className: "jsx-3844230689" + " " + 'player',
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
    className: "jsx-3844230689",
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
    className: "jsx-3844230689",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-3844230689" + " " + 'main-player',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "jsx-3844230689" + " " + 'controller-button',
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
    className: "jsx-3844230689" + " " + 'play-button',
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
    className: "jsx-3844230689" + " " + 'controller-button',
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
    className: "jsx-3844230689" + " " + 'slider',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-3844230689" + " " + 'progress-time',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3844230689",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, fmtMSS(currentTime)), __jsx("div", {
    className: "jsx-3844230689",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, fmtMSS(duration))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3844230689",
    __self: this
  }, ".slider.jsx-3844230689{-webkit-appearance:none;height:4px;background-color:#5e5f5f;width:100%;outline:none;-webkit-transition:0.2s;-webkit-transition:opacity 0.2s;transition:opacity 0.2s;}.slider.jsx-3844230689::-webkit-slider-thumb{-webkit-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:2.5em;height:2.5em;border-radius:50%;border:4px solid #131414;cursor:pointer;background:#fff;box-shadow:-210px 0 0 200px #fff;}.slider.jsx-3844230689::-webkit-slider-runnable-track{-webkit-appearance:none;}.player.jsx-3844230689{height:auto;}.main-player.jsx-3844230689{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10%;}.controller-button.jsx-3844230689{background:none;border:none;}.play-button.jsx-3844230689{width:72px;height:72px;border-radius:50%;border:1px solid white;background:none;}.control-bar.jsx-3844230689{height:4px;background:#5e5f5f;width:100%;position:relative;margin:16px 0;}.progress-bar.jsx-3844230689{position:absolute;height:4px;background:#ffffff;left:0;right:20%;}.payback-controller.jsx-3844230689{position:absolute;height:20px;width:20px;border-radius:50%;border:4px solid #131414;right:0;top:0;background:#fff;margin:-12px -12px;}.progress-time.jsx-3844230689{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#979797;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvQXVkaW9Db250cm9scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRmtCLEFBR21DLEFBVUEsQUFhQSxBQUlaLEFBR0MsQUFNRyxBQUlMLEFBT0EsQUFPTyxBQU9BLEFBV0wsV0EvQkQsQUFPTyxDQXBCckIsSUFTYyxFQWtCRCxBQU9DLEtBcEJNLENBekNQLEFBVUssQUFhbEIsSUFjQSxDQWtCcUIsQ0FQUixBQWNBLEtBN0RjLE1BeUNGLEFBT0wsQUFjQSxPQVBYLE9BQ0csSUFQSSxBQWNXLENBOURkLElBeUNLLENBZWxCLE1BdkRlLEVBZ0RmLENBckIrQixBQTBDQyxNQTVCaEMsSUF4QzBCLEFBNkRoQixDQXRESSxPQXVETixLQXRETyxDQXVERyxVQTlEUSxFQVFOLElBdURDLGNBdERNLEtBdUQzQixvQkF0RGlCLFdBVGpCLElBV2tCLGdCQUNpQixLQXVEbkIsUUExQ0ssTUEyQ0osY0F2RGpCLENBd0RBLHdFQTNDb0Isa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvQXVkaW9Db250cm9scy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1kUGF1c2UsIE1kUGxheUFycm93LCBNZFNraXBQcmV2aW91cywgTWRTa2lwTmV4dCB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCB7UGxheWVyQ29udGV4dH0gZnJvbSAnLi4vY29udGV4dHMvUGxheWVyQ29udGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXVkaW9Db250cm9scyh7Y2xpcFNyY30pIHtcbiAgY29uc3Qge1xuICAgIGN1cnJlbnRTb25nLFxuICAgIHBsYXlpbmcsXG4gICAgdG9nZ2xlUGxheWluZ1xuICB9ID0gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KVxuXG4gIGNvbnN0IGF1ZGlvID0gdXNlUmVmKCdhdWRpb190YWcnKVxuXG4gIGNvbnN0IFtzdGF0ZVZvbHVtZSwgc2V0U3RhdGVWb2x1bWVdID0gdXNlU3RhdGUoMC41KTtcbiAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2N1cnJlbnRUaW1lLCBzZXRDdXJyZW50VGltZV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBmbXRNU1MgPSAocykgPT4ge1xuICAgIHJldHVybiAocyAtIChzICU9IDYwKSkgLyA2MCArICg5IDwgcyA/ICc6JyA6ICc6MCcpICsgfn5zO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUF1ZGlvID0gKCkgPT5cbiAgICBhdWRpby5jdXJyZW50LnBhdXNlZCA/IGF1ZGlvLmN1cnJlbnQucGxheSgpIDogYXVkaW8uY3VycmVudC5wYXVzZSgpO1xuXG4gIGNvbnN0IGhhbmRsZVByb2dyZXNzID0gZSA9PiB7XG4gICAgbGV0IGNvbXB1dGUgPSAoZS50YXJnZXQudmFsdWUgKiBkdXJhdGlvbikgLyAxMDA7XG4gICAgc2V0Q3VycmVudFRpbWUoY29tcHV0ZSk7XG4gICAgYXVkaW8uY3VycmVudC5jdXJyZW50VGltZSA9IGNvbXB1dGU7ICAgXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF1ZGlvLmN1cnJlbnQudm9sdW1lID0gc3RhdGVWb2x1bWVcbiAgICBpZiAocGxheWluZykge1xuICAgICAgdG9nZ2xlQXVkaW8oKTtcbiAgICB9XG4gIH0sIFtjdXJyZW50U29uZ10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncGxheWVyJz5cbiAgICAgIDxhdWRpb1xuICAgICAgICBvbkNhblBsYXk9eyhlKSA9PiBzZXREdXJhdGlvbihlLnRhcmdldC5kdXJhdGlvbil9XG4gICAgICAgIG9uVGltZVVwZGF0ZT17ZSA9PiBzZXRDdXJyZW50VGltZShlLnRhcmdldC5jdXJyZW50VGltZSl9XG5cbiAgICAgICAgcmVmPXthdWRpb31cbiAgICAgICAgYXV0b1BsYXk9e2ZhbHNlfVxuICAgICAgPlxuICAgICAgICA8c291cmNlIHByZWxvYWQ9J3RydWUnIHNyYz17Y2xpcFNyY30gdHlwZT0nYXVkaW8vbXBlZycgLz5cbiAgICAgIDwvYXVkaW8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluLXBsYXllcic+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdjb250cm9sbGVyLWJ1dHRvbic+XG4gICAgICAgICAgPE1kU2tpcFByZXZpb3VzIGNvbG9yPSd3aGl0ZScgc2l6ZT0nM2VtJyAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT0ncGxheS1idXR0b24nXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlQXVkaW8oKTtcbiAgICAgICAgICAgIHRvZ2dsZVBsYXlpbmcoKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3BsYXlpbmcgPyAoXG4gICAgICAgICAgICA8TWRQYXVzZSBjb2xvcj0nd2hpdGUnIHNpemU9JzNlbScgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPE1kUGxheUFycm93IGNvbG9yPSd3aGl0ZScgc2l6ZT0nM2VtJyAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgey8qIDxNZFBsYXlBcnJvdyBjb2xvcj0nd2hpdGUnIHNpemU9JzNlbScgLz4gKi99XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nY29udHJvbGxlci1idXR0b24nPlxuICAgICAgICAgIDxNZFNraXBOZXh0IGNvbG9yPSd3aGl0ZScgc2l6ZT0nM2VtJyAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aW5wdXRcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVByb2dyZXNzfVxuICAgICAgICB2YWx1ZT17ZHVyYXRpb24gPyAoY3VycmVudFRpbWUgKiAxMDApIC8gZHVyYXRpb24gOiAwfVxuICAgICAgICB0eXBlPSdyYW5nZSdcbiAgICAgICAgbmFtZT0ncHJvZ3Jlc3NiYXInXG4gICAgICAgIGlkPSdwZ3JiYXInXG4gICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyJ1xuICAgICAgLz5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbC1iYXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZ3Jlc3MtYmFyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5YmFjay1jb250cm9sbGVyJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAqL31cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2dyZXNzLXRpbWUnPlxuICAgICAgICA8ZGl2PntmbXRNU1MoY3VycmVudFRpbWUpfTwvZGl2PlxuICAgICAgICA8ZGl2PntmbXRNU1MoZHVyYXRpb24pfTwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnNsaWRlciB7XG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZTVmNWY7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIHdpZHRoOiAyLjVlbTtcbiAgICAgICAgICBoZWlnaHQ6IDIuNWVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjMTMxNDE0O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgYm94LXNoYWRvdzogLTIxMHB4IDAgMCAyMDBweCAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbGF5ZXIge1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAubWFpbi1wbGF5ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRyb2xsZXItYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucGxheS1idXR0b24ge1xuICAgICAgICAgIHdpZHRoOiA3MnB4O1xuICAgICAgICAgIGhlaWdodDogNzJweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuY29udHJvbC1iYXIge1xuICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM1ZTVmNWY7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9ncmVzcy1iYXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDIwJTtcbiAgICAgICAgfVxuICAgICAgICAucGF5YmFjay1jb250cm9sbGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjMTMxNDE0O1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIG1hcmdpbjogLTEycHggLTEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2dyZXNzLXRpbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGNvbG9yOiAjOTc5Nzk3O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/edgarlopez/Code/courses/react/next/podcasts/components/AudioControls.js */"));
}

/***/ })

})
//# sourceMappingURL=[podcast].js.64567f2cc8f755423260.hot-update.js.map