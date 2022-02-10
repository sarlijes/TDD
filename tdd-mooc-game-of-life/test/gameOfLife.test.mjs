import { expect } from "chai";
import { tick, play, gameOfLife } from "../src/gameOfLife.mjs";
import { readFile, parseFile, decode, encode } from "../src/RLEreader.mjs";



describe("Game alters the cells", () => {

  describe("play function, general tests", () => {

    it("play function returns an array", () => {
      expect(play([], 5) instanceof Array).to.be.true;
    });

    it("Undefined array parameter throws an Error", () => {
      expect(() => play(undefined, 5).to.throw("undefined"));
    });

    it("Undefined iterations parameter throws an Error", () => {
      expect(() => play([]).to.throw("undefined"));
    });

  });


  describe("on a 1x1 board", () => {

    let arr;

    beforeEach(() => {
      arr = [];
      arr.push([1]);
    });

    it("One iteration", () => {
      const result = play(arr, 1);
      expect(result[0][0]).to.equal(0);
    });

    it("two iterations", () => {
      const result = play(arr, 2);
      expect(result[0][0]).to.equal(0);
    });

  });

  describe("on a 2x2 board", () => {

    let arr;

    beforeEach(() => {
      arr = [];
      arr.push([1, 0]);
      arr.push([1, 0]);
    });

    it("One iteration", () => {
      const result = play(arr, 1);
      expect(result[0][0]).to.equal(0);
      expect(result[0][1]).to.equal(0);
      expect(result[1][0]).to.equal(0);
      expect(result[1][1]).to.equal(0);
    });

    it("Two iterations", () => {
      arr = [];
      arr.push([1, 1]);
      arr.push([1, 1]);
      // after first tick
      // [1,1]
      // [1,1]
      // after second tick
      // [1,1]
      // [1,1]
      const result = play(arr, 2);
      expect(result[0][0]).to.equal(1);
      expect(result[0][1]).to.equal(1);
      expect(result[1][0]).to.equal(1);
      expect(result[1][1]).to.equal(1);
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

    it("Two iterations", () => {
      const result = play(arr, 2);
      // after first tick
      // [1, 0, 1]
      // [0, 0, 1]
      // [0, 0, 0]
      // after second tick
      // [0, 0, 0]
      // [0, 0, 0]
      // [0, 0, 0]
      expect(result[0][0]).to.equal(0);
      expect(result[0][1]).to.equal(0);
      expect(result[0][2]).to.equal(0);

      expect(result[1][0]).to.equal(0);
      expect(result[1][1]).to.equal(0);
      expect(result[1][2]).to.equal(0);

      expect(result[2][0]).to.equal(0);
      expect(result[2][1]).to.equal(0);
      expect(result[2][2]).to.equal(0);
    });
  });
});

const rule1 = "1. Each living cell that has less than 2 living neighbors, will die";
const rule2 = "2. Each living cell that has 2 living neighbors, stays alive";
const rule3 = "3. Each living cell that has 3 living neighbors, stays alive";
const rule4 = "4. Each living cell that has 4 or more living neighbors, dies";
const rule5 = "5. Each dead cell that has exactly 3 living neighbors, becomes alive";

describe("Tick function alters the cells", () => {

  describe("Tick function, general tests", () => {

    it("Tick function returns an array", () => {
      expect(tick([]) instanceof Array).to.be.true;
    });

    it("Undefined throws an Error", () => {
      expect(() => tick(undefined).to.throw("undefined"));
    });

  });

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
      // TODO combine
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
        expect(result[1][2]).to.equal(1);
      });

      it("All cells are correct", () => {
        const result = tick(arr);
        expect(result[0][0]).to.equal(1);
        expect(result[0][1]).to.equal(0);
        expect(result[0][2]).to.equal(1);

        expect(result[1][0]).to.equal(0);
        expect(result[1][1]).to.equal(0);
        expect(result[1][2]).to.equal(1);

        expect(result[2][0]).to.equal(0);
        expect(result[2][1]).to.equal(0);
        expect(result[2][2]).to.equal(0);
      });

    });
  });
});
describe("The game function", () => {

  it("requires an array as parameter", () => {
    expect(() => gameOfLife(undefined, 1).to.throw("undefined"));
  });

  it("requires a number as parameter", () => {
    expect(() => gameOfLife([]).to.throw("undefined"));
  });

  it("returns a string", () => {
    async () => {
      try {
        const result = gameOfLife("glider.rle", 1);
        expect(typeof result).to.equal("string");
      } catch (err) {
        return console.error("readFile() failed", err);
      }
    };
  });

  // describe("returns the correct result for Glider pattern", async () => {
  //   it("with one iteration", () => {
  //     const result = await gameOfLife("glider.rle", 1);
  //     console.log("🚀 ~ file:  result", result.result);
  //     expect(true).to.equal(false);
  //   });
  // });

  describe("returns the correct result for Glider pattern", () => {
    it("with one iteration", () => {
      async () => {
        try {
          const result = gameOfLife("glider.rle", 1);
          expect(result).to.equal(-1);
          expect(true).to.equal(false);
          // done();
        } catch (err) {
          return console.error("readFile() failed", err);
        }
      };
    });
  });

});

describe("", () => {
  it("", () => {

  });
});