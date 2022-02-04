import { expect } from "chai";
import { Tetromino } from "../src/Tetromino.mjs";
import { getCrowdedBoard } from "./TestHelpers.mjs";

describe("Rotating falling tetrominoes in limited space", () => {

  let board;
  beforeEach(() => {
    board = getCrowdedBoard(8, 3);
  });


  it("initial setup is correct when other shapes exist at at board", () => {
    expect(board.toString()).to.equalShape(`
      OO....OO
      OO....OO
      IIIIIIII`
    );
  });

  it("Shape I is not rotated when there is no space to rotate", () => {
    board.drop(Tetromino.I_SHAPE);
    board.rotateLeft();
    expect(board.toString()).to.equalShape(`
      OOIIIIOO
      OO....OO
      IIIIIIII`
    );
  });

});