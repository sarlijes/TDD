import { expect } from "chai";
import { isValid, getLivingNeighborCount } from "../src/utils.mjs";

describe("Check cell validity", () => {

  let arr = [];

  beforeEach(() => {
    arr = [];
    arr.push([0, 0, 0]);
    arr.push([0, 0, 0]);
    arr.push([0, 0, 0]);
  });

  describe("General tests", () => {

    describe("Return type is correct", () => {
      arr.push([0, 0, 0]);
      const result = isValid(arr, 0, 0);
      expect(typeof result).to.equal("boolean");
    });

    describe("Undefined or null throws an Error", () => {
      expect(() => isValid(undefined).to.throw("undefined"));
    });
    // TODO could add validation to parameters x and y
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


describe("Can get living neighbor count", () => {


  describe("General tests", () => {

    describe("Return type is correct", () => {
      const result = getLivingNeighborCount([0, 0, 0], 0, 0);
      expect(typeof result).to.equal("number");
    });

    describe("Undefined or null throws an Error", () => {
      expect(() => getLivingNeighborCount(undefined).to.throw("undefined"));
    });
    // TODO could add validation to parameters x and y
  });

  /*
  Different cases:

  Empty board:
    Corners
    Borders
    Mid-areas

  Semi-full board:
    Corners
    Borders
    Mid-areas

  Full board:
    Corners
    Borders
    Mid-areas

  */

  describe("for an full board's", () => {

    let arr;

    beforeEach(() => {
      arr = [];
      arr.push([1, 1, 1]);
      arr.push([1, 1, 1]);
      arr.push([1, 1, 1]);
    });

    describe("corners:", () => {
      it("top left", () => {
        expect(getLivingNeighborCount(arr, 0, 0)).to.equal(3);
      });

      it("top right", () => {
        expect(getLivingNeighborCount(arr, 2, 0)).to.equal(3);
      });

      it("bottom left", () => {
        expect(getLivingNeighborCount(arr, 0, 2)).to.equal(3);
      });

      it("bottom right", () => {
        expect(getLivingNeighborCount(arr, 2, 2)).to.equal(3);
      });
    });

  });

  describe("for an empty board's", () => {

    let arr;

    beforeEach(() => {
      arr = [];
      arr.push([0, 0, 0]);
      arr.push([0, 0, 0]);
      arr.push([0, 0, 0]);
    });

    xit("corners - top left", () => {
      expect(getLivingNeighborCount(arr, 0, 0)).to.equal(0);
    });

    xit("corners - top right", () => {
      expect(getLivingNeighborCount(arr, 2, 0)).to.equal(0);
    });

    xit("corners - bottom left", () => {
      expect(getLivingNeighborCount(arr, 0, 2)).to.equal(0);
    });

    xit("corners - bottom right", () => {
      expect(getLivingNeighborCount(arr, 2, 2)).to.equal(0);
    });
  });

  // describe("", () => {

  //   beforeEach(() => {
  //     arr = [];
  //     arr.push([0, 0, 0]);
  //     arr.push([0, 0, 0]);
  //     arr.push([0, 0, 0]);
  //   });

  // });

});

describe("", () => {
});

it("", () => {
});