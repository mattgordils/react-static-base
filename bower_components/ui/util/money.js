'use strict';

var moneyCharacters = {
    'USD': '$',
    'GBP': '£'
};

var decimalPlaces = {
    'USD': 2,
    'GBP': 2
};

var neitherNumberNorDot = /[^0-9.]/g;
var commaRegex = /(\d)(?=(\d{3})+(?!\d))/g;

function format (value, currency) {
    if (typeof value === 'string') {
        value = value.replace(neitherNumberNorDot, '');
        value = parseFloat(value, 10);
    }
    if (typeof value !== 'number') {
        throw new Error('Tried to convert a non number to currency');
    }
    if (typeof currency !== 'string') {
        currency = 'USD';
    }

    return moneyCharacters[currency] + value.toFixed(decimalPlaces[currency]).replace(commaRegex, '$1,');
}

module.exports = format;

