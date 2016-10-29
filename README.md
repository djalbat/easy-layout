# EasyUI-Layout

Layout elements that work with CSS flexbox.

## Related projects

- [EasyUI](https://github.com/djalbat/EasyUI) A V-framework.

## Installation

You can install EasyUI-Layout with [npm](https://www.npmjs.com/):

    npm install easyui-layout

You can also clone the repository with [git](https://git-scm.com/)...

    git clone https://github.com/djalbat/EasyUI-Layout.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.


## Usage

If you're building with [Node.js](http://nodejs.org) the usage is as follows:

```js
var easyuilayout = require('easyui-layout'),
    VerticalSplitter = easyuilayout.VerticalSplitter;
```

Note the lack of a hyphen.

To use EasyUI-Layout in the browser, take the `easyui-layout.js` file from the project's `dist/` folder and put it somewhere such as a `public/scripts/lib` directory. Referencing this distribution file from a `script` element...

```html
<script src="scripts/lib/easyui-layout.js"> </script>
```

...will give you a global `easyuilayout` variable which can be used directly:

```js
var VerticalSplitter = easyuilayout.VerticalSplitter;
```

Alternatively, if you're using an AMD style `require` the usage is similar to the Node.js case, only make sure that the path to the distribution file is correct. Assuming that the following script should work, assuming it lives in the the `public/scripts/` directory:

```js
var easyuilayout = require('lib/easyui-layout'),
    VerticalSplitter = easyuilayout.VerticalSplitter;
```


## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug
    
## Examples

See the `examples.html` file in the project's root directory, or read on.

### Creating sizeable elements

This is easily done:

```js
var leftColumn = new SizeableElement('#leftColumn'),
    rightColumn = new SizeableElement('#rightColumn'),
    bottomRow = new SizeableElement('#bottomRow'),
```

### Creating splitters

There are constants defined on the relevant classes that should be used to specify where the splitters are situated relative to the sizeable elements they resize:

```js
var ABOVE = HorizontalSplitter.situated.ABOVE,
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
 
You need an understanding of CSS flexbox to make EasyUI-Layout work, really. Have a look at the `example.html` and `example.css` files to get started and in particular the `easyui-layout.css` file. It's recommended that you start from the example in order to get your own layout working.

## Contact

* james.smith@djalbat.com
* http://djalbat.com
