'use strict';

var months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

function dateFormat(value, fullYear, locale) {

    if (value === undefined || value === null) {
        throw new Error('Tried to format an undefined or null date.');
    }

    var date = new Date(value);

    if (!date.valueOf()) {
        throw new Error('Tried to format an invalid date.');
    }

    var output;

    //UK - "28 Jan 2016"
    //US - "Jan 28, 2016"

    switch (locale) {
        case 'en_GB':
            output = date.getUTCDate() + ' ' + months[date.getUTCMonth()] + ' ' + date.getUTCFullYear();
            break;

        case 'en_US':
            output = months[date.getUTCMonth()] + ' ' + date.getUTCDate() + ', ' + date.getUTCFullYear();
            break;

        default:
            throw new Error('Tried to format a date with an unknown locale: '+locale+'.');
    }

    return output;
}

module.exports = dateFormat;


