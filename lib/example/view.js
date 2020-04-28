"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _index = require("../index");

var _column = _interopRequireDefault(require("../div/column"));

var _sizeable = _interopRequireDefault(require("../div/rows/sizeable"));

var _blue = _interopRequireDefault(require("./div/row/blue"));

var _yellow = _interopRequireDefault(require("./div/row/yellow"));

var _bottomLeft = _interopRequireDefault(require("./div/bottomLeft"));

var _main = _interopRequireDefault(require("./div/columns/main"));

var _left = _interopRequireDefault(require("./div/sizeable/left"));

var _right = _interopRequireDefault(require("./div/sizeable/right"));

var _bottom = _interopRequireDefault(require("./div/sizeable/bottom"));

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
      bottomLeftDiv = /*#__PURE__*/React.createElement(_bottomLeft["default"], null);
  return (/*#__PURE__*/React.createElement("div", {
      className: "".concat(className, " view")
    }, /*#__PURE__*/React.createElement(_main["default"], null, /*#__PURE__*/React.createElement(_left["default"], null, /*#__PURE__*/React.createElement(_sizeable["default"], null, /*#__PURE__*/React.createElement(_yellow["default"], null), /*#__PURE__*/React.createElement(_dummy["default"], null), bottomLeftDiv)), /*#__PURE__*/React.createElement(_index.VerticalSplitterDiv, {
      className: "black left",
      afterSizeableElement: true
    }), /*#__PURE__*/React.createElement("div", {
      className: "column rows"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row columns"
    }, /*#__PURE__*/React.createElement(_column["default"], null), /*#__PURE__*/React.createElement(_index.VerticalSplitterDiv, {
      className: "black right",
      beforeSizeableElement: true
    }), /*#__PURE__*/React.createElement(_right["default"], null, /*#__PURE__*/React.createElement(_sizeable["default"], null, /*#__PURE__*/React.createElement(_blue["default"], null)))), /*#__PURE__*/React.createElement(_index.HorizontalSplitterDiv, {
      className: "black main",
      beforeSizeableElement: true,
      onDrag: function onDrag(height) {
        bottomLeftDiv.setHeight(height);
      }
    }), /*#__PURE__*/React.createElement(_bottom["default"], null))))
  );
};

var _default = (0, _easyWithStyle["default"])(View)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsInByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJib3R0b21MZWZ0RGl2IiwiaGVpZ2h0Iiwic2V0SGVpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsVUFBRCxFQUFnQjtBQUNyQixNQUFFQyxTQUFGLEdBQWdCRCxVQUFoQixDQUFFQyxTQUFGO0FBQUEsTUFDQUMsYUFEQSxnQkFHRSxvQkFBQyxzQkFBRCxPQUhGO0FBT04sdUJBRUU7QUFBSyxNQUFBLFNBQVMsWUFBS0QsU0FBTDtBQUFkLG9CQUNFLG9CQUFDLGdCQUFELHFCQUNFLG9CQUFDLGdCQUFELHFCQUNFLG9CQUFDLG9CQUFELHFCQUNFLG9CQUFDLGtCQUFELE9BREYsZUFFRSxvQkFBQyxpQkFBRCxPQUZGLEVBR0dDLGFBSEgsQ0FERixDQURGLGVBUUUsb0JBQUMsMEJBQUQ7QUFBcUIsTUFBQSxTQUFTLEVBQUMsWUFBL0I7QUFBNEMsTUFBQSxvQkFBb0I7QUFBaEUsTUFSRixlQVNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0Usb0JBQUMsa0JBQUQsT0FERixlQUVFLG9CQUFDLDBCQUFEO0FBQXFCLE1BQUEsU0FBUyxFQUFDLGFBQS9CO0FBQTZDLE1BQUEscUJBQXFCO0FBQWxFLE1BRkYsZUFHRSxvQkFBQyxpQkFBRCxxQkFDRSxvQkFBQyxvQkFBRCxxQkFDRSxvQkFBQyxnQkFBRCxPQURGLENBREYsQ0FIRixDQURGLGVBVUUsb0JBQUMsNEJBQUQ7QUFBdUIsTUFBQSxTQUFTLEVBQUMsWUFBakM7QUFDb0IsTUFBQSxxQkFBcUIsTUFEekM7QUFFb0IsTUFBQSxNQUFNLEVBQUUsZ0JBQUNDLE1BQUQsRUFBWTtBQUVsQkQsUUFBQUEsYUFBYSxDQUFDRSxTQUFkLENBQXdCRCxNQUF4QjtBQUVEO0FBTnJCLE1BVkYsZUFrQkUsb0JBQUMsa0JBQUQsT0FsQkYsQ0FURixDQURGO0FBRkY7QUFvQ0QsQ0E1Q0Q7O2VBOENlLCtCQUFVSixJQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgVmVydGljYWxTcGxpdHRlckRpdiwgSG9yaXpvbnRhbFNwbGl0dGVyRGl2IH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmltcG9ydCBDb2x1bW5EaXYgZnJvbSBcIi4uL2Rpdi9jb2x1bW5cIjtcbmltcG9ydCBTaXplYWJsZVJvd3NEaXYgZnJvbSBcIi4uL2Rpdi9yb3dzL3NpemVhYmxlXCI7XG5cbmltcG9ydCBCbHVlUm93RGl2IGZyb20gXCIuL2Rpdi9yb3cvYmx1ZVwiO1xuaW1wb3J0IFllbGxvd1Jvd0RpdiBmcm9tIFwiLi9kaXYvcm93L3llbGxvd1wiO1xuaW1wb3J0IEJvdHRvbUxlZnREaXYgZnJvbSBcIi4vZGl2L2JvdHRvbUxlZnRcIjtcbmltcG9ydCBNYWluQ29sdW1uc0RpdiBmcm9tIFwiLi9kaXYvY29sdW1ucy9tYWluXCI7XG5pbXBvcnQgTGVmdFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvcmlnaHRcIjtcbmltcG9ydCBCb3R0b21TaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvYm90dG9tXCI7XG5pbXBvcnQgRHVtbXlIb3Jpem9udGFsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL2hvcml6b250YWwvZHVtbXlcIjtcblxuY29uc3QgVmlldyA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICBib3R0b21MZWZ0RGl2ID1cblxuICAgICAgICAgIDxCb3R0b21MZWZ0RGl2IC8+XG5cbiAgICAgICAgO1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSB2aWV3YH0+XG4gICAgICA8TWFpbkNvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFNpemVhYmxlUm93c0Rpdj5cbiAgICAgICAgICAgIDxZZWxsb3dSb3dEaXYgLz5cbiAgICAgICAgICAgIDxEdW1teUhvcml6b250YWxTcGxpdHRlckRpdiAvPlxuICAgICAgICAgICAge2JvdHRvbUxlZnREaXZ9XG4gICAgICAgICAgPC9TaXplYWJsZVJvd3NEaXY+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiBjbGFzc05hbWU9XCJibGFjayBsZWZ0XCIgYWZ0ZXJTaXplYWJsZUVsZW1lbnQgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gcm93c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxDb2x1bW5EaXYgLz5cbiAgICAgICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IGNsYXNzTmFtZT1cImJsYWNrIHJpZ2h0XCIgYmVmb3JlU2l6ZWFibGVFbGVtZW50IC8+XG4gICAgICAgICAgICA8UmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPFNpemVhYmxlUm93c0Rpdj5cbiAgICAgICAgICAgICAgICA8Qmx1ZVJvd0RpdiAvPlxuICAgICAgICAgICAgICA8L1NpemVhYmxlUm93c0Rpdj5cbiAgICAgICAgICAgIDwvUmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2IGNsYXNzTmFtZT1cImJsYWNrIG1haW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2l6ZWFibGVFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWc9eyhoZWlnaHQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b21MZWZ0RGl2LnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJvdHRvbVNpemVhYmxlRGl2IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NYWluQ29sdW1uc0Rpdj5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiA2NHJlbTtcbiAgaGVpZ2h0OiA2NHJlbTtcbiAgXG5gO1xuIl19