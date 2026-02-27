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
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _splitter = /*#__PURE__*/ _interop_require_default(require("../splitter"));
const _cursor = require("../../cursor");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class HorizontalSplitter extends _splitter.default {
    startDragCustomHandler = (event, element)=>{
        const sizeableDiv = this.getSizeableDiv(), sizeableDivHeight = sizeableDiv.getHeight(), previousSizeableDivHeight = sizeableDivHeight; ///
        this.setPreviousSizeableDivHeight(previousSizeableDivHeight);
        this.setCursor();
    };
    dragCustomHandler = (event, element, relativeMouseTop, relativeMouseLeft)=>{
        const direction = this.getDirection(), sizeableDiv = this.getSizeableDiv(), previousSizeableDivHeight = this.getPreviousSizeableDivHeight(), sizeableDivHeight = previousSizeableDivHeight - direction * relativeMouseTop, height = sizeableDivHeight; ///
        sizeableDiv.setHeight(height);
    };
    mouseOverHandler = (event, element)=>{
        this.setCursor();
    };
    setCursor() {
        const disabled = this.isDisabled();
        if (!disabled) {
            (0, _cursor.rowResizeCursor)();
        }
    }
    getPreviousSizeableDivHeight() {
        const { previousSizeableDivHeight } = this.getState();
        return previousSizeableDivHeight;
    }
    setPreviousSizeableDivHeight(previousSizeableDivHeight) {
        this.updateState({
            previousSizeableDivHeight
        });
    }
    setInitialState() {
        const previousSizeableDivHeight = null;
        this.setState({
            previousSizeableDivHeight
        });
    }
    static defaultProperties = {
        className: "horizontal"
    };
}
const _default = (0, _easywithstyle.default)(HorizontalSplitter)`

  height: 1rem;

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvaG9yaXpvbnRhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFNwbGl0dGVyIGZyb20gXCIuLi9zcGxpdHRlclwiO1xuXG5pbXBvcnQgeyByb3dSZXNpemVDdXJzb3IgfSBmcm9tIFwiLi4vLi4vY3Vyc29yXCI7XG5cbmNsYXNzIEhvcml6b250YWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgc3RhcnREcmFnQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHNpemVhYmxlRGl2ID0gdGhpcy5nZXRTaXplYWJsZURpdigpLFxuICAgICAgICAgIHNpemVhYmxlRGl2SGVpZ2h0ID0gc2l6ZWFibGVEaXYuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodCA9IHNpemVhYmxlRGl2SGVpZ2h0OyAgLy8vXG5cbiAgICB0aGlzLnNldFByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQocHJldmlvdXNTaXplYWJsZURpdkhlaWdodCk7XG5cbiAgICB0aGlzLnNldEN1cnNvcigpO1xuICB9XG5cbiAgZHJhZ0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHJlbGF0aXZlTW91c2VUb3AsIHJlbGF0aXZlTW91c2VMZWZ0KSA9PiB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICBzaXplYWJsZURpdiA9IHRoaXMuZ2V0U2l6ZWFibGVEaXYoKSxcbiAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0ID0gdGhpcy5nZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0KCksXG4gICAgICAgICAgc2l6ZWFibGVEaXZIZWlnaHQgPSBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0IC0gZGlyZWN0aW9uICogcmVsYXRpdmVNb3VzZVRvcCxcbiAgICAgICAgICBoZWlnaHQgPSBzaXplYWJsZURpdkhlaWdodDsgLy8vXG5cbiAgICBzaXplYWJsZURpdi5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgfVxuXG4gIG1vdXNlT3ZlckhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnNldEN1cnNvcigpO1xuICB9XG5cbiAgc2V0Q3Vyc29yKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICByb3dSZXNpemVDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBnZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0KCkge1xuICAgIGNvbnN0IHsgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQ7XG4gIH1cblxuICBzZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0KHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJob3Jpem9udGFsXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEhvcml6b250YWxTcGxpdHRlcilgXG5cbiAgaGVpZ2h0OiAxcmVtO1xuXG5gO1xuIl0sIm5hbWVzIjpbIkhvcml6b250YWxTcGxpdHRlciIsIlNwbGl0dGVyIiwic3RhcnREcmFnQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInNpemVhYmxlRGl2IiwiZ2V0U2l6ZWFibGVEaXYiLCJzaXplYWJsZURpdkhlaWdodCIsImdldEhlaWdodCIsInByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQiLCJzZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0Iiwic2V0Q3Vyc29yIiwiZHJhZ0N1c3RvbUhhbmRsZXIiLCJyZWxhdGl2ZU1vdXNlVG9wIiwicmVsYXRpdmVNb3VzZUxlZnQiLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJnZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0IiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwibW91c2VPdmVySGFuZGxlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInJvd1Jlc2l6ZUN1cnNvciIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrRUE7OztlQUFBOzs7c0VBaEVzQjtpRUFFRDt3QkFFVzs7Ozs7O0FBRWhDLE1BQU1BLDJCQUEyQkMsaUJBQVE7SUFDdkNDLHlCQUF5QixDQUFDQyxPQUFPQztRQUMvQixNQUFNQyxjQUFjLElBQUksQ0FBQ0MsY0FBYyxJQUNqQ0Msb0JBQW9CRixZQUFZRyxTQUFTLElBQ3pDQyw0QkFBNEJGLG1CQUFvQixHQUFHO1FBRXpELElBQUksQ0FBQ0csNEJBQTRCLENBQUNEO1FBRWxDLElBQUksQ0FBQ0UsU0FBUztJQUNoQixFQUFDO0lBRURDLG9CQUFvQixDQUFDVCxPQUFPQyxTQUFTUyxrQkFBa0JDO1FBQ3JELE1BQU1DLFlBQVksSUFBSSxDQUFDQyxZQUFZLElBQzdCWCxjQUFjLElBQUksQ0FBQ0MsY0FBYyxJQUNqQ0csNEJBQTRCLElBQUksQ0FBQ1EsNEJBQTRCLElBQzdEVixvQkFBb0JFLDRCQUE0Qk0sWUFBWUYsa0JBQzVESyxTQUFTWCxtQkFBbUIsR0FBRztRQUVyQ0YsWUFBWWMsU0FBUyxDQUFDRDtJQUN4QixFQUFDO0lBRURFLG1CQUFtQixDQUFDakIsT0FBT0M7UUFDekIsSUFBSSxDQUFDTyxTQUFTO0lBQ2hCLEVBQUM7SUFFREEsWUFBWTtRQUNWLE1BQU1VLFdBQVcsSUFBSSxDQUFDQyxVQUFVO1FBRWhDLElBQUksQ0FBQ0QsVUFBVTtZQUNiRSxJQUFBQSx1QkFBZTtRQUNqQjtJQUNGO0lBRUFOLCtCQUErQjtRQUM3QixNQUFNLEVBQUVSLHlCQUF5QixFQUFFLEdBQUcsSUFBSSxDQUFDZSxRQUFRO1FBRW5ELE9BQU9mO0lBQ1Q7SUFFQUMsNkJBQTZCRCx5QkFBeUIsRUFBRTtRQUN0RCxJQUFJLENBQUNnQixXQUFXLENBQUM7WUFDZmhCO1FBQ0Y7SUFDRjtJQUVBaUIsa0JBQWtCO1FBQ2hCLE1BQU1qQiw0QkFBNEI7UUFFbEMsSUFBSSxDQUFDa0IsUUFBUSxDQUFDO1lBQ1psQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPbUIsb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQzlCLG1CQUFtQixDQUFDOzs7O0FBSTdDLENBQUMifQ==