(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.easyui = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./lib/body":3,"./lib/bounds":4,"./lib/button":5,"./lib/checkbox":6,"./lib/element":7,"./lib/input":8,"./lib/link":9,"./lib/select":10}],2:[function(require,module,exports){
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
  return Element.clone(selectorOr$Element, Body);
};

Body.fromHTML = function(html) {
  return Element.fromHTML(html, Body);
};

module.exports = Body;

},{"../inherits":2,"./element":7}],4:[function(require,module,exports){
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
  return Element.clone(selectorOr$Element, Button, clickHandler);
};

Button.fromHTML = function(html, clickHandler) {
  return Element.fromHTML(html, Button, clickHandler);
};

module.exports = Button;

},{"../inherits":2,"./element":7}],6:[function(require,module,exports){
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
  return Element.fromHTML(html, Checkbox, clickHandler);
};

module.exports = Checkbox;

},{"../inherits":2,"./element":7}],7:[function(require,module,exports){
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

  childElements: function(selector) {
    var childDOMElements = this.$element.children(selector),  ///
        childDOMElementsLength = childDOMElements.length;

    var childElements = [];

    for (var i = 0; i < childDOMElementsLength; i++) {
      var childDOMElement = childDOMElements[i],
          $childElement = $(childDOMElement),
          childElement = $childElement.data('element');

      if (childElement) {
        childElements.push(childElement);
      }
    }

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
  var $htmlElement = $(html);

  return instance($htmlElement, arguments);
};

Element.clone = function(selectorOr$Element) {
  var $clonedElement = $element(selectorOr$Element).clone();

  return instance($clonedElement, arguments);
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

function instance($element, args) {
  var Class;

  if (args.length === 1) {
    Class = Element;
    args = [];
  } else {
    Class = args[1]; ///
    args = Array.prototype.splice.call(args, 2);  ///
  }

  args.unshift($element);

  args.unshift(null); ///

  var instance = new (Function.prototype.bind.apply(Class, args));  ///

  return instance;
}

},{"./bounds":4}],8:[function(require,module,exports){
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
  return Element.clone(selectorOr$Element, Input);
};

Input.fromHTML = function(html) {
  return Element.fromHTML(html, Input);
};

module.exports = Input;

},{"../inherits":2,"./element":7}],9:[function(require,module,exports){
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
  return Element.fromHTML(html, Link, clickHandler);
};

module.exports = Link;

},{"../inherits":2,"./element":7}],10:[function(require,module,exports){
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
  return Element.fromHTML(html, Select, changeHandler);
};

module.exports = Select;

},{"../inherits":2,"./element":7}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImluaGVyaXRzLmpzIiwibGliL2JvZHkuanMiLCJsaWIvYm91bmRzLmpzIiwibGliL2J1dHRvbi5qcyIsImxpYi9jaGVja2JveC5qcyIsImxpYi9lbGVtZW50LmpzIiwibGliL2lucHV0LmpzIiwibGliL2xpbmsuanMiLCJsaWIvc2VsZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRWxlbWVudDogcmVxdWlyZSgnLi9saWIvZWxlbWVudCcpLFxuICBCb3VuZHM6IHJlcXVpcmUoJy4vbGliL2JvdW5kcycpLFxuICBCb2R5OiByZXF1aXJlKCcuL2xpYi9ib2R5JyksXG4gIExpbms6IHJlcXVpcmUoJy4vbGliL2xpbmsnKSxcbiAgSW5wdXQ6IHJlcXVpcmUoJy4vbGliL2lucHV0JyksXG4gIFNlbGVjdDogcmVxdWlyZSgnLi9saWIvc2VsZWN0JyksXG4gIEJ1dHRvbjogcmVxdWlyZSgnLi9saWIvYnV0dG9uJyksXG4gIENoZWNrYm94OiByZXF1aXJlKCcuL2xpYi9jaGVja2JveCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbih0YXJnZXQsIHNvdXJjZSwgc3VwZXJNZXRob2ROYW1lcykge1xuICB2YXIgdGFyZ2V0UHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCk7XG5cbiAgaWYgKHNvdXJjZS4kZWxlbWVudCkge1xuICAgIHNvdXJjZS4kZWxlbWVudC5kYXRhKCdlbGVtZW50JywgdGFyZ2V0KTtcbiAgfVxuXG4gIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgdGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRhcmdldFByb3RvdHlwZVtwcm9wXSkge1xuICAgICAgICB0YXJnZXRQcm90b3R5cGVbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHN1cGVyTWV0aG9kTmFtZXMpIHtcbiAgICB2YXIgc3VwZXJNZXRob2RzID0ge307XG5cbiAgICBzdXBlck1ldGhvZE5hbWVzLmZvckVhY2goZnVuY3Rpb24oc3VwZXJNZXRob2ROYW1lKSB7XG4gICAgICBzdXBlck1ldGhvZHNbc3VwZXJNZXRob2ROYW1lXSA9IHNvdXJjZVtzdXBlck1ldGhvZE5hbWVdLmJpbmQodGFyZ2V0KTtcbiAgICB9KTtcblxuICAgIHRhcmdldC5zdXBlciA9IHN1cGVyTWV0aG9kczsgIC8vL1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGluaGVyaXRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG52YXIgQm9keSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICBpZiAoc2VsZWN0b3JPciRFbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICBzZWxlY3Rvck9yJEVsZW1lbnQgPSAnYm9keSc7XG4gIH1cblxuICBpbmhlcml0cyh0aGlzLCBuZXcgRWxlbWVudChzZWxlY3Rvck9yJEVsZW1lbnQpKTtcbn07XG5cbkJvZHkucHJvdG90eXBlID0ge1xuICBjbG9uZTogZnVuY3Rpb24oKSB7IHJldHVybiBCb2R5LmNsb25lKHRoaXMuJGVsZW1lbnQpOyB9LFxuXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgaGFuZGxlcigpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgfSxcblxuICBvbkRvdWJsZUNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5kYmxjbGljayhmdW5jdGlvbigpIHtcbiAgICAgIGhhbmRsZXIoKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gIH1cbn07XG5cbkJvZHkuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoc2VsZWN0b3JPciRFbGVtZW50LCBCb2R5KTtcbn07XG5cbkJvZHkuZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sKSB7XG4gIHJldHVybiBFbGVtZW50LmZyb21IVE1MKGh0bWwsIEJvZHkpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2R5O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQm91bmRzID0gZnVuY3Rpb24odG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KSB7XG4gIHRoaXMudG9wID0gdG9wO1xuICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgdGhpcy5yaWdodCA9IHJpZ2h0O1xufTtcblxuQm91bmRzLnByb3RvdHlwZSA9IHtcbiAgZ2V0VG9wOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50b3A7XG4gIH0sXG5cbiAgZ2V0TGVmdDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfSxcblxuICBnZXRCb3R0b206IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfSxcblxuICBnZXRSaWdodDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHQ7XG4gIH0sXG5cbiAgYXJlT3ZlcmxhcHBpbmc6IGZ1bmN0aW9uKGJvdW5kcykge1xuICAgIHJldHVybiB0aGlzLnRvcCA8PSBib3VuZHMuYm90dG9tXG4gICAgICAgICYmIHRoaXMubGVmdCA8PSBib3VuZHMucmlnaHRcbiAgICAgICAgJiYgdGhpcy5ib3R0b20gPj0gYm91bmRzLnRvcFxuICAgICAgICAmJiB0aGlzLnJpZ2h0ID49IGJvdW5kcy5sZWZ0O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvdW5kcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnLi4vaW5oZXJpdHMnKTtcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxudmFyIEJ1dHRvbiA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkpO1xuXG4gIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgfVxufTtcblxuQnV0dG9uLnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gQnV0dG9uLmNsb25lKHRoaXMuJGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH0sXG5cbiAgb25DbGljazogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyKCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICB9LFxuXG4gIG9uRG91YmxlQ2xpY2s6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmRibGNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgaGFuZGxlcigpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgfVxufTtcblxuQnV0dG9uLmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoc2VsZWN0b3JPciRFbGVtZW50LCBCdXR0b24sIGNsaWNrSGFuZGxlcik7XG59O1xuXG5CdXR0b24uZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sLCBjbGlja0hhbmRsZXIpIHtcbiAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoaHRtbCwgQnV0dG9uLCBjbGlja0hhbmRsZXIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCdXR0b247XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBDaGVja2JveCA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkpO1xuXG4gIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgfVxufTtcblxuQ2hlY2tib3gucHJvdG90eXBlID0ge1xuICBjbG9uZTogZnVuY3Rpb24oY2xpY2tIYW5kbGVyKSB7IHJldHVybiBDaGVja2JveC5jbG9uZSh0aGlzLiRlbGVtZW50LCBjbGlja0hhbmRsZXIpOyB9LFxuXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZCgpO1xuXG4gICAgICBoYW5kbGVyKGNoZWNrZWQpO1xuICAgIH0uYmluZCh0aGlzKSlcbiAgfSxcblxuICBjaGVjazogZnVuY3Rpb24oY2hlY2tlZCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjaGVja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKCdjaGVja2VkJyk7XG4gICAgfVxuICB9LFxuXG4gIGlzQ2hlY2tlZDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaXMoJzpjaGVja2VkJyk7XG4gIH1cbn07XG5cbkNoZWNrYm94LmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoc2VsZWN0b3JPciRFbGVtZW50LCBDaGVja2JveCwgY2xpY2tIYW5kbGVyKTtcbn07XG5cbkNoZWNrYm94LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gIHJldHVybiBFbGVtZW50LmZyb21IVE1MKGh0bWwsIENoZWNrYm94LCBjbGlja0hhbmRsZXIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGVja2JveDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEJvdW5kcyA9IHJlcXVpcmUoJy4vYm91bmRzJyk7XG5cbnZhciBFbGVtZW50ID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudChzZWxlY3Rvck9yJEVsZW1lbnQpO1xuXG4gIHRoaXMuJGVsZW1lbnQuZGF0YSgnZWxlbWVudCcsIHRoaXMpO1xufTtcblxuRWxlbWVudC5wcm90b3R5cGUgPSB7XG4gIGNsb25lOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2xvbmVkRWxlbWVudCA9IEVsZW1lbnQuY2xvbmUodGhpcy4kZWxlbWVudCk7XG5cbiAgICByZXR1cm4gY2xvbmVkRWxlbWVudDtcbiAgfSxcblxuICBzaG93OiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5zaG93KCk7IH0sXG4gIGhpZGU6IGZ1bmN0aW9uKCkgeyB0aGlzLiRlbGVtZW50LmhpZGUoKTsgfSxcbiAgZW5hYmxlOiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyB9LFxuICBkaXNhYmxlOiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpOyB9LFxuXG4gIGdldFdpZHRoOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQud2lkdGgoKTsgfSxcbiAgZ2V0SGVpZ2h0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaGVpZ2h0KCk7IH0sXG4gIHNldFdpZHRoOiBmdW5jdGlvbih3aWR0aCkgeyB0aGlzLiRlbGVtZW50LndpZHRoKHdpZHRoKTsgfSxcbiAgc2V0SGVpZ2h0OiBmdW5jdGlvbihoZWlnaHQpIHsgdGhpcy4kZWxlbWVudC5oZWlnaHQoaGVpZ2h0KTsgfSxcblxuICBnZXRCb3VuZHM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkb2Zmc2V0ID0gdGhpcy4kZWxlbWVudC5vZmZzZXQoKSxcbiAgICAgICAgdG9wID0gJG9mZnNldC50b3AsICAvLy9cbiAgICAgICAgbGVmdCA9ICRvZmZzZXQubGVmdCwgIC8vL1xuICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICByaWdodCA9IGxlZnQgKyB3aWR0aCxcbiAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfSxcblxuICBhZGRBdHRyaWJ1dGU6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7IHRoaXMuJGVsZW1lbnQuYXR0cihuYW1lLCB2YWx1ZSk7IH0sXG4gIHJlbW92ZUF0dHJpYnV0ZTogZnVuY3Rpb24obmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIobmFtZSk7IH0sXG5cbiAgcHJlcGVuZEJlZm9yZTogZnVuY3Rpb24oZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LmJlZm9yZShlbGVtZW50LiRlbGVtZW50KTsgfSxcbiAgYXBwZW5kQWZ0ZXI6IGZ1bmN0aW9uKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5hZnRlcihlbGVtZW50LiRlbGVtZW50KTsgfSxcbiAgcHJlcGVuZDogZnVuY3Rpb24oZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LnByZXBlbmQoZWxlbWVudC4kZWxlbWVudCk7IH0sXG4gIGFwcGVuZDogZnVuY3Rpb24oZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LmFwcGVuZChlbGVtZW50LiRlbGVtZW50KTsgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmUoKTsgfSxcblxuICBoYXNDbGFzczogZnVuY3Rpb24oY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZSk7IH0sXG4gIGFkZENsYXNzOiBmdW5jdGlvbihjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5hZGRDbGFzcyhjbGFzc05hbWUpOyB9LFxuICByZW1vdmVDbGFzczogZnVuY3Rpb24oY2xhc3NOYW1lKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTsgfSxcbiAgcmVtb3ZlQ2xhc3NlczogZnVuY3Rpb24oKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoKTsgfSxcblxuICBodG1sOiBmdW5jdGlvbihodG1sKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuaHRtbChodG1sKVxuICAgIH0gZWxzZSB7XG4gICAgICBodG1sID0gdGhpcy4kZWxlbWVudC5odG1sKCk7XG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgfSxcblxuICBjc3M6IGZ1bmN0aW9uKGNzcykge1xuICAgIGlmICh0eXBlb2YgY3NzID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHByb3BlcnR5TmFtZSA9IGNzcztcblxuICAgICAgY3NzID0gdGhpcy4kZWxlbWVudC5jc3MocHJvcGVydHlOYW1lKTtcblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kZWxlbWVudC5jc3MoY3NzKTtcbiAgICB9XG4gIH0sXG5cbiAgY2hpbGRFbGVtZW50czogZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICB2YXIgY2hpbGRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4oc2VsZWN0b3IpLCAgLy8vXG4gICAgICAgIGNoaWxkRE9NRWxlbWVudHNMZW5ndGggPSBjaGlsZERPTUVsZW1lbnRzLmxlbmd0aDtcblxuICAgIHZhciBjaGlsZEVsZW1lbnRzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkRE9NRWxlbWVudHNMZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkRE9NRWxlbWVudCA9IGNoaWxkRE9NRWxlbWVudHNbaV0sXG4gICAgICAgICAgJGNoaWxkRWxlbWVudCA9ICQoY2hpbGRET01FbGVtZW50KSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnQgPSAkY2hpbGRFbGVtZW50LmRhdGEoJ2VsZW1lbnQnKTtcblxuICAgICAgaWYgKGNoaWxkRWxlbWVudCkge1xuICAgICAgICBjaGlsZEVsZW1lbnRzLnB1c2goY2hpbGRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfSxcblxuICBvbjogZnVuY3Rpb24oZXZlbnRzLCBoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oZXZlbnRzLCBoYW5kbGVyKTsgfSxcblxuICBvbk1vdXNlVXA6IGZ1bmN0aW9uKGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2V1cCcsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpKTsgfSxcbiAgb25Nb3VzZURvd246IGZ1bmN0aW9uKGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2Vkb3duJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9LFxuICBvbk1vdXNlT3ZlcjogZnVuY3Rpb24oaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZW92ZXInLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH0sXG4gIG9uTW91c2VPdXQ6IGZ1bmN0aW9uKGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2VvdXQnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH0sXG4gIG9uTW91c2VNb3ZlOiBmdW5jdGlvbihoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNlbW92ZScsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpKTsgfVxufTtcblxuRWxlbWVudC5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgdmFyICRodG1sRWxlbWVudCA9ICQoaHRtbCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlKCRodG1sRWxlbWVudCwgYXJndW1lbnRzKTtcbn07XG5cbkVsZW1lbnQuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgdmFyICRjbG9uZWRFbGVtZW50ID0gJGVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KS5jbG9uZSgpO1xuXG4gIHJldHVybiBpbnN0YW5jZSgkY2xvbmVkRWxlbWVudCwgYXJndW1lbnRzKTtcbn07XG5cbkVsZW1lbnQuTEVGVF9NT1VTRV9CVVRUT04gPSAxO1xuRWxlbWVudC5NSURETEVfTU9VU0VfQlVUVE9OID0gMjtcbkVsZW1lbnQuUklHSFRfTU9VU0VfQlVUVE9OID0gMztcblxuZnVuY3Rpb24gcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikge1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgbW91c2VUb3AgPSBldmVudC5wYWdlWSwgIC8vL1xuICAgICAgICBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgLy8vXG4gICAgICAgIG1vdXNlQnV0dG9uID0gZXZlbnQud2hpY2g7IC8vL1xuXG4gICAgaGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0LCBtb3VzZUJ1dHRvbik7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gJGVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gIHZhciAkZWxlbWVudDtcblxuICBpZiAoc2VsZWN0b3JPciRFbGVtZW50IGluc3RhbmNlb2YgalF1ZXJ5KSB7XG4gICAgJGVsZW1lbnQgPSBzZWxlY3Rvck9yJEVsZW1lbnQ7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yT3IkRWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAkZWxlbWVudCA9ICQoc2VsZWN0b3JPciRFbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFyZW50JEVsZW1lbnQgPSBzZWxlY3Rvck9yJEVsZW1lbnRbMF0sIC8vL1xuICAgICAgICBjaGlsZFNlbGVjdG9yID0gc2VsZWN0b3JPciRFbGVtZW50WzFdO1xuXG4gICAgJGVsZW1lbnQgPSBwYXJlbnQkRWxlbWVudC5maW5kKGNoaWxkU2VsZWN0b3IpO1xuICB9XG5cbiAgcmV0dXJuICRlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpbnN0YW5jZSgkZWxlbWVudCwgYXJncykge1xuICB2YXIgQ2xhc3M7XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgQ2xhc3MgPSBFbGVtZW50O1xuICAgIGFyZ3MgPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBDbGFzcyA9IGFyZ3NbMV07IC8vL1xuICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJncywgMik7ICAvLy9cbiAgfVxuXG4gIGFyZ3MudW5zaGlmdCgkZWxlbWVudCk7XG5cbiAgYXJncy51bnNoaWZ0KG51bGwpOyAvLy9cblxuICB2YXIgaW5zdGFuY2UgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCBhcmdzKSk7ICAvLy9cblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBJbnB1dCA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICBpbmhlcml0cyh0aGlzLCBuZXcgRWxlbWVudChzZWxlY3Rvck9yJEVsZW1lbnQpKTtcblxuICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gIH1cbn07XG5cbklucHV0LnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gSW5wdXQuY2xvbmUodGhpcy4kZWxlbWVudCk7IH0sXG5cbiAgb25DaGFuZ2U6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgICAgaGFuZGxlcih2YWx1ZSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICBnZXRWYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy4kZWxlbWVudC52YWwoKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcblxuICBzZXRWYWx1ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB0aGlzLiRlbGVtZW50LnZhbCh2YWx1ZSk7XG4gIH0sXG5cbiAgc2VsZWN0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRlbGVtZW50LnNlbGVjdCgpO1xuICB9XG59O1xuXG5JbnB1dC5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICByZXR1cm4gRWxlbWVudC5jbG9uZShzZWxlY3Rvck9yJEVsZW1lbnQsIElucHV0KTtcbn07XG5cbklucHV0LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCkge1xuICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChodG1sLCBJbnB1dCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG52YXIgTGluayA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkpO1xuXG4gIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgfVxufTtcblxuTGluay5wcm90b3R5cGUgPSB7XG4gIGNsb25lOiBmdW5jdGlvbihjbGlja0hhbmRsZXIpIHsgcmV0dXJuIExpbmsuY2xvbmUodGhpcy4kZWxlbWVudCwgY2xpY2tIYW5kbGVyKTsgfSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocmVmID0gdGhpcy4kZWxlbWVudC5hdHRyKCdocmVmJyk7XG5cbiAgICAgIGhhbmRsZXIoaHJlZik7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LmJpbmQodGhpcykpXG4gIH1cbn07XG5cbkxpbmsuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICByZXR1cm4gRWxlbWVudC5jbG9uZShzZWxlY3Rvck9yJEVsZW1lbnQsIExpbmssIGNsaWNrSGFuZGxlcik7XG59O1xuXG5MaW5rLmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gIHJldHVybiBFbGVtZW50LmZyb21IVE1MKGh0bWwsIExpbmssIGNsaWNrSGFuZGxlcik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbms7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBTZWxlY3QgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgaW5oZXJpdHModGhpcywgbmV3IEVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KSk7XG5cbiAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICB9XG59O1xuXG5TZWxlY3QucHJvdG90eXBlID0ge1xuICBjbG9uZTogZnVuY3Rpb24oY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gU2VsZWN0LmNsb25lKHRoaXMuJGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9LFxuXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpO1xuXG4gICAgICBoYW5kbGVyKHNlbGVjdGVkT3B0aW9uVmFsdWUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyICRzZWxlY3RlZE9wdGlvbiA9IHRoaXMuJGVsZW1lbnQuZmluZCgnOnNlbGVjdGVkJyksXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSAkc2VsZWN0ZWRPcHRpb24udmFsKCk7XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25WYWx1ZTtcbiAgfSxcblxuICBzZXRTZWxlY3RlZE9wdGlvbkJ5VmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy4kZWxlbWVudC52YWwodmFsdWUpO1xuICB9XG59O1xuXG5TZWxlY3QuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoc2VsZWN0b3JPciRFbGVtZW50LCBTZWxlY3QsIGNoYW5nZUhhbmRsZXIpO1xufTtcblxuU2VsZWN0LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChodG1sLCBTZWxlY3QsIGNoYW5nZUhhbmRsZXIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWxlY3Q7XG4iXX0=
