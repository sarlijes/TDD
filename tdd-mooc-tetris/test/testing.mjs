import { Assertion } from "chai";

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
}

export function normalize(s) {
  return replaceAll(s, " ", "").trim() + "\n";
}

Assertion.addMethod("equalShape", function (expected) {
  const actual = this._obj;
  new Assertion(actual).to.be.a("string");

  expected = normalize(expected);
  this.assert(
    actual === expected,
    "expected #{this} to equal #{exp} but got #{act}",
    "expected #{this} to not equal #{act}",
    expected,
    actual
  );
});
