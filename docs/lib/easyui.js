(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.easyui = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {
  Element: require('./lib/element'),
  Bounds: require('./lib/bounds'),
  Link: require('./lib/link'),
  Input: require('./lib/input'),
  Select: require('./lib/select'),
  Button: require('./lib/button'),
  Checkbox: require('./lib/checkbox')
};

},{"./lib/bounds":3,"./lib/button":4,"./lib/checkbox":5,"./lib/element":6,"./lib/input":7,"./lib/link":8,"./lib/select":9}],2:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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
  clone: function() {
    var clonedButton = Button.clone(this);

    return clonedButton;
  },

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

Button.clone = function(selectorOrElement) {
  var cloned$Element = Element.$clone(selectorOrElement),
      clonedButton = new Button(cloned$Element);

  return clonedButton;
};

Button.fromHTML = function(html) {
  var $elementFromHTML = Element.$fromHTML(html),
      buttonFromHTML = new Button($elementFromHTML);

  return  buttonFromHTML;
};

module.exports = Button;

},{"../inherits":2,"./element":6}],5:[function(require,module,exports){
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
  clone: function() {
    var clonedCheckbox = Checkbox.clone(this);

    return clonedCheckbox;
  },

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

Checkbox.clone = function(selectorOrElement) {
  var cloned$Element = Element.$clone(selectorOrElement),
      clonedCheckbox = new Checkbox(cloned$Element);

  return clonedCheckbox;
};

Checkbox.fromHTML = function(html) {
  var $elementFromHTML = Element.$fromHTML(html),
      checkboxFromHTML = new Checkbox($elementFromHTML);

  return  checkboxFromHTML;
};

module.exports = Checkbox;

},{"../inherits":2,"./element":6}],6:[function(require,module,exports){
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
    var clonedElement = Element.clone(this);

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

  children: function(selector) { return this.$element.children(selector); },
  remove: function() { this.$element.remove(); },

  hasClass: function(className) { return this.$element.hasClass(className); },
  addClass: function(className) { this.$element.addClass(className); },
  removeClass: function(className) { this.$element.removeClass(className); },
  removeClasses: function() { this.$element.removeClass(); },

  html: function(html) {
    if (arguments.length === 1) {
      this.$element.html(html)
    } else {
      return this.$element.html()
    }
  },

  css: function(css) {
    if (arguments.length === 1) {
      this.$element.css(css)
    } else {
      return this.$element.css()
    }
  },

  onMouseUp: function(handler) { this.$element.on('mouseup', mouseEventHandler(handler)); },
  onMouseDown: function(handler) { this.$element.on('mousedown', mouseEventHandler(handler)); },
  onMouseOver: function(handler) { this.$element.on('mouseover', mouseEventHandler(handler)); },
  onMouseOut: function(handler) { this.$element.on('mouseout', mouseEventHandler(handler)); },
  onMouseMove: function(handler) { this.$element.on('mousemove', mouseEventHandler(handler)); }
};

function mouseEventHandler(handler) {
  return function(event) {
    var mouseTop = event.pageY,  ///
        mouseLeft = event.pageX; ///

    handler(mouseTop, mouseLeft);
  };
}

Element.$clone = function(selectorOrElement) {
  var $element = typeof selectorOrElement === 'string' ?  ///
        $(selectorOrElement) :  ///
          selectorOrElement.$element;  ///

  var $clonedElement = $element.clone();

  return $clonedElement;
};

Element.$fromHTML = function(html) {
  var $element = $(html);

  return $element;
};

Element.fromHTML = function(html) {
  var $element = Element.$fromHTML(html),
      element = new Element($element);

  return element;
};

Element.clone = function(selectorOrElement) {
  var $element = Element.$clone(selectorOrElement),
      element = new Element($element);

  return element;
};

module.exports = Element;

},{"./bounds":3}],7:[function(require,module,exports){
'use strict';

var inherits = require('../inherits');

var Element = require('./element');

var Input = function(selectorOr$Element) {
  inherits(this, new Element(selectorOr$Element));
};

Input.prototype = {
  clone: function() {
    var clonedInput = Input.clone(this);

    return clonedInput;
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

Input.clone = function(selectorOrElement) {
  var cloned$Element = Element.$clone(selectorOrElement),
      clonedInput = new Input(cloned$Element);

  return clonedInput;
};

Input.fromHTML = function(html) {
  var $elementFromHTML = Element.$fromHTML(html),
      inputFromHTML = new Input($elementFromHTML);

  return  inputFromHTML;
};

module.exports = Input;

},{"../inherits":2,"./element":6}],8:[function(require,module,exports){
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
  clone: function() {
    var clonedLink = Link.clone(this);

    return clonedLink;
  },

  onClick: function(handler) {
    this.$element.click(function() {
      var href = this.$element.attr('href');

      handler(href);

      return false;
    }.bind(this))
  },

  disable: function() {
    this.$element.attr('disabled', true);
  },

  enable: function() {
    this.$element.removeAttr('disabled');
  }
};

Link.clone = function(selectorOrElement) {
  var cloned$Element = Element.$clone(selectorOrElement),
      clonedLink = new Link(cloned$Element);

  return clonedLink;
};

Link.fromHTML = function(html) {
  var $elementFromHTML = Element.$fromHTML(html),
      linkFromHTML = new Link($elementFromHTML);

  return  linkFromHTML;
};

module.exports = Link;

},{"../inherits":2,"./element":6}],9:[function(require,module,exports){
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
  clone: function() {
    var clonedSelect = Select.clone(this);

    return clonedSelect;
  },

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

Select.clone = function(selectorOrElement) {
  var cloned$Element = Element.$clone(selectorOrElement),
      clonedSelect = new Select(cloned$Element);

  return clonedSelect;
};

Select.fromHTML = function(html) {
  var $elementFromHTML = Element.$fromHTML(html),
      selectFromHTML = new Select($elementFromHTML);

  return  selectFromHTML;
};

module.exports = Select;

},{"../inherits":2,"./element":6}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImluaGVyaXRzLmpzIiwibGliL2JvdW5kcy5qcyIsImxpYi9idXR0b24uanMiLCJsaWIvY2hlY2tib3guanMiLCJsaWIvZWxlbWVudC5qcyIsImxpYi9pbnB1dC5qcyIsImxpYi9saW5rLmpzIiwibGliL3NlbGVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50JyksXG4gIEJvdW5kczogcmVxdWlyZSgnLi9saWIvYm91bmRzJyksXG4gIExpbms6IHJlcXVpcmUoJy4vbGliL2xpbmsnKSxcbiAgSW5wdXQ6IHJlcXVpcmUoJy4vbGliL2lucHV0JyksXG4gIFNlbGVjdDogcmVxdWlyZSgnLi9saWIvc2VsZWN0JyksXG4gIEJ1dHRvbjogcmVxdWlyZSgnLi9saWIvYnV0dG9uJyksXG4gIENoZWNrYm94OiByZXF1aXJlKCcuL2xpYi9jaGVja2JveCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbih0YXJnZXQsIHNvdXJjZSkge1xuICB2YXIgdGFyZ2V0UHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCk7XG5cbiAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGFyZ2V0UHJvdG90eXBlW3Byb3BdKSB7XG4gICAgICAgIHRhcmdldFByb3RvdHlwZVtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW5oZXJpdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBCb3VuZHMgPSBmdW5jdGlvbih0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpIHtcbiAgdGhpcy50b3AgPSB0b3A7XG4gIHRoaXMubGVmdCA9IGxlZnQ7XG4gIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG59O1xuXG5Cb3VuZHMucHJvdG90eXBlID0ge1xuICBnZXRUb3A6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfSxcblxuICBnZXRMZWZ0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9LFxuXG4gIGdldEJvdHRvbTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYm90dG9tO1xuICB9LFxuXG4gIGdldFJpZ2h0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodDtcbiAgfSxcblxuICBhcmVPdmVybGFwcGluZzogZnVuY3Rpb24oYm91bmRzKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wIDw9IGJvdW5kcy5ib3R0b21cbiAgICAgICAgJiYgdGhpcy5sZWZ0IDw9IGJvdW5kcy5yaWdodFxuICAgICAgICAmJiB0aGlzLmJvdHRvbSA+PSBib3VuZHMudG9wXG4gICAgICAgICYmIHRoaXMucmlnaHQgPj0gYm91bmRzLmxlZnQ7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQm91bmRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG52YXIgQnV0dG9uID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgaW5oZXJpdHModGhpcywgbmV3IEVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KSk7XG5cbiAgaWYgKGNsaWNrSGFuZGxlcikge1xuICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICB9XG59O1xuXG5CdXR0b24ucHJvdG90eXBlID0ge1xuICBjbG9uZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNsb25lZEJ1dHRvbiA9IEJ1dHRvbi5jbG9uZSh0aGlzKTtcblxuICAgIHJldHVybiBjbG9uZWRCdXR0b247XG4gIH0sXG5cbiAgb25DbGljazogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyKCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICB9LFxuXG4gIG9uRG91YmxlQ2xpY2s6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmRibGNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgaGFuZGxlcigpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgfVxufTtcblxuQnV0dG9uLmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPckVsZW1lbnQpIHtcbiAgdmFyIGNsb25lZCRFbGVtZW50ID0gRWxlbWVudC4kY2xvbmUoc2VsZWN0b3JPckVsZW1lbnQpLFxuICAgICAgY2xvbmVkQnV0dG9uID0gbmV3IEJ1dHRvbihjbG9uZWQkRWxlbWVudCk7XG5cbiAgcmV0dXJuIGNsb25lZEJ1dHRvbjtcbn07XG5cbkJ1dHRvbi5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgdmFyICRlbGVtZW50RnJvbUhUTUwgPSBFbGVtZW50LiRmcm9tSFRNTChodG1sKSxcbiAgICAgIGJ1dHRvbkZyb21IVE1MID0gbmV3IEJ1dHRvbigkZWxlbWVudEZyb21IVE1MKTtcblxuICByZXR1cm4gIGJ1dHRvbkZyb21IVE1MO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCdXR0b247XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBDaGVja2JveCA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkpO1xuXG4gIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgfVxufTtcblxuQ2hlY2tib3gucHJvdG90eXBlID0ge1xuICBjbG9uZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNsb25lZENoZWNrYm94ID0gQ2hlY2tib3guY2xvbmUodGhpcyk7XG5cbiAgICByZXR1cm4gY2xvbmVkQ2hlY2tib3g7XG4gIH0sXG5cbiAgb25DbGljazogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY2hlY2tlZCA9IHRoaXMuaXNDaGVja2VkKCk7XG5cbiAgICAgIGhhbmRsZXIoY2hlY2tlZCk7XG4gICAgfS5iaW5kKHRoaXMpKVxuICB9LFxuXG4gIGNoZWNrOiBmdW5jdGlvbihjaGVja2VkKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNoZWNrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIoJ2NoZWNrZWQnKTtcbiAgICB9XG4gIH0sXG5cbiAgaXNDaGVja2VkOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kZWxlbWVudC5pcygnOmNoZWNrZWQnKTtcbiAgfVxufTtcblxuQ2hlY2tib3guY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yRWxlbWVudCkge1xuICB2YXIgY2xvbmVkJEVsZW1lbnQgPSBFbGVtZW50LiRjbG9uZShzZWxlY3Rvck9yRWxlbWVudCksXG4gICAgICBjbG9uZWRDaGVja2JveCA9IG5ldyBDaGVja2JveChjbG9uZWQkRWxlbWVudCk7XG5cbiAgcmV0dXJuIGNsb25lZENoZWNrYm94O1xufTtcblxuQ2hlY2tib3guZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sKSB7XG4gIHZhciAkZWxlbWVudEZyb21IVE1MID0gRWxlbWVudC4kZnJvbUhUTUwoaHRtbCksXG4gICAgICBjaGVja2JveEZyb21IVE1MID0gbmV3IENoZWNrYm94KCRlbGVtZW50RnJvbUhUTUwpO1xuXG4gIHJldHVybiAgY2hlY2tib3hGcm9tSFRNTDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hlY2tib3g7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBCb3VuZHMgPSByZXF1aXJlKCcuL2JvdW5kcycpO1xuXG52YXIgRWxlbWVudCA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICB2YXIgJGVsZW1lbnQgPSB0eXBlb2Ygc2VsZWN0b3JPciRFbGVtZW50ID09PSAnc3RyaW5nJyA/IC8vL1xuICAgICAgICAgICAgICAgICAgICQoc2VsZWN0b3JPciRFbGVtZW50KSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yT3IkRWxlbWVudDsgIC8vL1xuXG4gIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbn07XG5cbkVsZW1lbnQucHJvdG90eXBlID0ge1xuICBjbG9uZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNsb25lZEVsZW1lbnQgPSBFbGVtZW50LmNsb25lKHRoaXMpO1xuXG4gICAgcmV0dXJuIGNsb25lZEVsZW1lbnQ7XG4gIH0sXG5cbiAgc2hvdzogZnVuY3Rpb24oKSB7IHRoaXMuJGVsZW1lbnQuc2hvdygpOyB9LFxuICBoaWRlOiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5oaWRlKCk7IH0sXG4gIGVuYWJsZTogZnVuY3Rpb24oKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTsgfSxcbiAgZGlzYWJsZTogZnVuY3Rpb24oKSB7IHRoaXMuJGVsZW1lbnQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTsgfSxcblxuICBnZXRXaWR0aDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LndpZHRoKCk7IH0sXG4gIGdldEhlaWdodDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LmhlaWdodCgpOyB9LFxuICBzZXRXaWR0aDogZnVuY3Rpb24od2lkdGgpIHsgdGhpcy4kZWxlbWVudC53aWR0aCh3aWR0aCk7IH0sXG4gIHNldEhlaWdodDogZnVuY3Rpb24oaGVpZ2h0KSB7IHRoaXMuJGVsZW1lbnQuaGVpZ2h0KGhlaWdodCk7IH0sXG5cbiAgZ2V0Qm91bmRzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgJG9mZnNldCA9IHRoaXMuJGVsZW1lbnQub2Zmc2V0KCksXG4gICAgICAgIHRvcCA9ICRvZmZzZXQudG9wLCAgLy8vXG4gICAgICAgIGxlZnQgPSAkb2Zmc2V0LmxlZnQsICAvLy9cbiAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgIGJvdHRvbSA9IHRvcCArIGhlaWdodCxcbiAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGgsXG4gICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH0sXG5cbiAgYWRkQXR0cmlidXRlOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkgeyB0aGlzLiRlbGVtZW50LmF0dHIobmFtZSwgdmFsdWUpOyB9LFxuICByZW1vdmVBdHRyaWJ1dGU6IGZ1bmN0aW9uKG5hbWUpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKG5hbWUpOyB9LFxuXG4gIHByZXBlbmRCZWZvcmU6IGZ1bmN0aW9uKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5iZWZvcmUoZWxlbWVudC4kZWxlbWVudCk7IH0sXG4gIGFwcGVuZEFmdGVyOiBmdW5jdGlvbihlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYWZ0ZXIoZWxlbWVudC4kZWxlbWVudCk7IH0sXG4gIHByZXBlbmQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5wcmVwZW5kKGVsZW1lbnQuJGVsZW1lbnQpOyB9LFxuICBhcHBlbmQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5hcHBlbmQoZWxlbWVudC4kZWxlbWVudCk7IH0sXG5cbiAgY2hpbGRyZW46IGZ1bmN0aW9uKHNlbGVjdG9yKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKHNlbGVjdG9yKTsgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmUoKTsgfSxcblxuICBoYXNDbGFzczogZnVuY3Rpb24oY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZSk7IH0sXG4gIGFkZENsYXNzOiBmdW5jdGlvbihjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5hZGRDbGFzcyhjbGFzc05hbWUpOyB9LFxuICByZW1vdmVDbGFzczogZnVuY3Rpb24oY2xhc3NOYW1lKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTsgfSxcbiAgcmVtb3ZlQ2xhc3NlczogZnVuY3Rpb24oKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoKTsgfSxcblxuICBodG1sOiBmdW5jdGlvbihodG1sKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuaHRtbChodG1sKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy4kZWxlbWVudC5odG1sKClcbiAgICB9XG4gIH0sXG5cbiAgY3NzOiBmdW5jdGlvbihjc3MpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy4kZWxlbWVudC5jc3MoY3NzKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy4kZWxlbWVudC5jc3MoKVxuICAgIH1cbiAgfSxcblxuICBvbk1vdXNlVXA6IGZ1bmN0aW9uKGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2V1cCcsIG1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpKTsgfSxcbiAgb25Nb3VzZURvd246IGZ1bmN0aW9uKGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2Vkb3duJywgbW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9LFxuICBvbk1vdXNlT3ZlcjogZnVuY3Rpb24oaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZW92ZXInLCBtb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH0sXG4gIG9uTW91c2VPdXQ6IGZ1bmN0aW9uKGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2VvdXQnLCBtb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH0sXG4gIG9uTW91c2VNb3ZlOiBmdW5jdGlvbihoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNlbW92ZScsIG1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpKTsgfVxufTtcblxuZnVuY3Rpb24gbW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikge1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgbW91c2VUb3AgPSBldmVudC5wYWdlWSwgIC8vL1xuICAgICAgICBtb3VzZUxlZnQgPSBldmVudC5wYWdlWDsgLy8vXG5cbiAgICBoYW5kbGVyKG1vdXNlVG9wLCBtb3VzZUxlZnQpO1xuICB9O1xufVxuXG5FbGVtZW50LiRjbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3JFbGVtZW50KSB7XG4gIHZhciAkZWxlbWVudCA9IHR5cGVvZiBzZWxlY3Rvck9yRWxlbWVudCA9PT0gJ3N0cmluZycgPyAgLy8vXG4gICAgICAgICQoc2VsZWN0b3JPckVsZW1lbnQpIDogIC8vL1xuICAgICAgICAgIHNlbGVjdG9yT3JFbGVtZW50LiRlbGVtZW50OyAgLy8vXG5cbiAgdmFyICRjbG9uZWRFbGVtZW50ID0gJGVsZW1lbnQuY2xvbmUoKTtcblxuICByZXR1cm4gJGNsb25lZEVsZW1lbnQ7XG59O1xuXG5FbGVtZW50LiRmcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgdmFyICRlbGVtZW50ID0gJChodG1sKTtcblxuICByZXR1cm4gJGVsZW1lbnQ7XG59O1xuXG5FbGVtZW50LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCkge1xuICB2YXIgJGVsZW1lbnQgPSBFbGVtZW50LiRmcm9tSFRNTChodG1sKSxcbiAgICAgIGVsZW1lbnQgPSBuZXcgRWxlbWVudCgkZWxlbWVudCk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5FbGVtZW50LmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPckVsZW1lbnQpIHtcbiAgdmFyICRlbGVtZW50ID0gRWxlbWVudC4kY2xvbmUoc2VsZWN0b3JPckVsZW1lbnQpLFxuICAgICAgZWxlbWVudCA9IG5ldyBFbGVtZW50KCRlbGVtZW50KTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnLi4vaW5oZXJpdHMnKTtcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxudmFyIElucHV0ID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkpO1xufTtcblxuSW5wdXQucHJvdG90eXBlID0ge1xuICBjbG9uZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNsb25lZElucHV0ID0gSW5wdXQuY2xvbmUodGhpcyk7XG5cbiAgICByZXR1cm4gY2xvbmVkSW5wdXQ7XG4gIH0sXG5cbiAgZ2V0VmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuJGVsZW1lbnQudmFsKCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG5cbiAgc2V0VmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy4kZWxlbWVudC52YWwodmFsdWUpO1xuICB9LFxuXG4gIHNlbGVjdDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kZWxlbWVudC5zZWxlY3QoKTtcbiAgfVxufTtcblxuSW5wdXQuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yRWxlbWVudCkge1xuICB2YXIgY2xvbmVkJEVsZW1lbnQgPSBFbGVtZW50LiRjbG9uZShzZWxlY3Rvck9yRWxlbWVudCksXG4gICAgICBjbG9uZWRJbnB1dCA9IG5ldyBJbnB1dChjbG9uZWQkRWxlbWVudCk7XG5cbiAgcmV0dXJuIGNsb25lZElucHV0O1xufTtcblxuSW5wdXQuZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sKSB7XG4gIHZhciAkZWxlbWVudEZyb21IVE1MID0gRWxlbWVudC4kZnJvbUhUTUwoaHRtbCksXG4gICAgICBpbnB1dEZyb21IVE1MID0gbmV3IElucHV0KCRlbGVtZW50RnJvbUhUTUwpO1xuXG4gIHJldHVybiAgaW5wdXRGcm9tSFRNTDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBMaW5rID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgaW5oZXJpdHModGhpcywgbmV3IEVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KSk7XG5cbiAgaWYgKGNsaWNrSGFuZGxlcikge1xuICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICB9XG59O1xuXG5MaW5rLnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjbG9uZWRMaW5rID0gTGluay5jbG9uZSh0aGlzKTtcblxuICAgIHJldHVybiBjbG9uZWRMaW5rO1xuICB9LFxuXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyZWYgPSB0aGlzLiRlbGVtZW50LmF0dHIoJ2hyZWYnKTtcblxuICAgICAgaGFuZGxlcihocmVmKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0uYmluZCh0aGlzKSlcbiAgfSxcblxuICBkaXNhYmxlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gIH0sXG5cbiAgZW5hYmxlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gIH1cbn07XG5cbkxpbmsuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yRWxlbWVudCkge1xuICB2YXIgY2xvbmVkJEVsZW1lbnQgPSBFbGVtZW50LiRjbG9uZShzZWxlY3Rvck9yRWxlbWVudCksXG4gICAgICBjbG9uZWRMaW5rID0gbmV3IExpbmsoY2xvbmVkJEVsZW1lbnQpO1xuXG4gIHJldHVybiBjbG9uZWRMaW5rO1xufTtcblxuTGluay5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgdmFyICRlbGVtZW50RnJvbUhUTUwgPSBFbGVtZW50LiRmcm9tSFRNTChodG1sKSxcbiAgICAgIGxpbmtGcm9tSFRNTCA9IG5ldyBMaW5rKCRlbGVtZW50RnJvbUhUTUwpO1xuXG4gIHJldHVybiAgbGlua0Zyb21IVE1MO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG52YXIgU2VsZWN0ID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkpO1xuXG4gIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgfVxufTtcblxuU2VsZWN0LnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjbG9uZWRTZWxlY3QgPSBTZWxlY3QuY2xvbmUodGhpcyk7XG5cbiAgICByZXR1cm4gY2xvbmVkU2VsZWN0O1xuICB9LFxuXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpO1xuXG4gICAgICBoYW5kbGVyKHNlbGVjdGVkT3B0aW9uVmFsdWUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyICRzZWxlY3RlZE9wdGlvbiA9IHRoaXMuJGVsZW1lbnQuZmluZCgnOnNlbGVjdGVkJyksXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSAkc2VsZWN0ZWRPcHRpb24udmFsKCk7XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25WYWx1ZTtcbiAgfSxcblxuICBzZXRTZWxlY3RlZE9wdGlvbkJ5VmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy4kZWxlbWVudC52YWwodmFsdWUpO1xuICB9XG59O1xuXG5TZWxlY3QuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yRWxlbWVudCkge1xuICB2YXIgY2xvbmVkJEVsZW1lbnQgPSBFbGVtZW50LiRjbG9uZShzZWxlY3Rvck9yRWxlbWVudCksXG4gICAgICBjbG9uZWRTZWxlY3QgPSBuZXcgU2VsZWN0KGNsb25lZCRFbGVtZW50KTtcblxuICByZXR1cm4gY2xvbmVkU2VsZWN0O1xufTtcblxuU2VsZWN0LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCkge1xuICB2YXIgJGVsZW1lbnRGcm9tSFRNTCA9IEVsZW1lbnQuJGZyb21IVE1MKGh0bWwpLFxuICAgICAgc2VsZWN0RnJvbUhUTUwgPSBuZXcgU2VsZWN0KCRlbGVtZW50RnJvbUhUTUwpO1xuXG4gIHJldHVybiAgc2VsZWN0RnJvbUhUTUw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdDtcbiJdfQ==
