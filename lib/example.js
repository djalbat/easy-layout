"use strict";
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _view = _interopRequireDefault(require("./example/view"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
_easy.window.assign({
    React: _easy.React
});
var renderStyles = _easyWithStyle.default.renderStyles;
var body = new _easy.Body();
renderStyles();
body.mount(_easy.React.createElement(_view.default, null));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCb2R5LCBSZWFjdCwgd2luZG93IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3XCI7XG5cbndpbmRvdy5hc3NpZ24oe1xuICBSZWFjdFxufSk7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpO1xuXG5yZW5kZXJTdHlsZXMoKTtcblxuYm9keS5tb3VudChcblxuICA8VmlldyAvPlxuXG4pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7SUFFQSxjQUFBO0lBRUEsS0FBQTtJQUVBLEtBQUE7Ozs7OztBQUZBLEtBQUEsUUFJQSxNQUFBO0FBQ0EsU0FBQSxFQUxBLEtBQUE7O0lBUUEsWUFBQSxHQVZBLGNBQUEsU0FVQSxZQUFBO0lBRUEsSUFBQSxPQVZBLEtBQUE7QUFZQSxZQUFBO0FBRUEsSUFBQSxDQUFBLEtBQUEsQ0FkQSxLQUFBLHFCQUVBLEtBQUEifQ==