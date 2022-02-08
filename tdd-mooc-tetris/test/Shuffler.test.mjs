import { expect } from "chai";
import { Shuffler } from "../src/Shuffler.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("Tests for Shuffler", () => {

  let shuffler;

  beforeEach(() => {
    shuffler = new Shuffler();
  });

  it("it returns the correct data type", () => {
    const item = shuffler.get();
    expect(typeof item).to.equal("object");
    expect(item instanceof Tetromino).to.be.true;
  });

  it("it returns max 3 shapes", () => {
    let taken = new Set();

    for (let i = 0; i <= 10; i++) {
      taken.add(shuffler.get());
    }
    expect(taken.size).to.equal(3);
  });

  it("it returns T shape", () => {
    let taken = new Set();

    for (let i = 0; i <= 10; i++) {
      taken.add(shuffler.get());
    }
    expect(taken.has(Tetromino.T_SHAPE)).to.be.true;
  });

  it("it returns O shape", () => {
    let taken = new Set();

    for (let i = 0; i <= 10; i++) {
      taken.add(shuffler.get());
    }
    expect(taken.has(Tetromino.O_SHAPE)).to.be.true;
  });

  it("it returns I shape", () => {
    let taken = new Set();

    for (let i = 0; i <= 10; i++) {
      taken.add(shuffler.get());
    }
    expect(taken.has(Tetromino.I_SHAPE)).to.be.true;
  });

  it("returns a different shape on the second time", () => {
    const first = shuffler.get();
    const second = shuffler.get();

    expect(first.shape_enum).not.to.equal(second.shape_enum);
  });

  it("returns a different shape on the third time", () => {
    const first = shuffler.get();
    const second = shuffler.get();
    const third = shuffler.get();

    expect(third.shape_enum).not.to.equal(second.shape_enum);
    expect(third.shape_enum).not.to.equal(first.shape_enum);
  });


});