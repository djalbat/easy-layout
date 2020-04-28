"use strict";

import withStyle from "easy-with-style";  ///

const BottomLeftDiv = (properties) => {
  const { className } = properties;

  return (

    <div className={`${className} bottom-left`} />

  );
};

export default withStyle(BottomLeftDiv)`

  height: 24rem;
  background-color: red;
  
`;
