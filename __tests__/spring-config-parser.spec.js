const fs = require("fs");
const path = require("path");

const parse = require("../index");

const file = fs.readFileSync(
  path.join(__dirname, "resources", "multiple-profiles.yml"),
  "utf8"
);

describe("Configuration Parser", () => {
  describe("When there is no profile specified", () => {
    test("Should return the common configuration", () => {
      expect(parse(file, undefined)).toEqual({
        spring: {
          common: {
            properties: {
              bar: "bar",
              foo: "foo"
            }
          },
          profiles: {
            active: "common"
          }
        },
        "top-level-properties": {
          bar: "bar",
          baz: "baz",
          foo: "foo"
        }
      });
    });
  });

  describe("When there is a profile specified", () => {
    test("Should return the common configuration and the profile specific one", () => {
      expect(parse(file, "local")).toEqual({
        spring: {
          common: {
            properties: {
              bar: "bar",
              foo: "foo"
            }
          },
          profiles: "local",
          "specific-to-local": "local"
        },
        "top-level-properties": {
          bar: "bar",
          baz: "baz",
          foo: "local"
        },
        "only-local": true
      });
    });
  });

  describe("When there are multiple profiles specified", () => {
    test("Should return the common configuration and all the profiles specified", () => {
      expect(parse(file, ["other", "local"])).toEqual({
        spring: {
          common: {
            properties: {
              bar: "bar",
              foo: "foo"
            }
          },
          profiles: "other",
          "specific-to-local": "local",
          "specific-to-other": "other"
        },
        "top-level-properties": {
          bar: "other",
          baz: "baz",
          foo: "local"
        },
        "only-local": true,
        "only-other": true
      });
    });
  });
});
