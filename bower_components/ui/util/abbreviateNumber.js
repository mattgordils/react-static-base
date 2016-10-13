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

    return function (number, useSpace) {
        var numberString;
        var spaceChar = '';
        
        if (useSpace === 'space' || useSpace === true) {
            spaceChar = ' ';
        }

        switch (true) {
            case number >= 1e17:
                numberString = Math.round(number / 1e15) + spaceChar + 'Q';
                break;
            case number >= 1e15:
                numberString = (number / 1e15).toFixed(1) + spaceChar + 'Q';
                break;
            case number >= 1e14:
                numberString = Math.round(number / 1e14) + spaceChar + 'T';
                break;
            case number >= 1e12:
                numberString = (number / 1e12).toFixed(1) + spaceChar + 'T';
                break;
            case number >= 1e11:
                numberString = Math.round(number / 1e12) + spaceChar + 'B';
                break;
            case number >= 1e9:
                numberString = (number / 1e9).toFixed(1) + spaceChar + 'B';
                break;
            case number >= 1e8:
                numberString = Math.round(number / 1e6) + spaceChar + 'M';
                break;
            case number >= 1e6:
                numberString = (number / 1e6).toFixed(1) + spaceChar + 'M';
                break;
            case number >= 1e5:
                numberString = Math.round(number / 1e3) + spaceChar + 'K';
                break;
            case number >= 1e3:
                numberString = (number / 1e3).toFixed(1) + spaceChar + 'K';
                break;
            case number % 1:
                numberString = number.toFixed(2);
                numberString = numberString.replace(/\.?0+$/, '');
            default:
                return number;

        }

        return numberString;
    };
    
});
