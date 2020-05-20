webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Player */ "./components/Player.js");
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/PlayerContext */ "./contexts/PlayerContext.js");
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Layout(_ref) {
  var children = _ref.children,
      title = _ref.title;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__["PlayerContext"]),
      currentSong = _useContext.currentSong;

  return __jsx("div", {
    className: "jsx-3586844997",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-3586844997",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, title), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-3586844997",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet",
    className: "jsx-3586844997",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-3586844997" + " " + 'content',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, children), currentSong && __jsx(_Player__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3586844997",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');body{margin:0;background:#fff;font-family:'Roboto',sans-serif;}.content{padding-bottom:130px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCeUIsQUFFaUcsQUFFN0UsQUFLWSxTQUpMLFlBS2xCLElBSm1DLGdDQUNuQyIsImZpbGUiOiIvVXNlcnMvZWRnYXJsb3Blei9Db2RlL2NvdXJzZXMvcmVhY3QvbmV4dC9wb2RjYXN0cy9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQge1BsYXllckNvbnRleHR9IGZyb20gJy4uL2NvbnRleHRzL1BsYXllckNvbnRleHQnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0ICh7Y2hpbGRyZW4sIHRpdGxlfSkge1xuICBcbiAgY29uc3Qge2N1cnJlbnRTb25nfSA9IHVzZUNvbnRleHQoUGxheWVyQ29udGV4dClcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cblxuICAgICAge2N1cnJlbnRTb25nICYmIChcbiAgICAgICAgPFBsYXllciAvPlxuICAgICAgKX1cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTMwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/edgarlopez/Code/courses/react/next/podcasts/components/Layout.js */"));
}

/***/ }),

/***/ "./components/Player.js":
/*!******************************!*\
  !*** ./components/Player.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _TranslucentImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TranslucentImage */ "./components/TranslucentImage.js");
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/PlayerContext */ "./contexts/PlayerContext.js");
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/components/Player.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Player() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__["PlayerContext"]),
      currentSong = _useContext.currentSong;

  return __jsx("div", {
    className: "jsx-2361619659",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2361619659" + " " + 'player',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2361619659" + " " + 'info-container',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2361619659" + " " + 'img-container',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx(_TranslucentImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    clipUrls: currentSong.urls,
    channelUrls: currentSong.channel.urls,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-2361619659" + " " + 'info',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-2361619659",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, currentSong.title), __jsx("h4", {
    className: "jsx-2361619659",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, currentSong.channel.title))), __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdPause"], {
    size: "2em",
    color: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2361619659",
    __self: this
  }, ".info-container.jsx-2361619659{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;}.player.jsx-2361619659{background:#131414;position:fixed;height:6em;right:0;left:0;bottom:0;margin:0 -1px -1px -1px;border-radius:20px 20px 0 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 0.8em;}.info.jsx-2361619659{margin-left:1em;position:relative;}.info.jsx-2361619659 h3.jsx-2361619659,.info.jsx-2361619659 h4.jsx-2361619659{max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.img-container.jsx-2361619659{width:3.5em;height:3.5em;position:relative;}img.jsx-2361619659{width:100%;height:100%;border-radius:15px;}.banner-shadow.jsx-2361619659{position:absolute;top:0;margin:0;width:100%;height:100%;border-radius:15px;-webkit-filter:blur(20px);filter:blur(20px);z-index:-1;opacity:0.5;}h3.jsx-2361619659{color:#fff;font-size:0.85em;font-weight:bold;margin:0 0 4px;}h4.jsx-2361619659{color:#a8a8a8;font-size:0.7em;font-weight:400;margin:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvUGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDa0IsQUFHd0IsQUFLTSxBQWNILEFBS0QsQUFNSCxBQUtELEFBS08sQUFXUCxBQU1HLFdBckJGLEFBZ0JLLENBckJKLEVBMkJHLENBakNHLENBTEQsRUFxQlosQ0FuQ1MsSUErQkksQ0FLVixDQVZTLEdBcUJELEVBTUQsR0FoQkwsQ0FwQ0EsQUFjYixBQUtrQixRQVlsQixDQUxBLENBV2MsQ0FwQ0osQUE4Q08sQ0FNTixJQWpDYyxHQWxCaEIsRUFvRGtCLENBaEJOLElBbkNWLEFBNkNYLFNBNUMwQixJQWlCMUIsQ0EzQnFCLENBNkNELEtBZ0JwQixhQWxEOEIsMEJBbUNqQixFQWxDRSxTQW1DRCxZQUNkLHlCQS9Db0Isa0JBQ3BCLFVBV2dDLG1IQUNYLDZGQUNILGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvZWRnYXJsb3Blei9Db2RlL2NvdXJzZXMvcmVhY3QvbmV4dC9wb2RjYXN0cy9jb21wb25lbnRzL1BsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TWRQYXVzZX0gZnJvbSAncmVhY3QtaWNvbnMvbWQnXG5pbXBvcnQgVHJhbnNsdWNlbnRJbWFnZSBmcm9tICcuL1RyYW5zbHVjZW50SW1hZ2UnO1xuaW1wb3J0IHtQbGF5ZXJDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIoKSB7XG4gIGNvbnN0IHsgY3VycmVudFNvbmcgfSA9IHVzZUNvbnRleHQoUGxheWVyQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5mby1jb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWctY29udGFpbmVyJz5cbiAgICAgICAgICAgIHsvKiA8VHJhbnNsdWNlbnRJbWFnZVxuICAgICAgICAgICAgICBjbGlwVXJscz17Y2xpcC51cmxzfVxuICAgICAgICAgICAgICBjaGFubmVsVXJscz17Y2xpcC5jaGFubmVsLnVybHN9XG4gICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgIDxUcmFuc2x1Y2VudEltYWdlXG4gICAgICAgICAgICAgIGNsaXBVcmxzPXtjdXJyZW50U29uZy51cmxzfVxuICAgICAgICAgICAgICBjaGFubmVsVXJscz17Y3VycmVudFNvbmcuY2hhbm5lbC51cmxzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiA8aW1nXG4gICAgICAgICAgICAgIHNyYz0naHR0cHM6Ly9pbWFnZXMudGhlYWJjZG4uY29tL2kvMjEyODU3NTgnXG4gICAgICAgICAgICAgIGFsdD0nJ1xuICAgICAgICAgICAgICBzcmNTZXQ9JydcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmFubmVyLXNoYWRvdydcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly9pbWFnZXMudGhlYWJjZG4uY29tL2kvMjEyODU3NTh9KWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5mbyc+XG4gICAgICAgICAgICA8aDM+e2N1cnJlbnRTb25nLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8aDQ+e2N1cnJlbnRTb25nLmNoYW5uZWwudGl0bGV9PC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNZFBhdXNlIHNpemU9JzJlbScgY29sb3I9J3doaXRlJyAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmluZm8tY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5wbGF5ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMxMzE0MTQ7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGhlaWdodDogNmVtO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIG1hcmdpbjogMCAtMXB4IC0xcHggLTFweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjhlbTtcbiAgICAgICAgfVxuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8gaDMsXG4gICAgICAgIC5pbmZvIGg0IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB9XG4gICAgICAgIC5pbWctY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMy41ZW07XG4gICAgICAgICAgaGVpZ2h0OiAzLjVlbTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAuYmFubmVyLXNoYWRvdyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgZmlsdGVyOiBibHVyKDIwcHgpO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgfVxuICAgICAgICBoMyB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgNHB4O1xuICAgICAgICB9XG4gICAgICAgIGg0IHtcbiAgICAgICAgICBjb2xvcjogI2E4YThhODtcbiAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/edgarlopez/Code/courses/react/next/podcasts/components/Player.js */"));
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fedgarlopez%2FCode%2Fcourses%2Freact%2Fnext%2Fpodcasts%2Fpages%2F_error.js&hotRouterUpdates=true!./":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fedgarlopez%2FCode%2Fcourses%2Freact%2Fnext%2Fpodcasts%2Fpages%2F_error.js&hotRouterUpdates=true ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        var mod = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js");
        if (true) {
          module.hot.accept(/*! ./pages/_error.js */ "./pages/_error.js", function () {
            if (!next.router.components["/_error"]) return;
            var updatedPage = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js");
            next.router.update("/_error", updatedPage);
          });
        }
        return mod;
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error&hotRouterUpdates=true!./":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/pages/_error.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Error(_ref) {
  var statusCode = _ref.statusCode;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Oh no... :C",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, statusCode === 404 ? __jsx("div", {
    className: "jsx-1794700240" + " " + "message",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-1794700240",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "Esta p\xE1gina no existe! :c"), __jsx("p", {
    className: "jsx-1794700240",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 12
    }
  }, __jsx("a", {
    className: "jsx-1794700240",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 27
    }
  }, "Volver al Home")))) : __jsx("div", {
    className: "jsx-1794700240" + " " + "message",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-1794700240",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "Hubo un problema"), __jsx("p", {
    className: "jsx-1794700240",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Intenta nuevamente en algunos segundos")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1794700240",
    __self: this
  }, ".message.jsx-1794700240{padding:100px;text-align:center;}h1.jsx-1794700240{margin-bottom:2em;}a.jsx-1794700240{color:#8756ca;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL3BhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmtCLEFBR3lCLEFBSUUsQUFJckIsY0FQdUIsQUFPdEIsSUFIQSxjQUhFIiwiZmlsZSI6Ii9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL3BhZ2VzL19lcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIEVycm9yKHsgc3RhdHVzQ29kZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT0nT2ggbm8uLi4gOkMnPlxuICAgICAgeyBzdGF0dXNDb2RlID09PSA0MDQgP1xuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XG4gICAgICAgIDxoMT5Fc3RhIHDDoWdpbmEgbm8gZXhpc3RlISA6YzwvaDE+XG4gICAgICAgIDxwPjxMaW5rIGhyZWY9Jy8nPjxhPlZvbHZlciBhbCBIb21lPC9hPjwvTGluaz48L3A+XG4gICAgICA8L2Rpdj4gOlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XG4gICAgICAgIDxoMT5IdWJvIHVuIHByb2JsZW1hPC9oMT5cbiAgICAgICAgPHA+SW50ZW50YSBudWV2YW1lbnRlIGVuIGFsZ3Vub3Mgc2VndW5kb3M8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICAgIFxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgIHBhZGRpbmc6IDEwMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICM4NzU2Y2FcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuRXJyb3IuZ2V0SW5pdGlhbFByb3BzID0gKHsgcmVzLCBlcnIgfSkgPT4ge1xuICBjb25zdCBzdGF0dXNDb2RlID0gcmVzID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IDQwNDtcbiAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3I7XG4iXX0= */\n/*@ sourceURL=/Users/edgarlopez/Code/courses/react/next/podcasts/pages/_error.js */"));
}

Error.getInitialProps = function (_ref2) {
  var res = _ref2.res,
      err = _ref2.err;
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ 2:
/*!*********************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fedgarlopez%2FCode%2Fcourses%2Freact%2Fnext%2Fpodcasts%2Fpages%2F_error.js&hotRouterUpdates=true ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fedgarlopez%2FCode%2Fcourses%2Freact%2Fnext%2Fpodcasts%2Fpages%2F_error.js&hotRouterUpdates=true! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fedgarlopez%2FCode%2Fcourses%2Freact%2Fnext%2Fpodcasts%2Fpages%2F_error.js&hotRouterUpdates=true!./");


/***/ })

})
//# sourceMappingURL=_error.js.1699354f34cb706d8e01.hot-update.js.map