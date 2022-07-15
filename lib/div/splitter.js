"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _easyDragAndDrop = require("easy-drag-and-drop");
var _sizeable = /*#__PURE__*/ _interopRequireDefault(require("../div/sizeable"));
var _sizeable1 = /*#__PURE__*/ _interopRequireDefault(require("../section/sizeable"));
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
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "stopDragHandler", function(dropElement, aborted, element, done) {
            (0, _cursor.resetCursor)();
            done();
        });
        _defineProperty(_assertThisInitialized(_this), "mouseOutHandler", function(event, element) {
            (0, _cursor.resetCursor)();
        });
        return _this;
    }
    _createClass(SplitterDiv, [
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
var _default = (0, _easyWithStyle.default)(SplitterDiv)(_templateObject());
function isElementSizeableElement(element) {
    var elementSizeableElement = _instanceof(element, _sizeable.default) || _instanceof(element, _sizeable1.default);
    return elementSizeableElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZHJhZ01peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcblxuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBTaXplYWJsZVNlY3Rpb24gZnJvbSBcIi4uL3NlY3Rpb24vc2l6ZWFibGVcIjtcblxuaW1wb3J0IHsgcmVzZXRDdXJzb3IgfSBmcm9tIFwiLi4vY3Vyc29yXCI7XG5cbmNsYXNzIFNwbGl0dGVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIHN0b3BEcmFnSGFuZGxlciA9IChkcm9wRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIHJlc2V0Q3Vyc29yKCk7XG5cbiAgICBkb25lKCk7XG4gIH1cblxuICBtb3VzZU91dEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICByZXNldEN1cnNvcigpO1xuICB9XG5cbiAgZ2V0U2l6ZWFibGVFbGVtZW50KCkge1xuICAgIGxldCBzaXplYWJsZUVsZW1lbnQ7XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0VsZW1lbnQgPSB0aGlzLmdldE5leHRTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSB0aGlzLmdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoKSxcbiAgICAgICAgICBuZXh0U2libGluZ0VsZW1lbnRTaXplYWJsZUVsZW1lbnQgPSBpc0VsZW1lbnRTaXplYWJsZUVsZW1lbnQobmV4dFNpYmxpbmdFbGVtZW50KSxcbiAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50U2l6ZWFibGVFbGVtZW50ID0gaXNFbGVtZW50U2l6ZWFibGVFbGVtZW50KHByZXZpb3VzU2libGluZ0VsZW1lbnQpO1xuXG4gICAgaWYgKG5leHRTaWJsaW5nRWxlbWVudFNpemVhYmxlRWxlbWVudCkge1xuICAgICAgc2l6ZWFibGVFbGVtZW50ID0gbmV4dFNpYmxpbmdFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXNTaWJsaW5nRWxlbWVudFNpemVhYmxlRWxlbWVudCkge1xuICAgICAgc2l6ZWFibGVFbGVtZW50ID0gcHJldmlvdXNTaWJsaW5nRWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpemVhYmxlRWxlbWVudDtcbiAgfVxuXG4gIGdldERpcmVjdGlvbigpIHtcbiAgICBsZXQgZGlyZWN0aW9uO1xuXG4gICAgY29uc3QgbmV4dFNpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXROZXh0U2libGluZ0VsZW1lbnQoKSxcbiAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgbmV4dFNpYmxpbmdFbGVtZW50U2l6ZWFibGVFbGVtZW50ID0gaXNFbGVtZW50U2l6ZWFibGVFbGVtZW50KG5leHRTaWJsaW5nRWxlbWVudCksXG4gICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudFNpemVhYmxlRWxlbWVudCA9IGlzRWxlbWVudFNpemVhYmxlRWxlbWVudChwcmV2aW91c1NpYmxpbmdFbGVtZW50KTtcblxuICAgIGlmIChuZXh0U2libGluZ0VsZW1lbnRTaXplYWJsZUVsZW1lbnQpIHtcbiAgICAgIGRpcmVjdGlvbiA9ICsxO1xuICAgIH1cblxuICAgIGlmIChwcmV2aW91c1NpYmxpbmdFbGVtZW50U2l6ZWFibGVFbGVtZW50KSB7XG4gICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKTtcblxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlRHJhZygpO1xuXG4gICAgdGhpcy5vbkRyYWcodGhpcy5kcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vblN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vbk1vdXNlT3Zlcih0aGlzLm1vdXNlT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vbk1vdXNlT3V0KHRoaXMubW91c2VPdXRIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZNb3VzZU92ZXIodGhpcy5tb3VzZU92ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZlN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmRHJhZyh0aGlzLmRyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbkRyYWdcIixcbiAgICBcImRpc2FibGVkXCIsXG4gICAgXCJvblN0b3BEcmFnXCIsXG4gICAgXCJvblN0YXJ0RHJhZ1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzcGxpdHRlclwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHNwbGl0dGVyRGl2ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIHNwbGl0dGVyRGl2O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU3BsaXR0ZXJEaXYucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFNwbGl0dGVyRGl2KWBcblxuICBmbGV4LXNocmluazogMDtcblxuYDtcblxuZnVuY3Rpb24gaXNFbGVtZW50U2l6ZWFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgZWxlbWVudFNpemVhYmxlRWxlbWVudCA9IChlbGVtZW50IGluc3RhbmNlb2YgU2l6ZWFibGVEaXYpIHx8IChlbGVtZW50IGluc3RhbmNlb2YgU2l6ZWFibGVTZWN0aW9uKTtcblxuICByZXR1cm4gZWxlbWVudFNpemVhYmxlRWxlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJTcGxpdHRlckRpdiIsInN0b3BEcmFnSGFuZGxlciIsImRyb3BFbGVtZW50IiwiYWJvcnRlZCIsImVsZW1lbnQiLCJkb25lIiwicmVzZXRDdXJzb3IiLCJtb3VzZU91dEhhbmRsZXIiLCJldmVudCIsImdldFNpemVhYmxlRWxlbWVudCIsInNpemVhYmxlRWxlbWVudCIsIm5leHRTaWJsaW5nRWxlbWVudCIsImdldE5leHRTaWJsaW5nRWxlbWVudCIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50IiwibmV4dFNpYmxpbmdFbGVtZW50U2l6ZWFibGVFbGVtZW50IiwiaXNFbGVtZW50U2l6ZWFibGVFbGVtZW50IiwicHJldmlvdXNTaWJsaW5nRWxlbWVudFNpemVhYmxlRWxlbWVudCIsImdldERpcmVjdGlvbiIsImRpcmVjdGlvbiIsImVuYWJsZSIsInJlbW92ZUNsYXNzIiwiZGlzYWJsZSIsImFkZENsYXNzIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwiaGFzQ2xhc3MiLCJkaWRNb3VudCIsImVuYWJsZURyYWciLCJvbkRyYWciLCJkcmFnSGFuZGxlciIsIm9uU3RvcERyYWciLCJvblN0YXJ0RHJhZyIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJvbk1vdXNlT3ZlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJvbk1vdXNlT3V0Iiwid2lsbFVubW91bnQiLCJvZmZNb3VzZU91dCIsIm9mZk1vdXNlT3ZlciIsIm9mZlN0YXJ0RHJhZyIsIm9mZlN0b3BEcmFnIiwib2ZmRHJhZyIsImRpc2FibGVEcmFnIiwiaW5pdGlhbGlzZSIsInNldEluaXRpYWxTdGF0ZSIsImZyb21DbGFzcyIsIkNsYXNzIiwicHJvcGVydGllcyIsInNwbGl0dGVyRGl2IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJhZ01peGlucyIsIndpdGhTdHlsZSIsImVsZW1lbnRTaXplYWJsZUVsZW1lbnQiLCJTaXplYWJsZURpdiIsIlNpemVhYmxlU2VjdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQWlJYixTQUlFOzs7ZUFKRixRQUlFOzs7a0VBbklvQixpQkFBaUI7b0JBRWYsTUFBTTsrQkFDSCxvQkFBb0I7NkRBRXZCLGlCQUFpQjs4REFDYixxQkFBcUI7c0JBRXJCLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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