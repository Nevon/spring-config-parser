const R = require("ramda");
const getConfiguration = require("./src/index");

const entrypoint = function(file, profiles) {
  if (R.is(String, profiles)) {
    profiles = [profiles];
  } else if (R.isNil(profiles)) {
    profiles = [];
  }

  return getConfiguration(file, profiles);
};

module.exports = R.curry(entrypoint);
