const yaml = require("js-yaml");

module.exports = function(file) {
  let matchedDocuments = [];
  yaml.safeLoadAll(file, doc => matchedDocuments.push(doc));
  return matchedDocuments;
};
