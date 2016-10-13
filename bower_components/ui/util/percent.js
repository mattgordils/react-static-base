(function(factory) {

    //AMD
    if(typeof define === 'function' && define.amd) {
        define([], factory);

    //NODE
    } else if(typeof module === 'object' && module.exports) {
        module.exports = factory();
    }

})(function () {
    'use strict';

    function format (value) {
        value = value * 100;
        value = value.toFixed(1);
        return value + '%';
    }

    return format;
});
