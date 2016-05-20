# EasyUI-Layout

Layout elements that work with CSS flexbox.

## Related projects

- [EasyUI](https://github.com/djalbat/EasyUI) A V-framework.
- [Florence](https://github.com/jecs-imperial/Florence) A collaborative proof assistant that depends on all three EasyUI projects. 

## Installation

If you're running [Node.js](http://nodejs.org) you can install EasyUI-Layout with [npm](https://www.npmjs.com/):

    npm install easyui-layout

Client-side you can take the `easyui-layout.js` file in the `dist/` folder put it somewhere and reference it via the usual script element:
 
```html
<script src="scripts/lib/easyui-layout.js"> </script>
```

This will give you a global `easyUILayout` variable which you use directly:
  
```js
var VerticalSplitter = easyUILayout.VerticalSplitter;
```
 
If you're using AMD require client-side or CommonJS server-side the syntax for requiring EasyUI-Layout is the same:

```js
var easyUILayout = require('lib/easyui-layout'),
    VerticalSplitter = easyUILayout.VerticalSplitter;
```

## Documentation

See the `example.html` file in the `docs/` folder for an example.

#### Creating sizeable elements 

This is easily done:

```js
var leftColumn = new SizeableElement('#leftColumn'),
    rightColumn = new SizeableElement('#rightColumn'),
    bottomRow = new SizeableElement('#bottomRow'),
```

#### Creating splitters

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
 
#### HTML and CSS

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
