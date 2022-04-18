"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _easyDragAndDrop = require("easy-drag-and-drop");
var _sizeable = _interopRequireDefault(require("../div/sizeable"));
var _sizeable1 = _interopRequireDefault(require("../section/sizeable"));
var _cursor = require("../cursor");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
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
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  flex-shrink: 0;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var SplitterDiv = /*#__PURE__*/ function(Element) {
    _inherits(SplitterDiv, Element);
    var _super = _createSuper(SplitterDiv);
    function SplitterDiv() {
        _classCallCheck(this, SplitterDiv);
        return _super.apply(this, arguments);
    }
    _createClass(SplitterDiv, [
        {
            key: "mouseOutHandler",
            value: function mouseOutHandler(event, element) {
                var disabled = this.isDisabled();
                if (!disabled) {
                    (0, _cursor).resetCursor();
                }
            }
        },
        {
            key: "stopDragHandler",
            value: function stopDragHandler(dropElement, aborted, element, done) {
                var disabled = this.isDisabled();
                if (!disabled) {
                    (0, _cursor).resetCursor();
                }
                done();
            }
        },
        {
            key: "getSizeableElement",
            value: function getSizeableElement() {
                var sizeableElement;
                var nextSiblingElement = this.getNextSiblingElement(), previousSiblingElement = this.getPreviousSiblingElement(), nextSiblingElementSizeableElement = isElementSizeableElement(nextSiblingElement), previousSiblingElementSizeableElement = isElementSizeableElement(previousSiblingElement);
                if (nextSiblingElementSizeableElement) {
                    sizeableElement = nextSiblingElement; ///
                }
                if (previousSiblingElementSizeableElement) {
                    sizeableElement = previousSiblingElement; ///
                }
                return sizeableElement;
            }
        },
        {
            key: "getDirection",
            value: function getDirection() {
                var direction;
                var nextSiblingElement = this.getNextSiblingElement(), previousSiblingElement = this.getPreviousSiblingElement(), nextSiblingElementSizeableElement = isElementSizeableElement(nextSiblingElement), previousSiblingElementSizeableElement = isElementSizeableElement(previousSiblingElement);
                if (nextSiblingElementSizeableElement) {
                    direction = +1;
                }
                if (previousSiblingElementSizeableElement) {
                    direction = -1;
                }
                return direction;
            }
        },
        {
            key: "enable",
            value: function enable() {
                this.removeClass("disabled");
            }
        },
        {
            key: "disable",
            value: function disable() {
                this.addClass("disabled");
            }
        },
        {
            key: "isDisabled",
            value: function isDisabled() {
                var disabled = this.hasClass("disabled");
                return disabled;
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.enableDrag();
                this.onDrag(this.dragHandler, this);
                this.onStopDrag(this.stopDragHandler, this);
                this.onStartDrag(this.startDragHandler, this);
                this.onMouseOver(this.mouseOverHandler, this);
                this.onMouseOut(this.mouseOutHandler, this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offMouseOut(this.mouseOutHandler, this);
                this.offMouseOver(this.mouseOverHandler, this);
                this.offStartDrag(this.startDragHandler, this);
                this.offStopDrag(this.stopDragHandler, this);
                this.offDrag(this.dragHandler, this);
                this.disableDrag();
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.setInitialState();
            }
        }
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var splitterDiv = _easy.Element.fromClass(Class, properties);
                return splitterDiv;
            }
        }
    ]);
    return SplitterDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(SplitterDiv, "tagName", "div");
_defineProperty(SplitterDiv, "ignoredProperties", [
    "onDrag",
    "disabled",
    "onStopDrag",
    "onStartDrag"
]);
_defineProperty(SplitterDiv, "defaultProperties", {
    className: "splitter"
});
Object.assign(SplitterDiv.prototype, _easyDragAndDrop.dragMixins);
var _default = (0, _easyWithStyle).default(SplitterDiv)(_templateObject());
exports.default = _default;
function isElementSizeableElement(element) {
    var elementSizeableElement = _instanceof(element, _sizeable.default) || _instanceof(element, _sizeable1.default);
    return elementSizeableElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZHJhZ01peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcblxuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBTaXplYWJsZVNlY3Rpb24gZnJvbSBcIi4uL3NlY3Rpb24vc2l6ZWFibGVcIjtcblxuaW1wb3J0IHsgcmVzZXRDdXJzb3IgfSBmcm9tIFwiLi4vY3Vyc29yXCI7XG5cbmNsYXNzIFNwbGl0dGVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIG1vdXNlT3V0SGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICByZXNldEN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIHN0b3BEcmFnSGFuZGxlcihkcm9wRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICByZXNldEN1cnNvcigpO1xuICAgIH1cblxuICAgIGRvbmUoKTtcbiAgfVxuXG4gIGdldFNpemVhYmxlRWxlbWVudCgpIHtcbiAgICBsZXQgc2l6ZWFibGVFbGVtZW50O1xuXG4gICAgY29uc3QgbmV4dFNpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXROZXh0U2libGluZ0VsZW1lbnQoKSxcbiAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgbmV4dFNpYmxpbmdFbGVtZW50U2l6ZWFibGVFbGVtZW50ID0gaXNFbGVtZW50U2l6ZWFibGVFbGVtZW50KG5leHRTaWJsaW5nRWxlbWVudCksXG4gICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudFNpemVhYmxlRWxlbWVudCA9IGlzRWxlbWVudFNpemVhYmxlRWxlbWVudChwcmV2aW91c1NpYmxpbmdFbGVtZW50KTtcblxuICAgIGlmIChuZXh0U2libGluZ0VsZW1lbnRTaXplYWJsZUVsZW1lbnQpIHtcbiAgICAgIHNpemVhYmxlRWxlbWVudCA9IG5leHRTaWJsaW5nRWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzU2libGluZ0VsZW1lbnRTaXplYWJsZUVsZW1lbnQpIHtcbiAgICAgIHNpemVhYmxlRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0VsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzaXplYWJsZUVsZW1lbnQ7XG4gIH1cblxuICBnZXREaXJlY3Rpb24oKSB7XG4gICAgbGV0IGRpcmVjdGlvbjtcblxuICAgIGNvbnN0IG5leHRTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0TmV4dFNpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgIG5leHRTaWJsaW5nRWxlbWVudFNpemVhYmxlRWxlbWVudCA9IGlzRWxlbWVudFNpemVhYmxlRWxlbWVudChuZXh0U2libGluZ0VsZW1lbnQpLFxuICAgICAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnRTaXplYWJsZUVsZW1lbnQgPSBpc0VsZW1lbnRTaXplYWJsZUVsZW1lbnQocHJldmlvdXNTaWJsaW5nRWxlbWVudCk7XG5cbiAgICBpZiAobmV4dFNpYmxpbmdFbGVtZW50U2l6ZWFibGVFbGVtZW50KSB7XG4gICAgICBkaXJlY3Rpb24gPSArMTtcbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXNTaWJsaW5nRWxlbWVudFNpemVhYmxlRWxlbWVudCkge1xuICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0NsYXNzKFwiZGlzYWJsZWRcIik7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLmVuYWJsZURyYWcoKTtcblxuICAgIHRoaXMub25EcmFnKHRoaXMuZHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vblN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25TdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25Nb3VzZU92ZXIodGhpcy5tb3VzZU92ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25Nb3VzZU91dCh0aGlzLm1vdXNlT3V0SGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZk1vdXNlT3V0KHRoaXMubW91c2VPdXRIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmTW91c2VPdmVyKHRoaXMubW91c2VPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZlN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZTdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZkRyYWcodGhpcy5kcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25EcmFnXCIsXG4gICAgXCJkaXNhYmxlZFwiLFxuICAgIFwib25TdG9wRHJhZ1wiLFxuICAgIFwib25TdGFydERyYWdcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwic3BsaXR0ZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBzcGxpdHRlckRpdiA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBzcGxpdHRlckRpdjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNwbGl0dGVyRGl2LnByb3RvdHlwZSwgZHJhZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTcGxpdHRlckRpdilgXG5cbiAgZmxleC1zaHJpbms6IDA7XG5cbmA7XG5cbmZ1bmN0aW9uIGlzRWxlbWVudFNpemVhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IGVsZW1lbnRTaXplYWJsZUVsZW1lbnQgPSAoZWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KSB8fCAoZWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlU2VjdGlvbik7XG5cbiAgcmV0dXJuIGVsZW1lbnRTaXplYWJsZUVsZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiU3BsaXR0ZXJEaXYiLCJtb3VzZU91dEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJyZXNldEN1cnNvciIsInN0b3BEcmFnSGFuZGxlciIsImRyb3BFbGVtZW50IiwiYWJvcnRlZCIsImRvbmUiLCJnZXRTaXplYWJsZUVsZW1lbnQiLCJzaXplYWJsZUVsZW1lbnQiLCJuZXh0U2libGluZ0VsZW1lbnQiLCJnZXROZXh0U2libGluZ0VsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCIsIm5leHRTaWJsaW5nRWxlbWVudFNpemVhYmxlRWxlbWVudCIsImlzRWxlbWVudFNpemVhYmxlRWxlbWVudCIsInByZXZpb3VzU2libGluZ0VsZW1lbnRTaXplYWJsZUVsZW1lbnQiLCJnZXREaXJlY3Rpb24iLCJkaXJlY3Rpb24iLCJlbmFibGUiLCJyZW1vdmVDbGFzcyIsImRpc2FibGUiLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwiZGlkTW91bnQiLCJlbmFibGVEcmFnIiwib25EcmFnIiwiZHJhZ0hhbmRsZXIiLCJvblN0b3BEcmFnIiwib25TdGFydERyYWciLCJzdGFydERyYWdIYW5kbGVyIiwib25Nb3VzZU92ZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwib25Nb3VzZU91dCIsIndpbGxVbm1vdW50Iiwib2ZmTW91c2VPdXQiLCJvZmZNb3VzZU92ZXIiLCJvZmZTdGFydERyYWciLCJvZmZTdG9wRHJhZyIsIm9mZkRyYWciLCJkaXNhYmxlRHJhZyIsImluaXRpYWxpc2UiLCJzZXRJbml0aWFsU3RhdGUiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJzcGxpdHRlckRpdiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImRyYWdNaXhpbnMiLCJ3aXRoU3R5bGUiLCJlbGVtZW50U2l6ZWFibGVFbGVtZW50IiwiU2l6ZWFibGVEaXYiLCJTaXplYWJsZVNlY3Rpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLGNBQWlCLGtDQUFq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