"use strict";
require("./example/preamble");
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _view = _interopRequireDefault(require("./example/view"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyles = _easyWithStyle.default.renderStyles;
var body = new _easy.Body();
renderStyles();
body.mount(/*#__PURE__*/ React.createElement(_view.default, null));
