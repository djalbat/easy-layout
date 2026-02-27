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
const _easy = require("easy");
const _easydraganddrop = require("easy-drag-and-drop");
const _sizeable = /*#__PURE__*/ _interop_require_default(require("../div/sizeable"));
const _cursor = require("../cursor");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class SplitterDiv extends _easy.Element {
    stopDragCustomHandler = (event, element, dropElement, aborted, done)=>{
        (0, _cursor.resetCursor)();
        done();
    };
    mouseOutHandler = (event, element)=>{
        (0, _cursor.resetCursor)();
    };
    getSizeableDiv() {
        let sizeableDiv;
        const nextSiblingElement = this.getNextSiblingElement(), previousSiblingElement = this.getPreviousSiblingElement(), nextSiblingElementSizeableDiv = nextSiblingElement instanceof _sizeable.default, previousSiblingElementSizeableDiv = previousSiblingElement instanceof _sizeable.default;
        if (nextSiblingElementSizeableDiv) {
            sizeableDiv = nextSiblingElement; ///
        }
        if (previousSiblingElementSizeableDiv) {
            sizeableDiv = previousSiblingElement; ///
        }
        return sizeableDiv;
    }
    getDirection() {
        let direction;
        const nextSiblingElement = this.getNextSiblingElement(), previousSiblingElement = this.getPreviousSiblingElement(), nextSiblingElementSizeableDiv = nextSiblingElement instanceof _sizeable.default, previousSiblingElementSizeableDiv = previousSiblingElement instanceof _sizeable.default;
        if (nextSiblingElementSizeableDiv) {
            direction = +1;
        }
        if (previousSiblingElementSizeableDiv) {
            direction = -1;
        }
        return direction;
    }
    getReferences() {
        const references = [];
        return references;
    }
    enable() {
        const dragEnabled = this.isDragEnabled();
        if (!dragEnabled) {
            this.enableDrag();
            this.onCustomDrag(this.dragCustomHandler);
            this.onCustomStopDrag(this.stopDragCustomHandler);
            this.onCustomStartDrag(this.startDragCustomHandler);
        }
    }
    disable() {
        const dragEnabled = this.isDragEnabled();
        if (dragEnabled) {
            this.offCustomStartDrag(this.startDragCustomHandler);
            this.offCustomStopDrag(this.stopDragCustomHandler);
            this.offCustomDrag(this.dragCustomHandler);
            this.disableDrag();
        }
    }
    isDisabled() {
        const dragEnabled = this.isDragEnabled(), disabled = !dragEnabled;
        return disabled;
    }
    didMount() {
        const { disabled = false } = this.properties;
        if (!disabled) {
            this.enable();
        }
        this.onMouseOver(this.mouseOverHandler);
        this.onMouseOut(this.mouseOutHandler);
    }
    willUnmount() {
        const disabled = this.isDisabled();
        this.offMouseOut(this.mouseOutHandler);
        this.offMouseOver(this.mouseOverHandler);
        if (!disabled) {
            this.disable();
        }
    }
    initialise() {
        this.setInitialState();
    }
    static tagName = "div";
    static ignoredProperties = [
        "disabled"
    ];
    static defaultProperties = {
        className: "splitter"
    };
}
Object.assign(SplitterDiv.prototype, _easydraganddrop.dragMixins);
const _default = (0, _easywithstyle.default)(SplitterDiv)`

  flex-shrink: 0;

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZHJhZ01peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcblxuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuLi9kaXYvc2l6ZWFibGVcIjtcblxuaW1wb3J0IHsgcmVzZXRDdXJzb3IgfSBmcm9tIFwiLi4vY3Vyc29yXCI7XG5cbmNsYXNzIFNwbGl0dGVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIHN0b3BEcmFnQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgZHJvcEVsZW1lbnQsIGFib3J0ZWQsIGRvbmUpID0+IHtcbiAgICByZXNldEN1cnNvcigpO1xuXG4gICAgZG9uZSgpO1xuICB9XG5cbiAgbW91c2VPdXRIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgcmVzZXRDdXJzb3IoKTtcbiAgfVxuXG4gIGdldFNpemVhYmxlRGl2KCkge1xuICAgIGxldCBzaXplYWJsZURpdjtcblxuICAgIGNvbnN0IG5leHRTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0TmV4dFNpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgIG5leHRTaWJsaW5nRWxlbWVudFNpemVhYmxlRGl2ID0gKG5leHRTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KSxcbiAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50U2l6ZWFibGVEaXYgPSAocHJldmlvdXNTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KTtcblxuICAgIGlmIChuZXh0U2libGluZ0VsZW1lbnRTaXplYWJsZURpdikge1xuICAgICAgc2l6ZWFibGVEaXYgPSBuZXh0U2libGluZ0VsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIGlmIChwcmV2aW91c1NpYmxpbmdFbGVtZW50U2l6ZWFibGVEaXYpIHtcbiAgICAgIHNpemVhYmxlRGl2ID0gcHJldmlvdXNTaWJsaW5nRWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpemVhYmxlRGl2O1xuICB9XG5cbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIGxldCBkaXJlY3Rpb247XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0VsZW1lbnQgPSB0aGlzLmdldE5leHRTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSB0aGlzLmdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoKSxcbiAgICAgICAgICBuZXh0U2libGluZ0VsZW1lbnRTaXplYWJsZURpdiA9IChuZXh0U2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdiksXG4gICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudFNpemVhYmxlRGl2ID0gKHByZXZpb3VzU2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdik7XG5cbiAgICBpZiAobmV4dFNpYmxpbmdFbGVtZW50U2l6ZWFibGVEaXYpIHtcbiAgICAgIGRpcmVjdGlvbiA9ICsxO1xuICAgIH1cblxuICAgIGlmIChwcmV2aW91c1NpYmxpbmdFbGVtZW50U2l6ZWFibGVEaXYpIHtcbiAgICAgIGRpcmVjdGlvbiA9IC0xO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rpb247XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZXMgPSBbXTtcblxuICAgIHJldHVybiByZWZlcmVuY2VzO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIGNvbnN0IGRyYWdFbmFibGVkID0gdGhpcy5pc0RyYWdFbmFibGVkKCk7XG5cbiAgICBpZiAoIWRyYWdFbmFibGVkKSB7XG4gICAgICB0aGlzLmVuYWJsZURyYWcoKTtcblxuICAgICAgdGhpcy5vbkN1c3RvbURyYWcodGhpcy5kcmFnQ3VzdG9tSGFuZGxlcik7XG5cbiAgICAgIHRoaXMub25DdXN0b21TdG9wRHJhZyh0aGlzLnN0b3BEcmFnQ3VzdG9tSGFuZGxlcik7XG5cbiAgICAgIHRoaXMub25DdXN0b21TdGFydERyYWcodGhpcy5zdGFydERyYWdDdXN0b21IYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIGNvbnN0IGRyYWdFbmFibGVkID0gdGhpcy5pc0RyYWdFbmFibGVkKCk7XG5cbiAgICBpZiAoZHJhZ0VuYWJsZWQpIHtcbiAgICAgIHRoaXMub2ZmQ3VzdG9tU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnQ3VzdG9tSGFuZGxlcik7XG5cbiAgICAgIHRoaXMub2ZmQ3VzdG9tU3RvcERyYWcodGhpcy5zdG9wRHJhZ0N1c3RvbUhhbmRsZXIpO1xuXG4gICAgICB0aGlzLm9mZkN1c3RvbURyYWcodGhpcy5kcmFnQ3VzdG9tSGFuZGxlcik7XG5cbiAgICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcbiAgICB9XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRyYWdFbmFibGVkID0gdGhpcy5pc0RyYWdFbmFibGVkKCksXG4gICAgICAgICAgZGlzYWJsZWQgPSAhZHJhZ0VuYWJsZWQ7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRpc2FibGVkID0gZmFsc2UgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5vbk1vdXNlT3Zlcih0aGlzLm1vdXNlT3ZlckhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbk1vdXNlT3V0KHRoaXMubW91c2VPdXRIYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICB0aGlzLm9mZk1vdXNlT3V0KHRoaXMubW91c2VPdXRIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmTW91c2VPdmVyKHRoaXMubW91c2VPdmVySGFuZGxlcik7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiZGlzYWJsZWRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwic3BsaXR0ZXJcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKFNwbGl0dGVyRGl2LnByb3RvdHlwZSwgZHJhZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTcGxpdHRlckRpdilgXG5cbiAgZmxleC1zaHJpbms6IDA7XG5cbmA7XG4iXSwibmFtZXMiOlsiU3BsaXR0ZXJEaXYiLCJFbGVtZW50Iiwic3RvcERyYWdDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZHJvcEVsZW1lbnQiLCJhYm9ydGVkIiwiZG9uZSIsInJlc2V0Q3Vyc29yIiwibW91c2VPdXRIYW5kbGVyIiwiZ2V0U2l6ZWFibGVEaXYiLCJzaXplYWJsZURpdiIsIm5leHRTaWJsaW5nRWxlbWVudCIsImdldE5leHRTaWJsaW5nRWxlbWVudCIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50IiwibmV4dFNpYmxpbmdFbGVtZW50U2l6ZWFibGVEaXYiLCJTaXplYWJsZURpdiIsInByZXZpb3VzU2libGluZ0VsZW1lbnRTaXplYWJsZURpdiIsImdldERpcmVjdGlvbiIsImRpcmVjdGlvbiIsImdldFJlZmVyZW5jZXMiLCJyZWZlcmVuY2VzIiwiZW5hYmxlIiwiZHJhZ0VuYWJsZWQiLCJpc0RyYWdFbmFibGVkIiwiZW5hYmxlRHJhZyIsIm9uQ3VzdG9tRHJhZyIsImRyYWdDdXN0b21IYW5kbGVyIiwib25DdXN0b21TdG9wRHJhZyIsIm9uQ3VzdG9tU3RhcnREcmFnIiwic3RhcnREcmFnQ3VzdG9tSGFuZGxlciIsImRpc2FibGUiLCJvZmZDdXN0b21TdGFydERyYWciLCJvZmZDdXN0b21TdG9wRHJhZyIsIm9mZkN1c3RvbURyYWciLCJkaXNhYmxlRHJhZyIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsImRpZE1vdW50IiwicHJvcGVydGllcyIsIm9uTW91c2VPdmVyIiwibW91c2VPdmVySGFuZGxlciIsIm9uTW91c2VPdXQiLCJ3aWxsVW5tb3VudCIsIm9mZk1vdXNlT3V0Iiwib2ZmTW91c2VPdmVyIiwiaW5pdGlhbGlzZSIsInNldEluaXRpYWxTdGF0ZSIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJhZ01peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOElBOzs7ZUFBQTs7O3NFQTVJc0I7c0JBRUU7aUNBQ0c7aUVBRUg7d0JBRUk7Ozs7OztBQUU1QixNQUFNQSxvQkFBb0JDLGFBQU87SUFDL0JDLHdCQUF3QixDQUFDQyxPQUFPQyxTQUFTQyxhQUFhQyxTQUFTQztRQUM3REMsSUFBQUEsbUJBQVc7UUFFWEQ7SUFDRixFQUFDO0lBRURFLGtCQUFrQixDQUFDTixPQUFPQztRQUN4QkksSUFBQUEsbUJBQVc7SUFDYixFQUFDO0lBRURFLGlCQUFpQjtRQUNmLElBQUlDO1FBRUosTUFBTUMscUJBQXFCLElBQUksQ0FBQ0MscUJBQXFC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