'use strict';

define(function(require) {

  var easyui = require('./lib/easyui'),
      Element = easyui.Element;

  var easyuiLayout = require('./../dist/easyui-layout'),
      SizeableElement = easyuiLayout.SizeableElement,
      VerticalSplitter = easyuiLayout.VerticalSplitter,
      HorizontalSplitter = easyuiLayout.HorizontalSplitter;

  var ABOVE = HorizontalSplitter.situated.ABOVE,
      TO_THE_LEFT_OF = VerticalSplitter.situated.TO_THE_LEFT_OF,
      TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

  var leftColumn = new SizeableElement('#leftColumn', 200, null, 600, null),
      rightColumn = new SizeableElement('#rightColumn', 200, null, 600, null),
      bottomRow = new SizeableElement('#bottomRow', null, 100),
      bottomLeft = new Element('#bottomLeft');

  new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);
  new VerticalSplitter('.right.vertical.splitter', TO_THE_LEFT_OF, rightColumn);
  new HorizontalSplitter('.main.horizontal.splitter', ABOVE, bottomRow, function(height) {
    bottomLeft.setHeight(height);
  });
});
