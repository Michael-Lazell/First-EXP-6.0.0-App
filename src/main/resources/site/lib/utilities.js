exports.log = function (data) {
  log.info('Utilities log %s', JSON.stringify(data, null, 4));
};