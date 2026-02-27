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
class VerticalSplitter extends _splitter.default {
    startDragCustomHandler = (event, element)=>{
        const sizeableDiv = this.getSizeableDiv(), sizeableDivWidth = sizeableDiv.getWidth(), previousSizeableDivWidth = sizeableDivWidth; ///
        this.setPreviousSizeableDivWidth(previousSizeableDivWidth);
        this.setCursor();
    };
    dragCustomHandler = (event, element, relativeMouseTop, relativeMouseLeft)=>{
        const direction = this.getDirection(), sizeableDiv = this.getSizeableDiv(), previousSizeableDivWidth = this.getPreviousSizeableDivWidth(), sizeableDivWidth = previousSizeableDivWidth - direction * relativeMouseLeft, width = sizeableDivWidth; ///
        sizeableDiv.setWidth(width);
    };
    mouseOverHandler = (event, element)=>{
        this.setCursor();
    };
    setCursor() {
        const disabled = this.isDisabled();
        if (!disabled) {
            (0, _cursor.columnResizeCursor)();
        }
    }
    getPreviousSizeableDivWidth() {
        const { previousSizeableDivWidth } = this.getState();
        return previousSizeableDivWidth;
    }
    setPreviousSizeableDivWidth(previousSizeableDivWidth) {
        this.updateState({
            previousSizeableDivWidth
        });
    }
    setInitialState() {
        const previousSizeableDivWidth = null;
        this.setState({
            previousSizeableDivWidth
        });
    }
    static defaultProperties = {
        className: "vertical"
    };
}
const _default = (0, _easywithstyle.default)(VerticalSplitter)`

  width: 1rem;

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvdmVydGljYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBTcGxpdHRlciBmcm9tIFwiLi4vc3BsaXR0ZXJcIjtcblxuaW1wb3J0IHsgY29sdW1uUmVzaXplQ3Vyc29yIH0gZnJvbSBcIi4uLy4uL2N1cnNvclwiO1xuXG5jbGFzcyBWZXJ0aWNhbFNwbGl0dGVyIGV4dGVuZHMgU3BsaXR0ZXIge1xuICBzdGFydERyYWdDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc2l6ZWFibGVEaXYgPSB0aGlzLmdldFNpemVhYmxlRGl2KCksXG4gICAgICAgICAgc2l6ZWFibGVEaXZXaWR0aCA9IHNpemVhYmxlRGl2LmdldFdpZHRoKCksXG4gICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdldpZHRoID0gc2l6ZWFibGVEaXZXaWR0aDsgIC8vL1xuXG4gICAgdGhpcy5zZXRQcmV2aW91c1NpemVhYmxlRGl2V2lkdGgocHJldmlvdXNTaXplYWJsZURpdldpZHRoKTtcblxuICAgIHRoaXMuc2V0Q3Vyc29yKCk7XG4gIH1cblxuICBkcmFnQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpID0+IHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgIHNpemVhYmxlRGl2ID0gdGhpcy5nZXRTaXplYWJsZURpdigpLFxuICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCA9IHRoaXMuZ2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoKCksXG4gICAgICAgICAgc2l6ZWFibGVEaXZXaWR0aCA9IHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCAtIGRpcmVjdGlvbiAqIHJlbGF0aXZlTW91c2VMZWZ0LFxuICAgICAgICAgIHdpZHRoID0gc2l6ZWFibGVEaXZXaWR0aDsgLy8vXG5cbiAgICBzaXplYWJsZURpdi5zZXRXaWR0aCh3aWR0aCk7XG4gIH1cblxuICBtb3VzZU92ZXJIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5zZXRDdXJzb3IoKTtcbiAgfVxuXG4gIHNldEN1cnNvcigpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29sdW1uUmVzaXplQ3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoKCkge1xuICAgIGNvbnN0IHsgcHJldmlvdXNTaXplYWJsZURpdldpZHRoIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaXplYWJsZURpdldpZHRoO1xuICB9XG5cbiAgc2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoKHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZURpdldpZHRoXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNTaXplYWJsZURpdldpZHRoID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZURpdldpZHRoXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZlcnRpY2FsXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZlcnRpY2FsU3BsaXR0ZXIpYFxuXG4gIHdpZHRoOiAxcmVtO1xuXG5gO1xuIl0sIm5hbWVzIjpbIlZlcnRpY2FsU3BsaXR0ZXIiLCJTcGxpdHRlciIsInN0YXJ0RHJhZ0N1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJzaXplYWJsZURpdiIsImdldFNpemVhYmxlRGl2Iiwic2l6ZWFibGVEaXZXaWR0aCIsImdldFdpZHRoIiwicHJldmlvdXNTaXplYWJsZURpdldpZHRoIiwic2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoIiwic2V0Q3Vyc29yIiwiZHJhZ0N1c3RvbUhhbmRsZXIiLCJyZWxhdGl2ZU1vdXNlVG9wIiwicmVsYXRpdmVNb3VzZUxlZnQiLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJnZXRQcmV2aW91c1NpemVhYmxlRGl2V2lkdGgiLCJ3aWR0aCIsInNldFdpZHRoIiwibW91c2VPdmVySGFuZGxlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImNvbHVtblJlc2l6ZUN1cnNvciIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrRUE7OztlQUFBOzs7c0VBaEVzQjtpRUFFRDt3QkFFYzs7Ozs7O0FBRW5DLE1BQU1BLHlCQUF5QkMsaUJBQVE7SUFDckNDLHlCQUF5QixDQUFDQyxPQUFPQztRQUMvQixNQUFNQyxjQUFjLElBQUksQ0FBQ0MsY0FBYyxJQUNqQ0MsbUJBQW1CRixZQUFZRyxRQUFRLElBQ3ZDQywyQkFBMkJGLGtCQUFtQixHQUFHO1FBRXZELElBQUksQ0FBQ0csMkJBQTJCLENBQUNEO1FBRWpDLElBQUksQ0FBQ0UsU0FBUztJQUNoQixFQUFDO0lBRURDLG9CQUFvQixDQUFDVCxPQUFPQyxTQUFTUyxrQkFBa0JDO1FBQ3JELE1BQU1DLFlBQVksSUFBSSxDQUFDQyxZQUFZLElBQzdCWCxjQUFjLElBQUksQ0FBQ0MsY0FBYyxJQUNqQ0csMkJBQTJCLElBQUksQ0FBQ1EsMkJBQTJCLElBQzNEVixtQkFBbUJFLDJCQUEyQk0sWUFBWUQsbUJBQzFESSxRQUFRWCxrQkFBa0IsR0FBRztRQUVuQ0YsWUFBWWMsUUFBUSxDQUFDRDtJQUN2QixFQUFDO0lBRURFLG1CQUFtQixDQUFDakIsT0FBT0M7UUFDekIsSUFBSSxDQUFDTyxTQUFTO0lBQ2hCLEVBQUM7SUFFREEsWUFBWTtRQUNWLE1BQU1VLFdBQVcsSUFBSSxDQUFDQyxVQUFVO1FBRWhDLElBQUksQ0FBQ0QsVUFBVTtZQUNiRSxJQUFBQSwwQkFBa0I7UUFDcEI7SUFDRjtJQUVBTiw4QkFBOEI7UUFDNUIsTUFBTSxFQUFFUix3QkFBd0IsRUFBRSxHQUFHLElBQUksQ0FBQ2UsUUFBUTtRQUVsRCxPQUFPZjtJQUNUO0lBRUFDLDRCQUE0QkQsd0JBQXdCLEVBQUU7UUFDcEQsSUFBSSxDQUFDZ0IsV0FBVyxDQUFDO1lBQ2ZoQjtRQUNGO0lBQ0Y7SUFFQWlCLGtCQUFrQjtRQUNoQixNQUFNakIsMkJBQTJCO1FBRWpDLElBQUksQ0FBQ2tCLFFBQVEsQ0FBQztZQUNabEI7UUFDRjtJQUNGO0lBRUEsT0FBT21CLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUM5QixpQkFBaUIsQ0FBQzs7OztBQUkzQyxDQUFDIn0=