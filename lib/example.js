"use strict";

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _view = _interopRequireDefault(require("./example/view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
Object.assign(window, {
  React: _easy.React
});
var renderStyles = _easyWithStyle["default"].renderStyles;
var body = new _easy.Body();
renderStyles();
body.prepend( /*#__PURE__*/_easy.React.createElement(_view["default"], null));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiYXNzaWduIiwid2luZG93IiwiUmVhY3QiLCJyZW5kZXJTdHlsZXMiLCJ3aXRoU3R5bGUiLCJib2R5IiwiQm9keSIsInByZXBlbmQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSjBDO0FBTTFDQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsTUFBZCxFQUFzQjtBQUNwQkMsRUFBQUEsS0FBSyxFQUFMQTtBQURvQixDQUF0QjtJQUlRQyxZLEdBQWlCQyx5QixDQUFqQkQsWTtBQUVSLElBQU1FLElBQUksR0FBRyxJQUFJQyxVQUFKLEVBQWI7QUFFQUgsWUFBWTtBQUVaRSxJQUFJLENBQUNFLE9BQUwsZUFFRSwwQkFBQyxnQkFBRCxPQUZGIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEJvZHksIFJlYWN0IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3XCI7XG5cbk9iamVjdC5hc3NpZ24od2luZG93LCB7XG4gIFJlYWN0XG59KTtcblxuY29uc3QgeyByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbnJlbmRlclN0eWxlcygpO1xuXG5ib2R5LnByZXBlbmQoXG5cbiAgPFZpZXcgLz5cblxuKTtcbiJdfQ==