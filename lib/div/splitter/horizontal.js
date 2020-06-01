"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _splitter = _interopRequireDefault(require("../splitter"));

var _cursor = require("../../cursor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  height: 1rem;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HorizontalSplitter = /*#__PURE__*/function (_Splitter) {
  _inherits(HorizontalSplitter, _Splitter);

  var _super = _createSuper(HorizontalSplitter);

  function HorizontalSplitter() {
    _classCallCheck(this, HorizontalSplitter);

    return _super.apply(this, arguments);
  }

  _createClass(HorizontalSplitter, [{
    key: "mouseOverHandler",
    value: function mouseOverHandler(event, element) {
      var disabled = this.isDisabled();

      if (!disabled) {
        (0, _cursor.rowResizeCursor)();
      }
    }
  }, {
    key: "mouseMoveHandler",
    value: function mouseMoveHandler(event, element) {
      var pageY = event.pageY,
          mouseTop = pageY,
          disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          var direction = this.getDirection(),
              sizeableDiv = this.getSizeableDiv(),
              dragHandler = this.getDragHandler();
          var previousMouseTop = this.getPreviousMouseTop(),
              previousSizeableDivHeight = this.getPreviousSizeableDivHeight(),
              relativeMouseTop = mouseTop - previousMouseTop;
          var sizeableDivHeight = previousSizeableDivHeight - direction * relativeMouseTop;
          var height = sizeableDivHeight; ///

          sizeableDiv.setHeight(height);
          sizeableDivHeight = sizeableDiv.getHeight(); ///

          dragHandler && dragHandler(sizeableDivHeight);
        }
      }
    }
  }, {
    key: "mouseDownHandler",
    value: function mouseDownHandler(event, element) {
      var pageY = event.pageY,
          mouseTop = pageY,
          disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging(),
            sizeableDiv = this.getSizeableDiv(),
            previousMouseTop = mouseTop,
            ///
        sizeableDivHeight = sizeableDiv.getHeight(),
            previousSizeableDivHeight = sizeableDivHeight; ///

        this.setPreviousMouseTop(previousMouseTop);
        this.setPreviousSizeableDivHeight(previousSizeableDivHeight);
        (0, _cursor.rowResizeCursor)();

        if (!dragging) {
          this.startDrag();
        }
      }
    }
  }, {
    key: "getPreviousMouseTop",
    value: function getPreviousMouseTop() {
      var state = this.getState(),
          previousMouseTop = state.previousMouseTop;
      return previousMouseTop;
    }
  }, {
    key: "getPreviousSizeableDivHeight",
    value: function getPreviousSizeableDivHeight() {
      var state = this.getState(),
          previousSizeableDivHeight = state.previousSizeableDivHeight;
      return previousSizeableDivHeight;
    }
  }, {
    key: "setPreviousMouseTop",
    value: function setPreviousMouseTop(previousMouseTop) {
      this.updateState({
        previousMouseTop: previousMouseTop
      });
    }
  }, {
    key: "setPreviousSizeableDivHeight",
    value: function setPreviousSizeableDivHeight(previousSizeableDivHeight) {
      this.updateState({
        previousSizeableDivHeight: previousSizeableDivHeight
      });
    }
  }, {
    key: "setInitialState",
    value: function setInitialState() {
      var previousMouseTop = null,
          previousSizeableDivHeight = null;
      this.setState({
        previousMouseTop: previousMouseTop,
        previousSizeableDivHeight: previousSizeableDivHeight
      });
    }
  }]);

  return HorizontalSplitter;
}(_splitter["default"]);

_defineProperty(HorizontalSplitter, "defaultProperties", {
  className: "horizontal"
});

var _default = (0, _easyWithStyle["default"])(HorizontalSplitter)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwuanMiXSwibmFtZXMiOlsiSG9yaXpvbnRhbFNwbGl0dGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwicGFnZVkiLCJtb3VzZVRvcCIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsImRpcmVjdGlvbiIsImdldERpcmVjdGlvbiIsInNpemVhYmxlRGl2IiwiZ2V0U2l6ZWFibGVEaXYiLCJkcmFnSGFuZGxlciIsImdldERyYWdIYW5kbGVyIiwicHJldmlvdXNNb3VzZVRvcCIsImdldFByZXZpb3VzTW91c2VUb3AiLCJwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0IiwiZ2V0UHJldmlvdXNTaXplYWJsZURpdkhlaWdodCIsInJlbGF0aXZlTW91c2VUb3AiLCJzaXplYWJsZURpdkhlaWdodCIsImhlaWdodCIsInNldEhlaWdodCIsImdldEhlaWdodCIsInNldFByZXZpb3VzTW91c2VUb3AiLCJzZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0Iiwic3RhcnREcmFnIiwic3RhdGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0U3RhdGUiLCJTcGxpdHRlciIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxrQjs7Ozs7Ozs7Ozs7OztxQ0FDYUMsSyxFQUFPQyxPLEVBQVM7QUFDL0IsVUFBTUMsUUFBUSxHQUFHLEtBQUtDLFVBQUwsRUFBakI7O0FBRUEsVUFBSSxDQUFDRCxRQUFMLEVBQWU7QUFDYjtBQUNEO0FBQ0Y7OztxQ0FFZ0JGLEssRUFBT0MsTyxFQUFTO0FBQ3pCLFVBQUVHLEtBQUYsR0FBWUosS0FBWixDQUFFSSxLQUFGO0FBQUEsVUFDQUMsUUFEQSxHQUNXRCxLQURYO0FBQUEsVUFFQUYsUUFGQSxHQUVXLEtBQUtDLFVBQUwsRUFGWDs7QUFJTixVQUFJLENBQUNELFFBQUwsRUFBZTtBQUNiLFlBQU1JLFFBQVEsR0FBRyxLQUFLQyxVQUFMLEVBQWpCOztBQUVBLFlBQUlELFFBQUosRUFBYztBQUNaLGNBQU1FLFNBQVMsR0FBRyxLQUFLQyxZQUFMLEVBQWxCO0FBQUEsY0FDTUMsV0FBVyxHQUFHLEtBQUtDLGNBQUwsRUFEcEI7QUFBQSxjQUVNQyxXQUFXLEdBQUcsS0FBS0MsY0FBTCxFQUZwQjtBQUlBLGNBQU1DLGdCQUFnQixHQUFHLEtBQUtDLG1CQUFMLEVBQXpCO0FBQUEsY0FDTUMseUJBQXlCLEdBQUcsS0FBS0MsNEJBQUwsRUFEbEM7QUFBQSxjQUVNQyxnQkFBZ0IsR0FBR2IsUUFBUSxHQUFHUyxnQkFGcEM7QUFJQSxjQUFJSyxpQkFBaUIsR0FBR0gseUJBQXlCLEdBQUdSLFNBQVMsR0FBR1UsZ0JBQWhFO0FBRUEsY0FBTUUsTUFBTSxHQUFHRCxpQkFBZixDQVhZLENBV3NCOztBQUVsQ1QsVUFBQUEsV0FBVyxDQUFDVyxTQUFaLENBQXNCRCxNQUF0QjtBQUVBRCxVQUFBQSxpQkFBaUIsR0FBR1QsV0FBVyxDQUFDWSxTQUFaLEVBQXBCLENBZlksQ0Fla0M7O0FBRTlDVixVQUFBQSxXQUFXLElBQUlBLFdBQVcsQ0FBQ08saUJBQUQsQ0FBMUI7QUFDRDtBQUNGO0FBQ0Y7OztxQ0FFZ0JuQixLLEVBQU9DLE8sRUFBUztBQUN6QixVQUFFRyxLQUFGLEdBQVlKLEtBQVosQ0FBRUksS0FBRjtBQUFBLFVBQ0FDLFFBREEsR0FDV0QsS0FEWDtBQUFBLFVBRUFGLFFBRkEsR0FFVyxLQUFLQyxVQUFMLEVBRlg7O0FBSU4sVUFBSSxDQUFDRCxRQUFMLEVBQWU7QUFDYixZQUFNSSxRQUFRLEdBQUcsS0FBS0MsVUFBTCxFQUFqQjtBQUFBLFlBQ01HLFdBQVcsR0FBRyxLQUFLQyxjQUFMLEVBRHBCO0FBQUEsWUFFTUcsZ0JBQWdCLEdBQUdULFFBRnpCO0FBQUEsWUFFb0M7QUFDOUJjLFFBQUFBLGlCQUFpQixHQUFHVCxXQUFXLENBQUNZLFNBQVosRUFIMUI7QUFBQSxZQUlNTix5QkFBeUIsR0FBR0csaUJBSmxDLENBRGEsQ0FLeUM7O0FBRXRELGFBQUtJLG1CQUFMLENBQXlCVCxnQkFBekI7QUFFQSxhQUFLVSw0QkFBTCxDQUFrQ1IseUJBQWxDO0FBRUE7O0FBRUEsWUFBSSxDQUFDVixRQUFMLEVBQWU7QUFDYixlQUFLbUIsU0FBTDtBQUNEO0FBQ0Y7QUFDRjs7OzBDQUVxQjtBQUNkLFVBQUFDLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQVI7QUFBQSxVQUNFYixnQkFERixHQUN1QlksS0FEdkIsQ0FDRVosZ0JBREY7QUFHTixhQUFPQSxnQkFBUDtBQUNEOzs7bURBRThCO0FBQ3ZCLFVBQUFZLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQVI7QUFBQSxVQUNFWCx5QkFERixHQUNnQ1UsS0FEaEMsQ0FDRVYseUJBREY7QUFHTixhQUFPQSx5QkFBUDtBQUNEOzs7d0NBRW1CRixnQixFQUFrQjtBQUNwQyxXQUFLYyxXQUFMLENBQWlCO0FBQ2ZkLFFBQUFBLGdCQUFnQixFQUFoQkE7QUFEZSxPQUFqQjtBQUdEOzs7aURBRTRCRSx5QixFQUEyQjtBQUN0RCxXQUFLWSxXQUFMLENBQWlCO0FBQ2ZaLFFBQUFBLHlCQUF5QixFQUF6QkE7QUFEZSxPQUFqQjtBQUdEOzs7c0NBRWlCO0FBQ2hCLFVBQU1GLGdCQUFnQixHQUFHLElBQXpCO0FBQUEsVUFDTUUseUJBQXlCLEdBQUcsSUFEbEM7QUFHQSxXQUFLYSxRQUFMLENBQWM7QUFDWmYsUUFBQUEsZ0JBQWdCLEVBQWhCQSxnQkFEWTtBQUVaRSxRQUFBQSx5QkFBeUIsRUFBekJBO0FBRlksT0FBZDtBQUlEOzs7O0VBakc4QmMsb0I7O2dCQUEzQi9CLGtCLHVCQW1HdUI7QUFDekJnQyxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQUtkLCtCQUFVaEMsa0JBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgU3BsaXR0ZXIgZnJvbSBcIi4uL3NwbGl0dGVyXCI7XG5cbmltcG9ydCB7IHJvd1Jlc2l6ZUN1cnNvciB9IGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcblxuY2xhc3MgSG9yaXpvbnRhbFNwbGl0dGVyIGV4dGVuZHMgU3BsaXR0ZXIge1xuICBtb3VzZU92ZXJIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHJvd1Jlc2l6ZUN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IHBhZ2VZIH0gPSBldmVudCxcbiAgICAgICAgICBtb3VzZVRvcCA9IHBhZ2VZLCAgLy8vXG4gICAgICAgICAgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgICAgICBzaXplYWJsZURpdiA9IHRoaXMuZ2V0U2l6ZWFibGVEaXYoKSxcbiAgICAgICAgICAgICAgZHJhZ0hhbmRsZXIgPSB0aGlzLmdldERyYWdIYW5kbGVyKCk7XG5cbiAgICAgICAgY29uc3QgcHJldmlvdXNNb3VzZVRvcCA9IHRoaXMuZ2V0UHJldmlvdXNNb3VzZVRvcCgpLFxuICAgICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0ID0gdGhpcy5nZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0KCksXG4gICAgICAgICAgICAgIHJlbGF0aXZlTW91c2VUb3AgPSBtb3VzZVRvcCAtIHByZXZpb3VzTW91c2VUb3A7XG5cbiAgICAgICAgbGV0IHNpemVhYmxlRGl2SGVpZ2h0ID0gcHJldmlvdXNTaXplYWJsZURpdkhlaWdodCAtIGRpcmVjdGlvbiAqIHJlbGF0aXZlTW91c2VUb3A7XG5cbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gc2l6ZWFibGVEaXZIZWlnaHQ7IC8vL1xuXG4gICAgICAgIHNpemVhYmxlRGl2LnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICAgIHNpemVhYmxlRGl2SGVpZ2h0ID0gc2l6ZWFibGVEaXYuZ2V0SGVpZ2h0KCk7ICAvLy9cblxuICAgICAgICBkcmFnSGFuZGxlciAmJiBkcmFnSGFuZGxlcihzaXplYWJsZURpdkhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHsgcGFnZVkgfSA9IGV2ZW50LFxuICAgICAgICAgIG1vdXNlVG9wID0gcGFnZVksICAvLy9cbiAgICAgICAgICBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRGl2ID0gdGhpcy5nZXRTaXplYWJsZURpdigpLFxuICAgICAgICAgICAgcHJldmlvdXNNb3VzZVRvcCA9IG1vdXNlVG9wLCAgLy8vXG4gICAgICAgICAgICBzaXplYWJsZURpdkhlaWdodCA9IHNpemVhYmxlRGl2LmdldEhlaWdodCgpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodCA9IHNpemVhYmxlRGl2SGVpZ2h0OyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNNb3VzZVRvcChwcmV2aW91c01vdXNlVG9wKTtcblxuICAgICAgdGhpcy5zZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0KHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQpO1xuXG4gICAgICByb3dSZXNpemVDdXJzb3IoKTtcblxuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0YXJ0RHJhZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFByZXZpb3VzTW91c2VUb3AoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c01vdXNlVG9wIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c01vdXNlVG9wO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNTaXplYWJsZURpdkhlaWdodCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQ7XG4gIH1cblxuICBzZXRQcmV2aW91c01vdXNlVG9wKHByZXZpb3VzTW91c2VUb3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldFByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQocHJldmlvdXNTaXplYWJsZURpdkhlaWdodCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzTW91c2VUb3AgPSBudWxsLFxuICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlVG9wLFxuICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJob3Jpem9udGFsXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEhvcml6b250YWxTcGxpdHRlcilgXG5cbiAgaGVpZ2h0OiAxcmVtO1xuXG5gO1xuIl19