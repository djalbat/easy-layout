"use strict";

import withStyle from "easy-with-style";  ///

import { HorizontalSplitterDiv } from "../../../../index";  ///

class MainHorizontalSplitterDiv extends HorizontalSplitterDiv {
  dragHandler(sizeableDivHeight) {
    const { bottomLeftDiv } = this.properties,
          height = sizeableDivHeight; ///

    bottomLeftDiv.setHeight(height);
  }

  didMount() {
    super.didMount();

    this.onDrag(this.dragHandler, this);
  }

  willUnmount() {
    this.offDrag(this.dragHandler, this);

    super.willUnmount();
  }

  static defaultProperties = {
    className: "main"
  };
}

export default withStyle(MainHorizontalSplitterDiv)`

  background-color: black;

`;
