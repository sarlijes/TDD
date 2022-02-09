import { expect } from "chai";
import { isValid } from "../src/utils.mjs";

describe("Check cell validity", () => {

  let arr = [];

  beforeEach(() => {
    arr = [];
    arr.push([0, 0, 0]);
    arr.push([0, 0, 0]);
    arr.push([0, 0, 0]);
  });
  describe("Valid coordinates", () => {




    it("Cell is valid when both coordinates are 0", () => {
      expect(isValid(arr, 0, 0)).to.be.true;
    });

    it("Cell is valid when both coordinates are 1", () => {
      expect(isValid(arr, 1, 1)).to.be.true;
    });

    it("Cell is valid when both coordinates are 2", () => {
      expect(isValid(arr, 2, 2)).to.be.true;
    });

  });

  describe("Invalid coordinates", () => {

    it("Cell is invalid when one of the coordinates is -1", () => {
      expect(isValid(arr, -1, 0)).to.be.false;
      expect(isValid(arr, 0, -1)).to.be.false;
    });

    it("Cell is invalid when x is too great", () => {
      expect(isValid(arr, 3, 0)).to.be.false;
    });

    it("Cell is invalid when y is too great", () => {
      expect(isValid(arr, 0, 3)).to.be.false;
    });



  });
});
it("", () => {
});