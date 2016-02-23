(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.easyuiExplorer = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

  this.super = {
    setWidth: setWidth,
    setHeight: setHeight
  };

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

  this.super = {
    onMouseDown: onMouseDown,
    onMouseOver: onMouseOver,
    onMouseOut: onMouseOut
  };

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImluaGVyaXRzLmpzIiwibGliL2N1cnNvci5qcyIsImxpYi9ob3Jpem9udGFsU3BsaXR0ZXIuanMiLCJsaWIvc2l6ZWFibGVFbGVtZW50LmpzIiwibGliL3NwbGl0dGVyLmpzIiwibGliL3ZlcnRpY2FsU3BsaXR0ZXIuanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3l1aS9saWIvYm9keS5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvbGliL2JvdW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvbGliL2J1dHRvbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvbGliL2NoZWNrYm94LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3l1aS9saWIvZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvbGliL2lucHV0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3l1aS9saWIvbGluay5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvbGliL3NlbGVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBTaXplYWJsZUVsZW1lbnQ6IHJlcXVpcmUoJy4vbGliL3NpemVhYmxlRWxlbWVudCcpLFxuICBWZXJ0aWNhbFNwbGl0dGVyOiByZXF1aXJlKCcuL2xpYi92ZXJ0aWNhbFNwbGl0dGVyJyksXG4gIEhvcml6b250YWxTcGxpdHRlcjogcmVxdWlyZSgnLi9saWIvaG9yaXpvbnRhbFNwbGl0dGVyJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc291cmNlKSB7XG4gIHZhciB0YXJnZXRQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KTtcblxuICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0YXJnZXRQcm90b3R5cGVbcHJvcF0pIHtcbiAgICAgICAgdGFyZ2V0UHJvdG90eXBlW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbmhlcml0cztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIEJvZHkgPSBlYXN5dWkuQm9keTtcblxudmFyIGJvZHkgPSBuZXcgQm9keSgpLFxuICAgIHByZXZpb3VzQ3Vyc29yOyAgLy8vXG5cbnZhciBjdXJzb3IgPSB7XG4gIGNvbHVtblJlc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGN1cnJlbnRDdXJzb3IgPSB0aGlzLmdldEN1cnNvcigpO1xuXG4gICAgaWYgKGN1cnJlbnRDdXJzb3IgIT09ICdjb2wtcmVzaXplJykge1xuICAgICAgcHJldmlvdXNDdXJzb3IgPSBjdXJyZW50Q3Vyc29yO1xuXG4gICAgICB0aGlzLnNldEN1cnNvcignY29sLXJlc2l6ZScpO1xuICAgIH1cbiAgfSxcblxuICByb3dSZXNpemU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjdXJyZW50Q3Vyc29yID0gdGhpcy5nZXRDdXJzb3IoKTtcblxuICAgIGlmIChjdXJyZW50Q3Vyc29yICE9PSAncm93LXJlc2l6ZScpIHtcbiAgICAgIHByZXZpb3VzQ3Vyc29yID0gY3VycmVudEN1cnNvcjtcblxuICAgICAgdGhpcy5zZXRDdXJzb3IoJ3Jvdy1yZXNpemUnKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0Q3Vyc29yKHByZXZpb3VzQ3Vyc29yKTsgLy8vXG4gIH0sXG5cbiAgZ2V0Q3Vyc29yOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3VycmVudEN1cnNvciA9IGJvZHkuY3NzKCdjdXJzb3InKTsgIC8vL1xuXG4gICAgcmV0dXJuIGN1cnJlbnRDdXJzb3IgfHwgJ2F1dG8nOyAvLy9cbiAgfSxcblxuICBzZXRDdXJzb3I6IGZ1bmN0aW9uKGN1cnNvcikge1xuICAgIHZhciBjc3MgPSB7XG4gICAgICBjdXJzb3I6IGN1cnNvclxuICAgIH07XG5cbiAgICBib2R5LmNzcyhjc3MpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGN1cnNvcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnLi4vaW5oZXJpdHMnKTtcblxudmFyIGN1cnNvciA9IHJlcXVpcmUoJy4vY3Vyc29yJyksXG4gICAgU3BsaXR0ZXIgPSByZXF1aXJlKCcuL3NwbGl0dGVyJyk7XG5cbnZhciBIb3Jpem9udGFsU3BsaXR0ZXIgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIHNpdHVhdGVkLCBzaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyKSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBTcGxpdHRlcihzZWxlY3Rvck9yJEVsZW1lbnQpKTtcblxuICB0aGlzLnNpdHVhdGVkID0gc2l0dWF0ZWQ7XG4gIHRoaXMuc2l6ZWFibGVFbGVtZW50ID0gc2l6ZWFibGVFbGVtZW50O1xuICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG5cbiAgdGhpcy5tb3VzZVRvcCA9IG51bGw7XG5cbiAgdGhpcy5zaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBudWxsO1xuXG4gIHRoaXMub25Nb3VzZURvd24oZnVuY3Rpb24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGN1cnNvci5yb3dSZXNpemUoKTtcblxuICAgIHRoaXMubW91c2VUb3AgPSBtb3VzZVRvcDtcblxuICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5zaXplYWJsZUVsZW1lbnQuZ2V0SGVpZ2h0KCk7XG5cbiAgICB2YXIgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcblxuICB0aGlzLm9uTW91c2VVcChmdW5jdGlvbigpIHtcbiAgICBjdXJzb3IucmVzZXQoKTtcblxuICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XG4gICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcblxuICB0aGlzLm9uTW91c2VPdmVyKGZ1bmN0aW9uKCkge1xuICAgIGN1cnNvci5yb3dSZXNpemUoKTtcbiAgfSk7XG5cbiAgdGhpcy5vbk1vdXNlT3V0KGZ1bmN0aW9uKCkge1xuICAgIGN1cnNvci5yZXNldCgpO1xuICB9KTtcblxuICB0aGlzLm9uTW91c2VNb3ZlKGZ1bmN0aW9uKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICB2YXIgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgdmFyIHJlbGF0aXZlTW91c2VUb3AgPSBtb3VzZVRvcCAtIHRoaXMubW91c2VUb3AsXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5zaXplYWJsZUVsZW1lbnRIZWlnaHQgLSB0aGlzLnNpdHVhdGVkICogcmVsYXRpdmVNb3VzZVRvcDtcblxuICAgICAgdGhpcy5zaXplYWJsZUVsZW1lbnQuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICAgIHZhciBzaXplYWJsZUVsZW1lbnRIZWlnaHQgPSB0aGlzLnNpemVhYmxlRWxlbWVudC5nZXRIZWlnaHQoKTtcblxuICAgICAgaWYgKHRoaXMuZHJhZ0hhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5kcmFnSGFuZGxlcihzaXplYWJsZUVsZW1lbnRIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbkhvcml6b250YWxTcGxpdHRlci5zaXR1YXRlZCA9IHtcbiAgQUJPVkU6ICsxLFxuICBCRUxPVzogLTFcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSG9yaXpvbnRhbFNwbGl0dGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgRWxlbWVudCA9IGVhc3l1aS5FbGVtZW50O1xuXG52YXIgU2l6ZWFibGVFbGVtZW50ID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBtaW5pbXVtV2lkdGgsIG1pbmltdW1IZWlnaHQsIG1heGltdW1XaWR0aCwgbWF4aW11bUhlaWdodCkge1xuICB2YXIgZWxlbWVudCA9IG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCksXG4gICAgICBzZXRXaWR0aCA9IGVsZW1lbnQuc2V0V2lkdGguYmluZCh0aGlzKSxcbiAgICAgIHNldEhlaWdodCA9IGVsZW1lbnQuc2V0SGVpZ2h0LmJpbmQodGhpcyk7XG5cbiAgaW5oZXJpdHModGhpcywgZWxlbWVudCk7XG5cbiAgdGhpcy5zdXBlciA9IHtcbiAgICBzZXRXaWR0aDogc2V0V2lkdGgsXG4gICAgc2V0SGVpZ2h0OiBzZXRIZWlnaHRcbiAgfTtcblxuICB0aGlzLm1pbmltdW1XaWR0aCA9IG1pbmltdW1XaWR0aDtcbiAgdGhpcy5taW5pbXVtSGVpZ2h0ID0gbWluaW11bUhlaWdodDtcbiAgdGhpcy5tYXhpbXVtV2lkdGggPSBtYXhpbXVtV2lkdGg7XG4gIHRoaXMubWF4aW11bUhlaWdodCA9IG1heGltdW1IZWlnaHQ7XG59O1xuXG5TaXplYWJsZUVsZW1lbnQucHJvdG90eXBlID0ge1xuICBzZXRXaWR0aDogZnVuY3Rpb24od2lkdGgpIHtcbiAgICBpZiAod2lkdGggPT09ICdhdXRvJykge1xuICAgICAgdGhpcy5zdXBlci5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5taW5pbXVtV2lkdGgpIHtcbiAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIHRoaXMubWluaW11bVdpZHRoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubWF4aW11bVdpZHRoKSB7XG4gICAgICB3aWR0aCA9IE1hdGgubWluKHdpZHRoLCB0aGlzLm1heGltdW1XaWR0aCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdXBlci5zZXRXaWR0aCh3aWR0aCk7XG4gIH0sXG5cbiAgc2V0SGVpZ2h0OiBmdW5jdGlvbihoZWlnaHQpIHtcbiAgICBpZiAoaGVpZ2h0ID09PSAnYXV0bycpIHtcbiAgICAgIHRoaXMuc3VwZXIuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5taW5pbXVtSGVpZ2h0KSB7XG4gICAgICBoZWlnaHQgPSBNYXRoLm1heChoZWlnaHQsIHRoaXMubWluaW11bUhlaWdodCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1heGltdW1IZWlnaHQpIHtcbiAgICAgIGhlaWdodCA9IE1hdGgubWluKGhlaWdodCwgdGhpcy5tYXhpbXVtSGVpZ2h0KTtcbiAgICB9XG5cbiAgICB0aGlzLnN1cGVyLnNldEhlaWdodChoZWlnaHQpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpemVhYmxlRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnLi4vaW5oZXJpdHMnKTtcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIEVsZW1lbnQgPSBlYXN5dWkuRWxlbWVudCxcbiAgICBCb2R5ID0gZWFzeXVpLkJvZHk7XG5cbnZhciBib2R5ID0gbmV3IEJvZHkoKTtcblxudmFyIFNwbGl0dGVyID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gIHZhciBlbGVtZW50ID0gbmV3IEVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KSxcbiAgICAgIG9uTW91c2VEb3duID0gZWxlbWVudC5vbk1vdXNlRG93bi5iaW5kKHRoaXMpLFxuICAgICAgb25Nb3VzZU92ZXIgPSBlbGVtZW50Lm9uTW91c2VPdmVyLmJpbmQodGhpcyksXG4gICAgICBvbk1vdXNlT3V0ID0gZWxlbWVudC5vbk1vdXNlT3V0LmJpbmQodGhpcyk7XG5cbiAgaW5oZXJpdHModGhpcywgZWxlbWVudCk7XG5cbiAgdGhpcy5zdXBlciA9IHtcbiAgICBvbk1vdXNlRG93bjogb25Nb3VzZURvd24sXG4gICAgb25Nb3VzZU92ZXI6IG9uTW91c2VPdmVyLFxuICAgIG9uTW91c2VPdXQ6IG9uTW91c2VPdXRcbiAgfTtcblxuICB0aGlzLmRyYWdIYW5kbGVyID0gbnVsbDtcblxuICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cbiAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xufTtcblxuU3BsaXR0ZXIucHJvdG90eXBlID0ge1xuICBlbmFibGU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSxcblxuICBkaXNhYmxlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgfSxcblxuICBvbkRyYWdnaW5nOiBmdW5jdGlvbihkcmFnSGFuZGxlcikge1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcbiAgfSxcblxuICBzdGFydERyYWdnaW5nOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgfSxcblxuICBzdG9wRHJhZ2dpbmc6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgfSxcblxuICBpc0RyYWdnaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2luZztcbiAgfSxcblxuICBvbk1vdXNlRG93bjogZnVuY3Rpb24oaGFuZGxlcikgeyB0aGlzLnN1cGVyLm9uTW91c2VEb3duKG1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpOyB9LFxuICBvbk1vdXNlT3ZlcjogZnVuY3Rpb24oaGFuZGxlcikgeyB0aGlzLnN1cGVyLm9uTW91c2VPdmVyKG1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpOyB9LFxuICBvbk1vdXNlT3V0OiBmdW5jdGlvbihoYW5kbGVyKSB7IHRoaXMuc3VwZXIub25Nb3VzZU91dChtb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKS5iaW5kKHRoaXMpKTsgfSxcbiAgb25Nb3VzZVVwOiBmdW5jdGlvbihoYW5kbGVyKSB7IGJvZHkub25Nb3VzZVVwKG1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpOyB9LCAgLy8vXG4gIG9uTW91c2VNb3ZlOiBmdW5jdGlvbihoYW5kbGVyKSB7IGJvZHkub25Nb3VzZU1vdmUobW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikuYmluZCh0aGlzKSk7IH0gLy8vXG59O1xuXG5mdW5jdGlvbiBtb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBoYW5kbGVyKG1vdXNlVG9wLCBtb3VzZUxlZnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTcGxpdHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnLi4vaW5oZXJpdHMnKTtcblxudmFyIGN1cnNvciA9IHJlcXVpcmUoJy4vY3Vyc29yJyksXG4gICAgU3BsaXR0ZXIgPSByZXF1aXJlKCcuL3NwbGl0dGVyJyk7XG5cbnZhciBWZXJ0aWNhbFNwbGl0dGVyID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBzaXR1YXRlZCwgc2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlcikge1xuICBpbmhlcml0cyh0aGlzLCBuZXcgU3BsaXR0ZXIoc2VsZWN0b3JPciRFbGVtZW50KSk7XG5cbiAgdGhpcy5zaXR1YXRlZCA9IHNpdHVhdGVkO1xuICB0aGlzLnNpemVhYmxlRWxlbWVudCA9IHNpemVhYmxlRWxlbWVudDtcbiAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuXG4gIHRoaXMubW91c2VMZWZ0ID0gbnVsbDtcblxuICB0aGlzLnNpemVhYmxlRWxlbWVudFdpZHRoID0gbnVsbDtcblxuICB0aGlzLm9uTW91c2VEb3duKGZ1bmN0aW9uKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjdXJzb3IuY29sdW1uUmVzaXplKCk7XG5cbiAgICB0aGlzLm1vdXNlTGVmdCA9IG1vdXNlTGVmdDtcblxuICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50V2lkdGggPSB0aGlzLnNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpO1xuXG4gICAgdmFyIGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcoKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgdGhpcy5vbk1vdXNlVXAoZnVuY3Rpb24oKSB7XG4gICAgY3Vyc29yLnJlc2V0KCk7XG5cbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgdGhpcy5vbk1vdXNlT3ZlcihmdW5jdGlvbigpIHtcbiAgICBjdXJzb3IuY29sdW1uUmVzaXplKCk7XG4gIH0pO1xuXG4gIHRoaXMub25Nb3VzZU91dChmdW5jdGlvbigpIHtcbiAgICBjdXJzb3IucmVzZXQoKTtcbiAgfSk7XG5cbiAgdGhpcy5vbk1vdXNlTW92ZShmdW5jdGlvbihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgdmFyIGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgIHZhciByZWxhdGl2ZU1vdXNlTGVmdCA9IG1vdXNlTGVmdCAtIHRoaXMubW91c2VMZWZ0LFxuICAgICAgICAgIHdpZHRoID0gdGhpcy5zaXplYWJsZUVsZW1lbnRXaWR0aCAtIHRoaXMuc2l0dWF0ZWQgKiByZWxhdGl2ZU1vdXNlTGVmdDtcblxuICAgICAgdGhpcy5zaXplYWJsZUVsZW1lbnQuc2V0V2lkdGgod2lkdGgpO1xuXG4gICAgICB2YXIgc2l6ZWFibGVFbGVtZW50V2lkdGggPSB0aGlzLnNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpO1xuXG4gICAgICBpZiAodGhpcy5kcmFnSGFuZGxlcikge1xuICAgICAgICB0aGlzLmRyYWdIYW5kbGVyKHNpemVhYmxlRWxlbWVudFdpZHRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5WZXJ0aWNhbFNwbGl0dGVyLnNpdHVhdGVkID0ge1xuICBUT19USEVfTEVGVF9PRjogKzEsXG4gIFRPX1RIRV9SSUdIVF9PRjogLTFcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxTcGxpdHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVsZW1lbnQ6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQnKSxcbiAgQm91bmRzOiByZXF1aXJlKCcuL2xpYi9ib3VuZHMnKSxcbiAgQm9keTogcmVxdWlyZSgnLi9saWIvYm9keScpLFxuICBMaW5rOiByZXF1aXJlKCcuL2xpYi9saW5rJyksXG4gIElucHV0OiByZXF1aXJlKCcuL2xpYi9pbnB1dCcpLFxuICBTZWxlY3Q6IHJlcXVpcmUoJy4vbGliL3NlbGVjdCcpLFxuICBCdXR0b246IHJlcXVpcmUoJy4vbGliL2J1dHRvbicpLFxuICBDaGVja2JveDogcmVxdWlyZSgnLi9saWIvY2hlY2tib3gnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnLi4vaW5oZXJpdHMnKTtcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxudmFyIEJvZHkgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgaWYgKHNlbGVjdG9yT3IkRWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc2VsZWN0b3JPciRFbGVtZW50ID0gJ2JvZHknO1xuICB9XG5cbiAgaW5oZXJpdHModGhpcywgbmV3IEVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KSk7XG59O1xuXG5Cb2R5LnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gQm9keS5jbG9uZSh0aGlzLiRlbGVtZW50KTsgfSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIGhhbmRsZXIoKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gIH0sXG5cbiAgb25Eb3VibGVDbGljazogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuZGJsY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyKCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICB9XG59O1xuXG5Cb2R5LmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gIHJldHVybiBFbGVtZW50LmNsb25lKHNlbGVjdG9yT3IkRWxlbWVudCwgQm9keSk7XG59O1xuXG5Cb2R5LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCkge1xuICB2YXIgJGVsZW1lbnQgPSAkKGh0bWwpLFxuICAgICAgYnV0dG9uID0gbmV3IEJvZHkoJGVsZW1lbnQpO1xuXG4gIHJldHVybiBidXR0b247XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvZHk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBCb3VuZHMgPSBmdW5jdGlvbih0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpIHtcbiAgdGhpcy50b3AgPSB0b3A7XG4gIHRoaXMubGVmdCA9IGxlZnQ7XG4gIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG59O1xuXG5Cb3VuZHMucHJvdG90eXBlID0ge1xuICBnZXRUb3A6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfSxcblxuICBnZXRMZWZ0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9LFxuXG4gIGdldEJvdHRvbTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYm90dG9tO1xuICB9LFxuXG4gIGdldFJpZ2h0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodDtcbiAgfSxcblxuICBhcmVPdmVybGFwcGluZzogZnVuY3Rpb24oYm91bmRzKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wIDw9IGJvdW5kcy5ib3R0b21cbiAgICAgICAgJiYgdGhpcy5sZWZ0IDw9IGJvdW5kcy5yaWdodFxuICAgICAgICAmJiB0aGlzLmJvdHRvbSA+PSBib3VuZHMudG9wXG4gICAgICAgICYmIHRoaXMucmlnaHQgPj0gYm91bmRzLmxlZnQ7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQm91bmRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG52YXIgQnV0dG9uID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgaW5oZXJpdHModGhpcywgbmV3IEVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KSk7XG5cbiAgaWYgKGNsaWNrSGFuZGxlcikge1xuICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICB9XG59O1xuXG5CdXR0b24ucHJvdG90eXBlID0ge1xuICBjbG9uZTogZnVuY3Rpb24oY2xpY2tIYW5kbGVyKSB7IHJldHVybiBCdXR0b24uY2xvbmUodGhpcy4kZWxlbWVudCwgY2xpY2tIYW5kbGVyKTsgfSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIGhhbmRsZXIoKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gIH0sXG5cbiAgb25Eb3VibGVDbGljazogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuZGJsY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyKCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICB9XG59O1xuXG5CdXR0b24uY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICByZXR1cm4gRWxlbWVudC5jbG9uZShzZWxlY3Rvck9yJEVsZW1lbnQsIEJ1dHRvbiwgY2xpY2tIYW5kbGVyKTtcbn07XG5cbkJ1dHRvbi5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwsIGNsaWNrSGFuZGxlcikge1xuICB2YXIgJGVsZW1lbnQgPSAkKGh0bWwpLFxuICAgICAgYnV0dG9uID0gbmV3IEJ1dHRvbigkZWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcblxuICByZXR1cm4gYnV0dG9uO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCdXR0b247XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBDaGVja2JveCA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkpO1xuXG4gIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgfVxufTtcblxuQ2hlY2tib3gucHJvdG90eXBlID0ge1xuICBjbG9uZTogZnVuY3Rpb24oY2xpY2tIYW5kbGVyKSB7IHJldHVybiBDaGVja2JveC5jbG9uZSh0aGlzLiRlbGVtZW50LCBjbGlja0hhbmRsZXIpOyB9LFxuXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZCgpO1xuXG4gICAgICBoYW5kbGVyKGNoZWNrZWQpO1xuICAgIH0uYmluZCh0aGlzKSlcbiAgfSxcblxuICBjaGVjazogZnVuY3Rpb24oY2hlY2tlZCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjaGVja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKCdjaGVja2VkJyk7XG4gICAgfVxuICB9LFxuXG4gIGlzQ2hlY2tlZDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaXMoJzpjaGVja2VkJyk7XG4gIH1cbn07XG5cbkNoZWNrYm94LmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoc2VsZWN0b3JPciRFbGVtZW50LCBDaGVja2JveCwgY2xpY2tIYW5kbGVyKTtcbn07XG5cbkNoZWNrYm94LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gIHZhciAkZWxlbWVudCA9ICQoaHRtbCksXG4gICAgICBjaGVja2JveCA9IG5ldyBDaGVja2JveCgkZWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcblxuICByZXR1cm4gY2hlY2tib3g7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoZWNrYm94O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQm91bmRzID0gcmVxdWlyZSgnLi9ib3VuZHMnKTtcblxudmFyIEVsZW1lbnQgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgdmFyICRlbGVtZW50ID0gdHlwZW9mIHNlbGVjdG9yT3IkRWxlbWVudCA9PT0gJ3N0cmluZycgPyAvLy9cbiAgICAgICAgICAgICAgICAgICAkKHNlbGVjdG9yT3IkRWxlbWVudCkgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvck9yJEVsZW1lbnQ7ICAvLy9cblxuICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG59O1xuXG5FbGVtZW50LnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjbG9uZWRFbGVtZW50ID0gRWxlbWVudC5jbG9uZSh0aGlzLiRlbGVtZW50KTtcblxuICAgIHJldHVybiBjbG9uZWRFbGVtZW50O1xuICB9LFxuXG4gIHNob3c6IGZ1bmN0aW9uKCkgeyB0aGlzLiRlbGVtZW50LnNob3coKTsgfSxcbiAgaGlkZTogZnVuY3Rpb24oKSB7IHRoaXMuJGVsZW1lbnQuaGlkZSgpOyB9LFxuICBlbmFibGU6IGZ1bmN0aW9uKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7IH0sXG4gIGRpc2FibGU6IGZ1bmN0aW9uKCkgeyB0aGlzLiRlbGVtZW50LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7IH0sXG5cbiAgZ2V0V2lkdGg6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC53aWR0aCgpOyB9LFxuICBnZXRIZWlnaHQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5oZWlnaHQoKTsgfSxcbiAgc2V0V2lkdGg6IGZ1bmN0aW9uKHdpZHRoKSB7IHRoaXMuJGVsZW1lbnQud2lkdGgod2lkdGgpOyB9LFxuICBzZXRIZWlnaHQ6IGZ1bmN0aW9uKGhlaWdodCkgeyB0aGlzLiRlbGVtZW50LmhlaWdodChoZWlnaHQpOyB9LFxuXG4gIGdldEJvdW5kczogZnVuY3Rpb24oKSB7XG4gICAgdmFyICRvZmZzZXQgPSB0aGlzLiRlbGVtZW50Lm9mZnNldCgpLFxuICAgICAgICB0b3AgPSAkb2Zmc2V0LnRvcCwgIC8vL1xuICAgICAgICBsZWZ0ID0gJG9mZnNldC5sZWZ0LCAgLy8vXG4gICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICBib3R0b20gPSB0b3AgKyBoZWlnaHQsXG4gICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoLFxuICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9LFxuXG4gIGFkZEF0dHJpYnV0ZTogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHsgdGhpcy4kZWxlbWVudC5hdHRyKG5hbWUsIHZhbHVlKTsgfSxcbiAgcmVtb3ZlQXR0cmlidXRlOiBmdW5jdGlvbihuYW1lKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cihuYW1lKTsgfSxcblxuICBwcmVwZW5kQmVmb3JlOiBmdW5jdGlvbihlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYmVmb3JlKGVsZW1lbnQuJGVsZW1lbnQpOyB9LFxuICBhcHBlbmRBZnRlcjogZnVuY3Rpb24oZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LmFmdGVyKGVsZW1lbnQuJGVsZW1lbnQpOyB9LFxuICBwcmVwZW5kOiBmdW5jdGlvbihlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQucHJlcGVuZChlbGVtZW50LiRlbGVtZW50KTsgfSxcbiAgYXBwZW5kOiBmdW5jdGlvbihlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYXBwZW5kKGVsZW1lbnQuJGVsZW1lbnQpOyB9LFxuICByZW1vdmU6IGZ1bmN0aW9uKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZSgpOyB9LFxuXG4gIGhhc0NsYXNzOiBmdW5jdGlvbihjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lKTsgfSxcbiAgYWRkQ2xhc3M6IGZ1bmN0aW9uKGNsYXNzTmFtZSkgeyB0aGlzLiRlbGVtZW50LmFkZENsYXNzKGNsYXNzTmFtZSk7IH0sXG4gIHJlbW92ZUNsYXNzOiBmdW5jdGlvbihjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpOyB9LFxuICByZW1vdmVDbGFzc2VzOiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygpOyB9LFxuXG4gIGh0bWw6IGZ1bmN0aW9uKGh0bWwpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy4kZWxlbWVudC5odG1sKGh0bWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIGh0bWwgPSB0aGlzLiRlbGVtZW50Lmh0bWwoKTtcblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICB9LFxuXG4gIGNzczogZnVuY3Rpb24oY3NzKSB7XG4gICAgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgcHJvcGVydHlOYW1lID0gY3NzO1xuXG4gICAgICBjc3MgPSB0aGlzLiRlbGVtZW50LmNzcyhwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmNzcyhjc3MpO1xuICAgIH1cbiAgfSxcblxuICBvbjogZnVuY3Rpb24oZXZlbnRzLCBoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oZXZlbnRzLCBoYW5kbGVyKTsgfSxcblxuICBvbk1vdXNlVXA6IGZ1bmN0aW9uKGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2V1cCcsIG1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpKTsgfSxcbiAgb25Nb3VzZURvd246IGZ1bmN0aW9uKGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2Vkb3duJywgbW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9LFxuICBvbk1vdXNlT3ZlcjogZnVuY3Rpb24oaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZW92ZXInLCBtb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH0sXG4gIG9uTW91c2VPdXQ6IGZ1bmN0aW9uKGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2VvdXQnLCBtb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH0sXG4gIG9uTW91c2VNb3ZlOiBmdW5jdGlvbihoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNlbW92ZScsIG1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpKTsgfVxufTtcblxuZnVuY3Rpb24gbW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikge1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgbW91c2VUb3AgPSBldmVudC5wYWdlWSwgIC8vL1xuICAgICAgICBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgLy8vXG4gICAgICAgIG1vdXNlQnV0dG9uID0gZXZlbnQud2hpY2g7IC8vL1xuXG4gICAgaGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0LCBtb3VzZUJ1dHRvbik7XG4gIH07XG59XG5cbkVsZW1lbnQuZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sKSB7XG4gIHZhciAkZWxlbWVudCA9ICQoaHRtbCksXG4gICAgICBlbGVtZW50ID0gbmV3IEVsZW1lbnQoJGVsZW1lbnQpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuRWxlbWVudC5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICB2YXIgJGVsZW1lbnQgPSB0eXBlb2Ygc2VsZWN0b3JPciRFbGVtZW50ID09PSAnc3RyaW5nJyA/IC8vL1xuICAgICAgICAgICAgICAgICAgICQoc2VsZWN0b3JPciRFbGVtZW50KSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yT3IkRWxlbWVudDsgIC8vL1xuXG4gIHZhciBjbG9uZWQkRWxlbWVudCA9ICRlbGVtZW50LmNsb25lKCksXG4gICAgICBDbGFzcyxcbiAgICAgIGFyZ3M7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICBDbGFzcyA9IEVsZW1lbnQ7XG4gICAgYXJncyA9IFtdO1xuICB9IGVsc2Uge1xuICAgIENsYXNzID0gYXJndW1lbnRzWzFdOyAvLy9cbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFyZ3VtZW50cywgMik7ICAvLy9cbiAgfVxuXG4gIGFyZ3MudW5zaGlmdChjbG9uZWQkRWxlbWVudCk7XG5cbiAgYXJncy51bnNoaWZ0KG51bGwpOyAvLy9cblxuICB2YXIgY2xvbmVkSW5zdGFuY2UgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCBhcmdzKSk7ICAvLy9cblxuICByZXR1cm4gY2xvbmVkSW5zdGFuY2U7XG59O1xuXG5FbGVtZW50LmNoaWxkJEVsZW1lbnQgPSBmdW5jdGlvbihwYXJlbnRTZWxlY3Rvck9yJEVsZW1lbnQsIGNoaWxkU2VsZWN0b3IpIHtcbiAgdmFyIHBhcmVudCRFbGVtZW50ID0gdHlwZW9mIHBhcmVudFNlbGVjdG9yT3IkRWxlbWVudCA9PT0gJ3N0cmluZycgPyAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAkKHBhcmVudFNlbGVjdG9yT3IkRWxlbWVudCkgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTZWxlY3Rvck9yJEVsZW1lbnQ7ICAvLy9cblxuICB2YXIgY2hpbGQkRWxlbWVudCA9IHBhcmVudCRFbGVtZW50LmZpbmQoY2hpbGRTZWxlY3Rvcik7XG5cbiAgcmV0dXJuIGNoaWxkJEVsZW1lbnQ7XG59O1xuXG5FbGVtZW50LkxFRlRfTU9VU0VfQlVUVE9OID0gMTtcbkVsZW1lbnQuTUlERExFX01PVVNFX0JVVFRPTiA9IDI7XG5FbGVtZW50LlJJR0hUX01PVVNFX0JVVFRPTiA9IDM7XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnLi4vaW5oZXJpdHMnKTtcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxudmFyIElucHV0ID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkpO1xufTtcblxuSW5wdXQucHJvdG90eXBlID0ge1xuICBjbG9uZTogZnVuY3Rpb24oKSB7IHJldHVybiBJbnB1dC5jbG9uZSh0aGlzLiRlbGVtZW50KTsgfSxcblxuICBnZXRWYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy4kZWxlbWVudC52YWwoKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcblxuICBzZXRWYWx1ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB0aGlzLiRlbGVtZW50LnZhbCh2YWx1ZSk7XG4gIH0sXG5cbiAgc2VsZWN0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRlbGVtZW50LnNlbGVjdCgpO1xuICB9XG59O1xuXG5JbnB1dC5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICByZXR1cm4gRWxlbWVudC5jbG9uZShzZWxlY3Rvck9yJEVsZW1lbnQsIElucHV0KTtcbn07XG5cbklucHV0LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCkge1xuICB2YXIgJGVsZW1lbnQgPSAkKGh0bWwpLFxuICAgICAgaW5wdXQgPSBuZXcgSW5wdXQoJGVsZW1lbnQpO1xuXG4gIHJldHVybiBpbnB1dDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBMaW5rID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgaW5oZXJpdHModGhpcywgbmV3IEVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KSk7XG5cbiAgaWYgKGNsaWNrSGFuZGxlcikge1xuICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICB9XG59O1xuXG5MaW5rLnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gTGluay5jbG9uZSh0aGlzLiRlbGVtZW50LCBjbGlja0hhbmRsZXIpOyB9LFxuXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyZWYgPSB0aGlzLiRlbGVtZW50LmF0dHIoJ2hyZWYnKTtcblxuICAgICAgaGFuZGxlcihocmVmKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0uYmluZCh0aGlzKSlcbiAgfVxufTtcblxuTGluay5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gIHJldHVybiBFbGVtZW50LmNsb25lKHNlbGVjdG9yT3IkRWxlbWVudCwgTGluaywgY2xpY2tIYW5kbGVyKTtcbn07XG5cbkxpbmsuZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sLCBjbGlja0hhbmRsZXIpIHtcbiAgdmFyICRlbGVtZW50ID0gJChodG1sKSxcbiAgICAgIGxpbmsgPSBuZXcgTGluaygkZWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcblxuICByZXR1cm4gIGxpbms7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbms7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBTZWxlY3QgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgaW5oZXJpdHModGhpcywgbmV3IEVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KSk7XG5cbiAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICB9XG59O1xuXG5TZWxlY3QucHJvdG90eXBlID0ge1xuICBjbG9uZTogZnVuY3Rpb24oY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gU2VsZWN0LmNsb25lKHRoaXMuJGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9LFxuXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpO1xuXG4gICAgICBoYW5kbGVyKHNlbGVjdGVkT3B0aW9uVmFsdWUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyICRzZWxlY3RlZE9wdGlvbiA9IHRoaXMuJGVsZW1lbnQuZmluZCgnOnNlbGVjdGVkJyksXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSAkc2VsZWN0ZWRPcHRpb24udmFsKCk7XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25WYWx1ZTtcbiAgfSxcblxuICBzZXRTZWxlY3RlZE9wdGlvbkJ5VmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy4kZWxlbWVudC52YWwodmFsdWUpO1xuICB9XG59O1xuXG5TZWxlY3QuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoc2VsZWN0b3JPciRFbGVtZW50LCBTZWxlY3QsIGNoYW5nZUhhbmRsZXIpO1xufTtcblxuU2VsZWN0LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICB2YXIgJGVsZW1lbnQgPSAkKGh0bWwpLFxuICAgICAgc2VsZWN0ID0gbmV3IFNlbGVjdCgkZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG5cbiAgcmV0dXJuICBzZWxlY3Q7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdDtcbiJdfQ==
