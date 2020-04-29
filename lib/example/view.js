"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _index = require("../index");

var _blue = _interopRequireDefault(require("./div/row/blue"));

var _yellow = _interopRequireDefault(require("./div/row/yellow"));

var _bottomLeft = _interopRequireDefault(require("./div/bottomLeft"));

var _main = _interopRequireDefault(require("./div/columns/main"));

var _left = _interopRequireDefault(require("./div/splitter/left"));

var _main2 = _interopRequireDefault(require("./div/splitter/main"));

var _left2 = _interopRequireDefault(require("./div/sizeable/left"));

var _right = _interopRequireDefault(require("./div/splitter/right"));

var _dummy = _interopRequireDefault(require("./div/splitter/dummy"));

var _right2 = _interopRequireDefault(require("./div/sizeable/right"));

var _bottom = _interopRequireDefault(require("./div/sizeable/bottom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 64rem;\n  height: 64rem;\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ESCAPE_KEY_STOPS_DRAGGING = _index.options.ESCAPE_KEY_STOPS_DRAGGING;

var View = function View(properties) {
  var className = properties.className,
      bottomLeftDiv = /*#__PURE__*/React.createElement(_bottomLeft["default"], null),
      options = {
    ESCAPE_KEY_STOPS_DRAGGING: ESCAPE_KEY_STOPS_DRAGGING
  };
  return (/*#__PURE__*/React.createElement("div", {
      className: "".concat(className, " view")
    }, /*#__PURE__*/React.createElement(_main["default"], null, /*#__PURE__*/React.createElement(_left2["default"], null, /*#__PURE__*/React.createElement(_index.RowsDiv, null, /*#__PURE__*/React.createElement(_yellow["default"], null), /*#__PURE__*/React.createElement(_dummy["default"], null), bottomLeftDiv)), /*#__PURE__*/React.createElement(_left["default"], {
      options: options
    }), /*#__PURE__*/React.createElement(_index.ColumnDiv, null, /*#__PURE__*/React.createElement(_index.RowsDiv, null, /*#__PURE__*/React.createElement(_index.RowDiv, null, /*#__PURE__*/React.createElement(_index.ColumnsDiv, null, /*#__PURE__*/React.createElement(_index.ColumnDiv, null), /*#__PURE__*/React.createElement(_right["default"], {
      options: options
    }), /*#__PURE__*/React.createElement(_right2["default"], null, /*#__PURE__*/React.createElement(_index.RowsDiv, null, /*#__PURE__*/React.createElement(_blue["default"], null))))), /*#__PURE__*/React.createElement(_main2["default"], {
      bottomLeftDiv: bottomLeftDiv,
      options: options
    }), /*#__PURE__*/React.createElement(_bottom["default"], null)))))
  );
};

var _default = (0, _easyWithStyle["default"])(View)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyIsIm9wdGlvbnMiLCJWaWV3IiwicHJvcGVydGllcyIsImNsYXNzTmFtZSIsImJvdHRvbUxlZnREaXYiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEseUIsR0FBOEJDLGMsQ0FBOUJELHlCOztBQUVSLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLFVBQUQsRUFBZ0I7QUFDckIsTUFBRUMsU0FBRixHQUFnQkQsVUFBaEIsQ0FBRUMsU0FBRjtBQUFBLE1BQ0FDLGFBREEsZ0JBR0Usb0JBQUMsc0JBQUQsT0FIRjtBQUFBLE1BTUFKLE9BTkEsR0FNVTtBQUNSRCxJQUFBQSx5QkFBeUIsRUFBekJBO0FBRFEsR0FOVjtBQVVOLHVCQUVFO0FBQUssTUFBQSxTQUFTLFlBQUtJLFNBQUw7QUFBZCxvQkFDRSxvQkFBQyxnQkFBRCxxQkFDRSxvQkFBQyxpQkFBRCxxQkFDRSxvQkFBQyxjQUFELHFCQUNFLG9CQUFDLGtCQUFELE9BREYsZUFFRSxvQkFBQyxpQkFBRCxPQUZGLEVBR0dDLGFBSEgsQ0FERixDQURGLGVBUUUsb0JBQUMsZ0JBQUQ7QUFBaUIsTUFBQSxPQUFPLEVBQUVKO0FBQTFCLE1BUkYsZUFTRSxvQkFBQyxnQkFBRCxxQkFDRSxvQkFBQyxjQUFELHFCQUNFLG9CQUFDLGFBQUQscUJBQ0Usb0JBQUMsaUJBQUQscUJBQ0Usb0JBQUMsZ0JBQUQsT0FERixlQUVFLG9CQUFDLGlCQUFEO0FBQWtCLE1BQUEsT0FBTyxFQUFFQTtBQUEzQixNQUZGLGVBR0Usb0JBQUMsa0JBQUQscUJBQ0Usb0JBQUMsY0FBRCxxQkFDRSxvQkFBQyxnQkFBRCxPQURGLENBREYsQ0FIRixDQURGLENBREYsZUFZRSxvQkFBQyxpQkFBRDtBQUFpQixNQUFBLGFBQWEsRUFBRUksYUFBaEM7QUFBK0MsTUFBQSxPQUFPLEVBQUVKO0FBQXhELE1BWkYsZUFhRSxvQkFBQyxrQkFBRCxPQWJGLENBREYsQ0FURixDQURGO0FBRkY7QUFpQ0QsQ0E1Q0Q7O2VBOENlLCtCQUFVQyxJQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIG9wdGlvbnMgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuaW1wb3J0IEJsdWVSb3dEaXYgZnJvbSBcIi4vZGl2L3Jvdy9ibHVlXCI7XG5pbXBvcnQgWWVsbG93Um93RGl2IGZyb20gXCIuL2Rpdi9yb3cveWVsbG93XCI7XG5pbXBvcnQgQm90dG9tTGVmdERpdiBmcm9tIFwiLi9kaXYvYm90dG9tTGVmdFwiO1xuaW1wb3J0IE1haW5Db2x1bW5zRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5zL21haW5cIjtcbmltcG9ydCBMZWZ0U3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL2xlZnRcIjtcbmltcG9ydCBNYWluU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL21haW5cIjtcbmltcG9ydCBMZWZ0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL2xlZnRcIjtcbmltcG9ydCBSaWdodFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci9yaWdodFwiO1xuaW1wb3J0IER1bW15U3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL2R1bW15XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvcmlnaHRcIjtcbmltcG9ydCBCb3R0b21TaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvYm90dG9tXCI7XG5cbmNvbnN0IHsgRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyB9ID0gb3B0aW9ucztcblxuY29uc3QgVmlldyA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICBib3R0b21MZWZ0RGl2ID1cblxuICAgICAgICAgIDxCb3R0b21MZWZ0RGl2IC8+XG5cbiAgICAgICAgLFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkdcbiAgICAgICAgfTtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gdmlld2B9PlxuICAgICAgPE1haW5Db2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFllbGxvd1Jvd0RpdiAvPlxuICAgICAgICAgICAgPER1bW15U3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgICAgIHtib3R0b21MZWZ0RGl2fVxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxMZWZ0U3BsaXR0ZXJEaXYgb3B0aW9ucz17b3B0aW9uc30gLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSb3dEaXY+XG4gICAgICAgICAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICAgICAgICAgIDxDb2x1bW5EaXYgLz5cbiAgICAgICAgICAgICAgICA8UmlnaHRTcGxpdHRlckRpdiBvcHRpb25zPXtvcHRpb25zfSAvPlxuICAgICAgICAgICAgICAgIDxSaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCbHVlUm93RGl2IC8+XG4gICAgICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICAgICAgPC9SaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8L0NvbHVtbnNEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICAgIDxNYWluU3BsaXR0ZXJEaXYgYm90dG9tTGVmdERpdj17Ym90dG9tTGVmdERpdn0gb3B0aW9ucz17b3B0aW9uc30gLz5cbiAgICAgICAgICAgIDxCb3R0b21TaXplYWJsZURpdiAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L01haW5Db2x1bW5zRGl2PlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDY0cmVtO1xuICBoZWlnaHQ6IDY0cmVtO1xuICBcbmA7XG4iXX0=