import { expect } from "chai";
import { twoDimensionalArraytoString } from "../src/Utils.mjs";

describe("2-dimensional array to string", () => {
  it("2-dim array of integers", () => {
    let arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(twoDimensionalArraytoString(arr).to.equal("123"));
  });
});
