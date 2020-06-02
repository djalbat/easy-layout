"use strict";

import withStyle from "easy-with-style";  ///

import { RowDiv, RowsDiv, ColumnDiv, ColumnsDiv, options } from "../index"; ///

import BlueRowDiv from "./div/row/blue";
import YellowRowDiv from "./div/row/yellow";
import BottomLeftDiv from "./div/bottomLeft";
import LeftSizeableDiv from "./div/sizeable/left";
import RightSizeableDiv from "./div/sizeable/right";
import PseudoSplitterDiv from "./div/splitter/pseudo";
import BottomSizeableDiv from "./div/sizeable/bottom";
import LeftVerticalSplitterDiv from "./div/splitter/vertical/left";
import RightVerticalSplitterDiv from "./div/splitter/vertical/right";
import MainHorizontalSplitterDiv from "./div/splitter/horizontal/main";

const { ESCAPE_KEY_STOPS_DRAGGING } = options;

const View = (properties) => {
  const { className } = properties,
        bottomLeftDiv =

          <BottomLeftDiv />

        ,
        options = {
          ESCAPE_KEY_STOPS_DRAGGING
        };

  return (

    <div className={`${className} view`}>
      <ColumnsDiv>
        <LeftSizeableDiv>
          <RowsDiv>
            <YellowRowDiv />
            <PseudoSplitterDiv />
            {bottomLeftDiv}
          </RowsDiv>
        </LeftSizeableDiv>
        <LeftVerticalSplitterDiv options={options} />
        <ColumnDiv>
          <RowsDiv>
            <RowDiv>
              <ColumnsDiv>
                <ColumnDiv />
                <RightVerticalSplitterDiv options={options} />
                <RightSizeableDiv>
                  <RowsDiv>
                    <BlueRowDiv />
                  </RowsDiv>
                </RightSizeableDiv>
              </ColumnsDiv>
            </RowDiv>
            <MainHorizontalSplitterDiv bottomLeftDiv={bottomLeftDiv} options={options} />
            <BottomSizeableDiv />
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
