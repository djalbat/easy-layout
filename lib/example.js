"use strict";

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _view = _interopRequireDefault(require("./example/view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
_easy.window.assign({
  React: _easy.React
});

var renderStyles = _easyWithStyle["default"].renderStyles;
var body = new _easy.Body();
renderStyles();
body.mount( /*#__PURE__*/_easy.React.createElement(_view["default"], null));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsid2luZG93IiwiYXNzaWduIiwiUmVhY3QiLCJyZW5kZXJTdHlsZXMiLCJ3aXRoU3R5bGUiLCJib2R5IiwiQm9keSIsIm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUowQztBQU0xQ0EsYUFBT0MsTUFBUCxDQUFjO0FBQ1pDLEVBQUFBLEtBQUssRUFBTEE7QUFEWSxDQUFkOztJQUlRQyxZLEdBQWlCQyx5QixDQUFqQkQsWTtBQUVSLElBQU1FLElBQUksR0FBRyxJQUFJQyxVQUFKLEVBQWI7QUFFQUgsWUFBWTtBQUVaRSxJQUFJLENBQUNFLEtBQUwsZUFFRSwwQkFBQyxnQkFBRCxPQUZGIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEJvZHksIFJlYWN0LCB3aW5kb3cgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXdcIjtcblxud2luZG93LmFzc2lnbih7XG4gIFJlYWN0XG59KTtcblxuY29uc3QgeyByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbnJlbmRlclN0eWxlcygpO1xuXG5ib2R5Lm1vdW50KFxuXG4gIDxWaWV3IC8+XG5cbik7XG4iXX0=