exports.log = function (data) {
  log.info('Utilities log %s', JSON.stringify(data, null, 4));
};

exports.forceArray = function(data) {
    if (!Array.isArray(data)) {
        data = [data];
    }
    return data;
};

/**
 * Check if value is integer
 * @param value
 * @returns {boolean}
 */
exports.isInt = function(value) {
    return !isNaN(value) &&
        parseInt(Number(value)) == value &&
        !isNaN(parseInt(value, 10));
};