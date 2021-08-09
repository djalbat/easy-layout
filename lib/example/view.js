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
