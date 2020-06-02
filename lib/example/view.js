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

var _left = _interopRequireDefault(require("./div/sizeable/left"));

var _right = _interopRequireDefault(require("./div/sizeable/right"));

var _pseudo = _interopRequireDefault(require("./div/splitter/pseudo"));

var _bottom = _interopRequireDefault(require("./div/sizeable/bottom"));

var _left2 = _interopRequireDefault(require("./div/splitter/vertical/left"));

var _right2 = _interopRequireDefault(require("./div/splitter/vertical/right"));

var _main = _interopRequireDefault(require("./div/splitter/horizontal/main"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 64rem;\n  height: 64rem;\n  display: flex;\n  \n"]);

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
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(className, " view")
  }, /*#__PURE__*/React.createElement(_index.ColumnsDiv, null, /*#__PURE__*/React.createElement(_left["default"], null, /*#__PURE__*/React.createElement(_index.RowsDiv, null, /*#__PURE__*/React.createElement(_yellow["default"], null), /*#__PURE__*/React.createElement(_pseudo["default"], null), bottomLeftDiv)), /*#__PURE__*/React.createElement(_left2["default"], {
    options: options
  }), /*#__PURE__*/React.createElement(_index.ColumnDiv, null, /*#__PURE__*/React.createElement(_index.RowsDiv, null, /*#__PURE__*/React.createElement(_index.RowDiv, null, /*#__PURE__*/React.createElement(_index.ColumnsDiv, null, /*#__PURE__*/React.createElement(_index.ColumnDiv, null), /*#__PURE__*/React.createElement(_right2["default"], {
    options: options
  }), /*#__PURE__*/React.createElement(_right["default"], null, /*#__PURE__*/React.createElement(_index.RowsDiv, null, /*#__PURE__*/React.createElement(_blue["default"], null))))), /*#__PURE__*/React.createElement(_main["default"], {
    bottomLeftDiv: bottomLeftDiv,
    options: options
  }), /*#__PURE__*/React.createElement(_bottom["default"], null)))));
};

var _default = (0, _easyWithStyle["default"])(View)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyIsIm9wdGlvbnMiLCJWaWV3IiwicHJvcGVydGllcyIsImNsYXNzTmFtZSIsImJvdHRvbUxlZnREaXYiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEseUIsR0FBOEJDLGMsQ0FBOUJELHlCOztBQUVSLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLFVBQUQsRUFBZ0I7QUFDckIsTUFBRUMsU0FBRixHQUFnQkQsVUFBaEIsQ0FBRUMsU0FBRjtBQUFBLE1BQ0FDLGFBREEsZ0JBR0Usb0JBQUMsc0JBQUQsT0FIRjtBQUFBLE1BTUFKLE9BTkEsR0FNVTtBQUNSRCxJQUFBQSx5QkFBeUIsRUFBekJBO0FBRFEsR0FOVjtBQVVOLHNCQUVFO0FBQUssSUFBQSxTQUFTLFlBQUtJLFNBQUw7QUFBZCxrQkFDRSxvQkFBQyxpQkFBRCxxQkFDRSxvQkFBQyxnQkFBRCxxQkFDRSxvQkFBQyxjQUFELHFCQUNFLG9CQUFDLGtCQUFELE9BREYsZUFFRSxvQkFBQyxrQkFBRCxPQUZGLEVBR0dDLGFBSEgsQ0FERixDQURGLGVBUUUsb0JBQUMsaUJBQUQ7QUFBeUIsSUFBQSxPQUFPLEVBQUVKO0FBQWxDLElBUkYsZUFTRSxvQkFBQyxnQkFBRCxxQkFDRSxvQkFBQyxjQUFELHFCQUNFLG9CQUFDLGFBQUQscUJBQ0Usb0JBQUMsaUJBQUQscUJBQ0Usb0JBQUMsZ0JBQUQsT0FERixlQUVFLG9CQUFDLGtCQUFEO0FBQTBCLElBQUEsT0FBTyxFQUFFQTtBQUFuQyxJQUZGLGVBR0Usb0JBQUMsaUJBQUQscUJBQ0Usb0JBQUMsY0FBRCxxQkFDRSxvQkFBQyxnQkFBRCxPQURGLENBREYsQ0FIRixDQURGLENBREYsZUFZRSxvQkFBQyxnQkFBRDtBQUEyQixJQUFBLGFBQWEsRUFBRUksYUFBMUM7QUFBeUQsSUFBQSxPQUFPLEVBQUVKO0FBQWxFLElBWkYsZUFhRSxvQkFBQyxrQkFBRCxPQWJGLENBREYsQ0FURixDQURGLENBRkY7QUFpQ0QsQ0E1Q0Q7O2VBOENlLCtCQUFVQyxJQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIG9wdGlvbnMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBCbHVlUm93RGl2IGZyb20gXCIuL2Rpdi9yb3cvYmx1ZVwiO1xuaW1wb3J0IFllbGxvd1Jvd0RpdiBmcm9tIFwiLi9kaXYvcm93L3llbGxvd1wiO1xuaW1wb3J0IEJvdHRvbUxlZnREaXYgZnJvbSBcIi4vZGl2L2JvdHRvbUxlZnRcIjtcbmltcG9ydCBMZWZ0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL2xlZnRcIjtcbmltcG9ydCBSaWdodFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IFBzZXVkb1NwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci9wc2V1ZG9cIjtcbmltcG9ydCBCb3R0b21TaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvYm90dG9tXCI7XG5pbXBvcnQgTGVmdFZlcnRpY2FsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL3ZlcnRpY2FsL2xlZnRcIjtcbmltcG9ydCBSaWdodFZlcnRpY2FsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL3ZlcnRpY2FsL3JpZ2h0XCI7XG5pbXBvcnQgTWFpbkhvcml6b250YWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvaG9yaXpvbnRhbC9tYWluXCI7XG5cbmNvbnN0IHsgRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyB9ID0gb3B0aW9ucztcblxuY29uc3QgVmlldyA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICBib3R0b21MZWZ0RGl2ID1cblxuICAgICAgICAgIDxCb3R0b21MZWZ0RGl2IC8+XG5cbiAgICAgICAgLFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkdcbiAgICAgICAgfTtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gdmlld2B9PlxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8WWVsbG93Um93RGl2IC8+XG4gICAgICAgICAgICA8UHNldWRvU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgICAgIHtib3R0b21MZWZ0RGl2fVxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxMZWZ0VmVydGljYWxTcGxpdHRlckRpdiBvcHRpb25zPXtvcHRpb25zfSAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgICAgICAgICAgPENvbHVtbkRpdiAvPlxuICAgICAgICAgICAgICAgIDxSaWdodFZlcnRpY2FsU3BsaXR0ZXJEaXYgb3B0aW9ucz17b3B0aW9uc30gLz5cbiAgICAgICAgICAgICAgICA8UmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgICAgICA8Qmx1ZVJvd0RpdiAvPlxuICAgICAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgICAgIDwvUmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPC9Db2x1bW5zRGl2PlxuICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgICA8TWFpbkhvcml6b250YWxTcGxpdHRlckRpdiBib3R0b21MZWZ0RGl2PXtib3R0b21MZWZ0RGl2fSBvcHRpb25zPXtvcHRpb25zfSAvPlxuICAgICAgICAgICAgPEJvdHRvbVNpemVhYmxlRGl2IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiA2NHJlbTtcbiAgaGVpZ2h0OiA2NHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgXG5gO1xuIl19