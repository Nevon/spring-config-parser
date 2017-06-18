const R = require("ramda");

const getProfile = require("./get-profile");

/*
 * Sorts by the document's profile position in
 * the profiles array. If the document's profile
 * is not present, it should be put last.
 * 
 * @TODO: Replace this unreadable mess with a
 * comparator.
 */
const byPosition = profiles => (a, b) => {
  const aIndex = profiles.indexOf(getProfile(a));
  const bIndex = profiles.indexOf(getProfile(b));

  if (aIndex === -1) {
    return 1;
  }

  if (bIndex === -1) {
    return -1;
  }

  return aIndex > bIndex ? 1 : -1;
};

module.exports = profiles => documents =>
  R.sort(byPosition(profiles), documents);
