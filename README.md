# Easy Layout

Layout elements that work with CSS flexbox.

There are several elements that can be nested. Broadly speaking there are row and column divs together with sizeable and splitter divs. Splitter divs can be dragged with a mouse in order to resize sizeable divs.

### JSX support

There is now support for JSX in the form of [Juxtapose](https://github.com/djalbat/Juxtapose). JSX brings with it [several benefits](http://djalbat.com/juxtapose#jsxIsGreat). So although you will always be able to call constructors directly if you wish, creating Easy elements by way of JSX is *highly recommended*. The contents of this readme file will stay as a reference, however a much better place to start from now on is the online documentation for Juxtapose. The section dealing directly with this project is here:

* [Juxtapose online documentation - Easy-Layout](http://juxtapose.info/#easyLayout)

From there you can easily navigate to get an overview of Juxtapose.

### Related projects

- [Easy](https://github.com/djalbat/Easy) Elements that abstract away from the DOM.
- [Easy DragAndDrop](https://github.com/djalbat/Easy-DragAndDrop) Drag and drop elements including an explorer and a rubbish bin.
- [Easy RichTextarea](https://github.com/djalbat/Easy-RichTextarea) A textarea element that handles and hands off events well.

## Installation

You can install Easy-Layout with [npm](https://www.npmjs.com/):

    npm install easy-layout

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/easy-layout.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

## Usage

```
import withStyle from "easy-with-style";

import { ColumnDiv, ColumnsDiv, SizeableDiv, VerticalSplitterDiv } = "easy-layout";

const View = (properties) => {
  const { className } = properties;

  return (

    <div className={`${className} view`}>
      <ColumnsDiv>
        <SizeableDiv>

          ...

        </SizeableDiv>
        <VerticalSplitterDiv before />
        <ColumnDiv>
          ...

        </ColumnDiv>
      </ColumnsDiv>
    </div>

  );
}

export default withStyle(View)`

  width: 64rem;
  height: 64rem;

`;

```

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com
* http://djalbat.com
