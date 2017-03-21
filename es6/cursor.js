'use strict';

const easy = require('easy'),
      Body = easy.Body;

const body = new Body();

let previousCursor;  ///

class cursor {
  static columnResize() {
    const currentCursor = this.getCurrentCursor();

    if (currentCursor !== 'col-resize') {
      previousCursor = currentCursor;

      this.setCursor('col-resize');
    }
  }

  static rowResize() {
    const currentCursor = this.getCurrentCursor();

    if (currentCursor !== 'row-resize') {
      previousCursor = currentCursor;

      this.setCursor('row-resize');
    }
  }

  static reset() {
    this.setCursor(previousCursor); ///
  }

  static getCurrentCursor() {
    const currentCursor = body.css('cursor');  ///

    return currentCursor || 'auto'; ///
  }

  static setCursor(cursor) {
    const css = {
      cursor: cursor
    };

    body.css(css);
  }
}

module.exports = cursor;
