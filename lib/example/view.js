"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _index = require("../index");
var _blue = /*#__PURE__*/ _interopRequireDefault(require("./div/row/blue"));
var _text = /*#__PURE__*/ _interopRequireDefault(require("./section/text"));
var _yellow = /*#__PURE__*/ _interopRequireDefault(require("./div/row/yellow"));
var _bottomLeft = /*#__PURE__*/ _interopRequireDefault(require("./div/bottomLeft"));
var _middle = /*#__PURE__*/ _interopRequireDefault(require("./div/column/middle"));
var _left = /*#__PURE__*/ _interopRequireDefault(require("./div/sizeable/left"));
var _right = /*#__PURE__*/ _interopRequireDefault(require("./div/sizeable/right"));
var _pseudo = /*#__PURE__*/ _interopRequireDefault(require("./div/splitter/pseudo"));
var _bottom = /*#__PURE__*/ _interopRequireDefault(require("./div/sizeable/bottom"));
var _left1 = /*#__PURE__*/ _interopRequireDefault(require("./div/splitter/vertical/left"));
var _right1 = /*#__PURE__*/ _interopRequireDefault(require("./div/splitter/vertical/right"));
var _main = /*#__PURE__*/ _interopRequireDefault(require("./div/splitter/horizontal/main"));
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
var View = function(properties) {
    var className = properties.className, bottomLeftDiv = /*#__PURE__*/ React.createElement(_bottomLeft.default, null), bottomSizeableDiv = /*#__PURE__*/ React.createElement(_bottom.default, null);
    var bottomSizeableDivHeight;
    return /*#__PURE__*/ React.createElement("div", {
        className: "".concat(className, " view")
    }, /*#__PURE__*/ React.createElement(_index.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_index.RowsDiv, null, /*#__PURE__*/ React.createElement(_yellow.default, null), /*#__PURE__*/ React.createElement(_pseudo.default, null), bottomLeftDiv)), /*#__PURE__*/ React.createElement(_left1.default, null), /*#__PURE__*/ React.createElement(_index.ColumnDiv, null, /*#__PURE__*/ React.createElement(_index.RowsDiv, null, /*#__PURE__*/ React.createElement(_index.RowDiv, null, /*#__PURE__*/ React.createElement(_index.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_middle.default, null, /*#__PURE__*/ React.createElement(_text.default, null)), /*#__PURE__*/ React.createElement(_right1.default, null), /*#__PURE__*/ React.createElement(_right.default, null, /*#__PURE__*/ React.createElement(_index.RowsDiv, null, /*#__PURE__*/ React.createElement(_blue.default, null))))), /*#__PURE__*/ React.createElement(_main.default, {
        onStartDrag: function(element) {
            bottomSizeableDivHeight = bottomSizeableDiv.getHeight();
        },
        onDrag: function(relativeMouseTop, relativeMouseLeft) {
            var height = bottomSizeableDivHeight - relativeMouseTop;
            bottomLeftDiv.setHeight(height);
        }
    }), bottomSizeableDiv))));
};
var _default = (0, _easyWithStyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJvd0RpdiwgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2IH0gZnJvbSBcIi4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgQmx1ZVJvd0RpdiBmcm9tIFwiLi9kaXYvcm93L2JsdWVcIjtcbmltcG9ydCBUZXh0U2VjdGlvbiBmcm9tIFwiLi9zZWN0aW9uL3RleHRcIjtcbmltcG9ydCBZZWxsb3dSb3dEaXYgZnJvbSBcIi4vZGl2L3Jvdy95ZWxsb3dcIjtcbmltcG9ydCBCb3R0b21MZWZ0RGl2IGZyb20gXCIuL2Rpdi9ib3R0b21MZWZ0XCI7XG5pbXBvcnQgTWlkZGxlQ29sdW1uRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW4vbWlkZGxlXCI7XG5pbXBvcnQgTGVmdFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvcmlnaHRcIjtcbmltcG9ydCBQc2V1ZG9TcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvcHNldWRvXCI7XG5pbXBvcnQgQm90dG9tU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL2JvdHRvbVwiO1xuaW1wb3J0IExlZnRWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC9yaWdodFwiO1xuaW1wb3J0IE1haW5Ib3Jpem9udGFsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL2hvcml6b250YWwvbWFpblwiO1xuXG5jb25zdCBWaWV3ID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIGJvdHRvbUxlZnREaXYgPVxuXG4gICAgICAgICAgPEJvdHRvbUxlZnREaXYvPlxuXG4gICAgICAgICxcbiAgICAgICAgYm90dG9tU2l6ZWFibGVEaXYgPVxuXG4gICAgICAgICAgPEJvdHRvbVNpemVhYmxlRGl2Lz5cblxuICAgICAgICA7XG5cbiAgbGV0IGJvdHRvbVNpemVhYmxlRGl2SGVpZ2h0O1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSB2aWV3YH0+XG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxZZWxsb3dSb3dEaXYvPlxuICAgICAgICAgICAgPFBzZXVkb1NwbGl0dGVyRGl2Lz5cbiAgICAgICAgICAgIHtib3R0b21MZWZ0RGl2fVxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxMZWZ0VmVydGljYWxTcGxpdHRlckRpdi8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgICAgICAgICA8TWlkZGxlQ29sdW1uRGl2PlxuICAgICAgICAgICAgICAgICAgPFRleHRTZWN0aW9uLz5cbiAgICAgICAgICAgICAgICA8L01pZGRsZUNvbHVtbkRpdj5cbiAgICAgICAgICAgICAgICA8UmlnaHRWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgICAgICAgICA8UmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgICAgICA8Qmx1ZVJvd0Rpdi8+XG4gICAgICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICAgICAgPC9SaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8L0NvbHVtbnNEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICAgIDxNYWluSG9yaXpvbnRhbFNwbGl0dGVyRGl2IG9uU3RhcnREcmFnPXsoZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbVNpemVhYmxlRGl2SGVpZ2h0ID0gYm90dG9tU2l6ZWFibGVEaXYuZ2V0SGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWc9eyhyZWxhdGl2ZU1vdXNlVG9wLCByZWxhdGl2ZU1vdXNlTGVmdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGJvdHRvbVNpemVhYmxlRGl2SGVpZ2h0IC0gcmVsYXRpdmVNb3VzZVRvcDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b21MZWZ0RGl2LnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtib3R0b21TaXplYWJsZURpdn1cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDY0cmVtO1xuICBoZWlnaHQ6IDY0cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBcbmA7XG4iXSwibmFtZXMiOlsiVmlldyIsInByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJib3R0b21MZWZ0RGl2IiwiQm90dG9tTGVmdERpdiIsImJvdHRvbVNpemVhYmxlRGl2IiwiQm90dG9tU2l6ZWFibGVEaXYiLCJib3R0b21TaXplYWJsZURpdkhlaWdodCIsImRpdiIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiWWVsbG93Um93RGl2IiwiUHNldWRvU3BsaXR0ZXJEaXYiLCJMZWZ0VmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlJvd0RpdiIsIk1pZGRsZUNvbHVtbkRpdiIsIlRleHRTZWN0aW9uIiwiUmlnaHRWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiUmlnaHRTaXplYWJsZURpdiIsIkJsdWVSb3dEaXYiLCJNYWluSG9yaXpvbnRhbFNwbGl0dGVyRGl2Iiwib25TdGFydERyYWciLCJlbGVtZW50IiwiZ2V0SGVpZ2h0Iiwib25EcmFnIiwicmVsYXRpdmVNb3VzZVRvcCIsInJlbGF0aXZlTW91c2VMZWZ0IiwiaGVpZ2h0Iiwic2V0SGVpZ2h0Iiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBbUZiLFNBTUU7OztlQU5GLFFBTUU7OztrRUF2Rm9CLGlCQUFpQjtxQkFFZ0IsVUFBVTt5REFFMUMsZ0JBQWdCO3lEQUNmLGdCQUFnQjsyREFDZixrQkFBa0I7K0RBQ2pCLGtCQUFrQjsyREFDaEIscUJBQXFCO3lEQUNyQixxQkFBcUI7MERBQ3BCLHNCQUFzQjsyREFDckIsdUJBQXVCOzJEQUN2Qix1QkFBdUI7MERBQ2pCLDhCQUE4QjsyREFDN0IsK0JBQStCO3lEQUM5QixnQ0FBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEUsSUFBTUEsSUFBSSxHQUFHLFNBQUNDLFVBQVUsRUFBSztJQUMzQixJQUFNLEFBQUVDLFNBQVMsR0FBS0QsVUFBVSxDQUF4QkMsU0FBUyxBQUFlLEVBQzFCQyxhQUFhLGlCQUVYLG9CQUFDQyxXQUFhLFFBQUEsT0FBRSxFQUdsQkMsaUJBQWlCLGlCQUVmLG9CQUFDQyxPQUFpQixRQUFBLE9BQUUsQUFFckI7SUFFUCxJQUFJQyx1QkFBdUIsQUFBQztJQUU1QixxQkFFRSxvQkFBQ0MsS0FBRztRQUFDTixTQUFTLEVBQUUsQUFBQyxFQUFBLENBQVksTUFBSyxDQUFmQSxTQUFTLEVBQUMsT0FBSyxDQUFDO3FCQUNqQyxvQkFBQ08sTUFBVSxXQUFBLHNCQUNULG9CQUFDQyxLQUFlLFFBQUEsc0JBQ2Qsb0JBQUNDLE1BQU8sUUFBQSxzQkFDTixvQkFBQ0MsT0FBWSxRQUFBLE9BQUUsZ0JBQ2Ysb0JBQUNDLE9BQWlCLFFBQUEsT0FBRSxFQUNuQlYsYUFBYSxDQUNOLENBQ00sZ0JBQ2xCLG9CQUFDVyxNQUF1QixRQUFBLE9BQUUsZ0JBQzFCLG9CQUFDQyxNQUFTLFVBQUEsc0JBQ1Isb0JBQUNKLE1BQU8sUUFBQSxzQkFDTixvQkFBQ0ssTUFBTSxPQUFBLHNCQUNMLG9CQUFDUCxNQUFVLFdBQUEsc0JBQ1Qsb0JBQUNRLE9BQWUsUUFBQSxzQkFDZCxvQkFBQ0MsS0FBVyxRQUFBLE9BQUUsQ0FDRSxnQkFDbEIsb0JBQUNDLE9BQXdCLFFBQUEsT0FBRSxnQkFDM0Isb0JBQUNDLE1BQWdCLFFBQUEsc0JBQ2Ysb0JBQUNULE1BQU8sUUFBQSxzQkFDTixvQkFBQ1UsS0FBVSxRQUFBLE9BQUUsQ0FDTCxDQUNPLENBQ1IsQ0FDTixnQkFDVCxvQkFBQ0MsS0FBeUIsUUFBQTtRQUFDQyxXQUFXLEVBQUUsU0FBQ0MsT0FBTyxFQUFLO1lBRXhCakIsdUJBQXVCLEdBQUdGLGlCQUFpQixDQUFDb0IsU0FBUyxFQUFFLENBQUM7UUFFMUQsQ0FBQztRQUNEQyxNQUFNLEVBQUUsU0FBQ0MsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFLO1lBRS9DLElBQU1DLE1BQU0sR0FBR3RCLHVCQUF1QixHQUFHb0IsZ0JBQWdCLEFBQUM7WUFFMUR4QixhQUFhLENBQUMyQixTQUFTLENBQUNELE1BQU0sQ0FBQyxDQUFDO1FBRWxDLENBQUM7TUFDMUIsRUFDRHhCLGlCQUFpQixDQUNWLENBQ0EsQ0FDRCxDQUNULENBRU47QUFDSixDQUFDLEFBQUM7SUFFRixRQU1FLEdBTmEwQixJQUFBQSxjQUFTLFFBQUEsRUFBQy9CLElBQUksQ0FBQyJ9