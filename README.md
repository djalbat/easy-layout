# Easy Layout

Layout elements that work with CSS flexbox.

There are several elements that can be nested. Broadly speaking there are row and column divs together with sizeable and splitter divs. Splitter divs can be dragged with a mouse in order to resize sizeable divs.

### JSX support

There is now support for JSX in the form of [Juxtapose](https://github.com/djalbat/Juxtapose). JSX brings with it [several benefits](http://djalbat.com/juxtapose#jsxIsGreat). So although you will always be able to call constructors directly if you wish, creating Easy elements by way of JSX is *highly recommended*. The contents of this readme file will stay as a reference, however a much better place to start from now on is the online documentation for Juxtapose. The section dealing directly with this project is here:

* [Juxtapose online documentation - Easy-Layout](http://juxtapose.info/#easyLayout)

From there you can easily navigate to get an overview of Juxtapose.

### Related projects

- [Easy](https://github.com/djalbat/easy) Elements that abstract away from the DOM.
- [Easy RichTextarea](https://github.com/djalbat/easy-richtextarea) A textarea element that handles and hands off events well.
- [Easy DragAndDrop](https://github.com/djalbat/easy-draganddrop) Drag and drop elements including an explorer and a rubbish bin.

## Installation

You can install Easy-Layout with [npm](https://www.npmjs.com/):

    npm install easy-layout

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/easy-layout.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

## Usage

The enclosing element should have its `display` style set to `flex`:

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
        <VerticalSplitterDiv />
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
  display: flex;

`;
```

## Styles

There is a small amount of default styling. All the elements have class names, however, allowing you to override this with CSS. Or a better way is to use [Easy with Style](https://github.com/djalbat/easy-with-style). For example:

```
import withStyle from "easy-with-style"; ///

export default (VerticalSplitter)`

 ...

`;
```

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com
* http://djalbat.com
