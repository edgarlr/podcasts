(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/[channel].js"],{

/***/ "./components/EpisodeList.js":
/*!***********************************!*\
  !*** ./components/EpisodeList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EpisodeList; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FiltersIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FiltersIcon */ "./components/FiltersIcon.js");
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/PlayerContext */ "./contexts/PlayerContext.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");

var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/components/EpisodeList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function EpisodeList(_ref) {
  var _this = this;

  var audioClips = _ref.audioClips;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__["PlayerContext"]),
      SetCurrentIndex = _useContext.SetCurrentIndex,
      currentSongIndex = _useContext.currentSongIndex,
      SetCurrent = _useContext.SetCurrent,
      SetPlaylist = _useContext.SetPlaylist;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      playlist = _useState[0],
      setPlaylist = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var onPodcastClick = function onPodcastClick(podcast, channelId, index) {
    SetPlaylist(playlist);
    SetCurrentIndex(index);
    SetCurrent(podcast);
    var podcastId = podcast.id;
    router.push({
      pathname: "/[channel]/[podcast]",
      query: {
        podcastId: podcastId
      },
      as: "/".concat(channelId, "/").concat(podcastId)
    }, "/".concat(channelId, "/").concat(podcastId));
    console.log(router.query);
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(audioClips),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('uploaded_at'),
      sortType = _useState3[0],
      setSortType = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isReversed = _useState4[0],
      setIsReversed = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var sorted = function sorted(key, list, isReversed) {
      if (isReversed) {
        return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(list).sort(function (a, b) {
          return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
        });
      } else if (key === 'counts') {
        return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(list).sort(function (a, b) {
          return a[key].plays < b[key].plays ? 1 : a[key].plays > b[key].plays ? -1 : 0;
        });
      }

      return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(list).sort(function (a, b) {
        return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0;
      });
    };

    setList(sorted(sortType, list, isReversed));
    var playlistArray = list.map(function (clip) {
      return clip.id;
    });
    setPlaylist(playlistArray);
  }, [sortType, isReversed]);

  var handleFilterClick = function handleFilterClick(type) {
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
  }, "".concat(audioClips.length, " EPISODIOS")), __jsx(_FiltersIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleFilterClick: handleFilterClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  })), list.map(function (clip, index) {
    return __jsx("div", {
      onClick: function onClick() {
        return onPodcastClick(clip, clip.channel.id, index);
      },
      key: clip.id,
      className: "jsx-794169196" + " " + ('episode ' + (currentSongIndex === index ? 'active' : '') || false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }
    }, __jsx("h2", {
      className: "jsx-794169196",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }
    }, clip.title), __jsx("div", {
      className: "jsx-794169196" + " " + 'meta',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }
    }, Math.ceil(clip.duration / 60), " minutes"), __jsx("p", {
      className: "jsx-794169196",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }
    }, clip.title), __jsx("p", {
      className: "jsx-794169196",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }
    }, clip.counts.plays, " reproducciones"), currentSongIndex === index && __jsx("span", {
      className: "jsx-794169196",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_6__["MdVolumeUp"], {
      size: "2em",
      color: "white",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 15
      }
    })));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/components/FiltersIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function FiltersIcon(_ref) {
  var handleFilterClick = _ref.handleFilterClick;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showDropdown = _useState[0],
      setShowDropdown = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('latest'),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  var onBtnClick = function onBtnClick(e) {
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
    onClick: function onClick() {
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
  }, ".sort.__jsx-style-dynamic-selector{position:relative;}.sort-dropdown.__jsx-style-dynamic-selector{display:".concat(showDropdown ? 'block' : 'none', ";box-shadow:0 2px 5px rgba(100,100,100,0.2);border-radius:20px;background:#fff;padding:15px 10px;position:absolute;right:0;width:15em;text-align:right;z-index:20000;}button.__jsx-style-dynamic-selector{outline:none;text-align:left;font-size:0.9em;padding:10px 10px;width:100%;background:transparent;border:none;}.active.__jsx-style-dynamic-selector{padding:10px 10px;color:white;background:#131414;border-radius:10px;}.icon.__jsx-style-dynamic-selector:hover{color:").concat(showDropdown ? '#999' : 'inherit', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvRmlsdGVyc0ljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NrQixBQUc2QixBQUdtQixBQVl4QixBQVNLLEFBTWlCLGFBZG5CLEtBZmxCLEFBd0JjLFdBUkksQ0FTRyxLQUtyQixFQTNCZ0QsUUFjNUIsSUFTQyxjQVJSLEtBU2IsTUFSeUIsTUFmSixpQkFnQlAsRUFmSSxVQWdCbEIsTUFmb0Isa0JBQ0Esa0JBQ1YsUUFDRyxXQUNNLGlCQUNILGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvRmlsdGVyc0ljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtNZFNvcnR9IGZyb20gJ3JlYWN0LWljb25zL21kJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWx0ZXJzSWNvbih7aGFuZGxlRmlsdGVyQ2xpY2t9KSB7XG4gIGNvbnN0IFtzaG93RHJvcGRvd24sIHNldFNob3dEcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZSgnbGF0ZXN0Jyk7XG5cbiAgY29uc3Qgb25CdG5DbGljayA9IGUgPT4ge1xuICAgIGhhbmRsZUZpbHRlckNsaWNrKGUudGFyZ2V0LmlkKTtcbiAgICBzZXRJc0FjdGl2ZShlLnRhcmdldC5pZClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3NvcnQnPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2ljb24nXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzaG93RHJvcGRvd24gPyBzZXRTaG93RHJvcGRvd24oZmFsc2UpIDogc2V0U2hvd0Ryb3Bkb3duKHRydWUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxNZFNvcnQgc2l6ZT0nMS41ZW0nIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzb3J0LWRyb3Bkb3duJz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGlkPSdwb3B1bGFyJ1xuICAgICAgICAgIG9uQ2xpY2s9e29uQnRuQ2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPXtpc0FjdGl2ZSA9PT0gJ3BvcHVsYXInID8gJ2FjdGl2ZScgOiAnJ31cbiAgICAgICAgPlxuICAgICAgICAgIE3DoXMgUG9wdWFyZXNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBpZD0nb2xkZXN0J1xuICAgICAgICAgIG9uQ2xpY2s9e29uQnRuQ2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPXtpc0FjdGl2ZSA9PT0gJ29sZGVzdCcgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICA+XG4gICAgICAgICAgRmVjaGEgZGUgc3ViaWRhIChtw6FzIGFudGlndW9zKVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGlkPSdsYXRlc3QnXG4gICAgICAgICAgb25DbGljaz17b25CdG5DbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9e2lzQWN0aXZlID09PSAnbGF0ZXN0JyA/ICdhY3RpdmUnIDogJyd9XG4gICAgICAgID5cbiAgICAgICAgICBGZWNoYSBkZSBzdWJpZGEgKG3DoXMgcmVjaWVudGVzKVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zb3J0IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLnNvcnQtZHJvcGRvd24ge1xuICAgICAgICAgIGRpc3BsYXk6ICR7c2hvd0Ryb3Bkb3duID8gJ2Jsb2NrJyA6ICdub25lJ307XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC4yKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB3aWR0aDogMTVlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICB6LWluZGV4OiAyMDAwMDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTMxNDE0O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmljb246aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAke3Nob3dEcm9wZG93biA/ICcjOTk5JyA6ICdpbmhlcml0J307XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/edgarlopez/Code/courses/react/next/podcasts/components/FiltersIcon.js */")));
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Header(_ref) {
  var headerText = _ref.headerText,
      _ref$nav = _ref.nav,
      nav = _ref$nav === void 0 ? null : _ref$nav,
      _ref$serie = _ref.serie,
      serie = _ref$serie === void 0 ? null : _ref$serie,
      _ref$handleFollowClic = _ref.handleFollowClick,
      handleFollowClick = _ref$handleFollowClic === void 0 ? null : _ref$handleFollowClic,
      _ref$handleUnfollowCl = _ref.handleUnfollowClick,
      handleUnfollowClick = _ref$handleUnfollowCl === void 0 ? null : _ref$handleUnfollowCl,
      _ref$followed = _ref.followed,
      followed = _ref$followed === void 0 ? false : _ref$followed;
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
  }, "serie de ".concat(serie)), __jsx("h1", {
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

/***/ "./components/PodcastCover.js":
/*!************************************!*\
  !*** ./components/PodcastCover.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PodcastCover; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/components/PodcastCover.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function PodcastCover(_ref) {
  var channel = _ref.channel,
      index = _ref.index;
  return __jsx("div", {
    className: "jsx-3614363943",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/[channel]?id=".concat(channel.id),
    key: index,
    as: "".concat(channel.id),
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PodcastCover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PodcastCover */ "./components/PodcastCover.js");
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/components/PodcastGrid.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function PodcastGrid(_ref) {
  var _this = this;

  var channels = _ref.channels,
      title = _ref.title;
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
  }, channels.map(function (channel, index) {
    return __jsx(_PodcastCover__WEBPACK_IMPORTED_MODULE_2__["default"], {
      channel: channel,
      index: index,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/components/TranslucentImage.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function TranslucentImage(_ref) {
  var clipUrls = _ref.clipUrls,
      channelUrls = _ref.channelUrls;
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
      backgroundImage: "url(".concat(clipUrls.image || channelUrls.logo_image.original, ")")
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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./contexts/types.js");
/* harmony import */ var _FavsReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FavsReducer */ "./contexts/FavsReducer.js");
/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useLocalStorage */ "./hooks/useLocalStorage.js");


var _this = undefined,
    _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/contexts/FavsContext.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var FavsContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
var FavsState = function FavsState(props) {
  var _useLocalStorage = Object(_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__["useLocalStorage"])('favs', undefined),
      _useLocalStorage2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useLocalStorage, 1),
      favs = _useLocalStorage2[0];

  var empyArr = [];

  var initialValue = function initialValue() {
    if (favs !== undefined) {
      return favs;
    }

    return empyArr;
  };

  var initialState = {
    myList: initialValue()
  };

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_FavsReducer__WEBPACK_IMPORTED_MODULE_3__["FavsReducer"], initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var Follow = function Follow(channel) {
    return dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["ADD_TO_FOLLOW"],
      data: channel
    });
  };

  var Unfollow = function Unfollow(channel) {
    return dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FROM_FOLLOW"],
      data: channel
    });
  };

  return __jsx(FavsContext.Provider, {
    value: {
      myList: state.myList,
      Follow: Follow,
      Unfollow: Unfollow
    },
    __self: _this,
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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./contexts/types.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var FavsReducer = function FavsReducer(state, action) {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_2__["ADD_TO_FOLLOW"]:
      return _objectSpread({}, state, {
        myList: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.myList), [action.data])
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FROM_FOLLOW"]:
      return _objectSpread({}, state, {
        myList: state.myList.filter(function (items) {
          return items.id !== action.data.id;
        })
      });

    default:
      return {
        state: state
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var PlayerContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

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
var SET_CURRENT_SONG = 'SET_CURRENT_SONG';
var TOGGLE_PLAYING = 'TOGGLE_PLAYING';
var SET_CURRENT_SONG_INDEX = 'SET_CURRENT_SONG_INDEX';
var SET_PLAYLIST = 'SET_PLAYLIST';
var SET_LOADING = 'SET_LOADING'; // FAVS REDUCER

var ADD_TO_FOLLOW = 'ADD_TO_FOLLOW';
var REMOVE_FROM_FOLLOW = 'REMOVE_FROM_FOLLOW';

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useLocalStorage = function useLocalStorage(key, initialValue) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    try {
      var item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  }),
      storedValue = _useState[0],
      setStoredValue = _useState[1];

  var setLocalStorage = function setLocalStorage(value) {
    try {
      var itemValue = function itemValue() {
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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

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

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(/*! whatwg-fetch */ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js");
module.exports = self.fetch.bind(self);


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */exports.Headers=self.Headers;exports.Request=self.Request;exports.Response=self.Response;exports.fetch=self.fetch;

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object.assign/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);function g(){return assign;}Object.defineProperties(g(),{implementation:{get:g},shim:{value:g},getPolyfill:{value:g}});module.exports=g();

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F%5Bchannel%5D&absolutePagePath=%2FUsers%2Fedgarlopez%2FCode%2Fcourses%2Freact%2Fnext%2Fpodcasts%2Fpages%2F%5Bchannel%5D.js&hotRouterUpdates=true!./":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F%5Bchannel%5D&absolutePagePath=%2FUsers%2Fedgarlopez%2FCode%2Fcourses%2Freact%2Fnext%2Fpodcasts%2Fpages%2F%5Bchannel%5D.js&hotRouterUpdates=true ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/[channel]",
      function () {
        var mod = __webpack_require__(/*! ./pages/[channel].js */ "./pages/[channel].js");
        if (true) {
          module.hot.accept(/*! ./pages/[channel].js */ "./pages/[channel].js", function () {
            if (!next.router.components["/[channel]"]) return;
            var updatedPage = __webpack_require__(/*! ./pages/[channel].js */ "./pages/[channel].js");
            next.router.update("/[channel]", updatedPage);
          });
        }
        return mod;
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

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
  return function (href, as) {
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
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link = /*#__PURE__*/function (_react$Component) {
  _inherits(Link, _react$Component);

  var _super = _createSuper(Link);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _super.call(this, props);
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
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

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href,
          parsedAs = _this$formatUrls2.as;

      var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
      return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
        '%')];

        if (!isPrefetched) {
          this.cleanUpListeners = listenToIntersections(ref, function () {
            _this2.prefetch();
          });
        }
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch(options) {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      _router["default"].prefetch(paths[
      /* href */
      0], paths[
      /* asPath */
      1], options)["catch"](function (err) {
        if (true) {
          // rethrow to show invalid URL errors
          throw err;
        }
      });

      prefetched[paths.join( // Join on an invalid URI character
      '%')] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch({
            priority: true
          });
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) { var rewriteUrlForNextExport; }

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
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

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
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

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
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
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
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

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

if (true) {
  exports.AmpStateContext.displayName = 'AmpStateContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
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

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

if (true) {
  exports.HeadManagerContext.displayName = 'HeadManagerContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
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

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

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
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

if (true) {
  exports.RouterContext.displayName = 'RouterContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var basePath =  false || '';

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

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      "/_next/data/".concat(__NEXT_DATA__.buildId).concat(delBasePath(pathname), ".json")),
      query: query
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
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
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

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
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
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
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

    if (true) {
      // make sure "as" doesn't start with double slashes or else it can
      // throw an error as it's considered invalid
      if (as.substr(0, 2) !== '//') {
        // in order for `e.state` to work on the `onpopstate` event
        // we have to register the initial route upon initialization
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: pathname,
          query: query
        }), as);
      }

      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
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
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
        url = addBasePath(url);
        as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as, options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
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

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
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

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


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
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        var route = delBasePath(toRoute(pathname));
        Promise.all([_this4.pageLoader.prefetchData(url, delBasePath(asPath)), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              route = delBasePath(route);
              _context.next = 5;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 5:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 10;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 10:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

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

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

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
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
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
  var escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  var namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (false) {}

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  }, namedParameterizedRoute ? {
    namedRegex: "^".concat(namedParameterizedRoute, "(?:/)?$")
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react_1$Component) {
    _inherits(_class, _react_1$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(react_1.Component);
};

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
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

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-icons/lib/esm/iconBase.js":
/*!******************************************************!*\
  !*** ./node_modules/react-icons/lib/esm/iconBase.js ***!
  \******************************************************/
/*! exports provided: GenIcon, IconBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenIcon", function() { return GenIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBase", function() { return IconBase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconContext */ "./node_modules/react-icons/lib/esm/iconContext.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
};




function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var computedSize = props.size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;

    var attr = props.attr,
        title = props.title,
        svgProps = __rest(props, ["attr", "title"]);

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign({
        color: props.color || conf.color
      }, conf.style, props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, title), props.children);
  };

  return _iconContext__WEBPACK_IMPORTED_MODULE_1__["IconContext"] !== undefined ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_iconContext__WEBPACK_IMPORTED_MODULE_1__["IconContext"].Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(_iconContext__WEBPACK_IMPORTED_MODULE_1__["DefaultContext"]);
}

/***/ }),

/***/ "./node_modules/react-icons/lib/esm/iconContext.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-icons/lib/esm/iconContext.js ***!
  \*********************************************************/
/*! exports provided: DefaultContext, IconContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultContext", function() { return DefaultContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconContext", function() { return IconContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"] && react__WEBPACK_IMPORTED_MODULE_0__["createContext"](DefaultContext);

/***/ }),

/***/ "./node_modules/react-icons/lib/esm/iconsManifest.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-icons/lib/esm/iconsManifest.js ***!
  \***********************************************************/
/*! exports provided: IconsManifest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsManifest", function() { return IconsManifest; });
var IconsManifest = [{
  "id": "fa",
  "name": "Font Awesome",
  "projectUrl": "https://fontawesome.com/",
  "license": "CC BY 4.0 License",
  "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
}, {
  "id": "io",
  "name": "Ionicons",
  "projectUrl": "https://ionicons.com/",
  "license": "MIT",
  "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
}, {
  "id": "md",
  "name": "Material Design icons",
  "projectUrl": "http://google.github.io/material-design-icons/",
  "license": "Apache License Version 2.0",
  "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
}, {
  "id": "ti",
  "name": "Typicons",
  "projectUrl": "http://s-ings.com/typicons/",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
}, {
  "id": "go",
  "name": "Github Octicons icons",
  "projectUrl": "https://octicons.github.com/",
  "license": "MIT",
  "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
}, {
  "id": "fi",
  "name": "Feather",
  "projectUrl": "https://feathericons.com/",
  "license": "MIT",
  "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
}, {
  "id": "gi",
  "name": "Game Icons",
  "projectUrl": "https://game-icons.net/",
  "license": "CC BY 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
}, {
  "id": "wi",
  "name": "Weather Icons",
  "projectUrl": "https://erikflowers.github.io/weather-icons/",
  "license": "SIL OFL 1.1",
  "licenseUrl": "http://scripts.sil.org/OFL"
}, {
  "id": "di",
  "name": "Devicons",
  "projectUrl": "https://vorillaz.github.io/devicons/",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "ai",
  "name": "Ant Design Icons",
  "projectUrl": "https://github.com/ant-design/ant-design-icons",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "bs",
  "name": "Bootstrap Icons",
  "projectUrl": "https://github.com/twbs/icons",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "ri",
  "name": "Remix Icon",
  "projectUrl": "https://github.com/Remix-Design/RemixIcon",
  "license": "Apache License Version 2.0",
  "licenseUrl": "http://www.apache.org/licenses/"
}, {
  "id": "fc",
  "name": "Flat Color Icons",
  "projectUrl": "https://github.com/icons8/flat-color-icons",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "gr",
  "name": "Grommet-Icons",
  "projectUrl": "https://github.com/grommet/grommet-icons",
  "license": "Apache License Version 2.0",
  "licenseUrl": "http://www.apache.org/licenses/"
}];

/***/ }),

/***/ "./node_modules/react-icons/lib/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-icons/lib/esm/index.js ***!
  \***************************************************/
/*! exports provided: IconsManifest, GenIcon, IconBase, DefaultContext, IconContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _iconsManifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconsManifest */ "./node_modules/react-icons/lib/esm/iconsManifest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconsManifest", function() { return _iconsManifest__WEBPACK_IMPORTED_MODULE_0__["IconsManifest"]; });

/* harmony import */ var _iconBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconBase */ "./node_modules/react-icons/lib/esm/iconBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenIcon", function() { return _iconBase__WEBPACK_IMPORTED_MODULE_1__["GenIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconBase", function() { return _iconBase__WEBPACK_IMPORTED_MODULE_1__["IconBase"]; });

/* harmony import */ var _iconContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iconContext */ "./node_modules/react-icons/lib/esm/iconContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultContext", function() { return _iconContext__WEBPACK_IMPORTED_MODULE_2__["DefaultContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconContext", function() { return _iconContext__WEBPACK_IMPORTED_MODULE_2__["IconContext"]; });





/***/ }),

/***/ "./node_modules/react-icons/md/index.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/react-icons/md/index.esm.js ***!
  \**************************************************/
/*! exports provided: Md3DRotation, MdAccessibility, MdAccessible, MdAccountBalance, MdAccountBalanceWallet, MdAccountBox, MdAccountCircle, MdAddShoppingCart, MdAlarm, MdAlarmAdd, MdAlarmOff, MdAlarmOn, MdAllOut, MdAndroid, MdAnnouncement, MdAspectRatio, MdAssessment, MdAssignment, MdAssignmentInd, MdAssignmentLate, MdAssignmentReturn, MdAssignmentReturned, MdAssignmentTurnedIn, MdAutorenew, MdBackup, MdBook, MdBookmark, MdBookmarkBorder, MdBugReport, MdBuild, MdCached, MdCameraEnhance, MdCardGiftcard, MdCardMembership, MdCardTravel, MdChangeHistory, MdCheckCircle, MdChromeReaderMode, MdClass, MdCode, MdCompareArrows, MdCopyright, MdCreditCard, MdDashboard, MdDateRange, MdDelete, MdDeleteForever, MdDescription, MdDns, MdDone, MdDoneAll, MdDonutLarge, MdDonutSmall, MdEject, MdEuroSymbol, MdEvent, MdEventSeat, MdExitToApp, MdExplore, MdExtension, MdFace, MdFavorite, MdFavoriteBorder, MdFeedback, MdFindInPage, MdFindReplace, MdFingerprint, MdFlightLand, MdFlightTakeoff, MdFlipToBack, MdFlipToFront, MdGTranslate, MdGavel, MdGetApp, MdGif, MdGrade, MdGroupWork, MdHelp, MdHelpOutline, MdHighlightOff, MdHistory, MdHome, MdHourglassEmpty, MdHourglassFull, MdHttp, MdHttps, MdImportantDevices, MdInfo, MdInfoOutline, MdInput, MdInvertColors, MdLabel, MdLabelOutline, MdLanguage, MdLaunch, MdLightbulbOutline, MdLineStyle, MdLineWeight, MdList, MdLock, MdLockOpen, MdLockOutline, MdLoyalty, MdMarkunreadMailbox, MdMotorcycle, MdNoteAdd, MdOfflinePin, MdOpacity, MdOpenInBrowser, MdOpenInNew, MdOpenWith, MdPageview, MdPanTool, MdPayment, MdPermCameraMic, MdPermContactCalendar, MdPermDataSetting, MdPermDeviceInformation, MdPermIdentity, MdPermMedia, MdPermPhoneMsg, MdPermScanWifi, MdPets, MdPictureInPicture, MdPictureInPictureAlt, MdPlayForWork, MdPolymer, MdPowerSettingsNew, MdPregnantWoman, MdPrint, MdQueryBuilder, MdQuestionAnswer, MdReceipt, MdRecordVoiceOver, MdRedeem, MdRemoveShoppingCart, MdReorder, MdReportProblem, MdRestore, MdRestorePage, MdRoom, MdRoundedCorner, MdRowing, MdSchedule, MdSearch, MdSettings, MdSettingsApplications, MdSettingsBackupRestore, MdSettingsBluetooth, MdSettingsBrightness, MdSettingsCell, MdSettingsEthernet, MdSettingsInputAntenna, MdSettingsInputComponent, MdSettingsInputComposite, MdSettingsInputHdmi, MdSettingsInputSvideo, MdSettingsOverscan, MdSettingsPhone, MdSettingsPower, MdSettingsRemote, MdSettingsVoice, MdShop, MdShopTwo, MdShoppingBasket, MdShoppingCart, MdSpeakerNotes, MdSpeakerNotesOff, MdSpellcheck, MdStars, MdStore, MdSubject, MdSupervisorAccount, MdSwapHoriz, MdSwapVert, MdSwapVerticalCircle, MdSystemUpdateAlt, MdTab, MdTabUnselected, MdTheaters, MdThumbDown, MdThumbUp, MdThumbsUpDown, MdTimeline, MdToc, MdToday, MdToll, MdTouchApp, MdTrackChanges, MdTranslate, MdTrendingDown, MdTrendingFlat, MdTrendingUp, MdTurnedIn, MdTurnedInNot, MdUpdate, MdVerifiedUser, MdViewAgenda, MdViewArray, MdViewCarousel, MdViewColumn, MdViewDay, MdViewHeadline, MdViewList, MdViewModule, MdViewQuilt, MdViewStream, MdViewWeek, MdVisibility, MdVisibilityOff, MdWatchLater, MdWork, MdYoutubeSearchedFor, MdZoomIn, MdZoomOut, MdAddAlert, MdError, MdErrorOutline, MdWarning, MdAddToQueue, MdAirplay, MdAlbum, MdArtTrack, MdAvTimer, MdBrandingWatermark, MdCallToAction, MdClosedCaption, MdEqualizer, MdExplicit, MdFastForward, MdFastRewind, MdFeaturedPlayList, MdFeaturedVideo, MdFiberDvr, MdFiberManualRecord, MdFiberNew, MdFiberPin, MdFiberSmartRecord, MdForward10, MdForward30, MdForward5, MdGames, MdHd, MdHearing, MdHighQuality, MdLibraryAdd, MdLibraryBooks, MdLibraryMusic, MdLoop, MdMic, MdMicNone, MdMicOff, MdMovie, MdMusicVideo, MdNewReleases, MdNotInterested, MdNote, MdPause, MdPauseCircleFilled, MdPauseCircleOutline, MdPlayArrow, MdPlayCircleFilled, MdPlayCircleOutline, MdPlaylistAdd, MdPlaylistAddCheck, MdPlaylistPlay, MdQueue, MdQueueMusic, MdQueuePlayNext, MdRadio, MdRecentActors, MdRemoveFromQueue, MdRepeat, MdRepeatOne, MdReplay10, MdReplay, MdReplay30, MdReplay5, MdShuffle, MdSkipNext, MdSkipPrevious, MdSlowMotionVideo, MdSnooze, MdSortByAlpha, MdStop, MdSubscriptions, MdSubtitles, MdSurroundSound, MdVideoCall, MdVideoLabel, MdVideoLibrary, MdVideocam, MdVideocamOff, MdVolumeDown, MdVolumeMute, MdVolumeOff, MdVolumeUp, MdWeb, MdWebAsset, MdBusiness, MdCall, MdCallEnd, MdCallMade, MdCallMerge, MdCallMissed, MdCallMissedOutgoing, MdCallReceived, MdCallSplit, MdChat, MdChatBubble, MdChatBubbleOutline, MdClearAll, MdComment, MdContactMail, MdContactPhone, MdContacts, MdDialerSip, MdDialpad, MdEmail, MdForum, MdImportContacts, MdImportExport, MdInvertColorsOff, MdLiveHelp, MdLocationOff, MdLocationOn, MdMailOutline, MdMessage, MdNoSim, MdPhone, MdPhonelinkErase, MdPhonelinkLock, MdPhonelinkRing, MdPhonelinkSetup, MdPortableWifiOff, MdPresentToAll, MdRingVolume, MdRssFeed, MdScreenShare, MdSpeakerPhone, MdStayCurrentLandscape, MdStayCurrentPortrait, MdStayPrimaryLandscape, MdStayPrimaryPortrait, MdStopScreenShare, MdSwapCalls, MdTextsms, MdVoicemail, MdVpnKey, MdAdd, MdAddBox, MdAddCircle, MdAddCircleOutline, MdArchive, MdBackspace, MdBlock, MdClear, MdContentCopy, MdContentCut, MdContentPaste, MdCreate, MdDeleteSweep, MdDrafts, MdFilterList, MdFlag, MdFontDownload, MdForward, MdGesture, MdInbox, MdLink, MdLowPriority, MdMail, MdMarkunread, MdMoveToInbox, MdNextWeek, MdRedo, MdRemove, MdRemoveCircle, MdRemoveCircleOutline, MdReply, MdReplyAll, MdReport, MdSave, MdSelectAll, MdSend, MdSort, MdTextFormat, MdUnarchive, MdUndo, MdWeekend, MdAccessAlarm, MdAccessAlarms, MdAccessTime, MdAddAlarm, MdAirplanemodeActive, MdAirplanemodeInactive, MdBattery20, MdBattery30, MdBattery50, MdBattery60, MdBattery80, MdBattery90, MdBatteryAlert, MdBatteryCharging20, MdBatteryCharging30, MdBatteryCharging50, MdBatteryCharging60, MdBatteryCharging80, MdBatteryCharging90, MdBatteryChargingFull, MdBatteryFull, MdBatteryStd, MdBatteryUnknown, MdBluetooth, MdBluetoothConnected, MdBluetoothDisabled, MdBluetoothSearching, MdBrightnessAuto, MdBrightnessHigh, MdBrightnessLow, MdBrightnessMedium, MdDataUsage, MdDeveloperMode, MdDevices, MdDvr, MdGpsFixed, MdGpsNotFixed, MdGpsOff, MdGraphicEq, MdLocationDisabled, MdLocationSearching, MdNetworkCell, MdNetworkWifi, MdNfc, MdScreenLockLandscape, MdScreenLockPortrait, MdScreenLockRotation, MdScreenRotation, MdSdStorage, MdSettingsSystemDaydream, MdSignalCellular0Bar, MdSignalCellular1Bar, MdSignalCellular2Bar, MdSignalCellular3Bar, MdSignalCellular4Bar, MdSignalCellularConnectedNoInternet0Bar, MdSignalCellularConnectedNoInternet1Bar, MdSignalCellularConnectedNoInternet2Bar, MdSignalCellularConnectedNoInternet3Bar, MdSignalCellularConnectedNoInternet4Bar, MdSignalCellularNoSim, MdSignalCellularNull, MdSignalCellularOff, MdSignalWifi0Bar, MdSignalWifi1Bar, MdSignalWifi1BarLock, MdSignalWifi2Bar, MdSignalWifi2BarLock, MdSignalWifi3Bar, MdSignalWifi3BarLock, MdSignalWifi4Bar, MdSignalWifi4BarLock, MdSignalWifiOff, MdStorage, MdUsb, MdWallpaper, MdWidgets, MdWifiLock, MdWifiTethering, MdAttachFile, MdAttachMoney, MdBorderAll, MdBorderBottom, MdBorderClear, MdBorderColor, MdBorderHorizontal, MdBorderInner, MdBorderLeft, MdBorderOuter, MdBorderRight, MdBorderStyle, MdBorderTop, MdBorderVertical, MdBubbleChart, MdDragHandle, MdFormatAlignCenter, MdFormatAlignJustify, MdFormatAlignLeft, MdFormatAlignRight, MdFormatBold, MdFormatClear, MdFormatColorFill, MdFormatColorReset, MdFormatColorText, MdFormatIndentDecrease, MdFormatIndentIncrease, MdFormatItalic, MdFormatLineSpacing, MdFormatListBulleted, MdFormatListNumbered, MdFormatPaint, MdFormatQuote, MdFormatShapes, MdFormatSize, MdFormatStrikethrough, MdFormatTextdirectionLToR, MdFormatTextdirectionRToL, MdFormatUnderlined, MdFunctions, MdHighlight, MdInsertChart, MdInsertComment, MdInsertDriveFile, MdInsertEmoticon, MdInsertInvitation, MdInsertLink, MdInsertPhoto, MdLinearScale, MdMergeType, MdModeComment, MdModeEdit, MdMonetizationOn, MdMoneyOff, MdMultilineChart, MdPieChart, MdPieChartOutlined, MdPublish, MdShortText, MdShowChart, MdSpaceBar, MdStrikethroughS, MdTextFields, MdTitle, MdVerticalAlignBottom, MdVerticalAlignCenter, MdVerticalAlignTop, MdWrapText, MdAttachment, MdCloud, MdCloudCircle, MdCloudDone, MdCloudDownload, MdCloudOff, MdCloudQueue, MdCloudUpload, MdCreateNewFolder, MdFileDownload, MdFileUpload, MdFolder, MdFolderOpen, MdFolderShared, MdCast, MdCastConnected, MdComputer, MdDesktopMac, MdDesktopWindows, MdDeveloperBoard, MdDeviceHub, MdDevicesOther, MdDock, MdGamepad, MdHeadset, MdHeadsetMic, MdKeyboard, MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowUp, MdKeyboardBackspace, MdKeyboardCapslock, MdKeyboardHide, MdKeyboardReturn, MdKeyboardTab, MdKeyboardVoice, MdLaptop, MdLaptopChromebook, MdLaptopMac, MdLaptopWindows, MdMemory, MdMouse, MdPhoneAndroid, MdPhoneIphone, MdPhonelink, MdPhonelinkOff, MdPowerInput, MdRouter, MdScanner, MdSecurity, MdSimCard, MdSmartphone, MdSpeaker, MdSpeakerGroup, MdTablet, MdTabletAndroid, MdTabletMac, MdToys, MdTv, MdVideogameAsset, MdWatch, MdAddAPhoto, MdAddToPhotos, MdAdjust, MdAssistant, MdAssistantPhoto, MdAudiotrack, MdBlurCircular, MdBlurLinear, MdBlurOff, MdBlurOn, MdBrightness1, MdBrightness2, MdBrightness3, MdBrightness4, MdBrightness5, MdBrightness6, MdBrightness7, MdBrokenImage, MdBrush, MdBurstMode, MdCamera, MdCameraAlt, MdCameraFront, MdCameraRear, MdCameraRoll, MdCenterFocusStrong, MdCenterFocusWeak, MdCollections, MdCollectionsBookmark, MdColorLens, MdColorize, MdCompare, MdControlPoint, MdControlPointDuplicate, MdCrop169, MdCrop, MdCrop32, MdCrop54, MdCrop75, MdCropDin, MdCropFree, MdCropLandscape, MdCropOriginal, MdCropPortrait, MdCropRotate, MdCropSquare, MdDehaze, MdDetails, MdEdit, MdExposure, MdExposureNeg1, MdExposureNeg2, MdExposurePlus1, MdExposurePlus2, MdExposureZero, MdFilter1, MdFilter2, MdFilter, MdFilter3, MdFilter4, MdFilter5, MdFilter6, MdFilter7, MdFilter8, MdFilter9, MdFilter9Plus, MdFilterBAndW, MdFilterCenterFocus, MdFilterDrama, MdFilterFrames, MdFilterHdr, MdFilterNone, MdFilterTiltShift, MdFilterVintage, MdFlare, MdFlashAuto, MdFlashOff, MdFlashOn, MdFlip, MdGradient, MdGrain, MdGridOff, MdGridOn, MdHdrOff, MdHdrOn, MdHdrStrong, MdHdrWeak, MdHealing, MdImage, MdImageAspectRatio, MdIso, MdLandscape, MdLeakAdd, MdLeakRemove, MdLens, MdLinkedCamera, MdLooks, MdLooks3, MdLooks4, MdLooks5, MdLooks6, MdLooksOne, MdLooksTwo, MdLoupe, MdMonochromePhotos, MdMovieCreation, MdMovieFilter, MdMusicNote, MdNature, MdNaturePeople, MdNavigateBefore, MdNavigateNext, MdPalette, MdPanorama, MdPanoramaFishEye, MdPanoramaHorizontal, MdPanoramaVertical, MdPanoramaWideAngle, MdPhoto, MdPhotoAlbum, MdPhotoCamera, MdPhotoFilter, MdPhotoLibrary, MdPhotoSizeSelectActual, MdPhotoSizeSelectLarge, MdPhotoSizeSelectSmall, MdPictureAsPdf, MdPortrait, MdRemoveRedEye, MdRotate90DegreesCcw, MdRotateLeft, MdRotateRight, MdSlideshow, MdStraighten, MdStyle, MdSwitchCamera, MdSwitchVideo, MdTagFaces, MdTexture, MdTimelapse, MdTimer10, MdTimer, MdTimer3, MdTimerOff, MdTonality, MdTransform, MdTune, MdViewComfy, MdViewCompact, MdVignette, MdWbAuto, MdWbCloudy, MdWbIncandescent, MdWbIridescent, MdWbSunny, MdAddLocation, MdBeenhere, MdDirections, MdDirectionsBike, MdDirectionsBoat, MdDirectionsBus, MdDirectionsCar, MdDirectionsRailway, MdDirectionsRun, MdDirectionsSubway, MdDirectionsTransit, MdDirectionsWalk, MdEditLocation, MdEvStation, MdFlight, MdHotel, MdLayers, MdLayersClear, MdLocalActivity, MdLocalAirport, MdLocalAtm, MdLocalBar, MdLocalCafe, MdLocalCarWash, MdLocalConvenienceStore, MdLocalDining, MdLocalDrink, MdLocalFlorist, MdLocalGasStation, MdLocalGroceryStore, MdLocalHospital, MdLocalHotel, MdLocalLaundryService, MdLocalLibrary, MdLocalMall, MdLocalMovies, MdLocalOffer, MdLocalParking, MdLocalPharmacy, MdLocalPhone, MdLocalPizza, MdLocalPlay, MdLocalPostOffice, MdLocalPrintshop, MdLocalSee, MdLocalShipping, MdLocalTaxi, MdMap, MdMyLocation, MdNavigation, MdNearMe, MdPersonPin, MdPersonPinCircle, MdPinDrop, MdPlace, MdRateReview, MdRestaurant, MdRestaurantMenu, MdSatellite, MdStoreMallDirectory, MdStreetview, MdSubway, MdTerrain, MdTraffic, MdTrain, MdTram, MdTransferWithinAStation, MdZoomOutMap, MdApps, MdArrowBack, MdArrowDownward, MdArrowDropDown, MdArrowDropDownCircle, MdArrowDropUp, MdArrowForward, MdArrowUpward, MdCancel, MdCheck, MdChevronLeft, MdChevronRight, MdClose, MdExpandLess, MdExpandMore, MdFirstPage, MdFullscreen, MdFullscreenExit, MdLastPage, MdMenu, MdMoreHoriz, MdMoreVert, MdRefresh, MdSubdirectoryArrowLeft, MdSubdirectoryArrowRight, MdUnfoldLess, MdUnfoldMore, MdAdb, MdAirlineSeatFlat, MdAirlineSeatFlatAngled, MdAirlineSeatIndividualSuite, MdAirlineSeatLegroomExtra, MdAirlineSeatLegroomNormal, MdAirlineSeatLegroomReduced, MdAirlineSeatReclineExtra, MdAirlineSeatReclineNormal, MdBluetoothAudio, MdConfirmationNumber, MdDiscFull, MdDoNotDisturb, MdDoNotDisturbAlt, MdDoNotDisturbOff, MdDoNotDisturbOn, MdDriveEta, MdEnhancedEncryption, MdEventAvailable, MdEventBusy, MdEventNote, MdFolderSpecial, MdLiveTv, MdMms, MdMore, MdNetworkCheck, MdNetworkLocked, MdNoEncryption, MdOndemandVideo, MdPersonalVideo, MdPhoneBluetoothSpeaker, MdPhoneForwarded, MdPhoneInTalk, MdPhoneLocked, MdPhoneMissed, MdPhonePaused, MdPower, MdPriorityHigh, MdRvHookup, MdSdCard, MdSimCardAlert, MdSms, MdSmsFailed, MdSync, MdSyncDisabled, MdSyncProblem, MdSystemUpdate, MdTapAndPlay, MdTimeToLeave, MdVibration, MdVoiceChat, MdVpnLock, MdWc, MdWifi, MdAcUnit, MdAirportShuttle, MdAllInclusive, MdBeachAccess, MdBusinessCenter, MdCasino, MdChildCare, MdChildFriendly, MdFitnessCenter, MdFreeBreakfast, MdGolfCourse, MdHotTub, MdKitchen, MdPool, MdRoomService, MdSmokeFree, MdSmokingRooms, MdSpa, MdCake, MdDomain, MdGroup, MdGroupAdd, MdLocationCity, MdMood, MdMoodBad, MdNotifications, MdNotificationsActive, MdNotificationsNone, MdNotificationsOff, MdNotificationsPaused, MdPages, MdPartyMode, MdPeople, MdPeopleOutline, MdPerson, MdPersonAdd, MdPersonOutline, MdPlusOne, MdPoll, MdPublic, MdSchool, MdSentimentDissatisfied, MdSentimentNeutral, MdSentimentSatisfied, MdSentimentVeryDissatisfied, MdSentimentVerySatisfied, MdShare, MdWhatshot, MdCheckBox, MdCheckBoxOutlineBlank, MdIndeterminateCheckBox, MdRadioButtonChecked, MdRadioButtonUnchecked, MdStar, MdStarBorder, MdStarHalf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Md3DRotation", function() { return Md3DRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAccessibility", function() { return MdAccessibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAccessible", function() { return MdAccessible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAccountBalance", function() { return MdAccountBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAccountBalanceWallet", function() { return MdAccountBalanceWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAccountBox", function() { return MdAccountBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAccountCircle", function() { return MdAccountCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAddShoppingCart", function() { return MdAddShoppingCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAlarm", function() { return MdAlarm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAlarmAdd", function() { return MdAlarmAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAlarmOff", function() { return MdAlarmOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAlarmOn", function() { return MdAlarmOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAllOut", function() { return MdAllOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAndroid", function() { return MdAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAnnouncement", function() { return MdAnnouncement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAspectRatio", function() { return MdAspectRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAssessment", function() { return MdAssessment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAssignment", function() { return MdAssignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAssignmentInd", function() { return MdAssignmentInd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAssignmentLate", function() { return MdAssignmentLate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAssignmentReturn", function() { return MdAssignmentReturn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAssignmentReturned", function() { return MdAssignmentReturned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAssignmentTurnedIn", function() { return MdAssignmentTurnedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAutorenew", function() { return MdAutorenew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBackup", function() { return MdBackup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBook", function() { return MdBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBookmark", function() { return MdBookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBookmarkBorder", function() { return MdBookmarkBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBugReport", function() { return MdBugReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBuild", function() { return MdBuild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCached", function() { return MdCached; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCameraEnhance", function() { return MdCameraEnhance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCardGiftcard", function() { return MdCardGiftcard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCardMembership", function() { return MdCardMembership; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCardTravel", function() { return MdCardTravel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdChangeHistory", function() { return MdChangeHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCheckCircle", function() { return MdCheckCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdChromeReaderMode", function() { return MdChromeReaderMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdClass", function() { return MdClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCode", function() { return MdCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCompareArrows", function() { return MdCompareArrows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCopyright", function() { return MdCopyright; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCreditCard", function() { return MdCreditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDashboard", function() { return MdDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDateRange", function() { return MdDateRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDelete", function() { return MdDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDeleteForever", function() { return MdDeleteForever; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDescription", function() { return MdDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDns", function() { return MdDns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDone", function() { return MdDone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDoneAll", function() { return MdDoneAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDonutLarge", function() { return MdDonutLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDonutSmall", function() { return MdDonutSmall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdEject", function() { return MdEject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdEuroSymbol", function() { return MdEuroSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdEvent", function() { return MdEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdEventSeat", function() { return MdEventSeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdExitToApp", function() { return MdExitToApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdExplore", function() { return MdExplore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdExtension", function() { return MdExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFace", function() { return MdFace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFavorite", function() { return MdFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFavoriteBorder", function() { return MdFavoriteBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFeedback", function() { return MdFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFindInPage", function() { return MdFindInPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFindReplace", function() { return MdFindReplace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFingerprint", function() { return MdFingerprint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFlightLand", function() { return MdFlightLand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFlightTakeoff", function() { return MdFlightTakeoff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFlipToBack", function() { return MdFlipToBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFlipToFront", function() { return MdFlipToFront; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdGTranslate", function() { return MdGTranslate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdGavel", function() { return MdGavel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdGetApp", function() { return MdGetApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdGif", function() { return MdGif; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdGrade", function() { return MdGrade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdGroupWork", function() { return MdGroupWork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHelp", function() { return MdHelp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHelpOutline", function() { return MdHelpOutline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHighlightOff", function() { return MdHighlightOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHistory", function() { return MdHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHome", function() { return MdHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHourglassEmpty", function() { return MdHourglassEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHourglassFull", function() { return MdHourglassFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHttp", function() { return MdHttp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHttps", function() { return MdHttps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdImportantDevices", function() { return MdImportantDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdInfo", function() { return MdInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdInfoOutline", function() { return MdInfoOutline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdInput", function() { return MdInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdInvertColors", function() { return MdInvertColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLabel", function() { return MdLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLabelOutline", function() { return MdLabelOutline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLanguage", function() { return MdLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLaunch", function() { return MdLaunch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLightbulbOutline", function() { return MdLightbulbOutline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLineStyle", function() { return MdLineStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLineWeight", function() { return MdLineWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdList", function() { return MdList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLock", function() { return MdLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLockOpen", function() { return MdLockOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLockOutline", function() { return MdLockOutline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLoyalty", function() { return MdLoyalty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMarkunreadMailbox", function() { return MdMarkunreadMailbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMotorcycle", function() { return MdMotorcycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNoteAdd", function() { return MdNoteAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdOfflinePin", function() { return MdOfflinePin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdOpacity", function() { return MdOpacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdOpenInBrowser", function() { return MdOpenInBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdOpenInNew", function() { return MdOpenInNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdOpenWith", function() { return MdOpenWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPageview", function() { return MdPageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPanTool", function() { return MdPanTool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPayment", function() { return MdPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPermCameraMic", function() { return MdPermCameraMic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPermContactCalendar", function() { return MdPermContactCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPermDataSetting", function() { return MdPermDataSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPermDeviceInformation", function() { return MdPermDeviceInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPermIdentity", function() { return MdPermIdentity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPermMedia", function() { return MdPermMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPermPhoneMsg", function() { return MdPermPhoneMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPermScanWifi", function() { return MdPermScanWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPets", function() { return MdPets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPictureInPicture", function() { return MdPictureInPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPictureInPictureAlt", function() { return MdPictureInPictureAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPlayForWork", function() { return MdPlayForWork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPolymer", function() { return MdPolymer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPowerSettingsNew", function() { return MdPowerSettingsNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPregnantWoman", function() { return MdPregnantWoman; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPrint", function() { return MdPrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdQueryBuilder", function() { return MdQueryBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdQuestionAnswer", function() { return MdQuestionAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdReceipt", function() { return MdReceipt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRecordVoiceOver", function() { return MdRecordVoiceOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRedeem", function() { return MdRedeem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRemoveShoppingCart", function() { return MdRemoveShoppingCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdReorder", function() { return MdReorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdReportProblem", function() { return MdReportProblem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRestore", function() { return MdRestore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRestorePage", function() { return MdRestorePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRoom", function() { return MdRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRoundedCorner", function() { return MdRoundedCorner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRowing", function() { return MdRowing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSchedule", function() { return MdSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSearch", function() { return MdSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSettings", function() { return MdSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSettingsApplications", function() { return MdSettingsApplications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSettingsBackupRestore", function() { return MdSettingsBackupRestore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSettingsBluetooth", function() { return MdSettingsBluetooth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSettingsBrightness", function() { return MdSettingsBrightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSettingsCell", function() { return MdSettingsCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSettingsEthernet", function() { return MdSettingsEthernet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSettingsInputAntenna", function() { return MdSettingsInputAntenna; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSettingsInputComponent", function() { return MdSettingsInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSettingsInputComposite", function() { return MdSettingsInputComposite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSettingsInputHdmi", function() { return MdSettingsInputHdmi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSettingsInputSvideo", function() { return MdSettingsInputSvideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSettingsOverscan", function() { return MdSettingsOverscan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSettingsPhone", function() { return MdSettingsPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSettingsPower", function() { return MdSettingsPower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSettingsRemote", function() { return MdSettingsRemote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSettingsVoice", function() { return MdSettingsVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdShop", function() { return MdShop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdShopTwo", function() { return MdShopTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdShoppingBasket", function() { return MdShoppingBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdShoppingCart", function() { return MdShoppingCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSpeakerNotes", function() { return MdSpeakerNotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSpeakerNotesOff", function() { return MdSpeakerNotesOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSpellcheck", function() { return MdSpellcheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdStars", function() { return MdStars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdStore", function() { return MdStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSubject", function() { return MdSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSupervisorAccount", function() { return MdSupervisorAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSwapHoriz", function() { return MdSwapHoriz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSwapVert", function() { return MdSwapVert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSwapVerticalCircle", function() { return MdSwapVerticalCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSystemUpdateAlt", function() { return MdSystemUpdateAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTab", function() { return MdTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTabUnselected", function() { return MdTabUnselected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTheaters", function() { return MdTheaters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdThumbDown", function() { return MdThumbDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdThumbUp", function() { return MdThumbUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdThumbsUpDown", function() { return MdThumbsUpDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTimeline", function() { return MdTimeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdToc", function() { return MdToc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdToday", function() { return MdToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdToll", function() { return MdToll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTouchApp", function() { return MdTouchApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTrackChanges", function() { return MdTrackChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTranslate", function() { return MdTranslate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTrendingDown", function() { return MdTrendingDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTrendingFlat", function() { return MdTrendingFlat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTrendingUp", function() { return MdTrendingUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTurnedIn", function() { return MdTurnedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTurnedInNot", function() { return MdTurnedInNot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdUpdate", function() { return MdUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVerifiedUser", function() { return MdVerifiedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdViewAgenda", function() { return MdViewAgenda; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdViewArray", function() { return MdViewArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdViewCarousel", function() { return MdViewCarousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdViewColumn", function() { return MdViewColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdViewDay", function() { return MdViewDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdViewHeadline", function() { return MdViewHeadline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdViewList", function() { return MdViewList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdViewModule", function() { return MdViewModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdViewQuilt", function() { return MdViewQuilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdViewStream", function() { return MdViewStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdViewWeek", function() { return MdViewWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVisibility", function() { return MdVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVisibilityOff", function() { return MdVisibilityOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdWatchLater", function() { return MdWatchLater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdWork", function() { return MdWork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdYoutubeSearchedFor", function() { return MdYoutubeSearchedFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdZoomIn", function() { return MdZoomIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdZoomOut", function() { return MdZoomOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAddAlert", function() { return MdAddAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdError", function() { return MdError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdErrorOutline", function() { return MdErrorOutline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdWarning", function() { return MdWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAddToQueue", function() { return MdAddToQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAirplay", function() { return MdAirplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAlbum", function() { return MdAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdArtTrack", function() { return MdArtTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAvTimer", function() { return MdAvTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBrandingWatermark", function() { return MdBrandingWatermark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCallToAction", function() { return MdCallToAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdClosedCaption", function() { return MdClosedCaption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdEqualizer", function() { return MdEqualizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdExplicit", function() { return MdExplicit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFastForward", function() { return MdFastForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFastRewind", function() { return MdFastRewind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFeaturedPlayList", function() { return MdFeaturedPlayList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFeaturedVideo", function() { return MdFeaturedVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFiberDvr", function() { return MdFiberDvr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFiberManualRecord", function() { return MdFiberManualRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFiberNew", function() { return MdFiberNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFiberPin", function() { return MdFiberPin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFiberSmartRecord", function() { return MdFiberSmartRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdForward10", function() { return MdForward10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdForward30", function() { return MdForward30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdForward5", function() { return MdForward5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdGames", function() { return MdGames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHd", function() { return MdHd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHearing", function() { return MdHearing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHighQuality", function() { return MdHighQuality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLibraryAdd", function() { return MdLibraryAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLibraryBooks", function() { return MdLibraryBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLibraryMusic", function() { return MdLibraryMusic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLoop", function() { return MdLoop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMic", function() { return MdMic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMicNone", function() { return MdMicNone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMicOff", function() { return MdMicOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMovie", function() { return MdMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMusicVideo", function() { return MdMusicVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNewReleases", function() { return MdNewReleases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNotInterested", function() { return MdNotInterested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNote", function() { return MdNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPause", function() { return MdPause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPauseCircleFilled", function() { return MdPauseCircleFilled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPauseCircleOutline", function() { return MdPauseCircleOutline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPlayArrow", function() { return MdPlayArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPlayCircleFilled", function() { return MdPlayCircleFilled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPlayCircleOutline", function() { return MdPlayCircleOutline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPlaylistAdd", function() { return MdPlaylistAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPlaylistAddCheck", function() { return MdPlaylistAddCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPlaylistPlay", function() { return MdPlaylistPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdQueue", function() { return MdQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdQueueMusic", function() { return MdQueueMusic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdQueuePlayNext", function() { return MdQueuePlayNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRadio", function() { return MdRadio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRecentActors", function() { return MdRecentActors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRemoveFromQueue", function() { return MdRemoveFromQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRepeat", function() { return MdRepeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRepeatOne", function() { return MdRepeatOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdReplay10", function() { return MdReplay10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdReplay", function() { return MdReplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdReplay30", function() { return MdReplay30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdReplay5", function() { return MdReplay5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdShuffle", function() { return MdShuffle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSkipNext", function() { return MdSkipNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSkipPrevious", function() { return MdSkipPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSlowMotionVideo", function() { return MdSlowMotionVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSnooze", function() { return MdSnooze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSortByAlpha", function() { return MdSortByAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdStop", function() { return MdStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSubscriptions", function() { return MdSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSubtitles", function() { return MdSubtitles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSurroundSound", function() { return MdSurroundSound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVideoCall", function() { return MdVideoCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVideoLabel", function() { return MdVideoLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVideoLibrary", function() { return MdVideoLibrary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVideocam", function() { return MdVideocam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVideocamOff", function() { return MdVideocamOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVolumeDown", function() { return MdVolumeDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVolumeMute", function() { return MdVolumeMute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVolumeOff", function() { return MdVolumeOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVolumeUp", function() { return MdVolumeUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdWeb", function() { return MdWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdWebAsset", function() { return MdWebAsset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBusiness", function() { return MdBusiness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCall", function() { return MdCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCallEnd", function() { return MdCallEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCallMade", function() { return MdCallMade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCallMerge", function() { return MdCallMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCallMissed", function() { return MdCallMissed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCallMissedOutgoing", function() { return MdCallMissedOutgoing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCallReceived", function() { return MdCallReceived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCallSplit", function() { return MdCallSplit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdChat", function() { return MdChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdChatBubble", function() { return MdChatBubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdChatBubbleOutline", function() { return MdChatBubbleOutline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdClearAll", function() { return MdClearAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdComment", function() { return MdComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdContactMail", function() { return MdContactMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdContactPhone", function() { return MdContactPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdContacts", function() { return MdContacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDialerSip", function() { return MdDialerSip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDialpad", function() { return MdDialpad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdEmail", function() { return MdEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdForum", function() { return MdForum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdImportContacts", function() { return MdImportContacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdImportExport", function() { return MdImportExport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdInvertColorsOff", function() { return MdInvertColorsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLiveHelp", function() { return MdLiveHelp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocationOff", function() { return MdLocationOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocationOn", function() { return MdLocationOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMailOutline", function() { return MdMailOutline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMessage", function() { return MdMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNoSim", function() { return MdNoSim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhone", function() { return MdPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhonelinkErase", function() { return MdPhonelinkErase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhonelinkLock", function() { return MdPhonelinkLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhonelinkRing", function() { return MdPhonelinkRing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhonelinkSetup", function() { return MdPhonelinkSetup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPortableWifiOff", function() { return MdPortableWifiOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPresentToAll", function() { return MdPresentToAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRingVolume", function() { return MdRingVolume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRssFeed", function() { return MdRssFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdScreenShare", function() { return MdScreenShare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSpeakerPhone", function() { return MdSpeakerPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdStayCurrentLandscape", function() { return MdStayCurrentLandscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdStayCurrentPortrait", function() { return MdStayCurrentPortrait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdStayPrimaryLandscape", function() { return MdStayPrimaryLandscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdStayPrimaryPortrait", function() { return MdStayPrimaryPortrait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdStopScreenShare", function() { return MdStopScreenShare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSwapCalls", function() { return MdSwapCalls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTextsms", function() { return MdTextsms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVoicemail", function() { return MdVoicemail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVpnKey", function() { return MdVpnKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAdd", function() { return MdAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAddBox", function() { return MdAddBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAddCircle", function() { return MdAddCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAddCircleOutline", function() { return MdAddCircleOutline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdArchive", function() { return MdArchive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBackspace", function() { return MdBackspace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBlock", function() { return MdBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdClear", function() { return MdClear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdContentCopy", function() { return MdContentCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdContentCut", function() { return MdContentCut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdContentPaste", function() { return MdContentPaste; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCreate", function() { return MdCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDeleteSweep", function() { return MdDeleteSweep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDrafts", function() { return MdDrafts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFilterList", function() { return MdFilterList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFlag", function() { return MdFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFontDownload", function() { return MdFontDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdForward", function() { return MdForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdGesture", function() { return MdGesture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdInbox", function() { return MdInbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLink", function() { return MdLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLowPriority", function() { return MdLowPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMail", function() { return MdMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMarkunread", function() { return MdMarkunread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMoveToInbox", function() { return MdMoveToInbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNextWeek", function() { return MdNextWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRedo", function() { return MdRedo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRemove", function() { return MdRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRemoveCircle", function() { return MdRemoveCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRemoveCircleOutline", function() { return MdRemoveCircleOutline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdReply", function() { return MdReply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdReplyAll", function() { return MdReplyAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdReport", function() { return MdReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSave", function() { return MdSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSelectAll", function() { return MdSelectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSend", function() { return MdSend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSort", function() { return MdSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTextFormat", function() { return MdTextFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdUnarchive", function() { return MdUnarchive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdUndo", function() { return MdUndo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdWeekend", function() { return MdWeekend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAccessAlarm", function() { return MdAccessAlarm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAccessAlarms", function() { return MdAccessAlarms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAccessTime", function() { return MdAccessTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAddAlarm", function() { return MdAddAlarm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAirplanemodeActive", function() { return MdAirplanemodeActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAirplanemodeInactive", function() { return MdAirplanemodeInactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBattery20", function() { return MdBattery20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBattery30", function() { return MdBattery30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBattery50", function() { return MdBattery50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBattery60", function() { return MdBattery60; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBattery80", function() { return MdBattery80; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBattery90", function() { return MdBattery90; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBatteryAlert", function() { return MdBatteryAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBatteryCharging20", function() { return MdBatteryCharging20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBatteryCharging30", function() { return MdBatteryCharging30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBatteryCharging50", function() { return MdBatteryCharging50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBatteryCharging60", function() { return MdBatteryCharging60; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBatteryCharging80", function() { return MdBatteryCharging80; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBatteryCharging90", function() { return MdBatteryCharging90; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBatteryChargingFull", function() { return MdBatteryChargingFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBatteryFull", function() { return MdBatteryFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBatteryStd", function() { return MdBatteryStd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBatteryUnknown", function() { return MdBatteryUnknown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBluetooth", function() { return MdBluetooth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBluetoothConnected", function() { return MdBluetoothConnected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBluetoothDisabled", function() { return MdBluetoothDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBluetoothSearching", function() { return MdBluetoothSearching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBrightnessAuto", function() { return MdBrightnessAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBrightnessHigh", function() { return MdBrightnessHigh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBrightnessLow", function() { return MdBrightnessLow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBrightnessMedium", function() { return MdBrightnessMedium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDataUsage", function() { return MdDataUsage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDeveloperMode", function() { return MdDeveloperMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDevices", function() { return MdDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDvr", function() { return MdDvr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdGpsFixed", function() { return MdGpsFixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdGpsNotFixed", function() { return MdGpsNotFixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdGpsOff", function() { return MdGpsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdGraphicEq", function() { return MdGraphicEq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocationDisabled", function() { return MdLocationDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocationSearching", function() { return MdLocationSearching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNetworkCell", function() { return MdNetworkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNetworkWifi", function() { return MdNetworkWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNfc", function() { return MdNfc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdScreenLockLandscape", function() { return MdScreenLockLandscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdScreenLockPortrait", function() { return MdScreenLockPortrait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdScreenLockRotation", function() { return MdScreenLockRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdScreenRotation", function() { return MdScreenRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSdStorage", function() { return MdSdStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSettingsSystemDaydream", function() { return MdSettingsSystemDaydream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalCellular0Bar", function() { return MdSignalCellular0Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalCellular1Bar", function() { return MdSignalCellular1Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalCellular2Bar", function() { return MdSignalCellular2Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalCellular3Bar", function() { return MdSignalCellular3Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalCellular4Bar", function() { return MdSignalCellular4Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalCellularConnectedNoInternet0Bar", function() { return MdSignalCellularConnectedNoInternet0Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalCellularConnectedNoInternet1Bar", function() { return MdSignalCellularConnectedNoInternet1Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalCellularConnectedNoInternet2Bar", function() { return MdSignalCellularConnectedNoInternet2Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalCellularConnectedNoInternet3Bar", function() { return MdSignalCellularConnectedNoInternet3Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalCellularConnectedNoInternet4Bar", function() { return MdSignalCellularConnectedNoInternet4Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalCellularNoSim", function() { return MdSignalCellularNoSim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalCellularNull", function() { return MdSignalCellularNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalCellularOff", function() { return MdSignalCellularOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalWifi0Bar", function() { return MdSignalWifi0Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalWifi1Bar", function() { return MdSignalWifi1Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalWifi1BarLock", function() { return MdSignalWifi1BarLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalWifi2Bar", function() { return MdSignalWifi2Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalWifi2BarLock", function() { return MdSignalWifi2BarLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalWifi3Bar", function() { return MdSignalWifi3Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalWifi3BarLock", function() { return MdSignalWifi3BarLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalWifi4Bar", function() { return MdSignalWifi4Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalWifi4BarLock", function() { return MdSignalWifi4BarLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSignalWifiOff", function() { return MdSignalWifiOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdStorage", function() { return MdStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdUsb", function() { return MdUsb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdWallpaper", function() { return MdWallpaper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdWidgets", function() { return MdWidgets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdWifiLock", function() { return MdWifiLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdWifiTethering", function() { return MdWifiTethering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAttachFile", function() { return MdAttachFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAttachMoney", function() { return MdAttachMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBorderAll", function() { return MdBorderAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBorderBottom", function() { return MdBorderBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBorderClear", function() { return MdBorderClear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBorderColor", function() { return MdBorderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBorderHorizontal", function() { return MdBorderHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBorderInner", function() { return MdBorderInner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBorderLeft", function() { return MdBorderLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBorderOuter", function() { return MdBorderOuter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBorderRight", function() { return MdBorderRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBorderStyle", function() { return MdBorderStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBorderTop", function() { return MdBorderTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBorderVertical", function() { return MdBorderVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBubbleChart", function() { return MdBubbleChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDragHandle", function() { return MdDragHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatAlignCenter", function() { return MdFormatAlignCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatAlignJustify", function() { return MdFormatAlignJustify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatAlignLeft", function() { return MdFormatAlignLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatAlignRight", function() { return MdFormatAlignRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatBold", function() { return MdFormatBold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatClear", function() { return MdFormatClear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatColorFill", function() { return MdFormatColorFill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatColorReset", function() { return MdFormatColorReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatColorText", function() { return MdFormatColorText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatIndentDecrease", function() { return MdFormatIndentDecrease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatIndentIncrease", function() { return MdFormatIndentIncrease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatItalic", function() { return MdFormatItalic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatLineSpacing", function() { return MdFormatLineSpacing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatListBulleted", function() { return MdFormatListBulleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatListNumbered", function() { return MdFormatListNumbered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatPaint", function() { return MdFormatPaint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatQuote", function() { return MdFormatQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatShapes", function() { return MdFormatShapes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatSize", function() { return MdFormatSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatStrikethrough", function() { return MdFormatStrikethrough; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatTextdirectionLToR", function() { return MdFormatTextdirectionLToR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatTextdirectionRToL", function() { return MdFormatTextdirectionRToL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormatUnderlined", function() { return MdFormatUnderlined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFunctions", function() { return MdFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHighlight", function() { return MdHighlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdInsertChart", function() { return MdInsertChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdInsertComment", function() { return MdInsertComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdInsertDriveFile", function() { return MdInsertDriveFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdInsertEmoticon", function() { return MdInsertEmoticon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdInsertInvitation", function() { return MdInsertInvitation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdInsertLink", function() { return MdInsertLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdInsertPhoto", function() { return MdInsertPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLinearScale", function() { return MdLinearScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMergeType", function() { return MdMergeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdModeComment", function() { return MdModeComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdModeEdit", function() { return MdModeEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMonetizationOn", function() { return MdMonetizationOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMoneyOff", function() { return MdMoneyOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMultilineChart", function() { return MdMultilineChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPieChart", function() { return MdPieChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPieChartOutlined", function() { return MdPieChartOutlined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPublish", function() { return MdPublish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdShortText", function() { return MdShortText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdShowChart", function() { return MdShowChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSpaceBar", function() { return MdSpaceBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdStrikethroughS", function() { return MdStrikethroughS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTextFields", function() { return MdTextFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTitle", function() { return MdTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVerticalAlignBottom", function() { return MdVerticalAlignBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVerticalAlignCenter", function() { return MdVerticalAlignCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVerticalAlignTop", function() { return MdVerticalAlignTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdWrapText", function() { return MdWrapText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAttachment", function() { return MdAttachment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCloud", function() { return MdCloud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCloudCircle", function() { return MdCloudCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCloudDone", function() { return MdCloudDone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCloudDownload", function() { return MdCloudDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCloudOff", function() { return MdCloudOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCloudQueue", function() { return MdCloudQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCloudUpload", function() { return MdCloudUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCreateNewFolder", function() { return MdCreateNewFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFileDownload", function() { return MdFileDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFileUpload", function() { return MdFileUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFolder", function() { return MdFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFolderOpen", function() { return MdFolderOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFolderShared", function() { return MdFolderShared; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCast", function() { return MdCast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCastConnected", function() { return MdCastConnected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdComputer", function() { return MdComputer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDesktopMac", function() { return MdDesktopMac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDesktopWindows", function() { return MdDesktopWindows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDeveloperBoard", function() { return MdDeveloperBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDeviceHub", function() { return MdDeviceHub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDevicesOther", function() { return MdDevicesOther; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDock", function() { return MdDock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdGamepad", function() { return MdGamepad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHeadset", function() { return MdHeadset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHeadsetMic", function() { return MdHeadsetMic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdKeyboard", function() { return MdKeyboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdKeyboardArrowDown", function() { return MdKeyboardArrowDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdKeyboardArrowLeft", function() { return MdKeyboardArrowLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdKeyboardArrowRight", function() { return MdKeyboardArrowRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdKeyboardArrowUp", function() { return MdKeyboardArrowUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdKeyboardBackspace", function() { return MdKeyboardBackspace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdKeyboardCapslock", function() { return MdKeyboardCapslock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdKeyboardHide", function() { return MdKeyboardHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdKeyboardReturn", function() { return MdKeyboardReturn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdKeyboardTab", function() { return MdKeyboardTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdKeyboardVoice", function() { return MdKeyboardVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLaptop", function() { return MdLaptop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLaptopChromebook", function() { return MdLaptopChromebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLaptopMac", function() { return MdLaptopMac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLaptopWindows", function() { return MdLaptopWindows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMemory", function() { return MdMemory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMouse", function() { return MdMouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhoneAndroid", function() { return MdPhoneAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhoneIphone", function() { return MdPhoneIphone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhonelink", function() { return MdPhonelink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhonelinkOff", function() { return MdPhonelinkOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPowerInput", function() { return MdPowerInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRouter", function() { return MdRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdScanner", function() { return MdScanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSecurity", function() { return MdSecurity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSimCard", function() { return MdSimCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSmartphone", function() { return MdSmartphone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSpeaker", function() { return MdSpeaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSpeakerGroup", function() { return MdSpeakerGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTablet", function() { return MdTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTabletAndroid", function() { return MdTabletAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTabletMac", function() { return MdTabletMac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdToys", function() { return MdToys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTv", function() { return MdTv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVideogameAsset", function() { return MdVideogameAsset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdWatch", function() { return MdWatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAddAPhoto", function() { return MdAddAPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAddToPhotos", function() { return MdAddToPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAdjust", function() { return MdAdjust; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAssistant", function() { return MdAssistant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAssistantPhoto", function() { return MdAssistantPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAudiotrack", function() { return MdAudiotrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBlurCircular", function() { return MdBlurCircular; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBlurLinear", function() { return MdBlurLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBlurOff", function() { return MdBlurOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBlurOn", function() { return MdBlurOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBrightness1", function() { return MdBrightness1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBrightness2", function() { return MdBrightness2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBrightness3", function() { return MdBrightness3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBrightness4", function() { return MdBrightness4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBrightness5", function() { return MdBrightness5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBrightness6", function() { return MdBrightness6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBrightness7", function() { return MdBrightness7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBrokenImage", function() { return MdBrokenImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBrush", function() { return MdBrush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBurstMode", function() { return MdBurstMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCamera", function() { return MdCamera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCameraAlt", function() { return MdCameraAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCameraFront", function() { return MdCameraFront; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCameraRear", function() { return MdCameraRear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCameraRoll", function() { return MdCameraRoll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCenterFocusStrong", function() { return MdCenterFocusStrong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCenterFocusWeak", function() { return MdCenterFocusWeak; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCollections", function() { return MdCollections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCollectionsBookmark", function() { return MdCollectionsBookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdColorLens", function() { return MdColorLens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdColorize", function() { return MdColorize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCompare", function() { return MdCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdControlPoint", function() { return MdControlPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdControlPointDuplicate", function() { return MdControlPointDuplicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCrop169", function() { return MdCrop169; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCrop", function() { return MdCrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCrop32", function() { return MdCrop32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCrop54", function() { return MdCrop54; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCrop75", function() { return MdCrop75; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCropDin", function() { return MdCropDin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCropFree", function() { return MdCropFree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCropLandscape", function() { return MdCropLandscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCropOriginal", function() { return MdCropOriginal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCropPortrait", function() { return MdCropPortrait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCropRotate", function() { return MdCropRotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCropSquare", function() { return MdCropSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDehaze", function() { return MdDehaze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDetails", function() { return MdDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdEdit", function() { return MdEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdExposure", function() { return MdExposure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdExposureNeg1", function() { return MdExposureNeg1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdExposureNeg2", function() { return MdExposureNeg2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdExposurePlus1", function() { return MdExposurePlus1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdExposurePlus2", function() { return MdExposurePlus2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdExposureZero", function() { return MdExposureZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFilter1", function() { return MdFilter1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFilter2", function() { return MdFilter2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFilter", function() { return MdFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFilter3", function() { return MdFilter3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFilter4", function() { return MdFilter4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFilter5", function() { return MdFilter5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFilter6", function() { return MdFilter6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFilter7", function() { return MdFilter7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFilter8", function() { return MdFilter8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFilter9", function() { return MdFilter9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFilter9Plus", function() { return MdFilter9Plus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFilterBAndW", function() { return MdFilterBAndW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFilterCenterFocus", function() { return MdFilterCenterFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFilterDrama", function() { return MdFilterDrama; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFilterFrames", function() { return MdFilterFrames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFilterHdr", function() { return MdFilterHdr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFilterNone", function() { return MdFilterNone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFilterTiltShift", function() { return MdFilterTiltShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFilterVintage", function() { return MdFilterVintage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFlare", function() { return MdFlare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFlashAuto", function() { return MdFlashAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFlashOff", function() { return MdFlashOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFlashOn", function() { return MdFlashOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFlip", function() { return MdFlip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdGradient", function() { return MdGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdGrain", function() { return MdGrain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdGridOff", function() { return MdGridOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdGridOn", function() { return MdGridOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHdrOff", function() { return MdHdrOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHdrOn", function() { return MdHdrOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHdrStrong", function() { return MdHdrStrong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHdrWeak", function() { return MdHdrWeak; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHealing", function() { return MdHealing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdImage", function() { return MdImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdImageAspectRatio", function() { return MdImageAspectRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdIso", function() { return MdIso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLandscape", function() { return MdLandscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLeakAdd", function() { return MdLeakAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLeakRemove", function() { return MdLeakRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLens", function() { return MdLens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLinkedCamera", function() { return MdLinkedCamera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLooks", function() { return MdLooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLooks3", function() { return MdLooks3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLooks4", function() { return MdLooks4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLooks5", function() { return MdLooks5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLooks6", function() { return MdLooks6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLooksOne", function() { return MdLooksOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLooksTwo", function() { return MdLooksTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLoupe", function() { return MdLoupe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMonochromePhotos", function() { return MdMonochromePhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMovieCreation", function() { return MdMovieCreation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMovieFilter", function() { return MdMovieFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMusicNote", function() { return MdMusicNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNature", function() { return MdNature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNaturePeople", function() { return MdNaturePeople; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNavigateBefore", function() { return MdNavigateBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNavigateNext", function() { return MdNavigateNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPalette", function() { return MdPalette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPanorama", function() { return MdPanorama; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPanoramaFishEye", function() { return MdPanoramaFishEye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPanoramaHorizontal", function() { return MdPanoramaHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPanoramaVertical", function() { return MdPanoramaVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPanoramaWideAngle", function() { return MdPanoramaWideAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhoto", function() { return MdPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhotoAlbum", function() { return MdPhotoAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhotoCamera", function() { return MdPhotoCamera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhotoFilter", function() { return MdPhotoFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhotoLibrary", function() { return MdPhotoLibrary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhotoSizeSelectActual", function() { return MdPhotoSizeSelectActual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhotoSizeSelectLarge", function() { return MdPhotoSizeSelectLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhotoSizeSelectSmall", function() { return MdPhotoSizeSelectSmall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPictureAsPdf", function() { return MdPictureAsPdf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPortrait", function() { return MdPortrait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRemoveRedEye", function() { return MdRemoveRedEye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRotate90DegreesCcw", function() { return MdRotate90DegreesCcw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRotateLeft", function() { return MdRotateLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRotateRight", function() { return MdRotateRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSlideshow", function() { return MdSlideshow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdStraighten", function() { return MdStraighten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdStyle", function() { return MdStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSwitchCamera", function() { return MdSwitchCamera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSwitchVideo", function() { return MdSwitchVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTagFaces", function() { return MdTagFaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTexture", function() { return MdTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTimelapse", function() { return MdTimelapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTimer10", function() { return MdTimer10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTimer", function() { return MdTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTimer3", function() { return MdTimer3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTimerOff", function() { return MdTimerOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTonality", function() { return MdTonality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTransform", function() { return MdTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTune", function() { return MdTune; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdViewComfy", function() { return MdViewComfy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdViewCompact", function() { return MdViewCompact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVignette", function() { return MdVignette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdWbAuto", function() { return MdWbAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdWbCloudy", function() { return MdWbCloudy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdWbIncandescent", function() { return MdWbIncandescent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdWbIridescent", function() { return MdWbIridescent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdWbSunny", function() { return MdWbSunny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAddLocation", function() { return MdAddLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBeenhere", function() { return MdBeenhere; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDirections", function() { return MdDirections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDirectionsBike", function() { return MdDirectionsBike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDirectionsBoat", function() { return MdDirectionsBoat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDirectionsBus", function() { return MdDirectionsBus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDirectionsCar", function() { return MdDirectionsCar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDirectionsRailway", function() { return MdDirectionsRailway; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDirectionsRun", function() { return MdDirectionsRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDirectionsSubway", function() { return MdDirectionsSubway; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDirectionsTransit", function() { return MdDirectionsTransit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDirectionsWalk", function() { return MdDirectionsWalk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdEditLocation", function() { return MdEditLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdEvStation", function() { return MdEvStation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFlight", function() { return MdFlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHotel", function() { return MdHotel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLayers", function() { return MdLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLayersClear", function() { return MdLayersClear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalActivity", function() { return MdLocalActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalAirport", function() { return MdLocalAirport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalAtm", function() { return MdLocalAtm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalBar", function() { return MdLocalBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalCafe", function() { return MdLocalCafe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalCarWash", function() { return MdLocalCarWash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalConvenienceStore", function() { return MdLocalConvenienceStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalDining", function() { return MdLocalDining; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalDrink", function() { return MdLocalDrink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalFlorist", function() { return MdLocalFlorist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalGasStation", function() { return MdLocalGasStation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalGroceryStore", function() { return MdLocalGroceryStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalHospital", function() { return MdLocalHospital; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalHotel", function() { return MdLocalHotel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalLaundryService", function() { return MdLocalLaundryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalLibrary", function() { return MdLocalLibrary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalMall", function() { return MdLocalMall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalMovies", function() { return MdLocalMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalOffer", function() { return MdLocalOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalParking", function() { return MdLocalParking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalPharmacy", function() { return MdLocalPharmacy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalPhone", function() { return MdLocalPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalPizza", function() { return MdLocalPizza; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalPlay", function() { return MdLocalPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalPostOffice", function() { return MdLocalPostOffice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalPrintshop", function() { return MdLocalPrintshop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalSee", function() { return MdLocalSee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalShipping", function() { return MdLocalShipping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocalTaxi", function() { return MdLocalTaxi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMap", function() { return MdMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMyLocation", function() { return MdMyLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNavigation", function() { return MdNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNearMe", function() { return MdNearMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPersonPin", function() { return MdPersonPin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPersonPinCircle", function() { return MdPersonPinCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPinDrop", function() { return MdPinDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPlace", function() { return MdPlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRateReview", function() { return MdRateReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRestaurant", function() { return MdRestaurant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRestaurantMenu", function() { return MdRestaurantMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSatellite", function() { return MdSatellite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdStoreMallDirectory", function() { return MdStoreMallDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdStreetview", function() { return MdStreetview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSubway", function() { return MdSubway; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTerrain", function() { return MdTerrain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTraffic", function() { return MdTraffic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTrain", function() { return MdTrain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTram", function() { return MdTram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTransferWithinAStation", function() { return MdTransferWithinAStation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdZoomOutMap", function() { return MdZoomOutMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdApps", function() { return MdApps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdArrowBack", function() { return MdArrowBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdArrowDownward", function() { return MdArrowDownward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdArrowDropDown", function() { return MdArrowDropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdArrowDropDownCircle", function() { return MdArrowDropDownCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdArrowDropUp", function() { return MdArrowDropUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdArrowForward", function() { return MdArrowForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdArrowUpward", function() { return MdArrowUpward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCancel", function() { return MdCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCheck", function() { return MdCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdChevronLeft", function() { return MdChevronLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdChevronRight", function() { return MdChevronRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdClose", function() { return MdClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdExpandLess", function() { return MdExpandLess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdExpandMore", function() { return MdExpandMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFirstPage", function() { return MdFirstPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFullscreen", function() { return MdFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFullscreenExit", function() { return MdFullscreenExit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLastPage", function() { return MdLastPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMenu", function() { return MdMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMoreHoriz", function() { return MdMoreHoriz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMoreVert", function() { return MdMoreVert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRefresh", function() { return MdRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSubdirectoryArrowLeft", function() { return MdSubdirectoryArrowLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSubdirectoryArrowRight", function() { return MdSubdirectoryArrowRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdUnfoldLess", function() { return MdUnfoldLess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdUnfoldMore", function() { return MdUnfoldMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAdb", function() { return MdAdb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAirlineSeatFlat", function() { return MdAirlineSeatFlat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAirlineSeatFlatAngled", function() { return MdAirlineSeatFlatAngled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAirlineSeatIndividualSuite", function() { return MdAirlineSeatIndividualSuite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAirlineSeatLegroomExtra", function() { return MdAirlineSeatLegroomExtra; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAirlineSeatLegroomNormal", function() { return MdAirlineSeatLegroomNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAirlineSeatLegroomReduced", function() { return MdAirlineSeatLegroomReduced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAirlineSeatReclineExtra", function() { return MdAirlineSeatReclineExtra; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAirlineSeatReclineNormal", function() { return MdAirlineSeatReclineNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBluetoothAudio", function() { return MdBluetoothAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdConfirmationNumber", function() { return MdConfirmationNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDiscFull", function() { return MdDiscFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDoNotDisturb", function() { return MdDoNotDisturb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDoNotDisturbAlt", function() { return MdDoNotDisturbAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDoNotDisturbOff", function() { return MdDoNotDisturbOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDoNotDisturbOn", function() { return MdDoNotDisturbOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDriveEta", function() { return MdDriveEta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdEnhancedEncryption", function() { return MdEnhancedEncryption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdEventAvailable", function() { return MdEventAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdEventBusy", function() { return MdEventBusy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdEventNote", function() { return MdEventNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFolderSpecial", function() { return MdFolderSpecial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLiveTv", function() { return MdLiveTv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMms", function() { return MdMms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMore", function() { return MdMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNetworkCheck", function() { return MdNetworkCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNetworkLocked", function() { return MdNetworkLocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNoEncryption", function() { return MdNoEncryption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdOndemandVideo", function() { return MdOndemandVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPersonalVideo", function() { return MdPersonalVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhoneBluetoothSpeaker", function() { return MdPhoneBluetoothSpeaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhoneForwarded", function() { return MdPhoneForwarded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhoneInTalk", function() { return MdPhoneInTalk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhoneLocked", function() { return MdPhoneLocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhoneMissed", function() { return MdPhoneMissed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPhonePaused", function() { return MdPhonePaused; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPower", function() { return MdPower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPriorityHigh", function() { return MdPriorityHigh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRvHookup", function() { return MdRvHookup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSdCard", function() { return MdSdCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSimCardAlert", function() { return MdSimCardAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSms", function() { return MdSms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSmsFailed", function() { return MdSmsFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSync", function() { return MdSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSyncDisabled", function() { return MdSyncDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSyncProblem", function() { return MdSyncProblem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSystemUpdate", function() { return MdSystemUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTapAndPlay", function() { return MdTapAndPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTimeToLeave", function() { return MdTimeToLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVibration", function() { return MdVibration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVoiceChat", function() { return MdVoiceChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdVpnLock", function() { return MdVpnLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdWc", function() { return MdWc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdWifi", function() { return MdWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAcUnit", function() { return MdAcUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAirportShuttle", function() { return MdAirportShuttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdAllInclusive", function() { return MdAllInclusive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBeachAccess", function() { return MdBeachAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdBusinessCenter", function() { return MdBusinessCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCasino", function() { return MdCasino; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdChildCare", function() { return MdChildCare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdChildFriendly", function() { return MdChildFriendly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFitnessCenter", function() { return MdFitnessCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFreeBreakfast", function() { return MdFreeBreakfast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdGolfCourse", function() { return MdGolfCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdHotTub", function() { return MdHotTub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdKitchen", function() { return MdKitchen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPool", function() { return MdPool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRoomService", function() { return MdRoomService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSmokeFree", function() { return MdSmokeFree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSmokingRooms", function() { return MdSmokingRooms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSpa", function() { return MdSpa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCake", function() { return MdCake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdDomain", function() { return MdDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdGroup", function() { return MdGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdGroupAdd", function() { return MdGroupAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdLocationCity", function() { return MdLocationCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMood", function() { return MdMood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMoodBad", function() { return MdMoodBad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNotifications", function() { return MdNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNotificationsActive", function() { return MdNotificationsActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNotificationsNone", function() { return MdNotificationsNone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNotificationsOff", function() { return MdNotificationsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNotificationsPaused", function() { return MdNotificationsPaused; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPages", function() { return MdPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPartyMode", function() { return MdPartyMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPeople", function() { return MdPeople; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPeopleOutline", function() { return MdPeopleOutline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPerson", function() { return MdPerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPersonAdd", function() { return MdPersonAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPersonOutline", function() { return MdPersonOutline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPlusOne", function() { return MdPlusOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPoll", function() { return MdPoll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdPublic", function() { return MdPublic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSchool", function() { return MdSchool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSentimentDissatisfied", function() { return MdSentimentDissatisfied; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSentimentNeutral", function() { return MdSentimentNeutral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSentimentSatisfied", function() { return MdSentimentSatisfied; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSentimentVeryDissatisfied", function() { return MdSentimentVeryDissatisfied; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdSentimentVerySatisfied", function() { return MdSentimentVerySatisfied; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdShare", function() { return MdShare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdWhatshot", function() { return MdWhatshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCheckBox", function() { return MdCheckBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCheckBoxOutlineBlank", function() { return MdCheckBoxOutlineBlank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdIndeterminateCheckBox", function() { return MdIndeterminateCheckBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRadioButtonChecked", function() { return MdRadioButtonChecked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRadioButtonUnchecked", function() { return MdRadioButtonUnchecked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdStar", function() { return MdStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdStarBorder", function() { return MdStarBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdStarHalf", function() { return MdStarHalf; });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./node_modules/react-icons/lib/esm/index.js");
// THIS FILE IS AUTO GENERATED

var Md3DRotation = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"}}]})(props);
};
Md3DRotation.displayName = "Md3DRotation";
var MdAccessibility = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"}}]})(props);
};
MdAccessibility.displayName = "MdAccessibility";
var MdAccessible = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"4","r":"2"}},{"tag":"path","attr":{"d":"M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"}}]})(props);
};
MdAccessible.displayName = "MdAccessible";
var MdAccountBalance = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"}}]})(props);
};
MdAccountBalance.displayName = "MdAccountBalance";
var MdAccountBalanceWallet = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}}]})(props);
};
MdAccountBalanceWallet.displayName = "MdAccountBalanceWallet";
var MdAccountBox = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"}}]})(props);
};
MdAccountBox.displayName = "MdAccountBox";
var MdAccountCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}}]})(props);
};
MdAccountCircle.displayName = "MdAccountCircle";
var MdAddShoppingCart = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"}}]})(props);
};
MdAddShoppingCart.displayName = "MdAddShoppingCart";
var MdAlarm = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}}]})(props);
};
MdAlarm.displayName = "MdAlarm";
var MdAlarmAdd = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"}}]})(props);
};
MdAlarmAdd.displayName = "MdAlarmAdd";
var MdAlarmOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"}}]})(props);
};
MdAlarmOff.displayName = "MdAlarmOff";
var MdAlarmOn = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"}}]})(props);
};
MdAlarmOn.displayName = "MdAlarmOn";
var MdAllOut = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"}}]})(props);
};
MdAllOut.displayName = "MdAllOut";
var MdAndroid = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"}}]})(props);
};
MdAndroid.displayName = "MdAndroid";
var MdAnnouncement = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"}}]})(props);
};
MdAnnouncement.displayName = "MdAnnouncement";
var MdAspectRatio = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"}}]})(props);
};
MdAspectRatio.displayName = "MdAspectRatio";
var MdAssessment = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"}}]})(props);
};
MdAssessment.displayName = "MdAssessment";
var MdAssignment = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}}]})(props);
};
MdAssignment.displayName = "MdAssignment";
var MdAssignmentInd = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"}}]})(props);
};
MdAssignmentInd.displayName = "MdAssignmentInd";
var MdAssignmentLate = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"}}]})(props);
};
MdAssignmentLate.displayName = "MdAssignmentLate";
var MdAssignmentReturn = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"}}]})(props);
};
MdAssignmentReturn.displayName = "MdAssignmentReturn";
var MdAssignmentReturned = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"}}]})(props);
};
MdAssignmentReturned.displayName = "MdAssignmentReturned";
var MdAssignmentTurnedIn = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"}}]})(props);
};
MdAssignmentTurnedIn.displayName = "MdAssignmentTurnedIn";
var MdAutorenew = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"}}]})(props);
};
MdAutorenew.displayName = "MdAutorenew";
var MdBackup = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}}]})(props);
};
MdBackup.displayName = "MdBackup";
var MdBook = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"}}]})(props);
};
MdBook.displayName = "MdBook";
var MdBookmark = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"}}]})(props);
};
MdBookmark.displayName = "MdBookmark";
var MdBookmarkBorder = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"}}]})(props);
};
MdBookmarkBorder.displayName = "MdBookmarkBorder";
var MdBugReport = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"}}]})(props);
};
MdBugReport.displayName = "MdBugReport";
var MdBuild = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"}}]})(props);
};
MdBuild.displayName = "MdBuild";
var MdCached = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"}}]})(props);
};
MdCached.displayName = "MdCached";
var MdCameraEnhance = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"}}]})(props);
};
MdCameraEnhance.displayName = "MdCameraEnhance";
var MdCardGiftcard = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"}}]})(props);
};
MdCardGiftcard.displayName = "MdCardGiftcard";
var MdCardMembership = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"}}]})(props);
};
MdCardMembership.displayName = "MdCardMembership";
var MdCardTravel = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"}}]})(props);
};
MdCardTravel.displayName = "MdCardTravel";
var MdChangeHistory = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"}}]})(props);
};
MdChangeHistory.displayName = "MdChangeHistory";
var MdCheckCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}}]})(props);
};
MdCheckCircle.displayName = "MdCheckCircle";
var MdChromeReaderMode = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"}}]})(props);
};
MdChromeReaderMode.displayName = "MdChromeReaderMode";
var MdClass = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"}}]})(props);
};
MdClass.displayName = "MdClass";
var MdCode = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}}]})(props);
};
MdCode.displayName = "MdCode";
var MdCompareArrows = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"}}]})(props);
};
MdCompareArrows.displayName = "MdCompareArrows";
var MdCopyright = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}}]})(props);
};
MdCopyright.displayName = "MdCopyright";
var MdCreditCard = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"}}]})(props);
};
MdCreditCard.displayName = "MdCreditCard";
var MdDashboard = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"}}]})(props);
};
MdDashboard.displayName = "MdDashboard";
var MdDateRange = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"}}]})(props);
};
MdDateRange.displayName = "MdDateRange";
var MdDelete = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}}]})(props);
};
MdDelete.displayName = "MdDelete";
var MdDeleteForever = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}}]})(props);
};
MdDeleteForever.displayName = "MdDeleteForever";
var MdDescription = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}}]})(props);
};
MdDescription.displayName = "MdDescription";
var MdDns = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}}]})(props);
};
MdDns.displayName = "MdDns";
var MdDone = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}}]})(props);
};
MdDone.displayName = "MdDone";
var MdDoneAll = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"}}]})(props);
};
MdDoneAll.displayName = "MdDoneAll";
var MdDonutLarge = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"}}]})(props);
};
MdDonutLarge.displayName = "MdDonutLarge";
var MdDonutSmall = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"}}]})(props);
};
MdDonutSmall.displayName = "MdDonutSmall";
var MdEject = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5 17h14v2H5zm7-12L5.33 15h13.34z"}}]})(props);
};
MdEject.displayName = "MdEject";
var MdEuroSymbol = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"}}]})(props);
};
MdEuroSymbol.displayName = "MdEuroSymbol";
var MdEvent = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"}}]})(props);
};
MdEvent.displayName = "MdEvent";
var MdEventSeat = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"}}]})(props);
};
MdEventSeat.displayName = "MdEventSeat";
var MdExitToApp = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}}]})(props);
};
MdExitToApp.displayName = "MdExitToApp";
var MdExplore = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"}}]})(props);
};
MdExplore.displayName = "MdExplore";
var MdExtension = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"}}]})(props);
};
MdExtension.displayName = "MdExtension";
var MdFace = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"}}]})(props);
};
MdFace.displayName = "MdFace";
var MdFavorite = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}}]})(props);
};
MdFavorite.displayName = "MdFavorite";
var MdFavoriteBorder = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}}]})(props);
};
MdFavoriteBorder.displayName = "MdFavoriteBorder";
var MdFeedback = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"}}]})(props);
};
MdFeedback.displayName = "MdFeedback";
var MdFindInPage = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"}}]})(props);
};
MdFindInPage.displayName = "MdFindInPage";
var MdFindReplace = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"}}]})(props);
};
MdFindReplace.displayName = "MdFindReplace";
var MdFingerprint = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"}}]})(props);
};
MdFingerprint.displayName = "MdFingerprint";
var MdFlightLand = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"}}]})(props);
};
MdFlightLand.displayName = "MdFlightLand";
var MdFlightTakeoff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"}}]})(props);
};
MdFlightTakeoff.displayName = "MdFlightTakeoff";
var MdFlipToBack = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"}}]})(props);
};
MdFlipToBack.displayName = "MdFlipToBack";
var MdFlipToFront = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"}}]})(props);
};
MdFlipToFront.displayName = "MdFlipToFront";
var MdGTranslate = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"}}]})(props);
};
MdGTranslate.displayName = "MdGTranslate";
var MdGavel = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"}}]})(props);
};
MdGavel.displayName = "MdGavel";
var MdGetApp = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}}]})(props);
};
MdGetApp.displayName = "MdGetApp";
var MdGif = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"}}]})(props);
};
MdGif.displayName = "MdGif";
var MdGrade = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}}]})(props);
};
MdGrade.displayName = "MdGrade";
var MdGroupWork = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}}]})(props);
};
MdGroupWork.displayName = "MdGroupWork";
var MdHelp = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}}]})(props);
};
MdHelp.displayName = "MdHelp";
var MdHelpOutline = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"}}]})(props);
};
MdHelpOutline.displayName = "MdHelpOutline";
var MdHighlightOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}}]})(props);
};
MdHighlightOff.displayName = "MdHighlightOff";
var MdHistory = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"}}]})(props);
};
MdHistory.displayName = "MdHistory";
var MdHome = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}}]})(props);
};
MdHome.displayName = "MdHome";
var MdHourglassEmpty = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"}}]})(props);
};
MdHourglassEmpty.displayName = "MdHourglassEmpty";
var MdHourglassFull = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"}}]})(props);
};
MdHourglassFull.displayName = "MdHourglassFull";
var MdHttp = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"}}]})(props);
};
MdHttp.displayName = "MdHttp";
var MdHttps = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}}]})(props);
};
MdHttps.displayName = "MdHttps";
var MdImportantDevices = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"}}]})(props);
};
MdImportantDevices.displayName = "MdImportantDevices";
var MdInfo = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}}]})(props);
};
MdInfo.displayName = "MdInfo";
var MdInfoOutline = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"}}]})(props);
};
MdInfoOutline.displayName = "MdInfoOutline";
var MdInput = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"}}]})(props);
};
MdInput.displayName = "MdInput";
var MdInvertColors = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"}}]})(props);
};
MdInvertColors.displayName = "MdInvertColors";
var MdLabel = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"}}]})(props);
};
MdLabel.displayName = "MdLabel";
var MdLabelOutline = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"}}]})(props);
};
MdLabelOutline.displayName = "MdLabelOutline";
var MdLanguage = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}}]})(props);
};
MdLanguage.displayName = "MdLanguage";
var MdLaunch = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}}]})(props);
};
MdLaunch.displayName = "MdLaunch";
var MdLightbulbOutline = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"}}]})(props);
};
MdLightbulbOutline.displayName = "MdLightbulbOutline";
var MdLineStyle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"}}]})(props);
};
MdLineStyle.displayName = "MdLineStyle";
var MdLineWeight = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"}}]})(props);
};
MdLineWeight.displayName = "MdLineWeight";
var MdList = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}}]})(props);
};
MdList.displayName = "MdList";
var MdLock = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}}]})(props);
};
MdLock.displayName = "MdLock";
var MdLockOpen = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"}}]})(props);
};
MdLockOpen.displayName = "MdLockOpen";
var MdLockOutline = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"}}]})(props);
};
MdLockOutline.displayName = "MdLockOutline";
var MdLoyalty = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"}}]})(props);
};
MdLoyalty.displayName = "MdLoyalty";
var MdMarkunreadMailbox = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"}}]})(props);
};
MdMarkunreadMailbox.displayName = "MdMarkunreadMailbox";
var MdMotorcycle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"}}]})(props);
};
MdMotorcycle.displayName = "MdMotorcycle";
var MdNoteAdd = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"}}]})(props);
};
MdNoteAdd.displayName = "MdNoteAdd";
var MdOfflinePin = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"}}]})(props);
};
MdOfflinePin.displayName = "MdOfflinePin";
var MdOpacity = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"}}]})(props);
};
MdOpacity.displayName = "MdOpacity";
var MdOpenInBrowser = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"}}]})(props);
};
MdOpenInBrowser.displayName = "MdOpenInBrowser";
var MdOpenInNew = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}}]})(props);
};
MdOpenInNew.displayName = "MdOpenInNew";
var MdOpenWith = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"}}]})(props);
};
MdOpenWith.displayName = "MdOpenWith";
var MdPageview = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"}}]})(props);
};
MdPageview.displayName = "MdPageview";
var MdPanTool = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"}}]})(props);
};
MdPanTool.displayName = "MdPanTool";
var MdPayment = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"}}]})(props);
};
MdPayment.displayName = "MdPayment";
var MdPermCameraMic = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"}}]})(props);
};
MdPermCameraMic.displayName = "MdPermCameraMic";
var MdPermContactCalendar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"}}]})(props);
};
MdPermContactCalendar.displayName = "MdPermContactCalendar";
var MdPermDataSetting = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}}]})(props);
};
MdPermDataSetting.displayName = "MdPermDataSetting";
var MdPermDeviceInformation = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"}}]})(props);
};
MdPermDeviceInformation.displayName = "MdPermDeviceInformation";
var MdPermIdentity = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"}}]})(props);
};
MdPermIdentity.displayName = "MdPermIdentity";
var MdPermMedia = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"}}]})(props);
};
MdPermMedia.displayName = "MdPermMedia";
var MdPermPhoneMsg = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"}}]})(props);
};
MdPermPhoneMsg.displayName = "MdPermPhoneMsg";
var MdPermScanWifi = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"}}]})(props);
};
MdPermScanWifi.displayName = "MdPermScanWifi";
var MdPets = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"4.5","cy":"9.5","r":"2.5"}},{"tag":"circle","attr":{"cx":"9","cy":"5.5","r":"2.5"}},{"tag":"circle","attr":{"cx":"15","cy":"5.5","r":"2.5"}},{"tag":"circle","attr":{"cx":"19.5","cy":"9.5","r":"2.5"}},{"tag":"path","attr":{"d":"M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"}}]})(props);
};
MdPets.displayName = "MdPets";
var MdPictureInPicture = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"}}]})(props);
};
MdPictureInPicture.displayName = "MdPictureInPicture";
var MdPictureInPictureAlt = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"}}]})(props);
};
MdPictureInPictureAlt.displayName = "MdPictureInPictureAlt";
var MdPlayForWork = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"}}]})(props);
};
MdPlayForWork.displayName = "MdPlayForWork";
var MdPolymer = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"}}]})(props);
};
MdPolymer.displayName = "MdPolymer";
var MdPowerSettingsNew = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"}}]})(props);
};
MdPowerSettingsNew.displayName = "MdPowerSettingsNew";
var MdPregnantWoman = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"}}]})(props);
};
MdPregnantWoman.displayName = "MdPregnantWoman";
var MdPrint = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"}}]})(props);
};
MdPrint.displayName = "MdPrint";
var MdQueryBuilder = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"}}]})(props);
};
MdQueryBuilder.displayName = "MdQueryBuilder";
var MdQuestionAnswer = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"}}]})(props);
};
MdQuestionAnswer.displayName = "MdQuestionAnswer";
var MdReceipt = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"}}]})(props);
};
MdReceipt.displayName = "MdReceipt";
var MdRecordVoiceOver = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"9","cy":"9","r":"4"}},{"tag":"path","attr":{"d":"M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"}}]})(props);
};
MdRecordVoiceOver.displayName = "MdRecordVoiceOver";
var MdRedeem = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"}}]})(props);
};
MdRedeem.displayName = "MdRedeem";
var MdRemoveShoppingCart = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"}}]})(props);
};
MdRemoveShoppingCart.displayName = "MdRemoveShoppingCart";
var MdReorder = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"}}]})(props);
};
MdReorder.displayName = "MdReorder";
var MdReportProblem = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}}]})(props);
};
MdReportProblem.displayName = "MdReportProblem";
var MdRestore = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"}}]})(props);
};
MdRestore.displayName = "MdRestore";
var MdRestorePage = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"}}]})(props);
};
MdRestorePage.displayName = "MdRestorePage";
var MdRoom = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}}]})(props);
};
MdRoom.displayName = "MdRoom";
var MdRoundedCorner = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"}}]})(props);
};
MdRoundedCorner.displayName = "MdRoundedCorner";
var MdRowing = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"}}]})(props);
};
MdRowing.displayName = "MdRowing";
var MdSchedule = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"}}]})(props);
};
MdSchedule.displayName = "MdSchedule";
var MdSearch = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}}]})(props);
};
MdSearch.displayName = "MdSearch";
var MdSettings = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"}}]})(props);
};
MdSettings.displayName = "MdSettings";
var MdSettingsApplications = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"}}]})(props);
};
MdSettingsApplications.displayName = "MdSettingsApplications";
var MdSettingsBackupRestore = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"}}]})(props);
};
MdSettingsBackupRestore.displayName = "MdSettingsBackupRestore";
var MdSettingsBluetooth = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"}}]})(props);
};
MdSettingsBluetooth.displayName = "MdSettingsBluetooth";
var MdSettingsBrightness = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"}}]})(props);
};
MdSettingsBrightness.displayName = "MdSettingsBrightness";
var MdSettingsCell = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"}}]})(props);
};
MdSettingsCell.displayName = "MdSettingsCell";
var MdSettingsEthernet = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"}}]})(props);
};
MdSettingsEthernet.displayName = "MdSettingsEthernet";
var MdSettingsInputAntenna = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"}}]})(props);
};
MdSettingsInputAntenna.displayName = "MdSettingsInputAntenna";
var MdSettingsInputComponent = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"}}]})(props);
};
MdSettingsInputComponent.displayName = "MdSettingsInputComponent";
var MdSettingsInputComposite = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"}}]})(props);
};
MdSettingsInputComposite.displayName = "MdSettingsInputComposite";
var MdSettingsInputHdmi = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"}}]})(props);
};
MdSettingsInputHdmi.displayName = "MdSettingsInputHdmi";
var MdSettingsInputSvideo = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"}}]})(props);
};
MdSettingsInputSvideo.displayName = "MdSettingsInputSvideo";
var MdSettingsOverscan = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"}}]})(props);
};
MdSettingsOverscan.displayName = "MdSettingsOverscan";
var MdSettingsPhone = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"}}]})(props);
};
MdSettingsPhone.displayName = "MdSettingsPhone";
var MdSettingsPower = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"}}]})(props);
};
MdSettingsPower.displayName = "MdSettingsPower";
var MdSettingsRemote = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"}}]})(props);
};
MdSettingsRemote.displayName = "MdSettingsRemote";
var MdSettingsVoice = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"}}]})(props);
};
MdSettingsVoice.displayName = "MdSettingsVoice";
var MdShop = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"}}]})(props);
};
MdShop.displayName = "MdShop";
var MdShopTwo = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"}}]})(props);
};
MdShopTwo.displayName = "MdShopTwo";
var MdShoppingBasket = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}}]})(props);
};
MdShoppingBasket.displayName = "MdShoppingBasket";
var MdShoppingCart = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}}]})(props);
};
MdShoppingCart.displayName = "MdShoppingCart";
var MdSpeakerNotes = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"}}]})(props);
};
MdSpeakerNotes.displayName = "MdSpeakerNotes";
var MdSpeakerNotesOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"}}]})(props);
};
MdSpeakerNotesOff.displayName = "MdSpeakerNotesOff";
var MdSpellcheck = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"}}]})(props);
};
MdSpellcheck.displayName = "MdSpellcheck";
var MdStars = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"}}]})(props);
};
MdStars.displayName = "MdStars";
var MdStore = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"}}]})(props);
};
MdStore.displayName = "MdStore";
var MdSubject = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"}}]})(props);
};
MdSubject.displayName = "MdSubject";
var MdSupervisorAccount = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"}}]})(props);
};
MdSupervisorAccount.displayName = "MdSupervisorAccount";
var MdSwapHoriz = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"}}]})(props);
};
MdSwapHoriz.displayName = "MdSwapHoriz";
var MdSwapVert = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"}}]})(props);
};
MdSwapVert.displayName = "MdSwapVert";
var MdSwapVerticalCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"}}]})(props);
};
MdSwapVerticalCircle.displayName = "MdSwapVerticalCircle";
var MdSystemUpdateAlt = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"}}]})(props);
};
MdSystemUpdateAlt.displayName = "MdSystemUpdateAlt";
var MdTab = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"}}]})(props);
};
MdTab.displayName = "MdTab";
var MdTabUnselected = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"}}]})(props);
};
MdTabUnselected.displayName = "MdTabUnselected";
var MdTheaters = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"}}]})(props);
};
MdTheaters.displayName = "MdTheaters";
var MdThumbDown = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"}}]})(props);
};
MdThumbDown.displayName = "MdThumbDown";
var MdThumbUp = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"}}]})(props);
};
MdThumbUp.displayName = "MdThumbUp";
var MdThumbsUpDown = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"}}]})(props);
};
MdThumbsUpDown.displayName = "MdThumbsUpDown";
var MdTimeline = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"}}]})(props);
};
MdTimeline.displayName = "MdTimeline";
var MdToc = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"}}]})(props);
};
MdToc.displayName = "MdToc";
var MdToday = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"}}]})(props);
};
MdToday.displayName = "MdToday";
var MdToll = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"}}]})(props);
};
MdToll.displayName = "MdToll";
var MdTouchApp = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"}}]})(props);
};
MdTouchApp.displayName = "MdTouchApp";
var MdTrackChanges = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"}}]})(props);
};
MdTrackChanges.displayName = "MdTrackChanges";
var MdTranslate = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"}}]})(props);
};
MdTranslate.displayName = "MdTranslate";
var MdTrendingDown = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"}}]})(props);
};
MdTrendingDown.displayName = "MdTrendingDown";
var MdTrendingFlat = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 12l-4-4v3H3v2h15v3z"}}]})(props);
};
MdTrendingFlat.displayName = "MdTrendingFlat";
var MdTrendingUp = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"}}]})(props);
};
MdTrendingUp.displayName = "MdTrendingUp";
var MdTurnedIn = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"}}]})(props);
};
MdTurnedIn.displayName = "MdTurnedIn";
var MdTurnedInNot = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"}}]})(props);
};
MdTurnedInNot.displayName = "MdTurnedInNot";
var MdUpdate = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"}}]})(props);
};
MdUpdate.displayName = "MdUpdate";
var MdVerifiedUser = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"}}]})(props);
};
MdVerifiedUser.displayName = "MdVerifiedUser";
var MdViewAgenda = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"}}]})(props);
};
MdViewAgenda.displayName = "MdViewAgenda";
var MdViewArray = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"}}]})(props);
};
MdViewArray.displayName = "MdViewArray";
var MdViewCarousel = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"}}]})(props);
};
MdViewCarousel.displayName = "MdViewCarousel";
var MdViewColumn = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"}}]})(props);
};
MdViewColumn.displayName = "MdViewColumn";
var MdViewDay = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"}}]})(props);
};
MdViewDay.displayName = "MdViewDay";
var MdViewHeadline = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"}}]})(props);
};
MdViewHeadline.displayName = "MdViewHeadline";
var MdViewList = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"}}]})(props);
};
MdViewList.displayName = "MdViewList";
var MdViewModule = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"}}]})(props);
};
MdViewModule.displayName = "MdViewModule";
var MdViewQuilt = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"}}]})(props);
};
MdViewQuilt.displayName = "MdViewQuilt";
var MdViewStream = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 18h17v-6H4v6zM4 5v6h17V5H4z"}}]})(props);
};
MdViewStream.displayName = "MdViewStream";
var MdViewWeek = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"}}]})(props);
};
MdViewWeek.displayName = "MdViewWeek";
var MdVisibility = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}}]})(props);
};
MdVisibility.displayName = "MdVisibility";
var MdVisibilityOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}}]})(props);
};
MdVisibilityOff.displayName = "MdVisibilityOff";
var MdWatchLater = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"}}]})(props);
};
MdWatchLater.displayName = "MdWatchLater";
var MdWork = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"}}]})(props);
};
MdWork.displayName = "MdWork";
var MdYoutubeSearchedFor = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"}}]})(props);
};
MdYoutubeSearchedFor.displayName = "MdYoutubeSearchedFor";
var MdZoomIn = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"}}]})(props);
};
MdZoomIn.displayName = "MdZoomIn";
var MdZoomOut = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"}}]})(props);
};
MdZoomOut.displayName = "MdZoomOut";
var MdAddAlert = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"}}]})(props);
};
MdAddAlert.displayName = "MdAddAlert";
var MdError = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}}]})(props);
};
MdError.displayName = "MdError";
var MdErrorOutline = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}}]})(props);
};
MdErrorOutline.displayName = "MdErrorOutline";
var MdWarning = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}}]})(props);
};
MdWarning.displayName = "MdWarning";
var MdAddToQueue = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2h-3v3h-2v-3H8v-2h3V7h2v3h3z"}}]})(props);
};
MdAddToQueue.displayName = "MdAddToQueue";
var MdAirplay = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}}]})(props);
};
MdAirplay.displayName = "MdAirplay";
var MdAlbum = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"}}]})(props);
};
MdAlbum.displayName = "MdAlbum";
var MdArtTrack = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z"}}]})(props);
};
MdArtTrack.displayName = "MdArtTrack";
var MdAvTimer = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"}}]})(props);
};
MdAvTimer.displayName = "MdAvTimer";
var MdBrandingWatermark = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-9v-6h9v6z"}}]})(props);
};
MdBrandingWatermark.displayName = "MdBrandingWatermark";
var MdCallToAction = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z"}}]})(props);
};
MdCallToAction.displayName = "MdCallToAction";
var MdClosedCaption = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z"}}]})(props);
};
MdClosedCaption.displayName = "MdClosedCaption";
var MdEqualizer = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"}}]})(props);
};
MdEqualizer.displayName = "MdEqualizer";
var MdExplicit = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z"}}]})(props);
};
MdExplicit.displayName = "MdExplicit";
var MdFastForward = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"}}]})(props);
};
MdFastForward.displayName = "MdFastForward";
var MdFastRewind = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"}}]})(props);
};
MdFastRewind.displayName = "MdFastRewind";
var MdFeaturedPlayList = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z"}}]})(props);
};
MdFeaturedPlayList.displayName = "MdFeaturedPlayList";
var MdFeaturedVideo = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z"}}]})(props);
};
MdFeaturedVideo.displayName = "MdFeaturedVideo";
var MdFiberDvr = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.5 10.5h2v1h-2zm-13 0h2v3h-2zM21 3H3c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h18c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zM8 13.5c0 .85-.65 1.5-1.5 1.5H3V9h3.5c.85 0 1.5.65 1.5 1.5v3zm4.62 1.5h-1.5L9.37 9h1.5l1 3.43 1-3.43h1.5l-1.75 6zM21 11.5c0 .6-.4 1.15-.9 1.4L21 15h-1.5l-.85-2H17.5v2H16V9h3.5c.85 0 1.5.65 1.5 1.5v1z"}}]})(props);
};
MdFiberDvr.displayName = "MdFiberDvr";
var MdFiberManualRecord = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"8"}}]})(props);
};
MdFiberManualRecord.displayName = "MdFiberManualRecord";
var MdFiberNew = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5v6zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4v1.26zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25v5z"}}]})(props);
};
MdFiberNew.displayName = "MdFiberNew";
var MdFiberPin = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5.5 10.5h2v1h-2zM20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM9 11.5c0 .85-.65 1.5-1.5 1.5h-2v2H4V9h3.5c.85 0 1.5.65 1.5 1.5v1zm3.5 3.5H11V9h1.5v6zm7.5 0h-1.2l-2.55-3.5V15H15V9h1.25l2.5 3.5V9H20v6z"}}]})(props);
};
MdFiberPin.displayName = "MdFiberPin";
var MdFiberSmartRecord = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"circle","attr":{"cx":"9","cy":"12","r":"8"}},{"tag":"path","attr":{"d":"M17 4.26v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z"}}]}]})(props);
};
MdFiberSmartRecord.displayName = "MdFiberSmartRecord";
var MdForward10 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.8 3H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"}}]})(props);
};
MdForward10.displayName = "MdForward10";
var MdForward30 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9.6 13.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5zM4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8z"}}]})(props);
};
MdForward30.displayName = "MdForward30";
var MdForward5 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.7.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.5.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.6z"}}]})(props);
};
MdForward5.displayName = "MdForward5";
var MdGames = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"}}]})(props);
};
MdGames.displayName = "MdGames";
var MdHd = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z"}}]})(props);
};
MdHd.displayName = "MdHd";
var MdHearing = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z"}}]})(props);
};
MdHearing.displayName = "MdHearing";
var MdHighQuality = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 11H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-.5h2v-3h-2v3z"}}]})(props);
};
MdHighQuality.displayName = "MdHighQuality";
var MdLibraryAdd = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"}}]})(props);
};
MdLibraryAdd.displayName = "MdLibraryAdd";
var MdLibraryBooks = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"}}]})(props);
};
MdLibraryBooks.displayName = "MdLibraryBooks";
var MdLibraryMusic = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"}}]})(props);
};
MdLibraryMusic.displayName = "MdLibraryMusic";
var MdLoop = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"}}]})(props);
};
MdLoop.displayName = "MdLoop";
var MdMic = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"}}]})(props);
};
MdMic.displayName = "MdMic";
var MdMicNone = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2-.66 0-1.2-.54-1.2-1.2V4.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"}}]})(props);
};
MdMicNone.displayName = "MdMicNone";
var MdMicOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"}}]})(props);
};
MdMicOff.displayName = "MdMicOff";
var MdMovie = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"}}]})(props);
};
MdMovie.displayName = "MdMovie";
var MdMusicVideo = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z"}}]})(props);
};
MdMusicVideo.displayName = "MdMusicVideo";
var MdNewReleases = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"}}]})(props);
};
MdNewReleases.displayName = "MdNewReleases";
var MdNotInterested = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"}}]})(props);
};
MdNotInterested.displayName = "MdNotInterested";
var MdNote = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"}}]})(props);
};
MdNote.displayName = "MdNote";
var MdPause = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 19h4V5H6v14zm8-14v14h4V5h-4z"}}]})(props);
};
MdPause.displayName = "MdPause";
var MdPauseCircleFilled = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"}}]})(props);
};
MdPauseCircleFilled.displayName = "MdPauseCircleFilled";
var MdPauseCircleOutline = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"}}]})(props);
};
MdPauseCircleOutline.displayName = "MdPauseCircleOutline";
var MdPlayArrow = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8 5v14l11-7z"}}]})(props);
};
MdPlayArrow.displayName = "MdPlayArrow";
var MdPlayCircleFilled = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"}}]})(props);
};
MdPlayCircleFilled.displayName = "MdPlayCircleFilled";
var MdPlayCircleOutline = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}}]})(props);
};
MdPlayCircleOutline.displayName = "MdPlayCircleOutline";
var MdPlaylistAdd = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"}}]})(props);
};
MdPlaylistAdd.displayName = "MdPlaylistAdd";
var MdPlaylistAddCheck = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"}}]})(props);
};
MdPlaylistAddCheck.displayName = "MdPlaylistAddCheck";
var MdPlaylistPlay = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z"}}]})(props);
};
MdPlaylistPlay.displayName = "MdPlaylistPlay";
var MdQueue = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"}}]})(props);
};
MdQueue.displayName = "MdQueue";
var MdQueueMusic = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"}}]})(props);
};
MdQueueMusic.displayName = "MdQueueMusic";
var MdQueuePlayNext = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2zm-8 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8l-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z"}}]})(props);
};
MdQueuePlayNext.displayName = "MdQueuePlayNext";
var MdRadio = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z"}}]})(props);
};
MdRadio.displayName = "MdRadio";
var MdRecentActors = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17z"}}]})(props);
};
MdRecentActors.displayName = "MdRecentActors";
var MdRemoveFromQueue = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2H8v-2h8z"}}]})(props);
};
MdRemoveFromQueue.displayName = "MdRemoveFromQueue";
var MdRepeat = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"}}]})(props);
};
MdRepeat.displayName = "MdRepeat";
var MdRepeatOne = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"}}]})(props);
};
MdRepeatOne.displayName = "MdRepeatOne";
var MdReplay10 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.1 11H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1c.2.1.3.2.5.3s.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"}}]})(props);
};
MdReplay10.displayName = "MdReplay10";
var MdReplay = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}}]})(props);
};
MdReplay.displayName = "MdReplay";
var MdReplay30 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-2.4 8.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5c0-.1-.1-.2-.1-.3s-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"}}]})(props);
};
MdReplay30.displayName = "MdReplay30";
var MdReplay5 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.3 8.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.4.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.7z"}}]})(props);
};
MdReplay5.displayName = "MdReplay5";
var MdShuffle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"}}]})(props);
};
MdShuffle.displayName = "MdShuffle";
var MdSkipNext = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"}}]})(props);
};
MdSkipNext.displayName = "MdSkipNext";
var MdSkipPrevious = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 6h2v12H6zm3.5 6l8.5 6V6z"}}]})(props);
};
MdSkipPrevious.displayName = "MdSkipPrevious";
var MdSlowMotionVideo = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13.05 9.79L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z"}}]})(props);
};
MdSlowMotionVideo.displayName = "MdSlowMotionVideo";
var MdSnooze = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-3-9h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9v2z"}}]})(props);
};
MdSnooze.displayName = "MdSnooze";
var MdSortByAlpha = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"}}]})(props);
};
MdSortByAlpha.displayName = "MdSortByAlpha";
var MdStop = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 6h12v12H6z"}}]})(props);
};
MdStop.displayName = "MdStop";
var MdSubscriptions = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z"}}]})(props);
};
MdSubscriptions.displayName = "MdSubscriptions";
var MdSubtitles = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z"}}]})(props);
};
MdSubtitles.displayName = "MdSubtitles";
var MdSurroundSound = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.76 16.24l-1.41 1.41C4.78 16.1 4 14.05 4 12c0-2.05.78-4.1 2.34-5.66l1.41 1.41C6.59 8.93 6 10.46 6 12s.59 3.07 1.76 4.24zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm5.66 1.66l-1.41-1.41C17.41 15.07 18 13.54 18 12s-.59-3.07-1.76-4.24l1.41-1.41C19.22 7.9 20 9.95 20 12c0 2.05-.78 4.1-2.34 5.66zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}}]})(props);
};
MdSurroundSound.displayName = "MdSurroundSound";
var MdVideoCall = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"}}]})(props);
};
MdVideoCall.displayName = "MdVideoCall";
var MdVideoLabel = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z"}}]})(props);
};
MdVideoLabel.displayName = "MdVideoLabel";
var MdVideoLibrary = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"}}]})(props);
};
MdVideoLibrary.displayName = "MdVideoLibrary";
var MdVideocam = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"}}]})(props);
};
MdVideocam.displayName = "MdVideocam";
var MdVideocamOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z"}}]})(props);
};
MdVideocamOff.displayName = "MdVideocamOff";
var MdVolumeDown = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"}}]})(props);
};
MdVolumeDown.displayName = "MdVolumeDown";
var MdVolumeMute = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 9v6h4l5 5V4l-5 5H7z"}}]})(props);
};
MdVolumeMute.displayName = "MdVolumeMute";
var MdVolumeOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"}}]})(props);
};
MdVolumeOff.displayName = "MdVolumeOff";
var MdVolumeUp = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"}}]})(props);
};
MdVolumeUp.displayName = "MdVolumeUp";
var MdWeb = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"}}]})(props);
};
MdWeb.displayName = "MdWeb";
var MdWebAsset = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z"}}]})(props);
};
MdWebAsset.displayName = "MdWebAsset";
var MdBusiness = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"}}]})(props);
};
MdBusiness.displayName = "MdBusiness";
var MdCall = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}}]})(props);
};
MdCall.displayName = "MdCall";
var MdCallEnd = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z"}}]})(props);
};
MdCallEnd.displayName = "MdCallEnd";
var MdCallMade = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"}}]})(props);
};
MdCallMade.displayName = "MdCallMade";
var MdCallMerge = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"}}]})(props);
};
MdCallMerge.displayName = "MdCallMerge";
var MdCallMissed = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.59 7L12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z"}}]})(props);
};
MdCallMissed.displayName = "MdCallMissed";
var MdCallMissedOutgoing = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z"}}]})(props);
};
MdCallMissedOutgoing.displayName = "MdCallMissedOutgoing";
var MdCallReceived = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z"}}]})(props);
};
MdCallReceived.displayName = "MdCallReceived";
var MdCallSplit = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z"}}]})(props);
};
MdCallSplit.displayName = "MdCallSplit";
var MdChat = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"}}]})(props);
};
MdChat.displayName = "MdChat";
var MdChatBubble = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"}}]})(props);
};
MdChatBubble.displayName = "MdChatBubble";
var MdChatBubbleOutline = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"}}]})(props);
};
MdChatBubbleOutline.displayName = "MdChatBubbleOutline";
var MdClearAll = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"}}]})(props);
};
MdClearAll.displayName = "MdClearAll";
var MdComment = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}}]})(props);
};
MdComment.displayName = "MdComment";
var MdContactMail = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 8V7l-3 2-3-2v1l3 2 3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm8-6h-8V6h8v6z"}}]})(props);
};
MdContactMail.displayName = "MdContactMail";
var MdContactPhone = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z"}}]})(props);
};
MdContactPhone.displayName = "MdContactPhone";
var MdContacts = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"}}]})(props);
};
MdContacts.displayName = "MdContacts";
var MdDialerSip = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 3h-1v5h1V3zm-2 2h-2V4h2V3h-3v3h2v1h-2v1h3V5zm3-2v5h1V6h2V3h-3zm2 2h-1V4h1v1zm0 10.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.27-.26.35-.65.24-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"}}]})(props);
};
MdDialerSip.displayName = "MdDialerSip";
var MdDialpad = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}}]})(props);
};
MdDialpad.displayName = "MdDialpad";
var MdEmail = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}}]})(props);
};
MdEmail.displayName = "MdEmail";
var MdForum = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"}}]})(props);
};
MdForum.displayName = "MdForum";
var MdImportContacts = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"}}]})(props);
};
MdImportContacts.displayName = "MdImportContacts";
var MdImportExport = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"}}]})(props);
};
MdImportExport.displayName = "MdImportExport";
var MdInvertColorsOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.65 20.87l-2.35-2.35-6.3-6.29-3.56-3.57-1.42-1.41L4.27 4.5 3 5.77l2.78 2.78c-2.55 3.14-2.36 7.76.56 10.69C7.9 20.8 9.95 21.58 12 21.58c1.79 0 3.57-.59 5.03-1.78l2.7 2.7L21 21.23l-.35-.36zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59c0-1.32.43-2.57 1.21-3.6L12 14.77v4.82zM12 5.1v4.58l7.25 7.26c1.37-2.96.84-6.57-1.6-9.01L12 2.27l-3.7 3.7 1.41 1.41L12 5.1z"}}]})(props);
};
MdInvertColorsOff.displayName = "MdInvertColorsOff";
var MdLiveHelp = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}}]})(props);
};
MdLiveHelp.displayName = "MdLiveHelp";
var MdLocationOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 6.5c1.38 0 2.5 1.12 2.5 2.5 0 .74-.33 1.39-.83 1.85l3.63 3.63c.98-1.86 1.7-3.8 1.7-5.48 0-3.87-3.13-7-7-7-1.98 0-3.76.83-5.04 2.15l3.19 3.19c.46-.52 1.11-.84 1.85-.84zm4.37 9.6l-4.63-4.63-.11-.11L3.27 3 2 4.27l3.18 3.18C5.07 7.95 5 8.47 5 9c0 5.25 7 13 7 13s1.67-1.85 3.38-4.35L18.73 21 20 19.73l-3.63-3.63z"}}]})(props);
};
MdLocationOff.displayName = "MdLocationOff";
var MdLocationOn = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}}]})(props);
};
MdLocationOn.displayName = "MdLocationOn";
var MdMailOutline = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"}}]})(props);
};
MdMailOutline.displayName = "MdMailOutline";
var MdMessage = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}}]})(props);
};
MdMessage.displayName = "MdMessage";
var MdNoSim = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z"}}]})(props);
};
MdNoSim.displayName = "MdNoSim";
var MdPhone = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}}]})(props);
};
MdPhone.displayName = "MdPhone";
var MdPhonelinkErase = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 8.2l-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z"}}]})(props);
};
MdPhonelinkErase.displayName = "MdPhonelinkErase";
var MdPhonelinkLock = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-8.2 10V9.5C10.8 8.1 9.4 7 8 7S5.2 8.1 5.2 9.5V11c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3zm-1.3 0h-3V9.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3V11z"}}]})(props);
};
MdPhonelinkLock.displayName = "MdPhonelinkLock";
var MdPhonelinkRing = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.1 7.7l-1 1c1.8 1.8 1.8 4.6 0 6.5l1 1c2.5-2.3 2.5-6.1 0-8.5zM18 9.8l-1 1c.5.7.5 1.6 0 2.3l1 1c1.2-1.2 1.2-3 0-4.3zM14 1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 19H4V4h10v16z"}}]})(props);
};
MdPhonelinkRing.displayName = "MdPhonelinkRing";
var MdPhonelinkSetup = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.8 12.5v-1l1.1-.8c.1-.1.1-.2.1-.3l-1-1.7c-.1-.1-.2-.2-.3-.1l-1.3.4c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.3-.2H7c-.1 0-.2.1-.3.2l-.2 1.3c-.3.1-.6.3-.9.5l-1.3-.5c-.1 0-.2 0-.3.1l-1 1.7c-.1.1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.2-.1.3-.1.4l1 1.7c.1.1.2.2.3.1l1.4-.4c.3.2.6.4.9.5l.2 1.3c-.1.1.1.2.2.2h2c.1 0 .2-.1.3-.2l.2-1.3c.3-.1.6-.3.9-.5l1.3.5c.1 0 .2 0 .3-.1l1-1.7c.1-.1 0-.2-.1-.3l-1.1-.9zM8 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z"}}]})(props);
};
MdPhonelinkSetup.displayName = "MdPhonelinkSetup";
var MdPortableWifiOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.56 14.24c.28-.69.44-1.45.44-2.24 0-3.31-2.69-6-6-6-.79 0-1.55.16-2.24.44l1.62 1.62c.2-.03.41-.06.62-.06 2.21 0 4 1.79 4 4 0 .21-.02.42-.05.63l1.61 1.61zM12 4c4.42 0 8 3.58 8 8 0 1.35-.35 2.62-.95 3.74l1.47 1.47C21.46 15.69 22 13.91 22 12c0-5.52-4.48-10-10-10-1.91 0-3.69.55-5.21 1.47l1.46 1.46C9.37 4.34 10.65 4 12 4zM3.27 2.5L2 3.77l2.1 2.1C2.79 7.57 2 9.69 2 12c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 17.53 4 14.96 4 12c0-1.76.57-3.38 1.53-4.69l1.43 1.44C6.36 9.68 6 10.8 6 12c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-.65.17-1.25.44-1.79l1.58 1.58L10 12c0 1.1.9 2 2 2l.21-.02.01.01 7.51 7.51L21 20.23 4.27 3.5l-1-1z"}}]})(props);
};
MdPortableWifiOff.displayName = "MdPortableWifiOff";
var MdPresentToAll = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z"}}]})(props);
};
MdPresentToAll.displayName = "MdPresentToAll";
var MdRingVolume = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M23.71 16.67C20.66 13.78 16.54 12 12 12 7.46 12 3.34 13.78.29 16.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.66 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71 0-.27-.11-.52-.29-.7zM21.16 6.26l-1.41-1.41-3.56 3.55 1.41 1.41s3.45-3.52 3.56-3.55zM13 2h-2v5h2V2zM6.4 9.81L7.81 8.4 4.26 4.84 2.84 6.26c.11.03 3.56 3.55 3.56 3.55z"}}]})(props);
};
MdRingVolume.displayName = "MdRingVolume";
var MdRssFeed = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"6.18","cy":"17.82","r":"2.18"}},{"tag":"path","attr":{"d":"M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"}}]})(props);
};
MdRssFeed.displayName = "MdRssFeed";
var MdScreenShare = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2h-4zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z"}}]})(props);
};
MdScreenShare.displayName = "MdScreenShare";
var MdSpeakerPhone = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 7.07L8.43 8.5c.91-.91 2.18-1.48 3.57-1.48s2.66.57 3.57 1.48L17 7.07C15.72 5.79 13.95 5 12 5s-3.72.79-5 2.07zM12 1C8.98 1 6.24 2.23 4.25 4.21l1.41 1.41C7.28 4 9.53 3 12 3s4.72 1 6.34 2.62l1.41-1.41C17.76 2.23 15.02 1 12 1zm2.86 9.01L9.14 10C8.51 10 8 10.51 8 11.14v9.71c0 .63.51 1.14 1.14 1.14h5.71c.63 0 1.14-.51 1.14-1.14v-9.71c.01-.63-.5-1.13-1.13-1.13zM15 20H9v-8h6v8z"}}]})(props);
};
MdSpeakerPhone.displayName = "MdSpeakerPhone";
var MdStayCurrentLandscape = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z"}}]})(props);
};
MdStayCurrentLandscape.displayName = "MdStayCurrentLandscape";
var MdStayCurrentPortrait = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"}}]})(props);
};
MdStayCurrentPortrait.displayName = "MdStayCurrentPortrait";
var MdStayPrimaryLandscape = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z"}}]})(props);
};
MdStayPrimaryLandscape.displayName = "MdStayPrimaryLandscape";
var MdStayPrimaryPortrait = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"}}]})(props);
};
MdStayPrimaryPortrait.displayName = "MdStayPrimaryPortrait";
var MdStopScreenShare = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21.22 18.02l2 2H24v-2h-2.78zm.77-2l.01-10c0-1.11-.9-2-2-2H7.22l5.23 5.23c.18-.04.36-.07.55-.1V7.02l4 3.73-1.58 1.47 5.54 5.54c.61-.33 1.03-.99 1.03-1.74zM2.39 1.73L1.11 3l1.54 1.54c-.4.36-.65.89-.65 1.48v10c0 1.1.89 2 2 2H0v2h18.13l2.71 2.71 1.27-1.27L2.39 1.73zM7 15.02c.31-1.48.92-2.95 2.07-4.06l1.59 1.59c-1.54.38-2.7 1.18-3.66 2.47z"}}]})(props);
};
MdStopScreenShare.displayName = "MdStopScreenShare";
var MdSwapCalls = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 4l-4 4h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3l-4-4z"}}]})(props);
};
MdSwapCalls.displayName = "MdSwapCalls";
var MdTextsms = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"}}]})(props);
};
MdTextsms.displayName = "MdTextsms";
var MdVoicemail = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.5 6C15.46 6 13 8.46 13 11.5c0 1.33.47 2.55 1.26 3.5H9.74c.79-.95 1.26-2.17 1.26-3.5C11 8.46 8.54 6 5.5 6S0 8.46 0 11.5 2.46 17 5.5 17h13c3.04 0 5.5-2.46 5.5-5.5S21.54 6 18.5 6zm-13 9C3.57 15 2 13.43 2 11.5S3.57 8 5.5 8 9 9.57 9 11.5 7.43 15 5.5 15zm13 0c-1.93 0-3.5-1.57-3.5-3.5S16.57 8 18.5 8 22 9.57 22 11.5 20.43 15 18.5 15z"}}]})(props);
};
MdVoicemail.displayName = "MdVoicemail";
var MdVpnKey = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}}]})(props);
};
MdVpnKey.displayName = "MdVpnKey";
var MdAdd = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}}]})(props);
};
MdAdd.displayName = "MdAdd";
var MdAddBox = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}}]})(props);
};
MdAddBox.displayName = "MdAddBox";
var MdAddCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}}]})(props);
};
MdAddCircle.displayName = "MdAddCircle";
var MdAddCircleOutline = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}}]})(props);
};
MdAddCircleOutline.displayName = "MdAddCircleOutline";
var MdArchive = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"}}]})(props);
};
MdArchive.displayName = "MdArchive";
var MdBackspace = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"}}]})(props);
};
MdBackspace.displayName = "MdBackspace";
var MdBlock = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"}}]})(props);
};
MdBlock.displayName = "MdBlock";
var MdClear = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(props);
};
MdClear.displayName = "MdClear";
var MdContentCopy = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}}]})(props);
};
MdContentCopy.displayName = "MdContentCopy";
var MdContentCut = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"}}]})(props);
};
MdContentCut.displayName = "MdContentCut";
var MdContentPaste = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"}}]})(props);
};
MdContentPaste.displayName = "MdContentPaste";
var MdCreate = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}}]})(props);
};
MdCreate.displayName = "MdCreate";
var MdDeleteSweep = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"}}]})(props);
};
MdDeleteSweep.displayName = "MdDeleteSweep";
var MdDrafts = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"}}]})(props);
};
MdDrafts.displayName = "MdDrafts";
var MdFilterList = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}}]})(props);
};
MdFilterList.displayName = "MdFilterList";
var MdFlag = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"}}]})(props);
};
MdFlag.displayName = "MdFlag";
var MdFontDownload = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"}}]})(props);
};
MdFontDownload.displayName = "MdFontDownload";
var MdForward = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 8V4l8 8-8 8v-4H4V8z"}}]})(props);
};
MdForward.displayName = "MdForward";
var MdGesture = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"}}]})(props);
};
MdGesture.displayName = "MdGesture";
var MdInbox = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"}}]})(props);
};
MdInbox.displayName = "MdInbox";
var MdLink = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}}]})(props);
};
MdLink.displayName = "MdLink";
var MdLowPriority = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"}}]})(props);
};
MdLowPriority.displayName = "MdLowPriority";
var MdMail = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}}]})(props);
};
MdMail.displayName = "MdMail";
var MdMarkunread = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}}]})(props);
};
MdMarkunread.displayName = "MdMarkunread";
var MdMoveToInbox = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"}}]})(props);
};
MdMoveToInbox.displayName = "MdMoveToInbox";
var MdNextWeek = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"}}]})(props);
};
MdNextWeek.displayName = "MdNextWeek";
var MdRedo = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"}}]})(props);
};
MdRedo.displayName = "MdRedo";
var MdRemove = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 13H5v-2h14v2z"}}]})(props);
};
MdRemove.displayName = "MdRemove";
var MdRemoveCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"}}]})(props);
};
MdRemoveCircle.displayName = "MdRemoveCircle";
var MdRemoveCircleOutline = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}}]})(props);
};
MdRemoveCircleOutline.displayName = "MdRemoveCircleOutline";
var MdReply = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"}}]})(props);
};
MdReply.displayName = "MdReply";
var MdReplyAll = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"}}]})(props);
};
MdReplyAll.displayName = "MdReplyAll";
var MdReport = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"}}]})(props);
};
MdReport.displayName = "MdReport";
var MdSave = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}}]})(props);
};
MdSave.displayName = "MdSave";
var MdSelectAll = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"}}]})(props);
};
MdSelectAll.displayName = "MdSelectAll";
var MdSend = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}}]})(props);
};
MdSend.displayName = "MdSend";
var MdSort = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"}}]})(props);
};
MdSort.displayName = "MdSort";
var MdTextFormat = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"}}]})(props);
};
MdTextFormat.displayName = "MdTextFormat";
var MdUnarchive = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"}}]})(props);
};
MdUnarchive.displayName = "MdUnarchive";
var MdUndo = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"}}]})(props);
};
MdUndo.displayName = "MdUndo";
var MdWeekend = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"}}]})(props);
};
MdWeekend.displayName = "MdWeekend";
var MdAccessAlarm = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}}]})(props);
};
MdAccessAlarm.displayName = "MdAccessAlarm";
var MdAccessAlarms = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 5.7l-4.6-3.9-1.3 1.5 4.6 3.9L22 5.7zM7.9 3.4L6.6 1.9 2 5.7l1.3 1.5 4.6-3.8zM12.5 8H11v6l4.7 2.9.8-1.2-4-2.4V8zM12 4c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"}}]})(props);
};
MdAccessAlarms.displayName = "MdAccessAlarms";
var MdAccessTime = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"}}]})(props);
};
MdAccessTime.displayName = "MdAccessTime";
var MdAddAlarm = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"}}]})(props);
};
MdAddAlarm.displayName = "MdAddAlarm";
var MdAirplanemodeActive = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10.18 9"}},{"tag":"path","attr":{"d":"M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"}}]})(props);
};
MdAirplanemodeActive.displayName = "MdAirplanemodeActive";
var MdAirplanemodeInactive = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 9V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v3.68l7.83 7.83L21 16v-2l-8-5zM3 5.27l4.99 4.99L2 14v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-3.73L18.73 21 20 19.73 4.27 4 3 5.27z"}}]})(props);
};
MdAirplanemodeInactive.displayName = "MdAirplanemodeInactive";
var MdBattery20 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 17v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17H7z"}},{"tag":"path","attr":{"fillOpacity":".3","d":"M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h10V5.33z"}}]})(props);
};
MdBattery20.displayName = "MdBattery20";
var MdBattery30 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V15h10V5.33z"}},{"tag":"path","attr":{"d":"M7 15v5.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V15H7z"}}]})(props);
};
MdBattery30.displayName = "MdBattery30";
var MdBattery50 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V13h10V5.33z"}},{"tag":"path","attr":{"d":"M7 13v7.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13H7z"}}]})(props);
};
MdBattery50.displayName = "MdBattery50";
var MdBattery60 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h10V5.33z"}},{"tag":"path","attr":{"d":"M7 11v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11H7z"}}]})(props);
};
MdBattery60.displayName = "MdBattery60";
var MdBattery80 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h10V5.33z"}},{"tag":"path","attr":{"d":"M7 9v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9H7z"}}]})(props);
};
MdBattery80.displayName = "MdBattery80";
var MdBattery90 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h10V5.33z"}},{"tag":"path","attr":{"d":"M7 8v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8H7z"}}]})(props);
};
MdBattery90.displayName = "MdBattery90";
var MdBatteryAlert = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 18h-2v-2h2v2zm0-4h-2V9h2v5z"}}]})(props);
};
MdBatteryAlert.displayName = "MdBatteryAlert";
var MdBatteryCharging20 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 20v-3H7v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17h-4.4L11 20z"}},{"tag":"path","attr":{"fillOpacity":".3","d":"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h4v-2.5H9L13 7v5.5h2L12.6 17H17V5.33C17 4.6 16.4 4 15.67 4z"}}]})(props);
};
MdBatteryCharging20.displayName = "MdBatteryCharging20";
var MdBatteryCharging30 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v9.17h2L13 7v5.5h2l-1.07 2H17V5.33C17 4.6 16.4 4 15.67 4z"}},{"tag":"path","attr":{"d":"M11 20v-5.5H7v6.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V14.5h-3.07L11 20z"}}]})(props);
};
MdBatteryCharging30.displayName = "MdBatteryCharging30";
var MdBatteryCharging50 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14.47 13.5L11 20v-5.5H9l.53-1H7v7.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13.5h-2.53z"}},{"tag":"path","attr":{"fillOpacity":".3","d":"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v8.17h2.53L13 7v5.5h2l-.53 1H17V5.33C17 4.6 16.4 4 15.67 4z"}}]})(props);
};
MdBatteryCharging50.displayName = "MdBatteryCharging50";
var MdBatteryCharging60 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h3.87L13 7v4h4V5.33C17 4.6 16.4 4 15.67 4z"}},{"tag":"path","attr":{"d":"M13 12.5h2L11 20v-5.5H9l1.87-3.5H7v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11h-4v1.5z"}}]})(props);
};
MdBatteryCharging60.displayName = "MdBatteryCharging60";
var MdBatteryCharging80 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h4.93L13 7v2h4V5.33C17 4.6 16.4 4 15.67 4z"}},{"tag":"path","attr":{"d":"M13 12.5h2L11 20v-5.5H9L11.93 9H7v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9h-4v3.5z"}}]})(props);
};
MdBatteryCharging80.displayName = "MdBatteryCharging80";
var MdBatteryCharging90 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h5.47L13 7v1h4V5.33C17 4.6 16.4 4 15.67 4z"}},{"tag":"path","attr":{"d":"M13 12.5h2L11 20v-5.5H9L12.47 8H7v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8h-4v4.5z"}}]})(props);
};
MdBatteryCharging90.displayName = "MdBatteryCharging90";
var MdBatteryChargingFull = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z"}}]})(props);
};
MdBatteryChargingFull.displayName = "MdBatteryChargingFull";
var MdBatteryFull = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"}}]})(props);
};
MdBatteryFull.displayName = "MdBatteryFull";
var MdBatteryStd = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"}}]})(props);
};
MdBatteryStd.displayName = "MdBatteryStd";
var MdBatteryUnknown = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zm-2.72 13.95h-1.9v-1.9h1.9v1.9zm1.35-5.26s-.38.42-.67.71c-.48.48-.83 1.15-.83 1.6h-1.6c0-.83.46-1.52.93-2l.93-.94c.27-.27.44-.65.44-1.06 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5H9c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .66-.27 1.26-.7 1.69z"}}]})(props);
};
MdBatteryUnknown.displayName = "MdBatteryUnknown";
var MdBluetooth = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"}}]})(props);
};
MdBluetooth.displayName = "MdBluetooth";
var MdBluetoothConnected = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 12l-2-2-2 2 2 2 2-2zm10.71-4.29L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88zM19 10l-2 2 2 2 2-2-2-2z"}}]})(props);
};
MdBluetoothConnected.displayName = "MdBluetoothConnected";
var MdBluetoothDisabled = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 5.83l1.88 1.88-1.6 1.6 1.41 1.41 3.02-3.02L12 2h-1v5.03l2 2v-3.2zM5.41 4L4 5.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l4.29-4.29 2.3 2.29L20 18.59 5.41 4zM13 18.17v-3.76l1.88 1.88L13 18.17z"}}]})(props);
};
MdBluetoothDisabled.displayName = "MdBluetoothDisabled";
var MdBluetoothSearching = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14.24 12.01l2.32 2.32c.28-.72.44-1.51.44-2.33 0-.82-.16-1.59-.43-2.31l-2.33 2.32zm5.29-5.3l-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2c.97-1.54 1.54-3.36 1.54-5.31-.01-1.89-.55-3.67-1.48-5.19zm-3.82 1L10 2H9v7.59L4.41 5 3 6.41 8.59 12 3 17.59 4.41 19 9 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM11 5.83l1.88 1.88L11 9.59V5.83zm1.88 10.46L11 18.17v-3.76l1.88 1.88z"}}]})(props);
};
MdBluetoothSearching.displayName = "MdBluetoothSearching";
var MdBrightnessAuto = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10.85 12.65h2.3L12 9l-1.15 3.65zM20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM14.3 16l-.7-2h-3.2l-.7 2H7.8L11 7h2l3.2 9h-1.9z"}}]})(props);
};
MdBrightnessAuto.displayName = "MdBrightnessAuto";
var MdBrightnessHigh = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"}}]})(props);
};
MdBrightnessHigh.displayName = "MdBrightnessHigh";
var MdBrightnessLow = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"}}]})(props);
};
MdBrightnessLow.displayName = "MdBrightnessLow";
var MdBrightnessMedium = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"}}]})(props);
};
MdBrightnessMedium.displayName = "MdBrightnessMedium";
var MdDataUsage = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"}}]})(props);
};
MdDataUsage.displayName = "MdDataUsage";
var MdDeveloperMode = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"}}]})(props);
};
MdDeveloperMode.displayName = "MdDeveloperMode";
var MdDevices = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"}}]})(props);
};
MdDevices.displayName = "MdDevices";
var MdDvr = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-2-9H8v2h11V8zm0 4H8v2h11v-2zM7 8H5v2h2V8zm0 4H5v2h2v-2z"}}]})(props);
};
MdDvr.displayName = "MdDvr";
var MdGpsFixed = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}}]})(props);
};
MdGpsFixed.displayName = "MdGpsFixed";
var MdGpsNotFixed = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}}]})(props);
};
MdGpsNotFixed.displayName = "MdGpsNotFixed";
var MdGpsOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-1.13.12-2.19.46-3.16.97l1.5 1.5C10.16 5.19 11.06 5 12 5c3.87 0 7 3.13 7 7 0 .94-.19 1.84-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27l2.04 2.04C3.97 7.62 3.25 9.23 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27C15.09 18.45 13.61 19 12 19c-3.87 0-7-3.13-7-7 0-1.61.55-3.09 1.46-4.27l9.81 9.81z"}}]})(props);
};
MdGpsOff.displayName = "MdGpsOff";
var MdGraphicEq = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z"}}]})(props);
};
MdGraphicEq.displayName = "MdGraphicEq";
var MdLocationDisabled = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-1.13.12-2.19.46-3.16.97l1.5 1.5C10.16 5.19 11.06 5 12 5c3.87 0 7 3.13 7 7 0 .94-.19 1.84-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27l2.04 2.04C3.97 7.62 3.25 9.23 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27C15.09 18.45 13.61 19 12 19c-3.87 0-7-3.13-7-7 0-1.61.55-3.09 1.46-4.27l9.81 9.81z"}}]})(props);
};
MdLocationDisabled.displayName = "MdLocationDisabled";
var MdLocationSearching = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}}]})(props);
};
MdLocationSearching.displayName = "MdLocationSearching";
var MdNetworkCell = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M2 22h20V2z"}},{"tag":"path","attr":{"d":"M17 7L2 22h15z"}}]})(props);
};
MdNetworkCell.displayName = "MdNetworkCell";
var MdNetworkWifi = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"}},{"tag":"path","attr":{"d":"M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z"}}]})(props);
};
MdNetworkWifi.displayName = "MdNetworkWifi";
var MdNfc = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM18 6h-5c-1.1 0-2 .9-2 2v2.28c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V8h3v8H8V8h2V6H6v12h12V6z"}}]})(props);
};
MdNfc.displayName = "MdNfc";
var MdScreenLockLandscape = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 12H5V7h14v10zm-9-1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v1h-2.4v-1z"}}]})(props);
};
MdScreenLockLandscape.displayName = "MdScreenLockLandscape";
var MdScreenLockPortrait = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 16h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v1h-2.4v-1zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z"}}]})(props);
};
MdScreenLockPortrait.displayName = "MdScreenLockPortrait";
var MdScreenLockRotation = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M23.25 12.77l-2.57-2.57-1.41 1.41 2.22 2.22-5.66 5.66L4.51 8.17l5.66-5.66 2.1 2.1 1.41-1.41L11.23.75c-.59-.59-1.54-.59-2.12 0L2.75 7.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zM8.47 20.48C5.2 18.94 2.86 15.76 2.5 12H1c.51 6.16 5.66 11 11.95 11l.66-.03-3.81-3.82-1.33 1.33zM16 9h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1v-.5C21 1.12 19.88 0 18.5 0S16 1.12 16 2.5V3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.8-6.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V3h-3.4v-.5z"}}]})(props);
};
MdScreenLockRotation.displayName = "MdScreenLockRotation";
var MdScreenRotation = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z"}}]})(props);
};
MdScreenRotation.displayName = "MdScreenRotation";
var MdSdStorage = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z"}}]})(props);
};
MdSdStorage.displayName = "MdSdStorage";
var MdSettingsSystemDaydream = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 16h6.5c1.38 0 2.5-1.12 2.5-2.5S16.88 11 15.5 11h-.05c-.24-1.69-1.69-3-3.45-3-1.4 0-2.6.83-3.16 2.02h-.16C7.17 10.18 6 11.45 6 13c0 1.66 1.34 3 3 3zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"}}]})(props);
};
MdSettingsSystemDaydream.displayName = "MdSettingsSystemDaydream";
var MdSignalCellular0Bar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M2 22h20V2z"}}]})(props);
};
MdSignalCellular0Bar.displayName = "MdSignalCellular0Bar";
var MdSignalCellular1Bar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M2 22h20V2z"}},{"tag":"path","attr":{"d":"M12 12L2 22h10z"}}]})(props);
};
MdSignalCellular1Bar.displayName = "MdSignalCellular1Bar";
var MdSignalCellular2Bar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M2 22h20V2z"}},{"tag":"path","attr":{"d":"M14 10L2 22h12z"}}]})(props);
};
MdSignalCellular2Bar.displayName = "MdSignalCellular2Bar";
var MdSignalCellular3Bar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M2 22h20V2z"}},{"tag":"path","attr":{"d":"M17 7L2 22h15z"}}]})(props);
};
MdSignalCellular3Bar.displayName = "MdSignalCellular3Bar";
var MdSignalCellular4Bar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2 22h20V2z"}}]})(props);
};
MdSignalCellular4Bar.displayName = "MdSignalCellular4Bar";
var MdSignalCellularConnectedNoInternet0Bar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M22 8V2L2 22h16V8z"}},{"tag":"path","attr":{"d":"M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z"}}]})(props);
};
MdSignalCellularConnectedNoInternet0Bar.displayName = "MdSignalCellularConnectedNoInternet0Bar";
var MdSignalCellularConnectedNoInternet1Bar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M22 8V2L2 22h16V8z"}},{"tag":"path","attr":{"d":"M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z"}}]})(props);
};
MdSignalCellularConnectedNoInternet1Bar.displayName = "MdSignalCellularConnectedNoInternet1Bar";
var MdSignalCellularConnectedNoInternet2Bar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M22 8V2L2 22h16V8z"}},{"tag":"path","attr":{"d":"M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z"}}]})(props);
};
MdSignalCellularConnectedNoInternet2Bar.displayName = "MdSignalCellularConnectedNoInternet2Bar";
var MdSignalCellularConnectedNoInternet3Bar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M22 8V2L2 22h16V8z"}},{"tag":"path","attr":{"d":"M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z"}}]})(props);
};
MdSignalCellularConnectedNoInternet3Bar.displayName = "MdSignalCellularConnectedNoInternet3Bar";
var MdSignalCellularConnectedNoInternet4Bar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z"}}]})(props);
};
MdSignalCellularConnectedNoInternet4Bar.displayName = "MdSignalCellularConnectedNoInternet4Bar";
var MdSignalCellularNoSim = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z"}}]})(props);
};
MdSignalCellularNoSim.displayName = "MdSignalCellularNoSim";
var MdSignalCellularNull = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z"}}]})(props);
};
MdSignalCellularNull.displayName = "MdSignalCellularNull";
var MdSignalCellularOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 1l-8.59 8.59L21 18.18V1zM4.77 4.5L3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73 4.77 4.5z"}}]})(props);
};
MdSignalCellularOff.displayName = "MdSignalCellularOff";
var MdSignalWifi0Bar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"}}]})(props);
};
MdSignalWifi0Bar.displayName = "MdSignalWifi0Bar";
var MdSignalWifi1Bar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"}},{"tag":"path","attr":{"d":"M6.67 14.86L12 21.49v.01l.01-.01 5.33-6.63C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z"}}]})(props);
};
MdSignalWifi1Bar.displayName = "MdSignalWifi1Bar";
var MdSignalWifi1BarLock = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z"}},{"tag":"path","attr":{"d":"M15.5 14.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.3v-2.7z","opacity":".3"}},{"tag":"path","attr":{"d":"M6.7 14.9l5.3 6.6 3.5-4.3v-2.6c0-.2 0-.5.1-.7-.9-.5-2.2-.9-3.6-.9-3 0-5.1 1.7-5.3 1.9z"}}]})(props);
};
MdSignalWifi1BarLock.displayName = "MdSignalWifi1BarLock";
var MdSignalWifi2Bar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"}},{"tag":"path","attr":{"d":"M4.79 12.52l7.2 8.98H12l.01-.01 7.2-8.98C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z"}}]})(props);
};
MdSignalWifi2Bar.displayName = "MdSignalWifi2Bar";
var MdSignalWifi2BarLock = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z"}},{"tag":"path","attr":{"d":"M15.5 14.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.3v-2.7z","opacity":".3"}},{"tag":"path","attr":{"d":"M4.8 12.5l7.2 9 3.5-4.4v-2.6c0-1.3.5-2.5 1.4-3.4C15.6 10.5 14 10 12 10c-4.1 0-6.8 2.2-7.2 2.5z"}}]})(props);
};
MdSignalWifi2BarLock.displayName = "MdSignalWifi2BarLock";
var MdSignalWifi3Bar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".3","d":"M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"}},{"tag":"path","attr":{"d":"M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z"}}]})(props);
};
MdSignalWifi3Bar.displayName = "MdSignalWifi3Bar";
var MdSignalWifi3BarLock = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"opacity":".3","d":"M12 3C5.3 3 .8 6.7.4 7l3.2 3.9L12 21.5l3.5-4.3v-2.6c0-2.2 1.4-4 3.3-4.7.3-.1.5-.2.8-.2.3-.1.6-.1.9-.1.4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4z"}},{"tag":"path","attr":{"d":"M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-10 5.5l3.5-4.3v-2.6c0-2.2 1.4-4 3.3-4.7C17.3 9 14.9 8 12 8c-4.8 0-8 2.6-8.5 2.9"}}]})(props);
};
MdSignalWifi3BarLock.displayName = "MdSignalWifi3BarLock";
var MdSignalWifi4Bar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"}}]})(props);
};
MdSignalWifi4Bar.displayName = "MdSignalWifi4Bar";
var MdSignalWifi4BarLock = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-6.5-1.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.4v-2.6z"}}]})(props);
};
MdSignalWifi4BarLock.displayName = "MdSignalWifi4BarLock";
var MdSignalWifiOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z"}}]})(props);
};
MdSignalWifiOff.displayName = "MdSignalWifiOff";
var MdStorage = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"}}]})(props);
};
MdStorage.displayName = "MdStorage";
var MdUsb = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 7v4h1v2h-3V5h2l-3-4-3 4h2v8H8v-2.07c.7-.37 1.2-1.08 1.2-1.93 0-1.21-.99-2.2-2.2-2.2-1.21 0-2.2.99-2.2 2.2 0 .85.5 1.56 1.2 1.93V13c0 1.11.89 2 2 2h3v3.05c-.71.37-1.2 1.1-1.2 1.95 0 1.22.99 2.2 2.2 2.2 1.21 0 2.2-.98 2.2-2.2 0-.85-.49-1.58-1.2-1.95V15h3c1.11 0 2-.89 2-2v-2h1V7h-4z"}}]})(props);
};
MdUsb.displayName = "MdUsb";
var MdWallpaper = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 4h7V2H4c-1.1 0-2 .9-2 2v7h2V4zm6 9l-4 5h12l-3-4-2.03 2.71L10 13zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5zM20 2h-7v2h7v7h2V4c0-1.1-.9-2-2-2zm0 18h-7v2h7c1.1 0 2-.9 2-2v-7h-2v7zM4 13H2v7c0 1.1.9 2 2 2h7v-2H4v-7z"}}]})(props);
};
MdWallpaper.displayName = "MdWallpaper";
var MdWidgets = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"}}]})(props);
};
MdWidgets.displayName = "MdWidgets";
var MdWifiLock = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.5 9.5c.28 0 .55.04.81.08L24 6c-3.34-2.51-7.5-4-12-4S3.34 3.49 0 6l12 16 3.5-4.67V14.5c0-2.76 2.24-5 5-5zM23 16v-1.5c0-1.38-1.12-2.5-2.5-2.5S18 13.12 18 14.5V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z"}}]})(props);
};
MdWifiLock.displayName = "MdWifiLock";
var MdWifiTethering = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zM12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.53 4 15.96 4 13c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.61 5.53-4 6.92l1 1.73c2.99-1.73 5-4.95 5-8.65 0-5.52-4.48-10-10-10z"}}]})(props);
};
MdWifiTethering.displayName = "MdWifiTethering";
var MdAttachFile = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"}}]})(props);
};
MdAttachFile.displayName = "MdAttachFile";
var MdAttachMoney = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"}}]})(props);
};
MdAttachMoney.displayName = "MdAttachMoney";
var MdBorderAll = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z"}}]})(props);
};
MdBorderAll.displayName = "MdBorderAll";
var MdBorderBottom = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 11H7v2h2v-2zm4 4h-2v2h2v-2zM9 3H7v2h2V3zm4 8h-2v2h2v-2zM5 3H3v2h2V3zm8 4h-2v2h2V7zm4 4h-2v2h2v-2zm-4-8h-2v2h2V3zm4 0h-2v2h2V3zm2 10h2v-2h-2v2zm0 4h2v-2h-2v2zM5 7H3v2h2V7zm14-4v2h2V3h-2zm0 6h2V7h-2v2zM5 11H3v2h2v-2zM3 21h18v-2H3v2zm2-6H3v2h2v-2z"}}]})(props);
};
MdBorderBottom.displayName = "MdBorderBottom";
var MdBorderClear = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 5h2V3H7v2zm0 8h2v-2H7v2zm0 8h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm-8 0h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2V7H3v2zm0-4h2V3H3v2zm8 8h2v-2h-2v2zm8 4h2v-2h-2v2zm0-4h2v-2h-2v2zm0 8h2v-2h-2v2zm0-12h2V7h-2v2zm-8 0h2V7h-2v2zm8-6v2h2V3h-2zm-8 2h2V3h-2v2zm4 16h2v-2h-2v2zm0-8h2v-2h-2v2zm0-8h2V3h-2v2z"}}]})(props);
};
MdBorderClear.displayName = "MdBorderClear";
var MdBorderColor = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.75 7L14 3.25l-10 10V17h3.75l10-10zm2.96-2.96c.39-.39.39-1.02 0-1.41L18.37.29c-.39-.39-1.02-.39-1.41 0L15 2.25 18.75 6l1.96-1.96z"}},{"tag":"path","attr":{"fillOpacity":".36","d":"M0 20h24v4H0z"}}]})(props);
};
MdBorderColor.displayName = "MdBorderColor";
var MdBorderHorizontal = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 21h2v-2H3v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zm4 4h2v-2H7v2zM5 3H3v2h2V3zm4 0H7v2h2V3zm8 0h-2v2h2V3zm-4 4h-2v2h2V7zm0-4h-2v2h2V3zm6 14h2v-2h-2v2zm-8 4h2v-2h-2v2zm-8-8h18v-2H3v2zM19 3v2h2V3h-2zm0 6h2V7h-2v2zm-8 8h2v-2h-2v2zm4 4h2v-2h-2v2zm4 0h2v-2h-2v2z"}}]})(props);
};
MdBorderHorizontal.displayName = "MdBorderHorizontal";
var MdBorderInner = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 21h2v-2H3v2zm4 0h2v-2H7v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zM9 3H7v2h2V3zM5 3H3v2h2V3zm12 0h-2v2h2V3zm2 6h2V7h-2v2zm0-6v2h2V3h-2zm-4 18h2v-2h-2v2zM13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3zm6 18h2v-2h-2v2zm0-4h2v-2h-2v2z"}}]})(props);
};
MdBorderInner.displayName = "MdBorderInner";
var MdBorderLeft = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 21h2v-2h-2v2zm0-4h2v-2h-2v2zm0-12h2V3h-2v2zm0 4h2V7h-2v2zm0 4h2v-2h-2v2zm-4 8h2v-2H7v2zM7 5h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2V3H3v18zM19 9h2V7h-2v2zm-4 12h2v-2h-2v2zm4-4h2v-2h-2v2zm0-14v2h2V3h-2zm0 10h2v-2h-2v2zm0 8h2v-2h-2v2zm-4-8h2v-2h-2v2zm0-8h2V3h-2v2z"}}]})(props);
};
MdBorderLeft.displayName = "MdBorderLeft";
var MdBorderOuter = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z"}}]})(props);
};
MdBorderOuter.displayName = "MdBorderOuter";
var MdBorderRight = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 21h2v-2H7v2zM3 5h2V3H3v2zm4 0h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2v-2H3v2zm8 0h2v-2h-2v2zm-8-8h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm8 8h2v-2h-2v2zm4-4h2v-2h-2v2zm4-10v18h2V3h-2zm-4 18h2v-2h-2v2zm0-16h2V3h-2v2zm-4 8h2v-2h-2v2zm0-8h2V3h-2v2zm0 4h2V7h-2v2z"}}]})(props);
};
MdBorderRight.displayName = "MdBorderRight";
var MdBorderStyle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 21h2v-2h-2v2zm4 0h2v-2h-2v2zM7 21h2v-2H7v2zm4 0h2v-2h-2v2zm8-4h2v-2h-2v2zm0-4h2v-2h-2v2zM3 3v18h2V5h16V3H3zm16 6h2V7h-2v2z"}}]})(props);
};
MdBorderStyle.displayName = "MdBorderStyle";
var MdBorderTop = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 21h2v-2H7v2zm0-8h2v-2H7v2zm4 0h2v-2h-2v2zm0 8h2v-2h-2v2zm-8-4h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2v-2H3v2zm0-4h2V7H3v2zm8 8h2v-2h-2v2zm8-8h2V7h-2v2zm0 4h2v-2h-2v2zM3 3v2h18V3H3zm16 14h2v-2h-2v2zm-4 4h2v-2h-2v2zM11 9h2V7h-2v2zm8 12h2v-2h-2v2zm-4-8h2v-2h-2v2z"}}]})(props);
};
MdBorderTop.displayName = "MdBorderTop";
var MdBorderVertical = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 9h2V7H3v2zm0-4h2V3H3v2zm4 16h2v-2H7v2zm0-8h2v-2H7v2zm-4 0h2v-2H3v2zm0 8h2v-2H3v2zm0-4h2v-2H3v2zM7 5h2V3H7v2zm12 12h2v-2h-2v2zm-8 4h2V3h-2v18zm8 0h2v-2h-2v2zm0-8h2v-2h-2v2zm0-10v2h2V3h-2zm0 6h2V7h-2v2zm-4-4h2V3h-2v2zm0 16h2v-2h-2v2zm0-8h2v-2h-2v2z"}}]})(props);
};
MdBorderVertical.displayName = "MdBorderVertical";
var MdBubbleChart = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"7.2","cy":"14.4","r":"3.2"}},{"tag":"circle","attr":{"cx":"14.8","cy":"18","r":"2"}},{"tag":"circle","attr":{"cx":"15.2","cy":"8.8","r":"4.8"}}]})(props);
};
MdBubbleChart.displayName = "MdBubbleChart";
var MdDragHandle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 9H4v2h16V9zM4 15h16v-2H4v2z"}}]})(props);
};
MdDragHandle.displayName = "MdDragHandle";
var MdFormatAlignCenter = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"}}]})(props);
};
MdFormatAlignCenter.displayName = "MdFormatAlignCenter";
var MdFormatAlignJustify = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"}}]})(props);
};
MdFormatAlignJustify.displayName = "MdFormatAlignJustify";
var MdFormatAlignLeft = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"}}]})(props);
};
MdFormatAlignLeft.displayName = "MdFormatAlignLeft";
var MdFormatAlignRight = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"}}]})(props);
};
MdFormatAlignRight.displayName = "MdFormatAlignRight";
var MdFormatBold = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"}}]})(props);
};
MdFormatBold.displayName = "MdFormatBold";
var MdFormatClear = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z"}}]})(props);
};
MdFormatClear.displayName = "MdFormatClear";
var MdFormatColorFill = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z"}},{"tag":"path","attr":{"fillOpacity":".36","d":"M0 20h24v4H0z"}}]})(props);
};
MdFormatColorFill.displayName = "MdFormatColorFill";
var MdFormatColorReset = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31zm-.88 3.12L12.5 12.5 5.27 5.27 4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6 1.52 0 2.9-.57 3.96-1.5l2.63 2.63 1.27-1.27-2.74-2.74z"}}]})(props);
};
MdFormatColorReset.displayName = "MdFormatColorReset";
var MdFormatColorText = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillOpacity":".36","d":"M0 20h24v4H0z"}},{"tag":"path","attr":{"d":"M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z"}}]})(props);
};
MdFormatColorText.displayName = "MdFormatColorText";
var MdFormatIndentDecrease = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"}}]})(props);
};
MdFormatIndentDecrease.displayName = "MdFormatIndentDecrease";
var MdFormatIndentIncrease = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"}}]})(props);
};
MdFormatIndentIncrease.displayName = "MdFormatIndentIncrease";
var MdFormatItalic = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"}}]})(props);
};
MdFormatItalic.displayName = "MdFormatItalic";
var MdFormatLineSpacing = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z"}}]})(props);
};
MdFormatLineSpacing.displayName = "MdFormatLineSpacing";
var MdFormatListBulleted = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}}]})(props);
};
MdFormatListBulleted.displayName = "MdFormatListBulleted";
var MdFormatListNumbered = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"}}]})(props);
};
MdFormatListNumbered.displayName = "MdFormatListNumbered";
var MdFormatPaint = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"}}]})(props);
};
MdFormatPaint.displayName = "MdFormatPaint";
var MdFormatQuote = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"}}]})(props);
};
MdFormatQuote.displayName = "MdFormatQuote";
var MdFormatShapes = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z"}}]})(props);
};
MdFormatShapes.displayName = "MdFormatShapes";
var MdFormatSize = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"}}]})(props);
};
MdFormatSize.displayName = "MdFormatSize";
var MdFormatStrikethrough = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"}}]})(props);
};
MdFormatStrikethrough.displayName = "MdFormatStrikethrough";
var MdFormatTextdirectionLToR = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm12 8l-4-4v3H5v2h12v3l4-4z"}}]})(props);
};
MdFormatTextdirectionLToR.displayName = "MdFormatTextdirectionLToR";
var MdFormatTextdirectionRToL = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 10v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4zm-2 7v-3l-4 4 4 4v-3h12v-2H8z"}}]})(props);
};
MdFormatTextdirectionRToL.displayName = "MdFormatTextdirectionRToL";
var MdFormatUnderlined = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"}}]})(props);
};
MdFormatUnderlined.displayName = "MdFormatUnderlined";
var MdFunctions = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z"}}]})(props);
};
MdFunctions.displayName = "MdFunctions";
var MdHighlight = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 14l3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.875L4.914 4.46l2.12 2.122L5.62 7.997zm13.46.71l2.123-2.12 1.414 1.414L18.375 8z"}}]})(props);
};
MdHighlight.displayName = "MdHighlight";
var MdInsertChart = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"}}]})(props);
};
MdInsertChart.displayName = "MdInsertChart";
var MdInsertComment = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}}]})(props);
};
MdInsertComment.displayName = "MdInsertComment";
var MdInsertDriveFile = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"}}]})(props);
};
MdInsertDriveFile.displayName = "MdInsertDriveFile";
var MdInsertEmoticon = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"}}]})(props);
};
MdInsertEmoticon.displayName = "MdInsertEmoticon";
var MdInsertInvitation = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"}}]})(props);
};
MdInsertInvitation.displayName = "MdInsertInvitation";
var MdInsertLink = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}}]})(props);
};
MdInsertLink.displayName = "MdInsertLink";
var MdInsertPhoto = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}}]})(props);
};
MdInsertPhoto.displayName = "MdInsertPhoto";
var MdLinearScale = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5C3.12 9.5 2 10.62 2 12s1.12 2.5 2.5 2.5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5 1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5z"}}]})(props);
};
MdLinearScale.displayName = "MdLinearScale";
var MdMergeType = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"}}]})(props);
};
MdMergeType.displayName = "MdMergeType";
var MdModeComment = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"}}]})(props);
};
MdModeComment.displayName = "MdModeComment";
var MdModeEdit = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}}]})(props);
};
MdModeEdit.displayName = "MdModeEdit";
var MdMonetizationOn = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"}}]})(props);
};
MdMonetizationOn.displayName = "MdMonetizationOn";
var MdMoneyOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.53.12-1.03.3-1.48.54l1.47 1.47c.41-.17.91-.27 1.51-.27zM5.33 4.06L4.06 5.33 7.5 8.77c0 2.08 1.56 3.21 3.91 3.91l3.51 3.51c-.34.48-1.05.91-2.42.91-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.82-.55 2.45-1.12l2.22 2.22 1.27-1.27L5.33 4.06z"}}]})(props);
};
MdMoneyOff.displayName = "MdMoneyOff";
var MdMultilineChart = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 6.92l-1.41-1.41-2.85 3.21C15.68 6.4 12.83 5 9.61 5 6.72 5 4.07 6.16 2 8l1.42 1.42C5.12 7.93 7.27 7 9.61 7c2.74 0 5.09 1.26 6.77 3.24l-2.88 3.24-4-4L2 16.99l1.5 1.5 6-6.01 4 4 4.05-4.55c.75 1.35 1.25 2.9 1.44 4.55H21c-.22-2.3-.95-4.39-2.04-6.14L22 6.92z"}}]})(props);
};
MdMultilineChart.displayName = "MdMultilineChart";
var MdPieChart = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"}}]})(props);
};
MdPieChart.displayName = "MdPieChart";
var MdPieChartOutlined = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 2.07c3.61.45 6.48 3.33 6.93 6.93H13V4.07zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94zm9 7.93V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93z"}}]})(props);
};
MdPieChartOutlined.displayName = "MdPieChartOutlined";
var MdPublish = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"}}]})(props);
};
MdPublish.displayName = "MdPublish";
var MdShortText = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 9h16v2H4zm0 4h10v2H4z"}}]})(props);
};
MdShortText.displayName = "MdShortText";
var MdShowChart = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"}}]})(props);
};
MdShowChart.displayName = "MdShowChart";
var MdSpaceBar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 9v4H6V9H4v6h16V9z"}}]})(props);
};
MdSpaceBar.displayName = "MdSpaceBar";
var MdStrikethroughS = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7.24 8.75c-.26-.48-.39-1.03-.39-1.67 0-.61.13-1.16.4-1.67.26-.5.63-.93 1.11-1.29.48-.35 1.05-.63 1.7-.83.66-.19 1.39-.29 2.18-.29.81 0 1.54.11 2.21.34.66.22 1.23.54 1.69.94.47.4.83.88 1.08 1.43.25.55.38 1.15.38 1.81h-3.01c0-.31-.05-.59-.15-.85-.09-.27-.24-.49-.44-.68-.2-.19-.45-.33-.75-.44-.3-.1-.66-.16-1.06-.16-.39 0-.74.04-1.03.13-.29.09-.53.21-.72.36-.19.16-.34.34-.44.55-.1.21-.15.43-.15.66 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.05-.08-.11-.17-.15-.25zM21 12v-2H3v2h9.62c.18.07.4.14.55.2.37.17.66.34.87.51.21.17.35.36.43.57.07.2.11.43.11.69 0 .23-.05.45-.14.66-.09.2-.23.38-.42.53-.19.15-.42.26-.71.35-.29.08-.63.13-1.01.13-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42c-.25-.19-.45-.44-.59-.75-.14-.31-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58.16.45.37.85.65 1.21.28.35.6.66.98.92.37.26.78.48 1.22.65.44.17.9.3 1.38.39.48.08.96.13 1.44.13.8 0 1.53-.09 2.18-.28s1.21-.45 1.67-.79c.46-.34.82-.77 1.07-1.27s.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61-.05-.11-.11-.23-.17-.33H21z"}}]})(props);
};
MdStrikethroughS.displayName = "MdStrikethroughS";
var MdTextFields = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"}}]})(props);
};
MdTextFields.displayName = "MdTextFields";
var MdTitle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5 4v3h5.5v12h3V7H19V4z"}}]})(props);
};
MdTitle.displayName = "MdTitle";
var MdVerticalAlignBottom = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"}}]})(props);
};
MdVerticalAlignBottom.displayName = "MdVerticalAlignBottom";
var MdVerticalAlignCenter = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"}}]})(props);
};
MdVerticalAlignCenter.displayName = "MdVerticalAlignCenter";
var MdVerticalAlignTop = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"}}]})(props);
};
MdVerticalAlignTop.displayName = "MdVerticalAlignTop";
var MdWrapText = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}}]})(props);
};
MdWrapText.displayName = "MdWrapText";
var MdAttachment = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"}}]})(props);
};
MdAttachment.displayName = "MdAttachment";
var MdCloud = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"}}]})(props);
};
MdCloud.displayName = "MdCloud";
var MdCloudCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"}}]})(props);
};
MdCloudCircle.displayName = "MdCloudCircle";
var MdCloudDone = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"}}]})(props);
};
MdCloudDone.displayName = "MdCloudDone";
var MdCloudDownload = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}}]})(props);
};
MdCloudDownload.displayName = "MdCloudDownload";
var MdCloudOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"}}]})(props);
};
MdCloudOff.displayName = "MdCloudOff";
var MdCloudQueue = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"}}]})(props);
};
MdCloudQueue.displayName = "MdCloudQueue";
var MdCloudUpload = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}}]})(props);
};
MdCloudUpload.displayName = "MdCloudUpload";
var MdCreateNewFolder = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"}}]})(props);
};
MdCreateNewFolder.displayName = "MdCreateNewFolder";
var MdFileDownload = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}}]})(props);
};
MdFileDownload.displayName = "MdFileDownload";
var MdFileUpload = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"}}]})(props);
};
MdFileUpload.displayName = "MdFileUpload";
var MdFolder = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"}}]})(props);
};
MdFolder.displayName = "MdFolder";
var MdFolderOpen = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"}}]})(props);
};
MdFolderOpen.displayName = "MdFolderOpen";
var MdFolderShared = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"}}]})(props);
};
MdFolderShared.displayName = "MdFolderShared";
var MdCast = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z"}}]})(props);
};
MdCast.displayName = "MdCast";
var MdCastConnected = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7zM1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}}]})(props);
};
MdCastConnected.displayName = "MdCastConnected";
var MdComputer = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"}}]})(props);
};
MdComputer.displayName = "MdComputer";
var MdDesktopMac = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"}}]})(props);
};
MdDesktopMac.displayName = "MdDesktopMac";
var MdDesktopWindows = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"}}]})(props);
};
MdDesktopWindows.displayName = "MdDesktopWindows";
var MdDeveloperBoard = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z"}}]})(props);
};
MdDeveloperBoard.displayName = "MdDeveloperBoard";
var MdDeviceHub = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"}}]})(props);
};
MdDeviceHub.displayName = "MdDeviceHub";
var MdDevicesOther = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6zm10 6H9v1.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 10h-4v-8h4v8z"}}]})(props);
};
MdDevicesOther.displayName = "MdDevicesOther";
var MdDock = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8 23h8v-2H8v2zm8-21.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM16 15H8V5h8v10z"}}]})(props);
};
MdDock.displayName = "MdDock";
var MdGamepad = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"}}]})(props);
};
MdGamepad.displayName = "MdGamepad";
var MdHeadset = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"}}]})(props);
};
MdHeadset.displayName = "MdHeadset";
var MdHeadsetMic = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z"}}]})(props);
};
MdHeadsetMic.displayName = "MdHeadsetMic";
var MdKeyboard = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"}}]})(props);
};
MdKeyboard.displayName = "MdKeyboard";
var MdKeyboardArrowDown = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}}]})(props);
};
MdKeyboardArrowDown.displayName = "MdKeyboardArrowDown";
var MdKeyboardArrowLeft = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}}]})(props);
};
MdKeyboardArrowLeft.displayName = "MdKeyboardArrowLeft";
var MdKeyboardArrowRight = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}}]})(props);
};
MdKeyboardArrowRight.displayName = "MdKeyboardArrowRight";
var MdKeyboardArrowUp = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}}]})(props);
};
MdKeyboardArrowUp.displayName = "MdKeyboardArrowUp";
var MdKeyboardBackspace = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}}]})(props);
};
MdKeyboardBackspace.displayName = "MdKeyboardBackspace";
var MdKeyboardCapslock = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 8.41L16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z"}}]})(props);
};
MdKeyboardCapslock.displayName = "MdKeyboardCapslock";
var MdKeyboardHide = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 3h2v2h-2V6zm0 3h2v2h-2V9zM8 6h2v2H8V6zm0 3h2v2H8V9zm-1 2H5V9h2v2zm0-3H5V6h2v2zm9 7H8v-2h8v2zm0-4h-2V9h2v2zm0-3h-2V6h2v2zm3 3h-2V9h2v2zm0-3h-2V6h2v2zm-7 15l4-4H8l4 4z"}}]})(props);
};
MdKeyboardHide.displayName = "MdKeyboardHide";
var MdKeyboardReturn = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"}}]})(props);
};
MdKeyboardReturn.displayName = "MdKeyboardReturn";
var MdKeyboardTab = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z"}}]})(props);
};
MdKeyboardTab.displayName = "MdKeyboardTab";
var MdKeyboardVoice = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"}}]})(props);
};
MdKeyboardVoice.displayName = "MdKeyboardVoice";
var MdLaptop = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"}}]})(props);
};
MdLaptop.displayName = "MdLaptop";
var MdLaptopChromebook = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z"}}]})(props);
};
MdLaptopChromebook.displayName = "MdLaptopChromebook";
var MdLaptopMac = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"}}]})(props);
};
MdLaptopMac.displayName = "MdLaptopMac";
var MdLaptopWindows = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z"}}]})(props);
};
MdLaptopWindows.displayName = "MdLaptopWindows";
var MdMemory = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"}}]})(props);
};
MdMemory.displayName = "MdMemory";
var MdMouse = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z"}}]})(props);
};
MdMouse.displayName = "MdMouse";
var MdPhoneAndroid = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"}}]})(props);
};
MdPhoneAndroid.displayName = "MdPhoneAndroid";
var MdPhoneIphone = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"}}]})(props);
};
MdPhoneIphone.displayName = "MdPhoneIphone";
var MdPhonelink = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"}}]})(props);
};
MdPhonelink.displayName = "MdPhonelink";
var MdPhonelinkOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 6V4H6.82l2 2H22zM1.92 1.65L.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35 1.27-1.27L3.89 3.62 1.92 1.65zM4 6.27L14.73 17H4V6.27zM23 8h-6c-.55 0-1 .45-1 1v4.18l2 2V10h4v7h-2.18l3 3H23c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z"}}]})(props);
};
MdPhonelinkOff.displayName = "MdPhonelinkOff";
var MdPowerInput = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z"}}]})(props);
};
MdPowerInput.displayName = "MdPowerInput";
var MdRouter = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.2 5.9l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7zm-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1 .9 0 1.8.3 2.5 1l.8-.8zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM8 18H6v-2h2v2zm3.5 0h-2v-2h2v2zm3.5 0h-2v-2h2v2z"}}]})(props);
};
MdRouter.displayName = "MdRouter";
var MdScanner = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.8 10.7L4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM7 17H5v-2h2v2zm12 0H9v-2h10v2z"}}]})(props);
};
MdScanner.displayName = "MdScanner";
var MdSecurity = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"}}]})(props);
};
MdSecurity.displayName = "MdSecurity";
var MdSimCard = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.99 4c0-1.1-.89-2-1.99-2h-8L4 8v12c0 1.1.9 2 2 2h12.01c1.1 0 1.99-.9 1.99-2l-.01-16zM9 19H7v-2h2v2zm8 0h-2v-2h2v2zm-8-4H7v-4h2v4zm4 4h-2v-4h2v4zm0-6h-2v-2h2v2zm4 2h-2v-4h2v4z"}}]})(props);
};
MdSimCard.displayName = "MdSimCard";
var MdSmartphone = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"}}]})(props);
};
MdSmartphone.displayName = "MdSmartphone";
var MdSpeaker = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2c1.1 0 2 .9 2 2s-.9 2-2 2c-1.11 0-2-.9-2-2s.89-2 2-2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}}]})(props);
};
MdSpeaker.displayName = "MdSpeaker";
var MdSpeakerGroup = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8zM14 3c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"}},{"tag":"circle","attr":{"cx":"14","cy":"12.5","r":"2.5"}},{"tag":"path","attr":{"d":"M6 5H4v16c0 1.1.89 2 2 2h10v-2H6V5z"}}]})(props);
};
MdSpeakerGroup.displayName = "MdSpeakerGroup";
var MdTablet = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"}}]})(props);
};
MdTablet.displayName = "MdTablet";
var MdTabletAndroid = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z"}}]})(props);
};
MdTabletAndroid.displayName = "MdTabletAndroid";
var MdTabletMac = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z"}}]})(props);
};
MdTabletMac.displayName = "MdTabletMac";
var MdToys = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12H12zm0 0c0 3-2.5 5.5-5.5 5.5S1 15 1 12h11zm0 0c-3 0-5.5-2.5-5.5-5.5S9 1 12 1v11zm0 0c3 0 5.5 2.5 5.5 5.5S15 23 12 23V12z"}}]})(props);
};
MdToys.displayName = "MdToys";
var MdTv = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"}}]})(props);
};
MdTv.displayName = "MdTv";
var MdVideogameAsset = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}}]})(props);
};
MdVideogameAsset.displayName = "MdVideogameAsset";
var MdWatch = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 12c0-2.54-1.19-4.81-3.04-6.27L16 0H8l-.95 5.73C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27L8 24h8l.96-5.73C18.81 16.81 20 14.54 20 12zM6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z"}}]})(props);
};
MdWatch.displayName = "MdWatch";
var MdAddAPhoto = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z"}}]})(props);
};
MdAddAPhoto.displayName = "MdAddAPhoto";
var MdAddToPhotos = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"}}]})(props);
};
MdAddToPhotos.displayName = "MdAddToPhotos";
var MdAdjust = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"}}]})(props);
};
MdAdjust.displayName = "MdAdjust";
var MdAssistant = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5.12 10.88L12 17l-1.88-4.12L6 11l4.12-1.88L12 5l1.88 4.12L18 11l-4.12 1.88z"}}]})(props);
};
MdAssistant.displayName = "MdAssistant";
var MdAssistantPhoto = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"}}]})(props);
};
MdAssistantPhoto.displayName = "MdAssistantPhoto";
var MdAudiotrack = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"}}]})(props);
};
MdAudiotrack.displayName = "MdAudiotrack";
var MdBlurCircular = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM7 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-3-3c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3-6c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm3 6c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-4c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm2-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-3.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"}}]})(props);
};
MdBlurCircular.displayName = "MdBlurCircular";
var MdBlurLinear = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5 17.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM3 21h18v-2H3v2zM5 9.5c.83 0 1.5-.67 1.5-1.5S5.83 6.5 5 6.5 3.5 7.17 3.5 8 4.17 9.5 5 9.5zm0 4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 17c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8-.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM3 3v2h18V3H3zm14 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm0 4c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM13 9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"}}]})(props);
};
MdBlurLinear.displayName = "MdBlurLinear";
var MdBlurOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-.2 4.48l.2.02c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5l.02.2c.09.67.61 1.19 1.28 1.28zM14 3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-4 0c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm11 7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8 8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-4 13.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM2.5 5.27l3.78 3.78L6 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l2.81 2.81c-.71.11-1.25.73-1.25 1.47 0 .83.67 1.5 1.5 1.5.74 0 1.36-.54 1.47-1.25l2.81 2.81c-.09-.03-.18-.06-.28-.06-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l3.78 3.78L20 20.23 3.77 4 2.5 5.27zM10 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm11-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM3 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 11c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z"}}]})(props);
};
MdBlurOff.displayName = "MdBlurOff";
var MdBlurOn = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-11 10c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 .5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 8.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"}}]})(props);
};
MdBlurOn.displayName = "MdBlurOn";
var MdBrightness1 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}}]})(props);
};
MdBrightness1.displayName = "MdBrightness1";
var MdBrightness2 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"}}]})(props);
};
MdBrightness2.displayName = "MdBrightness2";
var MdBrightness3 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"}}]})(props);
};
MdBrightness3.displayName = "MdBrightness3";
var MdBrightness4 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"}}]})(props);
};
MdBrightness4.displayName = "MdBrightness4";
var MdBrightness5 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"}}]})(props);
};
MdBrightness5.displayName = "MdBrightness5";
var MdBrightness6 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"}}]})(props);
};
MdBrightness6.displayName = "MdBrightness6";
var MdBrightness7 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"}}]})(props);
};
MdBrightness7.displayName = "MdBrightness7";
var MdBrokenImage = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z"}}]})(props);
};
MdBrokenImage.displayName = "MdBrokenImage";
var MdBrush = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"}}]})(props);
};
MdBrush.displayName = "MdBrush";
var MdBurstMode = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM11 17l2.5-3.15L15.29 16l2.5-3.22L21 17H11z"}}]})(props);
};
MdBurstMode.displayName = "MdBurstMode";
var MdCamera = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9.4 10.5l4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0l-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z"}}]})(props);
};
MdCamera.displayName = "MdCamera";
var MdCameraAlt = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"3.2"}},{"tag":"path","attr":{"d":"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"}}]})(props);
};
MdCameraAlt.displayName = "MdCameraAlt";
var MdCameraFront = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2-1.99.9-1.99 2S10.9 8 12 8zm5-8H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V2z"}}]})(props);
};
MdCameraFront.displayName = "MdCameraFront";
var MdCameraRear = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zm3-20H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-5 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6z"}}]})(props);
};
MdCameraRear.displayName = "MdCameraRear";
var MdCameraRoll = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h8V5h-8zm-2 13h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2z"}}]})(props);
};
MdCameraRoll.displayName = "MdCameraRoll";
var MdCenterFocusStrong = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 7H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z"}}]})(props);
};
MdCenterFocusStrong.displayName = "MdCenterFocusStrong";
var MdCenterFocusWeak = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}}]})(props);
};
MdCenterFocusWeak.displayName = "MdCenterFocusWeak";
var MdCollections = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"}}]})(props);
};
MdCollections.displayName = "MdCollections";
var MdCollectionsBookmark = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z"}}]})(props);
};
MdCollectionsBookmark.displayName = "MdCollectionsBookmark";
var MdColorLens = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}}]})(props);
};
MdColorLens.displayName = "MdColorLens";
var MdColorize = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"}}]})(props);
};
MdColorize.displayName = "MdColorize";
var MdCompare = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}}]})(props);
};
MdCompare.displayName = "MdCompare";
var MdControlPoint = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}}]})(props);
};
MdControlPoint.displayName = "MdControlPoint";
var MdControlPointDuplicate = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"}}]})(props);
};
MdControlPointDuplicate.displayName = "MdControlPointDuplicate";
var MdCrop169 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"}}]})(props);
};
MdCrop169.displayName = "MdCrop169";
var MdCrop = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"}}]})(props);
};
MdCrop.displayName = "MdCrop";
var MdCrop32 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z"}}]})(props);
};
MdCrop32.displayName = "MdCrop32";
var MdCrop54 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"}}]})(props);
};
MdCrop54.displayName = "MdCrop54";
var MdCrop75 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"}}]})(props);
};
MdCrop75.displayName = "MdCrop75";
var MdCropDin = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"}}]})(props);
};
MdCropDin.displayName = "MdCropDin";
var MdCropFree = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm2 10H3v4c0 1.1.9 2 2 2h4v-2H5v-4zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2z"}}]})(props);
};
MdCropFree.displayName = "MdCropFree";
var MdCropLandscape = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"}}]})(props);
};
MdCropLandscape.displayName = "MdCropLandscape";
var MdCropOriginal = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"}}]})(props);
};
MdCropOriginal.displayName = "MdCropOriginal";
var MdCropPortrait = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z"}}]})(props);
};
MdCropPortrait.displayName = "MdCropPortrait";
var MdCropRotate = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 14h2V8c0-1.11-.9-2-2-2h-6v2h6v6zm-8 2V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2v-2h2v-2H8z"}}]})(props);
};
MdCropRotate.displayName = "MdCropRotate";
var MdCropSquare = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z"}}]})(props);
};
MdCropSquare.displayName = "MdCropSquare";
var MdDehaze = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"}}]})(props);
};
MdDehaze.displayName = "MdDehaze";
var MdDetails = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z"}}]})(props);
};
MdDetails.displayName = "MdDetails";
var MdEdit = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}}]})(props);
};
MdEdit.displayName = "MdEdit";
var MdExposure = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 17v2h2v-2h2v-2h-2v-2h-2v2h-2v2h2zm5-15H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 5h6v2H5V5zm15 15H4L20 4v16z"}}]})(props);
};
MdExposure.displayName = "MdExposure";
var MdExposureNeg1 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z"}}]})(props);
};
MdExposureNeg1.displayName = "MdExposureNeg1";
var MdExposureNeg2 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17s.19-.79.19-1.18c0-.53-.09-1.02-.27-1.46-.18-.44-.44-.81-.78-1.11-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H21v-1.71h-5.95zM2 11v2h8v-2H2z"}}]})(props);
};
MdExposureNeg2.displayName = "MdExposureNeg2";
var MdExposurePlus1 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 7H8v4H4v2h4v4h2v-4h4v-2h-4V7zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3v13z"}}]})(props);
};
MdExposurePlus1.displayName = "MdExposurePlus1";
var MdExposurePlus2 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17.13-.39.19-.79.19-1.18 0-.53-.09-1.02-.27-1.46-.18-.44-.44-.81-.78-1.11-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H22v-1.71h-5.95zM8 7H6v4H2v2h4v4h2v-4h4v-2H8V7z"}}]})(props);
};
MdExposurePlus2.displayName = "MdExposurePlus2";
var MdExposureZero = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.14 12.5c0 1-.1 1.85-.3 2.55-.2.7-.48 1.27-.83 1.7-.36.44-.79.75-1.3.95-.51.2-1.07.3-1.7.3-.62 0-1.18-.1-1.69-.3-.51-.2-.95-.51-1.31-.95-.36-.44-.65-1.01-.85-1.7-.2-.7-.3-1.55-.3-2.55v-2.04c0-1 .1-1.85.3-2.55.2-.7.48-1.26.84-1.69.36-.43.8-.74 1.31-.93C10.81 5.1 11.38 5 12 5c.63 0 1.19.1 1.7.29.51.19.95.5 1.31.93.36.43.64.99.84 1.69.2.7.3 1.54.3 2.55v2.04zm-2.11-2.36c0-.64-.05-1.18-.13-1.62-.09-.44-.22-.79-.4-1.06-.17-.27-.39-.46-.64-.58-.25-.13-.54-.19-.86-.19-.32 0-.61.06-.86.18s-.47.31-.64.58c-.17.27-.31.62-.4 1.06s-.13.98-.13 1.62v2.67c0 .64.05 1.18.14 1.62.09.45.23.81.4 1.09s.39.48.64.61.54.19.87.19c.33 0 .62-.06.87-.19s.46-.33.63-.61c.17-.28.3-.64.39-1.09.09-.45.13-.99.13-1.62v-2.66z"}}]})(props);
};
MdExposureZero.displayName = "MdExposureZero";
var MdFilter1 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 10h2V5h-4v2h2v8zm7-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"}}]})(props);
};
MdFilter1.displayName = "MdFilter1";
var MdFilter2 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-4-4h-4v-2h2c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2h-4v2h4v2h-2c-1.1 0-2 .89-2 2v4h6v-2z"}}]})(props);
};
MdFilter2.displayName = "MdFilter2";
var MdFilter = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.96 10.29l-2.75 3.54-1.96-2.36L8.5 15h11l-3.54-4.71zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"}}]})(props);
};
MdFilter.displayName = "MdFilter";
var MdFilter3 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-4v2h4v2h-2v2h2v2h-4v2h4c1.1 0 2-.89 2-2z"}}]})(props);
};
MdFilter3.displayName = "MdFilter3";
var MdFilter4 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4zm6-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"}}]})(props);
};
MdFilter4.displayName = "MdFilter4";
var MdFilter5 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-2c0-1.11-.9-2-2-2h-2V7h4V5h-6v6h4v2h-4v2h4c1.1 0 2-.89 2-2z"}}]})(props);
};
MdFilter5.displayName = "MdFilter5";
var MdFilter6 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-2c0-1.11-.9-2-2-2h-2V7h4V5h-4c-1.1 0-2 .89-2 2v6c0 1.11.9 2 2 2zm0-4h2v2h-2v-2z"}}]})(props);
};
MdFilter6.displayName = "MdFilter6";
var MdFilter7 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2l4-8V5h-6v2h4l-4 8h2z"}}]})(props);
};
MdFilter7.displayName = "MdFilter7";
var MdFilter8 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-2c-1.1 0-2 .89-2 2v1.5c0 .83.67 1.5 1.5 1.5-.83 0-1.5.67-1.5 1.5V13c0 1.11.9 2 2 2zm0-8h2v2h-2V7zm0 4h2v2h-2v-2z"}}]})(props);
};
MdFilter8.displayName = "MdFilter8";
var MdFilter9 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM15 5h-2c-1.1 0-2 .89-2 2v2c0 1.11.9 2 2 2h2v2h-4v2h4c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2zm0 4h-2V7h2v2z"}}]})(props);
};
MdFilter9.displayName = "MdFilter9";
var MdFilter9Plus = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 7V8c0-1.11-.9-2-2-2h-1c-1.1 0-2 .89-2 2v1c0 1.11.9 2 2 2h1v1H9v2h3c1.1 0 2-.89 2-2zm-3-3V8h1v1h-1zm10-8H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 8h-2V7h-2v2h-2v2h2v2h2v-2h2v6H7V3h14v6z"}}]})(props);
};
MdFilter9Plus.displayName = "MdFilter9Plus";
var MdFilterBAndW = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16l-7-8v8H5l7-8V5h7v14z"}}]})(props);
};
MdFilterBAndW.displayName = "MdFilterBAndW";
var MdFilterCenterFocus = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}}]})(props);
};
MdFilterCenterFocus.displayName = "MdFilterCenterFocus";
var MdFilterDrama = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z"}}]})(props);
};
MdFilterDrama.displayName = "MdFilterDrama";
var MdFilterFrames = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM18 8H6v10h12"}}]})(props);
};
MdFilterFrames.displayName = "MdFilterFrames";
var MdFilterHdr = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"}}]})(props);
};
MdFilterHdr.displayName = "MdFilterHdr";
var MdFilterNone = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"}}]})(props);
};
MdFilterNone.displayName = "MdFilterNone";
var MdFilterTiltShift = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zm7.32.19C16.84 3.05 15.01 2.25 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1c.86 1.11 1.44 2.44 1.62 3.9zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm3.31 4.9l1.43 1.43c1.21-1.48 2.01-3.32 2.21-5.32h-2.02c-.18 1.45-.76 2.78-1.62 3.89zM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zm-7.32-.19C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43z"}}]})(props);
};
MdFilterTiltShift.displayName = "MdFilterTiltShift";
var MdFilterVintage = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.7 12.4c-.28-.16-.57-.29-.86-.4.29-.11.58-.24.86-.4 1.92-1.11 2.99-3.12 3-5.19-1.79-1.03-4.07-1.11-6 0-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55-1.92-1.11-4.2-1.03-6 0 0 2.07 1.07 4.08 3 5.19.28.16.57.29.86.4-.29.11-.58.24-.86.4-1.92 1.11-2.99 3.12-3 5.19 1.79 1.03 4.07 1.11 6 0 .28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54 1.92 1.11 4.2 1.03 6 0-.01-2.07-1.08-4.08-3-5.19zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"}}]})(props);
};
MdFilterVintage.displayName = "MdFilterVintage";
var MdFlare = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 11H1v2h6v-2zm2.17-3.24L7.05 5.64 5.64 7.05l2.12 2.12 1.41-1.41zM13 1h-2v6h2V1zm5.36 6.05l-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM17 11v2h6v-2h-6zm-5-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm2.83 7.24l2.12 2.12 1.41-1.41-2.12-2.12-1.41 1.41zm-9.19.71l1.41 1.41 2.12-2.12-1.41-1.41-2.12 2.12zM11 23h2v-6h-2v6z"}}]})(props);
};
MdFlare.displayName = "MdFlare";
var MdFlashAuto = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 2v12h3v9l7-12H9l4-9H3zm16 0h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L19 2zm-2.15 5.65L18 4l1.15 3.65h-2.3z"}}]})(props);
};
MdFlashAuto.displayName = "MdFlashAuto";
var MdFlashOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3.27 3L2 4.27l5 5V13h3v9l3.58-6.14L17.73 20 19 18.73 3.27 3zM17 10h-4l4-8H7v2.18l8.46 8.46L17 10z"}}]})(props);
};
MdFlashOff.displayName = "MdFlashOff";
var MdFlashOn = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 2v11h3v9l7-12h-4l4-8z"}}]})(props);
};
MdFlashOn.displayName = "MdFlashOn";
var MdFlip = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 21h2v-2h-2v2zm4-12h2V7h-2v2zM3 5v14c0 1.1.9 2 2 2h4v-2H5V5h4V3H5c-1.1 0-2 .9-2 2zm16-2v2h2c0-1.1-.9-2-2-2zm-8 20h2V1h-2v22zm8-6h2v-2h-2v2zM15 5h2V3h-2v2zm4 8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2z"}}]})(props);
};
MdFlip.displayName = "MdFlip";
var MdGradient = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z"}}]})(props);
};
MdGradient.displayName = "MdGradient";
var MdGrain = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}}]})(props);
};
MdGrain.displayName = "MdGrain";
var MdGridOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8 4v1.45l2 2V4h4v4h-3.45l2 2H14v1.45l2 2V10h4v4h-3.45l2 2H20v1.45l2 2V4c0-1.1-.9-2-2-2H4.55l2 2H8zm8 0h4v4h-4V4zM1.27 1.27L0 2.55l2 2V20c0 1.1.9 2 2 2h15.46l2 2 1.27-1.27L1.27 1.27zM10 12.55L11.45 14H10v-1.45zm-6-6L5.45 8H4V6.55zM8 20H4v-4h4v4zm0-6H4v-4h3.45l.55.55V14zm6 6h-4v-4h3.45l.55.54V20zm2 0v-1.46L17.46 20H16z"}}]})(props);
};
MdGridOff.displayName = "MdGridOff";
var MdGridOn = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"}}]})(props);
};
MdGridOn.displayName = "MdGridOn";
var MdHdrOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.5 15v-2h1.1l.9 2H21l-.9-2.1c.5-.2.9-.8.9-1.4v-1c0-.8-.7-1.5-1.5-1.5H16v4.9l1.1 1.1h.4zm0-4.5h2v1h-2v-1zm-4.5 0v.4l1.5 1.5v-1.9c0-.8-.7-1.5-1.5-1.5h-1.9l1.5 1.5h.4zm-3.5-1l-7-7-1.1 1L6.9 9h-.4v2h-2V9H3v6h1.5v-2.5h2V15H8v-4.9l1.5 1.5V15h3.4l7.6 7.6 1.1-1.1-12.1-12z"}}]})(props);
};
MdHdrOff.displayName = "MdHdrOff";
var MdHdrOn = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 11.5v-1c0-.8-.7-1.5-1.5-1.5H16v6h1.5v-2h1.1l.9 2H21l-.9-2.1c.5-.3.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zm-13-.5h-2V9H3v6h1.5v-2.5h2V15H8V9H6.5v2zM13 9H9.5v6H13c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5h-2v-3h2v3z"}}]})(props);
};
MdHdrOn.displayName = "MdHdrOn";
var MdHdrStrong = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zM5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}}]})(props);
};
MdHdrStrong.displayName = "MdHdrStrong";
var MdHdrWeak = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm12-2c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"}}]})(props);
};
MdHdrWeak.displayName = "MdHdrWeak";
var MdHealing = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.73 12.02l3.98-3.98c.39-.39.39-1.02 0-1.41l-4.34-4.34c-.39-.39-1.02-.39-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63c-.39.39-.39 1.02 0 1.41l3.98 3.98L2.25 16c-.39.39-.39 1.02 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34c.39-.39.39-1.02 0-1.41l-3.99-3.98zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.66 9.34l-3.63-3.62 3.63-3.63 3.62 3.62-3.62 3.63z"}}]})(props);
};
MdHealing.displayName = "MdHealing";
var MdImage = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}}]})(props);
};
MdImage.displayName = "MdImage";
var MdImageAspectRatio = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"}}]})(props);
};
MdImageAspectRatio.displayName = "MdImageAspectRatio";
var MdIso = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2V7.5zM19 19H5L19 5v14zm-2-2v-1.5h-5V17h5z"}}]})(props);
};
MdIso.displayName = "MdIso";
var MdLandscape = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"}}]})(props);
};
MdLandscape.displayName = "MdLandscape";
var MdLeakAdd = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 3H3v3c1.66 0 3-1.34 3-3zm8 0h-2c0 4.97-4.03 9-9 9v2c6.08 0 11-4.93 11-11zm-4 0H8c0 2.76-2.24 5-5 5v2c3.87 0 7-3.13 7-7zm0 18h2c0-4.97 4.03-9 9-9v-2c-6.07 0-11 4.93-11 11zm8 0h3v-3c-1.66 0-3 1.34-3 3zm-4 0h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7z"}}]})(props);
};
MdLeakAdd.displayName = "MdLeakAdd";
var MdLeakRemove = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 3H8c0 .37-.04.72-.12 1.06l1.59 1.59C9.81 4.84 10 3.94 10 3zM3 4.27l2.84 2.84C5.03 7.67 4.06 8 3 8v2c1.61 0 3.09-.55 4.27-1.46L8.7 9.97C7.14 11.24 5.16 12 3 12v2c2.71 0 5.19-.99 7.11-2.62l2.5 2.5C10.99 15.81 10 18.29 10 21h2c0-2.16.76-4.14 2.03-5.69l1.43 1.43C14.55 17.91 14 19.39 14 21h2c0-1.06.33-2.03.89-2.84L19.73 21 21 19.73 4.27 3 3 4.27zM14 3h-2c0 1.5-.37 2.91-1.02 4.16l1.46 1.46C13.42 6.98 14 5.06 14 3zm5.94 13.12c.34-.08.69-.12 1.06-.12v-2c-.94 0-1.84.19-2.66.52l1.6 1.6zm-4.56-4.56l1.46 1.46C18.09 12.37 19.5 12 21 12v-2c-2.06 0-3.98.58-5.62 1.56z"}}]})(props);
};
MdLeakRemove.displayName = "MdLeakRemove";
var MdLens = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"}}]})(props);
};
MdLens.displayName = "MdLens";
var MdLinkedCamera = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"14","r":"3.2"}},{"tag":"path","attr":{"d":"M16 3.33c2.58 0 4.67 2.09 4.67 4.67H22c0-3.31-2.69-6-6-6v1.33M16 6c1.11 0 2 .89 2 2h1.33c0-1.84-1.49-3.33-3.33-3.33V6"}},{"tag":"path","attr":{"d":"M17 9c0-1.11-.89-2-2-2V4H9L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9h-5zm-5 10c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"}}]})(props);
};
MdLinkedCamera.displayName = "MdLinkedCamera";
var MdLooks = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 10c-3.86 0-7 3.14-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.86-3.14-7-7-7zm0-4C5.93 6 1 10.93 1 17h2c0-4.96 4.04-9 9-9s9 4.04 9 9h2c0-6.07-4.93-11-11-11z"}}]})(props);
};
MdLooks.displayName = "MdLooks";
var MdLooks3 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.01 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 7.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5V15c0 1.11-.9 2-2 2h-4v-2h4v-2h-2v-2h2V9h-4V7h4c1.1 0 2 .89 2 2v1.5z"}}]})(props);
};
MdLooks3.displayName = "MdLooks3";
var MdLooks4 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 14h-2v-4H9V7h2v4h2V7h2v10z"}}]})(props);
};
MdLooks4.displayName = "MdLooks4";
var MdLooks5 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2H9v-2h4v-2H9V7h6v2z"}}]})(props);
};
MdLooks5.displayName = "MdLooks5";
var MdLooks6 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 15h2v-2h-2v2zm8-12H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2h-2c-1.1 0-2-.89-2-2V9c0-1.11.9-2 2-2h4v2z"}}]})(props);
};
MdLooks6.displayName = "MdLooks6";
var MdLooksOne = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z"}}]})(props);
};
MdLooksOne.displayName = "MdLooksOne";
var MdLooksTwo = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8c0 1.11-.9 2-2 2h-2v2h4v2H9v-4c0-1.11.9-2 2-2h2V9H9V7h4c1.1 0 2 .89 2 2v2z"}}]})(props);
};
MdLooksTwo.displayName = "MdLooksTwo";
var MdLoupe = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10h8c1.1 0 2-.9 2-2v-8c0-5.51-4.49-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}}]})(props);
};
MdLoupe.displayName = "MdLoupe";
var MdMonochromePhotos = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 5h-3.2L15 3H9L7.2 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14h-8v-1c-2.8 0-5-2.2-5-5s2.2-5 5-5V7h8v12zm-3-6c0-2.8-2.2-5-5-5v1.8c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2V18c2.8 0 5-2.2 5-5zm-8.2 0c0 1.8 1.4 3.2 3.2 3.2V9.8c-1.8 0-3.2 1.4-3.2 3.2z"}}]})(props);
};
MdMonochromePhotos.displayName = "MdMonochromePhotos";
var MdMovieCreation = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"}}]})(props);
};
MdMovieCreation.displayName = "MdMovieCreation";
var MdMovieFilter = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 4l2 3h-3l-2-3h-2l2 3h-3l-2-3H8l2 3H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-6.75 11.25L10 18l-1.25-2.75L6 14l2.75-1.25L10 10l1.25 2.75L14 14l-2.75 1.25zm5.69-3.31L16 14l-.94-2.06L13 11l2.06-.94L16 8l.94 2.06L19 11l-2.06.94z"}}]})(props);
};
MdMovieFilter.displayName = "MdMovieFilter";
var MdMusicNote = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"}}]})(props);
};
MdMusicNote.displayName = "MdMusicNote";
var MdNature = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 16.12c3.47-.41 6.17-3.36 6.17-6.95 0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H5v2h14v-2h-6v-3.88z"}}]})(props);
};
MdNature.displayName = "MdNature";
var MdNaturePeople = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H6v-3h1v-4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4h1v5h16v-2h-3v-3.88c3.47-.41 6.17-3.36 6.17-6.95zM4.5 11c.83 0 1.5-.67 1.5-1.5S5.33 8 4.5 8 3 8.67 3 9.5 3.67 11 4.5 11z"}}]})(props);
};
MdNaturePeople.displayName = "MdNaturePeople";
var MdNavigateBefore = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}}]})(props);
};
MdNavigateBefore.displayName = "MdNavigateBefore";
var MdNavigateNext = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}}]})(props);
};
MdNavigateNext.displayName = "MdNavigateNext";
var MdPalette = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}}]})(props);
};
MdPalette.displayName = "MdPalette";
var MdPanorama = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z"}}]})(props);
};
MdPanorama.displayName = "MdPanorama";
var MdPanoramaFishEye = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}}]})(props);
};
MdPanoramaFishEye.displayName = "MdPanoramaFishEye";
var MdPanoramaHorizontal = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 6.54v10.91c-2.6-.77-5.28-1.16-8-1.16-2.72 0-5.4.39-8 1.16V6.54c2.6.77 5.28 1.16 8 1.16 2.72.01 5.4-.38 8-1.16M21.43 4c-.1 0-.2.02-.31.06C18.18 5.16 15.09 5.7 12 5.7c-3.09 0-6.18-.55-9.12-1.64-.11-.04-.22-.06-.31-.06-.34 0-.57.23-.57.63v14.75c0 .39.23.62.57.62.1 0 .2-.02.31-.06 2.94-1.1 6.03-1.64 9.12-1.64 3.09 0 6.18.55 9.12 1.64.11.04.21.06.31.06.33 0 .57-.23.57-.63V4.63c0-.4-.24-.63-.57-.63z"}}]})(props);
};
MdPanoramaHorizontal.displayName = "MdPanoramaHorizontal";
var MdPanoramaVertical = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.94 21.12c-1.1-2.94-1.64-6.03-1.64-9.12 0-3.09.55-6.18 1.64-9.12.04-.11.06-.22.06-.31 0-.34-.23-.57-.63-.57H4.63c-.4 0-.63.23-.63.57 0 .1.02.2.06.31C5.16 5.82 5.71 8.91 5.71 12c0 3.09-.55 6.18-1.64 9.12-.05.11-.07.22-.07.31 0 .33.23.57.63.57h14.75c.39 0 .63-.24.63-.57-.01-.1-.03-.2-.07-.31zM6.54 20c.77-2.6 1.16-5.28 1.16-8 0-2.72-.39-5.4-1.16-8h10.91c-.77 2.6-1.16 5.28-1.16 8 0 2.72.39 5.4 1.16 8H6.54z"}}]})(props);
};
MdPanoramaVertical.displayName = "MdPanoramaVertical";
var MdPanoramaWideAngle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 6c2.45 0 4.71.2 7.29.64.47 1.78.71 3.58.71 5.36 0 1.78-.24 3.58-.71 5.36-2.58.44-4.84.64-7.29.64s-4.71-.2-7.29-.64C4.24 15.58 4 13.78 4 12c0-1.78.24-3.58.71-5.36C7.29 6.2 9.55 6 12 6m0-2c-2.73 0-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22l-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4z"}}]})(props);
};
MdPanoramaWideAngle.displayName = "MdPanoramaWideAngle";
var MdPhoto = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}}]})(props);
};
MdPhoto.displayName = "MdPhoto";
var MdPhotoAlbum = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm0 15l3-3.86 2.14 2.58 3-3.86L18 19H6z"}}]})(props);
};
MdPhotoAlbum.displayName = "MdPhotoAlbum";
var MdPhotoCamera = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"3.2"}},{"tag":"path","attr":{"d":"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"}}]})(props);
};
MdPhotoCamera.displayName = "MdPhotoCamera";
var MdPhotoFilter = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.02 10v9H5V5h9V3H5.02c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2zM17 10l.94-2.06L20 7l-2.06-.94L17 4l-.94 2.06L14 7l2.06.94zm-3.75.75L12 8l-1.25 2.75L8 12l2.75 1.25L12 16l1.25-2.75L16 12z"}}]})(props);
};
MdPhotoFilter.displayName = "MdPhotoFilter";
var MdPhotoLibrary = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"}}]})(props);
};
MdPhotoLibrary.displayName = "MdPhotoLibrary";
var MdPhotoSizeSelectActual = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"}}]})(props);
};
MdPhotoSizeSelectActual.displayName = "MdPhotoSizeSelectActual";
var MdPhotoSizeSelectLarge = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 15h2v2h-2v-2zm0-4h2v2h-2v-2zm2 8h-2v2c1 0 2-1 2-2zM13 3h2v2h-2V3zm8 4h2v2h-2V7zm0-4v2h2c0-1-1-2-2-2zM1 7h2v2H1V7zm16-4h2v2h-2V3zm0 16h2v2h-2v-2zM3 3C2 3 1 4 1 5h2V3zm6 0h2v2H9V3zM5 3h2v2H5V3zm-4 8v8c0 1.1.9 2 2 2h12V11H1zm2 8l2.5-3.21 1.79 2.15 2.5-3.22L13 19H3z"}}]})(props);
};
MdPhotoSizeSelectLarge.displayName = "MdPhotoSizeSelectLarge";
var MdPhotoSizeSelectSmall = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M23 15h-2v2h2v-2zm0-4h-2v2h2v-2zm0 8h-2v2c1 0 2-1 2-2zM15 3h-2v2h2V3zm8 4h-2v2h2V7zm-2-4v2h2c0-1-1-2-2-2zM3 21h8v-6H1v4c0 1.1.9 2 2 2zM3 7H1v2h2V7zm12 12h-2v2h2v-2zm4-16h-2v2h2V3zm0 16h-2v2h2v-2zM3 3C2 3 1 4 1 5h2V3zm0 8H1v2h2v-2zm8-8H9v2h2V3zM7 3H5v2h2V3z"}}]})(props);
};
MdPhotoSizeSelectSmall.displayName = "MdPhotoSizeSelectSmall";
var MdPictureAsPdf = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"}}]})(props);
};
MdPictureAsPdf.displayName = "MdPictureAsPdf";
var MdPortrait = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25zm4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"}}]})(props);
};
MdPortrait.displayName = "MdPortrait";
var MdRemoveRedEye = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}}]})(props);
};
MdRemoveRedEye.displayName = "MdRemoveRedEye";
var MdRotate90DegreesCcw = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"}}]})(props);
};
MdRotate90DegreesCcw.displayName = "MdRotate90DegreesCcw";
var MdRotateLeft = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"}}]})(props);
};
MdRotateLeft.displayName = "MdRotateLeft";
var MdRotateRight = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"}}]})(props);
};
MdRotateRight.displayName = "MdRotateRight";
var MdSlideshow = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"}}]})(props);
};
MdSlideshow.displayName = "MdSlideshow";
var MdStraighten = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z"}}]})(props);
};
MdStraighten.displayName = "MdStraighten";
var MdStyle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z"}}]})(props);
};
MdStyle.displayName = "MdStyle";
var MdSwitchCamera = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"}}]})(props);
};
MdSwitchCamera.displayName = "MdSwitchCamera";
var MdSwitchVideo = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 9.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13l-4 4zm-5 6V13H7v2.5L3.5 12 7 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"}}]})(props);
};
MdSwitchVideo.displayName = "MdSwitchVideo";
var MdTagFaces = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"}}]})(props);
};
MdTagFaces.displayName = "MdTagFaces";
var MdTexture = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.51 3.08L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z"}}]})(props);
};
MdTexture.displayName = "MdTexture";
var MdTimelapse = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.24 7.76C15.07 6.59 13.54 6 12 6v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0 2.34-2.34 2.34-6.14-.01-8.48zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}}]})(props);
};
MdTimelapse.displayName = "MdTimelapse";
var MdTimer10 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M0 7.72V9.4l3-1V18h2V6h-.25L0 7.72zm23.78 6.65c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.87-.23-.23-.08-.41-.16-.55-.25-.14-.09-.23-.19-.28-.3-.05-.11-.08-.24-.08-.39 0-.14.03-.28.09-.41.06-.13.15-.25.27-.34.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11.19.07.35.17.48.29.13.12.22.26.29.42.06.16.1.32.1.49h1.95c0-.39-.08-.75-.24-1.09-.16-.34-.39-.63-.69-.88-.3-.25-.66-.44-1.09-.59C21.49 9.07 21 9 20.46 9c-.51 0-.98.07-1.39.21-.41.14-.77.33-1.06.57-.29.24-.51.52-.67.84-.16.32-.23.65-.23 1.01s.08.69.23.96c.15.28.36.52.64.73.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77-.27.2-.66.29-1.17.29-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24-.17-.11-.3-.26-.41-.44-.11-.18-.17-.41-.18-.67h-1.89c0 .36.08.71.24 1.05.16.34.39.65.7.93.31.27.69.49 1.15.66.46.17.98.25 1.58.25.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02zm-9.96-7.32c-.34-.4-.75-.7-1.23-.88-.47-.18-1.01-.27-1.59-.27-.58 0-1.11.09-1.59.27-.48.18-.89.47-1.23.88-.34.41-.6.93-.79 1.59-.18.65-.28 1.45-.28 2.39v1.92c0 .94.09 1.74.28 2.39.19.66.45 1.19.8 1.6.34.41.75.71 1.23.89.48.18 1.01.28 1.59.28.59 0 1.12-.09 1.59-.28.48-.18.88-.48 1.22-.89.34-.41.6-.94.78-1.6.18-.65.28-1.45.28-2.39v-1.92c0-.94-.09-1.74-.28-2.39-.18-.66-.44-1.19-.78-1.59zm-.92 6.17c0 .6-.04 1.11-.12 1.53-.08.42-.2.76-.36 1.02-.16.26-.36.45-.59.57-.23.12-.51.18-.82.18-.3 0-.58-.06-.82-.18s-.44-.31-.6-.57c-.16-.26-.29-.6-.38-1.02-.09-.42-.13-.93-.13-1.53v-2.5c0-.6.04-1.11.13-1.52.09-.41.21-.74.38-1 .16-.25.36-.43.6-.55.24-.11.51-.17.81-.17.31 0 .58.06.81.17.24.11.44.29.6.55.16.25.29.58.37.99.08.41.13.92.13 1.52v2.51z"}}]})(props);
};
MdTimer10.displayName = "MdTimer10";
var MdTimer = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}}]})(props);
};
MdTimer.displayName = "MdTimer";
var MdTimer3 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.61 12.97c-.16-.24-.36-.46-.62-.65-.25-.19-.56-.35-.93-.48.3-.14.57-.3.8-.5.23-.2.42-.41.57-.64.15-.23.27-.46.34-.71.08-.24.11-.49.11-.73 0-.55-.09-1.04-.28-1.46-.18-.42-.44-.77-.78-1.06-.33-.28-.73-.5-1.2-.64-.45-.13-.97-.2-1.53-.2-.55 0-1.06.08-1.52.24-.47.17-.87.4-1.2.69-.33.29-.6.63-.78 1.03-.2.39-.29.83-.29 1.29h1.98c0-.26.05-.49.14-.69.09-.2.22-.38.38-.52.17-.14.36-.25.58-.33.22-.08.46-.12.73-.12.61 0 1.06.16 1.36.47.3.31.44.75.44 1.32 0 .27-.04.52-.12.74-.08.22-.21.41-.38.57-.17.16-.38.28-.63.37-.25.09-.55.13-.89.13H6.72v1.57H7.9c.34 0 .64.04.91.11.27.08.5.19.69.35.19.16.34.36.44.61.1.24.16.54.16.87 0 .62-.18 1.09-.53 1.42-.35.33-.84.49-1.45.49-.29 0-.56-.04-.8-.13-.24-.08-.44-.2-.61-.36-.17-.16-.3-.34-.39-.56-.09-.22-.14-.46-.14-.72H4.19c0 .55.11 1.03.32 1.45.21.42.5.77.86 1.05s.77.49 1.24.63.96.21 1.48.21c.57 0 1.09-.08 1.58-.23.49-.15.91-.38 1.26-.68.36-.3.64-.66.84-1.1.2-.43.3-.93.3-1.48 0-.29-.04-.58-.11-.86-.08-.25-.19-.51-.35-.76zm9.26 1.4c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.87-.23-.23-.08-.41-.16-.55-.25-.14-.09-.23-.19-.28-.3-.05-.11-.08-.24-.08-.39s.03-.28.09-.41c.06-.13.15-.25.27-.34.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11.19.07.35.17.48.29.13.12.22.26.29.42.06.16.1.32.1.49h1.95c0-.39-.08-.75-.24-1.09-.16-.34-.39-.63-.69-.88-.3-.25-.66-.44-1.09-.59-.43-.15-.92-.22-1.46-.22-.51 0-.98.07-1.39.21-.41.14-.77.33-1.06.57-.29.24-.51.52-.67.84-.16.32-.23.65-.23 1.01s.08.68.23.96c.15.28.37.52.64.73.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77-.27.2-.66.29-1.17.29-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24-.17-.11-.3-.26-.41-.44-.11-.18-.17-.41-.18-.67h-1.89c0 .36.08.71.24 1.05.16.34.39.65.7.93.31.27.69.49 1.15.66.46.17.98.25 1.58.25.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02z"}}]})(props);
};
MdTimer3.displayName = "MdTimer3";
var MdTimerOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.04 4.55l-1.42 1.42C16.07 4.74 14.12 4 12 4c-1.83 0-3.53.55-4.95 1.48l1.46 1.46C9.53 6.35 10.73 6 12 6c3.87 0 7 3.13 7 7 0 1.27-.35 2.47-.94 3.49l1.45 1.45C20.45 16.53 21 14.83 21 13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42-1.41-1.42zM15 1H9v2h6V1zm-4 8.44l2 2V8h-2v1.44zM3.02 4L1.75 5.27 4.5 8.03C3.55 9.45 3 11.16 3 13c0 4.97 4.02 9 9 9 1.84 0 3.55-.55 4.98-1.5l2.5 2.5 1.27-1.27-7.71-7.71L3.02 4zM12 20c-3.87 0-7-3.13-7-7 0-1.28.35-2.48.95-3.52l9.56 9.56c-1.03.61-2.23.96-3.51.96z"}}]})(props);
};
MdTimerOff.displayName = "MdTimerOff";
var MdTonality = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z"}}]})(props);
};
MdTonality.displayName = "MdTonality";
var MdTransform = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6v2z"}}]})(props);
};
MdTransform.displayName = "MdTransform";
var MdTune = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"}}]})(props);
};
MdTune.displayName = "MdTune";
var MdViewComfy = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 9h4V5H3v4zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM3 19h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h4v-4h-4v4zm0-14v4h4V5h-4z"}}]})(props);
};
MdViewComfy.displayName = "MdViewComfy";
var MdViewCompact = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z"}}]})(props);
};
MdViewCompact.displayName = "MdViewCompact";
var MdVignette = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15c-4.42 0-8-2.69-8-6s3.58-6 8-6 8 2.69 8 6-3.58 6-8 6z"}}]})(props);
};
MdVignette.displayName = "MdVignette";
var MdWbAuto = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6.85 12.65h2.3L8 9l-1.15 3.65zM22 7l-1.2 6.29L19.3 7h-1.6l-1.49 6.29L15 7h-.76C12.77 5.17 10.53 4 8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c3.13 0 5.84-1.81 7.15-4.43l.1.43H17l1.5-6.1L20 16h1.75l2.05-9H22zm-11.7 9l-.7-2H6.4l-.7 2H3.8L7 7h2l3.2 9h-1.9z"}}]})(props);
};
MdWbAuto.displayName = "MdWbAuto";
var MdWbCloudy = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"}}]})(props);
};
MdWbCloudy.displayName = "MdWbCloudy";
var MdWbIncandescent = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3.55 18.54l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8zM11 22.45h2V19.5h-2v2.95zM4 10.5H1v2h3v-2zm11-4.19V1.5H9v4.81C7.21 7.35 6 9.28 6 11.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19zm5 4.19v2h3v-2h-3zm-2.76 7.66l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4z"}}]})(props);
};
MdWbIncandescent.displayName = "MdWbIncandescent";
var MdWbIridescent = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5 14.5h14v-6H5v6zM11 .55V3.5h2V.55h-2zm8.04 2.5l-1.79 1.79 1.41 1.41 1.8-1.79-1.42-1.41zM13 22.45V19.5h-2v2.95h2zm7.45-3.91l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM3.55 4.46l1.79 1.79 1.41-1.41-1.79-1.79-1.41 1.41zm1.41 15.49l1.79-1.8-1.41-1.41-1.79 1.79 1.41 1.42z"}}]})(props);
};
MdWbIridescent.displayName = "MdWbIridescent";
var MdWbSunny = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"}}]})(props);
};
MdWbSunny.displayName = "MdWbSunny";
var MdAddLocation = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z"}}]})(props);
};
MdAddLocation.displayName = "MdAddLocation";
var MdBeenhere = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-9 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z"}}]})(props);
};
MdBeenhere.displayName = "MdBeenhere";
var MdDirections = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"}}]})(props);
};
MdDirections.displayName = "MdDirections";
var MdDirectionsBike = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"}}]})(props);
};
MdDirectionsBike.displayName = "MdDirectionsBike";
var MdDirectionsBoat = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"}}]})(props);
};
MdDirectionsBoat.displayName = "MdDirectionsBoat";
var MdDirectionsBus = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"}}]})(props);
};
MdDirectionsBus.displayName = "MdDirectionsBus";
var MdDirectionsCar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"}}]})(props);
};
MdDirectionsCar.displayName = "MdDirectionsCar";
var MdDirectionsRailway = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7H6V5h12v5z"}}]})(props);
};
MdDirectionsRailway.displayName = "MdDirectionsRailway";
var MdDirectionsRun = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"}}]})(props);
};
MdDirectionsRun.displayName = "MdDirectionsRun";
var MdDirectionsSubway = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"}}]})(props);
};
MdDirectionsSubway.displayName = "MdDirectionsSubway";
var MdDirectionsTransit = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"}}]})(props);
};
MdDirectionsTransit.displayName = "MdDirectionsTransit";
var MdDirectionsWalk = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"}}]})(props);
};
MdDirectionsWalk.displayName = "MdDirectionsWalk";
var MdEditLocation = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm-1.56 10H9v-1.44l3.35-3.34 1.43 1.43L10.44 12zm4.45-4.45l-.7.7-1.44-1.44.7-.7c.15-.15.39-.15.54 0l.9.9c.15.15.15.39 0 .54z"}}]})(props);
};
MdEditLocation.displayName = "MdEditLocation";
var MdEvStation = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM18 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM8 18v-4.5H6L10 6v5h2l-4 7z"}}]})(props);
};
MdEvStation.displayName = "MdEvStation";
var MdFlight = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10.18 9"}},{"tag":"path","attr":{"d":"M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"}}]})(props);
};
MdFlight.displayName = "MdFlight";
var MdHotel = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"}}]})(props);
};
MdHotel.displayName = "MdHotel";
var MdLayers = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"}}]})(props);
};
MdLayers.displayName = "MdLayers";
var MdLayersClear = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z"}}]})(props);
};
MdLayersClear.displayName = "MdLayersClear";
var MdLocalActivity = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"}}]})(props);
};
MdLocalActivity.displayName = "MdLocalActivity";
var MdLocalAirport = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"}}]})(props);
};
MdLocalAirport.displayName = "MdLocalAirport";
var MdLocalAtm = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"}}]})(props);
};
MdLocalAtm.displayName = "MdLocalAtm";
var MdLocalBar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z"}}]})(props);
};
MdLocalBar.displayName = "MdLocalBar";
var MdLocalCafe = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z"}}]})(props);
};
MdLocalCafe.displayName = "MdLocalCafe";
var MdLocalCarWash = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 5c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zm-5 0c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zM7 5c.83 0 1.5-.67 1.5-1.5C8.5 2.5 7 .8 7 .8S5.5 2.5 5.5 3.5C5.5 4.33 6.17 5 7 5zm11.92 3.01C18.72 7.42 18.16 7 17.5 7h-11c-.66 0-1.21.42-1.42 1.01L3 14v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 18c-.83 0-1.5-.67-1.5-1.5S5.67 15 6.5 15s1.5.67 1.5 1.5S7.33 18 6.5 18zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 13l1.5-4.5h11L19 13H5z"}}]})(props);
};
MdLocalCarWash.displayName = "MdLocalCarWash";
var MdLocalConvenienceStore = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 7V4H5v3H2v13h8v-4h4v4h8V7h-3zm-8 3H9v1h2v1H8V9h2V8H8V7h3v3zm5 2h-1v-2h-2V7h1v2h1V7h1v5z"}}]})(props);
};
MdLocalConvenienceStore.displayName = "MdLocalConvenienceStore";
var MdLocalDining = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"}}]})(props);
};
MdLocalDining.displayName = "MdLocalDining";
var MdLocalDrink = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z"}}]})(props);
};
MdLocalDrink.displayName = "MdLocalDrink";
var MdLocalFlorist = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z"}}]})(props);
};
MdLocalFlorist.displayName = "MdLocalFlorist";
var MdLocalGasStation = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"}}]})(props);
};
MdLocalGasStation.displayName = "MdLocalGasStation";
var MdLocalGroceryStore = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}}]})(props);
};
MdLocalGroceryStore.displayName = "MdLocalGroceryStore";
var MdLocalHospital = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"}}]})(props);
};
MdLocalHospital.displayName = "MdLocalHospital";
var MdLocalHotel = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"}}]})(props);
};
MdLocalHotel.displayName = "MdLocalHotel";
var MdLocalLaundryService = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9.17 16.83c1.56 1.56 4.1 1.56 5.66 0 1.56-1.56 1.56-4.1 0-5.66l-5.66 5.66zM18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"}}]})(props);
};
MdLocalLaundryService.displayName = "MdLocalLaundryService";
var MdLocalLibrary = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"}}]})(props);
};
MdLocalLibrary.displayName = "MdLocalLibrary";
var MdLocalMall = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"}}]})(props);
};
MdLocalMall.displayName = "MdLocalMall";
var MdLocalMovies = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"}}]})(props);
};
MdLocalMovies.displayName = "MdLocalMovies";
var MdLocalOffer = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"}}]})(props);
};
MdLocalOffer.displayName = "MdLocalOffer";
var MdLocalParking = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"}}]})(props);
};
MdLocalParking.displayName = "MdLocalParking";
var MdLocalPharmacy = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z"}}]})(props);
};
MdLocalPharmacy.displayName = "MdLocalPharmacy";
var MdLocalPhone = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}}]})(props);
};
MdLocalPhone.displayName = "MdLocalPhone";
var MdLocalPizza = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}}]})(props);
};
MdLocalPizza.displayName = "MdLocalPizza";
var MdLocalPlay = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"}}]})(props);
};
MdLocalPlay.displayName = "MdLocalPlay";
var MdLocalPostOffice = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}}]})(props);
};
MdLocalPostOffice.displayName = "MdLocalPostOffice";
var MdLocalPrintshop = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"}}]})(props);
};
MdLocalPrintshop.displayName = "MdLocalPrintshop";
var MdLocalSee = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"3.2"}},{"tag":"path","attr":{"d":"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"}}]})(props);
};
MdLocalSee.displayName = "MdLocalSee";
var MdLocalShipping = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}}]})(props);
};
MdLocalShipping.displayName = "MdLocalShipping";
var MdLocalTaxi = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"}}]})(props);
};
MdLocalTaxi.displayName = "MdLocalTaxi";
var MdMap = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"}}]})(props);
};
MdMap.displayName = "MdMap";
var MdMyLocation = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}}]})(props);
};
MdMyLocation.displayName = "MdMyLocation";
var MdNavigation = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"}}]})(props);
};
MdNavigation.displayName = "MdNavigation";
var MdNearMe = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"}}]})(props);
};
MdNearMe.displayName = "MdNearMe";
var MdPersonPin = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3.3c1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z"}}]})(props);
};
MdPersonPin.displayName = "MdPersonPin";
var MdPersonPinCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 2c1.1 0 2 .9 2 2 0 1.11-.9 2-2 2s-2-.89-2-2c0-1.1.9-2 2-2zm0 10c-1.67 0-3.14-.85-4-2.15.02-1.32 2.67-2.05 4-2.05s3.98.73 4 2.05c-.86 1.3-2.33 2.15-4 2.15z"}}]})(props);
};
MdPersonPinCircle.displayName = "MdPersonPinCircle";
var MdPinDrop = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2zM5 20v2h14v-2H5z"}}]})(props);
};
MdPinDrop.displayName = "MdPinDrop";
var MdPlace = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}}]})(props);
};
MdPlace.displayName = "MdPlace";
var MdRateReview = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z"}}]})(props);
};
MdRateReview.displayName = "MdRateReview";
var MdRestaurant = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"}}]})(props);
};
MdRestaurant.displayName = "MdRestaurant";
var MdRestaurantMenu = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"}}]})(props);
};
MdRestaurantMenu.displayName = "MdRestaurantMenu";
var MdSatellite = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.99h3C8 6.65 6.66 8 5 8V4.99zM5 12v-2c2.76 0 5-2.25 5-5.01h2C12 8.86 8.87 12 5 12zm0 6l3.5-4.5 2.5 3.01L14.5 12l4.5 6H5z"}}]})(props);
};
MdSatellite.displayName = "MdSatellite";
var MdStoreMallDirectory = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"}}]})(props);
};
MdStoreMallDirectory.displayName = "MdStoreMallDirectory";
var MdStreetview = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83z"}},{"tag":"circle","attr":{"cx":"18","cy":"6","r":"5"}},{"tag":"path","attr":{"d":"M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82C12.23 9.42 11.5 7.8 11.5 6z"}}]})(props);
};
MdStreetview.displayName = "MdStreetview";
var MdSubway = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"15.5","cy":"16","r":"1"}},{"tag":"circle","attr":{"cx":"8.5","cy":"16","r":"1"}},{"tag":"path","attr":{"d":"M7.01 9h10v5h-10zM17.8 2.8C16 2.09 13.86 2 12 2c-1.86 0-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06zm.2 13.08c0 1.45-1.18 2.62-2.63 2.62l1.13 1.12V20H15l-1.5-1.5h-2.83L9.17 20H7.5v-.38l1.12-1.12C7.18 18.5 6 17.32 6 15.88V9c0-2.63 3-3 6-3 3.32 0 6 .38 6 3v6.88z"}}]})(props);
};
MdSubway.displayName = "MdSubway";
var MdTerrain = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"}}]})(props);
};
MdTerrain.displayName = "MdTerrain";
var MdTraffic = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 10h-3V8.86c1.72-.45 3-2 3-3.86h-3V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86zm-8 9c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2 0-1.11.89-2 2-2 1.1 0 2 .89 2 2 0 1.1-.89 2-2 2z"}}]})(props);
};
MdTraffic.displayName = "MdTraffic";
var MdTrain = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}}]})(props);
};
MdTrain.displayName = "MdTrain";
var MdTram = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 16.94V8.5c0-2.79-2.61-3.4-6.01-3.49l.76-1.51H17V2H7v1.5h4.75l-.76 1.52C7.86 5.11 5 5.73 5 8.5v8.44c0 1.45 1.19 2.66 2.59 2.97L6 21.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 20h-.08c1.69 0 2.58-1.37 2.58-3.06zm-7 1.56c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5-4.5H7V9h10v5z"}}]})(props);
};
MdTram.displayName = "MdTram";
var MdTransferWithinAStation = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.49 15.5v-1.75L14 16.25l2.49 2.5V17H22v-1.5zm3.02 4.25H14v1.5h5.51V23L22 20.5 19.51 18zM9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9L3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L2 8.3V13h2V9.65l1.75-.75"}}]})(props);
};
MdTransferWithinAStation.displayName = "MdTransferWithinAStation";
var MdZoomOutMap = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z"}}]})(props);
};
MdZoomOutMap.displayName = "MdZoomOutMap";
var MdApps = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"}}]})(props);
};
MdApps.displayName = "MdApps";
var MdArrowBack = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}}]})(props);
};
MdArrowBack.displayName = "MdArrowBack";
var MdArrowDownward = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}}]})(props);
};
MdArrowDownward.displayName = "MdArrowDownward";
var MdArrowDropDown = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 10l5 5 5-5z"}}]})(props);
};
MdArrowDropDown.displayName = "MdArrowDropDown";
var MdArrowDropDownCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"}}]})(props);
};
MdArrowDropDownCircle.displayName = "MdArrowDropDownCircle";
var MdArrowDropUp = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 14l5-5 5 5z"}}]})(props);
};
MdArrowDropUp.displayName = "MdArrowDropUp";
var MdArrowForward = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}}]})(props);
};
MdArrowForward.displayName = "MdArrowForward";
var MdArrowUpward = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}}]})(props);
};
MdArrowUpward.displayName = "MdArrowUpward";
var MdCancel = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}}]})(props);
};
MdCancel.displayName = "MdCancel";
var MdCheck = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}}]})(props);
};
MdCheck.displayName = "MdCheck";
var MdChevronLeft = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}}]})(props);
};
MdChevronLeft.displayName = "MdChevronLeft";
var MdChevronRight = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}}]})(props);
};
MdChevronRight.displayName = "MdChevronRight";
var MdClose = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(props);
};
MdClose.displayName = "MdClose";
var MdExpandLess = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}}]})(props);
};
MdExpandLess.displayName = "MdExpandLess";
var MdExpandMore = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}}]})(props);
};
MdExpandMore.displayName = "MdExpandMore";
var MdFirstPage = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}}]})(props);
};
MdFirstPage.displayName = "MdFirstPage";
var MdFullscreen = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}}]})(props);
};
MdFullscreen.displayName = "MdFullscreen";
var MdFullscreenExit = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"}}]})(props);
};
MdFullscreenExit.displayName = "MdFullscreenExit";
var MdLastPage = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}}]})(props);
};
MdLastPage.displayName = "MdLastPage";
var MdMenu = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}}]})(props);
};
MdMenu.displayName = "MdMenu";
var MdMoreHoriz = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}}]})(props);
};
MdMoreHoriz.displayName = "MdMoreHoriz";
var MdMoreVert = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}}]})(props);
};
MdMoreVert.displayName = "MdMoreVert";
var MdRefresh = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}}]})(props);
};
MdRefresh.displayName = "MdRefresh";
var MdSubdirectoryArrowLeft = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"}}]})(props);
};
MdSubdirectoryArrowLeft.displayName = "MdSubdirectoryArrowLeft";
var MdSubdirectoryArrowRight = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"}}]})(props);
};
MdSubdirectoryArrowRight.displayName = "MdSubdirectoryArrowRight";
var MdUnfoldLess = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"}}]})(props);
};
MdUnfoldLess.displayName = "MdUnfoldLess";
var MdUnfoldMore = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"}}]})(props);
};
MdUnfoldMore.displayName = "MdUnfoldMore";
var MdAdb = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5v4zM16.12 4.37l2.1-2.1-.82-.83-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83 2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63zM9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"}}]})(props);
};
MdAdb.displayName = "MdAdb";
var MdAirlineSeatFlat = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 11v2H9V7h9c2.21 0 4 1.79 4 4zM2 14v2h6v2h8v-2h6v-2H2zm5.14-1.9c1.16-1.19 1.14-3.08-.04-4.24-1.19-1.16-3.08-1.14-4.24.04-1.16 1.19-1.14 3.08.04 4.24 1.19 1.16 3.08 1.14 4.24-.04z"}}]})(props);
};
MdAirlineSeatFlat.displayName = "MdAirlineSeatFlat";
var MdAirlineSeatFlatAngled = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22.25 14.29l-.69 1.89L9.2 11.71l2.08-5.66 8.56 3.09c2.1.76 3.18 3.06 2.41 5.15zM1.5 12.14L8 14.48V19h8v-1.63L20.52 19l.69-1.89-19.02-6.86-.69 1.89zm5.8-1.94c1.49-.72 2.12-2.51 1.41-4C7.99 4.71 6.2 4.08 4.7 4.8c-1.49.71-2.12 2.5-1.4 4 .71 1.49 2.5 2.12 4 1.4z"}}]})(props);
};
MdAirlineSeatFlatAngled.displayName = "MdAirlineSeatFlatAngled";
var MdAirlineSeatIndividualSuite = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3 1.35 3 3 3zm12-6h-8v7H3V7H1v10h22v-6c0-2.21-1.79-4-4-4z"}}]})(props);
};
MdAirlineSeatIndividualSuite.displayName = "MdAirlineSeatIndividualSuite";
var MdAirlineSeatLegroomExtra = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 12V3H2v9c0 2.76 2.24 5 5 5h6v-2H7c-1.66 0-3-1.34-3-3zm18.83 5.24c-.38-.72-1.29-.97-2.03-.63l-1.09.5-3.41-6.98c-.34-.68-1.03-1.12-1.79-1.12L11 9V3H5v8c0 1.66 1.34 3 3 3h7l3.41 7 3.72-1.7c.77-.36 1.1-1.3.7-2.06z"}}]})(props);
};
MdAirlineSeatLegroomExtra.displayName = "MdAirlineSeatLegroomExtra";
var MdAirlineSeatLegroomNormal = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5 12V3H3v9c0 2.76 2.24 5 5 5h6v-2H8c-1.66 0-3-1.34-3-3zm15.5 6H19v-7c0-1.1-.9-2-2-2h-5V3H6v8c0 1.65 1.35 3 3 3h7v7h4.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"}}]})(props);
};
MdAirlineSeatLegroomNormal.displayName = "MdAirlineSeatLegroomNormal";
var MdAirlineSeatLegroomReduced = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.97 19.2c.18.96-.55 1.8-1.47 1.8H14v-3l1-4H9c-1.65 0-3-1.35-3-3V3h6v6h5c1.1 0 2 .9 2 2l-2 7h1.44c.73 0 1.39.49 1.53 1.2zM5 12V3H3v9c0 2.76 2.24 5 5 5h4v-2H8c-1.66 0-3-1.34-3-3z"}}]})(props);
};
MdAirlineSeatLegroomReduced.displayName = "MdAirlineSeatLegroomReduced";
var MdAirlineSeatReclineExtra = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5.35 5.64c-.9-.64-1.12-1.88-.49-2.79.63-.9 1.88-1.12 2.79-.49.9.64 1.12 1.88.49 2.79-.64.9-1.88 1.12-2.79.49zM16 19H8.93c-1.48 0-2.74-1.08-2.96-2.54L4 7H2l1.99 9.76C4.37 19.2 6.47 21 8.94 21H16v-2zm.23-4h-4.88l-1.03-4.1c1.58.89 3.28 1.54 5.15 1.22V9.99c-1.63.31-3.44-.27-4.69-1.25L9.14 7.47c-.23-.18-.49-.3-.76-.38-.32-.09-.66-.12-.99-.06h-.02c-1.23.22-2.05 1.39-1.84 2.61l1.35 5.92C7.16 16.98 8.39 18 9.83 18h6.85l3.82 3 1.5-1.5-5.77-4.5z"}}]})(props);
};
MdAirlineSeatReclineExtra.displayName = "MdAirlineSeatReclineExtra";
var MdAirlineSeatReclineNormal = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7.59 5.41c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0 .78.78.78 2.05 0 2.83-.79.79-2.05.79-2.83 0zM6 16V7H4v9c0 2.76 2.24 5 5 5h6v-2H9c-1.66 0-3-1.34-3-3zm14 4.07L14.93 15H11.5v-3.68c1.4 1.15 3.6 2.16 5.5 2.16v-2.16c-1.66.02-3.61-.87-4.67-2.04l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C8.01 7 7 8.01 7 9.25V15c0 1.66 1.34 3 3 3h5.07l3.5 3.5L20 20.07z"}}]})(props);
};
MdAirlineSeatReclineNormal.displayName = "MdAirlineSeatReclineNormal";
var MdBluetoothAudio = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14.24 12.01l2.32 2.32c.28-.72.44-1.51.44-2.33 0-.82-.16-1.59-.43-2.31l-2.33 2.32zm5.29-5.3l-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2c.97-1.54 1.54-3.36 1.54-5.31-.01-1.89-.55-3.67-1.48-5.19zm-3.82 1L10 2H9v7.59L4.41 5 3 6.41 8.59 12 3 17.59 4.41 19 9 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM11 5.83l1.88 1.88L11 9.59V5.83zm1.88 10.46L11 18.17v-3.76l1.88 1.88z"}}]})(props);
};
MdBluetoothAudio.displayName = "MdBluetoothAudio";
var MdConfirmationNumber = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z"}}]})(props);
};
MdConfirmationNumber.displayName = "MdConfirmationNumber";
var MdDiscFull = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 16h2v-2h-2v2zm0-9v5h2V7h-2zM10 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}}]})(props);
};
MdDiscFull.displayName = "MdDiscFull";
var MdDoNotDisturb = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"}}]})(props);
};
MdDoNotDisturb.displayName = "MdDoNotDisturb";
var MdDoNotDisturbAlt = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM4 12c0-4.4 3.6-8 8-8 1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12zm8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8z"}}]})(props);
};
MdDoNotDisturbAlt.displayName = "MdDoNotDisturbAlt";
var MdDoNotDisturbOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 11v2h-1.46l4.68 4.68C21.34 16.07 22 14.11 22 12c0-5.52-4.48-10-10-10-2.11 0-4.07.66-5.68 1.78L13.54 11H17zM2.27 2.27L1 3.54l2.78 2.78C2.66 7.93 2 9.89 2 12c0 5.52 4.48 10 10 10 2.11 0 4.07-.66 5.68-1.78L20.46 23l1.27-1.27L11 11 2.27 2.27zM7 13v-2h1.46l2 2H7z"}}]})(props);
};
MdDoNotDisturbOff.displayName = "MdDoNotDisturbOff";
var MdDoNotDisturbOn = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"}}]})(props);
};
MdDoNotDisturbOn.displayName = "MdDoNotDisturbOn";
var MdDriveEta = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z"}}]})(props);
};
MdDriveEta.displayName = "MdDriveEta";
var MdEnhancedEncryption = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM16 16h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z"}}]})(props);
};
MdEnhancedEncryption.displayName = "MdEnhancedEncryption";
var MdEventAvailable = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"}}]})(props);
};
MdEventAvailable.displayName = "MdEventAvailable";
var MdEventBusy = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9.31 17l2.44-2.44L14.19 17l1.06-1.06-2.44-2.44 2.44-2.44L14.19 10l-2.44 2.44L9.31 10l-1.06 1.06 2.44 2.44-2.44 2.44L9.31 17zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"}}]})(props);
};
MdEventBusy.displayName = "MdEventBusy";
var MdEventNote = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"}}]})(props);
};
MdEventNote.displayName = "MdEventNote";
var MdFolderSpecial = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-2.06 11L15 15.28 12.06 17l.78-3.33-2.59-2.24 3.41-.29L15 8l1.34 3.14 3.41.29-2.59 2.24.78 3.33z"}}]})(props);
};
MdFolderSpecial.displayName = "MdFolderSpecial";
var MdLiveTv = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z"}}]})(props);
};
MdLiveTv.displayName = "MdLiveTv";
var MdMms = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 14l3.5-4.5 2.5 3.01L14.5 8l4.5 6H5z"}}]})(props);
};
MdMms.displayName = "MdMms";
var MdMore = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}}]})(props);
};
MdMore.displayName = "MdMore";
var MdNetworkCheck = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.9 5c-.17 0-.32.09-.41.23l-.07.15-5.18 11.65c-.16.29-.26.61-.26.96 0 1.11.9 2.01 2.01 2.01.96 0 1.77-.68 1.96-1.59l.01-.03L16.4 5.5c0-.28-.22-.5-.5-.5zM1 9l2 2c2.88-2.88 6.79-4.08 10.53-3.62l1.19-2.68C9.89 3.84 4.74 5.27 1 9zm20 2l2-2c-1.64-1.64-3.55-2.82-5.59-3.57l-.53 2.82c1.5.62 2.9 1.53 4.12 2.75zm-4 4l2-2c-.8-.8-1.7-1.42-2.66-1.89l-.55 2.92c.42.27.83.59 1.21.97zM5 13l2 2c1.13-1.13 2.56-1.79 4.03-2l1.28-2.88c-2.63-.08-5.3.87-7.31 2.88z"}}]})(props);
};
MdNetworkCheck.displayName = "MdNetworkCheck";
var MdNetworkLocked = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.5 10c.17 0 .33.03.5.05V1L1 20h13v-3c0-.89.39-1.68 1-2.23v-.27c0-2.48 2.02-4.5 4.5-4.5zm2.5 6v-1.5c0-1.38-1.12-2.5-2.5-2.5S17 13.12 17 14.5V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z"}}]})(props);
};
MdNetworkLocked.displayName = "MdNetworkLocked";
var MdNoEncryption = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 21.78L4.22 5 3 6.22l2.04 2.04C4.42 8.6 4 9.25 4 10v10c0 1.1.9 2 2 2h12c.23 0 .45-.05.66-.12L19.78 23 21 21.78zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H9.66L20 18.34V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5-2.56 0-4.64 1.93-4.94 4.4L8.9 7.24V6z"}}]})(props);
};
MdNoEncryption.displayName = "MdNoEncryption";
var MdOndemandVideo = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z"}}]})(props);
};
MdOndemandVideo.displayName = "MdOndemandVideo";
var MdPersonalVideo = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z"}}]})(props);
};
MdPersonalVideo.displayName = "MdPersonalVideo";
var MdPhoneBluetoothSpeaker = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14.71 9.5L17 7.21V11h.5l2.85-2.85L18.21 6l2.15-2.15L17.5 1H17v3.79L14.71 2.5l-.71.71L16.79 6 14 8.79l.71.71zM18 2.91l.94.94-.94.94V2.91zm0 4.3l.94.94-.94.94V7.21zm2 8.29c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"}}]})(props);
};
MdPhoneBluetoothSpeaker.displayName = "MdPhoneBluetoothSpeaker";
var MdPhoneForwarded = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 11l5-5-5-5v3h-4v4h4v3zm2 4.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"}}]})(props);
};
MdPhoneForwarded.displayName = "MdPhoneForwarded";
var MdPhoneInTalk = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"}}]})(props);
};
MdPhoneInTalk.displayName = "MdPhoneInTalk";
var MdPhoneLocked = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM20 4v-.5C20 2.12 18.88 1 17.5 1S15 2.12 15 3.5V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-.8 0h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4z"}}]})(props);
};
MdPhoneLocked.displayName = "MdPhoneLocked";
var MdPhoneMissed = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6.5 5.5L12 11l7-7-1-1-6 6-4.5-4.5H11V3H5v6h1.5V5.5zm17.21 11.17C20.66 13.78 16.54 12 12 12 7.46 12 3.34 13.78.29 16.67c-.18.18-.29.43-.29.71s.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73 1.6 0 3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.67 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71s-.12-.52-.3-.7z"}}]})(props);
};
MdPhoneMissed.displayName = "MdPhoneMissed";
var MdPhonePaused = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 3h-2v7h2V3zm3 12.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 3v7h2V3h-2z"}}]})(props);
};
MdPhonePaused.displayName = "MdPhonePaused";
var MdPower = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"}}]})(props);
};
MdPower.displayName = "MdPower";
var MdPriorityHigh = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"19","r":"2"}},{"tag":"path","attr":{"d":"M10 3h4v12h-4z"}}]})(props);
};
MdPriorityHigh.displayName = "MdPriorityHigh";
var MdRvHookup = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 17v-6c0-1.1-.9-2-2-2H7V7l-3 3 3 3v-2h4v3H4v3c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h8v-2h-2zm-9 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7-6h-4v-3h4v3zM17 2v2H9v2h8v2l3-3z"}}]})(props);
};
MdRvHookup.displayName = "MdRvHookup";
var MdSdCard = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z"}}]})(props);
};
MdSdCard.displayName = "MdSdCard";
var MdSimCardAlert = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 15h-2v-2h2v2zm0-4h-2V8h2v5z"}}]})(props);
};
MdSimCardAlert.displayName = "MdSimCardAlert";
var MdSms = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"}}]})(props);
};
MdSms.displayName = "MdSms";
var MdSmsFailed = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"}}]})(props);
};
MdSmsFailed.displayName = "MdSmsFailed";
var MdSync = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"}}]})(props);
};
MdSync.displayName = "MdSync";
var MdSyncDisabled = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 6.35V4.26c-.8.21-1.55.54-2.23.96l1.46 1.46c.25-.12.5-.24.77-.33zm-7.14-.94l2.36 2.36C4.45 8.99 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64L4 20h6v-6l-2.24 2.24C6.68 15.15 6 13.66 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.25-.77.34v2.09c.8-.21 1.55-.54 2.23-.96l2.36 2.36 1.27-1.27L4.14 4.14 2.86 5.41zM20 4h-6v6l2.24-2.24C17.32 8.85 18 10.34 18 12c0 1-.25 1.94-.68 2.77l1.46 1.46C19.55 15.01 20 13.56 20 12c0-2.21-.91-4.2-2.36-5.64L20 4z"}}]})(props);
};
MdSyncDisabled.displayName = "MdSyncDisabled";
var MdSyncProblem = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24C5.68 15.15 5 13.66 5 12c0-2.61 1.67-4.83 4-5.65V4.26C5.55 5.15 3 8.27 3 12zm8 5h2v-2h-2v2zM21 4h-6v6l2.24-2.24C18.32 8.85 19 10.34 19 12c0 2.61-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-2.21-.91-4.2-2.36-5.64L21 4zm-10 9h2V7h-2v6z"}}]})(props);
};
MdSyncProblem.displayName = "MdSyncProblem";
var MdSystemUpdate = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-1-6h-3V8h-2v5H8l4 4 4-4z"}}]})(props);
};
MdSystemUpdate.displayName = "MdSystemUpdate";
var MdTapAndPlay = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2 16v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0 4v3h3c0-1.66-1.34-3-3-3zm0-8v2c4.97 0 9 4.03 9 9h2c0-6.08-4.92-11-11-11zM17 1.01L7 1c-1.1 0-2 .9-2 2v7.37c.69.16 1.36.37 2 .64V5h10v13h-3.03c.52 1.25.84 2.59.95 4H17c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99z"}}]})(props);
};
MdTapAndPlay.displayName = "MdTapAndPlay";
var MdTimeToLeave = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z"}}]})(props);
};
MdTimeToLeave.displayName = "MdTimeToLeave";
var MdVibration = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14z"}}]})(props);
};
MdVibration.displayName = "MdVibration";
var MdVoiceChat = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12l-4-3.2V14H6V6h8v3.2L18 6v8z"}}]})(props);
};
MdVoiceChat.displayName = "MdVoiceChat";
var MdVpnLock = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 4v-.5C22 2.12 20.88 1 19.5 1S17 2.12 17 3.5V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-.8 0h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4zm-2.28 8c.04.33.08.66.08 1 0 2.08-.8 3.97-2.1 5.39-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H7v-2h2c.55 0 1-.45 1-1V8h2c1.1 0 2-.9 2-2V3.46c-.95-.3-1.95-.46-3-.46C5.48 3 1 7.48 1 13s4.48 10 10 10 10-4.48 10-10c0-.34-.02-.67-.05-1h-2.03zM10 20.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L8 16v1c0 1.1.9 2 2 2v1.93z"}}]})(props);
};
MdVpnLock.displayName = "MdVpnLock";
var MdWc = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5.5 22v-7.5H4V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v5.5H9.5V22h-4zM18 22v-6h3l-2.54-7.63C18.18 7.55 17.42 7 16.56 7h-.12c-.86 0-1.63.55-1.9 1.37L12 16h3v6h3zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z"}}]})(props);
};
MdWc.displayName = "MdWc";
var MdWifi = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"}}]})(props);
};
MdWifi.displayName = "MdWifi";
var MdAcUnit = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z"}}]})(props);
};
MdAcUnit.displayName = "MdAcUnit";
var MdAirportShuttle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 5H3c-1.1 0-2 .89-2 2v9h2c0 1.65 1.34 3 3 3s3-1.35 3-3h5.5c0 1.65 1.34 3 3 3s3-1.35 3-3H23v-5l-6-6zM3 11V7h4v4H3zm3 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7-6.5H9V7h4v4zm4.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM15 11V7h1l4 4h-5z"}}]})(props);
};
MdAirportShuttle.displayName = "MdAirportShuttle";
var MdAllInclusive = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"}}]})(props);
};
MdAllInclusive.displayName = "MdAllInclusive";
var MdBeachAccess = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13.127 14.56l1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73l2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88zM5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98zm.02-.02l-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3z"}}]})(props);
};
MdBeachAccess.displayName = "MdBeachAccess";
var MdBusinessCenter = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"}}]})(props);
};
MdBusinessCenter.displayName = "MdBusinessCenter";
var MdCasino = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z"}}]})(props);
};
MdCasino.displayName = "MdCasino";
var MdChildCare = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"14.5","cy":"10.5","r":"1.25"}},{"tag":"circle","attr":{"cx":"9.5","cy":"10.5","r":"1.25"}},{"tag":"path","attr":{"d":"M22.94 12.66c.04-.21.06-.43.06-.66s-.02-.45-.06-.66c-.25-1.51-1.36-2.74-2.81-3.17-.53-1.12-1.28-2.1-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91-1.45.43-2.56 1.65-2.81 3.17-.04.21-.06.43-.06.66s.02.45.06.66c.25 1.51 1.36 2.74 2.81 3.17.52 1.11 1.27 2.09 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89 1.44-.43 2.55-1.65 2.8-3.17zM19 14c-.1 0-.19-.02-.29-.03-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86-.1.01-.19.03-.29.03-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86.1-.01.19-.03.29-.03 1.1 0 2 .9 2 2s-.9 2-2 2zM7.5 14c.76 1.77 2.49 3 4.5 3s3.74-1.23 4.5-3h-9z"}}]})(props);
};
MdChildCare.displayName = "MdChildCare";
var MdChildFriendly = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 2v8h8c0-4.42-3.58-8-8-8zm6.32 13.89C20.37 14.54 21 12.84 21 11H6.44l-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20zm9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20z"}}]})(props);
};
MdChildFriendly.displayName = "MdChildFriendly";
var MdFitnessCenter = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"}}]})(props);
};
MdFitnessCenter.displayName = "MdFitnessCenter";
var MdFreeBreakfast = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"}}]})(props);
};
MdFreeBreakfast.displayName = "MdFreeBreakfast";
var MdGolfCourse = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"19.5","cy":"19.5","r":"1.5"}},{"tag":"path","attr":{"d":"M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z"}}]})(props);
};
MdGolfCourse.displayName = "MdGolfCourse";
var MdHotTub = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"7","cy":"6","r":"2"}},{"tag":"path","attr":{"d":"M11.15 12c-.31-.22-.59-.46-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C6.01 9 5 10.01 5 11.25V12H2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8H11.15zM7 20H5v-6h2v6zm4 0H9v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6zm-.35-14.14l-.07-.07c-.57-.62-.82-1.41-.67-2.2L18 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71zm-4 0l-.07-.07c-.57-.62-.82-1.41-.67-2.2L14 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71z"}}]})(props);
};
MdHotTub.displayName = "MdHotTub";
var MdKitchen = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z"}}]})(props);
};
MdKitchen.displayName = "MdKitchen";
var MdPool = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64-1.11 0-1.73-.37-2.18-.64-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.67 12c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36z"}},{"tag":"circle","attr":{"cx":"16.5","cy":"5.5","r":"2.5"}}]})(props);
};
MdPool.displayName = "MdPool";
var MdRoomService = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2 17h20v2H2zm11.84-9.21c.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z"}}]})(props);
};
MdRoomService.displayName = "MdRoomService";
var MdSmokeFree = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2 6l6.99 7H2v3h9.99l7 7 1.26-1.25-17-17zm18.5 7H22v3h-1.5zM18 13h1.5v3H18zm.85-8.12c.62-.61 1-1.45 1-2.38h-1.5c0 1.02-.83 1.85-1.85 1.85v1.5c2.24 0 4 1.83 4 4.07V12H22V9.92c0-2.23-1.28-4.15-3.15-5.04zM14.5 8.7h1.53c1.05 0 1.97.74 1.97 2.05V12h1.5v-1.59c0-1.8-1.6-3.16-3.47-3.16H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75V2c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35zm2.5 7.23V13h-2.93z"}}]})(props);
};
MdSmokeFree.displayName = "MdSmokeFree";
var MdSmokingRooms = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2 16h15v3H2zm18.5 0H22v3h-1.5zM18 16h1.5v3H18zm.85-8.27c.62-.61 1-1.45 1-2.38C19.85 3.5 18.35 2 16.5 2v1.5c1.02 0 1.85.83 1.85 1.85S17.52 7.2 16.5 7.2v1.5c2.24 0 4 1.83 4 4.07V15H22v-2.24c0-2.22-1.28-4.14-3.15-5.03zm-2.82 2.47H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35h1.53c1.05 0 1.97.74 1.97 2.05V15h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16z"}}]})(props);
};
MdSmokingRooms.displayName = "MdSmokingRooms";
var MdSpa = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8.55 12c-1.07-.71-2.25-1.27-3.53-1.61 1.28.34 2.46.9 3.53 1.61zm10.43-1.61c-1.29.34-2.49.91-3.57 1.64 1.08-.73 2.28-1.3 3.57-1.64z"}},{"tag":"path","attr":{"d":"M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63-2.14 2.14-3.32 4.86-3.55 7.63 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63zm-6.5 2.65c-.14-.1-.3-.19-.45-.29.15.11.31.19.45.29zm6.42-.25c-.13.09-.27.16-.4.26.13-.1.27-.17.4-.26zM12 15.45C9.85 12.17 6.18 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45z"}}]})(props);
};
MdSpa.displayName = "MdSpa";
var MdCake = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z"}}]})(props);
};
MdCake.displayName = "MdCake";
var MdDomain = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"}}]})(props);
};
MdDomain.displayName = "MdDomain";
var MdGroup = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}}]})(props);
};
MdGroup.displayName = "MdGroup";
var MdGroupAdd = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"}}]})(props);
};
MdGroupAdd.displayName = "MdGroupAdd";
var MdLocationCity = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"}}]})(props);
};
MdLocationCity.displayName = "MdLocationCity";
var MdMood = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"}}]})(props);
};
MdMood.displayName = "MdMood";
var MdMoodBad = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 3c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"}}]})(props);
};
MdMoodBad.displayName = "MdMoodBad";
var MdNotifications = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}}]})(props);
};
MdNotifications.displayName = "MdNotifications";
var MdNotificationsActive = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"}}]})(props);
};
MdNotificationsActive.displayName = "MdNotificationsActive";
var MdNotificationsNone = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}}]})(props);
};
MdNotificationsNone.displayName = "MdNotificationsNone";
var MdNotificationsOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z"}}]})(props);
};
MdNotificationsOff.displayName = "MdNotificationsOff";
var MdNotificationsPaused = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2zm-3.5-6.2l-2.8 3.4h2.8V15h-5v-1.8l2.8-3.4H9.5V8h5v1.8z"}}]})(props);
};
MdNotificationsPaused.displayName = "MdNotificationsPaused";
var MdPages = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1 1-4zm9 4l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2z"}}]})(props);
};
MdPages.displayName = "MdPages";
var MdPartyMode = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 3c1.63 0 3.06.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H7.1c-.06-.32-.1-.66-.1-1 0-2.76 2.24-5 5-5zm0 10c-1.63 0-3.06-.79-3.98-2H12c1.66 0 3-1.34 3-3 0-.35-.07-.69-.18-1h2.08c.07.32.1.66.1 1 0 2.76-2.24 5-5 5z"}}]})(props);
};
MdPartyMode.displayName = "MdPartyMode";
var MdPeople = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}}]})(props);
};
MdPeople.displayName = "MdPeople";
var MdPeopleOutline = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"}}]})(props);
};
MdPeopleOutline.displayName = "MdPeopleOutline";
var MdPerson = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}}]})(props);
};
MdPerson.displayName = "MdPerson";
var MdPersonAdd = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}}]})(props);
};
MdPersonAdd.displayName = "MdPersonAdd";
var MdPersonOutline = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"}}]})(props);
};
MdPersonOutline.displayName = "MdPersonOutline";
var MdPlusOne = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z"}}]})(props);
};
MdPlusOne.displayName = "MdPlusOne";
var MdPoll = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"}}]})(props);
};
MdPoll.displayName = "MdPoll";
var MdPublic = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"}}]})(props);
};
MdPublic.displayName = "MdPublic";
var MdSchool = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"}}]})(props);
};
MdSchool.displayName = "MdSchool";
var MdSentimentDissatisfied = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"15.5","cy":"9.5","r":"1.5"}},{"tag":"circle","attr":{"cx":"8.5","cy":"9.5","r":"1.5"}},{"tag":"path","attr":{"d":"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"}}]})(props);
};
MdSentimentDissatisfied.displayName = "MdSentimentDissatisfied";
var MdSentimentNeutral = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 14h6v1.5H9z"}},{"tag":"circle","attr":{"cx":"15.5","cy":"9.5","r":"1.5"}},{"tag":"circle","attr":{"cx":"8.5","cy":"9.5","r":"1.5"}},{"tag":"path","attr":{"d":"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}}]})(props);
};
MdSentimentNeutral.displayName = "MdSentimentNeutral";
var MdSentimentSatisfied = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"15.5","cy":"9.5","r":"1.5"}},{"tag":"circle","attr":{"cx":"8.5","cy":"9.5","r":"1.5"}},{"tag":"path","attr":{"d":"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2z"}}]})(props);
};
MdSentimentSatisfied.displayName = "MdSentimentSatisfied";
var MdSentimentVeryDissatisfied = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.18-12.24l-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06zM7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zM12 14c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"}}]})(props);
};
MdSentimentVeryDissatisfied.displayName = "MdSentimentVeryDissatisfied";
var MdSentimentVerySatisfied = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"}}]})(props);
};
MdSentimentVerySatisfied.displayName = "MdSentimentVerySatisfied";
var MdShare = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}}]})(props);
};
MdShare.displayName = "MdShare";
var MdWhatshot = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"}}]})(props);
};
MdWhatshot.displayName = "MdWhatshot";
var MdCheckBox = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}}]})(props);
};
MdCheckBox.displayName = "MdCheckBox";
var MdCheckBoxOutlineBlank = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}}]})(props);
};
MdCheckBoxOutlineBlank.displayName = "MdCheckBoxOutlineBlank";
var MdIndeterminateCheckBox = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}}]})(props);
};
MdIndeterminateCheckBox.displayName = "MdIndeterminateCheckBox";
var MdRadioButtonChecked = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}}]})(props);
};
MdRadioButtonChecked.displayName = "MdRadioButtonChecked";
var MdRadioButtonUnchecked = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}}]})(props);
};
MdRadioButtonUnchecked.displayName = "MdRadioButtonUnchecked";
var MdStar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}}]})(props);
};
MdStar.displayName = "MdStar";
var MdStarBorder = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}}]})(props);
};
MdStarBorder.displayName = "MdStarBorder";
var MdStarHalf = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}}]})(props);
};
MdStarHalf.displayName = "MdStarHalf";


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/[channel].js":
/*!****************************!*\
  !*** ./pages/[channel].js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return channel; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_EpisodeList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/EpisodeList */ "./components/EpisodeList.js");
/* harmony import */ var _components_PodcastGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PodcastGrid */ "./components/PodcastGrid.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_error */ "./pages/_error.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _contexts_FavsContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contexts/FavsContext */ "./contexts/FavsContext.js");
/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useLocalStorage */ "./hooks/useLocalStorage.js");

var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/pages/[channel].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var __N_SSP = true;
function channel(_ref) {
  var channel = _ref.channel,
      audioClips = _ref.audioClips,
      series = _ref.series,
      statusCode = _ref.statusCode;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_FavsContext__WEBPACK_IMPORTED_MODULE_9__["FavsContext"]),
      myList = _useContext.myList,
      Follow = _useContext.Follow,
      Unfollow = _useContext.Unfollow;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      bannerImage = _useState[0],
      setBannerImage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isFollowed = _useState2[0],
      setIsFollowed = _useState2[1];

  var _useLocalStorage = Object(_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_10__["useLocalStorage"])('favs', []),
      _useLocalStorage2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useLocalStorage, 2),
      setLocalStorage = _useLocalStorage2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (channel.urls.banner_image.original === null) {
      setBannerImage(channel.urls.logo_image.original);
    } else {
      setBannerImage(channel.urls.banner_image.original);
    }

    for (var i = 0; i < myList.length; i++) {
      if (myList[i].id == channel.id) {
        setIsFollowed(true);
        break;
      }
    }

    setLocalStorage(myList);
  }, [myList]);

  if (statusCode !== 200) {
    return __jsx(_error__WEBPACK_IMPORTED_MODULE_7__["default"], {
      statusCode: statusCode,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 12
      }
    });
  }

  var handleFollowClick = function handleFollowClick() {
    Follow(channel);
  };

  var handleUnfollowClick = function handleUnfollowClick() {
    Unfollow(channel);
    setIsFollowed(false);
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "".concat(channel.title, " | Podcast"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      backgroundImage: "url(".concat(bannerImage, ")")
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
      backgroundImage: "url(".concat(bannerImage, ")")
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
  }, __jsx(_components_PodcastGrid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    channels: series,
    title: "series de ".concat(channel.title),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  })), __jsx(_components_EpisodeList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    audioClips: audioClips,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
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

/***/ 1:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F%5Bchannel%5D&absolutePagePath=%2FUsers%2Fedgarlopez%2FCode%2Fcourses%2Freact%2Fnext%2Fpodcasts%2Fpages%2F%5Bchannel%5D.js&hotRouterUpdates=true ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F%5Bchannel%5D&absolutePagePath=%2FUsers%2Fedgarlopez%2FCode%2Fcourses%2Freact%2Fnext%2Fpodcasts%2Fpages%2F%5Bchannel%5D.js&hotRouterUpdates=true! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F%5Bchannel%5D&absolutePagePath=%2FUsers%2Fedgarlopez%2FCode%2Fcourses%2Freact%2Fnext%2Fpodcasts%2Fpages%2F%5Bchannel%5D.js&hotRouterUpdates=true!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=[channel].js.map