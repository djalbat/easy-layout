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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
        "\n\n  background-color: black;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MainHorizontalSplitterDiv = /*#__PURE__*/ function(HorizontalSplitterDiv) {
    _inherits(MainHorizontalSplitterDiv, HorizontalSplitterDiv);
    var _super = _createSuper(MainHorizontalSplitterDiv);
    function MainHorizontalSplitterDiv() {
        _classCallCheck(this, MainHorizontalSplitterDiv);
        return _super.apply(this, arguments);
    }
    _createClass(MainHorizontalSplitterDiv, [
        {
            key: "dragHandler",
            value: function dragHandler(sizeableDivHeight) {
                var bottomLeftDiv = this.properties.bottomLeftDiv, height = sizeableDivHeight; ///
                bottomLeftDiv.setHeight(height);
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                _get(_getPrototypeOf(MainHorizontalSplitterDiv.prototype), "didMount", this).call(this);
                this.onDrag(this.dragHandler, this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offDrag(this.dragHandler, this);
                _get(_getPrototypeOf(MainHorizontalSplitterDiv.prototype), "willUnmount", this).call(this);
            }
        }
    ]);
    return MainHorizontalSplitterDiv;
}(_index.HorizontalSplitterDiv);
_defineProperty(MainHorizontalSplitterDiv, "defaultProperties", {
    className: "main"
});
var _default = (0, _easyWithStyle).default(MainHorizontalSplitterDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zcGxpdHRlci9ob3Jpem9udGFsL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEhvcml6b250YWxTcGxpdHRlckRpdiB9IGZyb20gXCIuLi8uLi8uLi8uLi9pbmRleFwiOyAgLy8vXG5cbmNsYXNzIE1haW5Ib3Jpem9udGFsU3BsaXR0ZXJEaXYgZXh0ZW5kcyBIb3Jpem9udGFsU3BsaXR0ZXJEaXYge1xuICBkcmFnSGFuZGxlcihzaXplYWJsZURpdkhlaWdodCkge1xuICAgIGNvbnN0IHsgYm90dG9tTGVmdERpdiB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGhlaWdodCA9IHNpemVhYmxlRGl2SGVpZ2h0OyAvLy9cblxuICAgIGJvdHRvbUxlZnREaXYuc2V0SGVpZ2h0KGhlaWdodCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBzdXBlci5kaWRNb3VudCgpO1xuXG4gICAgdGhpcy5vbkRyYWcodGhpcy5kcmFnSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZkRyYWcodGhpcy5kcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICBzdXBlci53aWxsVW5tb3VudCgpO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJtYWluXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1haW5Ib3Jpem9udGFsU3BsaXR0ZXJEaXYpYFxuXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXG5gO1xuIl0sIm5hbWVzIjpbIk1haW5Ib3Jpem9udGFsU3BsaXR0ZXJEaXYiLCJkcmFnSGFuZGxlciIsInNpemVhYmxlRGl2SGVpZ2h0IiwiYm90dG9tTGVmdERpdiIsInByb3BlcnRpZXMiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJkaWRNb3VudCIsIm9uRHJhZyIsIndpbGxVbm1vdW50Iiwib2ZmRHJhZyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRUQsR0FBbUIsQ0FBbkIsTUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUEyQkwsQ0FJcEQ7Ozs7Ozs7SUE3Qk1BLHlCQUF5QixpQkFBL0IsUUFBUTtjQUFGQSx5QkFBeUI7OEJBQXpCQSx5QkFBeUI7YUFBekJBLHlCQUF5Qjs4QkFBekJBLHlCQUF5Qjs7O2lCQUF6QkEseUJBQXlCOztZQUM3QkMsR0FBVyxFQUFYQSxDQUFXO21CQUFYQSxRQUFRLENBQVJBLFdBQVcsQ0FBQ0MsaUJBQWlCLEVBQUUsQ0FBQztnQkFDOUIsR0FBSyxDQUFHQyxhQUFhLEdBQUssSUFBSSxDQUFDQyxVQUFVLENBQWpDRCxhQUFhLEVBQ2ZFLE1BQU0sR0FBR0gsaUJBQWlCLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVyQ0MsYUFBYSxDQUFDRyxTQUFTLENBQUNELE1BQU07WUFDaEMsQ0FBQzs7O1lBRURFLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLEdBQUcsQ0FBQztxQ0FSUlAseUJBQXlCLGFBU3JCTyxDQUFRLFdBQWQsSUFBSztnQkFFTCxJQUFJLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUNQLFdBQVcsRUFBRSxJQUFJO1lBQ3BDLENBQUM7OztZQUVEUSxHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsSUFBSSxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDVCxXQUFXLEVBQUUsSUFBSTtxQ0FmakNELHlCQUF5QixhQWlCckJTLENBQVcsY0FBakIsSUFBSztZQUNQLENBQUM7OztXQWxCR1QseUJBQXlCO0VBRk8sTUFBbUI7Z0JBRW5EQSx5QkFBeUIsRUFvQnRCVyxDQUFpQixvQkFBRyxDQUFDO0lBQzFCQyxTQUFTLEVBQUUsQ0FBTTtBQUNuQixDQUFDO21CQTFCbUIsY0FBaUIsVUE2QmRaLHlCQUF5QiJ9