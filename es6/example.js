"use strict";

import withStyle from "easy-with-style";  ///

import { Body, React } from "easy";

import View from "./example/view";

Object.assign(window, {
  React
});

const { renderStyles } = withStyle;

const body = new Body();

renderStyles();

body.prepend(

  <View />

);
