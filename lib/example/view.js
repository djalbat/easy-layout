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
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _index = require("../index");
var _blue = /*#__PURE__*/ _interop_require_default(require("./div/row/blue"));
var _text = /*#__PURE__*/ _interop_require_default(require("./section/text"));
var _yellow = /*#__PURE__*/ _interop_require_default(require("./div/row/yellow"));
var _bottomLeft = /*#__PURE__*/ _interop_require_default(require("./div/bottomLeft"));
var _middle = /*#__PURE__*/ _interop_require_default(require("./div/column/middle"));
var _left = /*#__PURE__*/ _interop_require_default(require("./div/sizeable/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./div/sizeable/right"));
var _pseudo = /*#__PURE__*/ _interop_require_default(require("./div/splitter/pseudo"));
var _bottom = /*#__PURE__*/ _interop_require_default(require("./div/sizeable/bottom"));
var _left1 = /*#__PURE__*/ _interop_require_default(require("./div/splitter/vertical/left"));
var _right1 = /*#__PURE__*/ _interop_require_default(require("./div/splitter/vertical/right"));
var _main = /*#__PURE__*/ _interop_require_default(require("./div/splitter/horizontal/main"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _tagged_template_literal(strings, raw) {
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
    var data = _tagged_template_literal([
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
        onCustomStartDrag: function(event, element) {
            bottomSizeableDivHeight = bottomSizeableDiv.getHeight();
        },
        onCustomDrag: function(event, element, relativeMouseTop, relativeMouseLeft) {
            var height = bottomSizeableDivHeight - relativeMouseTop;
            bottomLeftDiv.setHeight(height);
        }
    }), bottomSizeableDiv))));
};
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJvd0RpdiwgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2IH0gZnJvbSBcIi4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgQmx1ZVJvd0RpdiBmcm9tIFwiLi9kaXYvcm93L2JsdWVcIjtcbmltcG9ydCBUZXh0U2VjdGlvbiBmcm9tIFwiLi9zZWN0aW9uL3RleHRcIjtcbmltcG9ydCBZZWxsb3dSb3dEaXYgZnJvbSBcIi4vZGl2L3Jvdy95ZWxsb3dcIjtcbmltcG9ydCBCb3R0b21MZWZ0RGl2IGZyb20gXCIuL2Rpdi9ib3R0b21MZWZ0XCI7XG5pbXBvcnQgTWlkZGxlQ29sdW1uRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW4vbWlkZGxlXCI7XG5pbXBvcnQgTGVmdFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvcmlnaHRcIjtcbmltcG9ydCBQc2V1ZG9TcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvcHNldWRvXCI7XG5pbXBvcnQgQm90dG9tU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL2JvdHRvbVwiO1xuaW1wb3J0IExlZnRWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC9yaWdodFwiO1xuaW1wb3J0IE1haW5Ib3Jpem9udGFsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL2hvcml6b250YWwvbWFpblwiO1xuXG5jb25zdCBWaWV3ID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIGJvdHRvbUxlZnREaXYgPVxuXG4gICAgICAgICAgPEJvdHRvbUxlZnREaXYvPlxuXG4gICAgICAgICxcbiAgICAgICAgYm90dG9tU2l6ZWFibGVEaXYgPVxuXG4gICAgICAgICAgPEJvdHRvbVNpemVhYmxlRGl2Lz5cblxuICAgICAgICA7XG5cbiAgbGV0IGJvdHRvbVNpemVhYmxlRGl2SGVpZ2h0O1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSB2aWV3YH0+XG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxZZWxsb3dSb3dEaXYvPlxuICAgICAgICAgICAgPFBzZXVkb1NwbGl0dGVyRGl2Lz5cbiAgICAgICAgICAgIHtib3R0b21MZWZ0RGl2fVxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxMZWZ0VmVydGljYWxTcGxpdHRlckRpdi8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgICAgICAgICA8TWlkZGxlQ29sdW1uRGl2PlxuICAgICAgICAgICAgICAgICAgPFRleHRTZWN0aW9uLz5cbiAgICAgICAgICAgICAgICA8L01pZGRsZUNvbHVtbkRpdj5cbiAgICAgICAgICAgICAgICA8UmlnaHRWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgICAgICAgICA8UmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgICAgICA8Qmx1ZVJvd0Rpdi8+XG4gICAgICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICAgICAgPC9SaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8L0NvbHVtbnNEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICAgIDxNYWluSG9yaXpvbnRhbFNwbGl0dGVyRGl2IG9uQ3VzdG9tU3RhcnREcmFnPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b21TaXplYWJsZURpdkhlaWdodCA9IGJvdHRvbVNpemVhYmxlRGl2LmdldEhlaWdodCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21EcmFnPXsoZXZlbnQsIGVsZW1lbnQsIHJlbGF0aXZlTW91c2VUb3AsIHJlbGF0aXZlTW91c2VMZWZ0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gYm90dG9tU2l6ZWFibGVEaXZIZWlnaHQgLSByZWxhdGl2ZU1vdXNlVG9wO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbUxlZnREaXYuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2JvdHRvbVNpemVhYmxlRGl2fVxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICB3aWR0aDogNjRyZW07XG4gIGhlaWdodDogNjRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJWaWV3IiwicHJvcGVydGllcyIsImNsYXNzTmFtZSIsImJvdHRvbUxlZnREaXYiLCJCb3R0b21MZWZ0RGl2IiwiYm90dG9tU2l6ZWFibGVEaXYiLCJCb3R0b21TaXplYWJsZURpdiIsImJvdHRvbVNpemVhYmxlRGl2SGVpZ2h0IiwiZGl2IiwiQ29sdW1uc0RpdiIsIkxlZnRTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJZZWxsb3dSb3dEaXYiLCJQc2V1ZG9TcGxpdHRlckRpdiIsIkxlZnRWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiUm93RGl2IiwiTWlkZGxlQ29sdW1uRGl2IiwiVGV4dFNlY3Rpb24iLCJSaWdodFZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJSaWdodFNpemVhYmxlRGl2IiwiQmx1ZVJvd0RpdiIsIk1haW5Ib3Jpem9udGFsU3BsaXR0ZXJEaXYiLCJvbkN1c3RvbVN0YXJ0RHJhZyIsImV2ZW50IiwiZWxlbWVudCIsImdldEhlaWdodCIsIm9uQ3VzdG9tRHJhZyIsInJlbGF0aXZlTW91c2VUb3AiLCJyZWxhdGl2ZU1vdXNlTGVmdCIsImhlaWdodCIsInNldEhlaWdodCIsIndpdGhTdHlsZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1GQTs7O2VBQUE7OztvRUFqRnNCO3FCQUVpQzsyREFFaEM7MkRBQ0M7NkRBQ0M7aUVBQ0M7NkRBQ0U7MkRBQ0E7NERBQ0M7NkRBQ0M7NkRBQ0E7NERBQ007NkRBQ0M7MkRBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUEsT0FBTyxTQUFDQztJQUNaLElBQU0sQUFBRUMsWUFBY0QsV0FBZEMsV0FDRkMsOEJBRUUsb0JBQUNDLG1CQUFhLFNBR2hCQyxrQ0FFRSxvQkFBQ0MsZUFBaUI7SUFJMUIsSUFBSUM7SUFFSixxQkFFRSxvQkFBQ0M7UUFBSU4sV0FBVyxBQUFDLEdBQVksT0FBVkEsV0FBVTtxQkFDM0Isb0JBQUNPLGlCQUFVLHNCQUNULG9CQUFDQyxhQUFlLHNCQUNkLG9CQUFDQyxjQUFPLHNCQUNOLG9CQUFDQyxlQUFZLHVCQUNiLG9CQUFDQyxlQUFpQixTQUNqQlYsK0JBR0wsb0JBQUNXLGNBQXVCLHVCQUN4QixvQkFBQ0MsZ0JBQVMsc0JBQ1Isb0JBQUNKLGNBQU8sc0JBQ04sb0JBQUNLLGFBQU0sc0JBQ0wsb0JBQUNQLGlCQUFVLHNCQUNULG9CQUFDUSxlQUFlLHNCQUNkLG9CQUFDQyxhQUFXLHdCQUVkLG9CQUFDQyxlQUF3Qix1QkFDekIsb0JBQUNDLGNBQWdCLHNCQUNmLG9CQUFDVCxjQUFPLHNCQUNOLG9CQUFDVSxhQUFVLDJCQUtuQixvQkFBQ0MsYUFBeUI7UUFBQ0MsbUJBQW1CLFNBQUNDLE9BQU9DO1lBRXpCbEIsMEJBQTBCRixrQkFBa0JxQixTQUFTO1FBRXZEO1FBQ0FDLGNBQWMsU0FBQ0gsT0FBT0MsU0FBU0csa0JBQWtCQztZQUUvQyxJQUFNQyxTQUFTdkIsMEJBQTBCcUI7WUFFekN6QixjQUFjNEIsU0FBUyxDQUFDRDtRQUUxQjtRQUUxQnpCO0FBT2I7SUFFQSxXQUFlMkIsSUFBQUEsc0JBQVMsRUFBQ2hDIn0=