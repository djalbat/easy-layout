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
var ESCAPE_KEY_STOPS_DRAGGING = _index.options.ESCAPE_KEY_STOPS_DRAGGING;
var View = function(properties) {
    var className = properties.className, bottomLeftDiv = /*#__PURE__*/ React.createElement(_bottomLeft.default, null), options = {
        ESCAPE_KEY_STOPS_DRAGGING: ESCAPE_KEY_STOPS_DRAGGING
    };
    return(/*#__PURE__*/ React.createElement("div", {
        className: "".concat(className, " view")
    }, /*#__PURE__*/ React.createElement(_index.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_index.RowsDiv, null, /*#__PURE__*/ React.createElement(_yellow.default, null), /*#__PURE__*/ React.createElement(_pseudo.default, null), bottomLeftDiv)), /*#__PURE__*/ React.createElement(_left1.default, {
        options: options
    }), /*#__PURE__*/ React.createElement(_index.ColumnDiv, null, /*#__PURE__*/ React.createElement(_index.RowsDiv, null, /*#__PURE__*/ React.createElement(_index.RowDiv, null, /*#__PURE__*/ React.createElement(_index.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_index.ColumnDiv, null), /*#__PURE__*/ React.createElement(_right1.default, {
        options: options
    }), /*#__PURE__*/ React.createElement(_right.default, null, /*#__PURE__*/ React.createElement(_index.RowsDiv, null, /*#__PURE__*/ React.createElement(_blue.default, null))))), /*#__PURE__*/ React.createElement(_main.default, {
        bottomLeftDiv: bottomLeftDiv,
        options: options
    }), /*#__PURE__*/ React.createElement(_bottom.default, null))))));
};
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJvd0RpdiwgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBvcHRpb25zIH0gZnJvbSBcIi4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgQmx1ZVJvd0RpdiBmcm9tIFwiLi9kaXYvcm93L2JsdWVcIjtcbmltcG9ydCBZZWxsb3dSb3dEaXYgZnJvbSBcIi4vZGl2L3Jvdy95ZWxsb3dcIjtcbmltcG9ydCBCb3R0b21MZWZ0RGl2IGZyb20gXCIuL2Rpdi9ib3R0b21MZWZ0XCI7XG5pbXBvcnQgTGVmdFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvcmlnaHRcIjtcbmltcG9ydCBQc2V1ZG9TcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvcHNldWRvXCI7XG5pbXBvcnQgQm90dG9tU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL2JvdHRvbVwiO1xuaW1wb3J0IExlZnRWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC9yaWdodFwiO1xuaW1wb3J0IE1haW5Ib3Jpem9udGFsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL2hvcml6b250YWwvbWFpblwiO1xuXG5jb25zdCB7IEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcgfSA9IG9wdGlvbnM7XG5cbmNvbnN0IFZpZXcgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgYm90dG9tTGVmdERpdiA9XG5cbiAgICAgICAgICA8Qm90dG9tTGVmdERpdi8+XG5cbiAgICAgICAgLFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkdcbiAgICAgICAgfTtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gdmlld2B9PlxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8WWVsbG93Um93RGl2Lz5cbiAgICAgICAgICAgIDxQc2V1ZG9TcGxpdHRlckRpdi8+XG4gICAgICAgICAgICB7Ym90dG9tTGVmdERpdn1cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8TGVmdFZlcnRpY2FsU3BsaXR0ZXJEaXYgb3B0aW9ucz17b3B0aW9uc30vPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgICAgICAgICAgPENvbHVtbkRpdi8+XG4gICAgICAgICAgICAgICAgPFJpZ2h0VmVydGljYWxTcGxpdHRlckRpdiBvcHRpb25zPXtvcHRpb25zfS8+XG4gICAgICAgICAgICAgICAgPFJpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEJsdWVSb3dEaXYvPlxuICAgICAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgICAgIDwvUmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPC9Db2x1bW5zRGl2PlxuICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgICA8TWFpbkhvcml6b250YWxTcGxpdHRlckRpdiBib3R0b21MZWZ0RGl2PXtib3R0b21MZWZ0RGl2fSBvcHRpb25zPXtvcHRpb25zfS8+XG4gICAgICAgICAgICA8Qm90dG9tU2l6ZWFibGVEaXYvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICB3aWR0aDogNjRyZW07XG4gIGhlaWdodDogNjRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRXlCLE1BQVU7SUFFbkQsS0FBZ0I7SUFDZCxPQUFrQjtJQUNqQixXQUFrQjtJQUNoQixLQUFxQjtJQUNwQixNQUFzQjtJQUNyQixPQUF1QjtJQUN2QixPQUF1QjtJQUNqQixNQUE4QjtJQUM3QixPQUErQjtJQUM5QixLQUFnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBa0R2Qyw2REFNL0I7Ozs7Ozs7SUF0RFEseUJBQXlCLEdBYitCLE1BQVUsU0FhbEUseUJBQXlCO0lBRTNCLElBQUksWUFBSSxVQUFVO1FBQ2QsU0FBUyxHQUFLLFVBQVUsQ0FBeEIsU0FBUyxFQUNYLGFBQWEscUNBYkssV0FBa0IsaUJBa0JwQyxPQUFPO1FBQ0wseUJBQXlCLEVBQXpCLHlCQUF5Qjs7OENBSzlCLEdBQUc7UUFBQyxTQUFTLEtBQWUsTUFBSyxDQUFmLFNBQVMsR0FBQyxLQUFLO3lDQTVCMEIsTUFBVSxxREFLOUMsS0FBcUIsa0RBTGUsTUFBVSxrREFHakQsT0FBa0IsbURBSWIsT0FBdUIsaUJBMkJ4QyxhQUFhLHNDQXpCVSxNQUE4QjtRQTRCakMsT0FBTyxFQUFFLE9BQU87MENBckNlLE1BQVUsb0RBQVYsTUFBVSxrREFBVixNQUFVLGlEQUFWLE1BQVUscURBQVYsTUFBVSxxREFVckMsT0FBK0I7UUFpQzFCLE9BQU8sRUFBRSxPQUFPOzBDQXJDN0IsTUFBc0Isa0RBTmEsTUFBVSxrREFFbkQsS0FBZ0IsdURBU0QsS0FBZ0M7UUF3Qy9CLGFBQWEsRUFBRSxhQUFhO1FBQUUsT0FBTyxFQUFFLE9BQU87MENBM0N2RCxPQUF1Qjs7bUJBVi9CLGNBQWlCLFVBK0RkLElBQUkifQ==