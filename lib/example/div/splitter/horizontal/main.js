"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _index = require("../../../../index");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  background-color: black;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MainHorizontalSplitterDiv = function(HorizontalSplitterDiv) {
    _inherits(MainHorizontalSplitterDiv, _index.HorizontalSplitterDiv);
    function MainHorizontalSplitterDiv() {
        _classCallCheck(this, MainHorizontalSplitterDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(MainHorizontalSplitterDiv).apply(this, arguments));
    }
    _createClass(MainHorizontalSplitterDiv, [
        {
            key: "initialise",
            value: function initialise() {
                var _properties = this.properties, bottomLeftDiv = _properties.bottomLeftDiv;
                this.onDrag(function(height) {
                    return bottomLeftDiv.setHeight(height);
                });
                _get(_getPrototypeOf(MainHorizontalSplitterDiv.prototype), "initialise", this).call(this);
            }
        }
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var leftHorizontalSplitterDiv = _index.HorizontalSplitterDiv.fromClass(Class, properties);
                leftHorizontalSplitterDiv.initialise();
                return leftHorizontalSplitterDiv;
            }
        }
    ]);
    return MainHorizontalSplitterDiv;
}(_index.HorizontalSplitterDiv);
_defineProperty(MainHorizontalSplitterDiv, "defaultProperties", {
    className: "main"
});
var _default = _easyWithStyle.default(MainHorizontalSplitterDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zcGxpdHRlci9ob3Jpem9udGFsL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEhvcml6b250YWxTcGxpdHRlckRpdiB9IGZyb20gXCIuLi8uLi8uLi8uLi9pbmRleFwiOyAgLy8vXG5cbmNsYXNzIE1haW5Ib3Jpem9udGFsU3BsaXR0ZXJEaXYgZXh0ZW5kcyBIb3Jpem9udGFsU3BsaXR0ZXJEaXYge1xuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IHsgYm90dG9tTGVmdERpdiB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgdGhpcy5vbkRyYWcoKGhlaWdodCkgPT4gYm90dG9tTGVmdERpdi5zZXRIZWlnaHQoaGVpZ2h0KSk7XG5cbiAgICBzdXBlci5pbml0aWFsaXNlKCk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1haW5cIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBsZWZ0SG9yaXpvbnRhbFNwbGl0dGVyRGl2ID0gSG9yaXpvbnRhbFNwbGl0dGVyRGl2LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBsZWZ0SG9yaXpvbnRhbFNwbGl0dGVyRGl2LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBsZWZ0SG9yaXpvbnRhbFNwbGl0dGVyRGl2O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShNYWluSG9yaXpvbnRhbFNwbGl0dGVyRGl2KWBcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLGNBQUE7SUFFQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F3QkEsa0NBSUE7Ozs7Ozs7SUExQkEseUJBQUEsWUFBQSxxQkFBQTtjQUFBLHlCQUFBLEVBRkEsTUFBQTthQUVBLHlCQUFBOzhCQUFBLHlCQUFBO2dFQUFBLHlCQUFBOztpQkFBQSx5QkFBQTs7QUFDQSxlQUFBLEdBQUEsVUFBQTs0QkFBQSxVQUFBO29CQUNBLFdBQUEsUUFBQSxVQUFBLEVBQUEsYUFBQSxHQUFBLFdBQUEsQ0FBQSxhQUFBO3FCQUVBLE1BQUEsVUFBQSxNQUFBOzJCQUFBLGFBQUEsQ0FBQSxTQUFBLENBQUEsTUFBQTs7cUNBSkEseUJBQUEsY0FNQSxVQUFBOzs7OztBQU9BLGVBQUEsR0FBQSxTQUFBOzRCQUFBLFNBQUEsQ0FBQSxLQUFBLEVBQUEsVUFBQTtvQkFDQSx5QkFBQSxHQWhCQSxNQUFBLHVCQWdCQSxTQUFBLENBQUEsS0FBQSxFQUFBLFVBQUE7QUFFQSx5Q0FBQSxDQUFBLFVBQUE7dUJBRUEseUJBQUE7Ozs7V0FsQkEseUJBQUE7RUFGQSxNQUFBO2dCQUVBLHlCQUFBLEdBU0EsaUJBQUE7QUFDQSxhQUFBLEdBQUEsSUFBQTs7ZUFkQSxjQUFBLFNBMEJBLHlCQUFBIn0=