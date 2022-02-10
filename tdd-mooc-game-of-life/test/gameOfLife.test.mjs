import { expect } from "chai";
import { tick } from "../src/gameOfLife.mjs";
import { readFile, parseFile, decode, encode } from "../src/RLEreader.mjs";

describe("Tick function, general tests", () => {

  it("Tick function returns an array", () => {
    expect(tick([]) instanceof Array).to.be.true;
  });

  it("Undefined throws an Error", () => {
    expect(() => tick(undefined).to.throw("undefined"));
  });

});

const rule1 = "1. Each living cell that has less than 2 living neighbors, will die";
const rule2 = "2. Each living cell that has 2 living neighbors, stays alive";
const rule3 = "3. Each living cell that has 3 living neighbors, stays alive";
const rule4 = "4. Each living cell that has 4 or more living neighbors, dies";
const rule5 = "5. Each dead cell that has exactly 3 living neighbors, becomes alive";

describe("Tick function alters the cells", () => {

  describe("on a 1x1 board", () => {

    let arr;

    beforeEach(() => {
      arr = [];
      arr.push([1]);
    });

    it("the size is correct", () => {
      const result = tick(arr);
      expect(result.length).to.equal(1);
      expect(result[0]).not.to.be.undefined;
      expect(result[0].length).to.equal(1);
    });

    it(rule1, () => {
      const result = tick(arr);
      expect(result[0][0]).to.equal(0);
    });

    describe("on a 2x2 board", () => {

      let arr;

      beforeEach(() => {
        arr = [];
        arr.push([1, 0]);
        arr.push([1, 0]);
      });

      it(rule1, () => {
        const result = tick(arr);
        expect(result[0][0]).to.equal(0);
        expect(result[0][1]).to.equal(0);
        expect(result[1][0]).to.equal(0);
        expect(result[1][1]).to.equal(0);
      });

      it(rule2, () => {
        arr = [];
        arr.push([1, 1]);
        arr.push([1, 0]);

        const result = tick(arr);
        expect(result[0][0]).to.equal(1);
        expect(result[0][1]).to.equal(1);
        expect(result[1][0]).to.equal(1);
      });

      it(rule5, () => {
        arr = [];
        arr.push([1, 1]);
        arr.push([1, 0]);

        const result = tick(arr);
        expect(result[1][1]).to.equal(1);
      });

      it(rule3, () => {
        arr = [];
        arr.push([1, 1]);
        arr.push([1, 1]);

        const result = tick(arr);
        expect(result[0][0]).to.equal(1);
      });
    });

    describe("on a 3x3 board", () => {

      let arr;

      beforeEach(() => {
        arr = [];
        arr.push([1, 1, 1]);
        arr.push([1, 1, 1]);
        arr.push([1, 1, 0]);
      });

      it(rule3, () => {
        const result = tick(arr);
        expect(result[0][0]).to.equal(1);
      });

      it(rule4, () => {
        const result = tick(arr);
        expect(result[0][1]).to.equal(0);

      });

      it(rule2, () => {
        const result = tick(arr);
        expect(result[0][2]).to.equal(1);

      });

      it(rule4, () => {
        const result = tick(arr);
        expect(result[1][0]).to.equal(0);
      });

      it(rule4, () => {
        const result = tick(arr);
        expect(result[1][1]).to.equal(0);
      });

      it(rule2, () => {
        const result = tick(arr);
        expect(result[1][2]).to.equal(0);
      });

      // TODO should we add test for when the board has been ticked
      // several times?
    });

  });


});

describe("", () => {
  it("", () => {

  });
});

