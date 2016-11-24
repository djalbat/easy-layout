'use strict';

var easyui = require('easyui'),
    Body = easyui.Body;

var body = new Body(),
    previousCursor;  ///

class cursor {
  static columnResize() {
    var currentCursor = this.getCurrentCursor();

    if (currentCursor !== 'col-resize') {
      previousCursor = currentCursor;

      this.setCursor('col-resize');
    }
  }

  static rowResize() {
    var currentCursor = this.getCurrentCursor();

    if (currentCursor !== 'row-resize') {
      previousCursor = currentCursor;

      this.setCursor('row-resize');
    }
  }

  static reset() {
    this.setCursor(previousCursor); ///
  }

  static getCurrentCursor() {
    var currentCursor = body.css('cursor');  ///

    return currentCursor || 'auto'; ///
  }

  static setCursor(cursor) {
    var css = {
      cursor: cursor
    };

    body.css(css);
  }
}

module.exports = cursor;
