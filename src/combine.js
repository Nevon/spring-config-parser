const R = require("ramda");

module.exports = documents => documents.reduce(R.mergeDeepLeft, {});
