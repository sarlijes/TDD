import _ from "lodash";
import { expect } from "chai";
import { Shuffler } from "../src/Shufflebag.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("Tests for Shuffler", () => {

  let shuffler;

  beforeEach(() => {
    shuffler = new Shuffler();
  });

  it("it return the correct data type", () => {
    const item = shuffler.get();
    expect(typeof item).to.equal("object");
    expect(item instanceof Tetromino).to.be.true;
  });


});