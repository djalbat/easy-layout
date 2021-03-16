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
    var className = properties.className, bottomLeftDiv = React.createElement(_bottomLeft.default, null), options = {
        ESCAPE_KEY_STOPS_DRAGGING: ESCAPE_KEY_STOPS_DRAGGING
    };
    return React.createElement("div", {
        className: "".concat(className, " view")
    }, React.createElement(_index.ColumnsDiv, null, React.createElement(_left.default, null, React.createElement(_index.RowsDiv, null, React.createElement(_yellow.default, null), React.createElement(_pseudo.default, null), bottomLeftDiv)), React.createElement(_left1.default, {
        options: options
    }), React.createElement(_index.ColumnDiv, null, React.createElement(_index.RowsDiv, null, React.createElement(_index.RowDiv, null, React.createElement(_index.ColumnsDiv, null, React.createElement(_index.ColumnDiv, null), React.createElement(_right1.default, {
        options: options
    }), React.createElement(_right.default, null, React.createElement(_index.RowsDiv, null, React.createElement(_blue.default, null))))), React.createElement(_main.default, {
        bottomLeftDiv: bottomLeftDiv,
        options: options
    }), React.createElement(_bottom.default, null)))));
};
var _default = _easyWithStyle.default(View)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJvd0RpdiwgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBvcHRpb25zIH0gZnJvbSBcIi4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgQmx1ZVJvd0RpdiBmcm9tIFwiLi9kaXYvcm93L2JsdWVcIjtcbmltcG9ydCBZZWxsb3dSb3dEaXYgZnJvbSBcIi4vZGl2L3Jvdy95ZWxsb3dcIjtcbmltcG9ydCBCb3R0b21MZWZ0RGl2IGZyb20gXCIuL2Rpdi9ib3R0b21MZWZ0XCI7XG5pbXBvcnQgTGVmdFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvcmlnaHRcIjtcbmltcG9ydCBQc2V1ZG9TcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvcHNldWRvXCI7XG5pbXBvcnQgQm90dG9tU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL2JvdHRvbVwiO1xuaW1wb3J0IExlZnRWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC9yaWdodFwiO1xuaW1wb3J0IE1haW5Ib3Jpem9udGFsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL2hvcml6b250YWwvbWFpblwiO1xuXG5jb25zdCB7IEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcgfSA9IG9wdGlvbnM7XG5cbmNvbnN0IFZpZXcgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgYm90dG9tTGVmdERpdiA9XG5cbiAgICAgICAgICA8Qm90dG9tTGVmdERpdiAvPlxuXG4gICAgICAgICxcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HXG4gICAgICAgIH07XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHZpZXdgfT5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFllbGxvd1Jvd0RpdiAvPlxuICAgICAgICAgICAgPFBzZXVkb1NwbGl0dGVyRGl2IC8+XG4gICAgICAgICAgICB7Ym90dG9tTGVmdERpdn1cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8TGVmdFZlcnRpY2FsU3BsaXR0ZXJEaXYgb3B0aW9ucz17b3B0aW9uc30gLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSb3dEaXY+XG4gICAgICAgICAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICAgICAgICAgIDxDb2x1bW5EaXYgLz5cbiAgICAgICAgICAgICAgICA8UmlnaHRWZXJ0aWNhbFNwbGl0dGVyRGl2IG9wdGlvbnM9e29wdGlvbnN9IC8+XG4gICAgICAgICAgICAgICAgPFJpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEJsdWVSb3dEaXYgLz5cbiAgICAgICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgICAgICA8L1JpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDwvQ29sdW1uc0Rpdj5cbiAgICAgICAgICAgIDwvUm93RGl2PlxuICAgICAgICAgICAgPE1haW5Ib3Jpem9udGFsU3BsaXR0ZXJEaXYgYm90dG9tTGVmdERpdj17Ym90dG9tTGVmdERpdn0gb3B0aW9ucz17b3B0aW9uc30gLz5cbiAgICAgICAgICAgIDxCb3R0b21TaXplYWJsZURpdiAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICB3aWR0aDogNjRyZW07XG4gIGhlaWdodDogNjRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLGNBQUE7SUFFQSxNQUFBO0lBRUEsS0FBQTtJQUNBLE9BQUE7SUFDQSxXQUFBO0lBQ0EsS0FBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsS0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBa0RBLDZEQU1BOzs7Ozs7O0lBdERBLHlCQUFBLEdBYkEsTUFBQSxTQWFBLHlCQUFBO0lBRUEsSUFBQSxZQUFBLFVBQUE7UUFDQSxTQUFBLEdBQUEsVUFBQSxDQUFBLFNBQUEsRUFDQSxhQUFBLHVCQWJBLFdBQUEsaUJBa0JBLE9BQUE7QUFDQSxpQ0FBQSxFQUFBLHlCQUFBOztnQ0FLQSxHQUFBO0FBQUEsaUJBQUEsS0FBQSxNQUFBLENBQUEsU0FBQSxHQUFBLEtBQUE7MkJBNUJBLE1BQUEsdUNBS0EsS0FBQSxvQ0FMQSxNQUFBLG9DQUdBLE9BQUEscUNBSUEsT0FBQSxpQkEyQkEsYUFBQSx3QkF6QkEsTUFBQTtBQTRCQSxlQUFBLEVBQUEsT0FBQTs0QkFyQ0EsTUFBQSxzQ0FBQSxNQUFBLG9DQUFBLE1BQUEsbUNBQUEsTUFBQSx1Q0FBQSxNQUFBLHVDQVVBLE9BQUE7QUFpQ0EsZUFBQSxFQUFBLE9BQUE7NEJBckNBLE1BQUEsb0NBTkEsTUFBQSxvQ0FFQSxLQUFBLHlDQVNBLEtBQUE7QUF3Q0EscUJBQUEsRUFBQSxhQUFBO0FBQUEsZUFBQSxFQUFBLE9BQUE7NEJBM0NBLE9BQUE7O2VBVkEsY0FBQSxTQStEQSxJQUFBIn0=