"use strict";

import withStyle from "easy-with-style";  ///

import { RowDiv, RowsDiv, ColumnDiv, ColumnsDiv, options } from "../index";

import BlueRowDiv from "./div/row/blue";
import YellowRowDiv from "./div/row/yellow";
import BottomLeftDiv from "./div/bottomLeft";
import MainColumnsDiv from "./div/columns/main";
import LeftSplitterDiv from "./div/splitter/left";
import MainSplitterDiv from "./div/splitter/main";
import LeftSizeableDiv from "./div/sizeable/left";
import RightSplitterDiv from "./div/splitter/right";
import DummySplitterDiv from "./div/splitter/dummy";
import RightSizeableDiv from "./div/sizeable/right";
import BottomSizeableDiv from "./div/sizeable/bottom";

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
      <MainColumnsDiv>
        <LeftSizeableDiv>
          <RowsDiv>
            <YellowRowDiv />
            <DummySplitterDiv />
            {bottomLeftDiv}
          </RowsDiv>
        </LeftSizeableDiv>
        <LeftSplitterDiv options={options} />
        <ColumnDiv>
          <RowsDiv>
            <RowDiv>
              <ColumnsDiv>
                <ColumnDiv />
                <RightSplitterDiv options={options} />
                <RightSizeableDiv>
                  <RowsDiv>
                    <BlueRowDiv />
                  </RowsDiv>
                </RightSizeableDiv>
              </ColumnsDiv>
            </RowDiv>
            <MainSplitterDiv bottomLeftDiv={bottomLeftDiv} options={options} />
            <BottomSizeableDiv />
          </RowsDiv>
        </ColumnDiv>
      </MainColumnsDiv>
    </div>

  );
};

export default withStyle(View)`

  width: 64rem;
  height: 64rem;
  
`;
