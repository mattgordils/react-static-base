(function(factory) {

    //AMD
    if(typeof define === 'function' && define.amd) {
        define(['./number', './money'], factory);

    //NODE
    } else if(typeof module === 'object' && module.exports) {
        module.exports = factory(require('./number', './money'));
    }

})(function (number, money) {

    return function (value) {
        var response = value.floors.join(', ') + ': ' + number(value.size) + ' SF';
        if (value.takingRent) { response += ' / ' + money(value.takingRent) + ' /SF'; }
        return response;
    };

});
