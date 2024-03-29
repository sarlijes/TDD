import { expect } from "chai";
import { isValid,
  getLivingNeighborCount,
  twoDimensionalArraytoOBString } from "../src/utils.mjs";

describe("Check cell validity", () => {

  let arr = [];

  beforeEach(() => {
    arr = [];
    arr.push([0, 0, 0]);
    arr.push([0, 0, 0]);
    arr.push([0, 0, 0]);
  });

  describe("General tests", () => {

    it("Return type is correct", () => {
      arr.push([0, 0, 0]);
      const result = isValid(arr, 0, 0);
      expect(typeof result).to.equal("boolean");
    });

    it("Undefined or null throws an Error", () => {
      expect(() => isValid(undefined).to.throw("undefined"));
      expect(() => isValid(null).to.throw("undefined"));
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

  describe("for an larger semi-full board's", () => {

    let arr;

    beforeEach(() => {
      arr = [];
      arr.push([0, 1, 0, 0]);
      arr.push([1, 0, 0, 1]);
      arr.push([0, 1, 0, 1]);
    });

    it("bottom row", () => {
      expect(isValid(arr, 2, 0)).to.be.true;
      expect(isValid(arr, 2, 1)).to.be.true;
      expect(isValid(arr, 2, 2)).to.be.true;
      expect(isValid(arr, 2, 3)).to.be.true;
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
        expect(getLivingNeighborCount(arr, 0, 2)).to.equal(3);
      });

      it("bottom left", () => {
        expect(getLivingNeighborCount(arr, 2, 0)).to.equal(3);
      });

      it("bottom right", () => {
        expect(getLivingNeighborCount(arr, 2, 2)).to.equal(3);
      });
    });

    describe("middle cell", () => {
      it("", () => {
        expect(getLivingNeighborCount(arr, 1, 1)).to.equal(8);
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
    describe("corners:", () => {
      it("top left", () => {
        expect(getLivingNeighborCount(arr, 0, 0)).to.equal(0);
      });

      it("top right", () => {
        expect(getLivingNeighborCount(arr, 0, 2)).to.equal(0);
      });

      it("bottom left", () => {
        expect(getLivingNeighborCount(arr, 2, 0)).to.equal(0);
      });

      it("bottom right", () => {
        expect(getLivingNeighborCount(arr, 2, 2)).to.equal(0);
      });
    });
  });


  describe("for an semi-full board's", () => {

    let arr;

    beforeEach(() => {
      arr = [];
      arr.push([0, 1, 0]);
      arr.push([1, 0, 0]);
      arr.push([0, 1, 0]);
    });

    describe("corners:", () => {
      it("top left", () => {
        expect(getLivingNeighborCount(arr, 0, 0)).to.equal(2);
      });

      it("top right", () => {
        expect(getLivingNeighborCount(arr, 0, 2)).to.equal(1);
      });

      it("bottom left", () => {
        expect(getLivingNeighborCount(arr, 2, 0)).to.equal(2);
      });

      it("bottom right", () => {
        expect(getLivingNeighborCount(arr, 2, 2)).to.equal(1);
      });
    });

  });

  describe("for an larger semi-full board's", () => {

    let arr;

    beforeEach(() => {
      arr = [];
      arr.push([0, 1, 0, 0]);
      arr.push([1, 0, 0, 1]);
      arr.push([0, 1, 0, 1]);
    });

    describe("borders at the", () => {
      it("top", () => {
        expect(getLivingNeighborCount(arr, 0, 1)).to.equal(1);
        expect(getLivingNeighborCount(arr, 0, 2)).to.equal(2);
      });

      it("left", () => {
        expect(getLivingNeighborCount(arr, 1, 0)).to.equal(2);
      });

      it("bottom", () => {
        expect(getLivingNeighborCount(arr, 2, 1)).to.equal(1);
        expect(getLivingNeighborCount(arr, 2, 2)).to.equal(3);
      });

      it("right", () => {
        expect(getLivingNeighborCount(arr, 1, 3)).to.equal(1);
      });

    });

    describe("mid-areas", () => {
      it("", () => {
        expect(getLivingNeighborCount(arr, 1, 1)).to.equal(3);
        expect(getLivingNeighborCount(arr, 1, 2)).to.equal(4);
      });
    });
  });
});

describe("2-dimensional array to string", () => {
  it("2-dimensional array of integers", () => {
    let arr = [
      [0,0,0],
      [0,0,1],
      [0,1,1],
    ];
    const result = twoDimensionalArraytoOBString(arr);
    expect(result.toString()).to.equal("bbb$bbo$boo!");
  });

  it("shorter 2-dimensional array of integers", () => {
    let arr = [
      [1,0,1],
      [0,1,0]
    ];
    const result = twoDimensionalArraytoOBString(arr);
    expect(result.toString()).to.equal("obo$bob!");
  });
});