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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyIsIm9wdGlvbnMiLCJWaWV3IiwicHJvcGVydGllcyIsImNsYXNzTmFtZSIsImJvdHRvbUxlZnREaXYiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEseUIsR0FBOEJDLGMsQ0FBOUJELHlCOztBQUVSLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLFVBQUQsRUFBZ0I7QUFDckIsTUFBRUMsU0FBRixHQUFnQkQsVUFBaEIsQ0FBRUMsU0FBRjtBQUFBLE1BQ0FDLGFBREEsZ0JBR0Usb0JBQUMsc0JBQUQsT0FIRjtBQUFBLE1BTUFKLE9BTkEsR0FNVTtBQUNSRCxJQUFBQSx5QkFBeUIsRUFBekJBO0FBRFEsR0FOVjtBQVVOLHNCQUVFO0FBQUssSUFBQSxTQUFTLFlBQUtJLFNBQUw7QUFBZCxrQkFDRSxvQkFBQyxpQkFBRCxxQkFDRSxvQkFBQyxnQkFBRCxxQkFDRSxvQkFBQyxjQUFELHFCQUNFLG9CQUFDLGtCQUFELE9BREYsZUFFRSxvQkFBQyxrQkFBRCxPQUZGLEVBR0dDLGFBSEgsQ0FERixDQURGLGVBUUUsb0JBQUMsaUJBQUQ7QUFBeUIsSUFBQSxPQUFPLEVBQUVKO0FBQWxDLElBUkYsZUFTRSxvQkFBQyxnQkFBRCxxQkFDRSxvQkFBQyxjQUFELHFCQUNFLG9CQUFDLGFBQUQscUJBQ0Usb0JBQUMsaUJBQUQscUJBQ0Usb0JBQUMsZ0JBQUQsT0FERixlQUVFLG9CQUFDLGtCQUFEO0FBQTBCLElBQUEsT0FBTyxFQUFFQTtBQUFuQyxJQUZGLGVBR0Usb0JBQUMsaUJBQUQscUJBQ0Usb0JBQUMsY0FBRCxxQkFDRSxvQkFBQyxnQkFBRCxPQURGLENBREYsQ0FIRixDQURGLENBREYsZUFZRSxvQkFBQyxnQkFBRDtBQUEyQixJQUFBLGFBQWEsRUFBRUksYUFBMUM7QUFBeUQsSUFBQSxPQUFPLEVBQUVKO0FBQWxFLElBWkYsZUFhRSxvQkFBQyxrQkFBRCxPQWJGLENBREYsQ0FURixDQURGLENBRkY7QUFpQ0QsQ0E1Q0Q7O2VBOENlLCtCQUFVQyxJQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIG9wdGlvbnMgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuaW1wb3J0IEJsdWVSb3dEaXYgZnJvbSBcIi4vZGl2L3Jvdy9ibHVlXCI7XG5pbXBvcnQgWWVsbG93Um93RGl2IGZyb20gXCIuL2Rpdi9yb3cveWVsbG93XCI7XG5pbXBvcnQgQm90dG9tTGVmdERpdiBmcm9tIFwiLi9kaXYvYm90dG9tTGVmdFwiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvbGVmdFwiO1xuaW1wb3J0IFJpZ2h0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL3JpZ2h0XCI7XG5pbXBvcnQgUHNldWRvU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL3BzZXVkb1wiO1xuaW1wb3J0IEJvdHRvbVNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9ib3R0b21cIjtcbmltcG9ydCBMZWZ0VmVydGljYWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvdmVydGljYWwvbGVmdFwiO1xuaW1wb3J0IFJpZ2h0VmVydGljYWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvdmVydGljYWwvcmlnaHRcIjtcbmltcG9ydCBNYWluSG9yaXpvbnRhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci9ob3Jpem9udGFsL21haW5cIjtcblxuY29uc3QgeyBFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HIH0gPSBvcHRpb25zO1xuXG5jb25zdCBWaWV3ID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIGJvdHRvbUxlZnREaXYgPVxuXG4gICAgICAgICAgPEJvdHRvbUxlZnREaXYgLz5cblxuICAgICAgICAsXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lOR1xuICAgICAgICB9O1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSB2aWV3YH0+XG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxZZWxsb3dSb3dEaXYgLz5cbiAgICAgICAgICAgIDxQc2V1ZG9TcGxpdHRlckRpdiAvPlxuICAgICAgICAgICAge2JvdHRvbUxlZnREaXZ9XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPExlZnRWZXJ0aWNhbFNwbGl0dGVyRGl2IG9wdGlvbnM9e29wdGlvbnN9IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uRGl2IC8+XG4gICAgICAgICAgICAgICAgPFJpZ2h0VmVydGljYWxTcGxpdHRlckRpdiBvcHRpb25zPXtvcHRpb25zfSAvPlxuICAgICAgICAgICAgICAgIDxSaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCbHVlUm93RGl2IC8+XG4gICAgICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICAgICAgPC9SaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8L0NvbHVtbnNEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICAgIDxNYWluSG9yaXpvbnRhbFNwbGl0dGVyRGl2IGJvdHRvbUxlZnREaXY9e2JvdHRvbUxlZnREaXZ9IG9wdGlvbnM9e29wdGlvbnN9IC8+XG4gICAgICAgICAgICA8Qm90dG9tU2l6ZWFibGVEaXYgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDY0cmVtO1xuICBoZWlnaHQ6IDY0cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBcbmA7XG4iXX0=