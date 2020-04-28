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
    }), /*#__PURE__*/React.createElement(_index.ColumnDiv, null, /*#__PURE__*/React.createElement(_index.RowsDiv, null, /*#__PURE__*/React.createElement(_index.RowDiv, null, /*#__PURE__*/React.createElement(_index.ColumnsDiv, null, /*#__PURE__*/React.createElement(_index.ColumnDiv, null), /*#__PURE__*/React.createElement(_right2["default"], {
      beforeSizeableElement: true
    }), /*#__PURE__*/React.createElement(_right["default"], null, /*#__PURE__*/React.createElement(_index.SizeableRowsDiv, null, /*#__PURE__*/React.createElement(_blue["default"], null))))), /*#__PURE__*/React.createElement(_main2["default"], {
      beforeSizeableElement: true,
      onDrag: function onDrag(height) {
        bottomLeftDiv.setHeight(height);
      }
    }), /*#__PURE__*/React.createElement(_bottom["default"], null)))))
  );
};

var _default = (0, _easyWithStyle["default"])(View)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsInByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJib3R0b21MZWZ0RGl2IiwiaGVpZ2h0Iiwic2V0SGVpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsVUFBRCxFQUFnQjtBQUNyQixNQUFFQyxTQUFGLEdBQWdCRCxVQUFoQixDQUFFQyxTQUFGO0FBQUEsTUFDQUMsYUFEQSxnQkFHRSxvQkFBQyxzQkFBRCxPQUhGO0FBT04sdUJBRUU7QUFBSyxNQUFBLFNBQVMsWUFBS0QsU0FBTDtBQUFkLG9CQUNFLG9CQUFDLGdCQUFELHFCQUNFLG9CQUFDLGdCQUFELHFCQUNFLG9CQUFDLHNCQUFELHFCQUNFLG9CQUFDLGtCQUFELE9BREYsZUFFRSxvQkFBQyxpQkFBRCxPQUZGLEVBR0dDLGFBSEgsQ0FERixDQURGLGVBUUUsb0JBQUMsaUJBQUQ7QUFBeUIsTUFBQSxvQkFBb0I7QUFBN0MsTUFSRixlQVNFLG9CQUFDLGdCQUFELHFCQUNFLG9CQUFDLGNBQUQscUJBQ0Usb0JBQUMsYUFBRCxxQkFDRSxvQkFBQyxpQkFBRCxxQkFDRSxvQkFBQyxnQkFBRCxPQURGLGVBRUUsb0JBQUMsa0JBQUQ7QUFBMEIsTUFBQSxxQkFBcUI7QUFBL0MsTUFGRixlQUdFLG9CQUFDLGlCQUFELHFCQUNFLG9CQUFDLHNCQUFELHFCQUNFLG9CQUFDLGdCQUFELE9BREYsQ0FERixDQUhGLENBREYsQ0FERixlQVlFLG9CQUFDLGlCQUFEO0FBQTJCLE1BQUEscUJBQXFCLE1BQWhEO0FBQzJCLE1BQUEsTUFBTSxFQUFFLGdCQUFDQyxNQUFELEVBQVk7QUFFbEJELFFBQUFBLGFBQWEsQ0FBQ0UsU0FBZCxDQUF3QkQsTUFBeEI7QUFFRDtBQUw1QixNQVpGLGVBbUJFLG9CQUFDLGtCQUFELE9BbkJGLENBREYsQ0FURixDQURGO0FBRkY7QUF1Q0QsQ0EvQ0Q7O2VBaURlLCtCQUFVSixJQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFNpemVhYmxlUm93c0RpdiB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5pbXBvcnQgQmx1ZVJvd0RpdiBmcm9tIFwiLi9kaXYvcm93L2JsdWVcIjtcbmltcG9ydCBZZWxsb3dSb3dEaXYgZnJvbSBcIi4vZGl2L3Jvdy95ZWxsb3dcIjtcbmltcG9ydCBCb3R0b21MZWZ0RGl2IGZyb20gXCIuL2Rpdi9ib3R0b21MZWZ0XCI7XG5pbXBvcnQgTWFpbkNvbHVtbnNEaXYgZnJvbSBcIi4vZGl2L2NvbHVtbnMvbWFpblwiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvbGVmdFwiO1xuaW1wb3J0IFJpZ2h0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL3JpZ2h0XCI7XG5pbXBvcnQgQm90dG9tU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL2JvdHRvbVwiO1xuaW1wb3J0IExlZnRWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC9yaWdodFwiO1xuaW1wb3J0IE1haW5Ib3Jpem9udGFsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL2hvcml6b250YWwvbWFpblwiO1xuaW1wb3J0IER1bW15SG9yaXpvbnRhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci9ob3Jpem9udGFsL2R1bW15XCI7XG5cbmNvbnN0IFZpZXcgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgYm90dG9tTGVmdERpdiA9XG5cbiAgICAgICAgICA8Qm90dG9tTGVmdERpdiAvPlxuXG4gICAgICAgIDtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gdmlld2B9PlxuICAgICAgPE1haW5Db2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxTaXplYWJsZVJvd3NEaXY+XG4gICAgICAgICAgICA8WWVsbG93Um93RGl2IC8+XG4gICAgICAgICAgICA8RHVtbXlIb3Jpem9udGFsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgICAgIHtib3R0b21MZWZ0RGl2fVxuICAgICAgICAgIDwvU2l6ZWFibGVSb3dzRGl2PlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPExlZnRWZXJ0aWNhbFNwbGl0dGVyRGl2IGFmdGVyU2l6ZWFibGVFbGVtZW50IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uRGl2IC8+XG4gICAgICAgICAgICAgICAgPFJpZ2h0VmVydGljYWxTcGxpdHRlckRpdiBiZWZvcmVTaXplYWJsZUVsZW1lbnQgLz5cbiAgICAgICAgICAgICAgICA8UmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgICAgIDxTaXplYWJsZVJvd3NEaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCbHVlUm93RGl2IC8+XG4gICAgICAgICAgICAgICAgICA8L1NpemVhYmxlUm93c0Rpdj5cbiAgICAgICAgICAgICAgICA8L1JpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDwvQ29sdW1uc0Rpdj5cbiAgICAgICAgICAgIDwvUm93RGl2PlxuICAgICAgICAgICAgPE1haW5Ib3Jpem9udGFsU3BsaXR0ZXJEaXYgYmVmb3JlU2l6ZWFibGVFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWc9eyhoZWlnaHQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b21MZWZ0RGl2LnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCb3R0b21TaXplYWJsZURpdiAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L01haW5Db2x1bW5zRGl2PlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDY0cmVtO1xuICBoZWlnaHQ6IDY0cmVtO1xuICBcbmA7XG4iXX0=