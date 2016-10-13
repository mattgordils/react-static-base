(function(factory) {

    //AMD
    if(typeof define === 'function' && define.amd) {
        define([], factory);

    //NODE
    } else if(typeof module === 'object' && module.exports) {
        module.exports = factory();
    }

})(function () {

    function clipString (string, count){

        if(count < string.length){
            return string.substring(0, count) + '...';
        } else {
            return string;
        }
    }

    return clipString;

});
