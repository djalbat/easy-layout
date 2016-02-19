# EasyUI-Layout

Layout components that work with CSS flexbox.

EasyUI-Layout gives you sizeable elements that can be resized using draggable splitters.

## Related projects

- [EasyUI](https://github.com/jecs-imperial/EasyUI) A V-framework.
- [Florence](http://djalbat.com/Florence) A collaborative proof assistant that depends on all three EasyUI projects.

## Installation

If you're running [Node.js](http://nodejs.org) you can install EasyUI-Layout with [npm](https://www.npmjs.com/):

    npm install easyui-layout

Client-side you can take the `easyui-layout.js` file in the `dist/` folder put it somewhere and reference it via the usual script element:
 
```html
<script src="scripts/lib/easyui-layout.js"> </script>
```

This will give you a global `easyui-layout` variable which you use directly:
  
```js
var VerticalSplitter = easyui-layout.VerticalSplitter;
```
 
If you're using AMD require client-side or CommonJS server-side the syntax for requiring EasyUI is the same:

```js
var easyui-layout = require('lib/easyui-layout'),
    VerticalSplitter = easyui-layout.VerticalSplitter;
```

jQuery is not bundled with EasyUI-Layout so you will need to include it explicitly whichever way you feel is best.

## Documentation

See the `example.html` file in the `docs/` folder for an example.

#### Creating sizeable elements 

This is easily done:

```js
var leftColumn = new SizeableElement('#leftColumn', 200, null, 600, null),
    rightColumn = new SizeableElement('#rightColumn', 200, null, 600, null),
    bottomRow = new SizeableElement('#bottomRow', null, 100),
```
Apart from the jQuery selector the arguments set the minimum width, minimum height, maximum width, maximum height respectively. If you don't want to supply these, leave them undefined or set them to null.

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
The last argument is an optional callback so that you can set the width and height of related sizeable elements, say.
 
#### HTML and CSS

You need an understanding of CSS flexbox to make EasyUI-Layout work, really. Have a look at the `example.html` and `example.css` files to get started. It's recommended that you start from this example in order to get your own layout working.

#### Changing the CSS

EasyUI-Layout works best with the following CSS, found in the `easyui-layout.css` file:

```css
*,
*:after,
*:before {
  -webkit-box-sizing: border-box !important;
  -moz-box-sizing: border-box !important;
  box-sizing: border-box !important;
  border: 0;
  margin: 0;
  padding: 0;
}
```
Obviously you can override these properties for your own DOM elements but it is not recommended that you do so for sizeable elements or splitters.

## Contact

* jecs@imperial.ac.uk
* http://djalbat.com
