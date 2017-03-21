# Easy-Layout

Layout elements that work with CSS flexbox.

There are three elements, namely a horizontal and a vertical draggable splitter and a sizeable element that dragging the splitters will cause to be resized. All the elements are closely tied to CSS. For example, the sizeable element will check the values of its 'min-width', 'max-width', 'min-height' and 'max-height' CSS properties and stick to them. Layouts created with these elements can also be nested easily.

### JSX support

There is now support for JSX in the form of [Juxtapose](https://github.com/djalbat/Juxtapose). JSX brings with it [several benefits](http://djalbat.com/juxtapose#jsxIsGreat). So although this and the other Easy projects will continue to work standalone, their use with Juxtapose is *highly recommended*. The contents of this readme file will stay as a reference, however a much better place to start from now on is the Juxtapose online documentation. The section dealing directly with this project is here:

* [Juxtapose online documentation - Easy-Layout](http://djalbat.com/juxtapose/#easyLayout)

From there you can easily navigate to get an overview of Juxtapose.

### Related projects

- [Easy](https://github.com/djalbat/Easy) A V-framework.
- [Easy-DragAndDrop](https://github.com/djalbat/Easy-DragAndDrop) Drag and drop elements including an explorer and a rubbish bin.
- [Easy-RichTextarea](https://github.com/djalbat/Easy-RichTextarea) A textarea element that handles and hands off events well.

### Are these projects actually used anywhere?

Actually they are, here:

- [Occam Proof Assistant](http://djalbat.com/occam)

## Installation

You can install Easy-Layout with [npm](https://www.npmjs.com/):

    npm install easy-layout

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/Easy-Layout.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

## Usage

If you are building with [Node.js](http://nodejs.org) the usage is as follows:

```js
const easylayout = require('easy-layout'),
      VerticalSplitter = easylayout.VerticalSplitter;
```

To use Easy-Layout in the browser, take the `easy-layout.js` file from the project's `dist/` directory and put it somewhere such as a `public/scripts/lib` directory. Referencing this distribution file from a `script` element...

```html
<script src="scripts/lib/easy-layout.js"> </script>
```

...will give you a global `easylayout` variable which can be used directly:

```js
const VerticalSplitter = easylayout.VerticalSplitter;
```

Note the lack of a hyphen.

Alternatively, if you are using an AMD style `require` the usage is similar to the Node.js case, only make sure that the path to the distribution file is correct. The following script should work, assuming it lives in the the `public/scripts/` directory:

```js
const easylayout = require('lib/easy-layout'),
      VerticalSplitter = easylayout.VerticalSplitter;
```

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Creating sizeable elements

This is easily done:

```js
const leftColumn = new SizeableElement('#leftColumn'),
      rightColumn = new SizeableElement('#rightColumn'),
      bottomRow = new SizeableElement('#bottomRow'),
```

## Creating splitters

There are constants defined on the relevant classes that should be used to specify where the splitters are situated relative to the sizeable elements they resize:

```js
const ABOVE = options.situated.ABOVE,
      TO_THE_LEFT_OF = options.situated.TO_THE_LEFT_OF,
      TO_THE_RIGHT_OF = options.situated.TO_THE_RIGHT_OF;
```

These are passed to the splitter constructors between the jQuery selectors and references to the sizeable elements:

```js
new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);
new VerticalSplitter('.right.vertical.splitter', TO_THE_LEFT_OF, rightColumn);
new HorizontalSplitter('.main.horizontal.splitter', ABOVE, bottomRow, function(height) {
  bottomLeft.setHeight(height);
});
```
The last argument is an optional callback.

## Contact

* james.smith@djalbat.com
* http://djalbat.com
