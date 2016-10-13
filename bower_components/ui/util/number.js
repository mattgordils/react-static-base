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

    var neitherNumberNorDot = /[^0-9.]/g;
    var commaRegex = /(\d)(?=(\d{3})+(?!\d))/g;

    function format (value) {
        if (typeof value === 'string') {
            value = value.replace(neitherNumberNorDot, '');
            value = parseFloat(value, 10);
        }
        if (typeof value !== 'number') {
            throw new Error('Tried to number format a non number');
        }
        // make sure we don't put commas after the decimal point
        value = value.toString().split('.');
        value[0] = value[0].replace(commaRegex, '$1,');
        return value.join('.');
    }

    return format;

});
