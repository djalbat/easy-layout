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
      bottomLeftDiv = /*#__PURE__*/React.createElement(_bottomLeft["default"], null);
  return (/*#__PURE__*/React.createElement("div", {
      className: "".concat(className, " view")
    }, /*#__PURE__*/React.createElement(_main["default"], null, /*#__PURE__*/React.createElement(_left["default"], null, /*#__PURE__*/React.createElement(_index.SizeableRowsDiv, null, /*#__PURE__*/React.createElement(_yellow["default"], null), /*#__PURE__*/React.createElement(_dummy["default"], null), bottomLeftDiv)), /*#__PURE__*/React.createElement(_left2["default"], {
      afterSizeableElement: true
    }), /*#__PURE__*/React.createElement("div", {
      className: "column rows"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row columns"
    }, /*#__PURE__*/React.createElement(_index.ColumnDiv, null), /*#__PURE__*/React.createElement(_right2["default"], {
      beforeSizeableElement: true
    }), /*#__PURE__*/React.createElement(_right["default"], null, /*#__PURE__*/React.createElement(_index.SizeableRowsDiv, null, /*#__PURE__*/React.createElement(_blue["default"], null)))), /*#__PURE__*/React.createElement(_main2["default"], {
      beforeSizeableElement: true,
      onDrag: function onDrag(height) {
        bottomLeftDiv.setHeight(height);
      }
    }), /*#__PURE__*/React.createElement(_bottom["default"], null))))
  );
};

var _default = (0, _easyWithStyle["default"])(View)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsInByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJib3R0b21MZWZ0RGl2IiwiaGVpZ2h0Iiwic2V0SGVpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsVUFBRCxFQUFnQjtBQUNyQixNQUFFQyxTQUFGLEdBQWdCRCxVQUFoQixDQUFFQyxTQUFGO0FBQUEsTUFDQUMsYUFEQSxnQkFHRSxvQkFBQyxzQkFBRCxPQUhGO0FBT04sdUJBRUU7QUFBSyxNQUFBLFNBQVMsWUFBS0QsU0FBTDtBQUFkLG9CQUNFLG9CQUFDLGdCQUFELHFCQUNFLG9CQUFDLGdCQUFELHFCQUNFLG9CQUFDLHNCQUFELHFCQUNFLG9CQUFDLGtCQUFELE9BREYsZUFFRSxvQkFBQyxpQkFBRCxPQUZGLEVBR0dDLGFBSEgsQ0FERixDQURGLGVBUUUsb0JBQUMsaUJBQUQ7QUFBeUIsTUFBQSxvQkFBb0I7QUFBN0MsTUFSRixlQVNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0Usb0JBQUMsZ0JBQUQsT0FERixlQUVFLG9CQUFDLGtCQUFEO0FBQTBCLE1BQUEscUJBQXFCO0FBQS9DLE1BRkYsZUFHRSxvQkFBQyxpQkFBRCxxQkFDRSxvQkFBQyxzQkFBRCxxQkFDRSxvQkFBQyxnQkFBRCxPQURGLENBREYsQ0FIRixDQURGLGVBVUUsb0JBQUMsaUJBQUQ7QUFBMkIsTUFBQSxxQkFBcUIsTUFBaEQ7QUFDMkIsTUFBQSxNQUFNLEVBQUUsZ0JBQUNDLE1BQUQsRUFBWTtBQUVsQkQsUUFBQUEsYUFBYSxDQUFDRSxTQUFkLENBQXdCRCxNQUF4QjtBQUVEO0FBTDVCLE1BVkYsZUFpQkUsb0JBQUMsa0JBQUQsT0FqQkYsQ0FURixDQURGO0FBRkY7QUFtQ0QsQ0EzQ0Q7O2VBNkNlLCtCQUFVSixJQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQ29sdW1uRGl2LCBTaXplYWJsZVJvd3NEaXYgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuaW1wb3J0IEJsdWVSb3dEaXYgZnJvbSBcIi4vZGl2L3Jvdy9ibHVlXCI7XG5pbXBvcnQgWWVsbG93Um93RGl2IGZyb20gXCIuL2Rpdi9yb3cveWVsbG93XCI7XG5pbXBvcnQgQm90dG9tTGVmdERpdiBmcm9tIFwiLi9kaXYvYm90dG9tTGVmdFwiO1xuaW1wb3J0IE1haW5Db2x1bW5zRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5zL21haW5cIjtcbmltcG9ydCBMZWZ0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL2xlZnRcIjtcbmltcG9ydCBSaWdodFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IEJvdHRvbVNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9ib3R0b21cIjtcbmltcG9ydCBMZWZ0VmVydGljYWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvdmVydGljYWwvbGVmdFwiO1xuaW1wb3J0IFJpZ2h0VmVydGljYWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvdmVydGljYWwvcmlnaHRcIjtcbmltcG9ydCBNYWluSG9yaXpvbnRhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci9ob3Jpem9udGFsL21haW5cIjtcbmltcG9ydCBEdW1teUhvcml6b250YWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvaG9yaXpvbnRhbC9kdW1teVwiO1xuXG5jb25zdCBWaWV3ID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIGJvdHRvbUxlZnREaXYgPVxuXG4gICAgICAgICAgPEJvdHRvbUxlZnREaXYgLz5cblxuICAgICAgICA7XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHZpZXdgfT5cbiAgICAgIDxNYWluQ29sdW1uc0Rpdj5cbiAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICA8U2l6ZWFibGVSb3dzRGl2PlxuICAgICAgICAgICAgPFllbGxvd1Jvd0RpdiAvPlxuICAgICAgICAgICAgPER1bW15SG9yaXpvbnRhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgICAgICB7Ym90dG9tTGVmdERpdn1cbiAgICAgICAgICA8L1NpemVhYmxlUm93c0Rpdj5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxMZWZ0VmVydGljYWxTcGxpdHRlckRpdiBhZnRlclNpemVhYmxlRWxlbWVudCAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiByb3dzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29sdW1uc1wiPlxuICAgICAgICAgICAgPENvbHVtbkRpdiAvPlxuICAgICAgICAgICAgPFJpZ2h0VmVydGljYWxTcGxpdHRlckRpdiBiZWZvcmVTaXplYWJsZUVsZW1lbnQgLz5cbiAgICAgICAgICAgIDxSaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8U2l6ZWFibGVSb3dzRGl2PlxuICAgICAgICAgICAgICAgIDxCbHVlUm93RGl2IC8+XG4gICAgICAgICAgICAgIDwvU2l6ZWFibGVSb3dzRGl2PlxuICAgICAgICAgICAgPC9SaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxNYWluSG9yaXpvbnRhbFNwbGl0dGVyRGl2IGJlZm9yZVNpemVhYmxlRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZz17KGhlaWdodCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b21MZWZ0RGl2LnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCb3R0b21TaXplYWJsZURpdiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTWFpbkNvbHVtbnNEaXY+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICB3aWR0aDogNjRyZW07XG4gIGhlaWdodDogNjRyZW07XG4gIFxuYDtcbiJdfQ==