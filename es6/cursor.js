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
