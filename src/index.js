const R = require("ramda");

const parse = require("./parser");
const filter = require("./filter");
const sort = require("./sort");
const combine = require("./combine");

const getConfiguration = profiles =>
  R.compose(combine, filter(profiles), sort(profiles), parse);

module.exports = (file, profiles) => getConfiguration(profiles)(file);
