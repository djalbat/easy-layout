'use strict';

const ABOVE = +1,
      BELOW = -1,
      TO_THE_LEFT_OF = +1,
      TO_THE_RIGHT_OF = -1,
      options = {
        situated: {
          ABOVE: ABOVE,
          BELOW: BELOW,
          TO_THE_LEFT_OF: TO_THE_LEFT_OF,
          TO_THE_RIGHT_OF: TO_THE_RIGHT_OF
        },
        ESCAPE_KEY_STOPS_DRAGGING: 'ESCAPE_KEY_STOPS_DRAGGING'
      };

module.exports = options;
