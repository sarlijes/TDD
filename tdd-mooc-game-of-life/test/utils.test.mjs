import { expect } from "chai";
import { isValid } from "../src/utils.mjs";

describe("Check cell validity", () => {

  it("Valid cell", () => {
    const arr = [];
    arr.push([0, 0, 0]);
    arr.push([0, 0, 0]);
    arr.push([0, 0, 0]);

    expect(isValid([0][0])).to.be.true;
  });

});
