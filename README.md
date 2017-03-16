# EasyUI-Layout

Layout elements that work with CSS flexbox.

There are three elements, namely a horizontal and a vertical draggable splitter and a sizeable element that dragging the splitters will cause to be resized. All the elements are closely tied to CSS. For example, the sizeable element will check the values of its 'min-width', 'max-width', 'min-height', 'max-height' CSS properties and stick to them. Layouts created with these elements can also be nested easily.

### JSX support

There is now support for [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) and its use is *highly recommended*. The contents of this readme file will stay as a reference, however a much better place to start from now on is the EasyUI-JSX online documentation. The section dealing directly with this project is here:

* [EasyUI-JSX Online documentation - EasyUI Layout](https://djalbat.github.io/EasyUI-JSX/#easyUILayout)

From there you can easily navigate to get an overview of EasyUI-JSX. 

### Related projects

- [EasyUI](https://github.com/djalbat/EasyUI) A V-framework.
- [EasyUI-DragAndDrop](https://github.com/djalbat/EasyUI-DragAndDrop) Drag and drop elements including an explorer and a rubbish bin.
- [EasyUI-RichTextarea](https://github.com/djalbat/EasyUI-RichTextarea) A textarea element that handles and hands off events well.

### Are these projects actually used anywhere?

Actually they are, here:

- [Occam Proof Assistant](http://djalbat.com/occam)

## Installation

You can install EasyUI-Layout with [npm](https://www.npmjs.com/):

    npm install easyui-layout

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/EasyUI-Layout.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

## Usage

If you are building with [Node.js](http://nodejs.org) the usage is as follows:

```js
const easyuilayout = require('easyui-layout'),
      VerticalSplitter = easyuilayout.VerticalSplitter;
```

To use EasyUI-Layout in the browser, take the `easyui-layout.js` file from the project's `dist/` directory and put it somewhere such as a `public/scripts/lib` directory. Referencing this distribution file from a `script` element...

```html
<script src="scripts/lib/easyui-layout.js"> </script>
```

...will give you a global `easyuilayout` variable which can be used directly:

```js
const VerticalSplitter = easyuilayout.VerticalSplitter;
```

Note the lack of a hyphen.

Alternatively, if you are using an AMD style `require` the usage is similar to the Node.js case, only make sure that the path to the distribution file is correct. The following script should work, assuming it lives in the the `public/scripts/` directory:

```js
const easyuilayout = require('lib/easyui-layout'),
      VerticalSplitter = easyuilayout.VerticalSplitter;
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
const ABOVE = HorizontalSplitter.situated.ABOVE,
      TO_THE_LEFT_OF = VerticalSplitter.situated.TO_THE_LEFT_OF,
      TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;
```

These are passed to the splitter constructors between the jQuery selectors and references to the sizeable elements:

```js
new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);
new VerticalSplitter('.right.vertical.splitter', TO_THE_LEFT_OF, rightColumn);
new HorizontalSplitter('.main.horizontal.splitter', ABOVE, bottomRow, function(height) {
  bottomLeft.setHeight(height);
});
```
The last argument is an optional callback enabling you to set the width and height of related sizeable elements.

## HTML and CSS

You set the initial, minimum and maximum heights of the sizeable elements in the CSS:

```css
#leftColumn {
  width: 10rem;
  min-width: 5rem;
  max-width: 15rem;
}

#rightColumn {
  width: 20rem;
  max-width: 40rem;
}

#bottomRow {
  height: 10rem;
  min-height: 5rem;
}

#bottomLeft {
  height: 10rem;
}
```
Note that the `bottomLeft` element has the same initial height as the `bottomRow` element. Afterwards the two elements are kept in line with the callback set on the main horizontal splitter, see above.

You need an understanding of CSS flexbox to make these elements work, really. It is recommended that you start from the examples above in order to get your own layout working.

## Contact

* james.smith@djalbat.com
* http://djalbat.com
