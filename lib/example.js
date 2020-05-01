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
body.prepend( /*#__PURE__*/_easy.React.createElement(_view["default"], null));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsid2luZG93IiwiYXNzaWduIiwiUmVhY3QiLCJyZW5kZXJTdHlsZXMiLCJ3aXRoU3R5bGUiLCJib2R5IiwiQm9keSIsInByZXBlbmQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSjBDO0FBTTFDQSxhQUFPQyxNQUFQLENBQWM7QUFDWkMsRUFBQUEsS0FBSyxFQUFMQTtBQURZLENBQWQ7O0lBSVFDLFksR0FBaUJDLHlCLENBQWpCRCxZO0FBRVIsSUFBTUUsSUFBSSxHQUFHLElBQUlDLFVBQUosRUFBYjtBQUVBSCxZQUFZO0FBRVpFLElBQUksQ0FBQ0UsT0FBTCxlQUVFLDBCQUFDLGdCQUFELE9BRkYiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSwgUmVhY3QsIHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlld1wiO1xuXG53aW5kb3cuYXNzaWduKHtcbiAgUmVhY3Rcbn0pO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxucmVuZGVyU3R5bGVzKCk7XG5cbmJvZHkucHJlcGVuZChcblxuICA8VmlldyAvPlxuXG4pO1xuIl19