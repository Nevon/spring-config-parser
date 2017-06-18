const R = require("ramda");

const getProfile = require("./get-profile");

const matchesProfile = profiles => doc => profiles.includes(getProfile(doc));
const isCommonDocument = doc =>
  R.isNil(getProfile(doc)) || R.is(Object, getProfile(doc));
const shouldInclude = profiles => doc =>
  isCommonDocument(doc) || matchesProfile(profiles)(doc);

const filter = (profiles, documents) =>
  documents.filter(shouldInclude(profiles));

module.exports = R.curry(filter);
