"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _index = require("../index");
var _blue = _interopRequireDefault(require("./div/row/blue"));
var _yellow = _interopRequireDefault(require("./div/row/yellow"));
var _bottomLeft = _interopRequireDefault(require("./div/bottomLeft"));
var _left = _interopRequireDefault(require("./div/sizeable/left"));
var _right = _interopRequireDefault(require("./div/sizeable/right"));
var _pseudo = _interopRequireDefault(require("./div/splitter/pseudo"));
var _bottom = _interopRequireDefault(require("./div/sizeable/bottom"));
var _left1 = _interopRequireDefault(require("./div/splitter/vertical/left"));
var _right1 = _interopRequireDefault(require("./div/splitter/vertical/right"));
var _main = _interopRequireDefault(require("./div/splitter/horizontal/main"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  width: 64rem;\n  height: 64rem;\n  display: flex;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ESCAPE_KEY_STOPS_DRAGGING_OPTION = _index.options.ESCAPE_KEY_STOPS_DRAGGING_OPTION;
var View = function(properties) {
    var className = properties.className, bottomLeftDiv = /*#__PURE__*/ React.createElement(_bottomLeft.default, null), _$options = {
        ESCAPE_KEY_STOPS_DRAGGING_OPTION: ESCAPE_KEY_STOPS_DRAGGING_OPTION
    };
    return /*#__PURE__*/ React.createElement("div", {
        className: "".concat(className, " view")
    }, /*#__PURE__*/ React.createElement(_index.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_index.RowsDiv, null, /*#__PURE__*/ React.createElement(_yellow.default, null), /*#__PURE__*/ React.createElement(_pseudo.default, null), bottomLeftDiv)), /*#__PURE__*/ React.createElement(_left1.default, {
        options: _$options
    }), /*#__PURE__*/ React.createElement(_index.ColumnDiv, null, /*#__PURE__*/ React.createElement(_index.RowsDiv, null, /*#__PURE__*/ React.createElement(_index.RowDiv, null, /*#__PURE__*/ React.createElement(_index.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_index.ColumnDiv, null), /*#__PURE__*/ React.createElement(_right1.default, {
        options: _$options
    }), /*#__PURE__*/ React.createElement(_right.default, null, /*#__PURE__*/ React.createElement(_index.RowsDiv, null, /*#__PURE__*/ React.createElement(_blue.default, null))))), /*#__PURE__*/ React.createElement(_main.default, {
        bottomLeftDiv: bottomLeftDiv,
        options: _$options
    }), /*#__PURE__*/ React.createElement(_bottom.default, null)))));
};
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJvd0RpdiwgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBvcHRpb25zIH0gZnJvbSBcIi4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgQmx1ZVJvd0RpdiBmcm9tIFwiLi9kaXYvcm93L2JsdWVcIjtcbmltcG9ydCBZZWxsb3dSb3dEaXYgZnJvbSBcIi4vZGl2L3Jvdy95ZWxsb3dcIjtcbmltcG9ydCBCb3R0b21MZWZ0RGl2IGZyb20gXCIuL2Rpdi9ib3R0b21MZWZ0XCI7XG5pbXBvcnQgTGVmdFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvcmlnaHRcIjtcbmltcG9ydCBQc2V1ZG9TcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvcHNldWRvXCI7XG5pbXBvcnQgQm90dG9tU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL2JvdHRvbVwiO1xuaW1wb3J0IExlZnRWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC9yaWdodFwiO1xuaW1wb3J0IE1haW5Ib3Jpem9udGFsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL2hvcml6b250YWwvbWFpblwiO1xuXG5jb25zdCB7IEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkdfT1BUSU9OIH0gPSBvcHRpb25zO1xuXG5jb25zdCBWaWV3ID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIGJvdHRvbUxlZnREaXYgPVxuXG4gICAgICAgICAgPEJvdHRvbUxlZnREaXYvPlxuXG4gICAgICAgICxcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HX09QVElPTlxuICAgICAgICB9O1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSB2aWV3YH0+XG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxZZWxsb3dSb3dEaXYvPlxuICAgICAgICAgICAgPFBzZXVkb1NwbGl0dGVyRGl2Lz5cbiAgICAgICAgICAgIHtib3R0b21MZWZ0RGl2fVxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxMZWZ0VmVydGljYWxTcGxpdHRlckRpdiBvcHRpb25zPXtvcHRpb25zfSAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgICAgICAgICAgPENvbHVtbkRpdi8+XG4gICAgICAgICAgICAgICAgPFJpZ2h0VmVydGljYWxTcGxpdHRlckRpdiBvcHRpb25zPXtvcHRpb25zfSAvPlxuICAgICAgICAgICAgICAgIDxSaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCbHVlUm93RGl2Lz5cbiAgICAgICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgICAgICA8L1JpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDwvQ29sdW1uc0Rpdj5cbiAgICAgICAgICAgIDwvUm93RGl2PlxuICAgICAgICAgICAgPE1haW5Ib3Jpem9udGFsU3BsaXR0ZXJEaXYgYm90dG9tTGVmdERpdj17Ym90dG9tTGVmdERpdn0gb3B0aW9ucz17b3B0aW9uc30gLz5cbiAgICAgICAgICAgIDxCb3R0b21TaXplYWJsZURpdi8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiA2NHJlbTtcbiAgaGVpZ2h0OiA2NHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkdfT1BUSU9OIiwib3B0aW9ucyIsIlZpZXciLCJwcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiYm90dG9tTGVmdERpdiIsIkJvdHRvbUxlZnREaXYiLCJkaXYiLCJDb2x1bW5zRGl2IiwiTGVmdFNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlllbGxvd1Jvd0RpdiIsIlBzZXVkb1NwbGl0dGVyRGl2IiwiTGVmdFZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJSb3dEaXYiLCJSaWdodFZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJSaWdodFNpemVhYmxlRGl2IiwiQmx1ZVJvd0RpdiIsIk1haW5Ib3Jpem9udGFsU3BsaXR0ZXJEaXYiLCJCb3R0b21TaXplYWJsZURpdiIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsY0FBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBRXlCLElBQUEsTUFBVSxXQUFWLFVBQVUsQ0FBQTtBQUVuRCxJQUFBLEtBQWdCLGtDQUFoQixnQkFBZ0IsRUFBQTtBQUNkLElBQUEsT0FBa0Isa0NBQWxCLGtCQUFrQixFQUFBO0FBQ2pCLElBQUEsV0FBa0Isa0NBQWxCLGtCQUFrQixFQUFBO0FBQ2hCLElBQUEsS0FBcUIsa0NBQXJCLHFCQUFxQixFQUFBO0FBQ3BCLElBQUEsTUFBc0Isa0NBQXRCLHNCQUFzQixFQUFBO0FBQ3JCLElBQUEsT0FBdUIsa0NBQXZCLHVCQUF1QixFQUFBO0FBQ3ZCLElBQUEsT0FBdUIsa0NBQXZCLHVCQUF1QixFQUFBO0FBQ2pCLElBQUEsTUFBOEIsa0NBQTlCLDhCQUE4QixFQUFBO0FBQzdCLElBQUEsT0FBK0Isa0NBQS9CLCtCQUErQixFQUFBO0FBQzlCLElBQUEsS0FBZ0Msa0NBQWhDLGdDQUFnQyxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRFLElBQU0sQUFBRUEsZ0NBQWdDLEdBQUtDLE1BQU8sUUFBQSxDQUE1Q0QsZ0NBQWdDLEFBQVksQUFBQztBQUVyRCxJQUFNRSxJQUFJLEdBQUcsU0FBQ0MsVUFBVSxFQUFLO0lBQzNCLElBQU0sQUFBRUMsU0FBUyxHQUFLRCxVQUFVLENBQXhCQyxTQUFTLEFBQWUsRUFDMUJDLGFBQWEsaUJBRVgsb0JBQUNDLFdBQWEsUUFBQSxPQUFFLEVBR2xCTCxTQUFPLEdBQUc7UUFDUkQsZ0NBQWdDLEVBQWhDQSxnQ0FBZ0M7S0FDakMsQUFBQztJQUVSLHFCQUVFLG9CQUFDTyxLQUFHO1FBQUNILFNBQVMsRUFBRSxBQUFDLEVBQUEsQ0FBWSxNQUFLLENBQWZBLFNBQVMsRUFBQyxPQUFLLENBQUM7cUJBQ2pDLG9CQUFDSSxNQUFVLFdBQUEsc0JBQ1Qsb0JBQUNDLEtBQWUsUUFBQSxzQkFDZCxvQkFBQ0MsTUFBTyxRQUFBLHNCQUNOLG9CQUFDQyxPQUFZLFFBQUEsT0FBRSxnQkFDZixvQkFBQ0MsT0FBaUIsUUFBQSxPQUFFLEVBQ25CUCxhQUFhLENBQ04sQ0FDTSxnQkFDbEIsb0JBQUNRLE1BQXVCLFFBQUE7UUFBQ1osT0FBTyxFQUFFQSxTQUFPO01BQUksZ0JBQzdDLG9CQUFDYSxNQUFTLFVBQUEsc0JBQ1Isb0JBQUNKLE1BQU8sUUFBQSxzQkFDTixvQkFBQ0ssTUFBTSxPQUFBLHNCQUNMLG9CQUFDUCxNQUFVLFdBQUEsc0JBQ1Qsb0JBQUNNLE1BQVMsVUFBQSxPQUFFLGdCQUNaLG9CQUFDRSxPQUF3QixRQUFBO1FBQUNmLE9BQU8sRUFBRUEsU0FBTztNQUFJLGdCQUM5QyxvQkFBQ2dCLE1BQWdCLFFBQUEsc0JBQ2Ysb0JBQUNQLE1BQU8sUUFBQSxzQkFDTixvQkFBQ1EsS0FBVSxRQUFBLE9BQUUsQ0FDTCxDQUNPLENBQ1IsQ0FDTixnQkFDVCxvQkFBQ0MsS0FBeUIsUUFBQTtRQUFDZCxhQUFhLEVBQUVBLGFBQWE7UUFBRUosT0FBTyxFQUFFQSxTQUFPO01BQUksZ0JBQzdFLG9CQUFDbUIsT0FBaUIsUUFBQSxPQUFFLENBQ1osQ0FDQSxDQUNELENBQ1QsQ0FFTjtDQUNILEFBQUM7ZUFFYUMsQ0FBQUEsR0FBQUEsY0FBUyxBQUFNLENBQUEsUUFBTixDQUFDbkIsSUFBSSxDQUFDIn0=