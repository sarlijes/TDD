import { expect } from "chai";
import { twoDimensionalArraytoString } from "../src/Utils.mjs";

describe("2-dimensional array to string", () => {
  it("2-dimensional array of integers", () => {
    let arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = twoDimensionalArraytoString(arr);
    expect(result.toString()).to.equal("123\n456\n789");
  });

  it("2-dimensional array of chars", () => {
    let arr = [
      ["1", "2", "3"],
      ["4", "5", "6"],
    ];
    const result = twoDimensionalArraytoString(arr);
    expect(result.toString()).to.equal("123\n456\n789");
  });
});
