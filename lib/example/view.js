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

var _left = _interopRequireDefault(require("./div/sizeable/left"));

var _right = _interopRequireDefault(require("./div/sizeable/right"));

var _bottom = _interopRequireDefault(require("./div/sizeable/bottom"));

var _left2 = _interopRequireDefault(require("./div/splitter/vertical/left"));

var _right2 = _interopRequireDefault(require("./div/splitter/vertical/right"));

var _main2 = _interopRequireDefault(require("./div/splitter/horizontal/main"));

var _dummy = _interopRequireDefault(require("./div/splitter/horizontal/dummy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 64rem;\n  height: 64rem;\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var View = function View(properties) {
  var className = properties.className,
      bottomLeftDiv = /*#__PURE__*/React.createElement(_bottomLeft["default"], null),
      dragHandler = function dragHandler(height) {
    return bottomLeftDiv.setHeight(height);
  };

  return (/*#__PURE__*/React.createElement("div", {
      className: "".concat(className, " view")
    }, /*#__PURE__*/React.createElement(_main["default"], null, /*#__PURE__*/React.createElement(_left["default"], null, /*#__PURE__*/React.createElement(_index.SizeableRowsDiv, null, /*#__PURE__*/React.createElement(_yellow["default"], null), /*#__PURE__*/React.createElement(_dummy["default"], null), bottomLeftDiv)), /*#__PURE__*/React.createElement(_left2["default"], {
      afterSizeableElement: true
    }), /*#__PURE__*/React.createElement(_index.ColumnDiv, null, /*#__PURE__*/React.createElement(_index.RowsDiv, null, /*#__PURE__*/React.createElement(_index.RowDiv, null, /*#__PURE__*/React.createElement(_index.ColumnsDiv, null, /*#__PURE__*/React.createElement(_index.ColumnDiv, null), /*#__PURE__*/React.createElement(_right2["default"], {
      beforeSizeableElement: true
    }), /*#__PURE__*/React.createElement(_right["default"], null, /*#__PURE__*/React.createElement(_index.SizeableRowsDiv, null, /*#__PURE__*/React.createElement(_blue["default"], null))))), /*#__PURE__*/React.createElement(_main2["default"], {
      onDrag: dragHandler,
      beforeSizeableElement: true
    }), /*#__PURE__*/React.createElement(_bottom["default"], null)))))
  );
};

var _default = (0, _easyWithStyle["default"])(View)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsInByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJib3R0b21MZWZ0RGl2IiwiZHJhZ0hhbmRsZXIiLCJoZWlnaHQiLCJzZXRIZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxVQUFELEVBQWdCO0FBQ3JCLE1BQUVDLFNBQUYsR0FBZ0JELFVBQWhCLENBQUVDLFNBQUY7QUFBQSxNQUNBQyxhQURBLGdCQUdFLG9CQUFDLHNCQUFELE9BSEY7QUFBQSxNQU1BQyxXQU5BLEdBTWMsU0FBZEEsV0FBYyxDQUFDQyxNQUFEO0FBQUEsV0FBWUYsYUFBYSxDQUFDRyxTQUFkLENBQXdCRCxNQUF4QixDQUFaO0FBQUEsR0FOZDs7QUFRTix1QkFFRTtBQUFLLE1BQUEsU0FBUyxZQUFLSCxTQUFMO0FBQWQsb0JBQ0Usb0JBQUMsZ0JBQUQscUJBQ0Usb0JBQUMsZ0JBQUQscUJBQ0Usb0JBQUMsc0JBQUQscUJBQ0Usb0JBQUMsa0JBQUQsT0FERixlQUVFLG9CQUFDLGlCQUFELE9BRkYsRUFHR0MsYUFISCxDQURGLENBREYsZUFRRSxvQkFBQyxpQkFBRDtBQUF5QixNQUFBLG9CQUFvQjtBQUE3QyxNQVJGLGVBU0Usb0JBQUMsZ0JBQUQscUJBQ0Usb0JBQUMsY0FBRCxxQkFDRSxvQkFBQyxhQUFELHFCQUNFLG9CQUFDLGlCQUFELHFCQUNFLG9CQUFDLGdCQUFELE9BREYsZUFFRSxvQkFBQyxrQkFBRDtBQUEwQixNQUFBLHFCQUFxQjtBQUEvQyxNQUZGLGVBR0Usb0JBQUMsaUJBQUQscUJBQ0Usb0JBQUMsc0JBQUQscUJBQ0Usb0JBQUMsZ0JBQUQsT0FERixDQURGLENBSEYsQ0FERixDQURGLGVBWUUsb0JBQUMsaUJBQUQ7QUFBMkIsTUFBQSxNQUFNLEVBQUVDLFdBQW5DO0FBQWdELE1BQUEscUJBQXFCO0FBQXJFLE1BWkYsZUFhRSxvQkFBQyxrQkFBRCxPQWJGLENBREYsQ0FURixDQURGO0FBRkY7QUFpQ0QsQ0ExQ0Q7O2VBNENlLCtCQUFVSixJQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFNpemVhYmxlUm93c0RpdiB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5pbXBvcnQgQmx1ZVJvd0RpdiBmcm9tIFwiLi9kaXYvcm93L2JsdWVcIjtcbmltcG9ydCBZZWxsb3dSb3dEaXYgZnJvbSBcIi4vZGl2L3Jvdy95ZWxsb3dcIjtcbmltcG9ydCBCb3R0b21MZWZ0RGl2IGZyb20gXCIuL2Rpdi9ib3R0b21MZWZ0XCI7XG5pbXBvcnQgTWFpbkNvbHVtbnNEaXYgZnJvbSBcIi4vZGl2L2NvbHVtbnMvbWFpblwiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvbGVmdFwiO1xuaW1wb3J0IFJpZ2h0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL3JpZ2h0XCI7XG5pbXBvcnQgQm90dG9tU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL2JvdHRvbVwiO1xuaW1wb3J0IExlZnRWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC9yaWdodFwiO1xuaW1wb3J0IE1haW5Ib3Jpem9udGFsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL2hvcml6b250YWwvbWFpblwiO1xuaW1wb3J0IER1bW15SG9yaXpvbnRhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci9ob3Jpem9udGFsL2R1bW15XCI7XG5cbmNvbnN0IFZpZXcgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgYm90dG9tTGVmdERpdiA9XG5cbiAgICAgICAgICA8Qm90dG9tTGVmdERpdiAvPlxuXG4gICAgICAgICxcbiAgICAgICAgZHJhZ0hhbmRsZXIgPSAoaGVpZ2h0KSA9PiBib3R0b21MZWZ0RGl2LnNldEhlaWdodChoZWlnaHQpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSB2aWV3YH0+XG4gICAgICA8TWFpbkNvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFNpemVhYmxlUm93c0Rpdj5cbiAgICAgICAgICAgIDxZZWxsb3dSb3dEaXYgLz5cbiAgICAgICAgICAgIDxEdW1teUhvcml6b250YWxTcGxpdHRlckRpdiAvPlxuICAgICAgICAgICAge2JvdHRvbUxlZnREaXZ9XG4gICAgICAgICAgPC9TaXplYWJsZVJvd3NEaXY+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8TGVmdFZlcnRpY2FsU3BsaXR0ZXJEaXYgYWZ0ZXJTaXplYWJsZUVsZW1lbnQgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSb3dEaXY+XG4gICAgICAgICAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICAgICAgICAgIDxDb2x1bW5EaXYgLz5cbiAgICAgICAgICAgICAgICA8UmlnaHRWZXJ0aWNhbFNwbGl0dGVyRGl2IGJlZm9yZVNpemVhYmxlRWxlbWVudCAvPlxuICAgICAgICAgICAgICAgIDxSaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICAgICAgPFNpemVhYmxlUm93c0Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEJsdWVSb3dEaXYgLz5cbiAgICAgICAgICAgICAgICAgIDwvU2l6ZWFibGVSb3dzRGl2PlxuICAgICAgICAgICAgICAgIDwvUmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPC9Db2x1bW5zRGl2PlxuICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgICA8TWFpbkhvcml6b250YWxTcGxpdHRlckRpdiBvbkRyYWc9e2RyYWdIYW5kbGVyfSBiZWZvcmVTaXplYWJsZUVsZW1lbnQgLz5cbiAgICAgICAgICAgIDxCb3R0b21TaXplYWJsZURpdiAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L01haW5Db2x1bW5zRGl2PlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDY0cmVtO1xuICBoZWlnaHQ6IDY0cmVtO1xuICBcbmA7XG4iXX0=