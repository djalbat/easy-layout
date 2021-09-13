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
    var className = properties.className, bottomLeftDiv = /*#__PURE__*/ React.createElement(_bottomLeft.default, null), options = {
        ESCAPE_KEY_STOPS_DRAGGING_OPTION: ESCAPE_KEY_STOPS_DRAGGING_OPTION
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiUm93RGl2IiwiUm93c0RpdiIsIkNvbHVtbkRpdiIsIkNvbHVtbnNEaXYiLCJvcHRpb25zIiwiQmx1ZVJvd0RpdiIsIlllbGxvd1Jvd0RpdiIsIkJvdHRvbUxlZnREaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJSaWdodFNpemVhYmxlRGl2IiwiUHNldWRvU3BsaXR0ZXJEaXYiLCJCb3R0b21TaXplYWJsZURpdiIsIkxlZnRWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiUmlnaHRWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiTWFpbkhvcml6b250YWxTcGxpdHRlckRpdiIsIkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkdfT1BUSU9OIiwiVmlldyIsInByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJib3R0b21MZWZ0RGl2IiwiZGl2Il0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRXlCLEdBQVUsQ0FBVixNQUFVO0FBRW5ELEdBQWdCLENBQWhCLEtBQWdCO0FBQ2QsR0FBa0IsQ0FBbEIsT0FBa0I7QUFDakIsR0FBa0IsQ0FBbEIsV0FBa0I7QUFDaEIsR0FBcUIsQ0FBckIsS0FBcUI7QUFDcEIsR0FBc0IsQ0FBdEIsTUFBc0I7QUFDckIsR0FBdUIsQ0FBdkIsT0FBdUI7QUFDdkIsR0FBdUIsQ0FBdkIsT0FBdUI7QUFDakIsR0FBOEIsQ0FBOUIsTUFBOEI7QUFDN0IsR0FBK0IsQ0FBL0IsT0FBK0I7QUFDOUIsR0FBZ0MsQ0FBaEMsS0FBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQWtEdkMsNkRBTS9COzs7Ozs7O0FBdERBLEdBQUssQ0FBRyxnQ0FBZ0MsR0Fid0IsTUFBVSxTQWFsRSxnQ0FBZ0M7QUFFeEMsR0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLENBQVAsVUFBVSxFQUFLLENBQUM7SUFDNUIsR0FBSyxDQUFHLFNBQVMsR0FBSyxVQUFVLENBQXhCLFNBQVMsRUFDWCxhQUFhLHFDQWJLLFdBQWtCLGlCQWtCcEMsT0FBTyxHQUFHLENBQUM7UUFDVCxnQ0FBZ0MsRUFBaEMsZ0NBQWdDO0lBQ2xDLENBQUM7SUFFUCxNQUFNLG9DQUVILEdBQUc7UUFBQyxTQUFTLEtBQWUsTUFBSyxDQUFmLFNBQVMsR0FBQyxLQUFLO3lDQTVCMEIsTUFBVSxxREFLOUMsS0FBcUIsa0RBTGUsTUFBVSxrREFHakQsT0FBa0IsbURBSWIsT0FBdUIsaUJBMkJ4QyxhQUFhLHNDQXpCVSxNQUE4QjtRQTRCakMsT0FBTyxFQUFFLE9BQU87MENBckNlLE1BQVUsb0RBQVYsTUFBVSxrREFBVixNQUFVLGlEQUFWLE1BQVUscURBQVYsTUFBVSxxREFVckMsT0FBK0I7UUFpQzFCLE9BQU8sRUFBRSxPQUFPOzBDQXJDN0IsTUFBc0Isa0RBTmEsTUFBVSxrREFFbkQsS0FBZ0IsdURBU0QsS0FBZ0M7UUF3Qy9CLGFBQWEsRUFBRSxhQUFhO1FBQUUsT0FBTyxFQUFFLE9BQU87MENBM0N2RCxPQUF1QjtBQW1EckQsQ0FBQzttQkE3RHFCLGNBQWlCLFVBK0RkLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIG9wdGlvbnMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBCbHVlUm93RGl2IGZyb20gXCIuL2Rpdi9yb3cvYmx1ZVwiO1xuaW1wb3J0IFllbGxvd1Jvd0RpdiBmcm9tIFwiLi9kaXYvcm93L3llbGxvd1wiO1xuaW1wb3J0IEJvdHRvbUxlZnREaXYgZnJvbSBcIi4vZGl2L2JvdHRvbUxlZnRcIjtcbmltcG9ydCBMZWZ0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL2xlZnRcIjtcbmltcG9ydCBSaWdodFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IFBzZXVkb1NwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci9wc2V1ZG9cIjtcbmltcG9ydCBCb3R0b21TaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvYm90dG9tXCI7XG5pbXBvcnQgTGVmdFZlcnRpY2FsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL3ZlcnRpY2FsL2xlZnRcIjtcbmltcG9ydCBSaWdodFZlcnRpY2FsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL3ZlcnRpY2FsL3JpZ2h0XCI7XG5pbXBvcnQgTWFpbkhvcml6b250YWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvaG9yaXpvbnRhbC9tYWluXCI7XG5cbmNvbnN0IHsgRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lOR19PUFRJT04gfSA9IG9wdGlvbnM7XG5cbmNvbnN0IFZpZXcgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgYm90dG9tTGVmdERpdiA9XG5cbiAgICAgICAgICA8Qm90dG9tTGVmdERpdi8+XG5cbiAgICAgICAgLFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkdfT1BUSU9OXG4gICAgICAgIH07XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHZpZXdgfT5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFllbGxvd1Jvd0Rpdi8+XG4gICAgICAgICAgICA8UHNldWRvU3BsaXR0ZXJEaXYvPlxuICAgICAgICAgICAge2JvdHRvbUxlZnREaXZ9XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPExlZnRWZXJ0aWNhbFNwbGl0dGVyRGl2IG9wdGlvbnM9e29wdGlvbnN9IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uRGl2Lz5cbiAgICAgICAgICAgICAgICA8UmlnaHRWZXJ0aWNhbFNwbGl0dGVyRGl2IG9wdGlvbnM9e29wdGlvbnN9IC8+XG4gICAgICAgICAgICAgICAgPFJpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEJsdWVSb3dEaXYvPlxuICAgICAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgICAgIDwvUmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPC9Db2x1bW5zRGl2PlxuICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgICA8TWFpbkhvcml6b250YWxTcGxpdHRlckRpdiBib3R0b21MZWZ0RGl2PXtib3R0b21MZWZ0RGl2fSBvcHRpb25zPXtvcHRpb25zfSAvPlxuICAgICAgICAgICAgPEJvdHRvbVNpemVhYmxlRGl2Lz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDY0cmVtO1xuICBoZWlnaHQ6IDY0cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBcbmA7XG4iXX0=