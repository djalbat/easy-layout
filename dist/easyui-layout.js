(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.easyuiLayout = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {
  SizeableElement: require('./lib/sizeableElement'),
  VerticalSplitter: require('./lib/verticalSplitter'),
  HorizontalSplitter: require('./lib/horizontalSplitter')
};

},{"./lib/horizontalSplitter":4,"./lib/sizeableElement":5,"./lib/verticalSplitter":7}],2:[function(require,module,exports){
'use strict';

var inherits = function(target, source) {
  var targetPrototype = Object.getPrototypeOf(target);

  for (var prop in source) {
    if (source.hasOwnProperty(prop)) {
      target[prop] = source[prop];
    } else {
      if (!targetPrototype[prop]) {
        targetPrototype[prop] = source[prop];
      }
    }
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
  var element = new Element(selectorOr$Element),
      setWidth = element.setWidth.bind(this),
      setHeight = element.setHeight.bind(this);

  inherits(this, element);

  this.super = {};
  this.super.setWidth = setWidth;
  this.super.setHeight = setHeight;

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
  var element = new Element(selectorOr$Element),
      onMouseDown = element.onMouseDown.bind(this),
      onMouseOver = element.onMouseOver.bind(this),
      onMouseOut = element.onMouseOut.bind(this);

  inherits(this, element);

  this.super = {};
  this.super.onMouseDown = onMouseDown;
  this.super.onMouseOver = onMouseOver;
  this.super.onMouseOut = onMouseOut;

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

  onMouseDown: function(handler) { this.super.onMouseDown(mouseEventHandler(handler).bind(this)); },
  onMouseOver: function(handler) { this.super.onMouseOver(mouseEventHandler(handler).bind(this)); },
  onMouseOut: function(handler) { this.super.onMouseOut(mouseEventHandler(handler).bind(this)); },
  onMouseUp: function(handler) { body.onMouseUp(mouseEventHandler(handler).bind(this)); },  ///
  onMouseMove: function(handler) { body.onMouseMove(mouseEventHandler(handler).bind(this)); } ///
};

function mouseEventHandler(handler) {
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
  Link: require('./lib/link'),
  Input: require('./lib/input'),
  Select: require('./lib/select'),
  Button: require('./lib/button'),
  Checkbox: require('./lib/checkbox')
};

},{"./lib/body":10,"./lib/bounds":11,"./lib/button":12,"./lib/checkbox":13,"./lib/element":14,"./lib/input":15,"./lib/link":16,"./lib/select":17}],9:[function(require,module,exports){
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
  return Element.clone(selectorOr$Element, Body);
};

Body.fromHTML = function(html) {
  var $element = $(html),
      button = new Body($element);

  return button;
};

module.exports = Body;

},{"../inherits":9,"./element":14}],11:[function(require,module,exports){
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
  return Element.clone(selectorOr$Element, Button, clickHandler);
};

Button.fromHTML = function(html, clickHandler) {
  var $element = $(html),
      button = new Button($element, clickHandler);

  return button;
};

module.exports = Button;

},{"../inherits":9,"./element":14}],13:[function(require,module,exports){
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
  return Element.clone(selectorOr$Element, Checkbox, clickHandler);
};

Checkbox.fromHTML = function(html, clickHandler) {
  var $element = $(html),
      checkbox = new Checkbox($element, clickHandler);

  return checkbox;
};

module.exports = Checkbox;

},{"../inherits":9,"./element":14}],14:[function(require,module,exports){
'use strict';

var Bounds = require('./bounds');

var Element = function(selectorOr$Element) {
  var $element = typeof selectorOr$Element === 'string' ? ///
                   $(selectorOr$Element) :  ///
                     selectorOr$Element;  ///

  this.$element = $element;
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

  on: function(events, handler) { this.$element.on(events, handler); },

  onMouseUp: function(handler) { this.$element.on('mouseup', mouseEventHandler(handler)); },
  onMouseDown: function(handler) { this.$element.on('mousedown', mouseEventHandler(handler)); },
  onMouseOver: function(handler) { this.$element.on('mouseover', mouseEventHandler(handler)); },
  onMouseOut: function(handler) { this.$element.on('mouseout', mouseEventHandler(handler)); },
  onMouseMove: function(handler) { this.$element.on('mousemove', mouseEventHandler(handler)); }
};

function mouseEventHandler(handler) {
  return function(event) {
    var mouseTop = event.pageY,  ///
        mouseLeft = event.pageX, ///
        mouseButton = event.which; ///

    handler(mouseTop, mouseLeft, mouseButton);
  };
}

Element.fromHTML = function(html) {
  var $element = $(html),
      element = new Element($element);

  return element;
};

Element.clone = function(selectorOr$Element) {
  var $element = typeof selectorOr$Element === 'string' ? ///
                   $(selectorOr$Element) :  ///
                     selectorOr$Element;  ///

  var cloned$Element = $element.clone(),
      Class,
      args;

  if (arguments.length === 1) {
    Class = Element;
    args = [];
  } else {
    Class = arguments[1]; ///
    args = Array.prototype.splice.call(arguments, 2);  ///
  }

  args.unshift(cloned$Element);

  args.unshift(null); ///

  var clonedInstance = new (Function.prototype.bind.apply(Class, args));  ///

  return clonedInstance;
};

Element.child$Element = function(parentSelectorOr$Element, childSelector) {
  var parent$Element = typeof parentSelectorOr$Element === 'string' ? ///
                         $(parentSelectorOr$Element) :  ///
                           parentSelectorOr$Element;  ///

  var child$Element = parent$Element.find(childSelector);

  return child$Element;
};

Element.LEFT_MOUSE_BUTTON = 1;
Element.MIDDLE_MOUSE_BUTTON = 2;
Element.RIGHT_MOUSE_BUTTON = 3;

module.exports = Element;

},{"./bounds":11}],15:[function(require,module,exports){
'use strict';

var inherits = require('../inherits');

var Element = require('./element');

var Input = function(selectorOr$Element) {
  inherits(this, new Element(selectorOr$Element));
};

Input.prototype = {
  clone: function() { return Input.clone(this.$element); },

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
  return Element.clone(selectorOr$Element, Input);
};

Input.fromHTML = function(html) {
  var $element = $(html),
      input = new Input($element);

  return input;
};

module.exports = Input;

},{"../inherits":9,"./element":14}],16:[function(require,module,exports){
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
  return Element.clone(selectorOr$Element, Link, clickHandler);
};

Link.fromHTML = function(html, clickHandler) {
  var $element = $(html),
      link = new Link($element, clickHandler);

  return  link;
};

module.exports = Link;

},{"../inherits":9,"./element":14}],17:[function(require,module,exports){
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
  return Element.clone(selectorOr$Element, Select, changeHandler);
};

Select.fromHTML = function(html, changeHandler) {
  var $element = $(html),
      select = new Select($element, changeHandler);

  return  select;
};

module.exports = Select;

},{"../inherits":9,"./element":14}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImluaGVyaXRzLmpzIiwibGliL2N1cnNvci5qcyIsImxpYi9ob3Jpem9udGFsU3BsaXR0ZXIuanMiLCJsaWIvc2l6ZWFibGVFbGVtZW50LmpzIiwibGliL3NwbGl0dGVyLmpzIiwibGliL3ZlcnRpY2FsU3BsaXR0ZXIuanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3l1aS9saWIvYm9keS5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvbGliL2JvdW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvbGliL2J1dHRvbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvbGliL2NoZWNrYm94LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3l1aS9saWIvZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvbGliL2lucHV0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3l1aS9saWIvbGluay5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvbGliL3NlbGVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFNpemVhYmxlRWxlbWVudDogcmVxdWlyZSgnLi9saWIvc2l6ZWFibGVFbGVtZW50JyksXG4gIFZlcnRpY2FsU3BsaXR0ZXI6IHJlcXVpcmUoJy4vbGliL3ZlcnRpY2FsU3BsaXR0ZXInKSxcbiAgSG9yaXpvbnRhbFNwbGl0dGVyOiByZXF1aXJlKCcuL2xpYi9ob3Jpem9udGFsU3BsaXR0ZXInKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24odGFyZ2V0LCBzb3VyY2UpIHtcbiAgdmFyIHRhcmdldFByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpO1xuXG4gIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgdGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRhcmdldFByb3RvdHlwZVtwcm9wXSkge1xuICAgICAgICB0YXJnZXRQcm90b3R5cGVbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGluaGVyaXRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgQm9keSA9IGVhc3l1aS5Cb2R5O1xuXG52YXIgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgcHJldmlvdXNDdXJzb3I7ICAvLy9cblxudmFyIGN1cnNvciA9IHtcbiAgY29sdW1uUmVzaXplOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3VycmVudEN1cnNvciA9IHRoaXMuZ2V0Q3Vyc29yKCk7XG5cbiAgICBpZiAoY3VycmVudEN1cnNvciAhPT0gJ2NvbC1yZXNpemUnKSB7XG4gICAgICBwcmV2aW91c0N1cnNvciA9IGN1cnJlbnRDdXJzb3I7XG5cbiAgICAgIHRoaXMuc2V0Q3Vyc29yKCdjb2wtcmVzaXplJyk7XG4gICAgfVxuICB9LFxuXG4gIHJvd1Jlc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGN1cnJlbnRDdXJzb3IgPSB0aGlzLmdldEN1cnNvcigpO1xuXG4gICAgaWYgKGN1cnJlbnRDdXJzb3IgIT09ICdyb3ctcmVzaXplJykge1xuICAgICAgcHJldmlvdXNDdXJzb3IgPSBjdXJyZW50Q3Vyc29yO1xuXG4gICAgICB0aGlzLnNldEN1cnNvcigncm93LXJlc2l6ZScpO1xuICAgIH1cbiAgfSxcblxuICByZXNldDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRDdXJzb3IocHJldmlvdXNDdXJzb3IpOyAvLy9cbiAgfSxcblxuICBnZXRDdXJzb3I6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjdXJyZW50Q3Vyc29yID0gYm9keS5jc3MoJ2N1cnNvcicpOyAgLy8vXG5cbiAgICByZXR1cm4gY3VycmVudEN1cnNvciB8fCAnYXV0byc7IC8vL1xuICB9LFxuXG4gIHNldEN1cnNvcjogZnVuY3Rpb24oY3Vyc29yKSB7XG4gICAgdmFyIGNzcyA9IHtcbiAgICAgIGN1cnNvcjogY3Vyc29yXG4gICAgfTtcblxuICAgIGJvZHkuY3NzKGNzcyk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3Vyc29yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgY3Vyc29yID0gcmVxdWlyZSgnLi9jdXJzb3InKSxcbiAgICBTcGxpdHRlciA9IHJlcXVpcmUoJy4vc3BsaXR0ZXInKTtcblxudmFyIEhvcml6b250YWxTcGxpdHRlciA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgc2l0dWF0ZWQsIHNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIpIHtcbiAgaW5oZXJpdHModGhpcywgbmV3IFNwbGl0dGVyKHNlbGVjdG9yT3IkRWxlbWVudCkpO1xuXG4gIHRoaXMuc2l0dWF0ZWQgPSBzaXR1YXRlZDtcbiAgdGhpcy5zaXplYWJsZUVsZW1lbnQgPSBzaXplYWJsZUVsZW1lbnQ7XG4gIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcblxuICB0aGlzLm1vdXNlVG9wID0gbnVsbDtcblxuICB0aGlzLnNpemVhYmxlRWxlbWVudEhlaWdodCA9IG51bGw7XG5cbiAgdGhpcy5vbk1vdXNlRG93bihmdW5jdGlvbihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuXG4gICAgdGhpcy5tb3VzZVRvcCA9IG1vdXNlVG9wO1xuXG4gICAgdGhpcy5zaXplYWJsZUVsZW1lbnRIZWlnaHQgPSB0aGlzLnNpemVhYmxlRWxlbWVudC5nZXRIZWlnaHQoKTtcblxuICAgIHZhciBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgdGhpcy5zdGFydERyYWdnaW5nKCk7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xuXG4gIHRoaXMub25Nb3VzZVVwKGZ1bmN0aW9uKCkge1xuICAgIGN1cnNvci5yZXNldCgpO1xuXG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xuXG4gIHRoaXMub25Nb3VzZU92ZXIoZnVuY3Rpb24oKSB7XG4gICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuICB9KTtcblxuICB0aGlzLm9uTW91c2VPdXQoZnVuY3Rpb24oKSB7XG4gICAgY3Vyc29yLnJlc2V0KCk7XG4gIH0pO1xuXG4gIHRoaXMub25Nb3VzZU1vdmUoZnVuY3Rpb24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIHZhciBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICB2YXIgcmVsYXRpdmVNb3VzZVRvcCA9IG1vdXNlVG9wIC0gdGhpcy5tb3VzZVRvcCxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLnNpemVhYmxlRWxlbWVudEhlaWdodCAtIHRoaXMuc2l0dWF0ZWQgKiByZWxhdGl2ZU1vdXNlVG9wO1xuXG4gICAgICB0aGlzLnNpemVhYmxlRWxlbWVudC5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgdmFyIHNpemVhYmxlRWxlbWVudEhlaWdodCA9IHRoaXMuc2l6ZWFibGVFbGVtZW50LmdldEhlaWdodCgpO1xuXG4gICAgICBpZiAodGhpcy5kcmFnSGFuZGxlcikge1xuICAgICAgICB0aGlzLmRyYWdIYW5kbGVyKHNpemVhYmxlRWxlbWVudEhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufTtcblxuSG9yaXpvbnRhbFNwbGl0dGVyLnNpdHVhdGVkID0ge1xuICBBQk9WRTogKzEsXG4gIEJFTE9XOiAtMVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIb3Jpem9udGFsU3BsaXR0ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBFbGVtZW50ID0gZWFzeXVpLkVsZW1lbnQ7XG5cbnZhciBTaXplYWJsZUVsZW1lbnQgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIG1pbmltdW1XaWR0aCwgbWluaW11bUhlaWdodCwgbWF4aW11bVdpZHRoLCBtYXhpbXVtSGVpZ2h0KSB7XG4gIHZhciBlbGVtZW50ID0gbmV3IEVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KSxcbiAgICAgIHNldFdpZHRoID0gZWxlbWVudC5zZXRXaWR0aC5iaW5kKHRoaXMpLFxuICAgICAgc2V0SGVpZ2h0ID0gZWxlbWVudC5zZXRIZWlnaHQuYmluZCh0aGlzKTtcblxuICBpbmhlcml0cyh0aGlzLCBlbGVtZW50KTtcblxuICB0aGlzLnN1cGVyID0ge307XG4gIHRoaXMuc3VwZXIuc2V0V2lkdGggPSBzZXRXaWR0aDtcbiAgdGhpcy5zdXBlci5zZXRIZWlnaHQgPSBzZXRIZWlnaHQ7XG5cbiAgdGhpcy5taW5pbXVtV2lkdGggPSBtaW5pbXVtV2lkdGg7XG4gIHRoaXMubWluaW11bUhlaWdodCA9IG1pbmltdW1IZWlnaHQ7XG4gIHRoaXMubWF4aW11bVdpZHRoID0gbWF4aW11bVdpZHRoO1xuICB0aGlzLm1heGltdW1IZWlnaHQgPSBtYXhpbXVtSGVpZ2h0O1xufTtcblxuU2l6ZWFibGVFbGVtZW50LnByb3RvdHlwZSA9IHtcbiAgc2V0V2lkdGg6IGZ1bmN0aW9uKHdpZHRoKSB7XG4gICAgaWYgKHdpZHRoID09PSAnYXV0bycpIHtcbiAgICAgIHRoaXMuc3VwZXIuc2V0V2lkdGgod2lkdGgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWluaW11bVdpZHRoKSB7XG4gICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCB0aGlzLm1pbmltdW1XaWR0aCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1heGltdW1XaWR0aCkge1xuICAgICAgd2lkdGggPSBNYXRoLm1pbih3aWR0aCwgdGhpcy5tYXhpbXVtV2lkdGgpO1xuICAgIH1cblxuICAgIHRoaXMuc3VwZXIuc2V0V2lkdGgod2lkdGgpO1xuICB9LFxuXG4gIHNldEhlaWdodDogZnVuY3Rpb24oaGVpZ2h0KSB7XG4gICAgaWYgKGhlaWdodCA9PT0gJ2F1dG8nKSB7XG4gICAgICB0aGlzLnN1cGVyLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWluaW11bUhlaWdodCkge1xuICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoaGVpZ2h0LCB0aGlzLm1pbmltdW1IZWlnaHQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXhpbXVtSGVpZ2h0KSB7XG4gICAgICBoZWlnaHQgPSBNYXRoLm1pbihoZWlnaHQsIHRoaXMubWF4aW11bUhlaWdodCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdXBlci5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaXplYWJsZUVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBFbGVtZW50ID0gZWFzeXVpLkVsZW1lbnQsXG4gICAgQm9keSA9IGVhc3l1aS5Cb2R5O1xuXG52YXIgYm9keSA9IG5ldyBCb2R5KCk7XG5cbnZhciBTcGxpdHRlciA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICB2YXIgZWxlbWVudCA9IG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCksXG4gICAgICBvbk1vdXNlRG93biA9IGVsZW1lbnQub25Nb3VzZURvd24uYmluZCh0aGlzKSxcbiAgICAgIG9uTW91c2VPdmVyID0gZWxlbWVudC5vbk1vdXNlT3Zlci5iaW5kKHRoaXMpLFxuICAgICAgb25Nb3VzZU91dCA9IGVsZW1lbnQub25Nb3VzZU91dC5iaW5kKHRoaXMpO1xuXG4gIGluaGVyaXRzKHRoaXMsIGVsZW1lbnQpO1xuXG4gIHRoaXMuc3VwZXIgPSB7fTtcbiAgdGhpcy5zdXBlci5vbk1vdXNlRG93biA9IG9uTW91c2VEb3duO1xuICB0aGlzLnN1cGVyLm9uTW91c2VPdmVyID0gb25Nb3VzZU92ZXI7XG4gIHRoaXMuc3VwZXIub25Nb3VzZU91dCA9IG9uTW91c2VPdXQ7XG5cbiAgdGhpcy5kcmFnSGFuZGxlciA9IG51bGw7XG5cbiAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXG4gIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbn07XG5cblNwbGl0dGVyLnByb3RvdHlwZSA9IHtcbiAgZW5hYmxlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gIH0sXG5cbiAgZGlzYWJsZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gIH0sXG5cbiAgb25EcmFnZ2luZzogZnVuY3Rpb24oZHJhZ0hhbmRsZXIpIHtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG4gIH0sXG5cbiAgc3RhcnREcmFnZ2luZzogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gIH0sXG5cbiAgc3RvcERyYWdnaW5nOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gIH0sXG5cbiAgaXNEcmFnZ2luZzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dpbmc7XG4gIH0sXG5cbiAgb25Nb3VzZURvd246IGZ1bmN0aW9uKGhhbmRsZXIpIHsgdGhpcy5zdXBlci5vbk1vdXNlRG93bihtb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKS5iaW5kKHRoaXMpKTsgfSxcbiAgb25Nb3VzZU92ZXI6IGZ1bmN0aW9uKGhhbmRsZXIpIHsgdGhpcy5zdXBlci5vbk1vdXNlT3Zlcihtb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKS5iaW5kKHRoaXMpKTsgfSxcbiAgb25Nb3VzZU91dDogZnVuY3Rpb24oaGFuZGxlcikgeyB0aGlzLnN1cGVyLm9uTW91c2VPdXQobW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikuYmluZCh0aGlzKSk7IH0sXG4gIG9uTW91c2VVcDogZnVuY3Rpb24oaGFuZGxlcikgeyBib2R5Lm9uTW91c2VVcChtb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKS5iaW5kKHRoaXMpKTsgfSwgIC8vL1xuICBvbk1vdXNlTW92ZTogZnVuY3Rpb24oaGFuZGxlcikgeyBib2R5Lm9uTW91c2VNb3ZlKG1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpOyB9IC8vL1xufTtcblxuZnVuY3Rpb24gbW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikge1xuICByZXR1cm4gZnVuY3Rpb24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgaGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3BsaXR0ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBjdXJzb3IgPSByZXF1aXJlKCcuL2N1cnNvcicpLFxuICAgIFNwbGl0dGVyID0gcmVxdWlyZSgnLi9zcGxpdHRlcicpO1xuXG52YXIgVmVydGljYWxTcGxpdHRlciA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgc2l0dWF0ZWQsIHNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIpIHtcbiAgaW5oZXJpdHModGhpcywgbmV3IFNwbGl0dGVyKHNlbGVjdG9yT3IkRWxlbWVudCkpO1xuXG4gIHRoaXMuc2l0dWF0ZWQgPSBzaXR1YXRlZDtcbiAgdGhpcy5zaXplYWJsZUVsZW1lbnQgPSBzaXplYWJsZUVsZW1lbnQ7XG4gIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcblxuICB0aGlzLm1vdXNlTGVmdCA9IG51bGw7XG5cbiAgdGhpcy5zaXplYWJsZUVsZW1lbnRXaWR0aCA9IG51bGw7XG5cbiAgdGhpcy5vbk1vdXNlRG93bihmdW5jdGlvbihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuXG4gICAgdGhpcy5tb3VzZUxlZnQgPSBtb3VzZUxlZnQ7XG5cbiAgICB0aGlzLnNpemVhYmxlRWxlbWVudFdpZHRoID0gdGhpcy5zaXplYWJsZUVsZW1lbnQuZ2V0V2lkdGgoKTtcblxuICAgIHZhciBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgdGhpcy5zdGFydERyYWdnaW5nKCk7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xuXG4gIHRoaXMub25Nb3VzZVVwKGZ1bmN0aW9uKCkge1xuICAgIGN1cnNvci5yZXNldCgpO1xuXG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xuXG4gIHRoaXMub25Nb3VzZU92ZXIoZnVuY3Rpb24oKSB7XG4gICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuICB9KTtcblxuICB0aGlzLm9uTW91c2VPdXQoZnVuY3Rpb24oKSB7XG4gICAgY3Vyc29yLnJlc2V0KCk7XG4gIH0pO1xuXG4gIHRoaXMub25Nb3VzZU1vdmUoZnVuY3Rpb24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIHZhciBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICB2YXIgcmVsYXRpdmVNb3VzZUxlZnQgPSBtb3VzZUxlZnQgLSB0aGlzLm1vdXNlTGVmdCxcbiAgICAgICAgICB3aWR0aCA9IHRoaXMuc2l6ZWFibGVFbGVtZW50V2lkdGggLSB0aGlzLnNpdHVhdGVkICogcmVsYXRpdmVNb3VzZUxlZnQ7XG5cbiAgICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50LnNldFdpZHRoKHdpZHRoKTtcblxuICAgICAgdmFyIHNpemVhYmxlRWxlbWVudFdpZHRoID0gdGhpcy5zaXplYWJsZUVsZW1lbnQuZ2V0V2lkdGgoKTtcblxuICAgICAgaWYgKHRoaXMuZHJhZ0hhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5kcmFnSGFuZGxlcihzaXplYWJsZUVsZW1lbnRXaWR0aCk7XG4gICAgICB9XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufTtcblxuVmVydGljYWxTcGxpdHRlci5zaXR1YXRlZCA9IHtcbiAgVE9fVEhFX0xFRlRfT0Y6ICsxLFxuICBUT19USEVfUklHSFRfT0Y6IC0xXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2FsU3BsaXR0ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50JyksXG4gIEJvdW5kczogcmVxdWlyZSgnLi9saWIvYm91bmRzJyksXG4gIEJvZHk6IHJlcXVpcmUoJy4vbGliL2JvZHknKSxcbiAgTGluazogcmVxdWlyZSgnLi9saWIvbGluaycpLFxuICBJbnB1dDogcmVxdWlyZSgnLi9saWIvaW5wdXQnKSxcbiAgU2VsZWN0OiByZXF1aXJlKCcuL2xpYi9zZWxlY3QnKSxcbiAgQnV0dG9uOiByZXF1aXJlKCcuL2xpYi9idXR0b24nKSxcbiAgQ2hlY2tib3g6IHJlcXVpcmUoJy4vbGliL2NoZWNrYm94Jylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBCb2R5ID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gIGlmIChzZWxlY3Rvck9yJEVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHNlbGVjdG9yT3IkRWxlbWVudCA9ICdib2R5JztcbiAgfVxuXG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkpO1xufTtcblxuQm9keS5wcm90b3R5cGUgPSB7XG4gIGNsb25lOiBmdW5jdGlvbigpIHsgcmV0dXJuIEJvZHkuY2xvbmUodGhpcy4kZWxlbWVudCk7IH0sXG5cbiAgb25DbGljazogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyKCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICB9LFxuXG4gIG9uRG91YmxlQ2xpY2s6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmRibGNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgaGFuZGxlcigpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgfVxufTtcblxuQm9keS5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICByZXR1cm4gRWxlbWVudC5jbG9uZShzZWxlY3Rvck9yJEVsZW1lbnQsIEJvZHkpO1xufTtcblxuQm9keS5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgdmFyICRlbGVtZW50ID0gJChodG1sKSxcbiAgICAgIGJ1dHRvbiA9IG5ldyBCb2R5KCRlbGVtZW50KTtcblxuICByZXR1cm4gYnV0dG9uO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2R5O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQm91bmRzID0gZnVuY3Rpb24odG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KSB7XG4gIHRoaXMudG9wID0gdG9wO1xuICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgdGhpcy5yaWdodCA9IHJpZ2h0O1xufTtcblxuQm91bmRzLnByb3RvdHlwZSA9IHtcbiAgZ2V0VG9wOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50b3A7XG4gIH0sXG5cbiAgZ2V0TGVmdDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfSxcblxuICBnZXRCb3R0b206IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfSxcblxuICBnZXRSaWdodDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHQ7XG4gIH0sXG5cbiAgYXJlT3ZlcmxhcHBpbmc6IGZ1bmN0aW9uKGJvdW5kcykge1xuICAgIHJldHVybiB0aGlzLnRvcCA8PSBib3VuZHMuYm90dG9tXG4gICAgICAgICYmIHRoaXMubGVmdCA8PSBib3VuZHMucmlnaHRcbiAgICAgICAgJiYgdGhpcy5ib3R0b20gPj0gYm91bmRzLnRvcFxuICAgICAgICAmJiB0aGlzLnJpZ2h0ID49IGJvdW5kcy5sZWZ0O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvdW5kcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnLi4vaW5oZXJpdHMnKTtcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxudmFyIEJ1dHRvbiA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkpO1xuXG4gIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgfVxufTtcblxuQnV0dG9uLnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gQnV0dG9uLmNsb25lKHRoaXMuJGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH0sXG5cbiAgb25DbGljazogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyKCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICB9LFxuXG4gIG9uRG91YmxlQ2xpY2s6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmRibGNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgaGFuZGxlcigpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgfVxufTtcblxuQnV0dG9uLmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoc2VsZWN0b3JPciRFbGVtZW50LCBCdXR0b24sIGNsaWNrSGFuZGxlcik7XG59O1xuXG5CdXR0b24uZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sLCBjbGlja0hhbmRsZXIpIHtcbiAgdmFyICRlbGVtZW50ID0gJChodG1sKSxcbiAgICAgIGJ1dHRvbiA9IG5ldyBCdXR0b24oJGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG5cbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQnV0dG9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG52YXIgQ2hlY2tib3ggPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICBpbmhlcml0cyh0aGlzLCBuZXcgRWxlbWVudChzZWxlY3Rvck9yJEVsZW1lbnQpKTtcblxuICBpZiAoY2xpY2tIYW5kbGVyKSB7XG4gICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gIH1cbn07XG5cbkNoZWNrYm94LnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gQ2hlY2tib3guY2xvbmUodGhpcy4kZWxlbWVudCwgY2xpY2tIYW5kbGVyKTsgfSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjaGVja2VkID0gdGhpcy5pc0NoZWNrZWQoKTtcblxuICAgICAgaGFuZGxlcihjaGVja2VkKTtcbiAgICB9LmJpbmQodGhpcykpXG4gIH0sXG5cbiAgY2hlY2s6IGZ1bmN0aW9uKGNoZWNrZWQpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xuICAgIH1cbiAgfSxcblxuICBpc0NoZWNrZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRlbGVtZW50LmlzKCc6Y2hlY2tlZCcpO1xuICB9XG59O1xuXG5DaGVja2JveC5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gIHJldHVybiBFbGVtZW50LmNsb25lKHNlbGVjdG9yT3IkRWxlbWVudCwgQ2hlY2tib3gsIGNsaWNrSGFuZGxlcik7XG59O1xuXG5DaGVja2JveC5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwsIGNsaWNrSGFuZGxlcikge1xuICB2YXIgJGVsZW1lbnQgPSAkKGh0bWwpLFxuICAgICAgY2hlY2tib3ggPSBuZXcgQ2hlY2tib3goJGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG5cbiAgcmV0dXJuIGNoZWNrYm94O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGVja2JveDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEJvdW5kcyA9IHJlcXVpcmUoJy4vYm91bmRzJyk7XG5cbnZhciBFbGVtZW50ID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gIHZhciAkZWxlbWVudCA9IHR5cGVvZiBzZWxlY3Rvck9yJEVsZW1lbnQgPT09ICdzdHJpbmcnID8gLy8vXG4gICAgICAgICAgICAgICAgICAgJChzZWxlY3Rvck9yJEVsZW1lbnQpIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JPciRFbGVtZW50OyAgLy8vXG5cbiAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xufTtcblxuRWxlbWVudC5wcm90b3R5cGUgPSB7XG4gIGNsb25lOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2xvbmVkRWxlbWVudCA9IEVsZW1lbnQuY2xvbmUodGhpcy4kZWxlbWVudCk7XG5cbiAgICByZXR1cm4gY2xvbmVkRWxlbWVudDtcbiAgfSxcblxuICBzaG93OiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5zaG93KCk7IH0sXG4gIGhpZGU6IGZ1bmN0aW9uKCkgeyB0aGlzLiRlbGVtZW50LmhpZGUoKTsgfSxcbiAgZW5hYmxlOiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyB9LFxuICBkaXNhYmxlOiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpOyB9LFxuXG4gIGdldFdpZHRoOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQud2lkdGgoKTsgfSxcbiAgZ2V0SGVpZ2h0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaGVpZ2h0KCk7IH0sXG4gIHNldFdpZHRoOiBmdW5jdGlvbih3aWR0aCkgeyB0aGlzLiRlbGVtZW50LndpZHRoKHdpZHRoKTsgfSxcbiAgc2V0SGVpZ2h0OiBmdW5jdGlvbihoZWlnaHQpIHsgdGhpcy4kZWxlbWVudC5oZWlnaHQoaGVpZ2h0KTsgfSxcblxuICBnZXRCb3VuZHM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkb2Zmc2V0ID0gdGhpcy4kZWxlbWVudC5vZmZzZXQoKSxcbiAgICAgICAgdG9wID0gJG9mZnNldC50b3AsICAvLy9cbiAgICAgICAgbGVmdCA9ICRvZmZzZXQubGVmdCwgIC8vL1xuICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICByaWdodCA9IGxlZnQgKyB3aWR0aCxcbiAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfSxcblxuICBhZGRBdHRyaWJ1dGU6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7IHRoaXMuJGVsZW1lbnQuYXR0cihuYW1lLCB2YWx1ZSk7IH0sXG4gIHJlbW92ZUF0dHJpYnV0ZTogZnVuY3Rpb24obmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIobmFtZSk7IH0sXG5cbiAgcHJlcGVuZEJlZm9yZTogZnVuY3Rpb24oZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LmJlZm9yZShlbGVtZW50LiRlbGVtZW50KTsgfSxcbiAgYXBwZW5kQWZ0ZXI6IGZ1bmN0aW9uKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5hZnRlcihlbGVtZW50LiRlbGVtZW50KTsgfSxcbiAgcHJlcGVuZDogZnVuY3Rpb24oZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LnByZXBlbmQoZWxlbWVudC4kZWxlbWVudCk7IH0sXG4gIGFwcGVuZDogZnVuY3Rpb24oZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LmFwcGVuZChlbGVtZW50LiRlbGVtZW50KTsgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmUoKTsgfSxcblxuICBoYXNDbGFzczogZnVuY3Rpb24oY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZSk7IH0sXG4gIGFkZENsYXNzOiBmdW5jdGlvbihjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5hZGRDbGFzcyhjbGFzc05hbWUpOyB9LFxuICByZW1vdmVDbGFzczogZnVuY3Rpb24oY2xhc3NOYW1lKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTsgfSxcbiAgcmVtb3ZlQ2xhc3NlczogZnVuY3Rpb24oKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoKTsgfSxcblxuICBodG1sOiBmdW5jdGlvbihodG1sKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuaHRtbChodG1sKVxuICAgIH0gZWxzZSB7XG4gICAgICBodG1sID0gdGhpcy4kZWxlbWVudC5odG1sKCk7XG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgfSxcblxuICBjc3M6IGZ1bmN0aW9uKGNzcykge1xuICAgIGlmICh0eXBlb2YgY3NzID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHByb3BlcnR5TmFtZSA9IGNzcztcblxuICAgICAgY3NzID0gdGhpcy4kZWxlbWVudC5jc3MocHJvcGVydHlOYW1lKTtcblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kZWxlbWVudC5jc3MoY3NzKTtcbiAgICB9XG4gIH0sXG5cbiAgb246IGZ1bmN0aW9uKGV2ZW50cywgaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKGV2ZW50cywgaGFuZGxlcik7IH0sXG5cbiAgb25Nb3VzZVVwOiBmdW5jdGlvbihoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNldXAnLCBtb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH0sXG4gIG9uTW91c2VEb3duOiBmdW5jdGlvbihoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNlZG93bicsIG1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpKTsgfSxcbiAgb25Nb3VzZU92ZXI6IGZ1bmN0aW9uKGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2VvdmVyJywgbW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9LFxuICBvbk1vdXNlT3V0OiBmdW5jdGlvbihoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNlb3V0JywgbW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9LFxuICBvbk1vdXNlTW92ZTogZnVuY3Rpb24oaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZW1vdmUnLCBtb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH1cbn07XG5cbmZ1bmN0aW9uIG1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIG1vdXNlVG9wID0gZXZlbnQucGFnZVksICAvLy9cbiAgICAgICAgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsIC8vL1xuICAgICAgICBtb3VzZUJ1dHRvbiA9IGV2ZW50LndoaWNoOyAvLy9cblxuICAgIGhhbmRsZXIobW91c2VUb3AsIG1vdXNlTGVmdCwgbW91c2VCdXR0b24pO1xuICB9O1xufVxuXG5FbGVtZW50LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCkge1xuICB2YXIgJGVsZW1lbnQgPSAkKGh0bWwpLFxuICAgICAgZWxlbWVudCA9IG5ldyBFbGVtZW50KCRlbGVtZW50KTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbkVsZW1lbnQuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgdmFyICRlbGVtZW50ID0gdHlwZW9mIHNlbGVjdG9yT3IkRWxlbWVudCA9PT0gJ3N0cmluZycgPyAvLy9cbiAgICAgICAgICAgICAgICAgICAkKHNlbGVjdG9yT3IkRWxlbWVudCkgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvck9yJEVsZW1lbnQ7ICAvLy9cblxuICB2YXIgY2xvbmVkJEVsZW1lbnQgPSAkZWxlbWVudC5jbG9uZSgpLFxuICAgICAgQ2xhc3MsXG4gICAgICBhcmdzO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgQ2xhc3MgPSBFbGVtZW50O1xuICAgIGFyZ3MgPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBDbGFzcyA9IGFyZ3VtZW50c1sxXTsgLy8vXG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDIpOyAgLy8vXG4gIH1cblxuICBhcmdzLnVuc2hpZnQoY2xvbmVkJEVsZW1lbnQpO1xuXG4gIGFyZ3MudW5zaGlmdChudWxsKTsgLy8vXG5cbiAgdmFyIGNsb25lZEluc3RhbmNlID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgYXJncykpOyAgLy8vXG5cbiAgcmV0dXJuIGNsb25lZEluc3RhbmNlO1xufTtcblxuRWxlbWVudC5jaGlsZCRFbGVtZW50ID0gZnVuY3Rpb24ocGFyZW50U2VsZWN0b3JPciRFbGVtZW50LCBjaGlsZFNlbGVjdG9yKSB7XG4gIHZhciBwYXJlbnQkRWxlbWVudCA9IHR5cGVvZiBwYXJlbnRTZWxlY3Rvck9yJEVsZW1lbnQgPT09ICdzdHJpbmcnID8gLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgJChwYXJlbnRTZWxlY3Rvck9yJEVsZW1lbnQpIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50U2VsZWN0b3JPciRFbGVtZW50OyAgLy8vXG5cbiAgdmFyIGNoaWxkJEVsZW1lbnQgPSBwYXJlbnQkRWxlbWVudC5maW5kKGNoaWxkU2VsZWN0b3IpO1xuXG4gIHJldHVybiBjaGlsZCRFbGVtZW50O1xufTtcblxuRWxlbWVudC5MRUZUX01PVVNFX0JVVFRPTiA9IDE7XG5FbGVtZW50Lk1JRERMRV9NT1VTRV9CVVRUT04gPSAyO1xuRWxlbWVudC5SSUdIVF9NT1VTRV9CVVRUT04gPSAzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBJbnB1dCA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICBpbmhlcml0cyh0aGlzLCBuZXcgRWxlbWVudChzZWxlY3Rvck9yJEVsZW1lbnQpKTtcbn07XG5cbklucHV0LnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gSW5wdXQuY2xvbmUodGhpcy4kZWxlbWVudCk7IH0sXG5cbiAgZ2V0VmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuJGVsZW1lbnQudmFsKCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG5cbiAgc2V0VmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy4kZWxlbWVudC52YWwodmFsdWUpO1xuICB9LFxuXG4gIHNlbGVjdDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kZWxlbWVudC5zZWxlY3QoKTtcbiAgfVxufTtcblxuSW5wdXQuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoc2VsZWN0b3JPciRFbGVtZW50LCBJbnB1dCk7XG59O1xuXG5JbnB1dC5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgdmFyICRlbGVtZW50ID0gJChodG1sKSxcbiAgICAgIGlucHV0ID0gbmV3IElucHV0KCRlbGVtZW50KTtcblxuICByZXR1cm4gaW5wdXQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG52YXIgTGluayA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkpO1xuXG4gIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgfVxufTtcblxuTGluay5wcm90b3R5cGUgPSB7XG4gIGNsb25lOiBmdW5jdGlvbihjbGlja0hhbmRsZXIpIHsgcmV0dXJuIExpbmsuY2xvbmUodGhpcy4kZWxlbWVudCwgY2xpY2tIYW5kbGVyKTsgfSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocmVmID0gdGhpcy4kZWxlbWVudC5hdHRyKCdocmVmJyk7XG5cbiAgICAgIGhhbmRsZXIoaHJlZik7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LmJpbmQodGhpcykpXG4gIH1cbn07XG5cbkxpbmsuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICByZXR1cm4gRWxlbWVudC5jbG9uZShzZWxlY3Rvck9yJEVsZW1lbnQsIExpbmssIGNsaWNrSGFuZGxlcik7XG59O1xuXG5MaW5rLmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gIHZhciAkZWxlbWVudCA9ICQoaHRtbCksXG4gICAgICBsaW5rID0gbmV3IExpbmsoJGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG5cbiAgcmV0dXJuICBsaW5rO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG52YXIgU2VsZWN0ID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkpO1xuXG4gIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgfVxufTtcblxuU2VsZWN0LnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIFNlbGVjdC5jbG9uZSh0aGlzLiRlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfSxcblxuICBvbkNoYW5nZTogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSB0aGlzLmdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKTtcblxuICAgICAgaGFuZGxlcihzZWxlY3RlZE9wdGlvblZhbHVlKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LFxuXG4gIGdldFNlbGVjdGVkT3B0aW9uVmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkc2VsZWN0ZWRPcHRpb24gPSB0aGlzLiRlbGVtZW50LmZpbmQoJzpzZWxlY3RlZCcpLFxuICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlID0gJHNlbGVjdGVkT3B0aW9uLnZhbCgpO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9uVmFsdWU7XG4gIH0sXG5cbiAgc2V0U2VsZWN0ZWRPcHRpb25CeVZhbHVlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuJGVsZW1lbnQudmFsKHZhbHVlKTtcbiAgfVxufTtcblxuU2VsZWN0LmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gIHJldHVybiBFbGVtZW50LmNsb25lKHNlbGVjdG9yT3IkRWxlbWVudCwgU2VsZWN0LCBjaGFuZ2VIYW5kbGVyKTtcbn07XG5cblNlbGVjdC5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgdmFyICRlbGVtZW50ID0gJChodG1sKSxcbiAgICAgIHNlbGVjdCA9IG5ldyBTZWxlY3QoJGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuXG4gIHJldHVybiAgc2VsZWN0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWxlY3Q7XG4iXX0=
