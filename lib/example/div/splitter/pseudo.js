"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
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
        "\n\n  height: 0.8rem;\n  flex-shrink: 0;\n  background-color: black;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PseudoHorizontalSplitterDiv = function(properties) {
    var className = properties.className;
    return(/*#__PURE__*/ React.createElement("div", {
        className: "".concat(className, " pseudo horizontal splitter")
    }));
};
var _default = (0, _easyWithStyle).default(PseudoHorizontalSplitterDiv)(_templateObject());
exports.default = _default;
