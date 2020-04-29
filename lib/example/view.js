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
    }, /*#__PURE__*/React.createElement(_main["default"], null, /*#__PURE__*/React.createElement(_left["default"], null, /*#__PURE__*/React.createElement(_index.RowsDiv, null, /*#__PURE__*/React.createElement(_yellow["default"], null), /*#__PURE__*/React.createElement(_dummy["default"], null), bottomLeftDiv)), /*#__PURE__*/React.createElement(_left2["default"], {
      afterSizeableElement: true
    }), /*#__PURE__*/React.createElement(_index.ColumnDiv, null, /*#__PURE__*/React.createElement(_index.RowsDiv, null, /*#__PURE__*/React.createElement(_index.RowDiv, null, /*#__PURE__*/React.createElement(_index.ColumnsDiv, null, /*#__PURE__*/React.createElement(_index.ColumnDiv, null), /*#__PURE__*/React.createElement(_right2["default"], {
      beforeSizeableElement: true
    }), /*#__PURE__*/React.createElement(_right["default"], null, /*#__PURE__*/React.createElement(_index.RowsDiv, null, /*#__PURE__*/React.createElement(_blue["default"], null))))), /*#__PURE__*/React.createElement(_main2["default"], {
      onDrag: dragHandler,
      beforeSizeableElement: true
    }), /*#__PURE__*/React.createElement(_bottom["default"], null)))))
  );
};

var _default = (0, _easyWithStyle["default"])(View)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlZpZXciLCJwcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiYm90dG9tTGVmdERpdiIsImRyYWdIYW5kbGVyIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsVUFBRCxFQUFnQjtBQUNyQixNQUFFQyxTQUFGLEdBQWdCRCxVQUFoQixDQUFFQyxTQUFGO0FBQUEsTUFDQUMsYUFEQSxnQkFHRSxvQkFBQyxzQkFBRCxPQUhGO0FBQUEsTUFNQUMsV0FOQSxHQU1jLFNBQWRBLFdBQWMsQ0FBQ0MsTUFBRDtBQUFBLFdBQVlGLGFBQWEsQ0FBQ0csU0FBZCxDQUF3QkQsTUFBeEIsQ0FBWjtBQUFBLEdBTmQ7O0FBUU4sdUJBRUU7QUFBSyxNQUFBLFNBQVMsWUFBS0gsU0FBTDtBQUFkLG9CQUNFLG9CQUFDLGdCQUFELHFCQUNFLG9CQUFDLGdCQUFELHFCQUNFLG9CQUFDLGNBQUQscUJBQ0Usb0JBQUMsa0JBQUQsT0FERixlQUVFLG9CQUFDLGlCQUFELE9BRkYsRUFHR0MsYUFISCxDQURGLENBREYsZUFRRSxvQkFBQyxpQkFBRDtBQUF5QixNQUFBLG9CQUFvQjtBQUE3QyxNQVJGLGVBU0Usb0JBQUMsZ0JBQUQscUJBQ0Usb0JBQUMsY0FBRCxxQkFDRSxvQkFBQyxhQUFELHFCQUNFLG9CQUFDLGlCQUFELHFCQUNFLG9CQUFDLGdCQUFELE9BREYsZUFFRSxvQkFBQyxrQkFBRDtBQUEwQixNQUFBLHFCQUFxQjtBQUEvQyxNQUZGLGVBR0Usb0JBQUMsaUJBQUQscUJBQ0Usb0JBQUMsY0FBRCxxQkFDRSxvQkFBQyxnQkFBRCxPQURGLENBREYsQ0FIRixDQURGLENBREYsZUFZRSxvQkFBQyxpQkFBRDtBQUEyQixNQUFBLE1BQU0sRUFBRUMsV0FBbkM7QUFBZ0QsTUFBQSxxQkFBcUI7QUFBckUsTUFaRixlQWFFLG9CQUFDLGtCQUFELE9BYkYsQ0FERixDQVRGLENBREY7QUFGRjtBQWlDRCxDQTFDRDs7ZUE0Q2UsK0JBQVVKLElBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSb3dEaXYsIFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5pbXBvcnQgQmx1ZVJvd0RpdiBmcm9tIFwiLi9kaXYvcm93L2JsdWVcIjtcbmltcG9ydCBZZWxsb3dSb3dEaXYgZnJvbSBcIi4vZGl2L3Jvdy95ZWxsb3dcIjtcbmltcG9ydCBCb3R0b21MZWZ0RGl2IGZyb20gXCIuL2Rpdi9ib3R0b21MZWZ0XCI7XG5pbXBvcnQgTWFpbkNvbHVtbnNEaXYgZnJvbSBcIi4vZGl2L2NvbHVtbnMvbWFpblwiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvbGVmdFwiO1xuaW1wb3J0IFJpZ2h0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL3JpZ2h0XCI7XG5pbXBvcnQgQm90dG9tU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL2JvdHRvbVwiO1xuaW1wb3J0IExlZnRWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC9yaWdodFwiO1xuaW1wb3J0IE1haW5Ib3Jpem9udGFsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL2hvcml6b250YWwvbWFpblwiO1xuaW1wb3J0IER1bW15SG9yaXpvbnRhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci9ob3Jpem9udGFsL2R1bW15XCI7XG5cbmNvbnN0IFZpZXcgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgYm90dG9tTGVmdERpdiA9XG5cbiAgICAgICAgICA8Qm90dG9tTGVmdERpdiAvPlxuXG4gICAgICAgICxcbiAgICAgICAgZHJhZ0hhbmRsZXIgPSAoaGVpZ2h0KSA9PiBib3R0b21MZWZ0RGl2LnNldEhlaWdodChoZWlnaHQpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSB2aWV3YH0+XG4gICAgICA8TWFpbkNvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8WWVsbG93Um93RGl2IC8+XG4gICAgICAgICAgICA8RHVtbXlIb3Jpem9udGFsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgICAgIHtib3R0b21MZWZ0RGl2fVxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxMZWZ0VmVydGljYWxTcGxpdHRlckRpdiBhZnRlclNpemVhYmxlRWxlbWVudCAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgICAgICAgICAgPENvbHVtbkRpdiAvPlxuICAgICAgICAgICAgICAgIDxSaWdodFZlcnRpY2FsU3BsaXR0ZXJEaXYgYmVmb3JlU2l6ZWFibGVFbGVtZW50IC8+XG4gICAgICAgICAgICAgICAgPFJpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEJsdWVSb3dEaXYgLz5cbiAgICAgICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgICAgICA8L1JpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDwvQ29sdW1uc0Rpdj5cbiAgICAgICAgICAgIDwvUm93RGl2PlxuICAgICAgICAgICAgPE1haW5Ib3Jpem9udGFsU3BsaXR0ZXJEaXYgb25EcmFnPXtkcmFnSGFuZGxlcn0gYmVmb3JlU2l6ZWFibGVFbGVtZW50IC8+XG4gICAgICAgICAgICA8Qm90dG9tU2l6ZWFibGVEaXYgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9NYWluQ29sdW1uc0Rpdj5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiA2NHJlbTtcbiAgaGVpZ2h0OiA2NHJlbTtcbiAgXG5gO1xuIl19