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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/EpisodeList.js":
/*!***********************************!*\
  !*** ./components/EpisodeList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EpisodeList; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FiltersIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FiltersIcon */ "./components/FiltersIcon.js");
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/PlayerContext */ "./contexts/PlayerContext.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/components/EpisodeList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function EpisodeList({
  audioClips
}) {
  const {
    SetCurrentIndex,
    currentSongIndex,
    SetCurrent,
    SetPlaylist
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__["PlayerContext"]);
  const {
    0: playlist,
    1: setPlaylist
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const onPodcastClick = (podcast, channelId, index) => {
    SetPlaylist(playlist);
    SetCurrentIndex(index);
    SetCurrent(podcast);
    const podcastId = podcast.id;
    router.push({
      pathname: `/[channel]/[podcast]`,
      query: {
        podcastId: podcastId
      },
      as: `/${channelId}/${podcastId}`
    }, `/${channelId}/${podcastId}`);
    console.log(router.query);
  };

  const {
    0: list,
    1: setList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(audioClips);
  const {
    0: sortType,
    1: setSortType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('uploaded_at');
  const {
    0: isReversed,
    1: setIsReversed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const sorted = (key, list, isReversed) => {
      if (isReversed) {
        return [...list].sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
      } else if (key === 'counts') {
        return [...list].sort((a, b) => a[key].plays < b[key].plays ? 1 : a[key].plays > b[key].plays ? -1 : 0);
      }

      return [...list].sort((a, b) => a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0);
    };

    setList(sorted(sortType, list, isReversed));
    const playlistArray = list.map(clip => clip.id);
    setPlaylist(playlistArray);
  }, [sortType, isReversed]);

  const handleFilterClick = type => {
    if (type === 'latest') {
      setSortType('uploaded_at');
      setIsReversed(false);
    } else if (type === 'popular') {
      setSortType('counts');
      setIsReversed(false);
    } else {
      setSortType('uploaded_at');
      setIsReversed(true);
    }
  };

  return __jsx("div", {
    className: "jsx-794169196",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-794169196" + " " + 'episodes-header',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "jsx-794169196",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, `${audioClips.length} EPISODIOS`), __jsx(_FiltersIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleFilterClick: handleFilterClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  })), list.map((clip, index) => __jsx("div", {
    onClick: () => onPodcastClick(clip, clip.channel.id, index),
    key: clip.id,
    className: "jsx-794169196" + " " + ('episode ' + (currentSongIndex === index ? 'active' : '') || false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-794169196",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, clip.title), __jsx("div", {
    className: "jsx-794169196" + " " + 'meta',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, Math.ceil(clip.duration / 60), " minutes"), __jsx("p", {
    className: "jsx-794169196",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, clip.title), __jsx("p", {
    className: "jsx-794169196",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, clip.counts.plays, " reproducciones"), currentSongIndex === index && __jsx("span", {
    className: "jsx-794169196",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdVolumeUp"], {
    size: "2em",
    color: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "794169196",
    __self: this
  }, ".episodes-header.jsx-794169196{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:30px 0;text-align:left;border-bottom:1px solid #e2e2e2;}h3.jsx-794169196{font-size:12px;font-weight:600;margin:0;}.episode.jsx-794169196{display:block;-webkit-text-decoration:none;text-decoration:none;margin:0 0.6em;padding:16px 0;border-bottom:1px solid #e2e2e2;cursor:pointer;}.active.jsx-794169196{background:black;color:white;margin:0;padding:16px 1em;border-bottom:none;border-radius:20px;position:relative;text-align:left;}.active.jsx-794169196 h2.jsx-794169196,.active.jsx-794169196 p.jsx-794169196{width:70%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.active.jsx-794169196 span.jsx-794169196{position:absolute;right:20px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.episode.jsx-794169196:hover{color:#000;}h2.jsx-794169196{margin:16px 0;font-size:16px;}.episode.jsx-794169196 .meta.jsx-794169196{color:#979797;font-size:12px;margin-bottom:8px;}p.jsx-794169196{color:#979797;font-size:12px;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvRXBpc29kZUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0ZrQixBQUd3QixBQVFFLEFBS0QsQUFRRyxBQVdQLEFBTVEsQUFNUCxBQUdHLEFBSUEsQUFLQSxVQXZCSyxDQVlyQixHQS9CdUIsQUFrQ04sQUFJQSxBQUtBLENBaERDLEVBYUosQ0FpQkQsV0FoQkYsQUFXTyxBQU1SLEFBU1YsQUFJb0IsQUFLVCxFQWhEQSxNQStCa0IsQ0FqQlYsQUFtQ25CLEVBaERBLEtBd0J5QixFQW1CekIsUUE3QnFCLFNBVkosSUFxQmpCLE1BbkNnQyxBQXlCWCxLQVZKLGNBV0csQ0FWYyxpQkFXaEIsZUFWRCxDQVdqQixHQWFBLFdBdkJBLGdEQWpCcUIsNkZBQ0osZUFDQyxnQkFDZ0IsZ0NBQ2xDIiwiZmlsZSI6Ii9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvRXBpc29kZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBGaWx0ZXJzSWNvbiBmcm9tICcuL0ZpbHRlcnNJY29uJztcbmltcG9ydCB7UGxheWVyQ29udGV4dH0gZnJvbSAnLi4vY29udGV4dHMvUGxheWVyQ29udGV4dCdcbmltcG9ydCB7TWRWb2x1bWVVcH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVwaXNvZGVMaXN0ICh7YXVkaW9DbGlwc30pIHtcbiAgY29uc3QgeyBTZXRDdXJyZW50SW5kZXgsIGN1cnJlbnRTb25nSW5kZXgsIFNldEN1cnJlbnQsIFNldFBsYXlsaXN0fSA9IHVzZUNvbnRleHQoUGxheWVyQ29udGV4dClcbiAgY29uc3QgW3BsYXlsaXN0LCBzZXRQbGF5bGlzdF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBvblBvZGNhc3RDbGljayA9IChwb2RjYXN0LCBjaGFubmVsSWQsIGluZGV4KSA9PiB7XG4gICAgU2V0UGxheWxpc3QocGxheWxpc3QpXG4gICAgU2V0Q3VycmVudEluZGV4KGluZGV4KVxuICAgIFNldEN1cnJlbnQocG9kY2FzdClcbiAgICBjb25zdCBwb2RjYXN0SWQgPSBwb2RjYXN0LmlkXG5cbiAgICByb3V0ZXIucHVzaChcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6IGAvW2NoYW5uZWxdL1twb2RjYXN0XWAsXG4gICAgICAgIHF1ZXJ5OiB7IHBvZGNhc3RJZDogcG9kY2FzdElkIH0sXG4gICAgICAgIGFzOiBgLyR7Y2hhbm5lbElkfS8ke3BvZGNhc3RJZH1gLFxuICAgICAgfSxcbiAgICAgIGAvJHtjaGFubmVsSWR9LyR7cG9kY2FzdElkfWBcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSk7XG4gICAgXG4gIH1cblxuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShhdWRpb0NsaXBzKVxuXG4gIGNvbnN0IFtzb3J0VHlwZSwgc2V0U29ydFR5cGVdID0gdXNlU3RhdGUoJ3VwbG9hZGVkX2F0JylcbiAgY29uc3QgW2lzUmV2ZXJzZWQsIHNldElzUmV2ZXJzZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4geyBcbiAgICBjb25zdCBzb3J0ZWQgPSAoa2V5LCBsaXN0LCBpc1JldmVyc2VkKSA9PiB7XG4gICAgICBpZiAoaXNSZXZlcnNlZCkge1xuICAgICAgICByZXR1cm4gWy4uLmxpc3RdLnNvcnQoKGEsYikgPT4gKGFba2V5XSA+IGJba2V5XSA/IDEgOiBhW2tleV0gPCBiW2tleV0gPyAtMSA6IDApKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoa2V5ID09PSAnY291bnRzJykge1xuICAgICAgICByZXR1cm4gWy4uLmxpc3RdLnNvcnQoKGEsYikgPT4gKGFba2V5XS5wbGF5cyA8IGJba2V5XS5wbGF5cyA/IDEgOiBhW2tleV0ucGxheXMgPiBiW2tleV0ucGxheXMgPyAtMSA6IDApKVxuICAgICAgfVxuICAgICAgcmV0dXJuIFsuLi5saXN0XS5zb3J0KChhLGIpID0+IChhW2tleV0gPCBiW2tleV0gPyAxIDogYVtrZXldID4gYltrZXldID8gLTEgOiAwKSlcbiAgICB9XG4gICAgc2V0TGlzdChzb3J0ZWQoc29ydFR5cGUsIGxpc3QsIGlzUmV2ZXJzZWQpKTtcblxuXG4gICAgY29uc3QgcGxheWxpc3RBcnJheSA9IGxpc3QubWFwKChjbGlwKSA9PiBjbGlwLmlkKTtcbiAgICBzZXRQbGF5bGlzdChwbGF5bGlzdEFycmF5KTtcblxuICB9LCBbc29ydFR5cGUsIGlzUmV2ZXJzZWRdKVxuXG4gIGNvbnN0IGhhbmRsZUZpbHRlckNsaWNrID0gKHR5cGUpID0+IHtcbiAgICBpZiAodHlwZSA9PT0gJ2xhdGVzdCcpIHtcbiAgICAgIHNldFNvcnRUeXBlKCd1cGxvYWRlZF9hdCcpXG4gICAgICBzZXRJc1JldmVyc2VkKGZhbHNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3BvcHVsYXInKSB7XG4gICAgICBzZXRTb3J0VHlwZSgnY291bnRzJyk7XG4gICAgICBzZXRJc1JldmVyc2VkKGZhbHNlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXRTb3J0VHlwZSgndXBsb2FkZWRfYXQnKTtcbiAgICAgIHNldElzUmV2ZXJzZWQodHJ1ZSk7XG4gICAgfVxuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZXBpc29kZXMtaGVhZGVyJz5cbiAgICAgICAgPGgzPntgJHthdWRpb0NsaXBzLmxlbmd0aH0gRVBJU09ESU9TYH08L2gzPlxuICAgICAgICA8RmlsdGVyc0ljb24gaGFuZGxlRmlsdGVyQ2xpY2s9e2hhbmRsZUZpbHRlckNsaWNrfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtsaXN0Lm1hcCgoY2xpcCwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17J2VwaXNvZGUgJyArIChjdXJyZW50U29uZ0luZGV4ID09PSBpbmRleCA/ICdhY3RpdmUnIDogJycpfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUG9kY2FzdENsaWNrKGNsaXAsIGNsaXAuY2hhbm5lbC5pZCwgaW5kZXgpfVxuICAgICAgICAgIGtleT17Y2xpcC5pZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgPGgyPntjbGlwLnRpdGxlfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21ldGEnPntNYXRoLmNlaWwoY2xpcC5kdXJhdGlvbiAvIDYwKX0gbWludXRlczwvZGl2PlxuICAgICAgICAgIDxwPntjbGlwLnRpdGxlfTwvcD5cbiAgICAgICAgICB7LyogPGRpdj57Y2xpcC5jb3VudHMucGxheXN9IHJlcHJvZHVjY2lvbmVzPC9kaXY+ICovfVxuICAgICAgICAgIDxwPntjbGlwLmNvdW50cy5wbGF5c30gcmVwcm9kdWNjaW9uZXM8L3A+XG4gICAgICAgICAge2N1cnJlbnRTb25nSW5kZXggPT09IGluZGV4ICYmIChcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8TWRWb2x1bWVVcCBzaXplPScyZW0nIGNvbG9yPSd3aGl0ZScgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5lcGlzb2Rlcy1oZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMzBweCAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmUyZTI7XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAuZXBpc29kZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogMCAwLjZlbTtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmUyZTI7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMTZweCAxZW07XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIC5hY3RpdmUgaDIsXG4gICAgICAgIC5hY3RpdmUgcCB7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGl2ZSBzcGFuIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG4gICAgICAgIC5lcGlzb2RlOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5lcGlzb2RlIC5tZXRhIHtcbiAgICAgICAgICBjb2xvcjogIzk3OTc5NztcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGNvbG9yOiAjOTc5Nzk3O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/edgarlopez/Code/courses/react/next/podcasts/components/EpisodeList.js */"));
}

/***/ }),

/***/ "./components/FiltersIcon.js":
/*!***********************************!*\
  !*** ./components/FiltersIcon.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FiltersIcon; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/components/FiltersIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function FiltersIcon({
  handleFilterClick
}) {
  const {
    0: showDropdown,
    1: setShowDropdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isActive,
    1: setIsActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('latest');

  const onBtnClick = e => {
    handleFilterClick(e.target.id);
    setIsActive(e.target.id);
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3616155877", [showDropdown ? 'block' : 'none', showDropdown ? '#999' : 'inherit']]]) + " " + 'sort',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    onClick: () => {
      showDropdown ? setShowDropdown(false) : setShowDropdown(true);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3616155877", [showDropdown ? 'block' : 'none', showDropdown ? '#999' : 'inherit']]]) + " " + 'icon',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdSort"], {
    size: "1.5em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3616155877", [showDropdown ? 'block' : 'none', showDropdown ? '#999' : 'inherit']]]) + " " + 'sort-dropdown',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("button", {
    id: "popular",
    onClick: onBtnClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3616155877", [showDropdown ? 'block' : 'none', showDropdown ? '#999' : 'inherit']]]) + " " + ((isActive === 'popular' ? 'active' : '') || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "M\xE1s Popuares"), __jsx("button", {
    id: "oldest",
    onClick: onBtnClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3616155877", [showDropdown ? 'block' : 'none', showDropdown ? '#999' : 'inherit']]]) + " " + ((isActive === 'oldest' ? 'active' : '') || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Fecha de subida (m\xE1s antiguos)"), __jsx("button", {
    id: "latest",
    onClick: onBtnClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3616155877", [showDropdown ? 'block' : 'none', showDropdown ? '#999' : 'inherit']]]) + " " + ((isActive === 'latest' ? 'active' : '') || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "Fecha de subida (m\xE1s recientes)")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3616155877",
    dynamic: [showDropdown ? 'block' : 'none', showDropdown ? '#999' : 'inherit'],
    __self: this
  }, `.sort.__jsx-style-dynamic-selector{position:relative;}.sort-dropdown.__jsx-style-dynamic-selector{display:${showDropdown ? 'block' : 'none'};box-shadow:0 2px 5px rgba(100,100,100,0.2);border-radius:20px;background:#fff;padding:15px 10px;position:absolute;right:0;width:15em;text-align:right;z-index:20000;}button.__jsx-style-dynamic-selector{outline:none;text-align:left;font-size:0.9em;padding:10px 10px;width:100%;background:transparent;border:none;}.active.__jsx-style-dynamic-selector{padding:10px 10px;color:white;background:#131414;border-radius:10px;}.icon.__jsx-style-dynamic-selector:hover{color:${showDropdown ? '#999' : 'inherit'};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvRmlsdGVyc0ljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NrQixBQUc2QixBQUdtQixBQVl4QixBQVNLLEFBTWlCLGFBZG5CLEtBZmxCLEFBd0JjLFdBUkksQ0FTRyxLQUtyQixFQTNCZ0QsUUFjNUIsSUFTQyxjQVJSLEtBU2IsTUFSeUIsTUFmSixpQkFnQlAsRUFmSSxVQWdCbEIsTUFmb0Isa0JBQ0Esa0JBQ1YsUUFDRyxXQUNNLGlCQUNILGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvRmlsdGVyc0ljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtNZFNvcnR9IGZyb20gJ3JlYWN0LWljb25zL21kJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWx0ZXJzSWNvbih7aGFuZGxlRmlsdGVyQ2xpY2t9KSB7XG4gIGNvbnN0IFtzaG93RHJvcGRvd24sIHNldFNob3dEcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZSgnbGF0ZXN0Jyk7XG5cbiAgY29uc3Qgb25CdG5DbGljayA9IGUgPT4ge1xuICAgIGhhbmRsZUZpbHRlckNsaWNrKGUudGFyZ2V0LmlkKTtcbiAgICBzZXRJc0FjdGl2ZShlLnRhcmdldC5pZClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3NvcnQnPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2ljb24nXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzaG93RHJvcGRvd24gPyBzZXRTaG93RHJvcGRvd24oZmFsc2UpIDogc2V0U2hvd0Ryb3Bkb3duKHRydWUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxNZFNvcnQgc2l6ZT0nMS41ZW0nIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzb3J0LWRyb3Bkb3duJz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGlkPSdwb3B1bGFyJ1xuICAgICAgICAgIG9uQ2xpY2s9e29uQnRuQ2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPXtpc0FjdGl2ZSA9PT0gJ3BvcHVsYXInID8gJ2FjdGl2ZScgOiAnJ31cbiAgICAgICAgPlxuICAgICAgICAgIE3DoXMgUG9wdWFyZXNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBpZD0nb2xkZXN0J1xuICAgICAgICAgIG9uQ2xpY2s9e29uQnRuQ2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPXtpc0FjdGl2ZSA9PT0gJ29sZGVzdCcgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICA+XG4gICAgICAgICAgRmVjaGEgZGUgc3ViaWRhIChtw6FzIGFudGlndW9zKVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGlkPSdsYXRlc3QnXG4gICAgICAgICAgb25DbGljaz17b25CdG5DbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9e2lzQWN0aXZlID09PSAnbGF0ZXN0JyA/ICdhY3RpdmUnIDogJyd9XG4gICAgICAgID5cbiAgICAgICAgICBGZWNoYSBkZSBzdWJpZGEgKG3DoXMgcmVjaWVudGVzKVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zb3J0IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLnNvcnQtZHJvcGRvd24ge1xuICAgICAgICAgIGRpc3BsYXk6ICR7c2hvd0Ryb3Bkb3duID8gJ2Jsb2NrJyA6ICdub25lJ307XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC4yKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB3aWR0aDogMTVlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICB6LWluZGV4OiAyMDAwMDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTMxNDE0O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmljb246aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAke3Nob3dEcm9wZG93biA/ICcjOTk5JyA6ICdpbmhlcml0J307XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */
/*@ sourceURL=/Users/edgarlopez/Code/courses/react/next/podcasts/components/FiltersIcon.js */`));
}

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Header({
  headerText,
  nav = null,
  serie = null,
  handleFollowClick = null,
  handleUnfollowClick = null,
  followed = false
}) {
  return __jsx("header", {
    className: "jsx-4213889358",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, nav && __jsx("div", {
    className: "jsx-4213889358" + " " + 'actions-bar',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '/',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-4213889358",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdKeyboardArrowLeft"], {
    size: "1em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }))), handleFollowClick && __jsx("div", {
    className: "jsx-4213889358",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, !followed ? __jsx("button", {
    onClick: handleFollowClick,
    className: "jsx-4213889358",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 19
    }
  }, "SEGUIR") : __jsx("button", {
    onClick: handleUnfollowClick,
    className: "jsx-4213889358" + " " + 'unfollow-btn',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }
  }, "Siguiendo"))), serie && __jsx("p", {
    className: "jsx-4213889358",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }, `serie de ${serie}`), __jsx("h1", {
    className: "jsx-4213889358",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, headerText), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4213889358",
    __self: this
  }, ".actions-bar.jsx-4213889358{margin-bottom:30px;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}button.jsx-4213889358{color:white;background:black;border:none;padding:8px 16px;border-radius:10px;cursor:pointer;font-weight:bold;outline:none;}.unfollow-btn.jsx-4213889358{background:white;color:#131414;border:1px solid #131414;}h1.jsx-4213889358{margin:8px 0 0;}p.jsx-4213889358{margin:0;font-size:12px;text-transform:uppercase;}header.jsx-4213889358{margin-top:3em;color:black;background:#fff;padding:0 1.5em;height:auto;display:block;font-weight:700;position:relative;}header.jsx-4213889358 a.jsx-4213889358{color:black;font-size:32px;position:-webkit-sticky;position:sticky;top:0;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDb0IsQUFHZ0MsQUFPUCxBQVVLLEFBS0YsQUFHTixBQUtNLEFBVUgsU0FkRyxHQWxCRSxBQWlDRixHQWxCakIsQUFRYyxFQWJFLEVBakJILEtBMEJjLEdBS1QsQUFVQSxFQWpDSixDQVBDLENBaUJZLFVBVFIsRUF1QkQsTUFMbEIsT0FSQSxFQVRxQixDQXVCUCxRQVNOLElBUlEsRUFTTyxJQWhDTixRQXdCQyxPQXZCQyxTQXdCQyxHQWxDWSxLQVdqQixVQXdCZixHQXZCQSxDQThCQSxnR0F6Q3FCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvZWRnYXJsb3Blei9Db2RlL2NvdXJzZXMvcmVhY3QvbmV4dC9wb2RjYXN0cy9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBNZEtleWJvYXJkQXJyb3dMZWZ0IH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoe1xuICAgIGhlYWRlclRleHQsXG4gICAgbmF2ID0gbnVsbCxcbiAgICBzZXJpZSA9IG51bGwsXG4gICAgaGFuZGxlRm9sbG93Q2xpY2sgPSBudWxsLFxuICAgIGhhbmRsZVVuZm9sbG93Q2xpY2sgPSBudWxsLFxuICAgIGZvbGxvd2VkID0gZmFsc2UsXG4gIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWRlcj5cbiAgICAgICAge25hdiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FjdGlvbnMtYmFyJz5cbiAgICAgICAgICAgIHsvKiA8TGluayBocmVmPXtzZXJpZSA/IGAvJHtzZXJpZX1gIDogJy8nfT4gKi99XG4gICAgICAgICAgICA8TGluayBocmVmPXsnLyd9PlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8TWRLZXlib2FyZEFycm93TGVmdCBzaXplPScxZW0nIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAge2hhbmRsZUZvbGxvd0NsaWNrICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7IWZvbGxvd2VkID8gKFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVGb2xsb3dDbGlja30+XG4gICAgICAgICAgICAgICAgICAgIFNFR1VJUlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVW5mb2xsb3dDbGlja31cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmZvbGxvdy1idG4nXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNpZ3VpZW5kb1xuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7c2VyaWUgJiYgPHA+e2BzZXJpZSBkZSAke3NlcmllfWB9PC9wPn1cblxuICAgICAgICA8aDE+e2hlYWRlclRleHR9PC9oMT5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmFjdGlvbnMtYmFyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC51bmZvbGxvdy1idG4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogIzEzMTQxNDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMzE0MTQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogM2VtO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMS41ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2hlYWRlcj5cbiAgICApO1xuICB9XG4iXX0= */\n/*@ sourceURL=/Users/edgarlopez/Code/courses/react/next/podcasts/components/Header.js */"));
}

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Player */ "./components/Player.js");
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/PlayerContext */ "./contexts/PlayerContext.js");
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Layout({
  children,
  title
}) {
  const {
    currentSong
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__["PlayerContext"]);
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TranslucentImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TranslucentImage */ "./components/TranslucentImage.js");
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/PlayerContext */ "./contexts/PlayerContext.js");
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/components/Player.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Player() {
  const {
    currentSong
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__["PlayerContext"]);
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

/***/ "./components/PodcastCover.js":
/*!************************************!*\
  !*** ./components/PodcastCover.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PodcastCover; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/components/PodcastCover.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function PodcastCover({
  channel,
  index
}) {
  return __jsx("div", {
    className: "jsx-3614363943",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/[channel]?id=${channel.id}`,
    key: index,
    as: `${channel.id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "jsx-3614363943" + " " + 'channel',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: channel.urls.logo_image.original,
    alt: "",
    className: "jsx-3614363943",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }), __jsx("h2", {
    className: "jsx-3614363943",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, channel.title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3614363943",
    __self: this
  }, ".channel.jsx-3614363943{display:block;border-radius:3px;margin:0;}img.jsx-3614363943{width:100%;border:1px solid #e2e2e2;border-radius:20px;}a.jsx-3614363943{color:black;-webkit-text-decoration:none;text-decoration:none;}h2.jsx-3614363943{padding:0;margin:12px 0 0;font-size:16px;font-weight:400;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvUG9kY2FzdENvdmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCa0IsQUFHeUIsQUFLSCxBQUtDLEFBSUYsVUFDTSxDQVRTLENBS0osRUFWSCxZQWVILE1BZE4sSUFLVSxLQUpyQixBQWNrQixjQVRsQixFQVVvQixLQU5wQixhQU9BIiwiZmlsZSI6Ii9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvUG9kY2FzdENvdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9kY2FzdENvdmVyKHtjaGFubmVsLCBpbmRleH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPExpbmtcbiAgICAgICAgaHJlZj17YC9bY2hhbm5lbF0/aWQ9JHtjaGFubmVsLmlkfWB9XG4gICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgIGFzPXtgJHtjaGFubmVsLmlkfWB9XG4gICAgICA+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0nY2hhbm5lbCc+XG4gICAgICAgICAgPGltZyBzcmM9e2NoYW5uZWwudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSBhbHQ9JycgLz5cbiAgICAgICAgICA8aDI+e2NoYW5uZWwudGl0bGV9PC9oMj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jaGFubmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAxMnB4IDAgMDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/edgarlopez/Code/courses/react/next/podcasts/components/PodcastCover.js */"));
}

/***/ }),

/***/ "./components/PodcastGrid.js":
/*!***********************************!*\
  !*** ./components/PodcastGrid.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PodcastGrid; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PodcastCover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PodcastCover */ "./components/PodcastCover.js");
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/components/PodcastGrid.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function PodcastGrid({
  channels,
  title
}) {
  return __jsx("div", {
    className: "jsx-1754336325",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1754336325" + " " + 'header-channels',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-1754336325",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, title)), __jsx("div", {
    className: "jsx-1754336325" + " " + 'channels',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, channels.map((channel, index) => __jsx(_PodcastCover__WEBPACK_IMPORTED_MODULE_2__["default"], {
    channel: channel,
    index: index,
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1754336325",
    __self: this
  }, ".header-channels.jsx-1754336325{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:30px 0;border-bottom:1px solid #e2e2e2;}p.jsx-1754336325{font-size:12px;color:black;font-weigth:400;text-transform:uppercase;margin:0;}.channels.jsx-1754336325{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));grid-gap:42px 10px;padding:24px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvUG9kY2FzdEdyaWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLEFBR3dCLEFBT0UsQUFPRixhQUMrQyxFQVBoRCxZQUNJLGdCQUNTLHlCQUNoQixHQUtVLEdBZlcsR0FXaEMsYUFLaUIsZUFDakIsb0ZBaEJxQiw2RkFDSixlQUNpQixnQ0FDbEMiLCJmaWxlIjoiL1VzZXJzL2VkZ2FybG9wZXovQ29kZS9jb3Vyc2VzL3JlYWN0L25leHQvcG9kY2FzdHMvY29tcG9uZW50cy9Qb2RjYXN0R3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb2RjYXN0Q292ZXIgZnJvbSAnLi9Qb2RjYXN0Q292ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2RjYXN0R3JpZCh7Y2hhbm5lbHMsIHRpdGxlfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyLWNoYW5uZWxzJz5cbiAgICAgICAgPHA+e3RpdGxlfTwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhbm5lbHMnPlxuICAgICAgICB7Y2hhbm5lbHMubWFwKChjaGFubmVsLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxQb2RjYXN0Q292ZXIgY2hhbm5lbD17Y2hhbm5lbH0gaW5kZXg9e2luZGV4fSBrZXk9e2luZGV4fS8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlYWRlci1jaGFubmVscyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmUyZTI7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBmb250LXdlaWd0aDogNDAwO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFubmVscyB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMjBweCwgMWZyKSk7XG4gICAgICAgICAgZ3JpZC1nYXA6IDQycHggMTBweDtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/edgarlopez/Code/courses/react/next/podcasts/components/PodcastGrid.js */"));
}

/***/ }),

/***/ "./components/TranslucentImage.js":
/*!****************************************!*\
  !*** ./components/TranslucentImage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TranslucentImage; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/components/TranslucentImage.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function TranslucentImage({
  clipUrls,
  channelUrls
}) {
  return __jsx("div", {
    className: "jsx-868340302" + " " + 'image-container',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: clipUrls.image || channelUrls.logo_image.original,
    alt: "",
    srcSet: "",
    className: "jsx-868340302",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }), __jsx("div", {
    style: {
      backgroundImage: `url(${clipUrls.image || channelUrls.logo_image.original})`
    },
    className: "jsx-868340302" + " " + 'image-shadow',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "868340302",
    __self: this
  }, ".image-container.jsx-868340302{position:relative;}img.jsx-868340302{width:100%;border-radius:20px;}.image-shadow.jsx-868340302{-webkit-filter:blur(40px);filter:blur(40px);position:absolute;top:0;margin:0;width:100%;height:100%;border-radius:20px;opacity:.5;z-index:-1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvVHJhbnNsdWNlbnRJbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmtCLEFBRzZCLEFBR1AsQUFJTyxXQUhDLE9BSHJCLFlBSUEsY0FHb0Isa0JBQ1osTUFDRyxTQUNFLFdBQ0MsWUFDTyxtQkFDUixXQUNBLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2VkZ2FybG9wZXovQ29kZS9jb3Vyc2VzL3JlYWN0L25leHQvcG9kY2FzdHMvY29tcG9uZW50cy9UcmFuc2x1Y2VudEltYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhbnNsdWNlbnRJbWFnZSh7Y2xpcFVybHMsIGNoYW5uZWxVcmxzfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZS1jb250YWluZXInPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e2NsaXBVcmxzLmltYWdlIHx8IGNoYW5uZWxVcmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9XG4gICAgICAgIGFsdD0nJ1xuICAgICAgICBzcmNTZXQ9JydcbiAgICAgIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT0naW1hZ2Utc2hhZG93J1xuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1xuICAgICAgICAgICAgY2xpcFVybHMuaW1hZ2UgfHwgY2hhbm5lbFVybHMubG9nb19pbWFnZS5vcmlnaW5hbFxuICAgICAgICAgIH0pYCxcbiAgICAgICAgfX1cbiAgICAgID48L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZS1zaGFkb3cge1xuICAgICAgICAgIGZpbHRlcjogYmx1cig0MHB4KTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/edgarlopez/Code/courses/react/next/podcasts/components/TranslucentImage.js */"));
}

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/[channel].js":
/*!****************************!*\
  !*** ./pages/[channel].js ***!
  \****************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return channel; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_EpisodeList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/EpisodeList */ "./components/EpisodeList.js");
/* harmony import */ var _components_PodcastGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PodcastGrid */ "./components/PodcastGrid.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_error */ "./pages/_error.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _contexts_FavsContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/FavsContext */ "./contexts/FavsContext.js");
/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useLocalStorage */ "./hooks/useLocalStorage.js");
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/pages/[channel].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









async function getServerSideProps(context) {
  let idChannel = context.query.channel;

  try {
    let [reqChannel, reqAudios, reqSeries] = await Promise.all([fetch(`https://api.audioboom.com/channels/${idChannel}?version=2`), fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips?version=2`), fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels?version=2`)]);
    context.res.statusCode = reqChannel.status;
    let dataChannel = await reqChannel.json();
    let channel = dataChannel.body.channel;
    let dataAudios = await reqAudios.json();
    let audioClips = dataAudios.body.audio_clips;
    let dataSeries = await reqSeries.json();
    let series = dataSeries.body.channels;
    return {
      props: {
        channel,
        audioClips,
        series,
        statusCode: context.res.statusCode
      }
    };
  } catch (error) {
    return {
      props: {
        channel: null,
        audioClip: null,
        series: null,
        statusCode: context.res.statusCode
      }
    };
  }
}
function channel({
  channel,
  audioClips,
  series,
  statusCode
}) {
  const {
    myList,
    Follow,
    Unfollow
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_FavsContext__WEBPACK_IMPORTED_MODULE_8__["FavsContext"]);
  const {
    0: bannerImage,
    1: setBannerImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const {
    0: isFollowed,
    1: setIsFollowed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [, setLocalStorage] = Object(_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_9__["useLocalStorage"])('favs', []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (channel.urls.banner_image.original === null) {
      setBannerImage(channel.urls.logo_image.original);
    } else {
      setBannerImage(channel.urls.banner_image.original);
    }

    for (let i = 0; i < myList.length; i++) {
      if (myList[i].id == channel.id) {
        setIsFollowed(true);
        break;
      }
    }

    setLocalStorage(myList);
  }, [myList]);

  if (statusCode !== 200) {
    return __jsx(_error__WEBPACK_IMPORTED_MODULE_6__["default"], {
      statusCode: statusCode,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 12
      }
    });
  }

  const handleFollowClick = () => {
    Follow(channel);
  };

  const handleUnfollowClick = () => {
    Unfollow(channel);
    setIsFollowed(false);
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: `${channel.title} | Podcast`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    headerText: channel.title,
    nav: true,
    followed: isFollowed,
    handleFollowClick: handleFollowClick,
    handleUnfollowClick: handleUnfollowClick,
    serie: channel.parent_channel_id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-2164519683" + " " + 'content',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      backgroundImage: `url(${bannerImage})`
    },
    className: "jsx-2164519683" + " " + 'banner',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      backgroundImage: `url(${bannerImage})`
    },
    className: "jsx-2164519683" + " " + 'banner-shadow',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  })), series.length > 0 && __jsx("div", {
    className: "jsx-2164519683",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, __jsx(_components_PodcastGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    channels: series,
    title: `series de ${channel.title}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  })), __jsx(_components_EpisodeList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    audioClips: audioClips,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2164519683",
    __self: this
  }, ".content.jsx-2164519683{padding:0 1.5em;}.banner.jsx-2164519683{margin:24px 0 0;width:100%;background-position:50% 50%;height:120px;border-radius:20px;background-size:cover;background-color:#aaa;position:relative;}.banner-shadow.jsx-2164519683{margin:20px 0 0;position:absolute;width:80%;background-position:50% 50%;height:105px;border-radius:20px;background-size:cover;background-color:#aaa;-webkit-filter:blur(15px);filter:blur(15px);left:50%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);z-index:-1;}.channels.jsx-2164519683{display:grid;grid-gap:10px;padding:15px 36px;grid-template-columns:repeat(auto-fill,minmax(145px,1fr));}a.channel.jsx-2164519683{display:block;margin-bottom:0.5em;color:#333;-webkit-text-decoration:none;text-decoration:none;}.channel.jsx-2164519683 img.jsx-2164519683{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}h1.jsx-2164519683{font-weight:600;padding:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL3BhZ2VzL1tjaGFubmVsXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSGtCLEFBRzJCLEFBR0EsQUFVQSxBQWVILEFBTUMsQUFNSSxBQUtGLGFBaEJGLENBTU0sRUFsQ3RCLEFBR2EsQUFVTyxBQWdDTCxFQUw4QixTQXBDZixBQXlCVixFQWlCcEIsS0FoQ1ksQUFxQkMsVUFwQmlCLENBZWdDLEFBTXZDLFVBL0JSLEdBb0NGLFVBbkNRLENBb0NyQixHQTFCZSxhQUNNLEVBVkcsUUE4QnhCLFFBTkEsQ0Fid0IsS0FWQSxpQkFXQSxLQVZKLGlCQVdBLENBVnBCLDJDQVdXLFNBQ2lCLDBGQUNmLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2VkZ2FybG9wZXovQ29kZS9jb3Vyc2VzL3JlYWN0L25leHQvcG9kY2FzdHMvcGFnZXMvW2NoYW5uZWxdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEVwaXNvZGVMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRXBpc29kZUxpc3QnO1xuaW1wb3J0IFBvZGNhc3RHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvUG9kY2FzdEdyaWQnO1xuaW1wb3J0IEVycm9yIGZyb20gJy4vX2Vycm9yJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCB7RmF2c0NvbnRleHR9IGZyb20gJy4uL2NvbnRleHRzL0ZhdnNDb250ZXh0J1xuaW1wb3J0IHsgdXNlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vaG9va3MvdXNlTG9jYWxTdG9yYWdlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGxldCBpZENoYW5uZWwgPSBjb250ZXh0LnF1ZXJ5LmNoYW5uZWw7XG4gIHRyeSB7XG4gICAgbGV0IFtyZXFDaGFubmVsLCByZXFBdWRpb3MsIHJlcVNlcmllc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0/dmVyc2lvbj0yYCksXG4gICAgICBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2F1ZGlvX2NsaXBzP3ZlcnNpb249MmBcbiAgICAgICksXG4gICAgICBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2NoaWxkX2NoYW5uZWxzP3ZlcnNpb249MmBcbiAgICAgICksXG4gICAgXSk7XG5cbiAgICBjb250ZXh0LnJlcy5zdGF0dXNDb2RlID0gcmVxQ2hhbm5lbC5zdGF0dXM7XG5cbiAgICBsZXQgZGF0YUNoYW5uZWwgPSBhd2FpdCByZXFDaGFubmVsLmpzb24oKTtcbiAgICBsZXQgY2hhbm5lbCA9IGRhdGFDaGFubmVsLmJvZHkuY2hhbm5lbDtcblxuICAgIGxldCBkYXRhQXVkaW9zID0gYXdhaXQgcmVxQXVkaW9zLmpzb24oKTtcbiAgICBsZXQgYXVkaW9DbGlwcyA9IGRhdGFBdWRpb3MuYm9keS5hdWRpb19jbGlwcztcblxuICAgIGxldCBkYXRhU2VyaWVzID0gYXdhaXQgcmVxU2VyaWVzLmpzb24oKTtcbiAgICBsZXQgc2VyaWVzID0gZGF0YVNlcmllcy5ib2R5LmNoYW5uZWxzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGNoYW5uZWwsXG4gICAgICAgIGF1ZGlvQ2xpcHMsXG4gICAgICAgIHNlcmllcyxcbiAgICAgICAgc3RhdHVzQ29kZTogY29udGV4dC5yZXMuc3RhdHVzQ29kZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgY2hhbm5lbDogbnVsbCxcbiAgICAgICAgYXVkaW9DbGlwOiBudWxsLFxuICAgICAgICBzZXJpZXM6IG51bGwsXG4gICAgICAgIHN0YXR1c0NvZGU6IGNvbnRleHQucmVzLnN0YXR1c0NvZGUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhbm5lbCh7IGNoYW5uZWwsIGF1ZGlvQ2xpcHMsIHNlcmllcywgc3RhdHVzQ29kZSB9KSB7XG4gIGNvbnN0IHtteUxpc3QsIEZvbGxvdywgVW5mb2xsb3cgfSA9IHVzZUNvbnRleHQoRmF2c0NvbnRleHQpXG4gIGNvbnN0IFtiYW5uZXJJbWFnZSwgc2V0QmFubmVySW1hZ2VdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFtpc0ZvbGxvd2VkLCBzZXRJc0ZvbGxvd2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbLCBzZXRMb2NhbFN0b3JhZ2VdID0gdXNlTG9jYWxTdG9yYWdlKCdmYXZzJywgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHsgIFxuICAgIGlmIChjaGFubmVsLnVybHMuYmFubmVyX2ltYWdlLm9yaWdpbmFsID09PSBudWxsKSB7XG4gICAgICBzZXRCYW5uZXJJbWFnZShjaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEJhbm5lckltYWdlKGNoYW5uZWwudXJscy5iYW5uZXJfaW1hZ2Uub3JpZ2luYWwpXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChteUxpc3RbaV0uaWQgPT0gY2hhbm5lbC5pZCkge1xuICAgICAgICBzZXRJc0ZvbGxvd2VkKHRydWUpXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNldExvY2FsU3RvcmFnZShteUxpc3QpXG4gIH0sIFtteUxpc3RdKVxuXG4gIGlmIChzdGF0dXNDb2RlICE9PSAyMDApIHtcbiAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9e3N0YXR1c0NvZGV9IC8+O1xuICB9XG5cblxuICBjb25zdCBoYW5kbGVGb2xsb3dDbGljayA9ICgpID0+IHtcbiAgICBGb2xsb3coY2hhbm5lbClcbiAgfVxuICBjb25zdCBoYW5kbGVVbmZvbGxvd0NsaWNrID0gKCkgPT4geyAgICBcbiAgICBVbmZvbGxvdyhjaGFubmVsKVxuICAgIHNldElzRm9sbG93ZWQoZmFsc2UpXG4gIH07XG4gIFxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9e2Ake2NoYW5uZWwudGl0bGV9IHwgUG9kY2FzdGB9PlxuICAgICAgPEhlYWRlclxuICAgICAgICBoZWFkZXJUZXh0PXtjaGFubmVsLnRpdGxlfVxuICAgICAgICBuYXY9e3RydWV9XG4gICAgICAgIGZvbGxvd2VkPXtpc0ZvbGxvd2VkfVxuICAgICAgICBoYW5kbGVGb2xsb3dDbGljaz17aGFuZGxlRm9sbG93Q2xpY2t9XG4gICAgICAgIGhhbmRsZVVuZm9sbG93Q2xpY2s9e2hhbmRsZVVuZm9sbG93Q2xpY2t9XG4gICAgICAgIHNlcmllPXtjaGFubmVsLnBhcmVudF9jaGFubmVsX2lkfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT0nYmFubmVyJ1xuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYW5uZXJJbWFnZX0pYCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPSdiYW5uZXItc2hhZG93J1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFubmVySW1hZ2V9KWAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtzZXJpZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxQb2RjYXN0R3JpZFxuICAgICAgICAgICAgICBjaGFubmVscz17c2VyaWVzfVxuICAgICAgICAgICAgICB0aXRsZT17YHNlcmllcyBkZSAke2NoYW5uZWwudGl0bGV9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEVwaXNvZGVMaXN0IGF1ZGlvQ2xpcHM9e2F1ZGlvQ2xpcHN9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMCAxLjVlbTtcbiAgICAgICAgfVxuICAgICAgICAuYmFubmVyIHtcbiAgICAgICAgICBtYXJnaW46IDI0cHggMCAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLmJhbm5lci1zaGFkb3cge1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwIDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICAgICAgICAgIGZpbHRlcjogYmx1cigxNXB4KTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhbm5lbHMge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgICAgICAgcGFkZGluZzogMTVweCAzNnB4O1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE0NXB4LCAxZnIpKTtcbiAgICAgICAgfVxuICAgICAgICBhLmNoYW5uZWwge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuY2hhbm5lbCBpbWcge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/edgarlopez/Code/courses/react/next/podcasts/pages/[channel].js */"));
}

/***/ }),

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/pages/_error.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Error({
  statusCode
}) {
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

Error.getInitialProps = ({
  res,
  err
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/[channel].js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/edgarlopez/Code/courses/react/next/podcasts/pages/[channel].js */"./pages/[channel].js");


/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=[channel].js.map