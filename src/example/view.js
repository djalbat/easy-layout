"use strict";

import withStyle from "easy-with-style";  ///

import { RowDiv, RowsDiv, ColumnDiv, ColumnsDiv } from "../index"; ///

import BlueRowDiv from "./div/row/blue";
import TextSection from "./section/text";
import YellowRowDiv from "./div/row/yellow";
import BottomLeftDiv from "./div/bottomLeft";
import MiddleColumnDiv from "./div/column/middle";
import LeftSizeableDiv from "./div/sizeable/left";
import RightSizeableDiv from "./div/sizeable/right";
import PseudoSplitterDiv from "./div/splitter/pseudo";
import BottomSizeableDiv from "./div/sizeable/bottom";
import LeftVerticalSplitterDiv from "./div/splitter/vertical/left";
import RightVerticalSplitterDiv from "./div/splitter/vertical/right";
import MainHorizontalSplitterDiv from "./div/splitter/horizontal/main";

const View = (properties) => {
  const { className } = properties,
        bottomLeftDiv =

          <BottomLeftDiv/>

        ,
        bottomSizeableDiv =

          <BottomSizeableDiv/>

        ;

  let bottomSizeableDivHeight;

  return (

    <div className={`${className} view`}>
      <ColumnsDiv>
        <LeftSizeableDiv>
          <RowsDiv>
            <YellowRowDiv/>
            <PseudoSplitterDiv/>
            {bottomLeftDiv}
          </RowsDiv>
        </LeftSizeableDiv>
        <LeftVerticalSplitterDiv/>
        <ColumnDiv>
          <RowsDiv>
            <RowDiv>
              <ColumnsDiv>
                <MiddleColumnDiv>
                  <TextSection/>
                </MiddleColumnDiv>
                <RightVerticalSplitterDiv/>
                <RightSizeableDiv>
                  <RowsDiv>
                    <BlueRowDiv/>
                  </RowsDiv>
                </RightSizeableDiv>
              </ColumnsDiv>
            </RowDiv>
            <MainHorizontalSplitterDiv onCustomStartDrag={(element) => {

                                         bottomSizeableDivHeight = bottomSizeableDiv.getHeight();

                                       }}
                                       onCustomDrag={(relativeMouseTop, relativeMouseLeft) => {

                                         const height = bottomSizeableDivHeight - relativeMouseTop;

                                         bottomLeftDiv.setHeight(height);

                                       }}
            />
            {bottomSizeableDiv}
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>
    </div>

  );
};

export default withStyle(View)`

  width: 64rem;
  height: 64rem;
  display: flex;
  
`;
