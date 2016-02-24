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
  this.$element = $element(selectorOr$Element);
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

  onMouseUp: function(handler) { this.$element.on('mouseup', returnMouseEventHandler(handler)); },
  onMouseDown: function(handler) { this.$element.on('mousedown', returnMouseEventHandler(handler)); },
  onMouseOver: function(handler) { this.$element.on('mouseover', returnMouseEventHandler(handler)); },
  onMouseOut: function(handler) { this.$element.on('mouseout', returnMouseEventHandler(handler)); },
  onMouseMove: function(handler) { this.$element.on('mousemove', returnMouseEventHandler(handler)); }
};

Element.fromHTML = function(html) {
  var $element = $(html),
      element = new Element($element);

  return element;
};

Element.clone = function(selectorOr$Element) {
  var cloned$Element = $element(selectorOr$Element).clone(),
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

Element.LEFT_MOUSE_BUTTON = 1;
Element.MIDDLE_MOUSE_BUTTON = 2;
Element.RIGHT_MOUSE_BUTTON = 3;

function returnMouseEventHandler(handler) {
  return function(event) {
    var mouseTop = event.pageY,  ///
        mouseLeft = event.pageX, ///
        mouseButton = event.which; ///

    handler(mouseTop, mouseLeft, mouseButton);
  };
}

module.exports = Element;

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImluaGVyaXRzLmpzIiwibGliL2N1cnNvci5qcyIsImxpYi9ob3Jpem9udGFsU3BsaXR0ZXIuanMiLCJsaWIvc2l6ZWFibGVFbGVtZW50LmpzIiwibGliL3NwbGl0dGVyLmpzIiwibGliL3ZlcnRpY2FsU3BsaXR0ZXIuanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3l1aS9saWIvYm9keS5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvbGliL2JvdW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvbGliL2J1dHRvbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvbGliL2NoZWNrYm94LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3l1aS9saWIvZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvbGliL2lucHV0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3l1aS9saWIvbGluay5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvbGliL3NlbGVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFNpemVhYmxlRWxlbWVudDogcmVxdWlyZSgnLi9saWIvc2l6ZWFibGVFbGVtZW50JyksXG4gIFZlcnRpY2FsU3BsaXR0ZXI6IHJlcXVpcmUoJy4vbGliL3ZlcnRpY2FsU3BsaXR0ZXInKSxcbiAgSG9yaXpvbnRhbFNwbGl0dGVyOiByZXF1aXJlKCcuL2xpYi9ob3Jpem9udGFsU3BsaXR0ZXInKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24odGFyZ2V0LCBzb3VyY2UsIHN1cGVyTWV0aG9kTmFtZXMpIHtcbiAgdmFyIHRhcmdldFByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpO1xuXG4gIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgdGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRhcmdldFByb3RvdHlwZVtwcm9wXSkge1xuICAgICAgICB0YXJnZXRQcm90b3R5cGVbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHN1cGVyTWV0aG9kTmFtZXMpIHtcbiAgICB2YXIgc3VwZXJNZXRob2RzID0ge307XG5cbiAgICBzdXBlck1ldGhvZE5hbWVzLmZvckVhY2goZnVuY3Rpb24oc3VwZXJNZXRob2ROYW1lKSB7XG4gICAgICBzdXBlck1ldGhvZHNbc3VwZXJNZXRob2ROYW1lXSA9IHNvdXJjZVtzdXBlck1ldGhvZE5hbWVdLmJpbmQodGFyZ2V0KTtcbiAgICB9KTtcblxuICAgIHRhcmdldC5zdXBlciA9IHN1cGVyTWV0aG9kczsgIC8vL1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGluaGVyaXRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgQm9keSA9IGVhc3l1aS5Cb2R5O1xuXG52YXIgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgcHJldmlvdXNDdXJzb3I7ICAvLy9cblxudmFyIGN1cnNvciA9IHtcbiAgY29sdW1uUmVzaXplOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3VycmVudEN1cnNvciA9IHRoaXMuZ2V0Q3Vyc29yKCk7XG5cbiAgICBpZiAoY3VycmVudEN1cnNvciAhPT0gJ2NvbC1yZXNpemUnKSB7XG4gICAgICBwcmV2aW91c0N1cnNvciA9IGN1cnJlbnRDdXJzb3I7XG5cbiAgICAgIHRoaXMuc2V0Q3Vyc29yKCdjb2wtcmVzaXplJyk7XG4gICAgfVxuICB9LFxuXG4gIHJvd1Jlc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGN1cnJlbnRDdXJzb3IgPSB0aGlzLmdldEN1cnNvcigpO1xuXG4gICAgaWYgKGN1cnJlbnRDdXJzb3IgIT09ICdyb3ctcmVzaXplJykge1xuICAgICAgcHJldmlvdXNDdXJzb3IgPSBjdXJyZW50Q3Vyc29yO1xuXG4gICAgICB0aGlzLnNldEN1cnNvcigncm93LXJlc2l6ZScpO1xuICAgIH1cbiAgfSxcblxuICByZXNldDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRDdXJzb3IocHJldmlvdXNDdXJzb3IpOyAvLy9cbiAgfSxcblxuICBnZXRDdXJzb3I6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjdXJyZW50Q3Vyc29yID0gYm9keS5jc3MoJ2N1cnNvcicpOyAgLy8vXG5cbiAgICByZXR1cm4gY3VycmVudEN1cnNvciB8fCAnYXV0byc7IC8vL1xuICB9LFxuXG4gIHNldEN1cnNvcjogZnVuY3Rpb24oY3Vyc29yKSB7XG4gICAgdmFyIGNzcyA9IHtcbiAgICAgIGN1cnNvcjogY3Vyc29yXG4gICAgfTtcblxuICAgIGJvZHkuY3NzKGNzcyk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3Vyc29yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgY3Vyc29yID0gcmVxdWlyZSgnLi9jdXJzb3InKSxcbiAgICBTcGxpdHRlciA9IHJlcXVpcmUoJy4vc3BsaXR0ZXInKTtcblxudmFyIEhvcml6b250YWxTcGxpdHRlciA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgc2l0dWF0ZWQsIHNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIpIHtcbiAgaW5oZXJpdHModGhpcywgbmV3IFNwbGl0dGVyKHNlbGVjdG9yT3IkRWxlbWVudCkpO1xuXG4gIHRoaXMuc2l0dWF0ZWQgPSBzaXR1YXRlZDtcbiAgdGhpcy5zaXplYWJsZUVsZW1lbnQgPSBzaXplYWJsZUVsZW1lbnQ7XG4gIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcblxuICB0aGlzLm1vdXNlVG9wID0gbnVsbDtcblxuICB0aGlzLnNpemVhYmxlRWxlbWVudEhlaWdodCA9IG51bGw7XG5cbiAgdGhpcy5vbk1vdXNlRG93bihmdW5jdGlvbihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuXG4gICAgdGhpcy5tb3VzZVRvcCA9IG1vdXNlVG9wO1xuXG4gICAgdGhpcy5zaXplYWJsZUVsZW1lbnRIZWlnaHQgPSB0aGlzLnNpemVhYmxlRWxlbWVudC5nZXRIZWlnaHQoKTtcblxuICAgIHZhciBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgdGhpcy5zdGFydERyYWdnaW5nKCk7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xuXG4gIHRoaXMub25Nb3VzZVVwKGZ1bmN0aW9uKCkge1xuICAgIGN1cnNvci5yZXNldCgpO1xuXG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xuXG4gIHRoaXMub25Nb3VzZU92ZXIoZnVuY3Rpb24oKSB7XG4gICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuICB9KTtcblxuICB0aGlzLm9uTW91c2VPdXQoZnVuY3Rpb24oKSB7XG4gICAgY3Vyc29yLnJlc2V0KCk7XG4gIH0pO1xuXG4gIHRoaXMub25Nb3VzZU1vdmUoZnVuY3Rpb24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIHZhciBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICB2YXIgcmVsYXRpdmVNb3VzZVRvcCA9IG1vdXNlVG9wIC0gdGhpcy5tb3VzZVRvcCxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLnNpemVhYmxlRWxlbWVudEhlaWdodCAtIHRoaXMuc2l0dWF0ZWQgKiByZWxhdGl2ZU1vdXNlVG9wO1xuXG4gICAgICB0aGlzLnNpemVhYmxlRWxlbWVudC5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgdmFyIHNpemVhYmxlRWxlbWVudEhlaWdodCA9IHRoaXMuc2l6ZWFibGVFbGVtZW50LmdldEhlaWdodCgpO1xuXG4gICAgICBpZiAodGhpcy5kcmFnSGFuZGxlcikge1xuICAgICAgICB0aGlzLmRyYWdIYW5kbGVyKHNpemVhYmxlRWxlbWVudEhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufTtcblxuSG9yaXpvbnRhbFNwbGl0dGVyLnNpdHVhdGVkID0ge1xuICBBQk9WRTogKzEsXG4gIEJFTE9XOiAtMVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIb3Jpem9udGFsU3BsaXR0ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBFbGVtZW50ID0gZWFzeXVpLkVsZW1lbnQ7XG5cbnZhciBTaXplYWJsZUVsZW1lbnQgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIG1pbmltdW1XaWR0aCwgbWluaW11bUhlaWdodCwgbWF4aW11bVdpZHRoLCBtYXhpbXVtSGVpZ2h0KSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCksIFsnc2V0V2lkdGgnLCAnc2V0SGVpZ2h0J10pO1xuXG4gIHRoaXMubWluaW11bVdpZHRoID0gbWluaW11bVdpZHRoO1xuICB0aGlzLm1pbmltdW1IZWlnaHQgPSBtaW5pbXVtSGVpZ2h0O1xuICB0aGlzLm1heGltdW1XaWR0aCA9IG1heGltdW1XaWR0aDtcbiAgdGhpcy5tYXhpbXVtSGVpZ2h0ID0gbWF4aW11bUhlaWdodDtcbn07XG5cblNpemVhYmxlRWxlbWVudC5wcm90b3R5cGUgPSB7XG4gIHNldFdpZHRoOiBmdW5jdGlvbih3aWR0aCkge1xuICAgIGlmICh3aWR0aCA9PT0gJ2F1dG8nKSB7XG4gICAgICB0aGlzLnN1cGVyLnNldFdpZHRoKHdpZHRoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1pbmltdW1XaWR0aCkge1xuICAgICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCwgdGhpcy5taW5pbXVtV2lkdGgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXhpbXVtV2lkdGgpIHtcbiAgICAgIHdpZHRoID0gTWF0aC5taW4od2lkdGgsIHRoaXMubWF4aW11bVdpZHRoKTtcbiAgICB9XG5cbiAgICB0aGlzLnN1cGVyLnNldFdpZHRoKHdpZHRoKTtcbiAgfSxcblxuICBzZXRIZWlnaHQ6IGZ1bmN0aW9uKGhlaWdodCkge1xuICAgIGlmIChoZWlnaHQgPT09ICdhdXRvJykge1xuICAgICAgdGhpcy5zdXBlci5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1pbmltdW1IZWlnaHQpIHtcbiAgICAgIGhlaWdodCA9IE1hdGgubWF4KGhlaWdodCwgdGhpcy5taW5pbXVtSGVpZ2h0KTtcbiAgICB9XG4gICAgaWYgKHRoaXMubWF4aW11bUhlaWdodCkge1xuICAgICAgaGVpZ2h0ID0gTWF0aC5taW4oaGVpZ2h0LCB0aGlzLm1heGltdW1IZWlnaHQpO1xuICAgIH1cblxuICAgIHRoaXMuc3VwZXIuc2V0SGVpZ2h0KGhlaWdodCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2l6ZWFibGVFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgRWxlbWVudCA9IGVhc3l1aS5FbGVtZW50LFxuICAgIEJvZHkgPSBlYXN5dWkuQm9keTtcblxudmFyIGJvZHkgPSBuZXcgQm9keSgpO1xuXG52YXIgU3BsaXR0ZXIgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgaW5oZXJpdHModGhpcywgbmV3IEVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KSwgWydvbk1vdXNlRG93bicsICdvbk1vdXNlT3ZlcicsICdvbk1vdXNlT3V0J10pO1xuXG4gIHRoaXMuZHJhZ0hhbmRsZXIgPSBudWxsO1xuXG4gIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG59O1xuXG5TcGxpdHRlci5wcm90b3R5cGUgPSB7XG4gIGVuYWJsZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICB9LFxuXG4gIGRpc2FibGU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICB9LFxuXG4gIG9uRHJhZ2dpbmc6IGZ1bmN0aW9uKGRyYWdIYW5kbGVyKSB7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuICB9LFxuXG4gIHN0YXJ0RHJhZ2dpbmc6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICB9LFxuXG4gIHN0b3BEcmFnZ2luZzogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICB9LFxuXG4gIGlzRHJhZ2dpbmc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnaW5nO1xuICB9LFxuXG4gIG9uTW91c2VEb3duOiBmdW5jdGlvbihoYW5kbGVyKSB7IHRoaXMuc3VwZXIub25Nb3VzZURvd24ocmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikuYmluZCh0aGlzKSk7IH0sXG4gIG9uTW91c2VPdmVyOiBmdW5jdGlvbihoYW5kbGVyKSB7IHRoaXMuc3VwZXIub25Nb3VzZU92ZXIocmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikuYmluZCh0aGlzKSk7IH0sXG4gIG9uTW91c2VPdXQ6IGZ1bmN0aW9uKGhhbmRsZXIpIHsgdGhpcy5zdXBlci5vbk1vdXNlT3V0KHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpOyB9LFxuICBvbk1vdXNlVXA6IGZ1bmN0aW9uKGhhbmRsZXIpIHsgYm9keS5vbk1vdXNlVXAocmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikuYmluZCh0aGlzKSk7IH0sICAvLy9cbiAgb25Nb3VzZU1vdmU6IGZ1bmN0aW9uKGhhbmRsZXIpIHsgYm9keS5vbk1vdXNlTW92ZShyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKS5iaW5kKHRoaXMpKTsgfSAvLy9cbn07XG5cbmZ1bmN0aW9uIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGhhbmRsZXIobW91c2VUb3AsIG1vdXNlTGVmdCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNwbGl0dGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgY3Vyc29yID0gcmVxdWlyZSgnLi9jdXJzb3InKSxcbiAgICBTcGxpdHRlciA9IHJlcXVpcmUoJy4vc3BsaXR0ZXInKTtcblxudmFyIFZlcnRpY2FsU3BsaXR0ZXIgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIHNpdHVhdGVkLCBzaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyKSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBTcGxpdHRlcihzZWxlY3Rvck9yJEVsZW1lbnQpKTtcblxuICB0aGlzLnNpdHVhdGVkID0gc2l0dWF0ZWQ7XG4gIHRoaXMuc2l6ZWFibGVFbGVtZW50ID0gc2l6ZWFibGVFbGVtZW50O1xuICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG5cbiAgdGhpcy5tb3VzZUxlZnQgPSBudWxsO1xuXG4gIHRoaXMuc2l6ZWFibGVFbGVtZW50V2lkdGggPSBudWxsO1xuXG4gIHRoaXMub25Nb3VzZURvd24oZnVuY3Rpb24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcblxuICAgIHRoaXMubW91c2VMZWZ0ID0gbW91c2VMZWZ0O1xuXG4gICAgdGhpcy5zaXplYWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuc2l6ZWFibGVFbGVtZW50LmdldFdpZHRoKCk7XG5cbiAgICB2YXIgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcblxuICB0aGlzLm9uTW91c2VVcChmdW5jdGlvbigpIHtcbiAgICBjdXJzb3IucmVzZXQoKTtcblxuICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XG4gICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcblxuICB0aGlzLm9uTW91c2VPdmVyKGZ1bmN0aW9uKCkge1xuICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbiAgfSk7XG5cbiAgdGhpcy5vbk1vdXNlT3V0KGZ1bmN0aW9uKCkge1xuICAgIGN1cnNvci5yZXNldCgpO1xuICB9KTtcblxuICB0aGlzLm9uTW91c2VNb3ZlKGZ1bmN0aW9uKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICB2YXIgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgdmFyIHJlbGF0aXZlTW91c2VMZWZ0ID0gbW91c2VMZWZ0IC0gdGhpcy5tb3VzZUxlZnQsXG4gICAgICAgICAgd2lkdGggPSB0aGlzLnNpemVhYmxlRWxlbWVudFdpZHRoIC0gdGhpcy5zaXR1YXRlZCAqIHJlbGF0aXZlTW91c2VMZWZ0O1xuXG4gICAgICB0aGlzLnNpemVhYmxlRWxlbWVudC5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICAgIHZhciBzaXplYWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuc2l6ZWFibGVFbGVtZW50LmdldFdpZHRoKCk7XG5cbiAgICAgIGlmICh0aGlzLmRyYWdIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuZHJhZ0hhbmRsZXIoc2l6ZWFibGVFbGVtZW50V2lkdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblZlcnRpY2FsU3BsaXR0ZXIuc2l0dWF0ZWQgPSB7XG4gIFRPX1RIRV9MRUZUX09GOiArMSxcbiAgVE9fVEhFX1JJR0hUX09GOiAtMVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0aWNhbFNwbGl0dGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRWxlbWVudDogcmVxdWlyZSgnLi9saWIvZWxlbWVudCcpLFxuICBCb3VuZHM6IHJlcXVpcmUoJy4vbGliL2JvdW5kcycpLFxuICBCb2R5OiByZXF1aXJlKCcuL2xpYi9ib2R5JyksXG4gIExpbms6IHJlcXVpcmUoJy4vbGliL2xpbmsnKSxcbiAgSW5wdXQ6IHJlcXVpcmUoJy4vbGliL2lucHV0JyksXG4gIFNlbGVjdDogcmVxdWlyZSgnLi9saWIvc2VsZWN0JyksXG4gIEJ1dHRvbjogcmVxdWlyZSgnLi9saWIvYnV0dG9uJyksXG4gIENoZWNrYm94OiByZXF1aXJlKCcuL2xpYi9jaGVja2JveCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG52YXIgQm9keSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICBpZiAoc2VsZWN0b3JPciRFbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICBzZWxlY3Rvck9yJEVsZW1lbnQgPSAnYm9keSc7XG4gIH1cblxuICBpbmhlcml0cyh0aGlzLCBuZXcgRWxlbWVudChzZWxlY3Rvck9yJEVsZW1lbnQpKTtcbn07XG5cbkJvZHkucHJvdG90eXBlID0ge1xuICBjbG9uZTogZnVuY3Rpb24oKSB7IHJldHVybiBCb2R5LmNsb25lKHRoaXMuJGVsZW1lbnQpOyB9LFxuXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgaGFuZGxlcigpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgfSxcblxuICBvbkRvdWJsZUNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5kYmxjbGljayhmdW5jdGlvbigpIHtcbiAgICAgIGhhbmRsZXIoKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gIH1cbn07XG5cbkJvZHkuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoc2VsZWN0b3JPciRFbGVtZW50LCBCb2R5KTtcbn07XG5cbkJvZHkuZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sKSB7XG4gIHZhciAkZWxlbWVudCA9ICQoaHRtbCksXG4gICAgICBidXR0b24gPSBuZXcgQm9keSgkZWxlbWVudCk7XG5cbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQm9keTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEJvdW5kcyA9IGZ1bmN0aW9uKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCkge1xuICB0aGlzLnRvcCA9IHRvcDtcbiAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgdGhpcy5ib3R0b20gPSBib3R0b207XG4gIHRoaXMucmlnaHQgPSByaWdodDtcbn07XG5cbkJvdW5kcy5wcm90b3R5cGUgPSB7XG4gIGdldFRvcDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9LFxuXG4gIGdldExlZnQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnQ7XG4gIH0sXG5cbiAgZ2V0Qm90dG9tOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5ib3R0b207XG4gIH0sXG5cbiAgZ2V0UmlnaHQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9LFxuXG4gIGFyZU92ZXJsYXBwaW5nOiBmdW5jdGlvbihib3VuZHMpIHtcbiAgICByZXR1cm4gdGhpcy50b3AgPD0gYm91bmRzLmJvdHRvbVxuICAgICAgICAmJiB0aGlzLmxlZnQgPD0gYm91bmRzLnJpZ2h0XG4gICAgICAgICYmIHRoaXMuYm90dG9tID49IGJvdW5kcy50b3BcbiAgICAgICAgJiYgdGhpcy5yaWdodCA+PSBib3VuZHMubGVmdDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb3VuZHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBCdXR0b24gPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICBpbmhlcml0cyh0aGlzLCBuZXcgRWxlbWVudChzZWxlY3Rvck9yJEVsZW1lbnQpKTtcblxuICBpZiAoY2xpY2tIYW5kbGVyKSB7XG4gICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gIH1cbn07XG5cbkJ1dHRvbi5wcm90b3R5cGUgPSB7XG4gIGNsb25lOiBmdW5jdGlvbihjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEJ1dHRvbi5jbG9uZSh0aGlzLiRlbGVtZW50LCBjbGlja0hhbmRsZXIpOyB9LFxuXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgaGFuZGxlcigpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgfSxcblxuICBvbkRvdWJsZUNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5kYmxjbGljayhmdW5jdGlvbigpIHtcbiAgICAgIGhhbmRsZXIoKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gIH1cbn07XG5cbkJ1dHRvbi5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gIHJldHVybiBFbGVtZW50LmNsb25lKHNlbGVjdG9yT3IkRWxlbWVudCwgQnV0dG9uLCBjbGlja0hhbmRsZXIpO1xufTtcblxuQnV0dG9uLmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gIHZhciAkZWxlbWVudCA9ICQoaHRtbCksXG4gICAgICBidXR0b24gPSBuZXcgQnV0dG9uKCRlbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuXG4gIHJldHVybiBidXR0b247XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1dHRvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnLi4vaW5oZXJpdHMnKTtcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxudmFyIENoZWNrYm94ID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgaW5oZXJpdHModGhpcywgbmV3IEVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KSk7XG5cbiAgaWYgKGNsaWNrSGFuZGxlcikge1xuICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICB9XG59O1xuXG5DaGVja2JveC5wcm90b3R5cGUgPSB7XG4gIGNsb25lOiBmdW5jdGlvbihjbGlja0hhbmRsZXIpIHsgcmV0dXJuIENoZWNrYm94LmNsb25lKHRoaXMuJGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH0sXG5cbiAgb25DbGljazogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY2hlY2tlZCA9IHRoaXMuaXNDaGVja2VkKCk7XG5cbiAgICAgIGhhbmRsZXIoY2hlY2tlZCk7XG4gICAgfS5iaW5kKHRoaXMpKVxuICB9LFxuXG4gIGNoZWNrOiBmdW5jdGlvbihjaGVja2VkKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNoZWNrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIoJ2NoZWNrZWQnKTtcbiAgICB9XG4gIH0sXG5cbiAgaXNDaGVja2VkOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kZWxlbWVudC5pcygnOmNoZWNrZWQnKTtcbiAgfVxufTtcblxuQ2hlY2tib3guY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICByZXR1cm4gRWxlbWVudC5jbG9uZShzZWxlY3Rvck9yJEVsZW1lbnQsIENoZWNrYm94LCBjbGlja0hhbmRsZXIpO1xufTtcblxuQ2hlY2tib3guZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sLCBjbGlja0hhbmRsZXIpIHtcbiAgdmFyICRlbGVtZW50ID0gJChodG1sKSxcbiAgICAgIGNoZWNrYm94ID0gbmV3IENoZWNrYm94KCRlbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuXG4gIHJldHVybiBjaGVja2JveDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hlY2tib3g7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBCb3VuZHMgPSByZXF1aXJlKCcuL2JvdW5kcycpO1xuXG52YXIgRWxlbWVudCA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KTtcbn07XG5cbkVsZW1lbnQucHJvdG90eXBlID0ge1xuICBjbG9uZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNsb25lZEVsZW1lbnQgPSBFbGVtZW50LmNsb25lKHRoaXMuJGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNsb25lZEVsZW1lbnQ7XG4gIH0sXG5cbiAgc2hvdzogZnVuY3Rpb24oKSB7IHRoaXMuJGVsZW1lbnQuc2hvdygpOyB9LFxuICBoaWRlOiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5oaWRlKCk7IH0sXG4gIGVuYWJsZTogZnVuY3Rpb24oKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTsgfSxcbiAgZGlzYWJsZTogZnVuY3Rpb24oKSB7IHRoaXMuJGVsZW1lbnQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTsgfSxcblxuICBnZXRXaWR0aDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LndpZHRoKCk7IH0sXG4gIGdldEhlaWdodDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LmhlaWdodCgpOyB9LFxuICBzZXRXaWR0aDogZnVuY3Rpb24od2lkdGgpIHsgdGhpcy4kZWxlbWVudC53aWR0aCh3aWR0aCk7IH0sXG4gIHNldEhlaWdodDogZnVuY3Rpb24oaGVpZ2h0KSB7IHRoaXMuJGVsZW1lbnQuaGVpZ2h0KGhlaWdodCk7IH0sXG5cbiAgZ2V0Qm91bmRzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgJG9mZnNldCA9IHRoaXMuJGVsZW1lbnQub2Zmc2V0KCksXG4gICAgICAgIHRvcCA9ICRvZmZzZXQudG9wLCAgLy8vXG4gICAgICAgIGxlZnQgPSAkb2Zmc2V0LmxlZnQsICAvLy9cbiAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgIGJvdHRvbSA9IHRvcCArIGhlaWdodCxcbiAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGgsXG4gICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH0sXG5cbiAgYWRkQXR0cmlidXRlOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkgeyB0aGlzLiRlbGVtZW50LmF0dHIobmFtZSwgdmFsdWUpOyB9LFxuICByZW1vdmVBdHRyaWJ1dGU6IGZ1bmN0aW9uKG5hbWUpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKG5hbWUpOyB9LFxuXG4gIHByZXBlbmRCZWZvcmU6IGZ1bmN0aW9uKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5iZWZvcmUoZWxlbWVudC4kZWxlbWVudCk7IH0sXG4gIGFwcGVuZEFmdGVyOiBmdW5jdGlvbihlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYWZ0ZXIoZWxlbWVudC4kZWxlbWVudCk7IH0sXG4gIHByZXBlbmQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5wcmVwZW5kKGVsZW1lbnQuJGVsZW1lbnQpOyB9LFxuICBhcHBlbmQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5hcHBlbmQoZWxlbWVudC4kZWxlbWVudCk7IH0sXG4gIHJlbW92ZTogZnVuY3Rpb24oKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlKCk7IH0sXG5cbiAgaGFzQ2xhc3M6IGZ1bmN0aW9uKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhjbGFzc05hbWUpOyB9LFxuICBhZGRDbGFzczogZnVuY3Rpb24oY2xhc3NOYW1lKSB7IHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoY2xhc3NOYW1lKTsgfSxcbiAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uKGNsYXNzTmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7IH0sXG4gIHJlbW92ZUNsYXNzZXM6IGZ1bmN0aW9uKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCk7IH0sXG5cbiAgaHRtbDogZnVuY3Rpb24oaHRtbCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lmh0bWwoaHRtbClcbiAgICB9IGVsc2Uge1xuICAgICAgaHRtbCA9IHRoaXMuJGVsZW1lbnQuaHRtbCgpO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gIH0sXG5cbiAgY3NzOiBmdW5jdGlvbihjc3MpIHtcbiAgICBpZiAodHlwZW9mIGNzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBwcm9wZXJ0eU5hbWUgPSBjc3M7XG5cbiAgICAgIGNzcyA9IHRoaXMuJGVsZW1lbnQuY3NzKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuY3NzKGNzcyk7XG4gICAgfVxuICB9LFxuXG4gIG9uOiBmdW5jdGlvbihldmVudHMsIGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbihldmVudHMsIGhhbmRsZXIpOyB9LFxuXG4gIG9uTW91c2VVcDogZnVuY3Rpb24oaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZXVwJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9LFxuICBvbk1vdXNlRG93bjogZnVuY3Rpb24oaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZWRvd24nLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH0sXG4gIG9uTW91c2VPdmVyOiBmdW5jdGlvbihoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNlb3ZlcicsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpKTsgfSxcbiAgb25Nb3VzZU91dDogZnVuY3Rpb24oaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZW91dCcsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpKTsgfSxcbiAgb25Nb3VzZU1vdmU6IGZ1bmN0aW9uKGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2Vtb3ZlJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9XG59O1xuXG5FbGVtZW50LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCkge1xuICB2YXIgJGVsZW1lbnQgPSAkKGh0bWwpLFxuICAgICAgZWxlbWVudCA9IG5ldyBFbGVtZW50KCRlbGVtZW50KTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbkVsZW1lbnQuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgdmFyIGNsb25lZCRFbGVtZW50ID0gJGVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KS5jbG9uZSgpLFxuICAgICAgQ2xhc3MsXG4gICAgICBhcmdzO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgQ2xhc3MgPSBFbGVtZW50O1xuICAgIGFyZ3MgPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBDbGFzcyA9IGFyZ3VtZW50c1sxXTsgLy8vXG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDIpOyAgLy8vXG4gIH1cblxuICBhcmdzLnVuc2hpZnQoY2xvbmVkJEVsZW1lbnQpO1xuXG4gIGFyZ3MudW5zaGlmdChudWxsKTsgLy8vXG5cbiAgdmFyIGNsb25lZEluc3RhbmNlID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgYXJncykpOyAgLy8vXG5cbiAgcmV0dXJuIGNsb25lZEluc3RhbmNlO1xufTtcblxuRWxlbWVudC5MRUZUX01PVVNFX0JVVFRPTiA9IDE7XG5FbGVtZW50Lk1JRERMRV9NT1VTRV9CVVRUT04gPSAyO1xuRWxlbWVudC5SSUdIVF9NT1VTRV9CVVRUT04gPSAzO1xuXG5mdW5jdGlvbiByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBtb3VzZVRvcCA9IGV2ZW50LnBhZ2VZLCAgLy8vXG4gICAgICAgIG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAvLy9cbiAgICAgICAgbW91c2VCdXR0b24gPSBldmVudC53aGljaDsgLy8vXG5cbiAgICBoYW5kbGVyKG1vdXNlVG9wLCBtb3VzZUxlZnQsIG1vdXNlQnV0dG9uKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiAkZWxlbWVudChzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgdmFyICRlbGVtZW50O1xuXG4gIGlmIChzZWxlY3Rvck9yJEVsZW1lbnQgaW5zdGFuY2VvZiBqUXVlcnkpIHtcbiAgICAkZWxlbWVudCA9IHNlbGVjdG9yT3IkRWxlbWVudDtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3JPciRFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICRlbGVtZW50ID0gJChzZWxlY3Rvck9yJEVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJlbnQkRWxlbWVudCA9IHNlbGVjdG9yT3IkRWxlbWVudFswXSwgLy8vXG4gICAgICAgIGNoaWxkU2VsZWN0b3IgPSBzZWxlY3Rvck9yJEVsZW1lbnRbMV07XG5cbiAgICAkZWxlbWVudCA9IHBhcmVudCRFbGVtZW50LmZpbmQoY2hpbGRTZWxlY3Rvcik7XG4gIH1cblxuICByZXR1cm4gJGVsZW1lbnQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBJbnB1dCA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICBpbmhlcml0cyh0aGlzLCBuZXcgRWxlbWVudChzZWxlY3Rvck9yJEVsZW1lbnQpKTtcbn07XG5cbklucHV0LnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gSW5wdXQuY2xvbmUodGhpcy4kZWxlbWVudCk7IH0sXG5cbiAgZ2V0VmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuJGVsZW1lbnQudmFsKCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG5cbiAgc2V0VmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy4kZWxlbWVudC52YWwodmFsdWUpO1xuICB9LFxuXG4gIHNlbGVjdDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kZWxlbWVudC5zZWxlY3QoKTtcbiAgfVxufTtcblxuSW5wdXQuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoc2VsZWN0b3JPciRFbGVtZW50LCBJbnB1dCk7XG59O1xuXG5JbnB1dC5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgdmFyICRlbGVtZW50ID0gJChodG1sKSxcbiAgICAgIGlucHV0ID0gbmV3IElucHV0KCRlbGVtZW50KTtcblxuICByZXR1cm4gaW5wdXQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG52YXIgTGluayA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkpO1xuXG4gIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgfVxufTtcblxuTGluay5wcm90b3R5cGUgPSB7XG4gIGNsb25lOiBmdW5jdGlvbihjbGlja0hhbmRsZXIpIHsgcmV0dXJuIExpbmsuY2xvbmUodGhpcy4kZWxlbWVudCwgY2xpY2tIYW5kbGVyKTsgfSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocmVmID0gdGhpcy4kZWxlbWVudC5hdHRyKCdocmVmJyk7XG5cbiAgICAgIGhhbmRsZXIoaHJlZik7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LmJpbmQodGhpcykpXG4gIH1cbn07XG5cbkxpbmsuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICByZXR1cm4gRWxlbWVudC5jbG9uZShzZWxlY3Rvck9yJEVsZW1lbnQsIExpbmssIGNsaWNrSGFuZGxlcik7XG59O1xuXG5MaW5rLmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gIHZhciAkZWxlbWVudCA9ICQoaHRtbCksXG4gICAgICBsaW5rID0gbmV3IExpbmsoJGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG5cbiAgcmV0dXJuICBsaW5rO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG52YXIgU2VsZWN0ID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkpO1xuXG4gIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgfVxufTtcblxuU2VsZWN0LnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIFNlbGVjdC5jbG9uZSh0aGlzLiRlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfSxcblxuICBvbkNoYW5nZTogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSB0aGlzLmdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKTtcblxuICAgICAgaGFuZGxlcihzZWxlY3RlZE9wdGlvblZhbHVlKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LFxuXG4gIGdldFNlbGVjdGVkT3B0aW9uVmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkc2VsZWN0ZWRPcHRpb24gPSB0aGlzLiRlbGVtZW50LmZpbmQoJzpzZWxlY3RlZCcpLFxuICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlID0gJHNlbGVjdGVkT3B0aW9uLnZhbCgpO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9uVmFsdWU7XG4gIH0sXG5cbiAgc2V0U2VsZWN0ZWRPcHRpb25CeVZhbHVlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuJGVsZW1lbnQudmFsKHZhbHVlKTtcbiAgfVxufTtcblxuU2VsZWN0LmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gIHJldHVybiBFbGVtZW50LmNsb25lKHNlbGVjdG9yT3IkRWxlbWVudCwgU2VsZWN0LCBjaGFuZ2VIYW5kbGVyKTtcbn07XG5cblNlbGVjdC5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgdmFyICRlbGVtZW50ID0gJChodG1sKSxcbiAgICAgIHNlbGVjdCA9IG5ldyBTZWxlY3QoJGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuXG4gIHJldHVybiAgc2VsZWN0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWxlY3Q7XG4iXX0=
