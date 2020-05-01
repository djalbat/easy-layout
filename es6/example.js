"use strict";

import withStyle from "easy-with-style";  ///

import { Body, React, window } from "easy";

import View from "./example/view";

window.assign({
  React
});

const { renderStyles } = withStyle;

const body = new Body();

renderStyles();

body.prepend(

  <View />

);
