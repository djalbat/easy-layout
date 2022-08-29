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
            key: "getSizeableDiv",
            value: function getSizeableDiv() {
                var sizeableDiv;
                var nextSiblingElement = this.getNextSiblingElement(), previousSiblingElement = this.getPreviousSiblingElement(), nextSiblingElementSizeableDiv = _instanceof(nextSiblingElement, _sizeable.default), previousSiblingElementSizeableDiv = _instanceof(previousSiblingElement, _sizeable.default);
                if (nextSiblingElementSizeableDiv) {
                    sizeableDiv = nextSiblingElement; ///
                }
                if (previousSiblingElementSizeableDiv) {
                    sizeableDiv = previousSiblingElement; ///
                }
                return sizeableDiv;
            }
        },
        {
            key: "getDirection",
            value: function getDirection() {
                var direction;
                var nextSiblingElement = this.getNextSiblingElement(), previousSiblingElement = this.getPreviousSiblingElement(), nextSiblingElementSizeableDiv = _instanceof(nextSiblingElement, _sizeable.default), previousSiblingElementSizeableDiv = _instanceof(previousSiblingElement, _sizeable.default);
                if (nextSiblingElementSizeableDiv) {
                    direction = +1;
                }
                if (previousSiblingElementSizeableDiv) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZHJhZ01peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcblxuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuLi9kaXYvc2l6ZWFibGVcIjtcblxuaW1wb3J0IHsgcmVzZXRDdXJzb3IgfSBmcm9tIFwiLi4vY3Vyc29yXCI7XG5cbmNsYXNzIFNwbGl0dGVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIHN0b3BEcmFnSGFuZGxlciA9IChkcm9wRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIHJlc2V0Q3Vyc29yKCk7XG5cbiAgICBkb25lKCk7XG4gIH1cblxuICBtb3VzZU91dEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICByZXNldEN1cnNvcigpO1xuICB9XG5cbiAgZ2V0U2l6ZWFibGVEaXYoKSB7XG4gICAgbGV0IHNpemVhYmxlRGl2O1xuXG4gICAgY29uc3QgbmV4dFNpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXROZXh0U2libGluZ0VsZW1lbnQoKSxcbiAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgbmV4dFNpYmxpbmdFbGVtZW50U2l6ZWFibGVEaXYgPSAobmV4dFNpYmxpbmdFbGVtZW50IGluc3RhbmNlb2YgU2l6ZWFibGVEaXYpLFxuICAgICAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnRTaXplYWJsZURpdiA9IChwcmV2aW91c1NpYmxpbmdFbGVtZW50IGluc3RhbmNlb2YgU2l6ZWFibGVEaXYpO1xuXG4gICAgaWYgKG5leHRTaWJsaW5nRWxlbWVudFNpemVhYmxlRGl2KSB7XG4gICAgICBzaXplYWJsZURpdiA9IG5leHRTaWJsaW5nRWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzU2libGluZ0VsZW1lbnRTaXplYWJsZURpdikge1xuICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmdFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2l6ZWFibGVEaXY7XG4gIH1cblxuICBnZXREaXJlY3Rpb24oKSB7XG4gICAgbGV0IGRpcmVjdGlvbjtcblxuICAgIGNvbnN0IG5leHRTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0TmV4dFNpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgIG5leHRTaWJsaW5nRWxlbWVudFNpemVhYmxlRGl2ID0gKG5leHRTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KSxcbiAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50U2l6ZWFibGVEaXYgPSAocHJldmlvdXNTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KTtcblxuICAgIGlmIChuZXh0U2libGluZ0VsZW1lbnRTaXplYWJsZURpdikge1xuICAgICAgZGlyZWN0aW9uID0gKzE7XG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzU2libGluZ0VsZW1lbnRTaXplYWJsZURpdikge1xuICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0NsYXNzKFwiZGlzYWJsZWRcIik7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLmVuYWJsZURyYWcoKTtcblxuICAgIHRoaXMub25EcmFnKHRoaXMuZHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vblN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25TdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25Nb3VzZU92ZXIodGhpcy5tb3VzZU92ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25Nb3VzZU91dCh0aGlzLm1vdXNlT3V0SGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZk1vdXNlT3V0KHRoaXMubW91c2VPdXRIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmTW91c2VPdmVyKHRoaXMubW91c2VPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZlN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZTdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZkRyYWcodGhpcy5kcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25EcmFnXCIsXG4gICAgXCJkaXNhYmxlZFwiLFxuICAgIFwib25TdG9wRHJhZ1wiLFxuICAgIFwib25TdGFydERyYWdcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwic3BsaXR0ZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBzcGxpdHRlckRpdiA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBzcGxpdHRlckRpdjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNwbGl0dGVyRGl2LnByb3RvdHlwZSwgZHJhZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTcGxpdHRlckRpdilgXG5cbiAgZmxleC1zaHJpbms6IDA7XG5cbmA7XG4iXSwibmFtZXMiOlsiU3BsaXR0ZXJEaXYiLCJzdG9wRHJhZ0hhbmRsZXIiLCJkcm9wRWxlbWVudCIsImFib3J0ZWQiLCJlbGVtZW50IiwiZG9uZSIsInJlc2V0Q3Vyc29yIiwibW91c2VPdXRIYW5kbGVyIiwiZXZlbnQiLCJnZXRTaXplYWJsZURpdiIsInNpemVhYmxlRGl2IiwibmV4dFNpYmxpbmdFbGVtZW50IiwiZ2V0TmV4dFNpYmxpbmdFbGVtZW50IiwicHJldmlvdXNTaWJsaW5nRWxlbWVudCIsImdldFByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJuZXh0U2libGluZ0VsZW1lbnRTaXplYWJsZURpdiIsIlNpemVhYmxlRGl2IiwicHJldmlvdXNTaWJsaW5nRWxlbWVudFNpemVhYmxlRGl2IiwiZ2V0RGlyZWN0aW9uIiwiZGlyZWN0aW9uIiwiZW5hYmxlIiwicmVtb3ZlQ2xhc3MiLCJkaXNhYmxlIiwiYWRkQ2xhc3MiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJoYXNDbGFzcyIsImRpZE1vdW50IiwiZW5hYmxlRHJhZyIsIm9uRHJhZyIsImRyYWdIYW5kbGVyIiwib25TdG9wRHJhZyIsIm9uU3RhcnREcmFnIiwic3RhcnREcmFnSGFuZGxlciIsIm9uTW91c2VPdmVyIiwibW91c2VPdmVySGFuZGxlciIsIm9uTW91c2VPdXQiLCJ3aWxsVW5tb3VudCIsIm9mZk1vdXNlT3V0Iiwib2ZmTW91c2VPdmVyIiwib2ZmU3RhcnREcmFnIiwib2ZmU3RvcERyYWciLCJvZmZEcmFnIiwiZGlzYWJsZURyYWciLCJpbml0aWFsaXNlIiwic2V0SW5pdGlhbFN0YXRlIiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwic3BsaXR0ZXJEaXYiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJkcmFnTWl4aW5zIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBZ0liLFNBSUU7OztlQUpGLFFBSUU7OztrRUFsSW9CLGlCQUFpQjtvQkFFZixNQUFNOytCQUNILG9CQUFvQjs2REFFdkIsaUJBQWlCO3NCQUViLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkMsSUFBQSxBQUFNQSxXQUFXLGlCQW1IZCxBQW5ISDtjQUFNQSxXQUFXOzhCQUFYQSxXQUFXO2FBQVhBLFdBQVc7OEJBQVhBLFdBQVc7OztRQUNmQywrQ0FBQUEsaUJBQWUsRUFBRyxTQUFDQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUs7WUFDekRDLElBQUFBLE9BQVcsWUFBQSxHQUFFLENBQUM7WUFFZEQsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUEsQ0FBQTtRQUVERSwrQ0FBQUEsaUJBQWUsRUFBRyxTQUFDQyxLQUFLLEVBQUVKLE9B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