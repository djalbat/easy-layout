(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.easyui = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./lib/body":3,"./lib/bounds":4,"./lib/button":5,"./lib/checkbox":6,"./lib/div":7,"./lib/element":8,"./lib/input":9,"./lib/link":10,"./lib/select":11}],2:[function(require,module,exports){
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

},{"../inherits":2,"./element":8}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{"../inherits":2,"./element":8}],6:[function(require,module,exports){
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

},{"../inherits":2,"./element":8}],7:[function(require,module,exports){
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

},{"../inherits":2,"./element":8}],8:[function(require,module,exports){
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

},{"./bounds":4}],9:[function(require,module,exports){
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

},{"../inherits":2,"./element":8}],10:[function(require,module,exports){
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

},{"../inherits":2,"./element":8}],11:[function(require,module,exports){
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

},{"../inherits":2,"./element":8}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImluaGVyaXRzLmpzIiwibGliL2JvZHkuanMiLCJsaWIvYm91bmRzLmpzIiwibGliL2J1dHRvbi5qcyIsImxpYi9jaGVja2JveC5qcyIsImxpYi9kaXYuanMiLCJsaWIvZWxlbWVudC5qcyIsImxpYi9pbnB1dC5qcyIsImxpYi9saW5rLmpzIiwibGliL3NlbGVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50JyksXG4gIEJvdW5kczogcmVxdWlyZSgnLi9saWIvYm91bmRzJyksXG4gIEJvZHk6IHJlcXVpcmUoJy4vbGliL2JvZHknKSxcbiAgRGl2OiByZXF1aXJlKCcuL2xpYi9kaXYnKSxcbiAgTGluazogcmVxdWlyZSgnLi9saWIvbGluaycpLFxuICBJbnB1dDogcmVxdWlyZSgnLi9saWIvaW5wdXQnKSxcbiAgU2VsZWN0OiByZXF1aXJlKCcuL2xpYi9zZWxlY3QnKSxcbiAgQnV0dG9uOiByZXF1aXJlKCcuL2xpYi9idXR0b24nKSxcbiAgQ2hlY2tib3g6IHJlcXVpcmUoJy4vbGliL2NoZWNrYm94Jylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc291cmNlLCBzdXBlck1ldGhvZE5hbWVzKSB7XG4gIHZhciB0YXJnZXRQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KTtcblxuICBpZiAoc291cmNlLiRlbGVtZW50KSB7XG4gICAgc291cmNlLiRlbGVtZW50LmRhdGEoJ2VsZW1lbnQnLCB0YXJnZXQpO1xuICB9XG5cbiAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGFyZ2V0UHJvdG90eXBlW3Byb3BdKSB7XG4gICAgICAgIHRhcmdldFByb3RvdHlwZVtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc3VwZXJNZXRob2ROYW1lcykge1xuICAgIHZhciBzdXBlck1ldGhvZHMgPSB7fTtcblxuICAgIHN1cGVyTWV0aG9kTmFtZXMuZm9yRWFjaChmdW5jdGlvbihzdXBlck1ldGhvZE5hbWUpIHtcbiAgICAgIHN1cGVyTWV0aG9kc1tzdXBlck1ldGhvZE5hbWVdID0gc291cmNlW3N1cGVyTWV0aG9kTmFtZV0uYmluZCh0YXJnZXQpO1xuICAgIH0pO1xuXG4gICAgdGFyZ2V0LnN1cGVyID0gc3VwZXJNZXRob2RzOyAgLy8vXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW5oZXJpdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBCb2R5ID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gIGlmIChzZWxlY3Rvck9yJEVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHNlbGVjdG9yT3IkRWxlbWVudCA9ICdib2R5JztcbiAgfVxuXG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkpO1xufTtcblxuQm9keS5wcm90b3R5cGUgPSB7XG4gIGNsb25lOiBmdW5jdGlvbigpIHsgcmV0dXJuIEJvZHkuY2xvbmUodGhpcy4kZWxlbWVudCk7IH0sXG5cbiAgb25DbGljazogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyKCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICB9LFxuXG4gIG9uRG91YmxlQ2xpY2s6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmRibGNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgaGFuZGxlcigpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgfVxufTtcblxuQm9keS5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICByZXR1cm4gRWxlbWVudC5jbG9uZShCb2R5LCBzZWxlY3Rvck9yJEVsZW1lbnQpO1xufTtcblxuQm9keS5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQm9keSwgaHRtbCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvZHk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBCb3VuZHMgPSBmdW5jdGlvbih0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpIHtcbiAgdGhpcy50b3AgPSB0b3A7XG4gIHRoaXMubGVmdCA9IGxlZnQ7XG4gIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG59O1xuXG5Cb3VuZHMucHJvdG90eXBlID0ge1xuICBnZXRUb3A6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfSxcblxuICBnZXRMZWZ0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9LFxuXG4gIGdldEJvdHRvbTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYm90dG9tO1xuICB9LFxuXG4gIGdldFJpZ2h0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodDtcbiAgfSxcblxuICBhcmVPdmVybGFwcGluZzogZnVuY3Rpb24oYm91bmRzKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wIDw9IGJvdW5kcy5ib3R0b21cbiAgICAgICAgJiYgdGhpcy5sZWZ0IDw9IGJvdW5kcy5yaWdodFxuICAgICAgICAmJiB0aGlzLmJvdHRvbSA+PSBib3VuZHMudG9wXG4gICAgICAgICYmIHRoaXMucmlnaHQgPj0gYm91bmRzLmxlZnQ7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQm91bmRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG52YXIgQnV0dG9uID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgaW5oZXJpdHModGhpcywgbmV3IEVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KSk7XG5cbiAgaWYgKGNsaWNrSGFuZGxlcikge1xuICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICB9XG59O1xuXG5CdXR0b24ucHJvdG90eXBlID0ge1xuICBjbG9uZTogZnVuY3Rpb24oY2xpY2tIYW5kbGVyKSB7IHJldHVybiBCdXR0b24uY2xvbmUodGhpcy4kZWxlbWVudCwgY2xpY2tIYW5kbGVyKTsgfSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIGhhbmRsZXIoKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gIH0sXG5cbiAgb25Eb3VibGVDbGljazogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuZGJsY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyKCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICB9XG59O1xuXG5CdXR0b24uY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICByZXR1cm4gRWxlbWVudC5jbG9uZShCdXR0b24sIHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbn07XG5cbkJ1dHRvbi5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwsIGNsaWNrSGFuZGxlcikge1xuICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChCdXR0b24sIGh0bWwsIGNsaWNrSGFuZGxlcik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1dHRvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnLi4vaW5oZXJpdHMnKTtcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxudmFyIENoZWNrYm94ID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgaW5oZXJpdHModGhpcywgbmV3IEVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KSk7XG5cbiAgaWYgKGNsaWNrSGFuZGxlcikge1xuICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICB9XG59O1xuXG5DaGVja2JveC5wcm90b3R5cGUgPSB7XG4gIGNsb25lOiBmdW5jdGlvbihjbGlja0hhbmRsZXIpIHsgcmV0dXJuIENoZWNrYm94LmNsb25lKHRoaXMuJGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH0sXG5cbiAgb25DbGljazogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY2hlY2tlZCA9IHRoaXMuaXNDaGVja2VkKCk7XG5cbiAgICAgIGhhbmRsZXIoY2hlY2tlZCk7XG4gICAgfS5iaW5kKHRoaXMpKVxuICB9LFxuXG4gIGNoZWNrOiBmdW5jdGlvbihjaGVja2VkKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNoZWNrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIoJ2NoZWNrZWQnKTtcbiAgICB9XG4gIH0sXG5cbiAgaXNDaGVja2VkOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kZWxlbWVudC5pcygnOmNoZWNrZWQnKTtcbiAgfVxufTtcblxuQ2hlY2tib3guY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICByZXR1cm4gRWxlbWVudC5jbG9uZShDaGVja2JveCwgc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpO1xufTtcblxuQ2hlY2tib3guZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sLCBjbGlja0hhbmRsZXIpIHtcbiAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQ2hlY2tib3gsIGh0bWwsIGNsaWNrSGFuZGxlcik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoZWNrYm94O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG52YXIgRGl2ID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkpO1xufTtcblxuRGl2LnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gRGl2LmNsb25lKHRoaXMuJGVsZW1lbnQpOyB9XG59O1xuXG5EaXYuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoRGl2LCBzZWxlY3Rvck9yJEVsZW1lbnQpO1xufTtcblxuRGl2LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCkge1xuICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChEaXYsIGh0bWwpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEaXY7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBCb3VuZHMgPSByZXF1aXJlKCcuL2JvdW5kcycpO1xuXG52YXIgRWxlbWVudCA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KTtcblxuICB0aGlzLiRlbGVtZW50LmRhdGEoJ2VsZW1lbnQnLCB0aGlzKTtcbn07XG5cbkVsZW1lbnQucHJvdG90eXBlID0ge1xuICBjbG9uZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNsb25lZEVsZW1lbnQgPSBFbGVtZW50LmNsb25lKHRoaXMuJGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNsb25lZEVsZW1lbnQ7XG4gIH0sXG5cbiAgc2hvdzogZnVuY3Rpb24oKSB7IHRoaXMuJGVsZW1lbnQuc2hvdygpOyB9LFxuICBoaWRlOiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5oaWRlKCk7IH0sXG4gIGVuYWJsZTogZnVuY3Rpb24oKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTsgfSxcbiAgZGlzYWJsZTogZnVuY3Rpb24oKSB7IHRoaXMuJGVsZW1lbnQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTsgfSxcblxuICBnZXRXaWR0aDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LndpZHRoKCk7IH0sXG4gIGdldEhlaWdodDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LmhlaWdodCgpOyB9LFxuICBzZXRXaWR0aDogZnVuY3Rpb24od2lkdGgpIHsgdGhpcy4kZWxlbWVudC53aWR0aCh3aWR0aCk7IH0sXG4gIHNldEhlaWdodDogZnVuY3Rpb24oaGVpZ2h0KSB7IHRoaXMuJGVsZW1lbnQuaGVpZ2h0KGhlaWdodCk7IH0sXG5cbiAgZ2V0Qm91bmRzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgJG9mZnNldCA9IHRoaXMuJGVsZW1lbnQub2Zmc2V0KCksXG4gICAgICAgIHRvcCA9ICRvZmZzZXQudG9wLCAgLy8vXG4gICAgICAgIGxlZnQgPSAkb2Zmc2V0LmxlZnQsICAvLy9cbiAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgIGJvdHRvbSA9IHRvcCArIGhlaWdodCxcbiAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGgsXG4gICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH0sXG5cbiAgZ2V0QXR0cmlidXRlOiBmdW5jdGlvbihuYW1lKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LmF0dHIobmFtZSk7IH0sXG4gIGFkZEF0dHJpYnV0ZTogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHsgdGhpcy4kZWxlbWVudC5hdHRyKG5hbWUsIHZhbHVlKTsgfSxcbiAgcmVtb3ZlQXR0cmlidXRlOiBmdW5jdGlvbihuYW1lKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cihuYW1lKTsgfSxcblxuICBwcmVwZW5kQmVmb3JlOiBmdW5jdGlvbihlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYmVmb3JlKGVsZW1lbnQuJGVsZW1lbnQpOyB9LFxuICBhcHBlbmRBZnRlcjogZnVuY3Rpb24oZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LmFmdGVyKGVsZW1lbnQuJGVsZW1lbnQpOyB9LFxuICBwcmVwZW5kOiBmdW5jdGlvbihlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQucHJlcGVuZChlbGVtZW50LiRlbGVtZW50KTsgfSxcbiAgYXBwZW5kOiBmdW5jdGlvbihlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYXBwZW5kKGVsZW1lbnQuJGVsZW1lbnQpOyB9LFxuICByZW1vdmU6IGZ1bmN0aW9uKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZSgpOyB9LFxuXG4gIGhhc0NsYXNzOiBmdW5jdGlvbihjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lKTsgfSxcbiAgYWRkQ2xhc3M6IGZ1bmN0aW9uKGNsYXNzTmFtZSkgeyB0aGlzLiRlbGVtZW50LmFkZENsYXNzKGNsYXNzTmFtZSk7IH0sXG4gIHJlbW92ZUNsYXNzOiBmdW5jdGlvbihjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpOyB9LFxuICByZW1vdmVDbGFzc2VzOiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygpOyB9LFxuXG4gIGh0bWw6IGZ1bmN0aW9uKGh0bWwpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy4kZWxlbWVudC5odG1sKGh0bWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIGh0bWwgPSB0aGlzLiRlbGVtZW50Lmh0bWwoKTtcblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICB9LFxuXG4gIGNzczogZnVuY3Rpb24oY3NzKSB7XG4gICAgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgcHJvcGVydHlOYW1lID0gY3NzO1xuXG4gICAgICBjc3MgPSB0aGlzLiRlbGVtZW50LmNzcyhwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmNzcyhjc3MpO1xuICAgIH1cbiAgfSxcblxuICBmaW5kRWxlbWVudHM6IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgdmFyIGZvdW5kRE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LmZpbmQoc2VsZWN0b3IpLFxuICAgICAgICBmb3VuZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZm91bmRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZm91bmRFbGVtZW50cztcbiAgfSxcblxuICBjaGlsZEVsZW1lbnRzOiBmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIHZhciBjaGlsZERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5jaGlsZHJlbihzZWxlY3RvciksXG4gICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhjaGlsZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9LFxuXG4gIG9uOiBmdW5jdGlvbihldmVudHMsIGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbihldmVudHMsIGhhbmRsZXIpOyB9LFxuXG4gIG9uTW91c2VVcDogZnVuY3Rpb24oaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZXVwJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9LFxuICBvbk1vdXNlRG93bjogZnVuY3Rpb24oaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZWRvd24nLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH0sXG4gIG9uTW91c2VPdmVyOiBmdW5jdGlvbihoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNlb3ZlcicsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpKTsgfSxcbiAgb25Nb3VzZU91dDogZnVuY3Rpb24oaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZW91dCcsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpKTsgfSxcbiAgb25Nb3VzZU1vdmU6IGZ1bmN0aW9uKGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2Vtb3ZlJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9XG59O1xuXG5FbGVtZW50LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCkge1xuICB2YXIgQ2xhc3MsXG4gICAgICBhcmdzO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgQ2xhc3MgPSBFbGVtZW50O1xuICAgIGFyZ3MgPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBDbGFzcyA9IGFyZ3VtZW50c1swXTtcbiAgICBodG1sID0gYXJndW1lbnRzWzFdO1xuICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICB9XG5cbiAgdmFyICRodG1sRWxlbWVudCA9ICQoaHRtbCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlKENsYXNzLCAkaHRtbEVsZW1lbnQsIGFyZ3MpO1xufTtcblxuRWxlbWVudC5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICB2YXIgQ2xhc3MsXG4gICAgICBhcmdzO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgQ2xhc3MgPSBFbGVtZW50O1xuICAgIGFyZ3MgPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBDbGFzcyA9IGFyZ3VtZW50c1swXTtcbiAgICBzZWxlY3Rvck9yJEVsZW1lbnQgPSBhcmd1bWVudHNbMV07XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gIH1cblxuICB2YXIgJGNsb25lZEVsZW1lbnQgPSAkZWxlbWVudChzZWxlY3Rvck9yJEVsZW1lbnQpLmNsb25lKCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlKENsYXNzLCAkY2xvbmVkRWxlbWVudCwgYXJncyk7XG59O1xuXG5FbGVtZW50LkxFRlRfTU9VU0VfQlVUVE9OID0gMTtcbkVsZW1lbnQuTUlERExFX01PVVNFX0JVVFRPTiA9IDI7XG5FbGVtZW50LlJJR0hUX01PVVNFX0JVVFRPTiA9IDM7XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikge1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgbW91c2VUb3AgPSBldmVudC5wYWdlWSwgIC8vL1xuICAgICAgICBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgLy8vXG4gICAgICAgIG1vdXNlQnV0dG9uID0gZXZlbnQud2hpY2g7IC8vL1xuXG4gICAgaGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0LCBtb3VzZUJ1dHRvbik7XG4gIH07XG59XG5cbmZ1bmN0aW9uICRlbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICB2YXIgJGVsZW1lbnQ7XG5cbiAgaWYgKHNlbGVjdG9yT3IkRWxlbWVudCBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgICRlbGVtZW50ID0gc2VsZWN0b3JPciRFbGVtZW50O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxlY3Rvck9yJEVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgJGVsZW1lbnQgPSAkKHNlbGVjdG9yT3IkRWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcmVudCRFbGVtZW50ID0gc2VsZWN0b3JPciRFbGVtZW50WzBdLCAvLy9cbiAgICAgICAgY2hpbGRTZWxlY3RvciA9IHNlbGVjdG9yT3IkRWxlbWVudFsxXTtcblxuICAgICRlbGVtZW50ID0gcGFyZW50JEVsZW1lbnQuZmluZChjaGlsZFNlbGVjdG9yKTtcbiAgfVxuXG4gIHJldHVybiAkZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaW5zdGFuY2UoQ2xhc3MsICRlbGVtZW50LCBhcmdzKSB7XG4gIGFyZ3MudW5zaGlmdCgkZWxlbWVudCk7XG5cbiAgYXJncy51bnNoaWZ0KG51bGwpOyAvLy9cblxuICB2YXIgaW5zdGFuY2UgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCBhcmdzKSk7ICAvLy9cblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzKSB7XG4gIHZhciBlbGVtZW50cyA9IFtdLFxuICAgICAgZG9tRWxlbWVudHNMZW5ndGggPSBkb21FbGVtZW50cy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb21FbGVtZW50c0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRvbUVsZW1lbnQgPSBkb21FbGVtZW50c1tpXSxcbiAgICAgICAgJGVsZW1lbnQgPSAkKGRvbUVsZW1lbnQpLFxuICAgICAgICBlbGVtZW50ID0gJGVsZW1lbnQuZGF0YSgnZWxlbWVudCcpO1xuXG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG52YXIgSW5wdXQgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgaW5oZXJpdHModGhpcywgbmV3IEVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KSk7XG5cbiAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICB9XG59O1xuXG5JbnB1dC5wcm90b3R5cGUgPSB7XG4gIGNsb25lOiBmdW5jdGlvbigpIHsgcmV0dXJuIElucHV0LmNsb25lKHRoaXMuJGVsZW1lbnQpOyB9LFxuXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cbiAgICAgIGhhbmRsZXIodmFsdWUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgZ2V0VmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuJGVsZW1lbnQudmFsKCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG5cbiAgc2V0VmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy4kZWxlbWVudC52YWwodmFsdWUpO1xuICB9LFxuXG4gIHNlbGVjdDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kZWxlbWVudC5zZWxlY3QoKTtcbiAgfVxufTtcblxuSW5wdXQuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoSW5wdXQsIHNlbGVjdG9yT3IkRWxlbWVudCk7XG59O1xuXG5JbnB1dC5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoSW5wdXQsIGh0bWwpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnLi4vaW5oZXJpdHMnKTtcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxudmFyIExpbmsgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICBpbmhlcml0cyh0aGlzLCBuZXcgRWxlbWVudChzZWxlY3Rvck9yJEVsZW1lbnQpKTtcblxuICBpZiAoY2xpY2tIYW5kbGVyKSB7XG4gICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gIH1cbn07XG5cbkxpbmsucHJvdG90eXBlID0ge1xuICBjbG9uZTogZnVuY3Rpb24oY2xpY2tIYW5kbGVyKSB7IHJldHVybiBMaW5rLmNsb25lKHRoaXMuJGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH0sXG5cbiAgb25DbGljazogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHJlZiA9IHRoaXMuJGVsZW1lbnQuYXR0cignaHJlZicpO1xuXG4gICAgICBoYW5kbGVyKGhyZWYpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfS5iaW5kKHRoaXMpKVxuICB9XG59O1xuXG5MaW5rLmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoTGluaywgc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpO1xufTtcblxuTGluay5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwsIGNsaWNrSGFuZGxlcikge1xuICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChMaW5rLCBodG1sLCBjbGlja0hhbmRsZXIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG52YXIgU2VsZWN0ID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkpO1xuXG4gIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgfVxufTtcblxuU2VsZWN0LnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIFNlbGVjdC5jbG9uZSh0aGlzLiRlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfSxcblxuICBvbkNoYW5nZTogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSB0aGlzLmdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKTtcblxuICAgICAgaGFuZGxlcihzZWxlY3RlZE9wdGlvblZhbHVlKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LFxuXG4gIGdldFNlbGVjdGVkT3B0aW9uVmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkc2VsZWN0ZWRPcHRpb24gPSB0aGlzLiRlbGVtZW50LmZpbmQoJzpzZWxlY3RlZCcpLFxuICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlID0gJHNlbGVjdGVkT3B0aW9uLnZhbCgpO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9uVmFsdWU7XG4gIH0sXG5cbiAgc2V0U2VsZWN0ZWRPcHRpb25CeVZhbHVlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuJGVsZW1lbnQudmFsKHZhbHVlKTtcbiAgfVxufTtcblxuU2VsZWN0LmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gIHJldHVybiBFbGVtZW50LmNsb25lKFNlbGVjdCwgc2VsZWN0b3JPciRFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbn07XG5cblNlbGVjdC5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoU2VsZWN0LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0O1xuIl19
