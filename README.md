# Easy Layout

Layout elements that work with CSS flexbox.

There are several elements that can be nested. Broadly speaking there are row and column divs together with sizeable and splitter divs. Splitter divs can be dragged with a mouse in order to resize sizeable divs.

### JSX support

There is now support for JSX in the form of [Juxtapose](https://github.com/djalbat/Juxtapose). What this means is that Easy *will* now help you with the architecture of your large application. So although Easy elements will continue to work standalone, their use with Juxtapose is recommended.

### Easy projects

- [Easy](https://github.com/djalbat/easy) Elements that abstract away from the DOM.
- [Easy Layout](https://github.com/djalbat/easy-layout) Layout elements that work with CSS flexbox.
- [Easy Mobile](https://github.com/djalbat/easy-mobile) Touch gestures for mobile web applications.
- [Easy Navigation](https://github.com/djalbat/easy-navigation) A responsive accordion and associated navigation.
- [Easy File System](https://github.com/djalbat/easy-file-system) A file system explorer and a rubbish bin.
- [Easy RichTextarea](https://github.com/djalbat/easy-richTextarea) A textarea element that handles and hands off events well.
- [Easy Drag and Drop](https://github.com/djalbat/easy-drag-and-drop) Drag and drop functionality for Easy elements.

## Installation

You can install Easy Layout with [npm](https://www.npmjs.com/):

    npm install easy-layout

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/easy-layout.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

## Example

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The example will then be available at the following URL:

http://localhost:8888

The source for the example can be found in the `src/example.js` file and corresponding`src/example` folder. You are encouraged to try the example whilst reading what follows. You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

Below the `ColumnDiv`, `ColumnDivs`, `SizeableDiv` and `VerticalSplitterDiv` elements have been used together:

```
import withStyle from "easy-with-style";

import { ColumnDiv, ColumnsDiv, SizeableDiv, VerticalSplitterDiv } from "easy-layout";

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

Note that he enclosing `View` element has its `display` style set to `flex`.

## Styles

There is a small amount of default styling. All the elements have class names, however, allowing you to override this with CSS. Or a better way is to use [Easy with Style](https://github.com/djalbat/easy-with-style). For example:

```
import withStyle from "easy-with-style"; ///

export default (VerticalSplitter)`

 ...

`;
```

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com
