var Class = require('../../utils/Class');
var Event = require('../../events/Event');

var PointerDownEvent = new Class({

    Extends: Event,

    initialize:

    function PointerDownEvent (pointer, gameObject)
    {
        Event.call(this, 'POINTER_DOWN_EVENT');

        this.pointer = pointer;
        this.gameObject = gameObject;

        // this.x;
        // this.y;
    }

});

module.exports = PointerDownEvent;
