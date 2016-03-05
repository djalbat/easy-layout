(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.easyuiLayout = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {
  SizeableElement: require('./lib/sizeableElement'),
  VerticalSplitter: require('./lib/verticalSplitter'),
  HorizontalSplitter: require('./lib/horizontalSplitter')
};

},{"./lib/horizontalSplitter":4,"./lib/sizeableElement":5,"./lib/verticalSplitter":7}],2:[function(require,module,exports){
'use strict';

var inherits = function(target, source, superMethodNames) {
  var targetPrototype = Object.getPrototypeOf(target);

  if (source.$element) {
    source.$element.data('element', target);
  }

  for (var prop in source) {
    if (source.hasOwnProperty(prop)) {
      target[prop] = source[prop];
    } else {
      if (!targetPrototype[prop]) {
        targetPrototype[prop] = source[prop];
      }
    }
  }

  if (superMethodNames) {
    var superMethods = {};

    superMethodNames.forEach(function(superMethodName) {
      superMethods[superMethodName] = source[superMethodName].bind(target);
    });

    target.super = superMethods;  ///
  }
};

module.exports = inherits;

},{}],3:[function(require,module,exports){
'use strict';

var easyui = require('easyui'),
    Body = easyui.Body;

var body = new Body(),
    previousCursor;  ///

var cursor = {
  columnResize: function() {
    var currentCursor = this.getCursor();

    if (currentCursor !== 'col-resize') {
      previousCursor = currentCursor;

      this.setCursor('col-resize');
    }
  },

  rowResize: function() {
    var currentCursor = this.getCursor();

    if (currentCursor !== 'row-resize') {
      previousCursor = currentCursor;

      this.setCursor('row-resize');
    }
  },

  reset: function() {
    this.setCursor(previousCursor); ///
  },

  getCursor: function() {
    var currentCursor = body.css('cursor');  ///

    return currentCursor || 'auto'; ///
  },

  setCursor: function(cursor) {
    var css = {
      cursor: cursor
    };

    body.css(css);
  }
};

module.exports = cursor;

},{"easyui":8}],4:[function(require,module,exports){
'use strict';

var inherits = require('../inherits');

var cursor = require('./cursor'),
    Splitter = require('./splitter');

var HorizontalSplitter = function(selectorOr$Element, situated, sizeableElement, dragHandler) {
  inherits(this, new Splitter(selectorOr$Element));

  this.situated = situated;
  this.sizeableElement = sizeableElement;
  this.dragHandler = dragHandler;

  this.mouseTop = null;

  this.sizeableElementHeight = null;

  this.onMouseDown(function(mouseTop, mouseLeft) {
    cursor.rowResize();

    this.mouseTop = mouseTop;

    this.sizeableElementHeight = this.sizeableElement.getHeight();

    var dragging = this.isDragging();

    if (!dragging) {
      this.startDragging();
    }
  }.bind(this));

  this.onMouseUp(function() {
    cursor.reset();

    if (this.dragging) {
      this.stopDragging();
    }
  }.bind(this));

  this.onMouseOver(function() {
    cursor.rowResize();
  });

  this.onMouseOut(function() {
    cursor.reset();
  });

  this.onMouseMove(function(mouseTop, mouseLeft) {
    var dragging = this.isDragging();

    if (dragging) {
      var relativeMouseTop = mouseTop - this.mouseTop,
          height = this.sizeableElementHeight - this.situated * relativeMouseTop;

      this.sizeableElement.setHeight(height);

      var sizeableElementHeight = this.sizeableElement.getHeight();

      if (this.dragHandler) {
        this.dragHandler(sizeableElementHeight);
      }
    }
  }.bind(this));
};

HorizontalSplitter.situated = {
  ABOVE: +1,
  BELOW: -1
};

module.exports = HorizontalSplitter;

},{"../inherits":2,"./cursor":3,"./splitter":6}],5:[function(require,module,exports){
'use strict';

var inherits = require('../inherits');

var easyui = require('easyui'),
    Element = easyui.Element;

var SizeableElement = function(selectorOr$Element, minimumWidth, minimumHeight, maximumWidth, maximumHeight) {
  inherits(this, new Element(selectorOr$Element), ['setWidth', 'setHeight']);

  this.minimumWidth = minimumWidth;
  this.minimumHeight = minimumHeight;
  this.maximumWidth = maximumWidth;
  this.maximumHeight = maximumHeight;
};

SizeableElement.prototype = {
  setWidth: function(width) {
    if (width === 'auto') {
      this.super.setWidth(width);

      return;
    }

    if (this.minimumWidth) {
      width = Math.max(width, this.minimumWidth);
    }
    if (this.maximumWidth) {
      width = Math.min(width, this.maximumWidth);
    }

    this.super.setWidth(width);
  },

  setHeight: function(height) {
    if (height === 'auto') {
      this.super.setHeight(height);

      return;
    }

    if (this.minimumHeight) {
      height = Math.max(height, this.minimumHeight);
    }
    if (this.maximumHeight) {
      height = Math.min(height, this.maximumHeight);
    }

    this.super.setHeight(height);
  }
};

module.exports = SizeableElement;

},{"../inherits":2,"easyui":8}],6:[function(require,module,exports){
'use strict';

var inherits = require('../inherits');

var easyui = require('easyui'),
    Element = easyui.Element,
    Body = easyui.Body;

var body = new Body();

var Splitter = function(selectorOr$Element) {
  inherits(this, new Element(selectorOr$Element), ['onMouseDown', 'onMouseOver', 'onMouseOut']);

  this.dragHandler = null;

  this.dragging = false;

  this.disabled = false;
};

Splitter.prototype = {
  enable: function() {
    this.disabled = false;
  },

  disable: function() {
    this.disabled = true;
  },

  onDragging: function(dragHandler) {
    this.dragHandler = dragHandler;
  },

  startDragging: function() {
    this.dragging = true;
  },

  stopDragging: function() {
    this.dragging = false;
  },

  isDragging: function() {
    return this.dragging;
  },

  onMouseDown: function(handler) { this.super.onMouseDown(returnMouseEventHandler(handler).bind(this)); },
  onMouseOver: function(handler) { this.super.onMouseOver(returnMouseEventHandler(handler).bind(this)); },
  onMouseOut: function(handler) { this.super.onMouseOut(returnMouseEventHandler(handler).bind(this)); },
  onMouseUp: function(handler) { body.onMouseUp(returnMouseEventHandler(handler).bind(this)); },  ///
  onMouseMove: function(handler) { body.onMouseMove(returnMouseEventHandler(handler).bind(this)); } ///
};

function returnMouseEventHandler(handler) {
  return function(mouseTop, mouseLeft) {
    if (!this.disabled) {
      handler(mouseTop, mouseLeft);
    }
  };
}

module.exports = Splitter;

},{"../inherits":2,"easyui":8}],7:[function(require,module,exports){
'use strict';

var inherits = require('../inherits');

var cursor = require('./cursor'),
    Splitter = require('./splitter');

var VerticalSplitter = function(selectorOr$Element, situated, sizeableElement, dragHandler) {
  inherits(this, new Splitter(selectorOr$Element));

  this.situated = situated;
  this.sizeableElement = sizeableElement;
  this.dragHandler = dragHandler;

  this.mouseLeft = null;

  this.sizeableElementWidth = null;

  this.onMouseDown(function(mouseTop, mouseLeft) {
    cursor.columnResize();

    this.mouseLeft = mouseLeft;

    this.sizeableElementWidth = this.sizeableElement.getWidth();

    var dragging = this.isDragging();

    if (!dragging) {
      this.startDragging();
    }
  }.bind(this));

  this.onMouseUp(function() {
    cursor.reset();

    if (this.dragging) {
      this.stopDragging();
    }
  }.bind(this));

  this.onMouseOver(function() {
    cursor.columnResize();
  });

  this.onMouseOut(function() {
    cursor.reset();
  });

  this.onMouseMove(function(mouseTop, mouseLeft) {
    var dragging = this.isDragging();

    if (dragging) {
      var relativeMouseLeft = mouseLeft - this.mouseLeft,
          width = this.sizeableElementWidth - this.situated * relativeMouseLeft;

      this.sizeableElement.setWidth(width);

      var sizeableElementWidth = this.sizeableElement.getWidth();

      if (this.dragHandler) {
        this.dragHandler(sizeableElementWidth);
      }
    }
  }.bind(this));
};

VerticalSplitter.situated = {
  TO_THE_LEFT_OF: +1,
  TO_THE_RIGHT_OF: -1
};

module.exports = VerticalSplitter;

},{"../inherits":2,"./cursor":3,"./splitter":6}],8:[function(require,module,exports){
'use strict';

module.exports = {
  Element: require('./lib/element'),
  Bounds: require('./lib/bounds'),
  Body: require('./lib/body'),
  Div: require('./lib/div'),
  Link: require('./lib/link'),
  Input: require('./lib/input'),
  Select: require('./lib/select'),
  Button: require('./lib/button'),
  Checkbox: require('./lib/checkbox')
};

},{"./lib/body":10,"./lib/bounds":11,"./lib/button":12,"./lib/checkbox":13,"./lib/div":14,"./lib/element":15,"./lib/input":16,"./lib/link":17,"./lib/select":18}],9:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],10:[function(require,module,exports){
'use strict';

var inherits = require('../inherits');

var Element = require('./element');

var Body = function(selectorOr$Element) {
  if (selectorOr$Element === undefined) {
    selectorOr$Element = 'body';
  }

  inherits(this, new Element(selectorOr$Element));
};

Body.prototype = {
  clone: function() { return Body.clone(this.$element); },

  onClick: function(handler) {
    this.$element.click(function() {
      handler();

      return false;
    })
  },

  onDoubleClick: function(handler) {
    this.$element.dblclick(function() {
      handler();

      return false;
    })
  }
};

Body.clone = function(selectorOr$Element) {
  return Element.clone(Body, selectorOr$Element);
};

Body.fromHTML = function(html) {
  return Element.fromHTML(Body, html);
};

module.exports = Body;

},{"../inherits":9,"./element":15}],11:[function(require,module,exports){
'use strict';

var Bounds = function(top, left, bottom, right) {
  this.top = top;
  this.left = left;
  this.bottom = bottom;
  this.right = right;
};

Bounds.prototype = {
  getTop: function() {
    return this.top;
  },

  getLeft: function() {
    return this.left;
  },

  getBottom: function() {
    return this.bottom;
  },

  getRight: function() {
    return this.right;
  },

  areOverlapping: function(bounds) {
    return this.top <= bounds.bottom
        && this.left <= bounds.right
        && this.bottom >= bounds.top
        && this.right >= bounds.left;
  }
};

module.exports = Bounds;

},{}],12:[function(require,module,exports){
'use strict';

var inherits = require('../inherits');

var Element = require('./element');

var Button = function(selectorOr$Element, clickHandler) {
  inherits(this, new Element(selectorOr$Element));

  if (clickHandler) {
    this.onClick(clickHandler);
  }
};

Button.prototype = {
  clone: function(clickHandler) { return Button.clone(this.$element, clickHandler); },

  onClick: function(handler) {
    this.$element.click(function() {
      handler();

      return false;
    })
  },

  onDoubleClick: function(handler) {
    this.$element.dblclick(function() {
      handler();

      return false;
    })
  }
};

Button.clone = function(selectorOr$Element, clickHandler) {
  return Element.clone(Button, selectorOr$Element, clickHandler);
};

Button.fromHTML = function(html, clickHandler) {
  return Element.fromHTML(Button, html, clickHandler);
};

module.exports = Button;

},{"../inherits":9,"./element":15}],13:[function(require,module,exports){
'use strict';

var inherits = require('../inherits');

var Element = require('./element');

var Checkbox = function(selectorOr$Element, clickHandler) {
  inherits(this, new Element(selectorOr$Element));

  if (clickHandler) {
    this.onClick(clickHandler);
  }
};

Checkbox.prototype = {
  clone: function(clickHandler) { return Checkbox.clone(this.$element, clickHandler); },

  onClick: function(handler) {
    this.$element.click(function() {
      var checked = this.isChecked();

      handler(checked);
    }.bind(this))
  },

  check: function(checked) {
    if (arguments.length === 0) {
      checked = true;
    }

    if (checked) {
      this.$element.attr('checked', 'checked');
    } else {
      this.$element.removeAttr('checked');
    }
  },

  isChecked: function() {
    return this.$element.is(':checked');
  }
};

Checkbox.clone = function(selectorOr$Element, clickHandler) {
  return Element.clone(Checkbox, selectorOr$Element, clickHandler);
};

Checkbox.fromHTML = function(html, clickHandler) {
  return Element.fromHTML(Checkbox, html, clickHandler);
};

module.exports = Checkbox;

},{"../inherits":9,"./element":15}],14:[function(require,module,exports){
'use strict';

var inherits = require('../inherits');

var Element = require('./element');

var Div = function(selectorOr$Element) {
  inherits(this, new Element(selectorOr$Element));
};

Div.prototype = {
  clone: function() { return Div.clone(this.$element); }
};

Div.clone = function(selectorOr$Element) {
  return Element.clone(Div, selectorOr$Element);
};

Div.fromHTML = function(html) {
  return Element.fromHTML(Div, html);
};

module.exports = Div;

},{"../inherits":9,"./element":15}],15:[function(require,module,exports){
'use strict';

var Bounds = require('./bounds');

var Element = function(selectorOr$Element) {
  this.$element = $element(selectorOr$Element);

  this.$element.data('element', this);
};

Element.prototype = {
  clone: function() {
    var clonedElement = Element.clone(this.$element);

    return clonedElement;
  },

  show: function() { this.$element.show(); },
  hide: function() { this.$element.hide(); },
  enable: function() { this.$element.removeAttr('disabled'); },
  disable: function() { this.$element.attr('disabled', true); },

  getWidth: function() { return this.$element.width(); },
  getHeight: function() { return this.$element.height(); },
  setWidth: function(width) { this.$element.width(width); },
  setHeight: function(height) { this.$element.height(height); },

  getBounds: function() {
    var $offset = this.$element.offset(),
        top = $offset.top,  ///
        left = $offset.left,  ///
        width = this.getWidth(),
        height = this.getHeight(),
        bottom = top + height,
        right = left + width,
        bounds = new Bounds(top, left, bottom, right);

    return bounds;
  },

  getAttribute: function(name) { return this.$element.attr(name); },
  addAttribute: function(name, value) { this.$element.attr(name, value); },
  removeAttribute: function(name) { this.$element.removeAttr(name); },

  prependBefore: function(element) { this.$element.before(element.$element); },
  appendAfter: function(element) { this.$element.after(element.$element); },
  prepend: function(element) { this.$element.prepend(element.$element); },
  append: function(element) { this.$element.append(element.$element); },
  remove: function() { this.$element.remove(); },

  hasClass: function(className) { return this.$element.hasClass(className); },
  addClass: function(className) { this.$element.addClass(className); },
  removeClass: function(className) { this.$element.removeClass(className); },
  removeClasses: function() { this.$element.removeClass(); },

  html: function(html) {
    if (arguments.length === 1) {
      this.$element.html(html)
    } else {
      html = this.$element.html();

      return html;
    }
  },

  css: function(css) {
    if (typeof css === 'string') {
      var propertyName = css;

      css = this.$element.css(propertyName);

      return css;
    } else {
      this.$element.css(css);
    }
  },

  findElements: function(selector) {
    var foundDOMElements = this.$element.find(selector),
        foundElements = elementsFromDOMElements(foundDOMElements);

    return foundElements;
  },

  childElements: function(selector) {
    var childDOMElements = this.$element.children(selector),
        childElements = elementsFromDOMElements(childDOMElements);

    return childElements;
  },

  on: function(events, handler) { this.$element.on(events, handler); },

  onMouseUp: function(handler) { this.$element.on('mouseup', returnMouseEventHandler(handler)); },
  onMouseDown: function(handler) { this.$element.on('mousedown', returnMouseEventHandler(handler)); },
  onMouseOver: function(handler) { this.$element.on('mouseover', returnMouseEventHandler(handler)); },
  onMouseOut: function(handler) { this.$element.on('mouseout', returnMouseEventHandler(handler)); },
  onMouseMove: function(handler) { this.$element.on('mousemove', returnMouseEventHandler(handler)); }
};

Element.fromHTML = function(html) {
  var Class,
      args;

  if (arguments.length === 1) {
    Class = Element;
    args = [];
  } else {
    Class = arguments[0];
    html = arguments[1];
    args = Array.prototype.slice.call(arguments, 2);
  }

  var $htmlElement = $(html);

  return instance(Class, $htmlElement, args);
};

Element.clone = function(selectorOr$Element) {
  var Class,
      args;

  if (arguments.length === 1) {
    Class = Element;
    args = [];
  } else {
    Class = arguments[0];
    selectorOr$Element = arguments[1];
    args = Array.prototype.slice.call(arguments, 2);
  }

  var $clonedElement = $element(selectorOr$Element).clone();

  return instance(Class, $clonedElement, args);
};

Element.LEFT_MOUSE_BUTTON = 1;
Element.MIDDLE_MOUSE_BUTTON = 2;
Element.RIGHT_MOUSE_BUTTON = 3;

module.exports = Element;

function returnMouseEventHandler(handler) {
  return function(event) {
    var mouseTop = event.pageY,  ///
        mouseLeft = event.pageX, ///
        mouseButton = event.which; ///

    handler(mouseTop, mouseLeft, mouseButton);
  };
}

function $element(selectorOr$Element) {
  var $element;

  if (selectorOr$Element instanceof jQuery) {
    $element = selectorOr$Element;
  } else if (typeof selectorOr$Element === 'string') {
    $element = $(selectorOr$Element);
  } else {
    var parent$Element = selectorOr$Element[0], ///
        childSelector = selectorOr$Element[1];

    $element = parent$Element.find(childSelector);
  }

  return $element;
}

function instance(Class, $element, args) {
  args.unshift($element);

  args.unshift(null); ///

  var instance = new (Function.prototype.bind.apply(Class, args));  ///

  return instance;
}

function elementsFromDOMElements(domElements) {
  var elements = [],
      domElementsLength = domElements.length;

  for (var i = 0; i < domElementsLength; i++) {
    var domElement = domElements[i],
        $element = $(domElement),
        element = $element.data('element');

    if (element) {
      elements.push(element);
    }
  }

  return elements;
}

},{"./bounds":11}],16:[function(require,module,exports){
'use strict';

var inherits = require('../inherits');

var Element = require('./element');

var Input = function(selectorOr$Element, changeHandler) {
  inherits(this, new Element(selectorOr$Element));

  if (changeHandler) {
    this.onChange(changeHandler);
  }
};

Input.prototype = {
  clone: function() { return Input.clone(this.$element); },

  onChange: function(handler) {
    this.$element.change(function() {
      var value = this.getValue();

      handler(value);
    }.bind(this));
  },

  getValue: function() {
    var value = this.$element.val();

    return value;
  },

  setValue: function(value) {
    this.$element.val(value);
  },

  select: function() {
    this.$element.select();
  }
};

Input.clone = function(selectorOr$Element) {
  return Element.clone(Input, selectorOr$Element);
};

Input.fromHTML = function(html) {
  return Element.fromHTML(Input, html);
};

module.exports = Input;

},{"../inherits":9,"./element":15}],17:[function(require,module,exports){
'use strict';

var inherits = require('../inherits');

var Element = require('./element');

var Link = function(selectorOr$Element, clickHandler) {
  inherits(this, new Element(selectorOr$Element));

  if (clickHandler) {
    this.onClick(clickHandler);
  }
};

Link.prototype = {
  clone: function(clickHandler) { return Link.clone(this.$element, clickHandler); },

  onClick: function(handler) {
    this.$element.click(function() {
      var href = this.$element.attr('href');

      handler(href);

      return false;
    }.bind(this))
  }
};

Link.clone = function(selectorOr$Element, clickHandler) {
  return Element.clone(Link, selectorOr$Element, clickHandler);
};

Link.fromHTML = function(html, clickHandler) {
  return Element.fromHTML(Link, html, clickHandler);
};

module.exports = Link;

},{"../inherits":9,"./element":15}],18:[function(require,module,exports){
'use strict';

var inherits = require('../inherits');

var Element = require('./element');

var Select = function(selectorOr$Element, changeHandler) {
  inherits(this, new Element(selectorOr$Element));

  if (changeHandler) {
    this.onChange(changeHandler);
  }
};

Select.prototype = {
  clone: function(changeHandler) { return Select.clone(this.$element, changeHandler); },

  onChange: function(handler) {
    this.$element.change(function() {
      var selectedOptionValue = this.getSelectedOptionValue();

      handler(selectedOptionValue);
    }.bind(this));
  },

  getSelectedOptionValue: function() {
    var $selectedOption = this.$element.find(':selected'),
        selectedOptionValue = $selectedOption.val();

    return selectedOptionValue;
  },

  setSelectedOptionByValue: function(value) {
    this.$element.val(value);
  }
};

Select.clone = function(selectorOr$Element, changeHandler) {
  return Element.clone(Select, selectorOr$Element, changeHandler);
};

Select.fromHTML = function(html, changeHandler) {
  return Element.fromHTML(Select, html, changeHandler);
};

module.exports = Select;

},{"../inherits":9,"./element":15}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImluaGVyaXRzLmpzIiwibGliL2N1cnNvci5qcyIsImxpYi9ob3Jpem9udGFsU3BsaXR0ZXIuanMiLCJsaWIvc2l6ZWFibGVFbGVtZW50LmpzIiwibGliL3NwbGl0dGVyLmpzIiwibGliL3ZlcnRpY2FsU3BsaXR0ZXIuanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3l1aS9saWIvYm9keS5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvbGliL2JvdW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvbGliL2J1dHRvbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvbGliL2NoZWNrYm94LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3l1aS9saWIvZGl2LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3l1aS9saWIvZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvbGliL2lucHV0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3l1aS9saWIvbGluay5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvbGliL3NlbGVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFNpemVhYmxlRWxlbWVudDogcmVxdWlyZSgnLi9saWIvc2l6ZWFibGVFbGVtZW50JyksXG4gIFZlcnRpY2FsU3BsaXR0ZXI6IHJlcXVpcmUoJy4vbGliL3ZlcnRpY2FsU3BsaXR0ZXInKSxcbiAgSG9yaXpvbnRhbFNwbGl0dGVyOiByZXF1aXJlKCcuL2xpYi9ob3Jpem9udGFsU3BsaXR0ZXInKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24odGFyZ2V0LCBzb3VyY2UsIHN1cGVyTWV0aG9kTmFtZXMpIHtcbiAgdmFyIHRhcmdldFByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpO1xuXG4gIGlmIChzb3VyY2UuJGVsZW1lbnQpIHtcbiAgICBzb3VyY2UuJGVsZW1lbnQuZGF0YSgnZWxlbWVudCcsIHRhcmdldCk7XG4gIH1cblxuICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0YXJnZXRQcm90b3R5cGVbcHJvcF0pIHtcbiAgICAgICAgdGFyZ2V0UHJvdG90eXBlW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzdXBlck1ldGhvZE5hbWVzKSB7XG4gICAgdmFyIHN1cGVyTWV0aG9kcyA9IHt9O1xuXG4gICAgc3VwZXJNZXRob2ROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHN1cGVyTWV0aG9kTmFtZSkge1xuICAgICAgc3VwZXJNZXRob2RzW3N1cGVyTWV0aG9kTmFtZV0gPSBzb3VyY2Vbc3VwZXJNZXRob2ROYW1lXS5iaW5kKHRhcmdldCk7XG4gICAgfSk7XG5cbiAgICB0YXJnZXQuc3VwZXIgPSBzdXBlck1ldGhvZHM7ICAvLy9cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbmhlcml0cztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIEJvZHkgPSBlYXN5dWkuQm9keTtcblxudmFyIGJvZHkgPSBuZXcgQm9keSgpLFxuICAgIHByZXZpb3VzQ3Vyc29yOyAgLy8vXG5cbnZhciBjdXJzb3IgPSB7XG4gIGNvbHVtblJlc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGN1cnJlbnRDdXJzb3IgPSB0aGlzLmdldEN1cnNvcigpO1xuXG4gICAgaWYgKGN1cnJlbnRDdXJzb3IgIT09ICdjb2wtcmVzaXplJykge1xuICAgICAgcHJldmlvdXNDdXJzb3IgPSBjdXJyZW50Q3Vyc29yO1xuXG4gICAgICB0aGlzLnNldEN1cnNvcignY29sLXJlc2l6ZScpO1xuICAgIH1cbiAgfSxcblxuICByb3dSZXNpemU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjdXJyZW50Q3Vyc29yID0gdGhpcy5nZXRDdXJzb3IoKTtcblxuICAgIGlmIChjdXJyZW50Q3Vyc29yICE9PSAncm93LXJlc2l6ZScpIHtcbiAgICAgIHByZXZpb3VzQ3Vyc29yID0gY3VycmVudEN1cnNvcjtcblxuICAgICAgdGhpcy5zZXRDdXJzb3IoJ3Jvdy1yZXNpemUnKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0Q3Vyc29yKHByZXZpb3VzQ3Vyc29yKTsgLy8vXG4gIH0sXG5cbiAgZ2V0Q3Vyc29yOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3VycmVudEN1cnNvciA9IGJvZHkuY3NzKCdjdXJzb3InKTsgIC8vL1xuXG4gICAgcmV0dXJuIGN1cnJlbnRDdXJzb3IgfHwgJ2F1dG8nOyAvLy9cbiAgfSxcblxuICBzZXRDdXJzb3I6IGZ1bmN0aW9uKGN1cnNvcikge1xuICAgIHZhciBjc3MgPSB7XG4gICAgICBjdXJzb3I6IGN1cnNvclxuICAgIH07XG5cbiAgICBib2R5LmNzcyhjc3MpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGN1cnNvcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnLi4vaW5oZXJpdHMnKTtcblxudmFyIGN1cnNvciA9IHJlcXVpcmUoJy4vY3Vyc29yJyksXG4gICAgU3BsaXR0ZXIgPSByZXF1aXJlKCcuL3NwbGl0dGVyJyk7XG5cbnZhciBIb3Jpem9udGFsU3BsaXR0ZXIgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIHNpdHVhdGVkLCBzaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyKSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBTcGxpdHRlcihzZWxlY3Rvck9yJEVsZW1lbnQpKTtcblxuICB0aGlzLnNpdHVhdGVkID0gc2l0dWF0ZWQ7XG4gIHRoaXMuc2l6ZWFibGVFbGVtZW50ID0gc2l6ZWFibGVFbGVtZW50O1xuICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG5cbiAgdGhpcy5tb3VzZVRvcCA9IG51bGw7XG5cbiAgdGhpcy5zaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBudWxsO1xuXG4gIHRoaXMub25Nb3VzZURvd24oZnVuY3Rpb24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGN1cnNvci5yb3dSZXNpemUoKTtcblxuICAgIHRoaXMubW91c2VUb3AgPSBtb3VzZVRvcDtcblxuICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5zaXplYWJsZUVsZW1lbnQuZ2V0SGVpZ2h0KCk7XG5cbiAgICB2YXIgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcblxuICB0aGlzLm9uTW91c2VVcChmdW5jdGlvbigpIHtcbiAgICBjdXJzb3IucmVzZXQoKTtcblxuICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XG4gICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcblxuICB0aGlzLm9uTW91c2VPdmVyKGZ1bmN0aW9uKCkge1xuICAgIGN1cnNvci5yb3dSZXNpemUoKTtcbiAgfSk7XG5cbiAgdGhpcy5vbk1vdXNlT3V0KGZ1bmN0aW9uKCkge1xuICAgIGN1cnNvci5yZXNldCgpO1xuICB9KTtcblxuICB0aGlzLm9uTW91c2VNb3ZlKGZ1bmN0aW9uKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICB2YXIgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgdmFyIHJlbGF0aXZlTW91c2VUb3AgPSBtb3VzZVRvcCAtIHRoaXMubW91c2VUb3AsXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5zaXplYWJsZUVsZW1lbnRIZWlnaHQgLSB0aGlzLnNpdHVhdGVkICogcmVsYXRpdmVNb3VzZVRvcDtcblxuICAgICAgdGhpcy5zaXplYWJsZUVsZW1lbnQuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICAgIHZhciBzaXplYWJsZUVsZW1lbnRIZWlnaHQgPSB0aGlzLnNpemVhYmxlRWxlbWVudC5nZXRIZWlnaHQoKTtcblxuICAgICAgaWYgKHRoaXMuZHJhZ0hhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5kcmFnSGFuZGxlcihzaXplYWJsZUVsZW1lbnRIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbkhvcml6b250YWxTcGxpdHRlci5zaXR1YXRlZCA9IHtcbiAgQUJPVkU6ICsxLFxuICBCRUxPVzogLTFcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSG9yaXpvbnRhbFNwbGl0dGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgRWxlbWVudCA9IGVhc3l1aS5FbGVtZW50O1xuXG52YXIgU2l6ZWFibGVFbGVtZW50ID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBtaW5pbXVtV2lkdGgsIG1pbmltdW1IZWlnaHQsIG1heGltdW1XaWR0aCwgbWF4aW11bUhlaWdodCkge1xuICBpbmhlcml0cyh0aGlzLCBuZXcgRWxlbWVudChzZWxlY3Rvck9yJEVsZW1lbnQpLCBbJ3NldFdpZHRoJywgJ3NldEhlaWdodCddKTtcblxuICB0aGlzLm1pbmltdW1XaWR0aCA9IG1pbmltdW1XaWR0aDtcbiAgdGhpcy5taW5pbXVtSGVpZ2h0ID0gbWluaW11bUhlaWdodDtcbiAgdGhpcy5tYXhpbXVtV2lkdGggPSBtYXhpbXVtV2lkdGg7XG4gIHRoaXMubWF4aW11bUhlaWdodCA9IG1heGltdW1IZWlnaHQ7XG59O1xuXG5TaXplYWJsZUVsZW1lbnQucHJvdG90eXBlID0ge1xuICBzZXRXaWR0aDogZnVuY3Rpb24od2lkdGgpIHtcbiAgICBpZiAod2lkdGggPT09ICdhdXRvJykge1xuICAgICAgdGhpcy5zdXBlci5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5taW5pbXVtV2lkdGgpIHtcbiAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIHRoaXMubWluaW11bVdpZHRoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubWF4aW11bVdpZHRoKSB7XG4gICAgICB3aWR0aCA9IE1hdGgubWluKHdpZHRoLCB0aGlzLm1heGltdW1XaWR0aCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdXBlci5zZXRXaWR0aCh3aWR0aCk7XG4gIH0sXG5cbiAgc2V0SGVpZ2h0OiBmdW5jdGlvbihoZWlnaHQpIHtcbiAgICBpZiAoaGVpZ2h0ID09PSAnYXV0bycpIHtcbiAgICAgIHRoaXMuc3VwZXIuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5taW5pbXVtSGVpZ2h0KSB7XG4gICAgICBoZWlnaHQgPSBNYXRoLm1heChoZWlnaHQsIHRoaXMubWluaW11bUhlaWdodCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1heGltdW1IZWlnaHQpIHtcbiAgICAgIGhlaWdodCA9IE1hdGgubWluKGhlaWdodCwgdGhpcy5tYXhpbXVtSGVpZ2h0KTtcbiAgICB9XG5cbiAgICB0aGlzLnN1cGVyLnNldEhlaWdodChoZWlnaHQpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpemVhYmxlRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnLi4vaW5oZXJpdHMnKTtcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIEVsZW1lbnQgPSBlYXN5dWkuRWxlbWVudCxcbiAgICBCb2R5ID0gZWFzeXVpLkJvZHk7XG5cbnZhciBib2R5ID0gbmV3IEJvZHkoKTtcblxudmFyIFNwbGl0dGVyID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCksIFsnb25Nb3VzZURvd24nLCAnb25Nb3VzZU92ZXInLCAnb25Nb3VzZU91dCddKTtcblxuICB0aGlzLmRyYWdIYW5kbGVyID0gbnVsbDtcblxuICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cbiAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xufTtcblxuU3BsaXR0ZXIucHJvdG90eXBlID0ge1xuICBlbmFibGU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSxcblxuICBkaXNhYmxlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgfSxcblxuICBvbkRyYWdnaW5nOiBmdW5jdGlvbihkcmFnSGFuZGxlcikge1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcbiAgfSxcblxuICBzdGFydERyYWdnaW5nOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgfSxcblxuICBzdG9wRHJhZ2dpbmc6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgfSxcblxuICBpc0RyYWdnaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2luZztcbiAgfSxcblxuICBvbk1vdXNlRG93bjogZnVuY3Rpb24oaGFuZGxlcikgeyB0aGlzLnN1cGVyLm9uTW91c2VEb3duKHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpOyB9LFxuICBvbk1vdXNlT3ZlcjogZnVuY3Rpb24oaGFuZGxlcikgeyB0aGlzLnN1cGVyLm9uTW91c2VPdmVyKHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpOyB9LFxuICBvbk1vdXNlT3V0OiBmdW5jdGlvbihoYW5kbGVyKSB7IHRoaXMuc3VwZXIub25Nb3VzZU91dChyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKS5iaW5kKHRoaXMpKTsgfSxcbiAgb25Nb3VzZVVwOiBmdW5jdGlvbihoYW5kbGVyKSB7IGJvZHkub25Nb3VzZVVwKHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpOyB9LCAgLy8vXG4gIG9uTW91c2VNb3ZlOiBmdW5jdGlvbihoYW5kbGVyKSB7IGJvZHkub25Nb3VzZU1vdmUocmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikuYmluZCh0aGlzKSk7IH0gLy8vXG59O1xuXG5mdW5jdGlvbiByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBoYW5kbGVyKG1vdXNlVG9wLCBtb3VzZUxlZnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTcGxpdHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnLi4vaW5oZXJpdHMnKTtcblxudmFyIGN1cnNvciA9IHJlcXVpcmUoJy4vY3Vyc29yJyksXG4gICAgU3BsaXR0ZXIgPSByZXF1aXJlKCcuL3NwbGl0dGVyJyk7XG5cbnZhciBWZXJ0aWNhbFNwbGl0dGVyID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBzaXR1YXRlZCwgc2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlcikge1xuICBpbmhlcml0cyh0aGlzLCBuZXcgU3BsaXR0ZXIoc2VsZWN0b3JPciRFbGVtZW50KSk7XG5cbiAgdGhpcy5zaXR1YXRlZCA9IHNpdHVhdGVkO1xuICB0aGlzLnNpemVhYmxlRWxlbWVudCA9IHNpemVhYmxlRWxlbWVudDtcbiAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuXG4gIHRoaXMubW91c2VMZWZ0ID0gbnVsbDtcblxuICB0aGlzLnNpemVhYmxlRWxlbWVudFdpZHRoID0gbnVsbDtcblxuICB0aGlzLm9uTW91c2VEb3duKGZ1bmN0aW9uKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjdXJzb3IuY29sdW1uUmVzaXplKCk7XG5cbiAgICB0aGlzLm1vdXNlTGVmdCA9IG1vdXNlTGVmdDtcblxuICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50V2lkdGggPSB0aGlzLnNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpO1xuXG4gICAgdmFyIGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcoKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgdGhpcy5vbk1vdXNlVXAoZnVuY3Rpb24oKSB7XG4gICAgY3Vyc29yLnJlc2V0KCk7XG5cbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgdGhpcy5vbk1vdXNlT3ZlcihmdW5jdGlvbigpIHtcbiAgICBjdXJzb3IuY29sdW1uUmVzaXplKCk7XG4gIH0pO1xuXG4gIHRoaXMub25Nb3VzZU91dChmdW5jdGlvbigpIHtcbiAgICBjdXJzb3IucmVzZXQoKTtcbiAgfSk7XG5cbiAgdGhpcy5vbk1vdXNlTW92ZShmdW5jdGlvbihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgdmFyIGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgIHZhciByZWxhdGl2ZU1vdXNlTGVmdCA9IG1vdXNlTGVmdCAtIHRoaXMubW91c2VMZWZ0LFxuICAgICAgICAgIHdpZHRoID0gdGhpcy5zaXplYWJsZUVsZW1lbnRXaWR0aCAtIHRoaXMuc2l0dWF0ZWQgKiByZWxhdGl2ZU1vdXNlTGVmdDtcblxuICAgICAgdGhpcy5zaXplYWJsZUVsZW1lbnQuc2V0V2lkdGgod2lkdGgpO1xuXG4gICAgICB2YXIgc2l6ZWFibGVFbGVtZW50V2lkdGggPSB0aGlzLnNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpO1xuXG4gICAgICBpZiAodGhpcy5kcmFnSGFuZGxlcikge1xuICAgICAgICB0aGlzLmRyYWdIYW5kbGVyKHNpemVhYmxlRWxlbWVudFdpZHRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5WZXJ0aWNhbFNwbGl0dGVyLnNpdHVhdGVkID0ge1xuICBUT19USEVfTEVGVF9PRjogKzEsXG4gIFRPX1RIRV9SSUdIVF9PRjogLTFcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxTcGxpdHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVsZW1lbnQ6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQnKSxcbiAgQm91bmRzOiByZXF1aXJlKCcuL2xpYi9ib3VuZHMnKSxcbiAgQm9keTogcmVxdWlyZSgnLi9saWIvYm9keScpLFxuICBEaXY6IHJlcXVpcmUoJy4vbGliL2RpdicpLFxuICBMaW5rOiByZXF1aXJlKCcuL2xpYi9saW5rJyksXG4gIElucHV0OiByZXF1aXJlKCcuL2xpYi9pbnB1dCcpLFxuICBTZWxlY3Q6IHJlcXVpcmUoJy4vbGliL3NlbGVjdCcpLFxuICBCdXR0b246IHJlcXVpcmUoJy4vbGliL2J1dHRvbicpLFxuICBDaGVja2JveDogcmVxdWlyZSgnLi9saWIvY2hlY2tib3gnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnLi4vaW5oZXJpdHMnKTtcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxudmFyIEJvZHkgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgaWYgKHNlbGVjdG9yT3IkRWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc2VsZWN0b3JPciRFbGVtZW50ID0gJ2JvZHknO1xuICB9XG5cbiAgaW5oZXJpdHModGhpcywgbmV3IEVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KSk7XG59O1xuXG5Cb2R5LnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gQm9keS5jbG9uZSh0aGlzLiRlbGVtZW50KTsgfSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIGhhbmRsZXIoKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gIH0sXG5cbiAgb25Eb3VibGVDbGljazogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuZGJsY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyKCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICB9XG59O1xuXG5Cb2R5LmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gIHJldHVybiBFbGVtZW50LmNsb25lKEJvZHksIHNlbGVjdG9yT3IkRWxlbWVudCk7XG59O1xuXG5Cb2R5LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCkge1xuICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChCb2R5LCBodG1sKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQm9keTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEJvdW5kcyA9IGZ1bmN0aW9uKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCkge1xuICB0aGlzLnRvcCA9IHRvcDtcbiAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgdGhpcy5ib3R0b20gPSBib3R0b207XG4gIHRoaXMucmlnaHQgPSByaWdodDtcbn07XG5cbkJvdW5kcy5wcm90b3R5cGUgPSB7XG4gIGdldFRvcDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9LFxuXG4gIGdldExlZnQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnQ7XG4gIH0sXG5cbiAgZ2V0Qm90dG9tOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5ib3R0b207XG4gIH0sXG5cbiAgZ2V0UmlnaHQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9LFxuXG4gIGFyZU92ZXJsYXBwaW5nOiBmdW5jdGlvbihib3VuZHMpIHtcbiAgICByZXR1cm4gdGhpcy50b3AgPD0gYm91bmRzLmJvdHRvbVxuICAgICAgICAmJiB0aGlzLmxlZnQgPD0gYm91bmRzLnJpZ2h0XG4gICAgICAgICYmIHRoaXMuYm90dG9tID49IGJvdW5kcy50b3BcbiAgICAgICAgJiYgdGhpcy5yaWdodCA+PSBib3VuZHMubGVmdDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb3VuZHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBCdXR0b24gPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICBpbmhlcml0cyh0aGlzLCBuZXcgRWxlbWVudChzZWxlY3Rvck9yJEVsZW1lbnQpKTtcblxuICBpZiAoY2xpY2tIYW5kbGVyKSB7XG4gICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gIH1cbn07XG5cbkJ1dHRvbi5wcm90b3R5cGUgPSB7XG4gIGNsb25lOiBmdW5jdGlvbihjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEJ1dHRvbi5jbG9uZSh0aGlzLiRlbGVtZW50LCBjbGlja0hhbmRsZXIpOyB9LFxuXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgaGFuZGxlcigpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgfSxcblxuICBvbkRvdWJsZUNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5kYmxjbGljayhmdW5jdGlvbigpIHtcbiAgICAgIGhhbmRsZXIoKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gIH1cbn07XG5cbkJ1dHRvbi5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gIHJldHVybiBFbGVtZW50LmNsb25lKEJ1dHRvbiwgc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpO1xufTtcblxuQnV0dG9uLmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gIHJldHVybiBFbGVtZW50LmZyb21IVE1MKEJ1dHRvbiwgaHRtbCwgY2xpY2tIYW5kbGVyKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQnV0dG9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG52YXIgQ2hlY2tib3ggPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICBpbmhlcml0cyh0aGlzLCBuZXcgRWxlbWVudChzZWxlY3Rvck9yJEVsZW1lbnQpKTtcblxuICBpZiAoY2xpY2tIYW5kbGVyKSB7XG4gICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gIH1cbn07XG5cbkNoZWNrYm94LnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gQ2hlY2tib3guY2xvbmUodGhpcy4kZWxlbWVudCwgY2xpY2tIYW5kbGVyKTsgfSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjaGVja2VkID0gdGhpcy5pc0NoZWNrZWQoKTtcblxuICAgICAgaGFuZGxlcihjaGVja2VkKTtcbiAgICB9LmJpbmQodGhpcykpXG4gIH0sXG5cbiAgY2hlY2s6IGZ1bmN0aW9uKGNoZWNrZWQpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xuICAgIH1cbiAgfSxcblxuICBpc0NoZWNrZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRlbGVtZW50LmlzKCc6Y2hlY2tlZCcpO1xuICB9XG59O1xuXG5DaGVja2JveC5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gIHJldHVybiBFbGVtZW50LmNsb25lKENoZWNrYm94LCBzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG59O1xuXG5DaGVja2JveC5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwsIGNsaWNrSGFuZGxlcikge1xuICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChDaGVja2JveCwgaHRtbCwgY2xpY2tIYW5kbGVyKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hlY2tib3g7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBEaXYgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgaW5oZXJpdHModGhpcywgbmV3IEVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KSk7XG59O1xuXG5EaXYucHJvdG90eXBlID0ge1xuICBjbG9uZTogZnVuY3Rpb24oKSB7IHJldHVybiBEaXYuY2xvbmUodGhpcy4kZWxlbWVudCk7IH1cbn07XG5cbkRpdi5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICByZXR1cm4gRWxlbWVudC5jbG9uZShEaXYsIHNlbGVjdG9yT3IkRWxlbWVudCk7XG59O1xuXG5EaXYuZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sKSB7XG4gIHJldHVybiBFbGVtZW50LmZyb21IVE1MKERpdiwgaHRtbCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpdjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEJvdW5kcyA9IHJlcXVpcmUoJy4vYm91bmRzJyk7XG5cbnZhciBFbGVtZW50ID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudChzZWxlY3Rvck9yJEVsZW1lbnQpO1xuXG4gIHRoaXMuJGVsZW1lbnQuZGF0YSgnZWxlbWVudCcsIHRoaXMpO1xufTtcblxuRWxlbWVudC5wcm90b3R5cGUgPSB7XG4gIGNsb25lOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2xvbmVkRWxlbWVudCA9IEVsZW1lbnQuY2xvbmUodGhpcy4kZWxlbWVudCk7XG5cbiAgICByZXR1cm4gY2xvbmVkRWxlbWVudDtcbiAgfSxcblxuICBzaG93OiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5zaG93KCk7IH0sXG4gIGhpZGU6IGZ1bmN0aW9uKCkgeyB0aGlzLiRlbGVtZW50LmhpZGUoKTsgfSxcbiAgZW5hYmxlOiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyB9LFxuICBkaXNhYmxlOiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpOyB9LFxuXG4gIGdldFdpZHRoOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQud2lkdGgoKTsgfSxcbiAgZ2V0SGVpZ2h0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaGVpZ2h0KCk7IH0sXG4gIHNldFdpZHRoOiBmdW5jdGlvbih3aWR0aCkgeyB0aGlzLiRlbGVtZW50LndpZHRoKHdpZHRoKTsgfSxcbiAgc2V0SGVpZ2h0OiBmdW5jdGlvbihoZWlnaHQpIHsgdGhpcy4kZWxlbWVudC5oZWlnaHQoaGVpZ2h0KTsgfSxcblxuICBnZXRCb3VuZHM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkb2Zmc2V0ID0gdGhpcy4kZWxlbWVudC5vZmZzZXQoKSxcbiAgICAgICAgdG9wID0gJG9mZnNldC50b3AsICAvLy9cbiAgICAgICAgbGVmdCA9ICRvZmZzZXQubGVmdCwgIC8vL1xuICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICByaWdodCA9IGxlZnQgKyB3aWR0aCxcbiAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfSxcblxuICBnZXRBdHRyaWJ1dGU6IGZ1bmN0aW9uKG5hbWUpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuYXR0cihuYW1lKTsgfSxcbiAgYWRkQXR0cmlidXRlOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkgeyB0aGlzLiRlbGVtZW50LmF0dHIobmFtZSwgdmFsdWUpOyB9LFxuICByZW1vdmVBdHRyaWJ1dGU6IGZ1bmN0aW9uKG5hbWUpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKG5hbWUpOyB9LFxuXG4gIHByZXBlbmRCZWZvcmU6IGZ1bmN0aW9uKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5iZWZvcmUoZWxlbWVudC4kZWxlbWVudCk7IH0sXG4gIGFwcGVuZEFmdGVyOiBmdW5jdGlvbihlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYWZ0ZXIoZWxlbWVudC4kZWxlbWVudCk7IH0sXG4gIHByZXBlbmQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5wcmVwZW5kKGVsZW1lbnQuJGVsZW1lbnQpOyB9LFxuICBhcHBlbmQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5hcHBlbmQoZWxlbWVudC4kZWxlbWVudCk7IH0sXG4gIHJlbW92ZTogZnVuY3Rpb24oKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlKCk7IH0sXG5cbiAgaGFzQ2xhc3M6IGZ1bmN0aW9uKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhjbGFzc05hbWUpOyB9LFxuICBhZGRDbGFzczogZnVuY3Rpb24oY2xhc3NOYW1lKSB7IHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoY2xhc3NOYW1lKTsgfSxcbiAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uKGNsYXNzTmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7IH0sXG4gIHJlbW92ZUNsYXNzZXM6IGZ1bmN0aW9uKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCk7IH0sXG5cbiAgaHRtbDogZnVuY3Rpb24oaHRtbCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lmh0bWwoaHRtbClcbiAgICB9IGVsc2Uge1xuICAgICAgaHRtbCA9IHRoaXMuJGVsZW1lbnQuaHRtbCgpO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gIH0sXG5cbiAgY3NzOiBmdW5jdGlvbihjc3MpIHtcbiAgICBpZiAodHlwZW9mIGNzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBwcm9wZXJ0eU5hbWUgPSBjc3M7XG5cbiAgICAgIGNzcyA9IHRoaXMuJGVsZW1lbnQuY3NzKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuY3NzKGNzcyk7XG4gICAgfVxuICB9LFxuXG4gIGZpbmRFbGVtZW50czogZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICB2YXIgZm91bmRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQuZmluZChzZWxlY3RvciksXG4gICAgICAgIGZvdW5kRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhmb3VuZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBmb3VuZEVsZW1lbnRzO1xuICB9LFxuXG4gIGNoaWxkRWxlbWVudHM6IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgdmFyIGNoaWxkRE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKHNlbGVjdG9yKSxcbiAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH0sXG5cbiAgb246IGZ1bmN0aW9uKGV2ZW50cywgaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKGV2ZW50cywgaGFuZGxlcik7IH0sXG5cbiAgb25Nb3VzZVVwOiBmdW5jdGlvbihoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNldXAnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH0sXG4gIG9uTW91c2VEb3duOiBmdW5jdGlvbihoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNlZG93bicsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpKTsgfSxcbiAgb25Nb3VzZU92ZXI6IGZ1bmN0aW9uKGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2VvdmVyJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9LFxuICBvbk1vdXNlT3V0OiBmdW5jdGlvbihoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNlb3V0JywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9LFxuICBvbk1vdXNlTW92ZTogZnVuY3Rpb24oaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZW1vdmUnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH1cbn07XG5cbkVsZW1lbnQuZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sKSB7XG4gIHZhciBDbGFzcyxcbiAgICAgIGFyZ3M7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICBDbGFzcyA9IEVsZW1lbnQ7XG4gICAgYXJncyA9IFtdO1xuICB9IGVsc2Uge1xuICAgIENsYXNzID0gYXJndW1lbnRzWzBdO1xuICAgIGh0bWwgPSBhcmd1bWVudHNbMV07XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gIH1cblxuICB2YXIgJGh0bWxFbGVtZW50ID0gJChodG1sKTtcblxuICByZXR1cm4gaW5zdGFuY2UoQ2xhc3MsICRodG1sRWxlbWVudCwgYXJncyk7XG59O1xuXG5FbGVtZW50LmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gIHZhciBDbGFzcyxcbiAgICAgIGFyZ3M7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICBDbGFzcyA9IEVsZW1lbnQ7XG4gICAgYXJncyA9IFtdO1xuICB9IGVsc2Uge1xuICAgIENsYXNzID0gYXJndW1lbnRzWzBdO1xuICAgIHNlbGVjdG9yT3IkRWxlbWVudCA9IGFyZ3VtZW50c1sxXTtcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgfVxuXG4gIHZhciAkY2xvbmVkRWxlbWVudCA9ICRlbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkuY2xvbmUoKTtcblxuICByZXR1cm4gaW5zdGFuY2UoQ2xhc3MsICRjbG9uZWRFbGVtZW50LCBhcmdzKTtcbn07XG5cbkVsZW1lbnQuTEVGVF9NT1VTRV9CVVRUT04gPSAxO1xuRWxlbWVudC5NSURETEVfTU9VU0VfQlVUVE9OID0gMjtcbkVsZW1lbnQuUklHSFRfTU9VU0VfQlVUVE9OID0gMztcblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBtb3VzZVRvcCA9IGV2ZW50LnBhZ2VZLCAgLy8vXG4gICAgICAgIG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAvLy9cbiAgICAgICAgbW91c2VCdXR0b24gPSBldmVudC53aGljaDsgLy8vXG5cbiAgICBoYW5kbGVyKG1vdXNlVG9wLCBtb3VzZUxlZnQsIG1vdXNlQnV0dG9uKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gJGVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gIHZhciAkZWxlbWVudDtcblxuICBpZiAoc2VsZWN0b3JPciRFbGVtZW50IGluc3RhbmNlb2YgalF1ZXJ5KSB7XG4gICAgJGVsZW1lbnQgPSBzZWxlY3Rvck9yJEVsZW1lbnQ7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yT3IkRWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAkZWxlbWVudCA9ICQoc2VsZWN0b3JPciRFbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFyZW50JEVsZW1lbnQgPSBzZWxlY3Rvck9yJEVsZW1lbnRbMF0sIC8vL1xuICAgICAgICBjaGlsZFNlbGVjdG9yID0gc2VsZWN0b3JPciRFbGVtZW50WzFdO1xuXG4gICAgJGVsZW1lbnQgPSBwYXJlbnQkRWxlbWVudC5maW5kKGNoaWxkU2VsZWN0b3IpO1xuICB9XG5cbiAgcmV0dXJuICRlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpbnN0YW5jZShDbGFzcywgJGVsZW1lbnQsIGFyZ3MpIHtcbiAgYXJncy51bnNoaWZ0KCRlbGVtZW50KTtcblxuICBhcmdzLnVuc2hpZnQobnVsbCk7IC8vL1xuXG4gIHZhciBpbnN0YW5jZSA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIGFyZ3MpKTsgIC8vL1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMpIHtcbiAgdmFyIGVsZW1lbnRzID0gW10sXG4gICAgICBkb21FbGVtZW50c0xlbmd0aCA9IGRvbUVsZW1lbnRzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvbUVsZW1lbnRzTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRzW2ldLFxuICAgICAgICAkZWxlbWVudCA9ICQoZG9tRWxlbWVudCksXG4gICAgICAgIGVsZW1lbnQgPSAkZWxlbWVudC5kYXRhKCdlbGVtZW50Jyk7XG5cbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudHM7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBJbnB1dCA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICBpbmhlcml0cyh0aGlzLCBuZXcgRWxlbWVudChzZWxlY3Rvck9yJEVsZW1lbnQpKTtcblxuICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gIH1cbn07XG5cbklucHV0LnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gSW5wdXQuY2xvbmUodGhpcy4kZWxlbWVudCk7IH0sXG5cbiAgb25DaGFuZ2U6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgICAgaGFuZGxlcih2YWx1ZSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICBnZXRWYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy4kZWxlbWVudC52YWwoKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcblxuICBzZXRWYWx1ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB0aGlzLiRlbGVtZW50LnZhbCh2YWx1ZSk7XG4gIH0sXG5cbiAgc2VsZWN0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRlbGVtZW50LnNlbGVjdCgpO1xuICB9XG59O1xuXG5JbnB1dC5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICByZXR1cm4gRWxlbWVudC5jbG9uZShJbnB1dCwgc2VsZWN0b3JPciRFbGVtZW50KTtcbn07XG5cbklucHV0LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCkge1xuICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChJbnB1dCwgaHRtbCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG52YXIgTGluayA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkpO1xuXG4gIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgfVxufTtcblxuTGluay5wcm90b3R5cGUgPSB7XG4gIGNsb25lOiBmdW5jdGlvbihjbGlja0hhbmRsZXIpIHsgcmV0dXJuIExpbmsuY2xvbmUodGhpcy4kZWxlbWVudCwgY2xpY2tIYW5kbGVyKTsgfSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocmVmID0gdGhpcy4kZWxlbWVudC5hdHRyKCdocmVmJyk7XG5cbiAgICAgIGhhbmRsZXIoaHJlZik7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LmJpbmQodGhpcykpXG4gIH1cbn07XG5cbkxpbmsuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICByZXR1cm4gRWxlbWVudC5jbG9uZShMaW5rLCBzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG59O1xuXG5MaW5rLmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gIHJldHVybiBFbGVtZW50LmZyb21IVE1MKExpbmssIGh0bWwsIGNsaWNrSGFuZGxlcik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbms7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBTZWxlY3QgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgaW5oZXJpdHModGhpcywgbmV3IEVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KSk7XG5cbiAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICB9XG59O1xuXG5TZWxlY3QucHJvdG90eXBlID0ge1xuICBjbG9uZTogZnVuY3Rpb24oY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gU2VsZWN0LmNsb25lKHRoaXMuJGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9LFxuXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpO1xuXG4gICAgICBoYW5kbGVyKHNlbGVjdGVkT3B0aW9uVmFsdWUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyICRzZWxlY3RlZE9wdGlvbiA9IHRoaXMuJGVsZW1lbnQuZmluZCgnOnNlbGVjdGVkJyksXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSAkc2VsZWN0ZWRPcHRpb24udmFsKCk7XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25WYWx1ZTtcbiAgfSxcblxuICBzZXRTZWxlY3RlZE9wdGlvbkJ5VmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy4kZWxlbWVudC52YWwodmFsdWUpO1xuICB9XG59O1xuXG5TZWxlY3QuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoU2VsZWN0LCBzZWxlY3Rvck9yJEVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xufTtcblxuU2VsZWN0LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChTZWxlY3QsIGh0bWwsIGNoYW5nZUhhbmRsZXIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWxlY3Q7XG4iXX0=
