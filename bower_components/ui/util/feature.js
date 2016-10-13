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

    var exports = {};
    var permissions = {};

    exports.isPermitted = function (marketId, feature) {
        if (!permissions[marketId]) {
            throw new Error('Checked for features in an unknown market: ' + marketId);
        }
        if (feature === 'all') {
            for (var key in permissions[marketId]) {
                if (!permissions[marketId][key] && key.indexOf('admin') === -1) {
                    return false;
                }
            }
            return true;
        } else {
            if (!permissions[marketId].hasOwnProperty(feature)) {
                throw new Error('Tried to check for an unknown feature: '+feature);
            }
            return permissions[marketId][feature];
        }
    };

    exports.isLocked = function (marketId, feature) {
        return !exports.isPermitted(marketId, feature);
    };

    exports.update = function (updatedPermissions) {
        permissions = updatedPermissions;
    };

    return exports;
});
