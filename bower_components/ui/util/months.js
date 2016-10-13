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

    return function (months) {
        months = months.toFixed(0);
        var text = "";
        var years = Math.floor(months / 12);
        
        months = months % 12;
        
        if (years !== 0) {
            text += years + "y";
        }
        if (years !== 0 && months !== 0) {
            text += " ";
        }
        if (months !== 0) {
            text += months + "m";
        }
        if (years === 0 && months === 0) {
            text = "0m";
        }
        return text;
    };

});
