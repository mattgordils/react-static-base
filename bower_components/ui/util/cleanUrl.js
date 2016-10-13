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

    function url(context) {

        if(!(/^http[s]?:\/\//.test(context))) {
            return context.replace(/\/$/, '');
        } else {
            context = context.replace(/^https?:\/\//,'');
            return context.replace(/\/$/, '');
        }
    }

    return url;

});
