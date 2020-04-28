"use strict";

import withStyle from "easy-with-style";  ///

import { VerticalSplitterDiv, HorizontalSplitterDiv } from "../index";

import ColumnDiv from "../div/column";
import SizeableRowsDiv from "../div/rows/sizeable";

import BlueRowDiv from "./div/row/blue";
import YellowRowDiv from "./div/row/yellow";
import BottomLeftDiv from "./div/bottomLeft";
import MainColumnsDiv from "./div/columns/main";
import LeftSizeableDiv from "./div/sizeable/left";
import RightSizeableDiv from "./div/sizeable/right";
import BottomSizeableDiv from "./div/sizeable/bottom";
import DummyHorizontalSplitterDiv from "./div/splitter/horizontal/dummy";

const View = (properties) => {
  const { className } = properties,
        bottomLeftDiv =

          <BottomLeftDiv />

        ;

  return (

    <div className={`${className} view`}>
      <MainColumnsDiv>
        <LeftSizeableDiv>
          <SizeableRowsDiv>
            <YellowRowDiv />
            <DummyHorizontalSplitterDiv />
            {bottomLeftDiv}
          </SizeableRowsDiv>
        </LeftSizeableDiv>
        <VerticalSplitterDiv className="black left" afterSizeableElement />
        <div className="column rows">
          <div className="row columns">
            <ColumnDiv />
            <VerticalSplitterDiv className="black right" beforeSizeableElement />
            <RightSizeableDiv>
              <SizeableRowsDiv>
                <BlueRowDiv />
              </SizeableRowsDiv>
            </RightSizeableDiv>
          </div>
          <HorizontalSplitterDiv className="black main"
                              beforeSizeableElement
                              onDrag={(height) => {

                                bottomLeftDiv.setHeight(height);

                              }}
          />
          <BottomSizeableDiv />
        </div>
      </MainColumnsDiv>
    </div>

  );
};

export default withStyle(View)`

  width: 64rem;
  height: 64rem;
  
`;
