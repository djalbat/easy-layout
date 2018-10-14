# Easy Layout

Layout elements that work with CSS flexbox.

There are three elements, namely a horizontal and a vertical draggable splitter and a sizeable element that dragging the splitters will cause to be resized. All the elements are closely tied to CSS. For example, the sizeable element will check the values of its 'min-width', 'max-width', 'min-height' and 'max-height' CSS properties and stick to them. Layouts created with these elements can also be nested easily.

### JSX support

There is now support for JSX in the form of [Juxtapose](https://github.com/djalbat/Juxtapose). JSX brings with it [several benefits](http://djalbat.com/juxtapose#jsxIsGreat). So although you will always be able to call constructors directly if you wish, creating Easy elements by way of JSX is *highly recommended*. The contents of this readme file will stay as a reference, however a much better place to start from now on is the online documentation for Juxtapose. The section dealing directly with this project is here:

* [Juxtapose online documentation - Easy-Layout](http://djalbat.com/juxtapose/#easyLayout)

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

...and then install the necessary modules with npm from within the project's root directory:

    npm install

## Usage

Only building with [Node.js](http://nodejs.org) (or equivalent) is supported, there is no support for the browser anymore. The usage is as follows:

```js
const easylayout = require('lib/easy-layout'),
      { VerticalSplitter, SizeableElement } = easylayout;

const container =

        <div className="columns">
          <SizeableElement>
          ...
          </SizeableElement>
          <VerticalSplitter afterSizeableElement
                            onDrag={(height) => {
                                ...
                            }}
          />
          <div className="column">
          ...
          </div>
        </div>

      ;
```

Note the mandatory `column` and `columns` classes.

## CSS

There is a small amount of CSS needed to make the elements work. This can be found in the `easy-layout.css` file in the `css` directory.

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com
* http://djalbat.com
