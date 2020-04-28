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
    }, /*#__PURE__*/React.createElement(_main["default"], null, /*#__PURE__*/React.createElement(_left["default"], null, /*#__PURE__*/React.createElement(_index.SizeableRowsDiv, null, /*#__PURE__*/React.createElement(_yellow["default"], null), /*#__PURE__*/React.createElement(_dummy["default"], null), bottomLeftDiv)), /*#__PURE__*/React.createElement(_index.VerticalSplitterDiv, {
      className: "black left",
      afterSizeableElement: true
    }), /*#__PURE__*/React.createElement("div", {
      className: "column rows"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row columns"
    }, /*#__PURE__*/React.createElement(_index.ColumnDiv, null), /*#__PURE__*/React.createElement(_index.VerticalSplitterDiv, {
      className: "black right",
      beforeSizeableElement: true
    }), /*#__PURE__*/React.createElement(_right["default"], null, /*#__PURE__*/React.createElement(_index.SizeableRowsDiv, null, /*#__PURE__*/React.createElement(_blue["default"], null)))), /*#__PURE__*/React.createElement(_index.HorizontalSplitterDiv, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsInByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJib3R0b21MZWZ0RGl2IiwiaGVpZ2h0Iiwic2V0SGVpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsVUFBRCxFQUFnQjtBQUNyQixNQUFFQyxTQUFGLEdBQWdCRCxVQUFoQixDQUFFQyxTQUFGO0FBQUEsTUFDQUMsYUFEQSxnQkFHRSxvQkFBQyxzQkFBRCxPQUhGO0FBT04sdUJBRUU7QUFBSyxNQUFBLFNBQVMsWUFBS0QsU0FBTDtBQUFkLG9CQUNFLG9CQUFDLGdCQUFELHFCQUNFLG9CQUFDLGdCQUFELHFCQUNFLG9CQUFDLHNCQUFELHFCQUNFLG9CQUFDLGtCQUFELE9BREYsZUFFRSxvQkFBQyxpQkFBRCxPQUZGLEVBR0dDLGFBSEgsQ0FERixDQURGLGVBUUUsb0JBQUMsMEJBQUQ7QUFBcUIsTUFBQSxTQUFTLEVBQUMsWUFBL0I7QUFBNEMsTUFBQSxvQkFBb0I7QUFBaEUsTUFSRixlQVNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0Usb0JBQUMsZ0JBQUQsT0FERixlQUVFLG9CQUFDLDBCQUFEO0FBQXFCLE1BQUEsU0FBUyxFQUFDLGFBQS9CO0FBQTZDLE1BQUEscUJBQXFCO0FBQWxFLE1BRkYsZUFHRSxvQkFBQyxpQkFBRCxxQkFDRSxvQkFBQyxzQkFBRCxxQkFDRSxvQkFBQyxnQkFBRCxPQURGLENBREYsQ0FIRixDQURGLGVBVUUsb0JBQUMsNEJBQUQ7QUFBdUIsTUFBQSxTQUFTLEVBQUMsWUFBakM7QUFDb0IsTUFBQSxxQkFBcUIsTUFEekM7QUFFb0IsTUFBQSxNQUFNLEVBQUUsZ0JBQUNDLE1BQUQsRUFBWTtBQUVsQkQsUUFBQUEsYUFBYSxDQUFDRSxTQUFkLENBQXdCRCxNQUF4QjtBQUVEO0FBTnJCLE1BVkYsZUFrQkUsb0JBQUMsa0JBQUQsT0FsQkYsQ0FURixDQURGO0FBRkY7QUFvQ0QsQ0E1Q0Q7O2VBOENlLCtCQUFVSixJQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQ29sdW1uRGl2LCBTaXplYWJsZVJvd3NEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYsIEhvcml6b250YWxTcGxpdHRlckRpdiB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5pbXBvcnQgQmx1ZVJvd0RpdiBmcm9tIFwiLi9kaXYvcm93L2JsdWVcIjtcbmltcG9ydCBZZWxsb3dSb3dEaXYgZnJvbSBcIi4vZGl2L3Jvdy95ZWxsb3dcIjtcbmltcG9ydCBCb3R0b21MZWZ0RGl2IGZyb20gXCIuL2Rpdi9ib3R0b21MZWZ0XCI7XG5pbXBvcnQgTWFpbkNvbHVtbnNEaXYgZnJvbSBcIi4vZGl2L2NvbHVtbnMvbWFpblwiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvbGVmdFwiO1xuaW1wb3J0IFJpZ2h0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL3JpZ2h0XCI7XG5pbXBvcnQgQm90dG9tU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL2JvdHRvbVwiO1xuaW1wb3J0IER1bW15SG9yaXpvbnRhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci9ob3Jpem9udGFsL2R1bW15XCI7XG5cbmNvbnN0IFZpZXcgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgYm90dG9tTGVmdERpdiA9XG5cbiAgICAgICAgICA8Qm90dG9tTGVmdERpdiAvPlxuXG4gICAgICAgIDtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gdmlld2B9PlxuICAgICAgPE1haW5Db2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxTaXplYWJsZVJvd3NEaXY+XG4gICAgICAgICAgICA8WWVsbG93Um93RGl2IC8+XG4gICAgICAgICAgICA8RHVtbXlIb3Jpem9udGFsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgICAgIHtib3R0b21MZWZ0RGl2fVxuICAgICAgICAgIDwvU2l6ZWFibGVSb3dzRGl2PlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgY2xhc3NOYW1lPVwiYmxhY2sgbGVmdFwiIGFmdGVyU2l6ZWFibGVFbGVtZW50IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIHJvd3NcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb2x1bW5zXCI+XG4gICAgICAgICAgICA8Q29sdW1uRGl2IC8+XG4gICAgICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiBjbGFzc05hbWU9XCJibGFjayByaWdodFwiIGJlZm9yZVNpemVhYmxlRWxlbWVudCAvPlxuICAgICAgICAgICAgPFJpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDxTaXplYWJsZVJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPEJsdWVSb3dEaXYgLz5cbiAgICAgICAgICAgICAgPC9TaXplYWJsZVJvd3NEaXY+XG4gICAgICAgICAgICA8L1JpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdiBjbGFzc05hbWU9XCJibGFjayBtYWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNpemVhYmxlRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnPXsoaGVpZ2h0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tTGVmdERpdi5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCb3R0b21TaXplYWJsZURpdiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTWFpbkNvbHVtbnNEaXY+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICB3aWR0aDogNjRyZW07XG4gIGhlaWdodDogNjRyZW07XG4gIFxuYDtcbiJdfQ==