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
